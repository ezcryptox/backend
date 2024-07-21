const Notification = require('../model/notification');

const CATEGORIES = [
  {
    name: "Airdrops",
    icon: "https://static.poloniex.com/campaigns_airdrops.png"
  },
  {
    name: "New Coin Listings",
    icon: "https://static.poloniex.com/vip.png"
  },
  {
    name: "Polo Earn - Staking / Saving",
    icon: "https://static.poloniex.com/campaigns_airdrops.png"
  },
  {
    name: "Latest Announcements",
    icon: "https://static.poloniex.com/important_accouncements.png"
  },
  {
    name: "Wallet Maintenance Updates",
    icon: "https://static.poloniex.com/important_accouncements.png"
  },
  {
    name: "New IP Login",
    icon: "https://static.poloniex.com/account_security.png"
  },
]
async function getPaginatedNotifications(query, page, limit) {
  const options = {
    sort: { timestamp: -1 },
    limit: limit,
    skip: (page - 1) * limit
  };

  const [notifications, totalCount] = await Promise.all([
    Notification.find(query, null, options),
    Notification.countDocuments(query)
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return {
    notifications,
    currentPage: page,
    totalPages,
    totalCount
  };
}

async function getUserNotifications(req, res) {
  try {
    const userId = req.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const query = { type: 'USER', user_id: userId };
    const result = await getPaginatedNotifications(query, page, limit);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching user notifications:', error);
    res.status(500).json({ message: 'Error fetching user notifications' });
  }
}
async function markAllAsRead(req, res) {
  try {
    const userId = req.id;

    const result = await Notification.updateMany(
      { type: 'USER', user_id: userId, readStatus: 1 },
      { $set: { readStatus: 0 } }
    );

    res.status(200).json({ message: 'All unread notifications marked as read', modifiedCount: result.nModified });
  } catch (error) {
    console.error('Error marking notifications as read:', error);
    res.status(500).json({ message: 'Error marking notifications as read' });
  }
}

async function getPlatformNotifications(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const query = { type: 'PLATFORM' };
    const result = await getPaginatedNotifications(query, page, limit);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching platform notifications:', error);
    res.status(500).json({ message: 'Error fetching platform notifications' });
  }
}
function getIconForCategory(category) {
  const categoryObj = CATEGORIES.find(cat => cat.name.toLowerCase() === category.toLowerCase());
  return categoryObj ? categoryObj.icon : 'https://static.poloniex.com/important_accouncements.png';
}
async function addPlatformNotification(title, category, link) {
  try {
    const newNotification = new Notification({
      type: 'PLATFORM',
      category,
      title,
      link,
      icon: getIconForCategory(category),
      readStatus: 0,
    });

    await newNotification.save();
  } catch (error) {
    console.error('Error adding platform notification:', error);
    throw error;
  }
}
async function addUserNotification(user_id, title, content, link, category) {
  try {
    const newNotification = new Notification({
      type: 'USER',
      user_id,
      title,
      content,
      link,
      category,
      icon: getIconForCategory(category),
    });

    await newNotification.save();
  } catch (error) {
    console.error('Error adding user notification:', error);
    throw error;
  }
}
async function getUnreadNotificationCount(req, res) {
  try {
    const userId = req.id; // Assuming the user ID is available in req.id

    const unreadCount = await Notification.countDocuments({
      type: 'USER',
      user_id: userId,
      readStatus: 1
    });

    res.status(200).json({ unreadCount });
  } catch (error) {
    console.error('Error fetching unread notification count:', error);
    res.status(500).json({ message: 'Error fetching unread notification count' });
  }
}

async function addDummyNotifications() {
  const userId = '159289128199100';

  const dummyPlatformNotifications = [
    { title: 'New Airdrop', category: 'Airdrops', link: 'https://example.com/airdrop' },
    { title: 'New Coin Listing', category: 'New Coin Listings', link: 'https://example.com/new-coin' },
    { title: 'Staking Update', category: 'Polo Earn - Staking / Saving', link: 'https://example.com/staking' },
    { title: 'Announcement', category: 'Latest Announcements', link: 'https://example.com/announcement' },
    { title: 'Maintenance Update', category: 'Wallet Maintenance Updates', link: 'https://example.com/maintenance' },
    { title: 'Security Update', category: 'New IP Login', link: 'https://example.com/security' },
    { title: 'New Feature', category: 'Latest Announcements', link: 'https://example.com/feature' },
    { title: 'Service Downtime', category: 'Wallet Maintenance Updates', link: 'https://example.com/downtime' },
    { title: 'New Partnership', category: 'Latest Announcements', link: 'https://example.com/partnership' },
    { title: 'System Upgrade', category: 'Wallet Maintenance Updates', link: 'https://example.com/upgrade' },
  ];

  const dummyUserNotifications = [
    { title: 'Security Alert', content: 'New login detected from an unknown IP address. If this was not you, please secure your account immediately.', link: 'https://example.com/security', category: 'New IP Login' },
    { title: 'Wallet Maintenance', content: 'Scheduled maintenance on your wallet. Please ensure you have completed any necessary transactions before the maintenance period.', link: 'https://example.com/maintenance', category: 'Wallet Maintenance Updates' },
    { title: 'Airdrop Received', content: 'You have received a new airdrop. Check your wallet to see the new tokens.', link: 'https://example.com/airdrop', category: 'Airdrops' },
    { title: 'New Coin Available', content: 'A new coin has been listed on our platform. Check it out and start trading now.', link: 'https://example.com/new-coin', category: 'New Coin Listings' },
    { title: 'Staking Reward', content: 'You have received a new staking reward. Check your account to see the details.', link: 'https://example.com/staking', category: 'Polo Earn - Staking / Saving' },
    { title: 'Account Verification', content: 'Your account verification is complete. You can now access all features.', link: 'https://example.com/verification', category: 'New IP Login' },
    { title: 'Promotion Alert', content: 'You have a new promotion available. Check your account for more details.', link: 'https://example.com/promotion', category: 'Latest Announcements' },
    { title: 'Password Change', content: 'Your password has been changed successfully. If this was not you, please contact support immediately.', link: 'https://example.com/password', category: 'New IP Login' },
    { title: 'New Message', content: 'You have received a new message from support. Check your inbox for more details.', link: 'https://example.com/message', category: 'Latest Announcements' },
    { title: 'Transaction Alert', content: 'A new transaction has been made from your account. Check your transaction history for more details.', link: 'https://example.com/transaction', category: 'Wallet Maintenance Updates' },
  ];

  try {
    for (const notification of dummyPlatformNotifications) {
      await addPlatformNotification(notification.title, notification.category, notification.link);
    }

    for (const notification of dummyUserNotifications) {
      await addUserNotification(userId, notification.title, notification.content, notification.link, notification.category);
    }

    console.log('Dummy notifications added successfully');
  } catch (error) {
    console.error('Error adding dummy notifications:', error);
    throw error
  }
}

module.exports = {
  addPlatformNotification,
  addUserNotification,
  getUserNotifications,
  getPlatformNotifications,
  addDummyNotifications,
  getUnreadNotificationCount,
  markAllAsRead
};
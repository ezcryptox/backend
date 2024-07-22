const express = require('express');
const router = express.Router();
const { getUserNotifications, getPlatformNotifications, addDummyNotifications, getUnreadNotificationCount, markAllAsRead } = require('../controllers/notification');
const requireAuth = require('../middleware/requireAuth')

router.get('/user', requireAuth, getUserNotifications);
router.get('/read', requireAuth, markAllAsRead);
router.get('/unread-count', requireAuth, getUnreadNotificationCount);
router.get('/platform', getPlatformNotifications);

// POST route to add dummy notifications
router.post('/add-dummy', async (req, res) => {
  try {
    await addDummyNotifications();
    res.status(200).json({ message: 'Dummy notifications added successfully' });
  } catch (error) {
    console.error('Error adding dummy notifications:', error);
    res.status(500).json({ error: 'Failed to add dummy notifications' });
  }
});
module.exports = router;
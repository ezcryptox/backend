const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'ezcryptox777@gmail.com',
    pass: 'onud wfep kgbh czgt'
  },
});

const handleNodeMailer = (async(email, code)=>{
  let mailOptions = {
    from: 'admin',
    to: `${email}`,
    subject: 'Activate your Ezcrypto account with a verification code',
    html: `<div id=":mv" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwMTUxMzQxMzMzMDA0NDg4NSJd; 4:WyIjbXNnLWY6MTgwMTUxMzQxMzMzMDA0NDg4NSJd"><div id=":mu" class="a3s aiL msg110506762646520913"><u></u>
    <div style="background-color:transparent;margin:0;padding:0">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent">
            <tbody>
                <tr>
                    <td>
                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fff">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="m_110506762646520913row-content m_110506762646520913stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:#000;width:600px" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="m_110506762646520913column" width="100%" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table class="m_110506762646520913image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="width:100%;padding-right:0;padding-left:0">
                                                                        <div align="center" style="line-height:10px">
                                                                        </div>
                                                                      </td>
                                                                </tr>
                                                            </tbody>
                                                        </table></td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                </tr>
                            </tbody>
                        </table>

                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fff">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="m_110506762646520913row-content m_110506762646520913stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:#000;width:600px" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="m_110506762646520913column" width="100%" style="font-weight:400;text-align:left;background-color:#fff;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-left:20px;padding-right:20px;padding-top:20px">
                                                                        <div style="font-family:Arial,sans-serif">

                                                                            <div style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#616161;line-height:1.5">
                                                                                <p style="margin:0;font-size:16px;text-align:left"> <span style="font-size:16px"><span><span>Hello,&nbsp;</span></span></span></p>
                                                                                <p style="margin:0;font-size:16px"><span style="font-size:16px"> Welcome to Ezcryptox! </span></p>
                                                                                <p style="margin:0;font-size:16px"><span style="font-size:16px">  Before you get to trading, please confirm that "<a href="mailto:${email}" target="_blank">${email}</a>" is your email address by entering the activation code below: </span></p>
                                                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="padding-bottom:10px;padding-left:0px;padding-top:10px">
                                                                                                <div style="font-family:sans-serif">
                                                                                                    <div style="font-size:14px;color:#1a8f5c;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                                                        <p style="margin:0;font-size:14px;letter-spacing:5px"> <strong> <span style="font-size:26px">${code}</span></strong> </p>
                                                                                                    </div>
                                                                                                </div> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <p style="margin:0;font-size:16px"><span style="font-size:16px"> If you have any questions throughout the sign up process, we're happy to help! Please visit our Help Center or reach out to our support team. </span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px">
                                                                        <div style="font-family:sans-serif">
                                                                            <div style="font-size:14px;color:#616161;line-height:1.5;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                                <p style="margin:0;font-size:16px;text-align:left"><span style="font-size:16px">Sincerely,</span></p>
                                                                                <p style="margin:0;font-size:16px;text-align:left"><span style="font-size:16px">The Ezcryptox Team</span></p>
                                                                            </div>
                                                                        </div></td>
                                                                </tr>
                                                            </tbody>
                                                        </table> </td>
                                                </tr>
                                            </tbody>
                                        </table> </td>
                                </tr>
                            </tbody>
                        </table>

                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="m_110506762646520913row-content m_110506762646520913stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0;color:#000;background-color:#fafafa;width:600px" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="m_110506762646520913column" width="100%" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:15px">
                                                                        <div style="font-family:sans-serif">
                                                                            <div style="font-size:14px;color:#555;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                                <p style="margin:0;font-size:14px"> <span style="font-size:12px"><strong><span>Download our App and trade at anytime</span></strong></span></p>
                                                                            </div>
                                                                        </div></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="vertical-align:middle;color:#000;font-family:inherit;font-size:14px;padding-left:20px;padding-right:20px;text-align:left">
                                                                        <table cellpadding="0" cellspacing="0" role="presentation" align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:0;padding-right:5px"><a href="https://itunes.apple.com/us/app/poloniex/id1234141021?mt=8" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://itunes.apple.com/us/app/poloniex/id1234141021?mt%3D8&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw3yhL7bS2v1tVB-1kQjD0ML"><img src="https://ci3.googleusercontent.com/meips/ADKq_NbyHzz64VnXN3UBGlGc_fUyXPC8ztuQea7IMjk0HPqNjTnrr-U5aaj3EMv-KbWNJO9zvdMFksmVNLXGsBTNNXCoUqRlnIvj1YFMgHYTiZ1BO_h2oX-wsU7a8tZ7kj-XxUZi9ujm1eS4aZGJSwoKiIRUNKtcMv33QOKzs4bAds-u7JuK5Bx8D-iKgr9VHpIriPwereX0BWstyXQy-JqasHAWgw8U9w=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/app_1.png" alt="" height="32" width="96" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:5px;padding-right:5px"><a href="https://play.google.com/store/apps/details?id=com.plunien.poloniex" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.plunien.poloniex&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw2n-BG8b3WYyo7X7Kk-Q0Lb"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZR-ZTcXyTeP0E-ORXYimh0C_KHtdwjhA4kaYPg2b0MkCrsp7c2PMTd0nNIeoKHIyvdHWkUudWobaHknx9wrwRtQR1GNUhwOl2gfJLD1stUHJuWrkEwXei-JIGKmdQL47pYhEQGNW9pVbvIQxjz7LwHHvT3MwgI5WvNvRgmFKz3_kH0LaFkacrY0zGl3cZvy_K3yyNLktfZ7uSbLatoafxcznC-BGN7gQ=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/google_1.png" alt="" height="32" width="109" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:5px;padding-right:0"><a href="https://apps.poloniex.com/android/poloniex_android_latest.apk?v=email_ca9ee3a2eb1d4722a5f7af4e0790bf24" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://apps.poloniex.com/android/poloniex_android_latest.apk?v%3Demail_ca9ee3a2eb1d4722a5f7af4e0790bf24&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw3wGIG_9TdycDEgTutqnTRN"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZckAX0bV3Fjj15ZjlTveuTrBV-hUj5aWQNfzn5cdcTWCB7T5MX2Yl9Nr4AfQGT0RrhNSlPN7c2ELTP3b2UCCCQ_Iar-x2H9o3qsoXfxkX5RrF0XQ0W4LmBR_9fj1MTC87hLbNtUgv1enEU9eiTxDEV--FZtWjVtm3up7hD75n15QI1wufRFnq3i39rfgxMarZjgMq3mz4lN7qt6Rpund_XHNoppuJO5_0=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/android_1.png" alt="" height="32" width="109" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:20px;padding-top:15px">
                                                                        <div style="font-family:sans-serif">
                                                                            <div style="font-size:14px;color:#555;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                                <p style="margin:0;font-size:14px"><span style="font-size:12px"><strong><span>Join the community and keep updated</span></strong></span></p>
                                                                            </div>
                                                                        </div></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="vertical-align:middle;color:#000;font-family:inherit;font-size:14px;letter-spacing:0;padding-left:20px;padding-right:20px;text-align:left">
                                                                        <table cellpadding="0" cellspacing="0" role="presentation" align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:0;padding-right:8px"><a href="https://twitter.com/Poloniex" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/Poloniex&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw0o4DrW31u1lIiioZckn9ty"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZPLwIcyvjCHFzbnB1PK_rWdULrrEIgtsOAFiwlVxxUb5pHAocGIo6z9YgMMtzvvDZPtVK9xtAiOlk5LU2TzQm5okxvCy62MA_G9pI74mCh82FgJGgPe_sAp99vC3b-xFr6k5SF4eZ18pFZCoyB7YY4jNyo-0ogAdqHVlUL3s_TmKssUjPNBNGrbxgAgPWoX6DkJYaKKPwIcRvhKYcTT-EFgTcpduTE=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/twitter.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px"><a href="https://twitter.com/PoloSupport" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/PoloSupport&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw1W71TOSjGfGHpCh68VdcaC"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYvplObnTnhp-qX9OOgle8XbmUynB-LtEVUvi7uqBsbfkdEMElUW4RWphNjjFnCt2lot1qpCtlYzo0MBTP4ufzn5uHjb1CzRE4In2tFNtwlgdlNkxXPplLWbCnB8iMa5Hwp4bDd68r8pMh7dDd11hxbZmtoZMJSHUlSybxPN7bdNajMUwxouEvqMKX9p-fANqrqJIh677qPO3LiejGp953Wgy46wdHSs5Lc1jbYjw=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/Twittersupport.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px"><a href="https://t.me/poloniexenglish" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://t.me/poloniexenglish&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw121PERHKEHfhSwGnX2hv4l"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZmPT7HREKQ9joI_ytQ58xmodjac7RqYL8onbqSM-TBq6342mk5oaETv-nGpPoE803OvrGDquLA-_vfXJEGHimqXljZDFUsZhh6_iAJclMItfZ14t93tYn2knB7SMaBPvVrQMoyYP0oWODgBzXTMrfxjr3OLQSEYxR4lkNge806b9Q_E0_wBqjBwAYLGgcMM8FjyIogTJpSO_VCVsas-DxZhJYp=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/tele.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px"><a href="https://www.reddit.com/r/poloniex" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.reddit.com/r/poloniex&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw0Ih7415SGd69hlCBQgj0L8"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYVino6MtGT-md055lD3EB2ayrBr6t1DQAS583M4Z2o8eJ4_KjS1dCBwPYHrTS6sQpxIhj9JMNP1L17EUwWNnS94Lpraw6Evfw2oRhcdk11iwBHnSDMaXR9r1pu_Zln5-C5kG7UvqHxsDDWl3F_1fIJ55HNdsfDKQk1HyTuf_Dyq1KCpl-h91cu9HMgeZgwJJ-Kk4wkFndkC3AYvbM5Fw1nEXVVveo=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/reddit.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px"><a href="https://poloniex.com/blog" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://poloniex.com/blog&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw2SJc5DUbOIH9qjKYZrHb8J"><img src="https://ci3.googleusercontent.com/meips/ADKq_Nbu2Hdvv9SQ4tkZgDNho5PtZQh1MOZ5OQDqC9fK21fBUtp-rTVi3xuZrdLCq3DTdH3SaXm8MGmkN1-_jwAbikL9xMoTRfZLExuAs3orljmA4xwma5C9UseP52_4tz9T3WgsPW67p_Py02NiHL_eU4a1_kP19lFtArnkuQGa1vhule1NpeHQtrhl_QAVzRiPpkIEk_F5mzujJMoxzt3IRN9yPPPa=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/blog.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px"><a href="https://www.facebook.com/poloniexpage" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/poloniexpage&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw1jDBnYiHI7EUOxEJPj4wtq"><img src="https://ci3.googleusercontent.com/meips/ADKq_NY2pFwDVQQvb1lzkykHnUueCiC9vrARQsI6EgQ5IOA3QwmzImaS6SXFUlfOsCsrcVt8UA4tE2LBQhZPH9vn887LiweBgSVrHix35yWo6tLu2_IGpKlcdGqZ2yJkafFttaEJkLvHnuIrQFdK_FIliNyB9fFNaW8b6FodCOhuuMgyBGPFs1kBa3rbI1KLBE8w4ADocNgicfBCALCdx1wom07sjKMg=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/face.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                    <td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0"><a href="https://www.instagram.com/poloniexofficial" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/poloniexofficial&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw3oMzD0U-qFl06sTvLmYgRJ"><img src="https://ci3.googleusercontent.com/meips/ADKq_Na4hk9U_8S9iSmxpa2IwZOUPuXeio3mEnLxVvG-U3yRtr6g4b6ghizVakw1iu7p0ksxG2P0AdzShp_zPPdRdeG1zCXFWxQ1b29cdU4yTWVOA2AdJvzUwSIHEKNn4drDMMQgquDlyELIUKK23FdEXQvN5vudcLhzZf1C8QsoHRFrJIEzJ8r_XVcOFuF50MpxWLO7Gkxz48gH4EnlY_GO_eRWEK4=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9fd545f71bf74afc84600c9176b47ffa/ins.png" alt="" height="32" width="32" align="center" style="display:block;height:auto;margin:0 auto;border:0" class="CToWUd" data-bit="iit"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:20px">
                                                                        <div style="font-family:sans-serif">
                                                                            <div style="font-size:14px;color:#555;line-height:1.5;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                                <p style="margin:0;font-size:14px"><span style="font-size:12px">This is an automated email. Please do not reply. <a href="https://support.poloniex.com/hc/requests/new" rel="noopener" style="text-decoration:underline;color:#1a8f5c" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://support.poloniex.com/hc/requests/new&amp;source=gmail&amp;ust=1718143650291000&amp;usg=AOvVaw24QcLcNtf0su8sTyVanVs2">Contact Support</a> if you need assistance.</span></p>
                                                                            </div>
                                                                        </div></td>
                                                                </tr>
                                                            </tbody>
                                                        </table> </td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                </tr>
                            </tbody>
                        </table></td>
                </tr>
            </tbody>
        </table><div class="yj6qo"></div><div class="adL">

        </div></div><div class="adL">

    </div>
</div>
    </div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
})


module.exports = { handleNodeMailer }
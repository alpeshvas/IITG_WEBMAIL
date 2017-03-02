// ==UserScript==
// @name        archive
// @namespace   https://webmail.iitg.ernet.in/src/right_main.php?PG_SHOWALL=1&use_mailbox_cache=1&startMessage=1&mailbox=INBOX
// @include     about:addons
// @version     1
// @grant       none
// ==/UserScript==
CheckAllINBOX();
document.getElementsByName("archiveButton")[0].click();
CheckAllINBOX();
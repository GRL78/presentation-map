(()=>{"use strict";const e="popupOfficeZone",o="popupEventZone",n="popupSchoolZone",a="popupTCMZone";let t;function r(){void 0!==t&&(t.close(),t=void 0)}WA.room.onEnterZone(e,(()=>{t=WA.ui.openPopup("popUpOffice","Create your own virtual office in WorkAdventure, it's easy !",[{label:"See the pricing",className:"normal",callback:()=>{WA.nav.openTab("https://workadventu.re/pricing")}},{label:"Getting Started",className:"normal",callback:()=>{WA.nav.openTab("https://workadventu.re/getting-started")}}])})),WA.room.onEnterZone(o,(()=>{t=WA.ui.openPopup("popUpEvent","You can create your own Event in WorkAdventure",[{label:"See the event page",className:"normal",callback:()=>{WA.nav.openTab("https://workadventu.re/events")}}])})),WA.room.onEnterZone(a,(()=>{t=WA.ui.openPopup("popUpTCM","Come meet the WorkAdventure team in our office !  We are open from 9 am to 7pm CEST.",[])})),WA.room.onEnterZone(n,(()=>{t=WA.ui.openPopup("popUpSchool","WorkAdventure is free for teachers a the moment ! Take advantage of our offer ",[{label:"See the offer",className:"normal",callback:()=>{WA.nav.openTab("https://workadventu.re/school-offer")}}])})),WA.room.onLeaveZone(n,r),WA.room.onLeaveZone(a,r),WA.room.onLeaveZone(o,r),WA.room.onLeaveZone(e,r)})();
//# sourceMappingURL=script.js.map
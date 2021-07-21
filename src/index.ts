/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
const zoneOfficeName = "popupOfficeZone";
const zoneEventName = "popupEventZone";
const zoneSchoolName = "popupSchoolZone";
const zoneTCMName = "popupTCMZone";

const urlPricing = "https://workadventu.re/pricing";
const urlSchoolOffer = "https://workadventu.re/school-offer";
const urlEvent = "https://workadventu.re/events";
const urlGettingStarted = "https://workadventu.re/getting-started";

let currentPopup: any = undefined;

WA.room.onEnterZone(zoneOfficeName, () => {
    currentPopup =  WA.ui.openPopup("popUpOffice","Create your own virtual office in WorkAdventure, it's easy !",[
        {
            label: "See the pricing",
            className: "normal",
            callback: (() => {
                WA.nav.openTab(urlPricing);
            })
        },
        {
            label : "Getting Started",
            className :"normal",
            callback : (() => {
                WA.nav.openTab(urlGettingStarted);
            })

        }]);
})

WA.room.onEnterZone(zoneEventName, () => {
    currentPopup =  WA.ui.openPopup("popUpEvent","You can create your own Event in WorkAdventure",[
        {
            label: "See the event page",
            className: "normal",
            callback: (() => {
                WA.nav.openTab(urlEvent);
            })
        }]);
})

WA.room.onEnterZone(zoneTCMName, () => {
    currentPopup =  WA.ui.openPopup("popUpTCM","Come meet the WorkAdventure team in our office ! " +
        " We are open from 9 am to 7pm CEST.",[]);
})


WA.room.onEnterZone(zoneSchoolName, () => {
    currentPopup =  WA.ui.openPopup("popUpSchool","WorkAdventure is free for teachers a the moment ! Take advantage of our offer ",[
        {
            label: "See the offer",
            className: "normal",
            callback: (() => {
                WA.nav.openTab(urlSchoolOffer);
            })
        }]);
})

WA.room.onLeaveZone(zoneSchoolName, closePopUp)

WA.room.onLeaveZone(zoneTCMName, closePopUp)

WA.room.onLeaveZone(zoneEventName, closePopUp)

WA.room.onLeaveZone(zoneOfficeName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

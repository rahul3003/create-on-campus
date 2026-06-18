import { n as e, t } from "./rolldown-runtime.Bawp8BQ-.mjs";
import {
  C as n,
  E as r,
  M as i,
  N as a,
  O as o,
  T as s,
  c,
  g as l,
  j as u,
  k as d,
  l as f,
  o as p,
  s as m,
  v as h,
} from "./react.BC_N61as.mjs";
import { B as g, F as _, S as v, a as y, r as b, t as x } from "./motion.CbDrufkU.mjs";
import {
  $ as S,
  C,
  D as w,
  H as T,
  I as E,
  L as D,
  O,
  P as k,
  Q as A,
  _ as j,
  a as M,
  at as N,
  b as P,
  dt as F,
  f as I,
  ft as L,
  g as R,
  gt as z,
  ht as B,
  i as V,
  it as H,
  l as U,
  lt as ee,
  mt as te,
  nt as ne,
  ot as re,
  pt as W,
  r as G,
  rt as ie,
  s as ae,
  st as oe,
  t as se,
  ut as ce,
  v as le,
  w as ue,
  x as K,
  y as de,
  yt as q,
} from "./framer.Dbwxx7XS.mjs";
import {
  a as fe,
  c as pe,
  d as me,
  f as he,
  g as ge,
  h as _e,
  i as ve,
  l as ye,
  m as be,
  n as xe,
  o as Se,
  p as Ce,
  r as we,
  s as Te,
  t as Ee,
  u as De,
} from "./UW1s8Kd16.CYAi1RCC.mjs";
import { i as Oe, r as ke } from "./shared-lib.CFe5fBXv.mjs";
import { a as Ae, i as je, n as Me, r as Ne, t as Pe } from "./Magnetic.Ddecy0hv.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./HETGTyytP.DAbUeksh.mjs";
import { n as ze, r as Be } from "./eQrbBJrm8.CfFqiU8L.mjs";
var Ve,
  He,
  Ue,
  We = t(() => {
    (p(),
      n(),
      (Ve = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (He = {
        ...Ve,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (Ue = l((e, t) => c(`div`, { style: He, ref: t }))));
  }),
  Ge = t(() => {
    We();
  }),
  Ke,
  qe,
  Je = t(() => {
    qe = (e) => (
      (Ke ||= e.forwardRef(function (t, n) {
        return e.createElement(
          `svg`,
          {
            width: `100%`,
            height: `1.5em`,
            strokeWidth: 1.5,
            viewBox: `0 0 24 24`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            color: `currentColor`,
            ref: n,
            ...t,
          },
          e.createElement(`path`, {
            d: `M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          })
        );
      })),
      Ke
    );
  }),
  Ye = t(() => {
    (Je(), Je());
  });
function Xe(e, t, n = ``, r, i) {
  let a = d(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? Qe(e, t);
  }, [r, n]);
  return t ? r : a;
}
var Ze,
  Qe,
  $e = t(() => {
    (n(),
      T(),
      (Ze = {
        onClick: { type: M.EventHandler },
        onMouseDown: { type: M.EventHandler },
        onMouseUp: { type: M.EventHandler },
        onMouseEnter: { type: M.EventHandler },
        onMouseLeave: { type: M.EventHandler },
      }),
      (Qe = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function J(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: i,
      iconSelection: o,
      onClick: l,
      onMouseDown: d,
      onMouseUp: f,
      onMouseEnter: p,
      onMouseLeave: m,
      mirrored: h,
    } = e,
    g = r(!1),
    _ = Xe(et, n, i, o, nt),
    [v, y] = a(_ === `Home` ? qe(s) : null);
  async function b() {
    try {
      let e = await import(`${tt}${_}.js@0.0.11`);
      g.current && y(e.default(s));
    } catch {
      g.current && y(null);
    }
  }
  u(
    () => (
      (g.current = !0),
      b(),
      () => {
        g.current = !1;
      }
    ),
    [_]
  );
  let x = de.current() === de.canvas ? c(Ue, {}) : null;
  return c(`div`, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: d,
    onMouseUp: f,
    children: v
      ? c(v, {
          size: `100$%`,
          style: { width: `100%`, height: `100%`, transform: h ? `scale(-1, 1)` : void 0 },
          color: t,
        })
      : x,
  });
}
var et,
  tt,
  nt,
  rt = t(() => {
    (p(),
      n(),
      T(),
      Ge(),
      Ye(),
      $e(),
      (et =
        `Accessibility.AccessibilitySign.AccessibilityTech.Activity.AddCircledOutline.AddDatabaseScript.AddFolder.AddFrame.AddHexagon.AddKeyframe.AddKeyframeAlt.AddKeyframes.AddLens.AddPage.AddPinAlt.AddSelection.AddSquare.AddToCart.AddUser.Airplane.AirplaneHelix.AirplaneHelix45Deg.AirplaneOff.AirplaneRotation.Airplay.Alarm.Album.AlbumCarousel.AlbumList.AlbumOpen.AlignBottomBox.AlignCenter.AlignJustify.AlignLeft.AlignLeftBox.AlignRight.AlignRightBox.AlignTopBox.Antenna.AntennaOff.AntennaSignal.AppNotification.Apple.AppleHalf.AppleHalfAlt.AppleImac2021.AppleImac2021Side.AppleSwift.ArSymbol.Archery.Archive.AreaSearch.ArrowArchery.ArrowDown.ArrowDownCircled.ArrowLeft.ArrowLeftCircled.ArrowRight.ArrowRightCircled.ArrowSeparate.ArrowUnion.ArrowUnionVertical.ArrowUp.ArrowUpCircled.Asana.Attachment.AutoFlash.Bag.BasketBall.BasketBallAlt.BasketballField.Battery25.Battery50.Battery75.BatteryCharging.BatteryEmpty.BatteryFull.BatteryIndicator.BatteryWarning.BeachBag.BeachBagBig.Bell.BellNotification.BellOff.Bicycle.Bin.BinAdd.BinFull.BinHalf.BinMinus.Bluetooth.Bold.BoldSquareOutline.BookmarkCircled.BookmarkEmpty.BorderBl.BorderBottom.BorderBr.BorderInner.BorderLeft.BorderOut.BorderRight.BorderTl.BorderTop.BorderTr.BounceLeft.BounceRight.BowlingBall.Box.BoxIso.BoxingGlove.BubbleDownload.BubbleError.BubbleIncome.BubbleOutcome.BubbleSearch.BubbleStar.BubbleUpload.BubbleWarning.Building.BusOutline.BusStop.Calculator.Calendar.Camera.Cancel.CarOutline.Cart.CartAlt.Cash.Cell4X4.CenterAlign.ChatAdd.ChatBubble.ChatBubbleCheck.ChatBubbleCheck1.ChatBubbleEmpty.ChatBubbleError.ChatBubbleQuestion.ChatBubbleTranslate.ChatBubbleWarning.ChatLines.ChatRemove.Check.CheckCircledOutline.Chocolate.Chromecast.ChromecastActive.Church.ChurchAlt.CinemaOld.Circle.City.ClockOutline.Closet.Cloud.CloudBookAlt.CloudCheck.CloudDesync.CloudDownload.CloudError.CloudSunny.CloudSync.CloudUpload.Code.Codepen.Coin.CollageFrame.Collapse.ColorFilter.ColorPicker.ColorPickerEmpty.Combine.CompactDisc.Compress.CompressLines.Computer.ControlSlider.Copy.Copyright.CornerBottomLeft.CornerBottomRight.CornerTopLeft.CornerTopRight.Cpu.CpuWarning.CrackedEgg.CreativeCommons.CreditCard.CreditCard2.Crop.CropRotateBl.CropRotateBr.CropRotateTl.CropRotateTr.Css3.CursorPointer.Cut.CutAlt.Cycling.DashFlag.Dashboard.DashboardDots.DashboardSpeed.DataTransferBoth.DataTransferCheck.DataTransferDown.DataTransferUp.DataTransferWarning.DatabaseBackup.DatabaseExport.DatabaseMonitor.DatabaseRestore.DatabaseScript.DatabaseSettings.DatabaseStar.DatabaseStats.Db.DbCheck.DbError.DbSearch.DbStar.DbWarning.DeCompress.DeleteCircledOutline.DesignPencil.Dialpad.Display4K.DivideSelection1.DivideSelection2.DocSearch.DocSearchAlt.DocStar.DocStarAlt.Dollar.DomoticIssue.Donate.DoubleCheck.DownRoundArrow.Download.DragHandGesture.Drawer.Dribbble.Droplet.DropletHalf.EaseIn.EaseInControlPoint.EaseInOut.EaseOut.EaseOutControlPoint.Edit.EditPencil.Egg.Eject.ElectronicsChip.Emoji.EmojiBall.EmojiBlinkLeft.EmojiBlinkRight.EmojiLookBottom.EmojiLookLeft.EmojiLookRight.EmojiLookTop.EmojiQuite.EmojiReally.EmojiSad.EmojiSatisfied.EmojiSingLeft.EmojiSingLeftNote.EmojiSingRight.EmojiSingRightNote.EmojiSurprise.EmojiSurpriseAlt.EmojiTalkingAngry.EmojiTalkingHappy.EmojiThinkLeft.EmojiThinkRight.EmptyPage.Enlarge.EnlargeRoundArrow.Euro.EuroSquare.EvCharge.EvChargeAlt.EvPlug.EvPlugCharging.EvPlugError.EvStation.Exclude.Expand.ExpandLines.EyeAlt.EyeClose.EyeEmpty.EyeOff.FaceId.Facebook.FacebookSquared.Farm.FastArrowDown.FastArrowDownBox.FastArrowLeft.FastArrowLeftBox.FastArrowRight.FastArrowRightBox.FastArrowTop.FastArrowUpBox.FastBottomCircle.FastLeftCircle.FastRightCircle.FastTopCircle.Female.Figma.FileNotFound.Filter.FilterAlt.Finder.Fingerprint.FingerprintCircled.FingerprintCircledOk.FingerprintPhone.FingerprintScan.FingerprintSquared.Fishing.Flare.Flash.FlashOff.Flip.FlipReverse.Flower.Fog.Folder.FolderAlert.FontSize.Football.FootballBall.ForwardOutline.Frame.FrameAlt.FrameAltEmpty.FrameSelect.FrameSimple.FrameTool.Fridge.Fx.Garage.Gas.GasTank.GasTankDrop.Gift.GitBranch.GitCommit.GitHub.GitHubOutline.GitLabFull.GitMerge.GlassEmpty.GlassHalf.GlassHalfAlt.Glasses.Golf.Google.GoogleCircled.GoogleDocs.GoogleDrive.GoogleDriveCheck.GoogleDriveSync.GoogleDriveWarning.GoogleHome.GoogleOne.Gps.GraphDown.GraphUp.GridAdd.GridMinus.GridRemove.Group.Gym.HalfMoon.HandBrake.Handbag.HardDrive.Hat.Hd.Hdr.Headset.HeadsetCharge.HeadsetHelp.HeadsetIssue.HealthShield.Healthcare.Heart.HeavyRain.Heptagon.HerSlips.HesaWarningOutline.Hexagon.HexagonAlt.HighPriority.HistoricShield.HistoricShieldAlt.Home.HomeAlt.HomeAltSlim.HomeAltSlimHoriz.HomeHospital.HomeSimple.HomeSimpleDoor.HomeUser.Hospital.HospitalSign.Hourglass.Html5.Iconoir.Import.Industry.InfoEmpty.InputField.InputSearch.Instagram.Intersect.IntersectAlt.IosSettings.IrisScan.Italic.ItalicSquareOutline.Journal.JournalPage.KeyAlt.KeyAltBack.KeyAltMinus.KeyAltPlus.KeyAltRemove.Keyframe.KeyframeAlignCenter.KeyframePosition.Keyframes.KeyframesCouple.LabelOutline.Lamp.Language.Laptop.LaptopCharging.LaptopFix.LaptopIssue.LargeSuitcase.LayoutLeft.LayoutRight.Leaderboard.LeaderboardStar.LeftRoundArrow.Lens.Lifebelt.LightBulb.LightBulbOff.LightBulbOn.LineSpace.Linear.Link.LinkedIn.List.LoadActionFloppy.Lock.LockKey.LogDenied.LogIn.LogOut.LongArrowDownLeft.LongArrowDownRight.LongArrowLeftDown.LongArrowLeftUp.LongArrowRightDown.LongArrowRightUp.LongArrowRightUp1.LongArrowUpLeft.LongArrowUpRight.LotOfCash.MacControlKey.MacDock.MacOptionKey.MacOsWindow.Mail.MailOpened.Male.Map.MapIssue.MapsArrow.MapsArrowDiagonal.MapsArrowIssue.MapsGoStraight.MapsTurnBack.MapsTurnLeft.MapsTurnRight.MaskSquare.Maximize.Medal.Medal1St.Medium.Megaphone.Menu.MenuScale.Message.MessageAlert.MessageText.Metro.Mic.MicAdd.MicCheck.MicMute.MicRemove.MicSpeaking.MicWarning.Minus.Minus1.MinusHexagon.MinusPinAlt.MinusSquare.MissingFont.ModernTv.ModernTv4K.MoneySquare.MoonSat.MoreHoriz.MoreVert.MouseButtonLeft.MouseButtonRight.MouseScrollWheel.MoveDown.MoveLeft.MoveRight.MoveRuler.MoveUp.Movie.MultiBubble.MultiMacOsWindow.MultiWindow.MultiplePages.MultiplePagesAdd.MultiplePagesDelete.MultiplePagesEmpty.MultiplePagesRemove.Music1.Music1Add.Music2.Music2Add.NavArrowDown.NavArrowLeft.NavArrowRight.NavArrowUp.Navigator.NavigatorAlt.Network.NetworkAlt.NetworkLeft.NetworkRight.NoBattery.NoCoin.NoCreditCard.NoLock.NoSmoking.Notes.Octagon.OilIndustry.OpenInBrowser.OpenInWindow.OpenVpn.OrangeHalf.OrangeSlice.OrangeSliceAlt.Page.PageFlip.PageSearch.PageStar.Palette.PanoramaEnlarge.PanoramaReduce.Pants.PantsAlt.PasswordCursor.PasswordError.PasswordPass.PauseOutline.PcMouse.PenConnectBluetooth.PenConnectWifi.PenTablet.PenTabletConnectUsb.PenTabletConnectWifi.Pentagon.Percentage.PercentageRound.PercentageSquare.PharmacyCircledCross.PharmacySquaredCross.Phone.PhoneAdd.PhoneDelete.PhoneDisabled.PhoneIncome.PhoneOutcome.PhonePaused.PhoneRemove.Pin.PinAlt.PizzaSlice.Planet.PlanetAlt.PlanetSat.PlayOutline.Playlist.PlaylistAdd.PlaylistPlay.PlugTypeA.PlugTypeC.PlugTypeG.PlugTypeL.Plus.Pocket.Position.PositionAlign.Pound.PrecisionTool.Printer.PrinterAlt.PrintingPage.PriorityDown.PriorityUp.ProfileCircled.Prohibition.QuestionMark.QuestionMarkCircle.Rain.ReceiveDollars.ReceiveEuros.ReceivePounds.ReceiveYens.Redo.RedoAction.RedoCircle.Reduce.ReduceRoundArrow.Refresh.RefreshCircular.RefreshDouble.ReminderHandGesture.RemoveDatabaseScript.RemoveEmpty.RemoveFolder.RemoveFrame.RemoveFromCart.RemoveKeyframe.RemoveKeyframeAlt.RemoveKeyframes.RemovePage.RemovePinAlt.RemoveSelection.RemoveSquare.RemoveUser.Repeat.RepeatOnce.ReportColumns.Reports.RewindOutline.Rhombus.RightRoundArrow.Rings.RotateCameraLeft.RotateCameraRight.RssFeed.RssFeedSquared.Ruler.RulerAdd.RulerCombine.RulerRemove.Running.Sandals.SaveActionFloppy.SaveFloppyDisk.ScaleFrameEnlarge.ScaleFrameReduce.Scanning.Scarf.Scissor.ScissorAlt.SeaAndSun.SeaWaves.Search.SearchFont.SecurityPass.Selection.SelectiveTool.SendDollars.SendEuros.SendPounds.SendYens.Server.ServerConnection.Settings.SettingsCloud.SettingsProfiles.ShareAndroid.ShareIos.Shield.ShieldAdd.ShieldAlert.ShieldAlt.ShieldBroken.ShieldCheck.ShieldCross.ShieldDownload.ShieldEye.ShieldLoading.ShieldMinus.ShieldQuestion.ShieldSearch.ShieldUpload.Shop.ShopAlt.ShoppingBag.ShoppingBagAdd.ShoppingBagAlt.ShoppingBagArrowDown.ShoppingBagArrowUp.ShoppingBagCheck.ShoppingBagIssue.ShoppingBagRemove.ShoppingCode.ShoppingCodeCheck.ShoppingCodeError.ShortPants.ShortPantsAlt.Shuffle.SimpleCart.SingleTapGesture.Skateboard.Skateboarding.SkipNextOutline.SkipPrevOutline.SmallShop.SmallShopAlt.SmartphoneDevice.Smoking.Snow.SnowFlake.Soap.SoccerBall.SortDown.SortUp.SoundHigh.SoundLow.SoundMin.SoundOff.SpockHandGesture.Square.StarDashed.StarHalfDashed.StarOutline.StatDown.StatUp.StatsReport.StatsSquareDown.StatsSquareUp.Stretching.StyleBorder.Substract.Suggestion.SunLight.Swimming.SwipeDownGesture.SwipeLeftGesture.SwipeRightGesture.SwipeUpGesture.SwitchOffOutline.SwitchOnOutline.SystemRestart.SystemShut.Table.Table2Columns.TableRows.Telegram.TelegramCircled.TennisBall.TennisBallAlt.TerminalOutline.TerminalSimple.Text.TextAlt.TextSize.ThreeStars.Thunderstorm.TikTok.Timer.TimerOff.Tower.TowerCheck.TowerNoAccess.TowerWarning.Trademark.TrainOutline.Tram.TransitionBottom.TransitionLeft.TransitionRight.TransitionTop.Translate.Trash.Treadmill.Trekking.Trello.Triangle.TriangleFlag.TriangleFlagCircle.TriangleFlagFull.Trophy.Tunnel.Tv.TvFix.TvIssue.Twitter.TwitterVerifiedBadge.Type.UmbrellaFull.Underline.Undo.UndoAction.UndoCircle.Union.UnionAlt.UnionHorizAlt.Unity.Unity5.UpRoundArrow.Upload.UploadSquareOutline.Usb.User.UserBag.UserCart.UserCircleAlt.UserScan.UserSquareAlt.VerifiedBadge.VerifiedUser.VideoCamera.VideoCameraOff.ViewColumns2.ViewColumns3.ViewGrid.ViewStructureDown.ViewStructureUp.Voice.VoiceCircled.VoiceCircledLock.VoiceError.VoiceOk.VoicePhone.VoiceScan.VoiceSquared.VrSymbol.Waist.Walking.WarningSquareOutline.WebWindow.WebWindowClose.Weight.WeightAlt.WhiteFlag.Wifi.WifiIssue.WifiOff.WifiSignalNone.Wind.WrapText.Wristwatch.Yen.YenSquare.Yoga.YouTube.ZoomIn.ZoomOut`.split(
          `.`
        )),
      (tt = `https://framer.com/m/iconoir-icons/`),
      (nt = et.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (J.displayName = `Iconoir`),
      (J.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `Home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        mirrored: !1,
      }),
      ue(J, {
        selectByList: {
          type: M.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: J.defaultProps.selectByList,
        },
        iconSelection: {
          type: M.Enum,
          options: et,
          defaultValue: J.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Iconoir site](https://iconoir.com/)`,
        },
        iconSearch: {
          type: M.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: M.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: J.defaultProps.mirrored,
        },
        color: { type: M.Color, title: `Color`, defaultValue: J.defaultProps.color },
        ...Ze,
      }));
  }),
  it,
  at,
  ot,
  st = t(() => {
    (T(),
      O.loadFonts([`GF;Inter-500`, `GF;Inter-700`]),
      (it = [
        {
          family: `Inter`,
          style: `normal`,
          url: `https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2`,
          weight: `500`,
        },
        {
          family: `Inter`,
          style: `normal`,
          url: `https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2`,
          weight: `700`,
        },
      ]),
      (at = [
        `.framer-lc1NM .framer-styles-preset-po9ocu:not(.rich-text-wrapper), .framer-lc1NM .framer-styles-preset-po9ocu.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, #262c37); --framer-text-decoration: none; --framer-text-transform: none; }`,
        `@media (max-width: 1247px) and (min-width: 810px) { .framer-lc1NM .framer-styles-preset-po9ocu:not(.rich-text-wrapper), .framer-lc1NM .framer-styles-preset-po9ocu.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, #262c37); --framer-text-decoration: none; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-lc1NM .framer-styles-preset-po9ocu:not(.rich-text-wrapper), .framer-lc1NM .framer-styles-preset-po9ocu.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, #262c37); --framer-text-decoration: none; --framer-text-transform: none; } }`,
      ]),
      (ot = `framer-lc1NM`));
  });
function ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt = t(() => {
    (p(),
      T(),
      x(),
      n(),
      st(),
      (lt = { ezUCmANCz: { hover: !0 } }),
      (ut = [`ezUCmANCz`, `Lgd9rtgPk`]),
      (dt = `framer-a4b5W`),
      (ft = { ezUCmANCz: `framer-v-s0mv3t`, Lgd9rtgPk: `framer-v-hsv3th` }),
      (pt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (mt = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (ht = v(i)),
      (gt = { Active: `Lgd9rtgPk`, Inactive: `ezUCmANCz` }),
      (_t = ({ height: e, id: t, tap: n, title: r, width: i, ...a }) => ({
        ...a,
        mAoNSCBTM: r ?? a.mAoNSCBTM ?? `Monthly Billing`,
        s3IR1zPWe: n ?? a.s3IR1zPWe,
        variant: gt[a.variant] ?? a.variant ?? `ezUCmANCz`,
      })),
      (vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (yt = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              mAoNSCBTM: d,
              s3IR1zPWe: f,
              ...p
            } = _t(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = L({
              cycleOrder: ut,
              defaultVariant: `ezUCmANCz`,
              enabledGestures: lt,
              variant: u,
              variantClassNames: ft,
            }),
            O = vt(e, D),
            { activeVariantCallback: k, delay: j } = A(m),
            M = k(async (...e) => {
              if ((T({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            P = r(null),
            F = h(),
            I = [ot];
          return (
            S(),
            c(b, {
              id: l ?? F,
              children: c(ht, {
                animate: D,
                initial: !1,
                children: c(mt, {
                  value: pt,
                  children: c(v.button, {
                    ...p,
                    ...y,
                    className: w(dt, ...I, `framer-s0mv3t`, s, g),
                    "data-framer-name": `Inactive`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: O,
                    layoutId: `ezUCmANCz`,
                    onTap: M,
                    ref: t ?? P,
                    style: {
                      backgroundColor: `var(--token-a21c5608-6f6d-44b8-a4dd-3ec4d069f1f6, rgb(247, 247, 248))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `none`,
                      ...o,
                    },
                    variants: {
                      "ezUCmANCz-hover": {
                        backgroundColor: `var(--token-c53d836b-5706-468a-b8e6-ae61d5338acb, rgb(235, 236, 237))`,
                      },
                      Lgd9rtgPk: {
                        backgroundColor: `var(--token-2546f2ec-502d-4b32-8634-ef8a4d8c3ed0, rgb(255, 255, 255))`,
                        boxShadow: `0px 1px 3px 0px rgba(52, 58, 75, 0.16)`,
                      },
                    },
                    ...ct(
                      {
                        "ezUCmANCz-hover": { "data-framer-name": void 0 },
                        Lgd9rtgPk: { "data-framer-name": `Active` },
                      },
                      m,
                      x
                    ),
                    children: c(K, {
                      __fromCanvasComponent: !0,
                      children: c(i, {
                        children: c(v.p, {
                          className: `framer-styles-preset-po9ocu`,
                          "data-styles-preset": `N74N_0q9y`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4e9ee025-4d41-457f-b60b-4d48970c270e, rgb(128, 133, 143)))`,
                          },
                          children: `Monthly Billing`,
                        }),
                      }),
                      className: `framer-1lcrpng`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `lQ13UXDzY`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-4e9ee025-4d41-457f-b60b-4d48970c270e, rgb(128, 133, 143))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: d,
                      variants: {
                        Lgd9rtgPk: {
                          "--extracted-r6o4lv": `var(--token-61e5ee56-3594-4358-94d0-c3752e3672e3, rgb(15, 15, 16))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...ct(
                        {
                          Lgd9rtgPk: {
                            children: c(i, {
                              children: c(v.p, {
                                className: `framer-styles-preset-po9ocu`,
                                "data-styles-preset": `N74N_0q9y`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-61e5ee56-3594-4358-94d0-c3752e3672e3, rgb(15, 15, 16)))`,
                                },
                                children: `Monthly Billing`,
                              }),
                            }),
                          },
                        },
                        m,
                        x
                      ),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-a4b5W.framer-jiqrjn, .framer-a4b5W .framer-jiqrjn { display: block; }`,
          `.framer-a4b5W.framer-s0mv3t { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-a4b5W .framer-1lcrpng { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-a4b5W.framer-s0mv3t { gap: 0px; } .framer-a4b5W.framer-s0mv3t > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-a4b5W.framer-s0mv3t > :first-child { margin-left: 0px; } .framer-a4b5W.framer-s0mv3t > :last-child { margin-right: 0px; } }`,
          `.framer-a4b5W.framer-v-hsv3th.framer-s0mv3t { overflow: visible; }`,
          ...at,
        ],
        `framer-a4b5W`
      )),
      (bt = yt),
      (yt.displayName = `Tabs/Tab`),
      (yt.defaultProps = { height: 40, width: 137 }),
      ue(yt, {
        variant: {
          options: [`ezUCmANCz`, `Lgd9rtgPk`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: M.Enum,
        },
        mAoNSCBTM: {
          defaultValue: `Monthly Billing`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        s3IR1zPWe: { title: `Tap`, type: M.EventHandler },
      }),
      C(
        yt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(it),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  St,
  Ct,
  wt,
  Tt = t(() => {
    (p(),
      n(),
      x(),
      (St = { damping: 100, stiffness: 400 }),
      (Ct = 0.5),
      (wt = (e) => (t) => {
        let [n, i] = a(!1),
          o = _(0),
          s = _(0),
          l = r(null),
          d = g(o, St),
          f = g(s, St);
        return (
          u(() => {
            let e = (e) => {
              if (l.current) {
                let t = l.current.getBoundingClientRect(),
                  r = t.left + t.width / 2,
                  i = t.top + t.height / 2,
                  a = e.clientX - r,
                  c = e.clientY - i;
                n ? (o.set(a * Ct), s.set(c * Ct)) : (o.set(0), s.set(0));
              }
            };
            return (
              document.addEventListener(`mousemove`, e),
              () => {
                document.removeEventListener(`mousemove`, e);
              }
            );
          }, [l, n]),
          c(v.div, {
            ref: l,
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            style: { x: d, y: f, height: t.height || `auto` },
            children: c(e, { ...t }),
          })
        );
      }));
  }),
  Et,
  Dt,
  Ot,
  kt = t(() => {
    (T(),
      O.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Et = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Dt = [
        `.framer-s9oEk .framer-styles-preset-1prn9rl:not(.rich-text-wrapper), .framer-s9oEk .framer-styles-preset-1prn9rl.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ot = `framer-s9oEk`));
  });
function At(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut = t(() => {
    (p(),
      T(),
      x(),
      n(),
      kt(),
      (jt = { NQgGcH58U: { hover: !0 } }),
      (Mt = [`NQgGcH58U`, `K3Y303ZuP`]),
      (Nt = `framer-oWDmM`),
      (Pt = { K3Y303ZuP: `framer-v-1hkwrlv`, NQgGcH58U: `framer-v-14n6rsu` }),
      (Ft = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (It = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Lt = v.create(i)),
      (Rt = { Active: `K3Y303ZuP`, Inactive: `NQgGcH58U` }),
      (zt = ({ height: e, id: t, tap: n, title: r, width: i, ...a }) => ({
        ...a,
        mAoNSCBTM: r ?? a.mAoNSCBTM ?? `Monthly Billing`,
        s3IR1zPWe: n ?? a.s3IR1zPWe,
        variant: Rt[a.variant] ?? a.variant ?? `NQgGcH58U`,
      })),
      (Bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vt = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              mAoNSCBTM: d,
              s3IR1zPWe: f,
              ...p
            } = zt(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = L({
              cycleOrder: Mt,
              defaultVariant: `NQgGcH58U`,
              enabledGestures: jt,
              variant: u,
              variantClassNames: Pt,
            }),
            O = Bt(e, D),
            { activeVariantCallback: k, delay: j } = A(m),
            M = k(async (...e) => {
              if ((T({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            P = r(null),
            F = h(),
            I = [Ot];
          return (
            S(),
            c(b, {
              id: l ?? F,
              children: c(Lt, {
                animate: D,
                initial: !1,
                children: c(It, {
                  value: Ft,
                  children: c(v.button, {
                    ...p,
                    ...y,
                    className: w(Nt, ...I, `framer-14n6rsu`, s, g),
                    "data-framer-name": `Inactive`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: O,
                    layoutId: `NQgGcH58U`,
                    onTap: M,
                    ref: t ?? P,
                    style: {
                      backgroundColor: `var(--token-a21c5608-6f6d-44b8-a4dd-3ec4d069f1f6, rgb(247, 247, 248))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `none`,
                      ...o,
                    },
                    variants: {
                      "NQgGcH58U-hover": {
                        backgroundColor: `var(--token-c53d836b-5706-468a-b8e6-ae61d5338acb, rgb(235, 236, 237))`,
                      },
                      K3Y303ZuP: {
                        backgroundColor: `var(--token-2546f2ec-502d-4b32-8634-ef8a4d8c3ed0, rgb(255, 255, 255))`,
                        boxShadow: `0px 1px 3px 0px rgba(52, 58, 75, 0.16)`,
                      },
                    },
                    ...At(
                      {
                        "NQgGcH58U-hover": { "data-framer-name": void 0 },
                        K3Y303ZuP: { "data-framer-name": `Active` },
                      },
                      m,
                      x
                    ),
                    children: c(K, {
                      __fromCanvasComponent: !0,
                      children: c(i, {
                        children: c(v.p, {
                          className: `framer-styles-preset-1prn9rl`,
                          "data-styles-preset": `CrHSyoPCi`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(100, 105, 110))`,
                          },
                          children: `Monthly Billing`,
                        }),
                      }),
                      className: `framer-noisup`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `WGn8bK1ZU`,
                      style: {
                        "--extracted-r6o4lv": `rgb(100, 105, 110)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: d,
                      variants: {
                        K3Y303ZuP: {
                          "--extracted-r6o4lv": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...At(
                        {
                          K3Y303ZuP: {
                            children: c(i, {
                              children: c(v.p, {
                                className: `framer-styles-preset-1prn9rl`,
                                "data-styles-preset": `CrHSyoPCi`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8)))`,
                                },
                                children: `Monthly Billing`,
                              }),
                            }),
                          },
                        },
                        m,
                        x
                      ),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-oWDmM.framer-plinfi, .framer-oWDmM .framer-plinfi { display: block; }`,
          `.framer-oWDmM.framer-14n6rsu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-oWDmM .framer-noisup { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oWDmM.framer-14n6rsu { gap: 0px; } .framer-oWDmM.framer-14n6rsu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-oWDmM.framer-14n6rsu > :first-child { margin-left: 0px; } .framer-oWDmM.framer-14n6rsu > :last-child { margin-right: 0px; } }`,
          `.framer-oWDmM.framer-v-1hkwrlv.framer-14n6rsu { overflow: visible; }`,
          ...Dt,
        ],
        `framer-oWDmM`
      )),
      (Ht = Vt),
      (Vt.displayName = `Tabs/Tab`),
      (Vt.defaultProps = { height: 45, width: 146 }),
      ue(Vt, {
        variant: {
          options: [`NQgGcH58U`, `K3Y303ZuP`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: M.Enum,
        },
        mAoNSCBTM: {
          defaultValue: `Monthly Billing`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        s3IR1zPWe: { title: `Tap`, type: M.EventHandler },
      }),
      C(
        Vt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(Et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Wt = e({ __FramerMetadata__: () => sn, default: () => on });
function Gt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn = t(() => {
    (p(),
      T(),
      x(),
      n(),
      (Kt = [`QFWHYUKeG`, `QOzbj5N5y`, `FtNpFJjRL`]),
      (qt = `framer-GBd4B`),
      (Jt = {
        FtNpFJjRL: `framer-v-1nr99ma`,
        QFWHYUKeG: `framer-v-1ci6myn`,
        QOzbj5N5y: `framer-v-1i24ru5`,
      }),
      (Yt = { duration: 0, type: `tween` }),
      (Xt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Zt = (e, t) => `translate(-50%, -50%) ${t}`),
      (Qt = (e, t) => `translateX(-50%) ${t}`),
      ($t = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (en = v(i)),
      (tn = { Default: `QFWHYUKeG`, Hover: `QOzbj5N5y`, Mid: `FtNpFJjRL` }),
      (nn = ({ bG: e, height: t, id: n, label: r, link: i, width: a, ...o }) => ({
        ...o,
        nAraFIBQl:
          e ?? o.nAraFIBQl ?? `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
        S5EqVDFx5: r ?? o.S5EqVDFx5 ?? `Get started now`,
        variant: tn[o.variant] ?? o.variant ?? `QFWHYUKeG`,
        XPPtN6fX6: i ?? o.XPPtN6fX6,
      })),
      (rn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (an = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              S5EqVDFx5: d,
              nAraFIBQl: p,
              XPPtN6fX6: m,
              ...g
            } = nn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = L({
              cycleOrder: Kt,
              defaultVariant: `QFWHYUKeG`,
              variant: u,
              variantClassNames: Jt,
            }),
            j = rn(e, k),
            { activeVariantCallback: M, delay: P } = A(_),
            F = M(async (...e) => {
              (D({ isHovered: !0 }), O(`QOzbj5N5y`));
            }),
            R = M(async (...e) => {
              (D({ isHovered: !1 }), O(`FtNpFJjRL`));
            });
          oe(_, {
            FtNpFJjRL: M(async (...e) => {
              await P(() => O(`QFWHYUKeG`), 450);
            }),
          });
          let z = r(null),
            B = h(),
            V = [];
          return (
            S(),
            c(b, {
              id: l ?? B,
              children: c(en, {
                animate: k,
                initial: !1,
                children: c($t, {
                  value: Yt,
                  ...Gt({ FtNpFJjRL: { value: Xt }, QOzbj5N5y: { value: Xt } }, _, T),
                  children: c(I, {
                    href: m,
                    openInNewTab: !0,
                    children: f(v.a, {
                      ...g,
                      ...C,
                      className: `${w(qt, ...V, `framer-1ci6myn`, s, y)} framer-zcdww3`,
                      "data-framer-name": `Default`,
                      "data-highlight": !0,
                      layoutDependency: j,
                      layoutId: `QFWHYUKeG`,
                      onMouseEnter: F,
                      ref: t ?? z,
                      style: {
                        backgroundColor: p,
                        borderBottomLeftRadius: 1e3,
                        borderBottomRightRadius: 1e3,
                        borderTopLeftRadius: 1e3,
                        borderTopRightRadius: 1e3,
                        ...o,
                      },
                      ...Gt(
                        {
                          FtNpFJjRL: { "data-framer-name": `Mid`, onMouseEnter: void 0 },
                          QOzbj5N5y: {
                            "data-framer-name": `Hover`,
                            onMouseEnter: void 0,
                            onMouseLeave: R,
                          },
                        },
                        _,
                        T
                      ),
                      children: [
                        c(K, {
                          __fromCanvasComponent: !0,
                          children: c(i, {
                            children: c(v.p, {
                              style: {
                                "--font-selector": `RlM7U2F0b3NoaS1ib2xk`,
                                "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                "--framer-font-weight": `700`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `Get started now`,
                            }),
                          }),
                          className: `framer-p3axga`,
                          "data-framer-name": `Helper Text`,
                          fonts: [`FS;Satoshi-bold`],
                          layoutDependency: j,
                          layoutId: `LxfYyHabl`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0,
                          },
                          text: d,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        c(v.div, {
                          className: `framer-1hvwtbl`,
                          "data-framer-name": `Circle`,
                          layoutDependency: j,
                          layoutId: `vQ6rNd0FT`,
                          style: {
                            backgroundColor: `rgb(255, 255, 255)`,
                            borderBottomLeftRadius: `50%`,
                            borderBottomRightRadius: `50%`,
                            borderTopLeftRadius: `50%`,
                            borderTopRightRadius: `50%`,
                            opacity: 0.25,
                          },
                        }),
                        f(v.div, {
                          className: `framer-t2xxuy`,
                          "data-framer-name": `Texts`,
                          layoutDependency: j,
                          layoutId: `xu_XkUmhg`,
                          children: [
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.p, {
                                  style: {
                                    "--font-selector": `RlM7U2F0b3NoaS1ib2xk`,
                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                    "--framer-font-weight": `700`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Get started now`,
                                }),
                              }),
                              className: `framer-mswn6u`,
                              "data-framer-name": `1`,
                              fonts: [`FS;Satoshi-bold`],
                              layoutDependency: j,
                              layoutId: `o5Awb6n4D`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 1,
                              },
                              text: d,
                              transformTemplate: Zt,
                              variants: { FtNpFJjRL: { opacity: 0 }, QOzbj5N5y: { opacity: 0 } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Gt(
                                {
                                  FtNpFJjRL: { transformTemplate: Qt },
                                  QOzbj5N5y: { transformTemplate: Qt },
                                },
                                _,
                                T
                              ),
                            }),
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.p, {
                                  style: {
                                    "--font-selector": `RlM7U2F0b3NoaS1ib2xk`,
                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                    "--framer-font-weight": `700`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Get started now`,
                                }),
                              }),
                              className: `framer-2s4056`,
                              "data-framer-name": `2`,
                              fonts: [`FS;Satoshi-bold`],
                              layoutDependency: j,
                              layoutId: `GXMchYwPT`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 0,
                              },
                              text: d,
                              transformTemplate: Qt,
                              variants: { QOzbj5N5y: { opacity: 1 } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Gt({ QOzbj5N5y: { transformTemplate: Zt } }, _, T),
                            }),
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.p, {
                                  style: {
                                    "--font-selector": `RlM7U2F0b3NoaS1ib2xk`,
                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                    "--framer-font-weight": `700`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Get started now`,
                                }),
                              }),
                              className: `framer-1pfm86a`,
                              "data-framer-name": `3`,
                              fonts: [`FS;Satoshi-bold`],
                              layoutDependency: j,
                              layoutId: `MWEp1BRgZ`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 0,
                              },
                              text: d,
                              transformTemplate: Qt,
                              variants: { FtNpFJjRL: { opacity: 1 } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-GBd4B.framer-zcdww3, .framer-GBd4B .framer-zcdww3 { display: block; }`,
          `.framer-GBd4B.framer-1ci6myn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GBd4B .framer-p3axga { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-GBd4B .framer-1hvwtbl { bottom: -259px; flex: none; height: 258px; left: -111px; overflow: hidden; pointer-events: none; position: absolute; right: -111px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-GBd4B .framer-t2xxuy { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-GBd4B .framer-mswn6u { -webkit-user-select: none; flex: none; height: auto; left: 50%; pointer-events: none; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; }`,
          `.framer-GBd4B .framer-2s4056, .framer-GBd4B .framer-1pfm86a { -webkit-user-select: none; bottom: 0px; flex: none; height: auto; left: 50%; pointer-events: none; position: absolute; user-select: none; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GBd4B.framer-1ci6myn { gap: 0px; } .framer-GBd4B.framer-1ci6myn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-GBd4B.framer-1ci6myn > :first-child { margin-top: 0px; } .framer-GBd4B.framer-1ci6myn > :last-child { margin-bottom: 0px; } }`,
          `.framer-GBd4B.framer-v-1i24ru5 .framer-1hvwtbl { bottom: unset; left: -111px; right: -112px; top: calc(50.00000000000002% - 258px / 2); }`,
          `.framer-GBd4B.framer-v-1i24ru5 .framer-mswn6u, .framer-GBd4B.framer-v-1nr99ma .framer-mswn6u { top: 0px; }`,
          `.framer-GBd4B.framer-v-1i24ru5 .framer-2s4056 { bottom: unset; top: 50%; }`,
          `.framer-GBd4B.framer-v-1nr99ma .framer-1hvwtbl { bottom: unset; left: -111px; right: -112px; top: -259px; }`,
          `.framer-GBd4B.framer-v-1nr99ma .framer-2s4056 { bottom: unset; top: 0px; }`,
          `.framer-GBd4B.framer-v-1nr99ma .framer-1pfm86a { bottom: 18px; }`,
        ],
        `framer-GBd4B`
      )),
      (on = an),
      (an.displayName = `Button`),
      (an.defaultProps = { height: 56, width: 183 }),
      ue(an, {
        variant: {
          options: [`QFWHYUKeG`, `QOzbj5N5y`, `FtNpFJjRL`],
          optionTitles: [`Default`, `Hover`, `Mid`],
          title: `Variant`,
          type: M.Enum,
        },
        S5EqVDFx5: {
          defaultValue: `Get started now`,
          displayTextArea: !1,
          title: `Label`,
          type: M.String,
        },
        nAraFIBQl: {
          defaultValue: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114)) /* {"name":"Primary"} */`,
          title: `BG`,
          type: M.Color,
        },
        XPPtN6fX6: { title: `Link`, type: M.Link },
      }),
      C(
        an,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Satoshi`,
                source: `fontshare`,
                style: `normal`,
                url: `../../assets/misc/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (sn = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framerm5l5CNfuK`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerVariables: `{"S5EqVDFx5":"label","nAraFIBQl":"bG","XPPtN6fX6":"link"}`,
              framerIntrinsicHeight: `56`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"QOzbj5N5y":{"layout":["auto","fixed"]},"FtNpFJjRL":{"layout":["auto","fixed"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `183`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn = t(() => {
    (p(),
      T(),
      x(),
      n(),
      xt(),
      Tt(),
      Ut(),
      cn(),
      (ln = k(Ht)),
      (un = k(bt)),
      (dn = k(on)),
      (fn = z(wt(on), Wt)),
      (pn = [
        `NeVaB8LMx`,
        `WwvItRGwA`,
        `D5Geq2Yc_`,
        `FbZdBlch4`,
        `PjGsFGd7_`,
        `osKTcmSNG`,
        `gQViXCldX`,
        `syzE3a2_T`,
        `MN5edEswn`,
      ]),
      (mn = `framer-fTEhm`),
      (hn = {
        D5Geq2Yc_: `framer-v-1dh68tq`,
        FbZdBlch4: `framer-v-bxtu5v`,
        gQViXCldX: `framer-v-o3q933`,
        MN5edEswn: `framer-v-8p0pj`,
        NeVaB8LMx: `framer-v-8s12xo`,
        osKTcmSNG: `framer-v-j3vt50`,
        PjGsFGd7_: `framer-v-9y2zko`,
        syzE3a2_T: `framer-v-17k4f4i`,
        WwvItRGwA: `framer-v-1p69yq4`,
      }),
      (gn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (_n = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 10,
        },
        startDelay: 1.2,
        tokenization: `line`,
        transition: { damping: 60, delay: 0.35, mass: 1, stiffness: 250, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (vn = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (yn = v.create(i)),
      (bn = {
        Desktop: `NeVaB8LMx`,
        Desktop2: `WwvItRGwA`,
        Desktop3: `D5Geq2Yc_`,
        Phone: `gQViXCldX`,
        Phone2: `syzE3a2_T`,
        Phone3: `MN5edEswn`,
        Tablet: `FbZdBlch4`,
        Tablet2: `PjGsFGd7_`,
        Tablet3: `osKTcmSNG`,
      }),
      (xn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: bn[r.variant] ?? r.variant ?? `NeVaB8LMx`,
      })),
      (Sn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Cn = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            { style: o, className: s, layoutId: l, variant: u, ...d } = xn(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: x,
              setGestureState: C,
              setVariant: T,
              variants: E,
            } = L({
              cycleOrder: pn,
              defaultVariant: `NeVaB8LMx`,
              variant: u,
              variantClassNames: hn,
            }),
            O = Sn(e, E),
            { activeVariantCallback: k, delay: j } = A(p),
            M = k(async (...e) => {
              T(`NeVaB8LMx`);
            }),
            P = k(async (...e) => {
              T(`FbZdBlch4`);
            }),
            F = k(async (...e) => {
              T(`gQViXCldX`);
            }),
            I = k(async (...e) => {
              T(`WwvItRGwA`);
            }),
            R = k(async (...e) => {
              T(`PjGsFGd7_`);
            }),
            z = k(async (...e) => {
              T(`syzE3a2_T`);
            }),
            B = k(async (...e) => {
              T(`D5Geq2Yc_`);
            }),
            V = k(async (...e) => {
              T(`osKTcmSNG`);
            }),
            H = k(async (...e) => {
              T(`MN5edEswn`);
            }),
            ee = r(null),
            te = () =>
              ![
                `WwvItRGwA`,
                `D5Geq2Yc_`,
                `PjGsFGd7_`,
                `osKTcmSNG`,
                `syzE3a2_T`,
                `MN5edEswn`,
              ].includes(p),
            ne = () => !![`WwvItRGwA`, `syzE3a2_T`].includes(p),
            re = () => !![`D5Geq2Yc_`, `MN5edEswn`].includes(p),
            W = () => ![`WwvItRGwA`, `D5Geq2Yc_`, `syzE3a2_T`, `MN5edEswn`].includes(p),
            ie = () => p === `WwvItRGwA`,
            ae = () => p === `D5Geq2Yc_`,
            oe = () => !![`PjGsFGd7_`, `syzE3a2_T`].includes(p),
            se = () => !![`osKTcmSNG`, `MN5edEswn`].includes(p),
            ce = () => p === `osKTcmSNG`,
            le = () => p === `PjGsFGd7_`,
            ue = h(),
            de = [],
            q = S();
          return c(b, {
            id: l ?? ue,
            children: c(yn, {
              animate: E,
              initial: !1,
              children: c(vn, {
                value: gn,
                children: c(v.div, {
                  ...d,
                  ..._,
                  className: w(mn, ...de, `framer-8s12xo`, s, m),
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `NeVaB8LMx`,
                  ref: t ?? ee,
                  style: {
                    backgroundColor: `var(--token-2546f2ec-502d-4b32-8634-ef8a4d8c3ed0, rgb(255, 255, 255))`,
                    ...o,
                  },
                  ...Y(
                    {
                      D5Geq2Yc_: { "data-framer-name": `Desktop3` },
                      FbZdBlch4: { "data-framer-name": `Tablet` },
                      gQViXCldX: { "data-framer-name": `Phone` },
                      MN5edEswn: { "data-framer-name": `Phone3` },
                      osKTcmSNG: { "data-framer-name": `Tablet3` },
                      PjGsFGd7_: { "data-framer-name": `Tablet2` },
                      syzE3a2_T: { "data-framer-name": `Phone2` },
                      WwvItRGwA: { "data-framer-name": `Desktop2` },
                    },
                    p,
                    y
                  ),
                  children: f(v.div, {
                    className: `framer-16p2zi8`,
                    "data-framer-name": `Tabber`,
                    layoutDependency: O,
                    layoutId: `cmAgIBMmK`,
                    children: [
                      f(v.div, {
                        className: `framer-umsxbz`,
                        "data-framer-name": `Tabs/Tab Group`,
                        layoutDependency: O,
                        layoutId: `BIhOXNmL2`,
                        style: {
                          backgroundColor: `var(--token-a21c5608-6f6d-44b8-a4dd-3ec4d069f1f6, rgb(247, 247, 248))`,
                          borderBottomLeftRadius: 13,
                          borderBottomRightRadius: 13,
                          borderTopLeftRadius: 13,
                          borderTopRightRadius: 13,
                        },
                        children: [
                          c(G, {
                            height: 45,
                            y:
                              (q?.y || 0) +
                              24 +
                              (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                              0 +
                              0 +
                              8,
                            ...Y(
                              {
                                FbZdBlch4: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    8,
                                },
                                gQViXCldX: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    0,
                                },
                                MN5edEswn: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    0,
                                },
                                osKTcmSNG: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    8,
                                },
                                PjGsFGd7_: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    8,
                                },
                                syzE3a2_T: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    0,
                                },
                              },
                              p,
                              y
                            ),
                            children: c(v.div, {
                              className: `framer-12ti13z-container`,
                              layoutDependency: O,
                              layoutId: `dOr1U2Ndr-container`,
                              children: c(Ht, {
                                height: `100%`,
                                id: `dOr1U2Ndr`,
                                layoutId: `dOr1U2Ndr`,
                                mAoNSCBTM: `Foundation`,
                                s3IR1zPWe: M,
                                variant: `K3Y303ZuP`,
                                width: `100%`,
                                ...Y(
                                  {
                                    D5Geq2Yc_: { variant: `NQgGcH58U` },
                                    FbZdBlch4: { s3IR1zPWe: P },
                                    gQViXCldX: { s3IR1zPWe: F, style: { width: `100%` } },
                                    MN5edEswn: {
                                      s3IR1zPWe: F,
                                      style: { width: `100%` },
                                      variant: `NQgGcH58U`,
                                    },
                                    osKTcmSNG: { s3IR1zPWe: P, variant: `NQgGcH58U` },
                                    PjGsFGd7_: { s3IR1zPWe: P, variant: `NQgGcH58U` },
                                    syzE3a2_T: {
                                      s3IR1zPWe: F,
                                      style: { width: `100%` },
                                      variant: `NQgGcH58U`,
                                    },
                                    WwvItRGwA: { variant: `NQgGcH58U` },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          }),
                          c(G, {
                            height: 40,
                            y:
                              (q?.y || 0) +
                              24 +
                              (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                              0 +
                              0 +
                              10.5,
                            ...Y(
                              {
                                FbZdBlch4: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                gQViXCldX: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    55,
                                },
                                MN5edEswn: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    55,
                                },
                                osKTcmSNG: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                PjGsFGd7_: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                syzE3a2_T: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    55,
                                },
                              },
                              p,
                              y
                            ),
                            children: c(v.div, {
                              className: `framer-1kyckux-container`,
                              layoutDependency: O,
                              layoutId: `FWgff0V47-container`,
                              children: c(bt, {
                                height: `100%`,
                                id: `FWgff0V47`,
                                layoutId: `FWgff0V47`,
                                mAoNSCBTM: `Venture Studio`,
                                s3IR1zPWe: I,
                                variant: `ezUCmANCz`,
                                width: `100%`,
                                ...Y(
                                  {
                                    FbZdBlch4: { s3IR1zPWe: R },
                                    gQViXCldX: { s3IR1zPWe: z, style: { width: `100%` } },
                                    MN5edEswn: { s3IR1zPWe: z, style: { width: `100%` } },
                                    osKTcmSNG: { s3IR1zPWe: R },
                                    PjGsFGd7_: { s3IR1zPWe: R, variant: `Lgd9rtgPk` },
                                    syzE3a2_T: {
                                      s3IR1zPWe: z,
                                      style: { width: `100%` },
                                      variant: `Lgd9rtgPk`,
                                    },
                                    WwvItRGwA: { variant: `Lgd9rtgPk` },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          }),
                          c(G, {
                            height: 40,
                            y:
                              (q?.y || 0) +
                              24 +
                              (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                              0 +
                              0 +
                              10.5,
                            ...Y(
                              {
                                FbZdBlch4: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                gQViXCldX: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    105,
                                },
                                MN5edEswn: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    105,
                                },
                                osKTcmSNG: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                PjGsFGd7_: {
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    248.5 +
                                    10.5,
                                },
                                syzE3a2_T: {
                                  width: `calc(min(${q?.width || `100vw`} - 48px, 1200px) - 16px)`,
                                  y:
                                    (q?.y || 0) +
                                    24 +
                                    (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    105,
                                },
                              },
                              p,
                              y
                            ),
                            children: c(v.div, {
                              className: `framer-nngvqd-container`,
                              layoutDependency: O,
                              layoutId: `EBpkK5WTj-container`,
                              children: c(bt, {
                                height: `100%`,
                                id: `EBpkK5WTj`,
                                layoutId: `EBpkK5WTj`,
                                mAoNSCBTM: `Fund`,
                                s3IR1zPWe: B,
                                variant: `ezUCmANCz`,
                                width: `100%`,
                                ...Y(
                                  {
                                    D5Geq2Yc_: { variant: `Lgd9rtgPk` },
                                    FbZdBlch4: { s3IR1zPWe: V },
                                    gQViXCldX: { s3IR1zPWe: H, style: { width: `100%` } },
                                    MN5edEswn: {
                                      s3IR1zPWe: H,
                                      style: { width: `100%` },
                                      variant: `Lgd9rtgPk`,
                                    },
                                    osKTcmSNG: { s3IR1zPWe: V, variant: `Lgd9rtgPk` },
                                    PjGsFGd7_: { s3IR1zPWe: V },
                                    syzE3a2_T: { s3IR1zPWe: H, style: { width: `100%` } },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(v.div, {
                        className: `framer-6944yg`,
                        "data-framer-name": `Content Container`,
                        layoutDependency: O,
                        layoutId: `kx8lPr3Zq`,
                        style: {
                          backgroundColor: `var(--token-c53d836b-5706-468a-b8e6-ae61d5338acb, rgb(235, 236, 237))`,
                          borderBottomLeftRadius: 13,
                          borderBottomRightRadius: 13,
                          borderTopLeftRadius: 13,
                          borderTopRightRadius: 13,
                        },
                        children: [
                          te() &&
                            c(v.div, {
                              className: `framer-1l1hhmm`,
                              "data-framer-name": `Foundation Logo`,
                              layoutDependency: O,
                              layoutId: `eILuqAlYG`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                boxShadow: `0px 0.7113342898827977px 1.5649354377421554px -0.6000000000000001px rgba(0, 0, 0, 0.05941), 0px 1.9371521717053837px 4.261734777751845px -1.2000000000000002px rgba(0, 0, 0, 0.05839), 0px 4.253285051195417px 9.35722711262992px -1.7999999999999998px rgba(0, 0, 0, 0.05646), 0px 9.4413216807344px 20.770907697615687px -2.4000000000000004px rgba(0, 0, 0, 0.05213), 0px 24px 52.80000000000001px -3px rgba(0, 0, 0, 0.04)`,
                              },
                              children: c(U, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 3840,
                                  intrinsicWidth: 5760,
                                  loading: D(
                                    (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      85 +
                                      24 +
                                      164 +
                                      0
                                  ),
                                  pixelHeight: 168,
                                  pixelWidth: 704,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `184px`,
                                  src: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png`,
                                  srcSet: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 512w,../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 704w`,
                                },
                                className: `framer-3iik8f`,
                                layoutDependency: O,
                                layoutId: `T7QMZ5QGe`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                                ...Y(
                                  {
                                    FbZdBlch4: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            325.5 +
                                            24 +
                                            -70.7 +
                                            0
                                        ),
                                        pixelHeight: 168,
                                        pixelWidth: 704,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png`,
                                        srcSet: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 512w,../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 704w`,
                                      },
                                    },
                                    gQViXCldX: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            177 +
                                            24 +
                                            132 +
                                            0
                                        ),
                                        pixelHeight: 168,
                                        pixelWidth: 704,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png`,
                                        srcSet: `../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 512w,../../assets/images/SZQbTKGRfCSkWsYSy7E2hENhGNY.png 704w`,
                                      },
                                    },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          ne() &&
                            c(v.div, {
                              className: `framer-sebzb1`,
                              "data-framer-name": `VS Logo`,
                              layoutDependency: O,
                              layoutId: `oXGAz3Yl5`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                boxShadow: `0px 0.7113342898827977px 1.5649354377421554px -0.6000000000000001px rgba(0, 0, 0, 0.05941), 0px 1.9371521717053837px 4.261734777751845px -1.2000000000000002px rgba(0, 0, 0, 0.05839), 0px 4.253285051195417px 9.35722711262992px -1.7999999999999998px rgba(0, 0, 0, 0.05646), 0px 9.4413216807344px 20.770907697615687px -2.4000000000000004px rgba(0, 0, 0, 0.05213), 0px 24px 52.80000000000001px -3px rgba(0, 0, 0, 0.04)`,
                              },
                              children: c(U, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 3840,
                                  intrinsicWidth: 5760,
                                  pixelHeight: 641,
                                  pixelWidth: 1529,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `184px`,
                                  src: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png`,
                                  srcSet: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=512 512w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png 1529w`,
                                },
                                className: `framer-3o7ww7`,
                                layoutDependency: O,
                                layoutId: `A038w7rWs`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                                ...Y(
                                  {
                                    syzE3a2_T: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            177 +
                                            24 +
                                            94 +
                                            0
                                        ),
                                        pixelHeight: 641,
                                        pixelWidth: 1529,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png`,
                                        srcSet: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=512 512w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png 1529w`,
                                      },
                                    },
                                    WwvItRGwA: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            85 +
                                            24 +
                                            126 +
                                            0
                                        ),
                                        pixelHeight: 641,
                                        pixelWidth: 1529,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png`,
                                        srcSet: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=512 512w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png 1529w`,
                                      },
                                    },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          re() &&
                            c(v.div, {
                              className: `framer-15e9n4`,
                              "data-framer-name": `Fund Logo`,
                              layoutDependency: O,
                              layoutId: `MtewKDmQl`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                boxShadow: `0px 0.7113342898827977px 1.5649354377421554px -0.6000000000000001px rgba(0, 0, 0, 0.05941), 0px 1.9371521717053837px 4.261734777751845px -1.2000000000000002px rgba(0, 0, 0, 0.05839), 0px 4.253285051195417px 9.35722711262992px -1.7999999999999998px rgba(0, 0, 0, 0.05646), 0px 9.4413216807344px 20.770907697615687px -2.4000000000000004px rgba(0, 0, 0, 0.05213), 0px 24px 52.80000000000001px -3px rgba(0, 0, 0, 0.04)`,
                              },
                              children: c(U, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 3840,
                                  intrinsicWidth: 5760,
                                  pixelHeight: 136,
                                  pixelWidth: 555,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `184px`,
                                  src: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png`,
                                  srcSet: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png 555w`,
                                },
                                className: `framer-10cho3d`,
                                layoutDependency: O,
                                layoutId: `a3DcKCMBh`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                                ...Y(
                                  {
                                    D5Geq2Yc_: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            85 +
                                            24 +
                                            126 +
                                            0
                                        ),
                                        pixelHeight: 136,
                                        pixelWidth: 555,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png`,
                                        srcSet: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png 555w`,
                                      },
                                    },
                                    MN5edEswn: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            177 +
                                            24 +
                                            94 +
                                            0
                                        ),
                                        pixelHeight: 136,
                                        pixelWidth: 555,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png`,
                                        srcSet: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png 555w`,
                                      },
                                    },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                          W() &&
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.h1, {
                                  style: {
                                    "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                    "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                  },
                                  children: `We run a not for profit Foundation that works with Universities across the country to enable bright youngsters to become innovators.  Foundation runs programs & platforms with industry partners`,
                                }),
                              }),
                              className: `framer-1ppl1nv`,
                              "data-framer-name": `Foundation`,
                              effect: _n,
                              fonts: [`GF;Lustria-regular`],
                              layoutDependency: O,
                              layoutId: `eGNHtqxYH`,
                              style: {
                                "--extracted-gdpscs": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Y(
                                {
                                  FbZdBlch4: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `26px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `We run a not for profit Foundation that works with Universities across the country to enable bright youngsters to become innovators.  Foundation runs programs & platforms with industry partners`,
                                      }),
                                    }),
                                  },
                                  gQViXCldX: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `We run a not for profit Foundation that works with Universities across the country to enable bright youngsters to become innovators.  Foundation runs programs & platforms with industry partners`,
                                      }),
                                    }),
                                  },
                                  osKTcmSNG: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `26px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `A SEBI approved VC fund that invests in prerevenue stage deeptech startups with special focus & capability to support startups on campus`,
                                      }),
                                    }),
                                  },
                                  PjGsFGd7_: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `26px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `Over the years we have helped 75+ Industries, global corporations, startups & students to convert their idea in to deeptech solutions. Our unique model brings in all resources to convert idea in to a demonstratable product with the customers`,
                                      }),
                                    }),
                                  },
                                },
                                p,
                                y
                              ),
                            }),
                          ne() &&
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.h1, {
                                  style: {
                                    "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                    "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                  },
                                  children: `Over the years we have helped 75+ Industries, global corporations, startups & students to convert their idea in to deeptech solutions. Our unique model brings in all resources to convert idea in to a demonstratable product with the customers`,
                                }),
                              }),
                              className: `framer-12k3leo`,
                              "data-framer-name": `Venture Studio`,
                              effect: _n,
                              fonts: [`GF;Lustria-regular`],
                              layoutDependency: O,
                              layoutId: `rNn2OwY6z`,
                              style: {
                                "--extracted-gdpscs": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Y(
                                {
                                  syzE3a2_T: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `Over the years we have helped 75+ Industries, global corporations, startups & students to convert their idea in to deeptech solutions. Our unique model brings in all resources to convert idea in to a demonstratable product with the customers`,
                                      }),
                                    }),
                                  },
                                },
                                p,
                                y
                              ),
                            }),
                          re() &&
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.h1, {
                                  style: {
                                    "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                    "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                  },
                                  children: `A SEBI approved VC fund that invests in prerevenue stage deeptech startups with special focus & capability to support startups on campus`,
                                }),
                              }),
                              className: `framer-2mqtvy`,
                              "data-framer-name": `Fund`,
                              effect: _n,
                              fonts: [`GF;Lustria-regular`],
                              layoutDependency: O,
                              layoutId: `QMyj3FykA`,
                              style: {
                                "--extracted-gdpscs": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Y(
                                {
                                  MN5edEswn: {
                                    children: c(i, {
                                      children: c(v.h1, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)))`,
                                        },
                                        children: `A SEBI approved VC fund that invests in prerevenue stage deeptech startups with special focus & capability to support startups on campus`,
                                      }),
                                    }),
                                  },
                                },
                                p,
                                y
                              ),
                            }),
                          ie() &&
                            c(G, {
                              ...Y(
                                {
                                  WwvItRGwA: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      85 +
                                      24 +
                                      262,
                                  },
                                },
                                p,
                                y
                              ),
                              children: c(v.div, {
                                className: `framer-1nfgayb-container`,
                                "data-framer-name": `VS Button`,
                                layoutDependency: O,
                                layoutId: `wJ73Q4z9x-container`,
                                name: `VS Button`,
                                children: c(fn, {
                                  height: `100%`,
                                  id: `wJ73Q4z9x`,
                                  layoutId: `wJ73Q4z9x`,
                                  name: `VS Button`,
                                  nAraFIBQl: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  S5EqVDFx5: `Learn about our Venture Studio`,
                                  style: { height: `100%` },
                                  variant: `QFWHYUKeG`,
                                  width: `100%`,
                                  XPPtN6fX6: `https://cocreate.ventures`,
                                }),
                              }),
                            }),
                          ae() &&
                            c(G, {
                              ...Y(
                                {
                                  D5Geq2Yc_: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      85 +
                                      24 +
                                      262,
                                  },
                                },
                                p,
                                y
                              ),
                              children: c(v.div, {
                                className: `framer-1im95w6-container`,
                                "data-framer-name": `Fund Button`,
                                layoutDependency: O,
                                layoutId: `DfNqh_IwB-container`,
                                name: `Fund Button`,
                                children: c(fn, {
                                  height: `100%`,
                                  id: `DfNqh_IwB`,
                                  layoutId: `DfNqh_IwB`,
                                  name: `Fund Button`,
                                  nAraFIBQl: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  S5EqVDFx5: `Learn about our Fund`,
                                  style: { height: `100%` },
                                  variant: `QFWHYUKeG`,
                                  width: `100%`,
                                  XPPtN6fX6: `https://arambh.vc`,
                                }),
                              }),
                            }),
                          oe() &&
                            c(G, {
                              ...Y(
                                {
                                  PjGsFGd7_: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      325.5 +
                                      24 +
                                      7.700000000000003,
                                  },
                                  syzE3a2_T: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      177 +
                                      24 +
                                      202,
                                  },
                                },
                                p,
                                y
                              ),
                              children: c(v.div, {
                                className: `framer-wpjzm7-container`,
                                "data-framer-name": `VS Button`,
                                layoutDependency: O,
                                layoutId: `PybPnyhPO-container`,
                                name: `VS Button`,
                                children: c(fn, {
                                  height: `100%`,
                                  id: `PybPnyhPO`,
                                  layoutId: `PybPnyhPO`,
                                  name: `VS Button`,
                                  nAraFIBQl: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  S5EqVDFx5: `Learn about our Venture Studio`,
                                  style: { height: `100%` },
                                  variant: `QFWHYUKeG`,
                                  width: `100%`,
                                  XPPtN6fX6: `https://cocreate.ventures`,
                                }),
                              }),
                            }),
                          se() &&
                            c(G, {
                              ...Y(
                                {
                                  MN5edEswn: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      177 +
                                      24 +
                                      202,
                                  },
                                  osKTcmSNG: {
                                    height: 56,
                                    y:
                                      (q?.y || 0) +
                                      24 +
                                      (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                      0 +
                                      325.5 +
                                      24 +
                                      7.700000000000003,
                                  },
                                },
                                p,
                                y
                              ),
                              children: c(v.div, {
                                className: `framer-1kqd03o-container`,
                                "data-framer-name": `Fund Button`,
                                layoutDependency: O,
                                layoutId: `p3fSAqiCp-container`,
                                name: `Fund Button`,
                                children: c(fn, {
                                  height: `100%`,
                                  id: `p3fSAqiCp`,
                                  layoutId: `p3fSAqiCp`,
                                  name: `Fund Button`,
                                  nAraFIBQl: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  S5EqVDFx5: `Learn about our Fund`,
                                  style: { height: `100%` },
                                  variant: `QFWHYUKeG`,
                                  width: `100%`,
                                  XPPtN6fX6: `https://arambh.vc`,
                                }),
                              }),
                            }),
                          ce() &&
                            c(U, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 3840,
                                intrinsicWidth: 5760,
                                pixelHeight: 136,
                                pixelWidth: 555,
                                positionX: `center`,
                                positionY: `center`,
                                src: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png`,
                                srcSet: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png 555w`,
                              },
                              className: `framer-1lks6eg`,
                              layoutDependency: O,
                              layoutId: `FX1Bq46v1`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                              },
                              ...Y(
                                {
                                  osKTcmSNG: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 3840,
                                      intrinsicWidth: 5760,
                                      loading: D(
                                        (q?.y || 0) +
                                          24 +
                                          (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                          0 +
                                          325.5 +
                                          24 +
                                          -108.7
                                      ),
                                      pixelHeight: 136,
                                      pixelWidth: 555,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `184px`,
                                      src: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png`,
                                      srcSet: `https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WfTOupuDUhsxukzrx2uKsgZevU.png 555w`,
                                    },
                                  },
                                },
                                p,
                                y
                              ),
                            }),
                          le() &&
                            c(v.div, {
                              className: `framer-1ndgpj0`,
                              "data-framer-name": `VS Logo`,
                              layoutDependency: O,
                              layoutId: `SbxvCndP6`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                boxShadow: `0px 0.7113342898827977px 1.5649354377421554px -0.6000000000000001px rgba(0, 0, 0, 0.05941), 0px 1.9371521717053837px 4.261734777751845px -1.2000000000000002px rgba(0, 0, 0, 0.05839), 0px 4.253285051195417px 9.35722711262992px -1.7999999999999998px rgba(0, 0, 0, 0.05646), 0px 9.4413216807344px 20.770907697615687px -2.4000000000000004px rgba(0, 0, 0, 0.05213), 0px 24px 52.80000000000001px -3px rgba(0, 0, 0, 0.04)`,
                              },
                              children: c(U, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 3840,
                                  intrinsicWidth: 5760,
                                  pixelHeight: 641,
                                  pixelWidth: 1529,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `184px`,
                                  src: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png`,
                                  srcSet: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=512 512w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png 1529w`,
                                },
                                className: `framer-g4kvb1`,
                                layoutDependency: O,
                                layoutId: `c5qePkywc`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                                ...Y(
                                  {
                                    PjGsFGd7_: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 3840,
                                        intrinsicWidth: 5760,
                                        loading: D(
                                          (q?.y || 0) +
                                            24 +
                                            (((q?.height || 625) - 48 - 577) / 2 + 0 + 0) +
                                            0 +
                                            325.5 +
                                            24 +
                                            -108.7 +
                                            0
                                        ),
                                        pixelHeight: 641,
                                        pixelWidth: 1529,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `184px`,
                                        src: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png`,
                                        srcSet: `https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=512 512w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9ABhp8p6cLmngoLDEVAcluvUoI.png 1529w`,
                                      },
                                    },
                                  },
                                  p,
                                  y
                                ),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fTEhm.framer-578w8h, .framer-fTEhm .framer-578w8h { display: block; }`,
          `.framer-fTEhm.framer-8s12xo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1248px; }`,
          `.framer-fTEhm .framer-16p2zi8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 577px; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fTEhm .framer-umsxbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: 100%; }`,
          `.framer-fTEhm .framer-12ti13z-container, .framer-fTEhm .framer-1kyckux-container, .framer-fTEhm .framer-nngvqd-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-fTEhm .framer-6944yg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: center; max-height: 497px; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fTEhm .framer-1l1hhmm, .framer-fTEhm .framer-sebzb1, .framer-fTEhm .framer-15e9n4, .framer-fTEhm .framer-1ndgpj0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fTEhm .framer-3iik8f, .framer-fTEhm .framer-3o7ww7, .framer-fTEhm .framer-10cho3d, .framer-fTEhm .framer-1lks6eg, .framer-fTEhm .framer-g4kvb1 { flex: none; height: 40px; overflow: hidden; position: relative; width: 184px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fTEhm .framer-1ppl1nv, .framer-fTEhm .framer-12k3leo, .framer-fTEhm .framer-2mqtvy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fTEhm .framer-1nfgayb-container, .framer-fTEhm .framer-1im95w6-container, .framer-fTEhm .framer-wpjzm7-container, .framer-fTEhm .framer-1kqd03o-container { flex: none; height: 56px; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-8s12xo, .framer-fTEhm .framer-16p2zi8, .framer-fTEhm .framer-umsxbz, .framer-fTEhm .framer-6944yg, .framer-fTEhm .framer-1l1hhmm, .framer-fTEhm .framer-sebzb1, .framer-fTEhm .framer-15e9n4, .framer-fTEhm .framer-1ndgpj0 { gap: 0px; } .framer-fTEhm.framer-8s12xo > * { margin: 0px; margin-bottom: calc(56px / 2); margin-top: calc(56px / 2); } .framer-fTEhm.framer-8s12xo > :first-child, .framer-fTEhm .framer-16p2zi8 > :first-child, .framer-fTEhm .framer-6944yg > :first-child { margin-top: 0px; } .framer-fTEhm.framer-8s12xo > :last-child, .framer-fTEhm .framer-16p2zi8 > :last-child, .framer-fTEhm .framer-6944yg > :last-child { margin-bottom: 0px; } .framer-fTEhm .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-fTEhm .framer-umsxbz > *, .framer-fTEhm .framer-1l1hhmm > *, .framer-fTEhm .framer-sebzb1 > *, .framer-fTEhm .framer-15e9n4 > *, .framer-fTEhm .framer-1ndgpj0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-fTEhm .framer-umsxbz > :first-child, .framer-fTEhm .framer-1l1hhmm > :first-child, .framer-fTEhm .framer-sebzb1 > :first-child, .framer-fTEhm .framer-15e9n4 > :first-child, .framer-fTEhm .framer-1ndgpj0 > :first-child { margin-left: 0px; } .framer-fTEhm .framer-umsxbz > :last-child, .framer-fTEhm .framer-1l1hhmm > :last-child, .framer-fTEhm .framer-sebzb1 > :last-child, .framer-fTEhm .framer-15e9n4 > :last-child, .framer-fTEhm .framer-1ndgpj0 > :last-child { margin-right: 0px; } .framer-fTEhm .framer-6944yg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }`,
          `.framer-fTEhm.framer-v-1p69yq4 .framer-sebzb1, .framer-fTEhm.framer-v-17k4f4i .framer-sebzb1 { order: 1; }`,
          `.framer-fTEhm.framer-v-1p69yq4 .framer-12k3leo { order: 3; }`,
          `.framer-fTEhm.framer-v-1p69yq4 .framer-1nfgayb-container { order: 7; }`,
          `.framer-fTEhm.framer-v-bxtu5v.framer-8s12xo, .framer-fTEhm.framer-v-9y2zko.framer-8s12xo, .framer-fTEhm.framer-v-j3vt50.framer-8s12xo { gap: 28px; width: 810px; }`,
          `.framer-fTEhm.framer-v-bxtu5v .framer-16p2zi8, .framer-fTEhm.framer-v-9y2zko .framer-16p2zi8, .framer-fTEhm.framer-v-j3vt50 .framer-16p2zi8, .framer-fTEhm.framer-v-o3q933 .framer-16p2zi8, .framer-fTEhm.framer-v-17k4f4i .framer-16p2zi8, .framer-fTEhm.framer-v-8p0pj .framer-16p2zi8 { gap: 16px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-bxtu5v.framer-8s12xo, .framer-fTEhm.framer-v-bxtu5v .framer-16p2zi8 { gap: 0px; } .framer-fTEhm.framer-v-bxtu5v.framer-8s12xo > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-fTEhm.framer-v-bxtu5v.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-bxtu5v .framer-16p2zi8 > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-bxtu5v.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-bxtu5v .framer-16p2zi8 > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-bxtu5v .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }`,
          `.framer-fTEhm.framer-v-9y2zko .framer-1ppl1nv, .framer-fTEhm.framer-v-j3vt50 .framer-1ppl1nv { order: 5; }`,
          `.framer-fTEhm.framer-v-9y2zko .framer-wpjzm7-container { order: 10; }`,
          `.framer-fTEhm.framer-v-9y2zko .framer-1ndgpj0, .framer-fTEhm.framer-v-j3vt50 .framer-1lks6eg { order: 0; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-9y2zko.framer-8s12xo, .framer-fTEhm.framer-v-9y2zko .framer-16p2zi8 { gap: 0px; } .framer-fTEhm.framer-v-9y2zko.framer-8s12xo > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-fTEhm.framer-v-9y2zko.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-9y2zko .framer-16p2zi8 > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-9y2zko.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-9y2zko .framer-16p2zi8 > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-9y2zko .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }`,
          `.framer-fTEhm.framer-v-j3vt50 .framer-1kqd03o-container { order: 11; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-j3vt50.framer-8s12xo, .framer-fTEhm.framer-v-j3vt50 .framer-16p2zi8 { gap: 0px; } .framer-fTEhm.framer-v-j3vt50.framer-8s12xo > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-fTEhm.framer-v-j3vt50.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-j3vt50 .framer-16p2zi8 > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-j3vt50.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-j3vt50 .framer-16p2zi8 > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-j3vt50 .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }`,
          `.framer-fTEhm.framer-v-o3q933.framer-8s12xo, .framer-fTEhm.framer-v-17k4f4i.framer-8s12xo, .framer-fTEhm.framer-v-8p0pj.framer-8s12xo { gap: 50px; width: 390px; }`,
          `.framer-fTEhm.framer-v-o3q933 .framer-umsxbz, .framer-fTEhm.framer-v-17k4f4i .framer-umsxbz, .framer-fTEhm.framer-v-8p0pj .framer-umsxbz { flex-direction: column; }`,
          `.framer-fTEhm.framer-v-o3q933 .framer-12ti13z-container, .framer-fTEhm.framer-v-o3q933 .framer-1kyckux-container, .framer-fTEhm.framer-v-o3q933 .framer-nngvqd-container, .framer-fTEhm.framer-v-17k4f4i .framer-12ti13z-container, .framer-fTEhm.framer-v-17k4f4i .framer-1kyckux-container, .framer-fTEhm.framer-v-17k4f4i .framer-nngvqd-container, .framer-fTEhm.framer-v-8p0pj .framer-12ti13z-container, .framer-fTEhm.framer-v-8p0pj .framer-1kyckux-container, .framer-fTEhm.framer-v-8p0pj .framer-nngvqd-container { width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-o3q933.framer-8s12xo, .framer-fTEhm.framer-v-o3q933 .framer-16p2zi8, .framer-fTEhm.framer-v-o3q933 .framer-umsxbz { gap: 0px; } .framer-fTEhm.framer-v-o3q933.framer-8s12xo > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-fTEhm.framer-v-o3q933.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-o3q933 .framer-16p2zi8 > :first-child, .framer-fTEhm.framer-v-o3q933 .framer-umsxbz > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-o3q933.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-o3q933 .framer-16p2zi8 > :last-child, .framer-fTEhm.framer-v-o3q933 .framer-umsxbz > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-o3q933 .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-fTEhm.framer-v-o3q933 .framer-umsxbz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
          `.framer-fTEhm.framer-v-17k4f4i .framer-12k3leo { order: 5; width: 95%; }`,
          `.framer-fTEhm.framer-v-17k4f4i .framer-wpjzm7-container { order: 9; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-17k4f4i.framer-8s12xo, .framer-fTEhm.framer-v-17k4f4i .framer-16p2zi8, .framer-fTEhm.framer-v-17k4f4i .framer-umsxbz { gap: 0px; } .framer-fTEhm.framer-v-17k4f4i.framer-8s12xo > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-fTEhm.framer-v-17k4f4i.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-17k4f4i .framer-16p2zi8 > :first-child, .framer-fTEhm.framer-v-17k4f4i .framer-umsxbz > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-17k4f4i.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-17k4f4i .framer-16p2zi8 > :last-child, .framer-fTEhm.framer-v-17k4f4i .framer-umsxbz > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-17k4f4i .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-fTEhm.framer-v-17k4f4i .framer-umsxbz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fTEhm.framer-v-8p0pj.framer-8s12xo, .framer-fTEhm.framer-v-8p0pj .framer-16p2zi8, .framer-fTEhm.framer-v-8p0pj .framer-umsxbz { gap: 0px; } .framer-fTEhm.framer-v-8p0pj.framer-8s12xo > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-fTEhm.framer-v-8p0pj.framer-8s12xo > :first-child, .framer-fTEhm.framer-v-8p0pj .framer-16p2zi8 > :first-child, .framer-fTEhm.framer-v-8p0pj .framer-umsxbz > :first-child { margin-top: 0px; } .framer-fTEhm.framer-v-8p0pj.framer-8s12xo > :last-child, .framer-fTEhm.framer-v-8p0pj .framer-16p2zi8 > :last-child, .framer-fTEhm.framer-v-8p0pj .framer-umsxbz > :last-child { margin-bottom: 0px; } .framer-fTEhm.framer-v-8p0pj .framer-16p2zi8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-fTEhm.framer-v-8p0pj .framer-umsxbz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
        ],
        `framer-fTEhm`
      )),
      (wn = Cn),
      (Cn.displayName = `Features/Toggle`),
      (Cn.defaultProps = { height: 625, width: 1248 }),
      ue(Cn, {
        variant: {
          options: [
            `NeVaB8LMx`,
            `WwvItRGwA`,
            `D5Geq2Yc_`,
            `FbZdBlch4`,
            `PjGsFGd7_`,
            `osKTcmSNG`,
            `gQViXCldX`,
            `syzE3a2_T`,
            `MN5edEswn`,
          ],
          optionTitles: [
            `Desktop`,
            `Desktop2`,
            `Desktop3`,
            `Tablet`,
            `Tablet2`,
            `Tablet3`,
            `Phone`,
            `Phone2`,
            `Phone3`,
          ],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      C(
        Cn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Lustria`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/lustria/v13/9oRONYodvDEyjuhOrC05MtPyAcg.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ln,
          ...un,
          ...dn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function En(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn = t(() => {
    (p(),
      T(),
      x(),
      n(),
      (Dn = B(v.div)),
      (On = [`aVzx9Tbuc`, `HmmL38cT7`, `dJ70K_8cL`]),
      (kn = `framer-URF1P`),
      (An = {
        aVzx9Tbuc: `framer-v-h94ef6`,
        dJ70K_8cL: `framer-v-1pvrksj`,
        HmmL38cT7: `framer-v-wzxd4t`,
      }),
      (jn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Mn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Nn = { delay: 0, duration: 15, ease: [0, 0, 1, 1], type: `tween` }),
      (Pn = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Fn = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (In = v.create(i)),
      (Ln = { Desktop: `aVzx9Tbuc`, Phone: `dJ70K_8cL`, Tablet: `HmmL38cT7` }),
      (Rn = ({ height: e, id: t, image: n, memberName: r, role: i, width: a, ...o }) => ({
        ...o,
        Ih80sscPv: i ?? o.Ih80sscPv ?? `Creative Director`,
        qrji55bSI: r ?? o.qrji55bSI ?? `Alexandra Rodriguez`,
        variant: Ln[o.variant] ?? o.variant ?? `aVzx9Tbuc`,
        Wf7tEjyQZ: n ??
          o.Wf7tEjyQZ ?? {
            src: `https://framerusercontent.com/images/CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg?scale-down-to=2048`,
            srcSet: `https://framerusercontent.com/images/CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg?scale-down-to=1024 819w,https://framerusercontent.com/images/CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg?scale-down-to=2048 1638w,https://framerusercontent.com/images/CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg?scale-down-to=4096 3276w,https://framerusercontent.com/images/CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg 4685w`,
          },
      })),
      (zn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bn = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              Wf7tEjyQZ: d,
              qrji55bSI: p,
              Ih80sscPv: m,
              ...g
            } = Rn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = L({
              cycleOrder: On,
              defaultVariant: `aVzx9Tbuc`,
              variant: u,
              variantClassNames: An,
            }),
            j = zn(e, A),
            M = r(null),
            P = h(),
            F = [],
            I = S();
          return c(b, {
            id: l ?? P,
            children: c(In, {
              animate: A,
              initial: !1,
              children: c(Fn, {
                value: jn,
                children: f(v.div, {
                  ...g,
                  ...C,
                  className: w(kn, ...F, `framer-h94ef6`, s, y),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `aVzx9Tbuc`,
                  ref: t ?? M,
                  style: { ...o },
                  ...En(
                    {
                      dJ70K_8cL: { "data-framer-name": `Phone` },
                      HmmL38cT7: { "data-framer-name": `Tablet` },
                    },
                    _,
                    T
                  ),
                  children: [
                    c(v.div, {
                      className: `framer-9noyxw`,
                      "data-framer-name": `Photo`,
                      layoutDependency: j,
                      layoutId: `tqCP8I2y_`,
                      style: {
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                      },
                      variants: {
                        dJ70K_8cL: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                      },
                      children: c(U, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5857,
                          intrinsicWidth: 4685,
                          loading: D(
                            (I?.y || 0) +
                              208 +
                              ((I?.height || 840) - 304 - ((I?.height || 840) - 304) * 1) +
                              (0 +
                                (((I?.height || 840) - 304) * 1 -
                                  0 -
                                  (((I?.height || 840) - 304) * 1 - 0) * 1) /
                                  2)
                          ),
                          pixelHeight: 5857,
                          pixelWidth: 4685,
                          sizes: `max((${I?.width || `100vw`} - 424px) / 2, 1px)`,
                          ...Mn(d),
                        },
                        className: `framer-170nv81`,
                        layoutDependency: j,
                        layoutId: `PsWjpAN9z`,
                        style: { filter: `grayscale(1)`, WebkitFilter: `grayscale(1)` },
                        ...En(
                          {
                            dJ70K_8cL: {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 5857,
                                intrinsicWidth: 4685,
                                loading: D(
                                  (I?.y || 0) +
                                    0 +
                                    (((I?.height || 800) -
                                      120 -
                                      (Math.max(0, ((I?.height || 800) - 120 - 96) / 1.5) * 1 +
                                        Math.max(0, ((I?.height || 800) - 120 - 96) / 1.5) * 0.5 +
                                        96)) /
                                      2 +
                                      0 +
                                      0) +
                                    0
                                ),
                                pixelHeight: 5857,
                                pixelWidth: 4685,
                                sizes: I?.width || `100vw`,
                                ...Mn(d),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                            HmmL38cT7: {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 5857,
                                intrinsicWidth: 4685,
                                loading: D(
                                  (I?.y || 0) +
                                    72 +
                                    ((I?.height || 600) - 144 - ((I?.height || 600) - 144) * 1) +
                                    (0 +
                                      (((I?.height || 600) - 144) * 1 -
                                        0 -
                                        (((I?.height || 600) - 144) * 1 - 0) * 1) /
                                        2)
                                ),
                                pixelHeight: 5857,
                                pixelWidth: 4685,
                                sizes: `min(max((${I?.width || `100vw`} - 144px) / 2, 1px), 480px)`,
                                ...Mn(d),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                          },
                          _,
                          T
                        ),
                      }),
                    }),
                    f(v.div, {
                      className: `framer-bn9zdy`,
                      layoutDependency: j,
                      layoutId: `jsY8Q1DYs`,
                      style: { backgroundColor: `rgb(255, 255, 255)` },
                      children: [
                        c(Dn, {
                          __framer__loop: Pn,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Nn,
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.1,
                                skewX: 0,
                                skewY: 0,
                                x: 240,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScroll`,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-b8nw0q`,
                          "data-framer-name": `Orange-Square`,
                          layoutDependency: j,
                          layoutId: `rUJRhFeBD`,
                          style: {
                            backgroundColor: `var(--token-633663d4-6135-4d2d-a328-8707c8a7d2dc, rgb(255, 60, 0))`,
                            rotate: 45,
                            transformPerspective: 1200,
                          },
                        }),
                        f(v.div, {
                          className: `framer-140h0t5`,
                          layoutDependency: j,
                          layoutId: `wsEMAkb02`,
                          children: [
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.h2, {
                                  style: {
                                    "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNzAw`,
                                    "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                    "--framer-font-size": `60px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-dd3bc34b-f5c1-47d1-a245-8a68554e705e, rgb(0, 0, 0)))`,
                                  },
                                  children: `Alexandra Rodriguez`,
                                }),
                              }),
                              className: `framer-c3raog`,
                              fonts: [`GF;Inter Tight-700`],
                              layoutDependency: j,
                              layoutId: `eBGtwwZZr`,
                              style: {
                                "--extracted-1of0zx5": `var(--token-dd3bc34b-f5c1-47d1-a245-8a68554e705e, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: p,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...En(
                                {
                                  dJ70K_8cL: {
                                    children: c(i, {
                                      children: c(v.h2, {
                                        style: {
                                          "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNzAw`,
                                          "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                          "--framer-font-size": `60px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `right`,
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-dd3bc34b-f5c1-47d1-a245-8a68554e705e, rgb(0, 0, 0)))`,
                                        },
                                        children: `Alexandra Rodriguez`,
                                      }),
                                    }),
                                  },
                                },
                                _,
                                T
                              ),
                            }),
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.p, {
                                  style: {
                                    "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNTAw`,
                                    "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-633663d4-6135-4d2d-a328-8707c8a7d2dc, rgb(255, 60, 0)))`,
                                  },
                                  children: `Creative Director`,
                                }),
                              }),
                              className: `framer-om4jbj`,
                              fonts: [`GF;Inter Tight-500`],
                              layoutDependency: j,
                              layoutId: `rbY4BYctN`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-633663d4-6135-4d2d-a328-8707c8a7d2dc, rgb(255, 60, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: m,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-URF1P.framer-1lzh311, .framer-URF1P .framer-1lzh311 { display: block; }`,
          `.framer-URF1P.framer-h94ef6 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: 840px; justify-content: center; overflow: hidden; padding: 208px 136px 96px 288px; position: relative; width: 1200px; }`,
          `.framer-URF1P .framer-9noyxw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-URF1P .framer-170nv81 { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; }`,
          `.framer-URF1P .framer-bn9zdy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 0px 0px 48px 0px; position: relative; width: 1px; }`,
          `.framer-URF1P .framer-b8nw0q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 0px; overflow: hidden; position: absolute; top: -72px; width: 24px; z-index: 1; }`,
          `.framer-URF1P .framer-140h0t5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 178px 0px 178px 0px; position: relative; width: 100%; }`,
          `.framer-URF1P .framer-c3raog { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-URF1P .framer-om4jbj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-URF1P.framer-h94ef6, .framer-URF1P .framer-9noyxw, .framer-URF1P .framer-140h0t5 { gap: 0px; } .framer-URF1P.framer-h94ef6 > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-URF1P.framer-h94ef6 > :first-child, .framer-URF1P .framer-9noyxw > :first-child { margin-left: 0px; } .framer-URF1P.framer-h94ef6 > :last-child, .framer-URF1P .framer-9noyxw > :last-child { margin-right: 0px; } .framer-URF1P .framer-9noyxw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-URF1P .framer-140h0t5 > * { margin: 0px; margin-bottom: calc(44px / 2); margin-top: calc(44px / 2); } .framer-URF1P .framer-140h0t5 > :first-child { margin-top: 0px; } .framer-URF1P .framer-140h0t5 > :last-child { margin-bottom: 0px; } }`,
          `.framer-URF1P.framer-v-wzxd4t.framer-h94ef6 { height: 600px; padding: 72px; width: 810px; }`,
          `.framer-URF1P.framer-v-wzxd4t .framer-170nv81 { max-width: 480px; }`,
          `.framer-URF1P.framer-v-wzxd4t .framer-bn9zdy { flex: 2 0 0px; }`,
          `.framer-URF1P.framer-v-wzxd4t .framer-140h0t5 { gap: 76px; padding: 121px 0px 121px 0px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-URF1P.framer-v-wzxd4t .framer-140h0t5 { gap: 0px; } .framer-URF1P.framer-v-wzxd4t .framer-140h0t5 > * { margin: 0px; margin-bottom: calc(76px / 2); margin-top: calc(76px / 2); } .framer-URF1P.framer-v-wzxd4t .framer-140h0t5 > :first-child { margin-top: 0px; } .framer-URF1P.framer-v-wzxd4t .framer-140h0t5 > :last-child { margin-bottom: 0px; } }`,
          `.framer-URF1P.framer-v-1pvrksj.framer-h94ef6 { align-content: center; align-items: center; flex-direction: column; gap: 96px; height: 800px; padding: 0px 0px 120px 0px; width: 390px; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-9noyxw { flex: 1 0 0px; height: 1px; width: 100%; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-170nv81 { flex: none; height: 508px; left: 0px; position: absolute; right: 0px; top: 0px; width: unset; z-index: 1; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-bn9zdy { flex: 0.5 0 0px; height: 1px; padding: 0px 24px 0px 24px; width: 100%; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-b8nw0q { left: 24px; top: -48px; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-140h0t5 { align-content: flex-end; align-items: flex-end; gap: 24px; padding: 17px 0px 17px 0px; }`,
          `.framer-URF1P.framer-v-1pvrksj .framer-c3raog { width: 319px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-URF1P.framer-v-1pvrksj.framer-h94ef6, .framer-URF1P.framer-v-1pvrksj .framer-140h0t5 { gap: 0px; } .framer-URF1P.framer-v-1pvrksj.framer-h94ef6 > * { margin: 0px; margin-bottom: calc(96px / 2); margin-top: calc(96px / 2); } .framer-URF1P.framer-v-1pvrksj.framer-h94ef6 > :first-child, .framer-URF1P.framer-v-1pvrksj .framer-140h0t5 > :first-child { margin-top: 0px; } .framer-URF1P.framer-v-1pvrksj.framer-h94ef6 > :last-child, .framer-URF1P.framer-v-1pvrksj .framer-140h0t5 > :last-child { margin-bottom: 0px; } .framer-URF1P.framer-v-1pvrksj .framer-140h0t5 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }`,
        ],
        `framer-URF1P`
      )),
      (Vn = Bn),
      (Bn.displayName = `Member-Crad`),
      (Bn.defaultProps = { height: 840, width: 1200 }),
      ue(Bn, {
        variant: {
          options: [`aVzx9Tbuc`, `HmmL38cT7`, `dJ70K_8cL`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        Wf7tEjyQZ: {
          __defaultAssetReference: `data:framer/asset-reference,CJBj0TlQCy4JbvyLCVeRkPD0lQ.jpg?originalFilename=photo-1514136649217-b627b4b9cfb2%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw5fHxCZWF1dGlmdWwlMjB3b21hbnxlbnwwfHx8fDE3MDI5MTkzOTR8MA%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
          title: `Image`,
          type: M.ResponsiveImage,
        },
        qrji55bSI: {
          defaultValue: `Alexandra Rodriguez`,
          displayTextArea: !1,
          title: `Member Name`,
          type: M.String,
        },
        Ih80sscPv: {
          defaultValue: `Creative Director`,
          displayTextArea: !1,
          title: `Role`,
          type: M.String,
        },
      }),
      C(
        Bn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter Tight`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqWSRToK8EPg.woff2`,
                weight: `700`,
              },
              {
                family: `Inter Tight`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Un(e) {
  let [t, n] = a(null);
  u(() => {
    let t = e.customSvgCode;
    r(t);
  });
  let r = (t) => {
      let r = [
          [/width="[^"]*"/, `width="100%"`],
          [/height="[^"]*"/, `height="100%"`],
        ],
        i = t.includes(`stroke="`),
        a = t.includes(`stroke-width="`),
        o = t.includes(`stroke-linecap="`),
        s = t.includes(`stroke-linejoin="`);
      if (t.includes(`<circle`)) {
        let n = /<circle[^>]*fill="([^"]*)"/,
          i = t.match(n);
        if (i) {
          let r = i[0].replace(i[1], e.customColor);
          t = t.replace(n, r);
        } else r.push([/<circle/g, `<circle fill="${e.customColor}"`]);
      }
      (i
        ? (o
            ? r.push([/<path/g, `<path stroke="${e.customColor}" stroke-linecap="${e.lineCap}"`])
            : r.push([/<path/g, `<path stroke="${e.customColor}"`]),
          a &&
            r.push([/stroke-width="(?!0\b)\d+(\.\d+)?"/g, `stroke-width="${e.customStrokeWidth}"`]))
        : r.push([/<path/g, `<path fill="${e.customColor}"`]),
        t.includes(`overflow="`)
          ? r.push([/overflow="[^"]*"/, `overflow="visible"`])
          : r.push([/<svg/, `<svg overflow="visible"`]),
        s
          ? r.push([/stroke-linejoin="[^"]*"/, `stroke-linejoin="${e.lineJoin}"`])
          : r.push([/<path/g, `<path stroke-linejoin="${e.lineJoin}"`]),
        r.forEach(([e, n]) => {
          t = t.replace(e, n);
        }),
        n(t));
    },
    i = {
      padding: `${e.customPadding}px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      overflow: `visible`,
    };
  return c(`div`, { dangerouslySetInnerHTML: { __html: t }, style: i });
}
var Wn,
  Gn = t(() => {
    (p(),
      n(),
      T(),
      (Un.defaultProps = {
        customSvgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>`,
        customColor: `#ffffff`,
        customPadding: 0,
        customStrokeWidth: 2,
        lineCap: `butt`,
        lineJoin: `miter`,
      }),
      ue(Un, {
        customSvgCode: { type: M.String, title: `SVG Code`, displayTextArea: !1 },
        customColor: { type: M.Color, title: `Color`, defaultValue: `#ffffff` },
        customPadding: {
          type: M.Number,
          title: `Padding`,
          defaultValue: 0,
          min: 0,
          step: 1,
          displayStepper: !0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
        customStrokeWidth: {
          type: M.Number,
          title: `Stroke`,
          defaultValue: 2,
          min: 0,
          step: 0.1,
          displayStepper: !0,
          hidden: (e) => !e.customSvgCode.includes(`stroke="`),
        },
        lineCap: {
          type: M.Enum,
          title: `Line Cap`,
          options: [`butt`, `round`, `square`],
          optionTitles: [`Butt`, `Round`, `Square`],
          defaultValue: `butt`,
          hidden: (e) => !e.customSvgCode.includes(`stroke="`),
        },
        lineJoin: {
          type: M.Enum,
          title: `Line Join`,
          options: [`round`, `miter`, `bevel`],
          optionTitles: [`Round`, `Miter`, `Bevel`],
          defaultValue: `miter`,
          hidden: (e) => !e.customSvgCode.includes(`stroke="`),
        },
      }),
      (Wn = Un));
  });
function Kn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar = t(() => {
    (p(),
      T(),
      x(),
      n(),
      Gn(),
      (qn = k(Wn)),
      (Jn = { eYfNE8tkf: { hover: !0 } }),
      (Yn = `framer-610CN`),
      (Xn = { eYfNE8tkf: `framer-v-164w25l` }),
      (Zn = { damping: 60, delay: 0, mass: 1, stiffness: 800, type: `spring` }),
      (Qn = (e, t) => `translate(-50%, -50%) ${t}`),
      ($n = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (er = v(i)),
      (tr = ({
        defaultCircle: e,
        defaultFill: t,
        defaultIcon: n,
        defaultText: r,
        height: i,
        hoverCircle: a,
        hoverFill: o,
        hoverIcon: s,
        hoverText: c,
        icon01: l,
        icon02: u,
        id: d,
        label: f,
        link: p,
        newTab: m,
        width: h,
        ...g
      }) => ({
        ...g,
        AL6IB9otP:
          o ??
          g.AL6IB9otP ??
          `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65))`,
        fTULNZYxz:
          n ?? g.fTULNZYxz ?? `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
        g0e9eEWSg:
          r ??
          g.g0e9eEWSg ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        k3JhaMy5_:
          l ??
          g.k3JhaMy5_ ??
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
        Lf8afaZg_: a ?? g.Lf8afaZg_ ?? `rgb(252, 94, 66)`,
        Lzyfez8Rw: e ?? g.Lzyfez8Rw ?? `rgb(255, 255, 255)`,
        mKVpWCoSL:
          c ??
          g.mKVpWCoSL ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        n4p6Q_Jl3: p ?? g.n4p6Q_Jl3,
        Oon8L041D:
          t ?? g.Oon8L041D ?? `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
        rZYR6tqXt:
          s ??
          g.rZYR6tqXt ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        Saf4VZmW2: m ?? g.Saf4VZmW2,
        VArIlTNTt: f ?? g.VArIlTNTt ?? `Learn more`,
        wbc_aIg1P:
          u ??
          g.wbc_aIg1P ??
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
      })),
      (nr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rr = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              VArIlTNTt: d,
              Oon8L041D: p,
              AL6IB9otP: m,
              Lzyfez8Rw: g,
              Lf8afaZg_: _,
              g0e9eEWSg: y,
              mKVpWCoSL: x,
              fTULNZYxz: C,
              rZYR6tqXt: T,
              k3JhaMy5_: E,
              wbc_aIg1P: D,
              n4p6Q_Jl3: O,
              Saf4VZmW2: k,
              ...A
            } = tr(e),
            {
              baseVariant: j,
              classNames: M,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: R,
              isLoading: z,
              setGestureState: B,
              setVariant: V,
              variants: H,
            } = L({
              defaultVariant: `eYfNE8tkf`,
              enabledGestures: Jn,
              variant: u,
              variantClassNames: Xn,
            }),
            U = nr(e, H),
            ee = r(null),
            te = h(),
            ne = [];
          return (
            S(),
            c(b, {
              id: l ?? te,
              children: c(er, {
                animate: H,
                initial: !1,
                children: c($n, {
                  value: Zn,
                  children: c(I, {
                    href: O,
                    openInNewTab: k,
                    smoothScroll: !0,
                    children: f(v.a, {
                      ...A,
                      ...F,
                      className: `${w(Yn, ...ne, `framer-164w25l`, s, M)} framer-2ma21l`,
                      "data-framer-name": `Default`,
                      layoutDependency: U,
                      layoutId: `eYfNE8tkf`,
                      ref: t ?? ee,
                      style: {
                        backgroundColor: p,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        ...o,
                      },
                      variants: { "eYfNE8tkf-hover": { backgroundColor: m } },
                      ...Kn({ "eYfNE8tkf-hover": { "data-framer-name": void 0 } }, j, R),
                      children: [
                        c(v.div, {
                          className: `framer-13fffqp`,
                          "data-framer-name": `Circle`,
                          layoutDependency: U,
                          layoutId: `UBjWN4ooK`,
                          style: {
                            backgroundColor: g,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          variants: { "eYfNE8tkf-hover": { backgroundColor: _ } },
                          children: f(v.div, {
                            className: `framer-1elhlwu`,
                            "data-framer-name": `Icon`,
                            layoutDependency: U,
                            layoutId: `oskS9bhKo`,
                            children: [
                              c(G, {
                                children: c(v.div, {
                                  className: `framer-1jorm4g-container`,
                                  layoutDependency: U,
                                  layoutId: `YYyyRtZyW-container`,
                                  transformTemplate: Qn,
                                  ...Kn({ "eYfNE8tkf-hover": { transformTemplate: void 0 } }, j, R),
                                  children: c(Wn, {
                                    customColor: C,
                                    customPadding: 0,
                                    customStrokeWidth: 2,
                                    customSvgCode: E,
                                    height: `100%`,
                                    id: `YYyyRtZyW`,
                                    layoutId: `YYyyRtZyW`,
                                    lineCap: `butt`,
                                    lineJoin: `miter`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...Kn({ "eYfNE8tkf-hover": { customColor: T } }, j, R),
                                  }),
                                }),
                              }),
                              c(G, {
                                children: c(v.div, {
                                  className: `framer-6664ba-container`,
                                  layoutDependency: U,
                                  layoutId: `uBVwaUkve-container`,
                                  children: c(Wn, {
                                    customColor: C,
                                    customPadding: 0,
                                    customStrokeWidth: 2,
                                    customSvgCode: D,
                                    height: `100%`,
                                    id: `uBVwaUkve`,
                                    layoutId: `uBVwaUkve`,
                                    lineCap: `butt`,
                                    lineJoin: `miter`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...Kn({ "eYfNE8tkf-hover": { customColor: T } }, j, R),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        c(K, {
                          __fromCanvasComponent: !0,
                          children: c(i, {
                            children: c(v.p, {
                              style: {
                                "--font-selector": `R0Y7SW50ZXItNTAw`,
                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                "--framer-font-weight": `500`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-g0e9eEWSg-iHx9a6mQd))`,
                              },
                              children: `Learn more`,
                            }),
                          }),
                          className: `framer-1trnv`,
                          fonts: [`GF;Inter-500`],
                          layoutDependency: U,
                          layoutId: `ywqKJjP9a`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-g0e9eEWSg-iHx9a6mQd)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--framer-paragraph-spacing": `0px`,
                            "--variable-reference-g0e9eEWSg-iHx9a6mQd": y,
                            "--variable-reference-mKVpWCoSL-iHx9a6mQd": x,
                          },
                          text: d,
                          variants: {
                            "eYfNE8tkf-hover": {
                              "--extracted-r6o4lv": `var(--variable-reference-mKVpWCoSL-iHx9a6mQd)`,
                              "--variable-reference-mKVpWCoSL-iHx9a6mQd": x,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Kn(
                            {
                              "eYfNE8tkf-hover": {
                                children: c(i, {
                                  children: c(v.p, {
                                    style: {
                                      "--font-selector": `R0Y7SW50ZXItNTAw`,
                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                      "--framer-font-weight": `500`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-mKVpWCoSL-iHx9a6mQd))`,
                                    },
                                    children: `Learn more`,
                                  }),
                                }),
                              },
                            },
                            j,
                            R
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-610CN.framer-2ma21l, .framer-610CN .framer-2ma21l { display: block; }`,
          `.framer-610CN.framer-164w25l { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 58px 0px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-610CN .framer-13fffqp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: flex-end; overflow: hidden; padding: 0px 12px 0px 0px; position: absolute; right: 2px; top: calc(50.00000000000002% - 40px / 2); width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-610CN .framer-1elhlwu { flex: none; height: 16px; overflow: hidden; position: relative; width: 16px; }`,
          `.framer-610CN .framer-1jorm4g-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; position: absolute; top: 50%; width: 16px; }`,
          `.framer-610CN .framer-6664ba-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: -16px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-610CN .framer-1trnv { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-610CN.framer-164w25l, .framer-610CN .framer-13fffqp { gap: 0px; } .framer-610CN.framer-164w25l > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-610CN.framer-164w25l > :first-child, .framer-610CN .framer-13fffqp > :first-child { margin-left: 0px; } .framer-610CN.framer-164w25l > :last-child, .framer-610CN .framer-13fffqp > :last-child { margin-right: 0px; } .framer-610CN .framer-13fffqp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-13fffqp { left: 2px; width: unset; }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-1jorm4g-container { bottom: 0px; height: unset; left: unset; right: -16px; top: 0px; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-6664ba-container { left: 0px; }`,
        ],
        `framer-610CN`
      )),
      (ir = rr),
      (rr.displayName = `Button Icon`),
      (rr.defaultProps = { height: 44, width: 169 }),
      ue(rr, {
        VArIlTNTt: {
          defaultValue: `Learn more`,
          displayTextArea: !1,
          title: `Label`,
          type: M.String,
        },
        Oon8L041D: {
          defaultValue: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114)) /* {"name":"Primary"} */`,
          title: `Default Fill`,
          type: M.Color,
        },
        AL6IB9otP: {
          defaultValue: `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65)) /* {"name":"Orange"} */`,
          title: `Hover Fill`,
          type: M.Color,
        },
        Lzyfez8Rw: { defaultValue: `rgb(255, 255, 255)`, title: `Default Circle`, type: M.Color },
        Lf8afaZg_: { defaultValue: `rgb(252, 94, 66)`, title: `Hover Circle`, type: M.Color },
        g0e9eEWSg: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Default Text`,
          type: M.Color,
        },
        mKVpWCoSL: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Hover Text`,
          type: M.Color,
        },
        fTULNZYxz: {
          defaultValue: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114)) /* {"name":"Primary"} */`,
          title: `Default Icon`,
          type: M.Color,
        },
        rZYR6tqXt: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Hover Icon`,
          type: M.Color,
        },
        k3JhaMy5_: {
          defaultValue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
          displayTextArea: !1,
          title: `Icon 01`,
          type: M.String,
        },
        wbc_aIg1P: {
          defaultValue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
          displayTextArea: !1,
          title: `Icon 02`,
          type: M.String,
        },
        n4p6Q_Jl3: { title: `Link`, type: M.Link },
        Saf4VZmW2: { defaultValue: !1, title: `New Tab`, type: M.Boolean },
      }),
      C(
        rr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...qn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  or,
  sr,
  cr,
  lr = t(() => {
    (T(),
      O.loadFonts([`GF;Lustria-regular`]),
      (or = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Lustria`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/lustria/v13/9oRONYodvDEyjuhOrC05MtPyAcg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (sr = [
        `.framer-1GnFd .framer-styles-preset-3ossdy:not(.rich-text-wrapper), .framer-1GnFd .framer-styles-preset-3ossdy.rich-text-wrapper h2 { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -1px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; }`,
        `@media (max-width: 1535px) and (min-width: 1280px) { .framer-1GnFd .framer-styles-preset-3ossdy:not(.rich-text-wrapper), .framer-1GnFd .framer-styles-preset-3ossdy.rich-text-wrapper h2 { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -1px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
        `@media (max-width: 1279px) and (min-width: 768px) { .framer-1GnFd .framer-styles-preset-3ossdy:not(.rich-text-wrapper), .framer-1GnFd .framer-styles-preset-3ossdy.rich-text-wrapper h2 { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -1px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
        `@media (max-width: 767px) and (min-width: 0px) { .framer-1GnFd .framer-styles-preset-3ossdy:not(.rich-text-wrapper), .framer-1GnFd .framer-styles-preset-3ossdy.rich-text-wrapper h2 { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -1px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
      ]),
      (cr = `framer-1GnFd`));
  }),
  ur,
  dr,
  fr,
  pr = t(() => {
    (T(),
      O.loadFonts([`Inter-Bold`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (ur = []),
      (dr = [
        `.framer-CWDRC .framer-styles-preset-1u21a8r:not(.rich-text-wrapper), .framer-CWDRC .framer-styles-preset-1u21a8r.rich-text-wrapper h3 { --framer-font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter-Black", "Inter", sans-serif; --framer-font-family-bold-italic: "Inter-BlackItalic", "Inter", sans-serif; --framer-font-family-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }`,
      ]),
      (fr = `framer-CWDRC`));
  });
function mr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er = t(() => {
    (p(),
      T(),
      x(),
      n(),
      lr(),
      pr(),
      (hr = [`gy1TUFNrr`, `TmsvLuDjo`, `WXhwoQgiu`]),
      (gr = `framer-inBcI`),
      (_r = {
        gy1TUFNrr: `framer-v-uoejs0`,
        TmsvLuDjo: `framer-v-1jou5ik`,
        WXhwoQgiu: `framer-v-zdnk45`,
      }),
      (vr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (yr = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (br = v.create(i)),
      (xr = { Desktop: `gy1TUFNrr`, Phone: `WXhwoQgiu`, Tablet: `TmsvLuDjo` }),
      (Sr = ({ headline: e, height: t, id: n, subheadline: r, width: i, ...a }) => ({
        ...a,
        fSNtEihhU: e ?? a.fSNtEihhU ?? `How companies succeed using our product`,
        variant: xr[a.variant] ?? a.variant ?? `gy1TUFNrr`,
        xEktl70bp:
          r ??
          a.xEktl70bp ??
          `The path to success starts here. See how companies are winning with our product.`,
      })),
      (Cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wr = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              fSNtEihhU: d,
              xEktl70bp: p,
              ...m
            } = Sr(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = L({
              cycleOrder: hr,
              defaultVariant: `gy1TUFNrr`,
              variant: u,
              variantClassNames: _r,
            }),
            k = Cr(e, O),
            A = r(null),
            j = h(),
            M = [cr, fr];
          return (
            S(),
            c(b, {
              id: l ?? j,
              children: c(br, {
                animate: O,
                initial: !1,
                children: c(yr, {
                  value: vr,
                  children: f(v.div, {
                    ...m,
                    ...x,
                    className: w(gr, ...M, `framer-uoejs0`, s, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: k,
                    layoutId: `gy1TUFNrr`,
                    ref: t ?? A,
                    style: { ...o },
                    ...mr(
                      {
                        TmsvLuDjo: { "data-framer-name": `Tablet` },
                        WXhwoQgiu: { "data-framer-name": `Phone` },
                      },
                      g,
                      C
                    ),
                    children: [
                      c(K, {
                        __fromCanvasComponent: !0,
                        children: c(i, {
                          children: c(v.h2, {
                            className: `framer-styles-preset-3ossdy`,
                            "data-styles-preset": `eSObMJ2RV`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0)))`,
                            },
                            children: `How companies succeed using our product`,
                          }),
                        }),
                        className: `framer-opo1tf`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `NVJl3WqBl`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: d,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      c(K, {
                        __fromCanvasComponent: !0,
                        children: c(i, {
                          children: c(v.h3, {
                            className: `framer-styles-preset-1u21a8r`,
                            "data-styles-preset": `kuXPvNFOu`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8)))`,
                            },
                            children: `The path to success starts here. See how companies are winning with our product.`,
                          }),
                        }),
                        className: `framer-5646h9`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `wpW39Ip8F`,
                        style: {
                          "--extracted-a0htzi": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-inBcI.framer-hwokbd, .framer-inBcI .framer-hwokbd { display: block; }`,
          `.framer-inBcI.framer-uoejs0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-height: 620px; max-width: 620px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-inBcI .framer-opo1tf, .framer-inBcI .framer-5646h9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 620px; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-inBcI.framer-uoejs0 { gap: 0px; } .framer-inBcI.framer-uoejs0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-inBcI.framer-uoejs0 > :first-child { margin-top: 0px; } .framer-inBcI.framer-uoejs0 > :last-child { margin-bottom: 0px; } }`,
          `.framer-inBcI.framer-v-1jou5ik.framer-uoejs0 { max-width: 810px; padding: 20px 0px 20px 0px; width: 810px; }`,
          `.framer-inBcI.framer-v-zdnk45.framer-uoejs0 { padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-inBcI.framer-v-zdnk45 .framer-opo1tf, .framer-inBcI.framer-v-zdnk45 .framer-5646h9 { max-width: 620px; width: auto; }`,
          ...sr,
          ...dr,
        ],
        `framer-inBcI`
      )),
      (Tr = wr),
      (wr.displayName = `Section heading`),
      (wr.defaultProps = { height: 187, width: 620 }),
      ue(wr, {
        variant: {
          options: [`gy1TUFNrr`, `TmsvLuDjo`, `WXhwoQgiu`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        fSNtEihhU: {
          defaultValue: `How companies succeed using our product`,
          description: ``,
          displayTextArea: !1,
          title: `Headline`,
          type: M.String,
        },
        xEktl70bp: {
          defaultValue: `The path to success starts here. See how companies are winning with our product.`,
          displayTextArea: !1,
          title: `Subheadline`,
          type: M.String,
        },
      }),
      C(
        wr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(or),
          ...E(ur),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Dr,
  Or,
  kr,
  Ar = t(() => {
    (T(),
      O.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Dr = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Or = [
        `.framer-LEoly .framer-styles-preset-f3tiw1:not(.rich-text-wrapper), .framer-LEoly .framer-styles-preset-f3tiw1.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (kr = `framer-LEoly`));
  });
function jr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur = t(() => {
    (p(),
      T(),
      x(),
      n(),
      Ar(),
      (Mr = [`pm3k58vGI`, `ca5eT7goh`]),
      (Nr = `framer-g6dA3`),
      (Pr = { ca5eT7goh: `framer-v-yz8g7t`, pm3k58vGI: `framer-v-1khdrw9` }),
      (Fr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ir = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Lr = v(i)),
      (Rr = { Active: `ca5eT7goh`, Inactive: `pm3k58vGI` }),
      (zr = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        kCh3xRGWK: r ?? a.kCh3xRGWK ?? `NoCode`,
        LRvvsEeHp: n ?? a.LRvvsEeHp,
        variant: Rr[a.variant] ?? a.variant ?? `pm3k58vGI`,
      })),
      (Br = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vr = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              kCh3xRGWK: d,
              LRvvsEeHp: f,
              ...p
            } = zr(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = L({
              cycleOrder: Mr,
              defaultVariant: `pm3k58vGI`,
              variant: u,
              variantClassNames: Pr,
            }),
            O = Br(e, D),
            k = r(null),
            A = h(),
            j = [kr];
          return (
            S(),
            c(b, {
              id: l ?? A,
              children: c(Lr, {
                animate: D,
                initial: !1,
                children: c(Ir, {
                  value: Fr,
                  children: c(I, {
                    href: f,
                    openInNewTab: !1,
                    smoothScroll: !0,
                    children: c(v.a, {
                      ...p,
                      ...y,
                      className: `${w(Nr, ...j, `framer-1khdrw9`, s, g)} framer-1ogkfpg`,
                      "data-framer-name": `Inactive`,
                      layoutDependency: O,
                      layoutId: `pm3k58vGI`,
                      ref: t ?? k,
                      style: { ...o },
                      ...jr({ ca5eT7goh: { "data-framer-name": `Active` } }, m, x),
                      children: c(K, {
                        __fromCanvasComponent: !0,
                        children: c(i, {
                          children: c(v.p, {
                            className: `framer-styles-preset-f3tiw1`,
                            "data-styles-preset": `xWmZ2i6Jq`,
                            children: `NoCode`,
                          }),
                        }),
                        className: `framer-1dbudi7`,
                        "data-framer-name": `We blend a strategic approach with studio-caliber creativity.`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `qWt7UPdsq`,
                        style: { "--framer-paragraph-spacing": `0px` },
                        text: d,
                        variants: {
                          ca5eT7goh: {
                            "--extracted-r6o4lv": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...jr(
                          {
                            ca5eT7goh: {
                              children: c(i, {
                                children: c(v.p, {
                                  className: `framer-styles-preset-f3tiw1`,
                                  "data-styles-preset": `xWmZ2i6Jq`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64)))`,
                                  },
                                  children: `NoCode`,
                                }),
                              }),
                            },
                          },
                          m,
                          x
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-g6dA3.framer-1ogkfpg, .framer-g6dA3 .framer-1ogkfpg { display: block; }`,
          `.framer-g6dA3.framer-1khdrw9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-g6dA3 .framer-1dbudi7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-g6dA3.framer-1khdrw9 { gap: 0px; } .framer-g6dA3.framer-1khdrw9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-g6dA3.framer-1khdrw9 > :first-child { margin-left: 0px; } .framer-g6dA3.framer-1khdrw9 > :last-child { margin-right: 0px; } }`,
          ...Or,
        ],
        `framer-g6dA3`
      )),
      (Hr = Vr),
      (Vr.displayName = `Services Scroll Animation`),
      (Vr.defaultProps = { height: 42, width: 109 }),
      ue(Vr, {
        variant: {
          options: [`pm3k58vGI`, `ca5eT7goh`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: M.Enum,
        },
        kCh3xRGWK: { defaultValue: `NoCode`, displayTextArea: !1, title: `Title`, type: M.String },
        LRvvsEeHp: { title: `Link`, type: M.Link },
      }),
      C(
        Vr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(Dr),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function X(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Wr(e) {
  throw Error(`Unexpected value: ${e}`);
}
function Gr(e) {
  return Number.isFinite(e);
}
function Kr(e) {
  return e === void 0;
}
function qr(e) {
  return e === null;
}
function Jr(e, t) {
  return ma(e, t || {}, 0, 0);
}
function Yr(e, t) {
  return na(e, { i: 2 }, t && t.out, t && t.dictionary);
}
function Xr(e, t, n, r) {
  (X(e >= t, e, `outside lower bound for`, r), X(e <= n, e, `outside upper bound for`, r));
}
function Zr(e, t, n) {
  let r = new Uint8Array(e);
  new Uint8Array(t).set(r, n);
}
function Qr(e) {
  if (qr(e)) return 0;
  switch (e.type) {
    case M.Array:
      return 1;
    case M.Boolean:
      return 2;
    case M.Color:
      return 3;
    case M.Date:
      return 4;
    case M.Enum:
      return 5;
    case M.File:
      return 6;
    case M.ResponsiveImage:
      return 10;
    case M.Link:
      return 7;
    case M.Number:
      return 8;
    case M.Object:
      return 9;
    case M.RichText:
      return 11;
    case M.String:
      return 12;
    default:
      Wr(e);
  }
}
async function $r(e, t) {
  let n = await fetch(e, { headers: { Range: si(t) } });
  if (!n.ok) throw Error(`Request failed: ${n.status} ${n.statusText}`);
  let r = await n.arrayBuffer(),
    i = new Uint8Array(r);
  if (n.status === 200)
    return t.map((e) => {
      if (e.to > i.length) throw Error(`Missing data`);
      return i.slice(e.from, e.to);
    });
  if (n.status === 206) {
    let e = n.headers.get(`Content-Type`);
    if (!e) throw Error(`Missing Content-Type header`);
    let r = new Wa(),
      a = new za.default(e);
    if (a.type === `multipart` && a.subtype === `byteranges`) {
      let e = a.parameters.get(`boundary`);
      if (!e) throw Error(`Missing boundary parameter`);
      let t = ei(i, e);
      for (let { headers: e, body: n } of t) {
        let t = e.get(`Content-Range`);
        if (!t) throw Error(`Missing Content-Range header`);
        let i = ti(t);
        if (i.unit !== `bytes`) throw Error(`Unsupported unit`);
        r.write(i.start, n);
      }
    } else {
      let e = n.headers.get(`Content-Range`);
      if (!e) throw Error(`Missing Content-Range header`);
      let t = ti(e);
      if (t.unit !== `bytes`) throw Error(`Unsupported unit`);
      r.write(t.start, i);
    }
    return t.map((e) => r.read(e.from, e.to - e.from));
  }
  throw Error(`Unsupported response: ${n.status} ${n.statusText}`);
}
function ei(e, t) {
  let n = Ha.encode(Va + t),
    r = ri(e, n);
  if (Kr(r)) throw Error(`Missing parts start`);
  let i = r + n.length,
    a = ii(e, Ha.encode(Ba + Va + t + Va));
  if (Kr(a)) throw Error(`Missing parts end`);
  let o = Ha.encode(Ba + Va + t);
  return ni(e.subarray(i, a), o).map((e) => {
    let t = Ha.encode(Ba + Ba),
      n = ri(e, t);
    if (Kr(n)) throw Error(`Missing headers end`);
    let r = Ha.encode(Ba),
      i = ni(e.subarray(0, n), r),
      a = new Headers();
    for (let e of i) {
      let [t, n] = Ua.decode(e).split(`: `, 2);
      t && n && a.append(t, n);
    }
    let o = n + t.length;
    return { headers: a, body: e.slice(o) };
  });
}
function ti(e) {
  let t = RegExp(`^(?<unit>\\w+) (?<start>\\d+)-(?<end>\\d+)\\/(?<size>\\d+|\\*)$`, `u`).exec(e);
  if (!t || !t.groups) throw Error(`Invalid Content-Range header`);
  let { unit: n, start: r, end: i, size: a } = t.groups;
  return { unit: n, start: Number(r), end: Number(i), size: a === `*` ? null : Number(a) };
}
function ni(e, t) {
  let n = [];
  for (; e.length > 0; ) {
    let r = ri(e, t) ?? e.length,
      i = e.subarray(0, r);
    (n.push(i), (e = e.subarray(r + t.length)));
  }
  return n;
}
function ri(e, t) {
  for (let n = 0; n < e.length - t.length; n++) if (ai(e.subarray(n), t)) return n;
}
function ii(e, t) {
  for (let n = e.length - t.length; n >= 0; n--) if (ai(e.subarray(n), t)) return n;
}
function ai(e, t) {
  for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function oi(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function si(e) {
  X(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return `bytes=${n.map((e) => `${e.from}-${e.to - 1}`).join(`,`)}`;
}
var ci,
  Z,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Q,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja = t(() => {
    for (
      T(),
        ui = Object.create,
        di = Object.defineProperty,
        fi = Object.getOwnPropertyDescriptor,
        pi = Object.getOwnPropertyNames,
        mi = Object.getPrototypeOf,
        hi = Object.prototype.hasOwnProperty,
        gi = (e, t) =>
          function () {
            return (t || (0, e[pi(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          },
        _i = (e, t, n, r) => {
          if ((t && typeof t == `object`) || typeof t == `function`)
            for (let i of pi(t))
              hi.call(e, i) ||
                i === n ||
                di(e, i, { get: () => t[i], enumerable: !(r = fi(t, i)) || r.enumerable });
          return e;
        },
        vi = (e, t, n) => (
          (n = e == null ? {} : ui(mi(e))),
          _i(!t && e && e.__esModule ? n : di(n, `default`, { value: e, enumerable: !0 }), e)
        ),
        yi = gi({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        }),
        bi = gi({
          "../../../node_modules/splaytree/dist/splay.js"(e, t) {
            var n = function () {
              var e = function (e, t) {
                ((this.next = null),
                  (this.key = e),
                  (this.data = t),
                  (this.left = null),
                  (this.right = null));
              };
              function t(e, t) {
                return e > t ? 1 : e < t ? -1 : 0;
              }
              function n(t, n, r) {
                for (var i = new e(null, null), a = i, o = i; ; ) {
                  var s = r(t, n.key);
                  if (s < 0) {
                    if (n.left === null) break;
                    if (0 > r(t, n.left.key)) {
                      var c = n.left;
                      if (((n.left = c.right), (c.right = n), (n = c).left === null)) break;
                    }
                    ((o.left = n), (o = n), (n = n.left));
                  } else if (s > 0) {
                    if (n.right === null) break;
                    if (r(t, n.right.key) > 0) {
                      var c = n.right;
                      if (((n.right = c.left), (c.left = n), (n = c).right === null)) break;
                    }
                    ((a.right = n), (a = n), (n = n.right));
                  } else break;
                }
                return (
                  (a.right = n.left),
                  (o.left = n.right),
                  (n.left = i.right),
                  (n.right = i.left),
                  n
                );
              }
              function r(t, r, i, a) {
                var o = new e(t, r);
                if (i === null) return ((o.left = o.right = null), o);
                i = n(t, i, a);
                var s = a(t, i.key);
                return (
                  s < 0
                    ? ((o.left = i.left), (o.right = i), (i.left = null))
                    : s >= 0 && ((o.right = i.right), (o.left = i), (i.right = null)),
                  o
                );
              }
              function i(e, t, r) {
                var i = null,
                  a = null;
                if (t) {
                  t = n(e, t, r);
                  var o = r(t.key, e);
                  o === 0
                    ? ((i = t.left), (a = t.right))
                    : o < 0
                      ? ((a = t.right), (t.right = null), (i = t))
                      : ((i = t.left), (t.left = null), (a = t));
                }
                return { left: i, right: a };
              }
              return (function () {
                function a(e) {
                  (e === void 0 && (e = t),
                    (this._root = null),
                    (this._size = 0),
                    (this._comparator = e));
                }
                return (
                  (a.prototype.insert = function (e, t) {
                    return (this._size++, (this._root = r(e, t, this._root, this._comparator)));
                  }),
                  (a.prototype.add = function (t, r) {
                    var i = new e(t, r);
                    this._root === null &&
                      ((i.left = i.right = null), this._size++, (this._root = i));
                    var a = this._comparator,
                      o = n(t, this._root, a),
                      s = a(t, o.key);
                    return (
                      s === 0
                        ? (this._root = o)
                        : (s < 0
                            ? ((i.left = o.left), (i.right = o), (o.left = null))
                            : s > 0 && ((i.right = o.right), (i.left = o), (o.right = null)),
                          this._size++,
                          (this._root = i)),
                      this._root
                    );
                  }),
                  (a.prototype.remove = function (e) {
                    this._root = this._remove(e, this._root, this._comparator);
                  }),
                  (a.prototype._remove = function (e, t, r) {
                    var i;
                    return t === null
                      ? null
                      : ((t = n(e, t, r)),
                        r(e, t.key) === 0
                          ? (t.left === null
                              ? (i = t.right)
                              : ((i = n(e, t.left, r)).right = t.right),
                            this._size--,
                            i)
                          : t);
                  }),
                  (a.prototype.pop = function () {
                    var e = this._root;
                    if (e) {
                      for (; e.left; ) e = e.left;
                      return (
                        (this._root = n(e.key, this._root, this._comparator)),
                        (this._root = this._remove(e.key, this._root, this._comparator)),
                        { key: e.key, data: e.data }
                      );
                    }
                    return null;
                  }),
                  (a.prototype.findStatic = function (e) {
                    for (var t = this._root, n = this._comparator; t; ) {
                      var r = n(e, t.key);
                      if (r === 0) return t;
                      t = r < 0 ? t.left : t.right;
                    }
                    return null;
                  }),
                  (a.prototype.find = function (e) {
                    return this._root &&
                      ((this._root = n(e, this._root, this._comparator)),
                      this._comparator(e, this._root.key) !== 0)
                      ? null
                      : this._root;
                  }),
                  (a.prototype.contains = function (e) {
                    for (var t = this._root, n = this._comparator; t; ) {
                      var r = n(e, t.key);
                      if (r === 0) return !0;
                      t = r < 0 ? t.left : t.right;
                    }
                    return !1;
                  }),
                  (a.prototype.forEach = function (e, t) {
                    for (var n = this._root, r = [], i = !1; !i; )
                      n === null
                        ? r.length === 0
                          ? (i = !0)
                          : ((n = r.pop()), e.call(t, n), (n = n.right))
                        : (r.push(n), (n = n.left));
                    return this;
                  }),
                  (a.prototype.range = function (e, t, n, r) {
                    for (var i = [], a = this._comparator, o = this._root; i.length !== 0 || o; )
                      if (o) (i.push(o), (o = o.left));
                      else {
                        if (a((o = i.pop()).key, t) > 0) break;
                        if (a(o.key, e) >= 0 && n.call(r, o)) return this;
                        o = o.right;
                      }
                    return this;
                  }),
                  (a.prototype.keys = function () {
                    var e = [];
                    return (
                      this.forEach(function (t) {
                        var n = t.key;
                        return e.push(n);
                      }),
                      e
                    );
                  }),
                  (a.prototype.values = function () {
                    var e = [];
                    return (
                      this.forEach(function (t) {
                        var n = t.data;
                        return e.push(n);
                      }),
                      e
                    );
                  }),
                  (a.prototype.min = function () {
                    return this._root ? this.minNode(this._root).key : null;
                  }),
                  (a.prototype.max = function () {
                    return this._root ? this.maxNode(this._root).key : null;
                  }),
                  (a.prototype.minNode = function (e) {
                    if ((e === void 0 && (e = this._root), e)) for (; e.left; ) e = e.left;
                    return e;
                  }),
                  (a.prototype.maxNode = function (e) {
                    if ((e === void 0 && (e = this._root), e)) for (; e.right; ) e = e.right;
                    return e;
                  }),
                  (a.prototype.at = function (e) {
                    for (var t = this._root, n = !1, r = 0, i = []; !n; )
                      if (t) (i.push(t), (t = t.left));
                      else if (i.length > 0) {
                        if (((t = i.pop()), r === e)) return t;
                        (r++, (t = t.right));
                      } else n = !0;
                    return null;
                  }),
                  (a.prototype.next = function (e) {
                    var t = this._root,
                      n = null;
                    if (e.right) {
                      for (n = e.right; n.left; ) n = n.left;
                      return n;
                    }
                    for (var r = this._comparator; t; ) {
                      var i = r(e.key, t.key);
                      if (i === 0) break;
                      i < 0 ? ((n = t), (t = t.left)) : (t = t.right);
                    }
                    return n;
                  }),
                  (a.prototype.prev = function (e) {
                    var t = this._root,
                      n = null;
                    if (e.left !== null) {
                      for (n = e.left; n.right; ) n = n.right;
                      return n;
                    }
                    for (var r = this._comparator; t; ) {
                      var i = r(e.key, t.key);
                      if (i === 0) break;
                      i < 0 ? (t = t.left) : ((n = t), (t = t.right));
                    }
                    return n;
                  }),
                  (a.prototype.clear = function () {
                    return ((this._root = null), (this._size = 0), this);
                  }),
                  (a.prototype.toList = function () {
                    return (function (t) {
                      for (var n = t, r = [], i = !1, a = new e(null, null), o = a; !i; )
                        n
                          ? (r.push(n), (n = n.left))
                          : r.length > 0
                            ? (n = (n = o = o.next = r.pop()).right)
                            : (i = !0);
                      return ((o.next = null), a.next);
                    })(this._root);
                  }),
                  (a.prototype.load = function (t, n, r) {
                    (n === void 0 && (n = []), r === void 0 && (r = !1));
                    var i = t.length,
                      a = this._comparator;
                    if (
                      (r &&
                        (function e(t, n, r, i, a) {
                          if (!(r >= i)) {
                            for (var o = t[(r + i) >> 1], s = r - 1, c = i + 1; ; ) {
                              do s++;
                              while (0 > a(t[s], o));
                              do c--;
                              while (a(t[c], o) > 0);
                              if (s >= c) break;
                              var l = t[s];
                              ((t[s] = t[c]), (t[c] = l), (l = n[s]), (n[s] = n[c]), (n[c] = l));
                            }
                            (e(t, n, r, c, a), e(t, n, c + 1, i, a));
                          }
                        })(t, n, 0, i - 1, a),
                      this._root === null)
                    )
                      ((this._root = (function t(n, r, i, a) {
                        var o = a - i;
                        if (o > 0) {
                          var s = i + Math.floor(o / 2),
                            c = n[s],
                            l = r[s],
                            u = new e(c, l);
                          return ((u.left = t(n, r, i, s)), (u.right = t(n, r, s + 1, a)), u);
                        }
                        return null;
                      })(t, n, 0, i)),
                        (this._size = i));
                    else {
                      var o = (function (t, n, r) {
                        for (
                          var i = new e(null, null), a = i, o = t, s = n;
                          o !== null && s !== null;
                        )
                          (0 > r(o.key, s.key)
                            ? ((a.next = o), (o = o.next))
                            : ((a.next = s), (s = s.next)),
                            (a = a.next));
                        return (o === null ? s !== null && (a.next = s) : (a.next = o), i.next);
                      })(
                        this.toList(),
                        (function (t, n) {
                          for (var r = new e(null, null), i = r, a = 0; a < t.length; a++)
                            i = i.next = new e(t[a], n[a]);
                          return ((i.next = null), r.next);
                        })(t, n),
                        a
                      );
                      ((i = this._size + i),
                        (this._root = (function e(t, n, r) {
                          var i = r - n;
                          if (i > 0) {
                            var a = n + Math.floor(i / 2),
                              o = e(t, n, a),
                              s = t.head;
                            return (
                              (s.left = o),
                              (t.head = t.head.next),
                              (s.right = e(t, a + 1, r)),
                              s
                            );
                          }
                          return null;
                        })({ head: o }, 0, i)));
                    }
                    return this;
                  }),
                  (a.prototype.isEmpty = function () {
                    return this._root === null;
                  }),
                  Object.defineProperty(a.prototype, `size`, {
                    get: function () {
                      return this._size;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(a.prototype, `root`, {
                    get: function () {
                      return this._root;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  (a.prototype.toString = function (e) {
                    e === void 0 &&
                      (e = function (e) {
                        return String(e.key);
                      });
                    var t = [];
                    return (
                      (function e(t, n, r, i, a) {
                        if (t) {
                          i(
                            `` +
                              n +
                              (r ? `└── ` : `├── `) +
                              a(t) +
                              `
`
                          );
                          var o = n + (r ? `    ` : `│   `);
                          (t.left && e(t.left, o, !1, i, a), t.right && e(t.right, o, !0, i, a));
                        }
                      })(
                        this._root,
                        ``,
                        !0,
                        function (e) {
                          return t.push(e);
                        },
                        e
                      ),
                      t.join(``)
                    );
                  }),
                  (a.prototype.update = function (e, t, a) {
                    var o,
                      s,
                      c = this._comparator,
                      l = i(e, this._root, c),
                      u = l.left,
                      d = l.right;
                    (0 > c(e, t) ? (d = r(t, a, d, c)) : (u = r(t, a, u, c)),
                      (this._root =
                        ((o = u),
                        (s = d) === null
                          ? o
                          : (o === null || ((s = n(o.key, s, c)).left = o), s))));
                  }),
                  (a.prototype.split = function (e) {
                    return i(e, this._root, this._comparator);
                  }),
                  (a.prototype[Symbol.iterator] = function () {
                    var e, t, n;
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: s(0), throw: s(1), return: s(2) }),
                        typeof Symbol == `function` &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function s(a) {
                        return function (s) {
                          return (function (a) {
                            if (n) throw TypeError(`Generator is already executing.`);
                            for (; o; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (i =
                                      2 & a[0]
                                        ? r.return
                                        : a[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                    !(i = i.call(r, a[1])).done)
                                )
                                  return i;
                                switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                  case 0:
                                  case 1:
                                    i = a;
                                    break;
                                  case 4:
                                    return (o.label++, { value: a[1], done: !1 });
                                  case 5:
                                    (o.label++, (r = a[1]), (a = [0]));
                                    continue;
                                  case 7:
                                    ((a = o.ops.pop()), o.trys.pop());
                                    continue;
                                  default:
                                    if (
                                      !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                      (a[0] === 6 || a[0] === 2)
                                    ) {
                                      o = 0;
                                      continue;
                                    }
                                    if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                      o.label = a[1];
                                      break;
                                    }
                                    if (a[0] === 6 && o.label < i[1]) {
                                      ((o.label = i[1]), (i = a));
                                      break;
                                    }
                                    if (i && o.label < i[2]) {
                                      ((o.label = i[2]), o.ops.push(a));
                                      break;
                                    }
                                    (i[2] && o.ops.pop(), o.trys.pop());
                                    continue;
                                }
                                a = t.call(e, o);
                              } catch (e) {
                                ((a = [6, e]), (r = 0));
                              } finally {
                                n = i = 0;
                              }
                            if (5 & a[0]) throw a[1];
                            return { value: a[0] ? a[1] : void 0, done: !0 };
                          })([a, s]);
                        };
                      }
                    })(this, function (r) {
                      switch (r.label) {
                        case 0:
                          ((e = this._root), (t = []), (n = !1), (r.label = 1));
                        case 1:
                          return n
                            ? [3, 6]
                            : e === null
                              ? [3, 2]
                              : (t.push(e), (e = e.left), [3, 5]);
                        case 2:
                          return t.length === 0 ? [3, 4] : [4, (e = t.pop())];
                        case 3:
                          return (r.sent(), (e = e.right), [3, 5]);
                        case 4:
                          ((n = !0), (r.label = 5));
                        case 5:
                          return [3, 1];
                        case 6:
                          return [2];
                      }
                    });
                  }),
                  a
                );
              })();
            };
            typeof e == `object` && t !== void 0
              ? (t.exports = n())
              : typeof define == `function` && define.amd
                ? define(n)
                : (e.SplayTree = n());
          },
        }),
        xi = gi({
          "../../../node_modules/whatwg-mimetype/lib/utils.js"(e) {
            ((e.removeLeadingAndTrailingHTTPWhitespace = (e) =>
              e.replace(/^[ \t\n\r]+/u, ``).replace(/[ \t\n\r]+$/u, ``)),
              (e.removeTrailingHTTPWhitespace = (e) => e.replace(/[ \t\n\r]+$/u, ``)),
              (e.isHTTPWhitespaceChar = (e) =>
                e === ` ` ||
                e === `	` ||
                e ===
                  `
` ||
                e === `\r`),
              (e.solelyContainsHTTPTokenCodePoints = (e) =>
                /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(e)),
              (e.soleyContainsHTTPQuotedStringTokenCodePoints = (e) =>
                /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(e)),
              (e.asciiLowercase = (e) => e.replace(/[A-Z]/gu, (e) => e.toLowerCase())),
              (e.collectAnHTTPQuotedString = (e, t) => {
                let n = ``;
                for (t++; ; ) {
                  for (; t < e.length && e[t] !== `"` && e[t] !== `\\`; ) ((n += e[t]), ++t);
                  if (t >= e.length) break;
                  let r = e[t];
                  if ((++t, r === `\\`)) {
                    if (t >= e.length) {
                      n += `\\`;
                      break;
                    }
                    ((n += e[t]), ++t);
                  } else break;
                }
                return [n, t];
              }));
          },
        }),
        Si = gi({
          "../../../node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(e, t) {
            var {
              asciiLowercase: n,
              solelyContainsHTTPTokenCodePoints: r,
              soleyContainsHTTPQuotedStringTokenCodePoints: i,
            } = xi();
            t.exports = class {
              get size() {
                return this._map.size;
              }
              get(e) {
                return ((e = n(String(e))), this._map.get(e));
              }
              has(e) {
                return ((e = n(String(e))), this._map.has(e));
              }
              set(e, t) {
                if (((e = n(String(e))), (t = String(t)), !r(e)))
                  throw Error(
                    `Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`
                  );
                if (!i(t))
                  throw Error(
                    `Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`
                  );
                return this._map.set(e, t);
              }
              clear() {
                this._map.clear();
              }
              delete(e) {
                return ((e = n(String(e))), this._map.delete(e));
              }
              forEach(e, t) {
                this._map.forEach(e, t);
              }
              keys() {
                return this._map.keys();
              }
              values() {
                return this._map.values();
              }
              entries() {
                return this._map.entries();
              }
              [Symbol.iterator]() {
                return this._map[Symbol.iterator]();
              }
              constructor(e) {
                this._map = e;
              }
            };
          },
        }),
        Ci = gi({
          "../../../node_modules/whatwg-mimetype/lib/parser.js"(e, t) {
            var {
              removeLeadingAndTrailingHTTPWhitespace: n,
              removeTrailingHTTPWhitespace: r,
              isHTTPWhitespaceChar: i,
              solelyContainsHTTPTokenCodePoints: a,
              soleyContainsHTTPQuotedStringTokenCodePoints: o,
              asciiLowercase: s,
              collectAnHTTPQuotedString: c,
            } = xi();
            t.exports = (e) => {
              e = n(e);
              let t = 0,
                l = ``;
              for (; t < e.length && e[t] !== `/`; ) ((l += e[t]), ++t);
              if (l.length === 0 || !a(l) || t >= e.length) return null;
              ++t;
              let u = ``;
              for (; t < e.length && e[t] !== `;`; ) ((u += e[t]), ++t);
              if ((u = r(u)).length === 0 || !a(u)) return null;
              let d = { type: s(l), subtype: s(u), parameters: new Map() };
              for (; t < e.length; ) {
                for (++t; i(e[t]); ) ++t;
                let n = ``;
                for (; t < e.length && e[t] !== `;` && e[t] !== `=`; ) ((n += e[t]), ++t);
                if (((n = s(n)), t < e.length)) {
                  if (e[t] === `;`) continue;
                  ++t;
                }
                let l = null;
                if (e[t] === `"`) for ([l, t] = c(e, t); t < e.length && e[t] !== `;`; ) ++t;
                else {
                  for (l = ``; t < e.length && e[t] !== `;`; ) ((l += e[t]), ++t);
                  if ((l = r(l)) === ``) continue;
                }
                n.length > 0 && a(n) && o(l) && !d.parameters.has(n) && d.parameters.set(n, l);
              }
              return d;
            };
          },
        }),
        wi = gi({
          "../../../node_modules/whatwg-mimetype/lib/serializer.js"(e, t) {
            var { solelyContainsHTTPTokenCodePoints: n } = xi();
            t.exports = (e) => {
              let t = `${e.type}/${e.subtype}`;
              if (e.parameters.size === 0) return t;
              for (let [r, i] of e.parameters)
                ((t += `;` + r + `=`),
                  (n(i) && i.length !== 0) ||
                    ((i = i.replace(/(["\\])/gu, `\\$1`)), (i = `"${i}"`)),
                  (t += i));
              return t;
            };
          },
        }),
        Ti = gi({
          "../../../node_modules/whatwg-mimetype/lib/mime-type.js"(e, t) {
            var n = Si(),
              r = Ci(),
              i = wi(),
              { asciiLowercase: a, solelyContainsHTTPTokenCodePoints: o } = xi();
            t.exports = class {
              static parse(e) {
                try {
                  return new this(e);
                } catch {
                  return null;
                }
              }
              get essence() {
                return `${this.type}/${this.subtype}`;
              }
              get type() {
                return this._type;
              }
              set type(e) {
                if ((e = a(String(e))).length === 0)
                  throw Error(`Invalid type: must be a non-empty string`);
                if (!o(e))
                  throw Error(`Invalid type ${e}: must contain only HTTP token code points`);
                this._type = e;
              }
              get subtype() {
                return this._subtype;
              }
              set subtype(e) {
                if ((e = a(String(e))).length === 0)
                  throw Error(`Invalid subtype: must be a non-empty string`);
                if (!o(e))
                  throw Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
                this._subtype = e;
              }
              get parameters() {
                return this._parameters;
              }
              toString() {
                return i(this);
              }
              isJavaScript({ prohibitParameters: e = !1 } = {}) {
                switch (this._type) {
                  case `text`:
                    switch (this._subtype) {
                      case `ecmascript`:
                      case `javascript`:
                      case `javascript1.0`:
                      case `javascript1.1`:
                      case `javascript1.2`:
                      case `javascript1.3`:
                      case `javascript1.4`:
                      case `javascript1.5`:
                      case `jscript`:
                      case `livescript`:
                      case `x-ecmascript`:
                      case `x-javascript`:
                        return !e || this._parameters.size === 0;
                      default:
                        return !1;
                    }
                  case `application`:
                    switch (this._subtype) {
                      case `ecmascript`:
                      case `javascript`:
                      case `x-ecmascript`:
                      case `x-javascript`:
                        return !e || this._parameters.size === 0;
                      default:
                        return !1;
                    }
                  default:
                    return !1;
                }
              }
              isXML() {
                return (
                  (this._subtype === `xml` &&
                    (this._type === `text` || this._type === `application`)) ||
                  this._subtype.endsWith(`+xml`)
                );
              }
              isHTML() {
                return this._subtype === `html` && this._type === `text`;
              }
              constructor(e) {
                e = String(e);
                let t = r(e);
                if (t === null) throw Error(`Could not parse MIME type string "${e}"`);
                ((this._type = t.type),
                  (this._subtype = t.subtype),
                  (this._parameters = new n(t.parameters)));
              }
            };
          },
        }),
        Ei = vi(yi()),
        Q = {
          Uint8: 1,
          Uint16: 2,
          Uint32: 4,
          BigUint64: 8,
          Int8: 1,
          Int16: 2,
          Int32: 4,
          BigInt64: 8,
          Float32: 4,
          Float64: 8,
        },
        Di = class {
          getOffset() {
            return this.offset;
          }
          ensureBufferLength(e) {
            let t = this.buffer.byteLength;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = Q.Uint8;
            this.ensureBufferLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = Q.Uint16;
            this.ensureBufferLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = Q.Uint32;
            this.ensureBufferLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = Q.BigUint64;
            this.ensureBufferLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = Q.Int8;
            this.ensureBufferLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = Q.Int16;
            this.ensureBufferLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = Q.Int32;
            this.ensureBufferLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = Q.BigInt64;
            this.ensureBufferLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = Q.Float32;
            this.ensureBufferLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = Q.Float64;
            this.ensureBufferLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBuffer(e) {
            let t = this.offset,
              n = t + e,
              r = this.buffer.slice(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let e = this.readUint32(),
              t = this.readBuffer(e);
            return this.decoder.decode(t);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            ((this.buffer = e),
              (this.offset = 0),
              (this.view = new DataView(this.buffer)),
              (this.decoder = new TextDecoder()));
          }
        },
        Oi = Uint8Array,
        ki = Uint16Array,
        Ai = Int32Array,
        ji = new Oi([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0,
          0, 0,
        ]),
        Mi = new Oi([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
          13, 13, 0, 0,
        ]),
        Ni = new Oi([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Pi = function (e, t) {
          for (var n = new ki(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
          for (var i = new Ai(n[30]), r = 1; r < 30; ++r)
            for (var a = n[r]; a < n[r + 1]; ++a) i[a] = ((a - n[r]) << 5) | r;
          return { b: n, r: i };
        },
        Fi = Pi(ji, 2),
        Ii = Fi.b,
        Li = Fi.r,
        Ii[28] = 258,
        Li[258] = 28,
        Ri = Pi(Mi, 0),
        zi = Ri.b,
        Bi = Ri.r,
        Vi = new ki(32768),
        Z = 0;
      Z < 32768;
      ++Z
    )
      ((ci =
        ((61680 &
          (ci =
            ((52428 & (ci = ((43690 & Z) >> 1) | ((21845 & Z) << 1))) >> 2) |
            ((13107 & ci) << 2))) >>
          4) |
        ((3855 & ci) << 4)),
        (Vi[Z] = (((65280 & ci) >> 8) | ((255 & ci) << 8)) >> 1));
    for (
      Hi = function (e, t, n) {
        for (var r, i = e.length, a = 0, o = new ki(t); a < i; ++a) e[a] && ++o[e[a] - 1];
        var s = new ki(t);
        for (a = 1; a < t; ++a) s[a] = (s[a - 1] + o[a - 1]) << 1;
        if (n) {
          r = new ki(1 << t);
          var c = 15 - t;
          for (a = 0; a < i; ++a)
            if (e[a])
              for (
                var l = (a << 4) | e[a],
                  u = t - e[a],
                  d = s[e[a] - 1]++ << u,
                  f = d | ((1 << u) - 1);
                d <= f;
                ++d
              )
                r[Vi[d] >> c] = l;
        } else
          for (a = 0, r = new ki(i); a < i; ++a) e[a] && (r[a] = Vi[s[e[a] - 1]++] >> (15 - e[a]));
        return r;
      },
        Ui = new Oi(288),
        Z = 0;
      Z < 144;
      ++Z
    )
      Ui[Z] = 8;
    for (Z = 144; Z < 256; ++Z) Ui[Z] = 9;
    for (Z = 256; Z < 280; ++Z) Ui[Z] = 7;
    for (Z = 280; Z < 288; ++Z) Ui[Z] = 8;
    for (Wi = new Oi(32), Z = 0; Z < 32; ++Z) Wi[Z] = 5;
    ((Gi = Hi(Ui, 9, 0)),
      (Ki = Hi(Ui, 9, 1)),
      (qi = Hi(Wi, 5, 0)),
      (Ji = Hi(Wi, 5, 1)),
      (Yi = function (e) {
        for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
        return t;
      }),
      (Xi = function (e, t, n) {
        var r = (t / 8) | 0;
        return ((e[r] | (e[r + 1] << 8)) >> (7 & t)) & n;
      }),
      (Zi = function (e, t) {
        var n = (t / 8) | 0;
        return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (7 & t);
      }),
      (Qi = function (e) {
        return ((e + 7) / 8) | 0;
      }),
      ($i = function (e, t, n) {
        return (
          (t == null || t < 0) && (t = 0),
          (n == null || n > e.length) && (n = e.length),
          new Oi(e.subarray(t, n))
        );
      }),
      (ea = [
        `unexpected EOF`,
        `invalid block type`,
        `invalid length/literal`,
        `invalid distance`,
        `stream finished`,
        `no stream handler`,
        ,
        `no callback`,
        `invalid UTF-8 data`,
        `extra field too long`,
        `date not in range 1980-2099`,
        `filename too long`,
        `stream finishing`,
        `invalid zip data`,
      ]),
      (ta = function (e, t, n) {
        var r = Error(t || ea[e]);
        if (((r.code = e), Error.captureStackTrace && Error.captureStackTrace(r, ta), !n)) throw r;
        return r;
      }),
      (na = function (e, t, n, r) {
        var i = e.length,
          a = r ? r.length : 0;
        if (!i || (t.f && !t.l)) return n || new Oi(0);
        var o = !n,
          s = o || t.i != 2,
          c = t.i;
        o && (n = new Oi(3 * i));
        var l = function (e) {
            var t = n.length;
            if (e > t) {
              var r = new Oi(Math.max(2 * t, e));
              (r.set(n), (n = r));
            }
          },
          u = t.f || 0,
          d = t.p || 0,
          f = t.b || 0,
          p = t.l,
          m = t.d,
          h = t.m,
          g = t.n,
          _ = 8 * i;
        do {
          if (!p) {
            u = Xi(e, d, 1);
            var v = Xi(e, d + 1, 3);
            if (((d += 3), v))
              if (v == 1) ((p = Ki), (m = Ji), (h = 9), (g = 5));
              else if (v == 2) {
                var y = Xi(e, d, 31) + 257,
                  b = Xi(e, d + 10, 15) + 4,
                  x = y + Xi(e, d + 5, 31) + 1;
                d += 14;
                for (var S = new Oi(x), C = new Oi(19), w = 0; w < b; ++w)
                  C[Ni[w]] = Xi(e, d + 3 * w, 7);
                d += 3 * b;
                for (var T = Yi(C), E = (1 << T) - 1, D = Hi(C, T, 1), w = 0; w < x; ) {
                  var O = D[Xi(e, d, E)];
                  d += 15 & O;
                  var k = O >> 4;
                  if (k < 16) S[w++] = k;
                  else {
                    var A = 0,
                      j = 0;
                    for (
                      k == 16
                        ? ((j = 3 + Xi(e, d, 3)), (d += 2), (A = S[w - 1]))
                        : k == 17
                          ? ((j = 3 + Xi(e, d, 7)), (d += 3))
                          : k == 18 && ((j = 11 + Xi(e, d, 127)), (d += 7));
                      j--;
                    )
                      S[w++] = A;
                  }
                }
                var M = S.subarray(0, y),
                  N = S.subarray(y);
                ((h = Yi(M)), (g = Yi(N)), (p = Hi(M, h, 1)), (m = Hi(N, g, 1)));
              } else ta(1);
            else {
              var k = Qi(d) + 4,
                P = e[k - 4] | (e[k - 3] << 8),
                F = k + P;
              if (F > i) {
                c && ta(0);
                break;
              }
              (s && l(f + P),
                n.set(e.subarray(k, F), f),
                (t.b = f += P),
                (t.p = d = 8 * F),
                (t.f = u));
              continue;
            }
            if (d > _) {
              c && ta(0);
              break;
            }
          }
          s && l(f + 131072);
          for (var I = (1 << h) - 1, L = (1 << g) - 1, R = d; ; R = d) {
            var A = p[Zi(e, d) & I],
              z = A >> 4;
            if ((d += 15 & A) > _) {
              c && ta(0);
              break;
            }
            if ((A || ta(2), z < 256)) n[f++] = z;
            else if (z == 256) {
              ((R = d), (p = null));
              break;
            } else {
              var B = z - 254;
              if (z > 264) {
                var w = z - 257,
                  V = ji[w];
                ((B = Xi(e, d, (1 << V) - 1) + Ii[w]), (d += V));
              }
              var H = m[Zi(e, d) & L],
                U = H >> 4;
              (H || ta(3), (d += 15 & H));
              var N = zi[U];
              if (U > 3) {
                var V = Mi[U];
                ((N += Zi(e, d) & ((1 << V) - 1)), (d += V));
              }
              if (d > _) {
                c && ta(0);
                break;
              }
              s && l(f + 131072);
              var ee = f + B;
              if (f < N) {
                var te = a - N,
                  ne = Math.min(N, ee);
                for (te + f < 0 && ta(3); f < ne; ++f) n[f] = r[te + f];
              }
              for (; f < ee; ++f) n[f] = n[f - N];
            }
          }
          ((t.l = p),
            (t.p = R),
            (t.b = f),
            (t.f = u),
            p && ((u = 1), (t.m = h), (t.d = m), (t.n = g)));
        } while (!u);
        return f != n.length && o ? $i(n, 0, f) : n.subarray(0, f);
      }),
      (ra = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) | 0;
        ((e[r] |= n), (e[r + 1] |= n >> 8));
      }),
      (ia = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) | 0;
        ((e[r] |= n), (e[r + 1] |= n >> 8), (e[r + 2] |= n >> 16));
      }),
      (aa = function (e, t) {
        for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
        var i = n.length,
          a = n.slice();
        if (!i) return { t: fa, l: 0 };
        if (i == 1) {
          var o = new Oi(n[0].s + 1);
          return ((o[n[0].s] = 1), { t: o, l: 1 });
        }
        (n.sort(function (e, t) {
          return e.f - t.f;
        }),
          n.push({ s: -1, f: 25001 }));
        var s = n[0],
          c = n[1],
          l = 0,
          u = 1,
          d = 2;
        for (n[0] = { s: -1, f: s.f + c.f, l: s, r: c }; u != i - 1; )
          ((s = n[n[l].f < n[d].f ? l++ : d++]),
            (c = n[l != u && n[l].f < n[d].f ? l++ : d++]),
            (n[u++] = { s: -1, f: s.f + c.f, l: s, r: c }));
        for (var f = a[0].s, r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
        var p = new ki(f + 1),
          m = oa(n[u - 1], p, 0);
        if (m > t) {
          var r = 0,
            h = 0,
            g = m - t,
            _ = 1 << g;
          for (
            a.sort(function (e, t) {
              return p[t.s] - p[e.s] || e.f - t.f;
            });
            r < i;
            ++r
          ) {
            var v = a[r].s;
            if (p[v] > t) ((h += _ - (1 << (m - p[v]))), (p[v] = t));
            else break;
          }
          for (h >>= g; h > 0; ) {
            var y = a[r].s;
            p[y] < t ? (h -= 1 << (t - p[y]++ - 1)) : ++r;
          }
          for (; r >= 0 && h; --r) {
            var b = a[r].s;
            p[b] == t && (--p[b], ++h);
          }
          m = t;
        }
        return { t: new Oi(p), l: m };
      }),
      (oa = function (e, t, n) {
        return e.s == -1 ? Math.max(oa(e.l, t, n + 1), oa(e.r, t, n + 1)) : (t[e.s] = n);
      }),
      (sa = function (e) {
        for (var t = e.length; t && !e[--t]; );
        for (
          var n = new ki(++t),
            r = 0,
            i = e[0],
            a = 1,
            o = function (e) {
              n[r++] = e;
            },
            s = 1;
          s <= t;
          ++s
        )
          if (e[s] == i && s != t) ++a;
          else {
            if (!i && a > 2) {
              for (; a > 138; a -= 138) o(32754);
              a > 2 && (o(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
            } else if (a > 3) {
              for (o(i), --a; a > 6; a -= 6) o(8304);
              a > 2 && (o(((a - 3) << 5) | 8208), (a = 0));
            }
            for (; a--; ) o(i);
            ((a = 1), (i = e[s]));
          }
        return { c: n.subarray(0, r), n: t };
      }),
      (ca = function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
        return n;
      }),
      (la = function (e, t, n) {
        var r = n.length,
          i = Qi(t + 2);
        ((e[i] = 255 & r),
          (e[i + 1] = r >> 8),
          (e[i + 2] = 255 ^ e[i]),
          (e[i + 3] = 255 ^ e[i + 1]));
        for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
        return (i + 4 + r) * 8;
      }),
      (ua = function (e, t, n, r, i, a, o, s, c, l, u) {
        (ra(t, u++, n), ++i[256]);
        for (
          var d,
            f,
            p,
            m,
            h = aa(i, 15),
            g = h.t,
            _ = h.l,
            v = aa(a, 15),
            y = v.t,
            b = v.l,
            x = sa(g),
            S = x.c,
            C = x.n,
            w = sa(y),
            T = w.c,
            E = w.n,
            D = new ki(19),
            O = 0;
          O < S.length;
          ++O
        )
          ++D[31 & S[O]];
        for (var O = 0; O < T.length; ++O) ++D[31 & T[O]];
        for (var k = aa(D, 7), A = k.t, j = k.l, M = 19; M > 4 && !A[Ni[M - 1]]; --M);
        var N = (l + 5) << 3,
          P = ca(i, Ui) + ca(a, Wi) + o,
          F = ca(i, g) + ca(a, y) + o + 14 + 3 * M + ca(D, A) + 2 * D[16] + 3 * D[17] + 7 * D[18];
        if (c >= 0 && N <= P && N <= F) return la(t, u, e.subarray(c, c + l));
        if ((ra(t, u, 1 + (F < P)), (u += 2), F < P)) {
          ((d = Hi(g, _, 0)), (f = g), (p = Hi(y, b, 0)), (m = y));
          var I = Hi(A, j, 0);
          (ra(t, u, C - 257), ra(t, u + 5, E - 1), ra(t, u + 10, M - 4), (u += 14));
          for (var O = 0; O < M; ++O) ra(t, u + 3 * O, A[Ni[O]]);
          u += 3 * M;
          for (var L = [S, T], R = 0; R < 2; ++R)
            for (var z = L[R], O = 0; O < z.length; ++O) {
              var B = 31 & z[O];
              (ra(t, u, I[B]),
                (u += A[B]),
                B > 15 && (ra(t, u, (z[O] >> 5) & 127), (u += z[O] >> 12)));
            }
        } else ((d = Gi), (f = Ui), (p = qi), (m = Wi));
        for (var O = 0; O < s; ++O) {
          var V = r[O];
          if (V > 255) {
            var B = (V >> 18) & 31;
            (ia(t, u, d[B + 257]),
              (u += f[B + 257]),
              B > 7 && (ra(t, u, (V >> 23) & 31), (u += ji[B])));
            var H = 31 & V;
            (ia(t, u, p[H]), (u += m[H]), H > 3 && (ia(t, u, (V >> 5) & 8191), (u += Mi[H])));
          } else (ia(t, u, d[V]), (u += f[V]));
        }
        return (ia(t, u, d[256]), u + f[256]);
      }),
      (da = new Ai([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])),
      (fa = new Oi(0)),
      (pa = function (e, t, n, r, i, a) {
        var o = a.z || e.length,
          s = new Oi(r + o + 5 * (1 + Math.ceil(o / 7e3)) + i),
          c = s.subarray(r, s.length - i),
          l = a.l,
          u = 7 & (a.r || 0);
        if (t) {
          u && (c[0] = a.r >> 3);
          for (
            var d = da[t - 1],
              f = d >> 13,
              p = 8191 & d,
              m = (1 << n) - 1,
              h = a.p || new ki(32768),
              g = a.h || new ki(m + 1),
              _ = Math.ceil(n / 3),
              v = 2 * _,
              y = function (t) {
                return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << v)) & m;
              },
              b = new Ai(25e3),
              x = new ki(288),
              S = new ki(32),
              C = 0,
              w = 0,
              T = a.i || 0,
              E = 0,
              D = a.w || 0,
              O = 0;
            T + 2 < o;
            ++T
          ) {
            var k = y(T),
              A = 32767 & T,
              j = g[k];
            if (((h[A] = j), (g[k] = A), D <= T)) {
              var M = o - T;
              if ((C > 7e3 || E > 24576) && (M > 423 || !l)) {
                ((u = ua(e, c, 0, b, x, S, w, E, O, T - O, u)), (E = C = w = 0), (O = T));
                for (var N = 0; N < 286; ++N) x[N] = 0;
                for (var N = 0; N < 30; ++N) S[N] = 0;
              }
              var P = 2,
                F = 0,
                I = p,
                L = (A - j) & 32767;
              if (M > 2 && k == y(T - L))
                for (
                  var R = Math.min(f, M) - 1, z = Math.min(32767, T), B = Math.min(258, M);
                  L <= z && --I && A != j;
                ) {
                  if (e[T + P] == e[T + P - L]) {
                    for (var V = 0; V < B && e[T + V] == e[T + V - L]; ++V);
                    if (V > P) {
                      if (((P = V), (F = L), V > R)) break;
                      for (var H = Math.min(L, V - 2), U = 0, N = 0; N < H; ++N) {
                        var ee = (T - L + N) & 32767,
                          te = (ee - h[ee]) & 32767;
                        te > U && ((U = te), (j = ee));
                      }
                    }
                  }
                  ((j = h[(A = j)]), (L += (A - j) & 32767));
                }
              if (F) {
                b[E++] = 268435456 | (Li[P] << 18) | Bi[F];
                var ne = 31 & Li[P],
                  re = 31 & Bi[F];
                ((w += ji[ne] + Mi[re]), ++x[257 + ne], ++S[re], (D = T + P), ++C);
              } else ((b[E++] = e[T]), ++x[e[T]]);
            }
          }
          for (T = Math.max(T, D); T < o; ++T) ((b[E++] = e[T]), ++x[e[T]]);
          ((u = ua(e, c, l, b, x, S, w, E, O, T - O, u)),
            l ||
              ((a.r = (7 & u) | (c[(u / 8) | 0] << 3)),
              (u -= 7),
              (a.h = g),
              (a.p = h),
              (a.i = T),
              (a.w = D)));
        } else {
          for (var T = a.w || 0; T < o + l; T += 65535) {
            var W = T + 65535;
            (W >= o && ((c[(u / 8) | 0] = l), (W = o)), (u = la(c, u + 1, e.subarray(T, W))));
          }
          a.i = o;
        }
        return $i(s, 0, r + Qi(u) + i);
      }),
      (ma = function (e, t, n, r, i) {
        if (!i && ((i = { l: 1 }), t.dictionary)) {
          var a = t.dictionary.subarray(-32768),
            o = new Oi(a.length + e.length);
          (o.set(a), o.set(e, a.length), (e = o), (i.w = a.length));
        }
        return pa(
          e,
          t.level == null ? 6 : t.level,
          t.mem == null
            ? i.l
              ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
              : 20
            : 12 + t.mem,
          n,
          r,
          i
        );
      }),
      (ha = typeof TextDecoder < `u` && new TextDecoder()));
    try {
      ha.decode(fa, { stream: !0 });
    } catch {}
    ((ga = vi(bi())),
      (_a = 1024),
      (va = 1.5),
      (ya = (e) => 2 ** e - 1),
      (ba = (e) => -(2 ** (e - 1))),
      (xa = (e) => 2 ** (e - 1) - 1),
      (Sa = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: ba(8),
        Int16: ba(16),
        Int32: ba(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (Ca = {
        Uint8: ya(8),
        Uint16: ya(16),
        Uint32: ya(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: xa(8),
        Int16: xa(16),
        Int32: xa(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (wa = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.buffer.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return new Uint8Array(this.buffer, e, t);
        }
        ensureBufferLength(e) {
          let t = this.buffer.byteLength;
          if (this.offset + e <= t) return;
          let n = new ArrayBuffer(Math.ceil(t * va) + e);
          (Zr(this.buffer, n, 0), (this.buffer = n), (this.view = new DataView(n)));
        }
        writeUint8(e) {
          Xr(e, Sa.Uint8, Ca.Uint8, `Uint8`);
          let t = Q.Uint8;
          (this.ensureBufferLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          Xr(e, Sa.Uint16, Ca.Uint16, `Uint16`);
          let t = Q.Uint16;
          (this.ensureBufferLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          Xr(e, Sa.Uint32, Ca.Uint32, `Uint32`);
          let t = Q.Uint32;
          (this.ensureBufferLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          Xr(e, Sa.Uint64, Ca.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          Xr(e, Sa.BigUint64, Ca.BigUint64, `BigUint64`);
          let t = Q.BigUint64;
          (this.ensureBufferLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          Xr(e, Sa.Int8, Ca.Int8, `Int8`);
          let t = Q.Int8;
          (this.ensureBufferLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          Xr(e, Sa.Int16, Ca.Int16, `Int16`);
          let t = Q.Int16;
          (this.ensureBufferLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          Xr(e, Sa.Int32, Ca.Int32, `Int32`);
          let t = Q.Int32;
          (this.ensureBufferLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          Xr(e, Sa.Int64, Ca.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          Xr(e, Sa.BigInt64, Ca.BigInt64, `BigInt64`);
          let t = Q.BigInt64;
          (this.ensureBufferLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = Q.Float32;
          (this.ensureBufferLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = Q.Float64;
          (this.ensureBufferLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBuffer(e) {
          let t = e.byteLength;
          (this.ensureBufferLength(t), Zr(e, this.buffer, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.byteLength;
          (this.writeUint32(n), this.writeBuffer(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          ((this.offset = 0),
            (this.buffer = new ArrayBuffer(_a)),
            (this.view = new DataView(this.buffer)),
            (this.encoder = new TextEncoder()),
            (this.encodedStrings = new Map()));
        }
      }),
      (Ta = class {
        static fromString(e) {
          let [t, n, r] = e.split(`/`).map(Number);
          return (
            X(Gr(t), `Invalid chunkId`),
            X(Gr(n), `Invalid offset`),
            X(Gr(r), `Invalid length`),
            new Ta(t, n, r)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(e) {
          return new Ta(e.readUint16(), e.readUint32(), e.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (X(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Ea.read(e);
            case 2:
              return Da.read(e);
            case 3:
              return Oa.read(e);
            case 4:
              return ka.read(e);
            case 5:
              return Aa.read(e);
            case 6:
              return ja.read(e);
            case 7:
              return Ma.read(e);
            case 8:
              return Na.read(e);
            case 9:
              return Pa.read(e);
            case 10:
              return Fa.read(e);
            case 11:
              return Ia.read(e);
            case 12:
              return La.read(e);
            default:
              Wr(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Qr(t);
            if ((e.writeUint8(n), !qr(t)))
              switch (t.type) {
                case M.Array:
                  return Ea.write(e, t);
                case M.Boolean:
                  return Da.write(e, t);
                case M.Color:
                  return Oa.write(e, t);
                case M.Date:
                  return ka.write(e, t);
                case M.Enum:
                  return Aa.write(e, t);
                case M.File:
                  return ja.write(e, t);
                case M.Link:
                  return Ma.write(e, t);
                case M.Number:
                  return Na.write(e, t);
                case M.Object:
                  return Pa.write(e, t);
                case M.ResponsiveImage:
                  return Fa.write(e, t);
                case M.RichText:
                  return Ia.write(e, t);
                case M.String:
                  return La.write(e, t);
                default:
                  Wr(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Qr(e),
              i = Qr(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (qr(e) || qr(t)) return 0;
            switch (e.type) {
              case M.Array:
                return (X(t.type === M.Array), Ea.compare(e, t, n));
              case M.Boolean:
                return (X(t.type === M.Boolean), Da.compare(e, t, n));
              case M.Color:
                return (X(t.type === M.Color), Oa.compare(e, t, n));
              case M.Date:
                return (X(t.type === M.Date), ka.compare(e, t, n));
              case M.Enum:
                return (X(t.type === M.Enum), Aa.compare(e, t, n));
              case M.File:
                return (X(t.type === M.File), ja.compare(e, t, n));
              case M.Link:
                return (X(t.type === M.Link), Ma.compare(e, t, n));
              case M.Number:
                return (X(t.type === M.Number), Na.compare(e, t, n));
              case M.Object:
                return (X(t.type === M.Object), Pa.compare(e, t, n));
              case M.ResponsiveImage:
                return (X(t.type === M.ResponsiveImage), Fa.compare(e, t, n));
              case M.RichText:
                return (X(t.type === M.RichText), Ia.compare(e, t, n));
              case M.String:
                return (X(t.type === M.String), La.compare(e, t, n));
              default:
                Wr(e);
            }
          }));
      })((li ||= {})),
      (Ea = {
        read(e) {
          let t = e.readUint16(),
            n = [];
          for (let r = 0; r < t; r++) {
            let t = li.read(e);
            n.push(t);
          }
          return { type: M.Array, value: n };
        },
        write(e, t) {
          for (let n of (e.writeUint16(t.value.length), t.value)) li.write(e, n);
        },
        compare(e, t, n) {
          let r = e.value.length,
            i = t.value.length;
          if (r < i) return -1;
          if (r > i) return 1;
          for (let i = 0; i < r; i++) {
            let r = e.value[i],
              a = t.value[i];
            (X(!Kr(r), `Left item must exist`), X(!Kr(a), `Right item must exist`));
            let o = li.compare(r, a, n);
            if (o !== 0) return o;
          }
          return 0;
        },
      }),
      (Da = {
        read: (e) => ({ type: M.Boolean, value: e.readUint8() !== 0 }),
        write(e, t) {
          e.writeUint8(t.value ? 1 : 0);
        },
        compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
      }),
      (Oa = {
        read: (e) => ({ type: M.Color, value: e.readString() }),
        write(e, t) {
          e.writeString(t.value);
        },
        compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
      }),
      (ka = {
        read(e) {
          let t = e.readInt64(),
            n = new Date(t);
          return { type: M.Date, value: n.toISOString() };
        },
        write(e, t) {
          let n = new Date(t.value).getTime();
          e.writeInt64(n);
        },
        compare(e, t) {
          let n = new Date(e.value),
            r = new Date(t.value);
          return n < r ? -1 : n > r ? 1 : 0;
        },
      }),
      (Aa = {
        read: (e) => ({ type: M.Enum, value: e.readString() }),
        write(e, t) {
          e.writeString(t.value);
        },
        compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
      }),
      (ja = {
        read: (e) => ({ type: M.File, value: e.readString() }),
        write(e, t) {
          e.writeString(t.value);
        },
        compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
      }),
      (Ma = {
        read: (e) => ({ type: M.Link, value: e.readJson() }),
        write(e, t) {
          e.writeJson(t.value);
        },
        compare(e, t) {
          let n = JSON.stringify(e.value),
            r = JSON.stringify(t.value);
          return n < r ? -1 : n > r ? 1 : 0;
        },
      }),
      (Na = {
        read: (e) => ({ type: M.Number, value: e.readFloat64() }),
        write(e, t) {
          e.writeFloat64(t.value);
        },
        compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
      }),
      (Pa = {
        read(e) {
          let t = e.readUint16(),
            n = {};
          for (let r = 0; r < t; r++) {
            let t = e.readString();
            n[t] = li.read(e);
          }
          return { type: M.Object, value: n };
        },
        write(e, t) {
          let n = Object.entries(t.value);
          for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), li.write(e, r));
        },
        compare(e, t, n) {
          let r = Object.keys(e.value).sort(),
            i = Object.keys(t.value).sort();
          if (r.length < i.length) return -1;
          if (r.length > i.length) return 1;
          for (let a = 0; a < r.length; a++) {
            let o = r[a],
              s = i[a];
            if ((X(!Kr(o), `Left key must exist`), X(!Kr(s), `Left key must exist`), o < s))
              return -1;
            if (o > s) return 1;
            let c = e.value[o],
              l = t.value[s];
            (X(!Kr(c), `Left value must exist`), X(!Kr(l), `Right value must exist`));
            let u = li.compare(c, l, n);
            if (u !== 0) return u;
          }
          return 0;
        },
      }),
      (Fa = {
        read: (e) => ({ type: M.ResponsiveImage, value: e.readJson() }),
        write(e, t) {
          e.writeJson(t.value);
        },
        compare(e, t) {
          let n = JSON.stringify(e.value),
            r = JSON.stringify(t.value);
          return n < r ? -1 : n > r ? 1 : 0;
        },
      }),
      (Ia = {
        read: (e) => ({ type: M.RichText, value: e.readUint32() }),
        write(e, t) {
          e.writeUint32(t.value);
        },
        compare(e, t) {
          let n = e.value,
            r = t.value;
          return n < r ? -1 : n > r ? 1 : 0;
        },
      }),
      (La = {
        read: (e) => ({ type: M.String, value: e.readString() }),
        write(e, t) {
          e.writeString(t.value);
        },
        compare(e, t, n) {
          let r = e.value,
            i = t.value;
          return (
            n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
            r < i ? -1 : r > i ? 1 : 0
          );
        },
      }),
      (Ra = class {
        static deserialize(e) {
          let t = new Di(Yr(e).buffer),
            n = t.readJson(),
            r = t.readUint8(),
            i = [];
          for (let e = 0; e < r; e++) {
            let e = t.readString();
            i.push(e);
          }
          let a = new Ra(i, { collation: n }),
            o = t.readUint32();
          for (let e = 0; e < o; e++) {
            let e = [];
            for (let n = 0; n < r; n++) {
              let n = li.read(t);
              e.push(n);
            }
            let n = Ta.read(t);
            a.entries.insert({ values: e, pointer: n });
          }
          return a;
        }
        serialize() {
          let e = new wa();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (e.writeUint32(this.entries.size), this.entries)) {
            let { values: n, pointer: r } = t.key;
            for (let t of n) li.write(e, t);
            r.write(e);
          }
          return Jr(e.subarray());
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.insert({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e),
            (this.options = t),
            (this.entries = new ga.default((e, t) => {
              let n = e.values,
                r = t.values;
              for (let e = 0; e < this.fieldNames.length; e++) {
                let t = n[e],
                  i = r[e];
                (X(!Kr(t), `Left value must exist`), X(!Kr(i), `Right value must exist`));
                let a = li.compare(t, i, this.options.collation);
                if (a !== 0) return a;
              }
              return e.pointer.compare(t.pointer);
            })));
        }
      }),
      (za = vi(Ti())),
      (Ba = `\r
`),
      (Va = `--`),
      (Ha = new TextEncoder()),
      (Ua = new TextDecoder()),
      (Wa = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((X(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = oi(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((X(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = oi(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          this.chunks = [];
        }
      }),
      (Ga = class {
        static read(e, t) {
          let n = new Ga(),
            r = e.readUint32(),
            i = e.readBuffer(r),
            a = new Di(Yr(new Uint8Array(i), { dictionary: t }).buffer),
            o = a.readUint16();
          for (let e = 0; e < o; e++) {
            let e = a.readString(),
              t = li.read(a);
            n.setField(e, t);
          }
          return n;
        }
        writeUncompressed(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), li.write(e, n));
        }
        write(e, t) {
          let n = new wa();
          this.writeUncompressed(n);
          let r = Jr(n.subarray(), { dictionary: t });
          (e.writeUint32(r.byteLength), e.writeBuffer(r));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          this.fields = new Map();
        }
      }),
      (Ka = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Promise.all([
              fetch(this.url),
              this.getCompressionDictionary(),
            ]).then(async ([e, t]) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let n = new Di(await e.arrayBuffer()),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  i = Ga.read(n, t),
                  a = n.getOffset() - e,
                  o = new Ta(this.id, e, a).toString(),
                  s = { pointer: o, data: i.getData() };
                (this.itemLoader.prime(o, s), r.push(s));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        getCompressionDictionary() {
          let e = this.compressionDictionaryCache.get(this.compressionDictionaryUrl);
          if (e) return e;
          let t = fetch(this.compressionDictionaryUrl).then(async (e) => {
            if (!e.ok)
              throw Error(`Compression dictionary request failed: ${e.status} ${e.statusText}`);
            let t = await e.arrayBuffer();
            return new Uint8Array(t);
          });
          return (this.compressionDictionaryCache.set(this.compressionDictionaryUrl, t), t);
        }
        constructor(e, t, n, r) {
          ((this.id = e),
            (this.url = t),
            (this.compressionDictionaryUrl = n),
            (this.compressionDictionaryCache = r),
            (this.itemLoader = new Ei.default(async (e) => {
              let t = e.map((e) => {
                  let t = Ta.fromString(e);
                  return { from: t.offset, to: t.offset + t.length };
                }),
                [n, r] = await Promise.all([$r(this.url, t), this.getCompressionDictionary()]);
              return n.map((t, n) => {
                let i = new Di(t.buffer),
                  a = Ga.read(i, r),
                  o = e[n];
                return (X(o, `Missing pointer`), { pointer: o, data: a.getData() });
              });
            })));
        }
      }),
      (qa = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        async resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Ta.fromString(e),
                n = this.chunks[t.chunkId];
              return (X(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = Ta.fromString(e.pointer),
            r = Ta.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return li.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            (this.schema = this.options.schema),
            (this.indexes = this.options.indexes),
            (this.resolveRichText = this.options.resolveRichText));
          let t = new Map();
          this.chunks = this.options.chunks.map(
            (e, n) => new Ka(n, e, this.options.compressionDictionary, t)
          );
        }
      }));
  });
async function Ya(e) {
  let t = Qa[e];
  if (t) return await t();
}
var Xa,
  Za,
  Qa,
  $a = t(() => {
    ((Xa = (e, t) => async () => (await e())[t]),
      (Za = () => import(`./aVKaIg1Yc-2.B3JyMQ2z.mjs`)),
      (Qa = [Xa(Za, `richText`), Xa(Za, `richText1`)]));
  }),
  eo,
  to,
  no,
  ro = t(() => {
    (T(),
      Ja(),
      $a(),
      (eo = {
        ApOEmOZAL: { isNullable: !0, type: M.ResponsiveImage },
        AzFq9zS6F: { isNullable: !0, type: M.String },
        cRIf4hs0f: { isNullable: !0, type: M.String },
        eW7TQaYCP: { isNullable: !0, type: M.RichText },
        gpnbmbZNY: { isNullable: !0, type: M.ResponsiveImage },
        hbL_Cf5Va: { isNullable: !0, type: M.String },
        id: { isNullable: !1, type: M.String },
        IdLDCVSHS: { isNullable: !0, type: M.String },
        Io8_TJm7I: { isNullable: !0, type: M.String },
        IRNl9ySii: { isNullable: !0, type: M.Link },
        JAos2VVaa: { isNullable: !0, type: M.ResponsiveImage },
        Jk4_v3X35: { isNullable: !0, type: M.String },
        LdyHcrEod: { isNullable: !0, type: M.ResponsiveImage },
        MEgDhyBC7: { isNullable: !0, type: M.ResponsiveImage },
        MKaX9oyqT: { isNullable: !0, type: M.String },
        nextItemId: { isNullable: !0, type: M.String },
        nn4O0vb85: { isNullable: !0, type: M.Link },
        previousItemId: { isNullable: !0, type: M.String },
        ptukcs6TS: { isNullable: !0, type: M.Link },
        q0lDaNqTb: { isNullable: !0, type: M.ResponsiveImage },
        QWf4CTQam: { isNullable: !0, type: M.String },
        RyzWvqAu3: { isNullable: !0, type: M.String },
        T0RDlHDX_: { isNullable: !0, type: M.Link },
        UAJGIWsM4: { isNullable: !0, type: M.Enum },
        VQWpGFKmZ: { isNullable: !0, type: M.ResponsiveImage },
        VrMWAOFoE: { isNullable: !0, type: M.String },
        wO4N2oDaR: { isNullable: !0, type: M.String },
        yFMnXXjm9: { isNullable: !0, type: M.ResponsiveImage },
        zNGiruPu7: { isNullable: !0, type: M.String },
        zzdbSkpFB: { isNullable: !0, type: M.String },
      }),
      new le(),
      (to = {
        collectionByLocaleId: {
          default: new qa({
            chunks: [
              new URL(
                `./aVKaIg1Yc-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/nTGClKpfuPg2XPWxof6z/QzrQ8nUAbwPXHtbnao01/aVKaIg1Yc.js`
              ).href,
            ],
            compressionDictionary: new URL(
              `./aVKaIg1Yc-chunk-default-dict.framercms`,
              `https://framerusercontent.com/modules/nTGClKpfuPg2XPWxof6z/QzrQ8nUAbwPXHtbnao01/aVKaIg1Yc.js`
            ).href,
            indexes: [],
            resolveRichText: Ya,
            schema: eo,
          }),
        },
        displayName: `Work`,
      }),
      (no = to),
      ue(to, {
        hbL_Cf5Va: { defaultValue: ``, title: `Title`, type: M.String },
        IdLDCVSHS: { title: `Slug`, type: M.String },
        MKaX9oyqT: { defaultValue: ``, title: `Subtitle`, type: M.String },
        QWf4CTQam: {
          defaultValue: ``,
          displayTextArea: !0,
          maxLength: 155,
          title: `Short description`,
          type: M.String,
        },
        MEgDhyBC7: { title: `Logo-white`, type: M.ResponsiveImage },
        LdyHcrEod: { title: `Logo-Black`, type: M.ResponsiveImage },
        JAos2VVaa: {
          __defaultAssetReference: `data:framer/asset-reference,b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?originalFilename=photo-1622547748225-3fc4abd2cca0%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsJTIwYWJzdHJhY3R8ZW58MHx8fHwxNjk5OTQ4NzE4fDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
          title: `Main Image`,
          type: M.ResponsiveImage,
        },
        UAJGIWsM4: {
          defaultValue: `fdPFDL5qx`,
          options: [`fdPFDL5qx`, `TJ5frz1ZR`, `jDa2mEXf6`, `mECIyWAGM`, `sKUGC8KX5`],
          optionTitles: [`Fintech`, `Cybersecurity`, `Insurance`, `Crypto`, `Machine Learning`],
          title: `Industry`,
          type: M.Enum,
        },
        RyzWvqAu3: { defaultValue: ``, title: `Founded`, type: M.String },
        cRIf4hs0f: { defaultValue: ``, title: `Headquarters`, type: M.String },
        zNGiruPu7: { defaultValue: ``, title: `Company size`, type: M.String },
        eW7TQaYCP: { defaultValue: ``, title: `Content`, type: M.RichText },
        Jk4_v3X35: { defaultValue: ``, title: `Data 1`, type: M.String },
        Io8_TJm7I: { defaultValue: ``, title: `Data 1.2`, type: M.String },
        wO4N2oDaR: { defaultValue: ``, title: `Data 2`, type: M.String },
        zzdbSkpFB: { defaultValue: ``, title: `Data 2.1`, type: M.String },
        VrMWAOFoE: { defaultValue: ``, title: `Data 3`, type: M.String },
        AzFq9zS6F: { defaultValue: ``, title: `Data 3.1`, type: M.String },
        VQWpGFKmZ: { title: `Image 2`, type: M.ResponsiveImage },
        q0lDaNqTb: { title: `Image 3`, type: M.ResponsiveImage },
        ApOEmOZAL: { title: `Image 3.1`, type: M.ResponsiveImage },
        gpnbmbZNY: { title: `Image 3.2`, type: M.ResponsiveImage },
        yFMnXXjm9: { title: `Image 3.3`, type: M.ResponsiveImage },
        T0RDlHDX_: { title: `Instagram`, type: M.Link },
        ptukcs6TS: { title: `Twitter`, type: M.Link },
        IRNl9ySii: { title: `Linkedin`, type: M.Link },
        nn4O0vb85: { title: `Facebook`, type: M.Link },
        previousItemId: {
          dataIdentifier: `local-module:collection/aVKaIg1Yc:default`,
          title: `Previous`,
          type: M.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/aVKaIg1Yc:default`,
          title: `Next`,
          type: M.CollectionReference,
        },
      }));
  }),
  io,
  ao,
  oo,
  so = t(() => {
    (T(),
      O.loadFonts([`GF;Lustria-regular`]),
      (io = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Lustria`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/lustria/v13/9oRONYodvDEyjuhOrC05MtPyAcg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ao = [
        `.framer-L5o2D .framer-styles-preset-7cjtto:not(.rich-text-wrapper), .framer-L5o2D .framer-styles-preset-7cjtto.rich-text-wrapper p { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-L5o2D .framer-styles-preset-7cjtto:not(.rich-text-wrapper), .framer-L5o2D .framer-styles-preset-7cjtto.rich-text-wrapper p { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-L5o2D .framer-styles-preset-7cjtto:not(.rich-text-wrapper), .framer-L5o2D .framer-styles-preset-7cjtto.rich-text-wrapper p { --framer-font-family: "Lustria", "Lustria Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
      ]),
      (oo = `framer-L5o2D`));
  });
function co(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So = t(() => {
    (p(),
      T(),
      x(),
      n(),
      Gn(),
      (lo = k(Wn)),
      (uo = { eYfNE8tkf: { hover: !0 } }),
      (fo = `framer-610CN`),
      (po = { eYfNE8tkf: `framer-v-164w25l` }),
      (mo = { damping: 60, delay: 0, mass: 1, stiffness: 800, type: `spring` }),
      (ho = (e, t) => `translate(-50%, -50%) ${t}`),
      (go = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (_o = v(i)),
      (vo = ({
        defaultCircle: e,
        defaultFill: t,
        defaultIcon: n,
        defaultText: r,
        height: i,
        hoverCircle: a,
        hoverFill: o,
        hoverIcon: s,
        hoverText: c,
        icon01: l,
        icon02: u,
        id: d,
        label: f,
        link: p,
        newTab: m,
        width: h,
        ...g
      }) => ({
        ...g,
        AL6IB9otP:
          o ??
          g.AL6IB9otP ??
          `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65))`,
        fTULNZYxz:
          n ?? g.fTULNZYxz ?? `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
        g0e9eEWSg:
          r ??
          g.g0e9eEWSg ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        k3JhaMy5_:
          l ??
          g.k3JhaMy5_ ??
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
        Lf8afaZg_: a ?? g.Lf8afaZg_ ?? `rgb(252, 94, 66)`,
        Lzyfez8Rw: e ?? g.Lzyfez8Rw ?? `rgb(255, 255, 255)`,
        mKVpWCoSL:
          c ??
          g.mKVpWCoSL ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        n4p6Q_Jl3: p ?? g.n4p6Q_Jl3,
        Oon8L041D:
          t ?? g.Oon8L041D ?? `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
        rZYR6tqXt:
          s ??
          g.rZYR6tqXt ??
          `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
        Saf4VZmW2: m ?? g.Saf4VZmW2,
        VArIlTNTt: f ?? g.VArIlTNTt ?? `Learn more`,
        wbc_aIg1P:
          u ??
          g.wbc_aIg1P ??
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
      })),
      (yo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (bo = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              VArIlTNTt: d,
              Oon8L041D: p,
              AL6IB9otP: m,
              Lzyfez8Rw: g,
              Lf8afaZg_: _,
              g0e9eEWSg: y,
              mKVpWCoSL: x,
              fTULNZYxz: C,
              rZYR6tqXt: T,
              k3JhaMy5_: E,
              wbc_aIg1P: D,
              n4p6Q_Jl3: O,
              Saf4VZmW2: k,
              ...A
            } = vo(e),
            {
              baseVariant: j,
              classNames: M,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: R,
              isLoading: z,
              setGestureState: B,
              setVariant: V,
              variants: H,
            } = L({
              defaultVariant: `eYfNE8tkf`,
              enabledGestures: uo,
              variant: u,
              variantClassNames: po,
            }),
            U = yo(e, H),
            ee = r(null),
            te = h(),
            ne = [];
          return (
            S(),
            c(b, {
              id: l ?? te,
              children: c(_o, {
                animate: H,
                initial: !1,
                children: c(go, {
                  value: mo,
                  children: c(I, {
                    href: O,
                    openInNewTab: k,
                    smoothScroll: !0,
                    children: f(v.a, {
                      ...A,
                      ...F,
                      className: `${w(fo, ...ne, `framer-164w25l`, s, M)} framer-2ma21l`,
                      "data-framer-name": `Default`,
                      layoutDependency: U,
                      layoutId: `eYfNE8tkf`,
                      ref: t ?? ee,
                      style: {
                        backgroundColor: p,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        ...o,
                      },
                      variants: { "eYfNE8tkf-hover": { backgroundColor: m } },
                      ...co({ "eYfNE8tkf-hover": { "data-framer-name": void 0 } }, j, R),
                      children: [
                        c(v.div, {
                          className: `framer-13fffqp`,
                          "data-framer-name": `Circle`,
                          layoutDependency: U,
                          layoutId: `UBjWN4ooK`,
                          style: {
                            backgroundColor: g,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          variants: { "eYfNE8tkf-hover": { backgroundColor: _ } },
                          children: f(v.div, {
                            className: `framer-1elhlwu`,
                            "data-framer-name": `Icon`,
                            layoutDependency: U,
                            layoutId: `oskS9bhKo`,
                            children: [
                              c(G, {
                                children: c(v.div, {
                                  className: `framer-1jorm4g-container`,
                                  layoutDependency: U,
                                  layoutId: `YYyyRtZyW-container`,
                                  transformTemplate: ho,
                                  ...co({ "eYfNE8tkf-hover": { transformTemplate: void 0 } }, j, R),
                                  children: c(Wn, {
                                    customColor: C,
                                    customPadding: 0,
                                    customStrokeWidth: 2,
                                    customSvgCode: E,
                                    height: `100%`,
                                    id: `YYyyRtZyW`,
                                    layoutId: `YYyyRtZyW`,
                                    lineCap: `butt`,
                                    lineJoin: `miter`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...co({ "eYfNE8tkf-hover": { customColor: T } }, j, R),
                                  }),
                                }),
                              }),
                              c(G, {
                                children: c(v.div, {
                                  className: `framer-6664ba-container`,
                                  layoutDependency: U,
                                  layoutId: `uBVwaUkve-container`,
                                  children: c(Wn, {
                                    customColor: C,
                                    customPadding: 0,
                                    customStrokeWidth: 2,
                                    customSvgCode: D,
                                    height: `100%`,
                                    id: `uBVwaUkve`,
                                    layoutId: `uBVwaUkve`,
                                    lineCap: `butt`,
                                    lineJoin: `miter`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...co({ "eYfNE8tkf-hover": { customColor: T } }, j, R),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        c(K, {
                          __fromCanvasComponent: !0,
                          children: c(i, {
                            children: c(v.p, {
                              style: {
                                "--font-selector": `R0Y7SW50ZXItNTAw`,
                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                "--framer-font-weight": `500`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-g0e9eEWSg-iHx9a6mQd))`,
                              },
                              children: `Learn more`,
                            }),
                          }),
                          className: `framer-1trnv`,
                          fonts: [`GF;Inter-500`],
                          layoutDependency: U,
                          layoutId: `ywqKJjP9a`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-g0e9eEWSg-iHx9a6mQd)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--framer-paragraph-spacing": `0px`,
                            "--variable-reference-g0e9eEWSg-iHx9a6mQd": y,
                            "--variable-reference-mKVpWCoSL-iHx9a6mQd": x,
                          },
                          text: d,
                          variants: {
                            "eYfNE8tkf-hover": {
                              "--extracted-r6o4lv": `var(--variable-reference-mKVpWCoSL-iHx9a6mQd)`,
                              "--variable-reference-mKVpWCoSL-iHx9a6mQd": x,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...co(
                            {
                              "eYfNE8tkf-hover": {
                                children: c(i, {
                                  children: c(v.p, {
                                    style: {
                                      "--font-selector": `R0Y7SW50ZXItNTAw`,
                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                      "--framer-font-weight": `500`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-mKVpWCoSL-iHx9a6mQd))`,
                                    },
                                    children: `Learn more`,
                                  }),
                                }),
                              },
                            },
                            j,
                            R
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-610CN.framer-2ma21l, .framer-610CN .framer-2ma21l { display: block; }`,
          `.framer-610CN.framer-164w25l { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 58px 0px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-610CN .framer-13fffqp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: flex-end; overflow: hidden; padding: 0px 12px 0px 0px; position: absolute; right: 2px; top: calc(50.00000000000002% - 40px / 2); width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-610CN .framer-1elhlwu { flex: none; height: 16px; overflow: hidden; position: relative; width: 16px; }`,
          `.framer-610CN .framer-1jorm4g-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; position: absolute; top: 50%; width: 16px; }`,
          `.framer-610CN .framer-6664ba-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: -16px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-610CN .framer-1trnv { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-610CN.framer-164w25l, .framer-610CN .framer-13fffqp { gap: 0px; } .framer-610CN.framer-164w25l > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-610CN.framer-164w25l > :first-child, .framer-610CN .framer-13fffqp > :first-child { margin-left: 0px; } .framer-610CN.framer-164w25l > :last-child, .framer-610CN .framer-13fffqp > :last-child { margin-right: 0px; } .framer-610CN .framer-13fffqp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-13fffqp { left: 2px; width: unset; }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-1jorm4g-container { bottom: 0px; height: unset; left: unset; right: -16px; top: 0px; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-610CN.framer-v-164w25l.hover .framer-6664ba-container { left: 0px; }`,
        ],
        `framer-610CN`
      )),
      (xo = bo),
      (bo.displayName = `Button Icon`),
      (bo.defaultProps = { height: 44, width: 169 }),
      ue(bo, {
        VArIlTNTt: {
          defaultValue: `Learn more`,
          displayTextArea: !1,
          title: `Label`,
          type: M.String,
        },
        Oon8L041D: {
          defaultValue: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114)) /* {"name":"Primary"} */`,
          title: `Default Fill`,
          type: M.Color,
        },
        AL6IB9otP: {
          defaultValue: `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65)) /* {"name":"Orange"} */`,
          title: `Hover Fill`,
          type: M.Color,
        },
        Lzyfez8Rw: { defaultValue: `rgb(255, 255, 255)`, title: `Default Circle`, type: M.Color },
        Lf8afaZg_: { defaultValue: `rgb(252, 94, 66)`, title: `Hover Circle`, type: M.Color },
        g0e9eEWSg: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Default Text`,
          type: M.Color,
        },
        mKVpWCoSL: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Hover Text`,
          type: M.Color,
        },
        fTULNZYxz: {
          defaultValue: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114)) /* {"name":"Primary"} */`,
          title: `Default Icon`,
          type: M.Color,
        },
        rZYR6tqXt: {
          defaultValue: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */`,
          title: `Hover Icon`,
          type: M.Color,
        },
        k3JhaMy5_: {
          defaultValue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
          displayTextArea: !1,
          title: `Icon 01`,
          type: M.String,
        },
        wbc_aIg1P: {
          defaultValue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
          displayTextArea: !1,
          title: `Icon 02`,
          type: M.String,
        },
        n4p6Q_Jl3: { title: `Link`, type: M.Link },
        Saf4VZmW2: { defaultValue: !1, title: `New Tab`, type: M.Boolean },
      }),
      C(
        bo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...lo,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Co(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro = t(() => {
    (p(),
      T(),
      x(),
      n(),
      kt(),
      so(),
      So(),
      (wo = k(xo)),
      (To = [`Bfw3A_MFy`, `Ik84ArLBs`, `rXtjq1ujL`, `MK7vnbnLy`, `aEZCxFTt1`]),
      (Eo = `framer-ha9yF`),
      (Do = {
        aEZCxFTt1: `framer-v-c5to4n`,
        Bfw3A_MFy: `framer-v-1jyt7wy`,
        Ik84ArLBs: `framer-v-1tdrn8f`,
        MK7vnbnLy: `framer-v-a0vnnb`,
        rXtjq1ujL: `framer-v-jjqrln`,
      }),
      (Oo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (ko = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ao = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (jo = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Mo = v.create(i)),
      (No = {
        "Phone Default": `MK7vnbnLy`,
        "Phone Hover": `aEZCxFTt1`,
        Default: `Bfw3A_MFy`,
        Hover: `Ik84ArLBs`,
        Idle: `rXtjq1ujL`,
      }),
      (Po = ({
        height: e,
        id: t,
        image: n,
        link: r,
        mouseEnter: i,
        padding: a,
        padding2: o,
        sub: s,
        title: c,
        width: l,
        ...u
      }) => ({
        ...u,
        aLoeIpSuy: c ?? u.aLoeIpSuy ?? `Building the world’s best home buying experience.`,
        d2QuR_VIK: i ?? u.d2QuR_VIK,
        Edz3ZRmHd: n ??
          u.Edz3ZRmHd ?? {
            src: `https://framerusercontent.com/images/H05M3GTCsBqoKMyAOjNc9IC4SI.webp`,
            srcSet: `https://framerusercontent.com/images/H05M3GTCsBqoKMyAOjNc9IC4SI.webp?scale-down-to=512 512w,https://framerusercontent.com/images/H05M3GTCsBqoKMyAOjNc9IC4SI.webp 592w`,
          },
        J2tMUI8nu: a ?? u.J2tMUI8nu ?? `30px 120px 30px 30px`,
        qRBZvQ1p5: o ?? u.qRBZvQ1p5 ?? `30px 10px 30px 30px`,
        Ugy22DNeV: s ?? u.Ugy22DNeV ?? `Meet the aero electric RV that will change how you travel`,
        variant: No[u.variant] ?? u.variant ?? `Bfw3A_MFy`,
        w00fWISlh: r ?? u.w00fWISlh,
      })),
      (Fo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Io = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: a } = N(),
            {
              style: o,
              className: s,
              layoutId: l,
              variant: u,
              aLoeIpSuy: d,
              Ugy22DNeV: p,
              Edz3ZRmHd: m,
              w00fWISlh: g,
              d2QuR_VIK: _,
              J2tMUI8nu: y,
              qRBZvQ1p5: x,
              ...C
            } = Po(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: M,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = L({
              cycleOrder: To,
              defaultVariant: `Bfw3A_MFy`,
              variant: u,
              variantClassNames: Do,
            }),
            R = Fo(e, I),
            { activeVariantCallback: z, delay: B } = A(T),
            V = z(async (...e) => {
              if ((P({ isHovered: !0 }), _ && (await _(...e)) === !1)) return !1;
              F(`Ik84ArLBs`);
            }),
            H = z(async (...e) => {
              if ((P({ isHovered: !0 }), _ && (await _(...e)) === !1)) return !1;
            }),
            ee = z(async (...e) => {
              (P({ isHovered: !1 }), F(`Bfw3A_MFy`));
            }),
            te = z(async (...e) => {
              if ((P({ isHovered: !0 }), _ && (await _(...e)) === !1)) return !1;
              F(`aEZCxFTt1`);
            }),
            ne = z(async (...e) => {
              (P({ isHovered: !1 }), F(`MK7vnbnLy`));
            }),
            re = r(null),
            W = h(),
            ie = [oo, Ot],
            ae = S();
          return c(b, {
            id: l ?? W,
            children: c(Mo, {
              animate: I,
              initial: !1,
              children: c(jo, {
                value: Oo,
                children: f(v.div, {
                  ...C,
                  ...k,
                  className: w(Eo, ...ie, `framer-1jyt7wy`, s, E),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: R,
                  layoutId: `Bfw3A_MFy`,
                  onMouseEnter: V,
                  ref: t ?? re,
                  style: {
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...o,
                  },
                  ...Co(
                    {
                      aEZCxFTt1: {
                        "data-framer-name": `Phone Hover`,
                        onMouseEnter: H,
                        onMouseLeave: ne,
                      },
                      Ik84ArLBs: { "data-framer-name": `Hover`, onMouseEnter: H, onMouseLeave: ee },
                      MK7vnbnLy: { "data-framer-name": `Phone Default`, onMouseEnter: te },
                      rXtjq1ujL: { "data-framer-name": `Idle`, onMouseEnter: H },
                    },
                    T,
                    j
                  ),
                  children: [
                    f(v.div, {
                      className: `framer-vq0pgd`,
                      "data-framer-name": `Image Wrap`,
                      layoutDependency: R,
                      layoutId: `UDYtntpbH`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: [
                        c(U, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 375,
                            intrinsicWidth: 600,
                            loading: D(
                              (ae?.y || 0) +
                                0 +
                                ((ae?.height || 450) * 1 * 0.5000000000000002 - 270)
                            ),
                            pixelHeight: 750,
                            pixelWidth: 1200,
                            sizes: `1200px`,
                            ...ko(m),
                          },
                          className: `framer-negcl3`,
                          "data-framer-name": `Image 1`,
                          layoutDependency: R,
                          layoutId: `ilQHC4MIL`,
                        }),
                        c(v.div, {
                          className: `framer-145f73g`,
                          "data-framer-name": `Overlay`,
                          layoutDependency: R,
                          layoutId: `Uk2viZHbw`,
                          style: {
                            backgroundColor: `rgba(0, 0, 0, 0.15)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          variants: {
                            aEZCxFTt1: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                            Ik84ArLBs: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                            rXtjq1ujL: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                          },
                        }),
                        c(v.div, {
                          className: `framer-1jyhzga`,
                          "data-framer-name": `Color`,
                          layoutDependency: R,
                          layoutId: `RlK_IceEL`,
                          style: {
                            backdropFilter: `none`,
                            backgroundColor: `rgba(0, 0, 0, 0.5)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            opacity: 0,
                            WebkitBackdropFilter: `none`,
                          },
                          variants: {
                            aEZCxFTt1: {
                              backdropFilter: `blur(10px)`,
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                              opacity: 1,
                              WebkitBackdropFilter: `blur(10px)`,
                            },
                            Ik84ArLBs: {
                              backdropFilter: `blur(10px)`,
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                              opacity: 1,
                              WebkitBackdropFilter: `blur(10px)`,
                            },
                            rXtjq1ujL: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                          },
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-8yfp2c`,
                      "data-framer-name": `Content`,
                      layoutDependency: R,
                      layoutId: `w855eb3ad`,
                      style: { "--i9djef": Ao(x), "--qbgaei": Ao(y) },
                      children: [
                        c(K, {
                          __fromCanvasComponent: !0,
                          children: c(i, {
                            children: c(v.p, {
                              className: `framer-styles-preset-7cjtto`,
                              "data-styles-preset": `rRmVGshFi`,
                              children: `Building the world’s best home buying experience.`,
                            }),
                          }),
                          className: `framer-1wxmh6r`,
                          fonts: [`Inter`],
                          layoutDependency: R,
                          layoutId: `qt9hZnyxl`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 1,
                          },
                          text: d,
                          variants: { rXtjq1ujL: { opacity: 0 } },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        f(v.div, {
                          className: `framer-1714093`,
                          "data-framer-name": `Text + Button`,
                          layoutDependency: R,
                          layoutId: `TgSag9Wpk`,
                          style: { opacity: 0 },
                          variants: { aEZCxFTt1: { opacity: 1 }, Ik84ArLBs: { opacity: 1 } },
                          children: [
                            c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(v.p, {
                                  className: `framer-styles-preset-1prn9rl`,
                                  "data-styles-preset": `CrHSyoPCi`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Meet the aero electric RV that will change how you travel`,
                                }),
                              }),
                              className: `framer-s9sp2j`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `zGY0p4bVk`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: p,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(G, {
                              height: 44,
                              y:
                                (ae?.y || 0) +
                                0 +
                                ((ae?.height || 450) - 0 - 268 + 0 + 0) +
                                268 -
                                84 +
                                0 +
                                168,
                              ...Co({ aEZCxFTt1: { y: void 0 }, Ik84ArLBs: { y: void 0 } }, T, j),
                              children: c(v.div, {
                                className: `framer-vapu0p-container`,
                                layoutDependency: R,
                                layoutId: `kCC9203Gg-container`,
                                children: c(xo, {
                                  AL6IB9otP: `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65))`,
                                  fTULNZYxz: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  g0e9eEWSg: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                  height: `100%`,
                                  id: `kCC9203Gg`,
                                  k3JhaMy5_: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
                                  layoutId: `kCC9203Gg`,
                                  Lf8afaZg_: `rgb(252, 94, 66)`,
                                  Lzyfez8Rw: `rgb(255, 255, 255)`,
                                  mKVpWCoSL: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                  n4p6Q_Jl3: g,
                                  Oon8L041D: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                  rZYR6tqXt: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                  Saf4VZmW2: !1,
                                  style: { height: `100%` },
                                  VArIlTNTt: `See case study`,
                                  wbc_aIg1P: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ha9yF.framer-hjtzhg, .framer-ha9yF .framer-hjtzhg { display: block; }`,
          `.framer-ha9yF.framer-1jyt7wy { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 450px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 602px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ha9yF .framer-vq0pgd { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ha9yF .framer-negcl3 { flex: none; height: 540px; left: calc(50.00000000000002% - 1200px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 540px / 2); width: 1200px; }`,
          `.framer-ha9yF .framer-145f73g, .framer-ha9yF .framer-1jyhzga { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
          `.framer-ha9yF .framer-8yfp2c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-ha9yF .framer-1wxmh6r, .framer-ha9yF .framer-s9sp2j { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ha9yF .framer-1714093 { align-content: flex-start; align-items: flex-start; bottom: -128px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; left: 30px; overflow: hidden; padding: 0px; position: absolute; width: 365px; z-index: 1; }`,
          `.framer-ha9yF .framer-vapu0p-container { flex: none; height: 44px; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ha9yF.framer-1jyt7wy, .framer-ha9yF .framer-8yfp2c, .framer-ha9yF .framer-1714093 { gap: 0px; } .framer-ha9yF.framer-1jyt7wy > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ha9yF.framer-1jyt7wy > :first-child, .framer-ha9yF .framer-8yfp2c > :first-child, .framer-ha9yF .framer-1714093 > :first-child { margin-top: 0px; } .framer-ha9yF.framer-1jyt7wy > :last-child, .framer-ha9yF .framer-8yfp2c > :last-child, .framer-ha9yF .framer-1714093 > :last-child { margin-bottom: 0px; } .framer-ha9yF .framer-8yfp2c > *, .framer-ha9yF .framer-1714093 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }`,
          `.framer-ha9yF.framer-v-1tdrn8f .framer-145f73g, .framer-ha9yF.framer-v-1tdrn8f .framer-1jyhzga, .framer-ha9yF.framer-v-jjqrln .framer-145f73g, .framer-ha9yF.framer-v-jjqrln .framer-1jyhzga, .framer-ha9yF.framer-v-c5to4n .framer-145f73g, .framer-ha9yF.framer-v-c5to4n .framer-1jyhzga { will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ha9yF.framer-v-1tdrn8f .framer-8yfp2c { padding: var(--qbgaei); }`,
          `.framer-ha9yF.framer-v-1tdrn8f .framer-1714093, .framer-ha9yF.framer-v-c5to4n .framer-1714093 { bottom: unset; left: unset; position: relative; width: 100%; }`,
          `.framer-ha9yF.framer-v-c5to4n .framer-8yfp2c { padding: var(--i9djef); }`,
          ...ao,
          ...Dt,
        ],
        `framer-ha9yF`
      )),
      (Lo = Io),
      (Io.displayName = `Card`),
      (Io.defaultProps = { height: 450, width: 602 }),
      ue(Io, {
        variant: {
          options: [`Bfw3A_MFy`, `Ik84ArLBs`, `rXtjq1ujL`, `MK7vnbnLy`, `aEZCxFTt1`],
          optionTitles: [`Default`, `Hover`, `Idle`, `Phone Default`, `Phone Hover`],
          title: `Variant`,
          type: M.Enum,
        },
        aLoeIpSuy: {
          defaultValue: `Building the world’s best home buying experience.`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        Ugy22DNeV: {
          defaultValue: `Meet the aero electric RV that will change how you travel`,
          displayTextArea: !1,
          title: `Sub`,
          type: M.String,
        },
        Edz3ZRmHd: {
          __defaultAssetReference: `data:framer/asset-reference,H05M3GTCsBqoKMyAOjNc9IC4SI.webp?originalFilename=Torii-List-Small.webp&preferredSize=auto`,
          title: `Image`,
          type: M.ResponsiveImage,
        },
        w00fWISlh: { title: `Link`, type: M.Link },
        d2QuR_VIK: { title: `Mouse Enter`, type: M.EventHandler },
        J2tMUI8nu: { defaultValue: `30px 120px 30px 30px`, title: `Padding`, type: M.Padding },
        qRBZvQ1p5: { defaultValue: `30px 10px 30px 30px`, title: `Padding 2`, type: M.Padding },
      }),
      C(
        Io,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...wo,
          ...E(io),
          ...E(Et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es = t(() => {
    (p(),
      T(),
      x(),
      n(),
      ro(),
      Ro(),
      (Bo = k(Lo)),
      (Vo = [`QKHn8_wiy`, `kOvULR1ke`, `euhfKfRXa`]),
      (Ho = `framer-gs0m6`),
      (Uo = {
        euhfKfRXa: `framer-v-1xia944`,
        kOvULR1ke: `framer-v-1wohe35`,
        QKHn8_wiy: `framer-v-19yaa0z`,
      }),
      (Wo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Go = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ko = ({ query: e, pageSize: t, children: n }) => n(ee(e))),
      (qo = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Jo = v.create(i)),
      (Yo = { Default: `QKHn8_wiy`, Phone: `euhfKfRXa`, Tablet: `kOvULR1ke` }),
      (Xo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Yo[r.variant] ?? r.variant ?? `QKHn8_wiy`,
      })),
      (Zo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qo = W(
        l(function (e, t) {
          let { activeLocale: n, setLocale: i } = N(),
            {
              style: a,
              className: o,
              layoutId: s,
              variant: l,
              hbL_Cf5VacW6Bzy3SS: u,
              QWf4CTQamcW6Bzy3SS: d,
              JAos2VVaacW6Bzy3SS: f,
              IdLDCVSHScW6Bzy3SS: p,
              idcW6Bzy3SS: g,
              ..._
            } = Xo(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = L({
              cycleOrder: Vo,
              defaultVariant: `QKHn8_wiy`,
              variant: l,
              variantClassNames: Uo,
            }),
            j = Zo(e, A),
            M = r(null);
          F();
          let I = h(),
            z = [],
            B = S();
          return c(b, {
            id: s ?? I,
            children: c(Jo, {
              animate: A,
              initial: !1,
              children: c(qo, {
                value: Wo,
                children: c(v.div, {
                  ..._,
                  ...T,
                  className: w(Ho, ...z, `framer-19yaa0z`, o, x),
                  "data-framer-name": `Default`,
                  layoutDependency: j,
                  layoutId: `QKHn8_wiy`,
                  ref: t ?? M,
                  style: { ...a },
                  ...zo(
                    {
                      euhfKfRXa: { "data-framer-name": `Phone` },
                      kOvULR1ke: { "data-framer-name": `Tablet` },
                    },
                    y,
                    E
                  ),
                  children: c(v.div, {
                    className: `framer-b0f0ir`,
                    layoutDependency: j,
                    layoutId: `Q8jFGF2dp`,
                    children: c(v.div, {
                      className: `framer-2l6ek9`,
                      layoutDependency: j,
                      layoutId: `cW6Bzy3SS`,
                      children: c(se, {
                        children: c(Ko, {
                          query: {
                            from: { alias: `cW6Bzy3SS`, data: no, type: `Collection` },
                            limit: { type: `LiteralValue`, value: 4 },
                            select: [
                              { collection: `cW6Bzy3SS`, name: `hbL_Cf5Va`, type: `Identifier` },
                              { collection: `cW6Bzy3SS`, name: `QWf4CTQam`, type: `Identifier` },
                              { collection: `cW6Bzy3SS`, name: `JAos2VVaa`, type: `Identifier` },
                              { collection: `cW6Bzy3SS`, name: `IdLDCVSHS`, type: `Identifier` },
                              { collection: `cW6Bzy3SS`, name: `id`, type: `Identifier` },
                            ],
                          },
                          children: (e, t, n) =>
                            c(m, {
                              children: e.map(
                                (
                                  { hbL_Cf5Va: e, id: t, IdLDCVSHS: n, JAos2VVaa: r, QWf4CTQam: i },
                                  a
                                ) => (
                                  (e ??= ``),
                                  (i ??= ``),
                                  (n ??= ``),
                                  c(
                                    b,
                                    {
                                      id: `cW6Bzy3SS-${t}`,
                                      children: c(R.Provider, {
                                        value: { IdLDCVSHS: n },
                                        children: c(P, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: { IdLDCVSHS: n },
                                                webPageId: `oLLrzIi7Q`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { IdLDCVSHS: n },
                                                webPageId: `oLLrzIi7Q`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { IdLDCVSHS: n },
                                                webPageId: `oLLrzIi7Q`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (t) =>
                                            c(G, {
                                              height: 450,
                                              width: `max((max(${B?.width || `100vw`}, 1px) - 40px) / 2, 50px)`,
                                              y:
                                                (B?.y || 0) +
                                                0 +
                                                (((B?.height || 940) - 0 - 940) / 2 + 0 + 0) +
                                                0 +
                                                0 +
                                                0,
                                              ...zo(
                                                {
                                                  euhfKfRXa: {
                                                    width: `max(${B?.width || `100vw`}, 1px)`,
                                                    y:
                                                      (B?.y || 0) +
                                                      0 +
                                                      (((B?.height || 1920) - 0 - 450) / 2 +
                                                        0 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  kOvULR1ke: {
                                                    width: `max(${B?.width || `100vw`}, 1px)`,
                                                    y:
                                                      (B?.y || 0) +
                                                      0 +
                                                      (((B?.height || 1920) - 0 - 450) / 2 +
                                                        0 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                y,
                                                E
                                              ),
                                              children: c(v.div, {
                                                className: `framer-a9xrak-container`,
                                                layoutDependency: j,
                                                layoutId: `Bqt48X8Rm-container`,
                                                children: c(Lo, {
                                                  aLoeIpSuy: e,
                                                  Edz3ZRmHd: Go(r),
                                                  height: `100%`,
                                                  id: `Bqt48X8Rm`,
                                                  J2tMUI8nu: `30px 120px 30px 30px`,
                                                  layoutId: `Bqt48X8Rm`,
                                                  qRBZvQ1p5: `30px 10px 30px 30px`,
                                                  style: { width: `100%` },
                                                  Ugy22DNeV: i,
                                                  variant: `Bfw3A_MFy`,
                                                  w00fWISlh: t[0],
                                                  width: `100%`,
                                                  ...zo(
                                                    {
                                                      euhfKfRXa: {
                                                        variant: `MK7vnbnLy`,
                                                        w00fWISlh: t[2],
                                                      },
                                                      kOvULR1ke: { w00fWISlh: t[1] },
                                                    },
                                                    y,
                                                    E
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                    },
                                    t
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gs0m6.framer-1ilz9ij, .framer-gs0m6 .framer-1ilz9ij { display: block; }`,
          `.framer-gs0m6.framer-19yaa0z { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 1100px; }`,
          `.framer-gs0m6 .framer-b0f0ir { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-gs0m6 .framer-2l6ek9 { display: grid; flex: 1 0 0px; gap: 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gs0m6 .framer-a9xrak-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gs0m6.framer-19yaa0z, .framer-gs0m6 .framer-b0f0ir { gap: 0px; } .framer-gs0m6.framer-19yaa0z > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-gs0m6.framer-19yaa0z > :first-child { margin-top: 0px; } .framer-gs0m6.framer-19yaa0z > :last-child { margin-bottom: 0px; } .framer-gs0m6 .framer-b0f0ir > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-gs0m6 .framer-b0f0ir > :first-child { margin-left: 0px; } .framer-gs0m6 .framer-b0f0ir > :last-child { margin-right: 0px; } }`,
          `.framer-gs0m6.framer-v-1wohe35 .framer-2l6ek9, .framer-gs0m6.framer-v-1xia944 .framer-2l6ek9 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: flex-start; }`,
          `.framer-gs0m6.framer-v-1wohe35 .framer-a9xrak-container, .framer-gs0m6.framer-v-1xia944 .framer-a9xrak-container { align-self: unset; height: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gs0m6.framer-v-1wohe35 .framer-2l6ek9 { gap: 0px; } .framer-gs0m6.framer-v-1wohe35 .framer-2l6ek9 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-gs0m6.framer-v-1wohe35 .framer-2l6ek9 > :first-child { margin-top: 0px; } .framer-gs0m6.framer-v-1wohe35 .framer-2l6ek9 > :last-child { margin-bottom: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gs0m6.framer-v-1xia944 .framer-2l6ek9 { gap: 0px; } .framer-gs0m6.framer-v-1xia944 .framer-2l6ek9 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-gs0m6.framer-v-1xia944 .framer-2l6ek9 > :first-child { margin-top: 0px; } .framer-gs0m6.framer-v-1xia944 .framer-2l6ek9 > :last-child { margin-bottom: 0px; } }`,
        ],
        `framer-gs0m6`
      )),
      ($o = Qo),
      (Qo.displayName = `Card Container`),
      (Qo.defaultProps = { height: 940, width: 1100 }),
      ue(Qo, {
        variant: {
          options: [`QKHn8_wiy`, `kOvULR1ke`, `euhfKfRXa`],
          optionTitles: [`Default`, `Tablet`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      C(Qo, [{ explicitInter: !0, fonts: [] }, ...Bo], { supportsExplicitInterCodegen: !0 }));
  }),
  ts,
  ns,
  rs,
  is = t(() => {
    (T(),
      O.loadFonts([
        `FS;Satoshi-regular`,
        `FS;Satoshi-bold`,
        `FS;Satoshi-bold italic`,
        `FS;Satoshi-italic`,
      ]),
      (ts = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Satoshi`,
              source: `fontshare`,
              style: `normal`,
              url: `../../assets/misc/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2`,
              weight: `400`,
            },
            {
              family: `Satoshi`,
              source: `fontshare`,
              style: `normal`,
              url: `../../assets/misc/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2`,
              weight: `700`,
            },
            {
              family: `Satoshi`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2`,
              weight: `700`,
            },
            {
              family: `Satoshi`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/MPIFA4B3XXRNY2MJDGP6GOOOAF6EOCLO/W5E4ZFYPJ3V6JKMBGHB6YMITK6EWS2XA/QOMBWPST76ICDYF6WOBS7SQ7RBT67QW2.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ns = [
        `.framer-0TtWu .framer-styles-preset-bpuu3c:not(.rich-text-wrapper), .framer-0TtWu .framer-styles-preset-bpuu3c.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.32px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1399px) and (min-width: 1200px) { .framer-0TtWu .framer-styles-preset-bpuu3c:not(.rich-text-wrapper), .framer-0TtWu .framer-styles-preset-bpuu3c.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.32px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1199px) and (min-width: 768px) { .framer-0TtWu .framer-styles-preset-bpuu3c:not(.rich-text-wrapper), .framer-0TtWu .framer-styles-preset-bpuu3c.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.32px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 0px) { .framer-0TtWu .framer-styles-preset-bpuu3c:not(.rich-text-wrapper), .framer-0TtWu .framer-styles-preset-bpuu3c.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.32px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (rs = `framer-0TtWu`));
  }),
  as,
  os,
  $,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc;
t(() => {
  (p(),
    T(),
    x(),
    n(),
    ge(),
    rt(),
    Tn(),
    Oe(),
    Hn(),
    ar(),
    Ne(),
    Er(),
    Ur(),
    es(),
    Ce(),
    Pe(),
    he(),
    pe(),
    Fe(),
    is(),
    ve(),
    ze(),
    (as = k(_e)),
    (os = k(ke)),
    ($ = B(v.div)),
    (ss = k(je)),
    (cs = z(te(je, { nodeId: `swQcF4C3F`, override: Me, scopeId: `eQrbBJrm8` }), Ae)),
    (ls = B(K)),
    (us = k(Tr)),
    (ds = B(V)),
    (fs = k(wn)),
    (ps = k(Vn)),
    (ms = k(J)),
    (hs = k(ir)),
    (gs = k($o)),
    (_s = k(Hr)),
    (vs = q(Hr)),
    (ys = k(be)),
    (bs = {
      fWs0PU7uh: `(min-width: 768px) and (max-width: 1199.98px)`,
      iE2XOLkII: `(max-width: 767.98px)`,
      mpTgpjS31: `(min-width: 1200px) and (max-width: 1399.98px)`,
      WD8wu7PXr: `(min-width: 1400px)`,
    }),
    (xs = () => typeof document < `u`),
    (Ss = `framer-ObTUi`),
    (Cs = {
      fWs0PU7uh: `framer-v-ulzftn`,
      iE2XOLkII: `framer-v-lrt0pz`,
      mpTgpjS31: `framer-v-1c4zlhw`,
      WD8wu7PXr: `framer-v-8blmsd`,
    }),
    (ws = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 0,
    }),
    (Ts = { delay: 0.1, duration: 2.1, ease: [0.98, 0.27, 0.56, 1], type: `tween` }),
    (Es = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Ts,
      x: 0,
      y: 0,
    }),
    (Ds = { delay: 0, duration: 6, ease: [0, 0, 1, 1], type: `tween` }),
    (Os = {
      opacity: 1,
      rotate: 360,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (ks = (e, t) => `translateX(-50%) ${t}`),
    (As = { delay: 0, duration: 2, ease: [0.29, 0, 1, 0.69], type: `tween` }),
    (js = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ms = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: -160,
    }),
    (Ns = { damping: 60, delay: 0.3, mass: 1, stiffness: 250, type: `spring` }),
    (Ps = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Ns,
      x: 0,
      y: -160,
    }),
    (Fs = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Is = { damping: 60, delay: 0.35, mass: 1, stiffness: 250, type: `spring` }),
    (Ls = {
      effect: Fs,
      startDelay: 1.2,
      tokenization: `line`,
      transition: Is,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Rs = {
      effect: Fs,
      repeat: !1,
      startDelay: 1.8,
      threshold: 0,
      tokenization: `line`,
      transition: Is,
      trigger: `onInView`,
      type: `appear`,
    }),
    (zs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (Bs = { damping: 60, delay: 2.6, mass: 1, stiffness: 250, type: `spring` }),
    (Vs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Bs,
      x: 0,
      y: 20,
    }),
    (Hs = { delay: 0.1, duration: 1.2, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
    (Us = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Hs,
      x: 0,
      y: 0,
    }),
    (Ws = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Gs = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
    (Ks = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Gs,
      x: 0,
      y: 0,
    }),
    (qs = { delay: 0, duration: 15, ease: [0, 0, 1, 1], type: `tween` }),
    (Js = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Ys = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 64,
    }),
    (Xs = { damping: 60, delay: 0.1, mass: 1, stiffness: 250, type: `spring` }),
    (Zs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Xs,
      x: 0,
      y: 64,
    }),
    (Qs = { delay: 0.1, duration: 1.2, ease: [0.98, 0.27, 0.56, 1], type: `tween` }),
    ($s = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Qs,
      x: 0,
      y: 0,
    }),
    (ec = (e, t) => `translate(-50%, -50%) ${t}`),
    (tc = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: `tween` }),
    (nc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: -50,
    }),
    (rc = { delay: 0.3, duration: 1.3, ease: [1, 0.04, 0.22, 0.98], type: `tween` }),
    (ic = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: rc,
      x: 0,
      y: -50,
    }),
    (ac = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: -20,
    }),
    (oc = { delay: 0.1, duration: 0.8, ease: [0.98, 0.27, 0.56, 1], type: `tween` }),
    (sc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: oc,
      x: 0,
      y: -20,
    }),
    (cc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 20,
    }),
    (lc = { damping: 60, delay: 0, mass: 1.2, stiffness: 200, type: `spring` }),
    (uc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: lc,
      x: 0,
      y: 20,
    }),
    (dc = { damping: 30, delay: 0, mass: 1, stiffness: 150, type: `spring` }),
    (fc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 25,
    }),
    (pc = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: Gs,
      x: 0,
      y: 25,
    }),
    (mc = {
      opacity: 0.5,
      rotate: 2,
      rotateX: 0,
      rotateY: 4,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 100,
    }),
    (hc = { damping: 60, delay: 0.1, mass: 3, stiffness: 400, type: `spring` }),
    (gc = {
      opacity: 0.5,
      rotate: 2,
      rotateX: 0,
      rotateY: 4,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: hc,
      x: 0,
      y: 100,
    }),
    (_c = {
      opacity: 0,
      rotate: 2,
      rotateX: 0,
      rotateY: 4,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 100,
    }),
    (vc = { damping: 50, delay: 0.1, mass: 1, stiffness: 500, type: `spring` }),
    (yc = {
      opacity: 0,
      rotate: 2,
      rotateX: 0,
      rotateY: 4,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: vc,
      x: 0,
      y: 100,
    }),
    (bc = ({ value: e }) =>
      H()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (xc = { Desktop: `WD8wu7PXr`, Laptop: `mpTgpjS31`, Phone: `iE2XOLkII`, Tablet: `fWs0PU7uh` }),
    (Sc = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: xc[r.variant] ?? r.variant ?? `WD8wu7PXr`,
    })),
    (Cc = W(
      l(function (e, t) {
        let n = r(null),
          a = t ?? n,
          o = h(),
          { activeLocale: s, setLocale: l } = N(),
          u = S(),
          { style: p, className: m, layoutId: g, variant: _, ...y } = Sc(e);
        re(d(() => Be({}, s), [s]));
        let [x, C] = ie(_, bs, !1),
          T = w(Ss, Re, rs, ye, fe, Ee);
        F();
        let E = r(null),
          O = r(null),
          k = r(null),
          A = r(null),
          M = ce(`WryNIFQCV`),
          I = ce(`AvOOP7rlC`),
          L = r(null),
          R = ce(`Iu9lkPGq4`),
          z = r(null),
          B = ce(`cYr5o27bG`),
          H = r(null),
          ee = ce(`gtGXByLKm`),
          te = r(null),
          W = ce(`fRJignev1`),
          oe = r(null),
          se = ce(`eb4s2BgDs`),
          le = r(null),
          ue = ce(`HsrhDHl1m`),
          de = r(null),
          q = ce(`K_GmQiQOC`),
          pe = r(null),
          me = ce(`zxBzwrwUr`),
          he = () => !xs() || x === `iE2XOLkII`,
          ge = ce(`qEGmhVOrq`),
          ve = ce(`sXHUI_Xgz`),
          xe = r(null),
          Se = ce(`F9uPyqmjG`),
          Ce = () => (xs() ? ![`fWs0PU7uh`, `iE2XOLkII`].includes(x) : !0),
          we = r(null),
          Te = r(null),
          De = r(null),
          Oe = ce(`DW5qkDhtJ`),
          Ae = ce(`FbNKkQFFK`);
        return (
          ne({}),
          c(ae.Provider, {
            value: { primaryVariantId: `WD8wu7PXr`, variantClassNames: Cs },
            children: f(b, {
              id: g ?? o,
              children: [
                c(bc, { value: `html body { background: rgb(255, 255, 255); }` }),
                f(v.div, {
                  ...y,
                  className: w(T, `framer-8blmsd`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    c(G, {
                      children: c(V, {
                        className: `framer-foun8u-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `IvmHhEgzx`,
                        scopeId: `eQrbBJrm8`,
                        children: c(_e, {
                          height: `100%`,
                          id: `IvmHhEgzx`,
                          intensity: 10,
                          layoutId: `IvmHhEgzx`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    c(P, {
                      links: [
                        { href: { webPageId: `eQrbBJrm8` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `eQrbBJrm8` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `eQrbBJrm8` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `eQrbBJrm8` }, implicitPathVariables: void 0 },
                      ],
                      children: (e) =>
                        c(G, {
                          height: 112,
                          width: `100vw`,
                          y: 0,
                          children: c(V, {
                            className: `framer-yn8d5q-container`,
                            layoutScroll: !0,
                            nodeId: `IevqyAgzb`,
                            scopeId: `eQrbBJrm8`,
                            children: c(j, {
                              breakpoint: x,
                              overrides: {
                                fWs0PU7uh: { oR4d5hZXf: e[1], variant: `EcyamDjkE` },
                                iE2XOLkII: { oR4d5hZXf: e[2], variant: `alNkaRTMW` },
                                mpTgpjS31: {
                                  DPKJmNuul: E,
                                  icWp1fejh: void 0,
                                  lOazm_FaF: void 0,
                                  oR4d5hZXf: e[3],
                                  variant: `EcyamDjkE`,
                                },
                              },
                              children: c(ke, {
                                DPKJmNuul: O,
                                height: `100%`,
                                icWp1fejh: A,
                                id: `IevqyAgzb`,
                                layoutId: `IevqyAgzb`,
                                lOazm_FaF: k,
                                oR4d5hZXf: e[0],
                                Q3oYYHiUc: !0,
                                style: { width: `100%` },
                                THCK4rsTa: E,
                                variant: `bkGaIz5WL`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                    }),
                    f(`div`, {
                      className: `framer-h4wm52`,
                      "data-framer-name": `Hero + About Section`,
                      children: [
                        c(`div`, {
                          className: `framer-9u8728`,
                          "data-framer-name": `Sun Glow`,
                          children: c($, {
                            __framer__animate: { transition: Ts },
                            __framer__animateOnce: !0,
                            __framer__enter: ws,
                            __framer__exit: Es,
                            __framer__loop: Os,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Ds,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1jpwnvh`,
                            "data-framer-name": `Blur, Rotate`,
                            style: { transformPerspective: 1200 },
                            transformTemplate: ks,
                            children: c($, {
                              __framer__loop: js,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopRepeatDelay: 0,
                              __framer__loopRepeatType: `mirror`,
                              __framer__loopTransition: As,
                              __perspectiveFX: !1,
                              __targetOpacity: 0.8,
                              className: `framer-1ibt9zd`,
                              "data-framer-name": `Color`,
                            }),
                          }),
                        }),
                        c($, {
                          __framer__animate: { transition: Ns },
                          __framer__animateOnce: !0,
                          __framer__enter: Ms,
                          __framer__exit: Ps,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-f4rzca`,
                          "data-framer-name": `Sun`,
                          style: { transformPerspective: 1200 },
                        }),
                        f(`div`, {
                          className: `framer-16y955e`,
                          "data-framer-name": `Content`,
                          children: [
                            f(`div`, {
                              className: `framer-1u7s1ni`,
                              "data-framer-name": `Heading`,
                              children: [
                                c(j, {
                                  breakpoint: x,
                                  overrides: {
                                    iE2XOLkII: {
                                      children: c(i, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                            "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                            "--framer-font-size": `52px`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `110%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(59, 59, 59)`,
                                          },
                                          children: `Fueling the Future, one innovator at a time`,
                                        }),
                                      }),
                                      fonts: [`FS;Bespoke Serif-regular`],
                                    },
                                  },
                                  children: c(K, {
                                    __fromCanvasComponent: !0,
                                    children: c(i, {
                                      children: c(`h1`, {
                                        className: `framer-styles-preset-8m3hym`,
                                        "data-styles-preset": `HETGTyytP`,
                                        children: `Fueling the Future, one innovator at a time`,
                                      }),
                                    }),
                                    className: `framer-ptx6gs`,
                                    "data-framer-name": `Our Priority is Attending to the Demands of Your Clientele.`,
                                    effect: Ls,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                c(j, {
                                  breakpoint: x,
                                  overrides: {
                                    fWs0PU7uh: {
                                      children: c(i, {
                                        children: c(`p`, {
                                          style: {
                                            "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                            "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-letter-spacing": `-0.32px`,
                                            "--framer-line-height": `150%`,
                                            "--framer-text-alignment": `center`,
                                          },
                                          children: `We are a Foundation with a vision to enable youth in campuses to become innovators of tomorrow`,
                                        }),
                                      }),
                                      fonts: [`FS;Satoshi-regular`],
                                    },
                                    mpTgpjS31: {
                                      children: c(i, {
                                        children: c(`p`, {
                                          style: {
                                            "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                            "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                            "--framer-font-size": `26px`,
                                            "--framer-letter-spacing": `-0.32px`,
                                            "--framer-line-height": `150%`,
                                            "--framer-text-alignment": `center`,
                                          },
                                          children: `We are a Foundation with a vision to enable youth in campuses to become innovators of tomorrow`,
                                        }),
                                      }),
                                      fonts: [`FS;Satoshi-regular`],
                                    },
                                  },
                                  children: c(K, {
                                    __fromCanvasComponent: !0,
                                    children: c(i, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-bpuu3c`,
                                        "data-styles-preset": `rBtOFigg3`,
                                        children: `We are a Foundation with a vision to enable youth in campuses to become innovators of tomorrow`,
                                      }),
                                    }),
                                    className: `framer-1d7qh14`,
                                    "data-framer-name": `A well-known NoCode company and Framer Partner, Nicey is situated in Novi Sad, Serbia. By developing the newest web experiences, we propel our clients quickly into the future.`,
                                    effect: Rs,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            c($, {
                              __framer__animate: { transition: Bs },
                              __framer__animateOnce: !0,
                              __framer__enter: zs,
                              __framer__exit: Vs,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-5vfd6x`,
                              "data-framer-name": `Container`,
                              children: f(`div`, {
                                className: `framer-12ogq85`,
                                children: [
                                  c(j, {
                                    breakpoint: x,
                                    overrides: {
                                      fWs0PU7uh: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          200 +
                                          240 +
                                          0 +
                                          64 +
                                          344 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      iE2XOLkII: { y: void 0 },
                                      mpTgpjS31: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          200 +
                                          240 +
                                          0 +
                                          64 +
                                          389 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: c(G, {
                                      height: 56,
                                      y: (u?.y || 0) + 0 + 200 + 240 + 0 + 64 + 402 + 0 + 0 + 0 + 0,
                                      children: c(V, {
                                        className: `framer-1dxctp4-container`,
                                        nodeId: `swQcF4C3F`,
                                        rendersWithMotion: !0,
                                        scopeId: `eQrbBJrm8`,
                                        children: c(cs, {
                                          height: `100%`,
                                          id: `swQcF4C3F`,
                                          layoutId: `swQcF4C3F`,
                                          nAraFIBQl: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                          S5EqVDFx5: `Apply Now`,
                                          style: { height: `100%` },
                                          variant: `QFWHYUKeG`,
                                          width: `100%`,
                                          XPPtN6fX6: `https://form.typeform.com/to/OqfFdNoW#name=xxxxx&email=xxxxx&source=createoncampus&linkedin_url=xxxxx`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(K, {
                                    __fromCanvasComponent: !0,
                                    children: c(i, {
                                      children: c(`p`, {
                                        style: {
                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                          "--framer-font-size": `14px`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `170%`,
                                          "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.8))`,
                                        },
                                        children: `Facing issues? Write to us at analyst@cocreate.ventures`,
                                      }),
                                    }),
                                    className: `framer-hwa7jc`,
                                    fonts: [`FS;Satoshi-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-1rcvybr`,
                          "data-framer-name": `Section`,
                          id: M,
                          ref: E,
                          children: f(`div`, {
                            className: `framer-1tcv2ls`,
                            "data-framer-name": `Container`,
                            children: [
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  iE2XOLkII: {
                                    __framer__threshold: 0,
                                    children: c(i, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                          "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                        },
                                        children: [
                                          `For the past 4 years, we have been working with Higher Educational Institutions across the country, in redefining opportunities for our tomorrow. `,
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `We are a Fund, Foundry and a Foundation`,
                                          }),
                                          ` enabling innovation on campuses achieve their true value. Our weapons? Expertise in deep innovation and entrepreneurship, core industry insights, coupled with programs & platforms for creating the right culture of innovation that feel less like cages and more like playgrounds.`,
                                        ],
                                      }),
                                    }),
                                  },
                                  mpTgpjS31: {
                                    children: c(i, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                          "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                          "--framer-font-size": `42px`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                        },
                                        children: [
                                          `For the past 4 years, we have been working with Higher Educational Institutions across the country, in redefining opportunities for our tomorrow. `,
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `We are a Fund, Foundry and a Foundation`,
                                          }),
                                          ` enabling innovation on campuses achieve their true value. Our weapons? Expertise in deep innovation and entrepreneurship, industry insights and connects, coupled with programs & platforms for creating the right culture of innovation that feel less like cages and more like playgrounds.`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: c(ls, {
                                  __framer__animate: { transition: Hs },
                                  __framer__animateOnce: !0,
                                  __framer__enter: ws,
                                  __framer__exit: Us,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: c(i, {
                                    children: f(`p`, {
                                      style: {
                                        "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                        "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                        "--framer-font-size": `42px`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                      },
                                      children: [
                                        `For the past 4 years, we have been working with Higher Educational Institutions across the country, in redefining opportunities for our tomorrow. `,
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `We are a Fund, Foundry and a Foundation`,
                                        }),
                                        ` enabling innovation on campuses achieve their true value. Our weapons? Expertise in deep innovation and entrepreneurship, core industry insights, coupled with programs & platforms for creating the right culture of innovation that feel less like cages and more like playgrounds.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-wckk5o`,
                                  fonts: [`FS;Bespoke Serif-regular`],
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  iE2XOLkII: {
                                    __framer__threshold: 0,
                                    children: c(i, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                          "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                        },
                                        children: [
                                          `In a world where student minds are driven to conformity, `,
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `we empower students & Institutions to achieve impactful results`,
                                          }),
                                          `. We believe Universities must `,
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `embrace innovation`,
                                          }),
                                          ` to`,
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: ` attract top talent`,
                                          }),
                                          c(`strong`, { children: `, ` }),
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `boost research`,
                                          }),
                                          c(`strong`, { children: ` ` }),
                                          `to`,
                                          c(`strong`, { children: ` ` }),
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `meet future demands`,
                                          }),
                                          `. We sculpt ideas, craft products, and weave partnerships that empower you, not exploit you.`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: c(ls, {
                                  __framer__animate: { transition: Hs },
                                  __framer__animateOnce: !0,
                                  __framer__enter: ws,
                                  __framer__exit: Us,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: c(i, {
                                    children: f(`p`, {
                                      style: {
                                        "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                        "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                        "--framer-font-size": `42px`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                      },
                                      children: [
                                        `In a world where student minds are driven to conformity, `,
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `we empower students & Institutions to achieve impactful results`,
                                        }),
                                        `. We believe Universities must `,
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `embrace innovation`,
                                        }),
                                        ` to`,
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: ` attract top talent`,
                                        }),
                                        c(`strong`, { children: `, ` }),
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `boost research`,
                                        }),
                                        c(`strong`, { children: ` ` }),
                                        `to`,
                                        c(`strong`, { children: ` ` }),
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `meet future demands`,
                                        }),
                                        `. We sculpt ideas, craft products, and weave partnerships that empower you, not exploit you.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-m30zhn`,
                                  fonts: [`FS;Bespoke Serif-regular`, `FS;Bespoke Serif-bold`],
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  iE2XOLkII: {
                                    __framer__threshold: 0,
                                    children: c(i, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                          "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                        },
                                        children: [
                                          c(`span`, {
                                            style: { "--framer-text-decoration": `underline` },
                                            children: `Join us in this catalyzing movement`,
                                          }),
                                          `. Reclaim your campus prowess, one innovation at a time. Let's enable 365 days of unmatched focus and culture.`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: c(ls, {
                                  __framer__animate: { transition: Hs },
                                  __framer__animateOnce: !0,
                                  __framer__enter: ws,
                                  __framer__exit: Us,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: c(i, {
                                    children: f(`p`, {
                                      style: {
                                        "--font-selector": `RlM7QmVzcG9rZSBTZXJpZi1yZWd1bGFy`,
                                        "--framer-font-family": `"Bespoke Serif", "Bespoke Serif Placeholder", serif`,
                                        "--framer-font-size": `42px`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                      },
                                      children: [
                                        c(`span`, {
                                          style: { "--framer-text-decoration": `underline` },
                                          children: `Join us in this catalyzing movement`,
                                        }),
                                        `. Reclaim your campus prowess, one innovation at a time. Let's enable 365 days of unmatched focus and culture.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-g0m2qt`,
                                  fonts: [`FS;Bespoke Serif-regular`],
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    c(`main`, {
                      className: `framer-1e05mt9`,
                      "data-framer-name": `Main`,
                      children: c(`section`, {
                        className: `framer-1e0vfwo`,
                        "data-framer-name": `Benefits`,
                        id: I,
                        ref: L,
                        children: f(`div`, {
                          className: `framer-11lf7op`,
                          "data-framer-name": `Container`,
                          children: [
                            c(j, {
                              breakpoint: x,
                              overrides: {
                                fWs0PU7uh: {
                                  width: `min(${u?.width || `100vw`}, 1200px)`,
                                  y: (u?.y || 0) + 0 + 2076.8 + 60 + 0 + 40 + 0 + 0 + 0,
                                },
                                iE2XOLkII: {
                                  width: `min(${u?.width || `100vw`}, 1200px)`,
                                  y: void 0,
                                },
                                mpTgpjS31: {
                                  y: (u?.y || 0) + 0 + 2201.8 + 60 + 0 + 40 + 0 + 0 + 0,
                                },
                              },
                              children: c(G, {
                                height: 187,
                                y: (u?.y || 0) + 0 + 2214.8 + 60 + 0 + 40 + 0 + 0 + 0,
                                children: c(ds, {
                                  __framer__animate: { transition: Gs },
                                  __framer__animateOnce: !1,
                                  __framer__enter: Ws,
                                  __framer__exit: Ks,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1fzuu32-container`,
                                  nodeId: `D5ZXOKEHM`,
                                  rendersWithMotion: !0,
                                  scopeId: `eQrbBJrm8`,
                                  children: c(j, {
                                    breakpoint: x,
                                    overrides: {
                                      fWs0PU7uh: { style: { width: `100%` }, variant: `TmsvLuDjo` },
                                      iE2XOLkII: { style: { width: `100%` }, variant: `WXhwoQgiu` },
                                      mpTgpjS31: { variant: `TmsvLuDjo` },
                                    },
                                    children: c(Tr, {
                                      fSNtEihhU: `Our Ecosystem`,
                                      height: `100%`,
                                      id: `D5ZXOKEHM`,
                                      layoutId: `D5ZXOKEHM`,
                                      variant: `gy1TUFNrr`,
                                      width: `100%`,
                                      xEktl70bp: `We have created an ecosphere that enables the youth of the country to capitalise and leverage greater opportunities`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            c(j, {
                              breakpoint: x,
                              overrides: {
                                fWs0PU7uh: {
                                  y: (u?.y || 0) + 0 + 2076.8 + 60 + 0 + 40 + 0 + 0 + 197,
                                },
                                iE2XOLkII: { width: `320px`, y: void 0 },
                                mpTgpjS31: {
                                  y: (u?.y || 0) + 0 + 2201.8 + 60 + 0 + 40 + 0 + 0 + 197,
                                },
                              },
                              children: c(G, {
                                height: 625,
                                width: `min(${u?.width || `100vw`}, 1200px)`,
                                y: (u?.y || 0) + 0 + 2214.8 + 60 + 0 + 40 + 0 + 0 + 197,
                                children: c(ds, {
                                  __framer__animate: { transition: Gs },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Ws,
                                  __framer__exit: Ks,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-mtwegm-container`,
                                  "data-framer-name": `Benefit`,
                                  name: `Benefit`,
                                  nodeId: `bBnrM9IL8`,
                                  rendersWithMotion: !0,
                                  scopeId: `eQrbBJrm8`,
                                  children: c(j, {
                                    breakpoint: x,
                                    overrides: {
                                      fWs0PU7uh: { variant: `FbZdBlch4` },
                                      iE2XOLkII: { variant: `gQViXCldX` },
                                      mpTgpjS31: { variant: `FbZdBlch4` },
                                    },
                                    children: c(wn, {
                                      height: `100%`,
                                      id: `bBnrM9IL8`,
                                      layoutId: `bBnrM9IL8`,
                                      name: `Benefit`,
                                      style: { width: `100%` },
                                      variant: `NeVaB8LMx`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    c(`section`, {
                      className: `framer-a468qo`,
                      "data-framer-name": `About Section`,
                      id: R,
                      ref: z,
                      children: f(`div`, {
                        className: `framer-b849g5`,
                        "data-framer-name": `About`,
                        id: B,
                        ref: H,
                        children: [
                          f(`div`, {
                            className: `framer-1s2nizm`,
                            "data-framer-name": `Intro`,
                            children: [
                              c(`div`, {
                                className: `framer-1k6syo1`,
                                "data-framer-name": `Title - About`,
                                children: c(j, {
                                  breakpoint: x,
                                  overrides: {
                                    fWs0PU7uh: {
                                      children: c(i, {
                                        children: c(`h2`, {
                                          style: {
                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                            "--framer-font-size": `40px`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0))`,
                                            "--framer-text-transform": `capitalize`,
                                          },
                                          children: `Catalyzing innovation in Universities `,
                                        }),
                                      }),
                                    },
                                    iE2XOLkII: {
                                      children: c(i, {
                                        children: c(`h2`, {
                                          style: {
                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                            "--framer-font-size": `36px`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-text-alignment": `right`,
                                            "--framer-text-color": `var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0))`,
                                            "--framer-text-transform": `capitalize`,
                                          },
                                          children: `Catalyzing innovation in Universities `,
                                        }),
                                      }),
                                    },
                                    mpTgpjS31: {
                                      children: c(i, {
                                        children: c(`h2`, {
                                          style: {
                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                            "--framer-font-size": `40px`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0))`,
                                            "--framer-text-transform": `capitalize`,
                                          },
                                          children: `Catalyzing innovation in Universities `,
                                        }),
                                      }),
                                    },
                                  },
                                  children: c(K, {
                                    __fromCanvasComponent: !0,
                                    children: c(i, {
                                      children: c(`h2`, {
                                        style: {
                                          "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                          "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                          "--framer-font-size": `36px`,
                                          "--framer-letter-spacing": `-1px`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-e03f5250-57d2-43ec-bcae-d7accc64ea4c, rgb(255, 60, 0))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: `Catalyzing innovation in Universities `,
                                      }),
                                    }),
                                    className: `framer-i8ake0`,
                                    fonts: [`GF;Lustria-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              c(`div`, {
                                className: `framer-yucx86`,
                                "data-framer-name": `Text-01`,
                                id: ee,
                                ref: te,
                                children: f(`div`, {
                                  className: `framer-j58coo`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 240,
                                              },
                                            },
                                            {
                                              ref: te,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 0,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      children: c($, {
                                        __framer__loop: Os,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: qs,
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 480,
                                            },
                                          },
                                          {
                                            ref: te,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1rgo8mw`,
                                        "data-framer-name": `Orange-Square`,
                                        style: { rotate: 45, transformPerspective: 1200 },
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          children: c(i, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-1lblvzu`,
                                              "data-styles-preset": `GrBQnWkw1`,
                                              children: `Incentivise students to focus on innovation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: c(ls, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 0,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: te,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(i, {
                                          children: c(`h2`, {
                                            className: `framer-styles-preset-3ossdy`,
                                            "data-styles-preset": `eSObMJ2RV`,
                                            children: `Incentivise students to focus on innovation`,
                                          }),
                                        }),
                                        className: `framer-m4jvtz`,
                                        fonts: [`Inter`],
                                        style: { transformPerspective: 1200 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              c(`div`, {
                                className: `framer-1gc5q7o`,
                                "data-framer-name": `Text-02`,
                                id: W,
                                ref: oe,
                                children: f(`div`, {
                                  className: `framer-12a4xvy`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 240,
                                              },
                                            },
                                            {
                                              ref: oe,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 0,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      children: c($, {
                                        __framer__loop: Os,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: qs,
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 480,
                                            },
                                          },
                                          {
                                            ref: oe,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-qupk6m`,
                                        "data-framer-name": `Orange-Square`,
                                        style: { rotate: 45, transformPerspective: 1200 },
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          children: c(i, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-1lblvzu`,
                                              "data-styles-preset": `GrBQnWkw1`,
                                              children: `Platforms to instill culture of innovation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: c(ls, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 0,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: oe,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(i, {
                                          children: c(`h2`, {
                                            className: `framer-styles-preset-3ossdy`,
                                            "data-styles-preset": `eSObMJ2RV`,
                                            children: `Platforms to instill culture of innovation`,
                                          }),
                                        }),
                                        className: `framer-15xltt4`,
                                        fonts: [`Inter`],
                                        style: { transformPerspective: 1200 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              c(`div`, {
                                className: `framer-1g45huf`,
                                "data-framer-name": `Text-03`,
                                id: se,
                                ref: le,
                                children: f(`div`, {
                                  className: `framer-1bw8flc`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 240,
                                              },
                                            },
                                            {
                                              ref: le,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 0,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      children: c($, {
                                        __framer__loop: Os,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: qs,
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 480,
                                            },
                                          },
                                          {
                                            ref: le,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-mdf2sl`,
                                        "data-framer-name": `Orange-Square`,
                                        style: { rotate: 45, transformPerspective: 1200 },
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          children: c(i, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-1lblvzu`,
                                              "data-styles-preset": `GrBQnWkw1`,
                                              children: `Mobilizing resources & experts to help students `,
                                            }),
                                          }),
                                        },
                                      },
                                      children: c(ls, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 0,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: le,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(i, {
                                          children: c(`h2`, {
                                            className: `framer-styles-preset-3ossdy`,
                                            "data-styles-preset": `eSObMJ2RV`,
                                            children: `Mobilizing resources & experts to help students `,
                                          }),
                                        }),
                                        className: `framer-1tlur37`,
                                        fonts: [`Inter`],
                                        style: { transformPerspective: 1200 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              c(`div`, {
                                className: `framer-1ddnrav`,
                                "data-framer-name": `Text-04`,
                                id: ue,
                                ref: de,
                                children: f(`div`, {
                                  className: `framer-1b22uom`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 240,
                                              },
                                            },
                                            {
                                              ref: le,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 24,
                                                y: 0,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      children: c($, {
                                        __framer__loop: Os,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: qs,
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 480,
                                            },
                                          },
                                          {
                                            ref: de,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-pv20r0`,
                                        "data-framer-name": `Orange-Square`,
                                        style: { rotate: 45, transformPerspective: 1200 },
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          children: c(i, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-1lblvzu`,
                                              "data-styles-preset": `GrBQnWkw1`,
                                              children: `Leveraging Industry for fostering innovation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: c(ls, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 0,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: de,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(i, {
                                          children: c(`h2`, {
                                            className: `framer-styles-preset-3ossdy`,
                                            "data-styles-preset": `eSObMJ2RV`,
                                            children: `Leveraging Industry for fostering innovation`,
                                          }),
                                        }),
                                        className: `framer-4vrko`,
                                        fonts: [`Inter`],
                                        style: { transformPerspective: 1200 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-ztbabr`,
                            "data-framer-name": `Team`,
                            children: [
                              c(`div`, {
                                className: `framer-jyg6mw`,
                                "data-framer-name": `Title - About`,
                                children: c(K, {
                                  __fromCanvasComponent: !0,
                                  children: c(i, {
                                    children: c(`p`, {
                                      style: {
                                        "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNTAw`,
                                        "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--token-4e9105ea-c3bf-4167-b1dd-635e74808ae7, rgb(0, 0, 0))`,
                                      },
                                      children: `MEET THE TEAM BEHIND THE DREAM`,
                                    }),
                                  }),
                                  className: `framer-53yek1`,
                                  fonts: [`GF;Inter Tight-500`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              c(`div`, {
                                className: `framer-1hxckuw`,
                                "data-framer-name": `Content`,
                                id: q,
                                ref: pe,
                                children: c(j, {
                                  breakpoint: x,
                                  overrides: {
                                    fWs0PU7uh: {
                                      children: c(i, {
                                        children: c(`p`, {
                                          style: {
                                            "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNTAw`,
                                            "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--token-4e9105ea-c3bf-4167-b1dd-635e74808ae7, rgb(0, 0, 0))`,
                                          },
                                          children: `At CreateOnCampus, our strength lies in our diverse and talented team. Meet the creative minds behind our success, each bringing unique skills and perspectives to redefine innovation across education.`,
                                        }),
                                      }),
                                    },
                                    iE2XOLkII: {
                                      children: c(i, {
                                        children: c(`p`, {
                                          style: {
                                            "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNTAw`,
                                            "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--token-4e9105ea-c3bf-4167-b1dd-635e74808ae7, rgb(0, 0, 0))`,
                                          },
                                          children: `At CreateOnCampus, our strength lies in our diverse and talented team. Meet the creative minds behind our success, each bringing unique skills and perspectives to redefine innovation across education.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: c(ls, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -96,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: pe,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: c(i, {
                                      children: c(`p`, {
                                        style: {
                                          "--font-selector": `R0Y7SW50ZXIgVGlnaHQtNTAw`,
                                          "--framer-font-family": `"Inter Tight", "Inter Tight Placeholder", sans-serif`,
                                          "--framer-font-size": `24px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--token-4e9105ea-c3bf-4167-b1dd-635e74808ae7, rgb(0, 0, 0))`,
                                        },
                                        children: `At CreateOnCampus, our strength lies in our diverse and talented team. Meet the creative minds behind our success, each bringing unique skills and perspectives to redefine innovation across education.`,
                                      }),
                                    }),
                                    className: `framer-1degeqa`,
                                    fonts: [`GF;Inter Tight-500`],
                                    style: { transformPerspective: 1200 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 474,
                                  },
                                  iE2XOLkII: { height: 681, width: `319px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 504,
                                  children: c(V, {
                                    className: `framer-g33jcg-container`,
                                    nodeId: `zmx_ofCZY`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                          Wf7tEjyQZ: Js(
                                            {
                                              pixelHeight: 700,
                                              pixelWidth: 959,
                                              positionX: `45.9%`,
                                              positionY: `49.8%`,
                                              src: `../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg?width=959&height=700`,
                                              srcSet: `../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg 512w,../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg?width=959&height=700 959w`,
                                            },
                                            ``
                                          ),
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `zmx_ofCZY`,
                                        Ih80sscPv: ``,
                                        layoutId: `zmx_ofCZY`,
                                        qrji55bSI: `Padma Shri Prashanth Prakash`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 700,
                                            pixelWidth: 959,
                                            src: `../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg?width=959&height=700`,
                                            srcSet: `../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg 512w,../../assets/images/mNEH8UnClPLODckduxy0Wc59k4.jpeg?width=959&height=700 959w`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 1314,
                                  },
                                  iE2XOLkII: { height: 756, width: `326px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 1504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 1504,
                                  children: c(V, {
                                    className: `framer-8b3noc-container`,
                                    nodeId: `Ab7qms1h_`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `Ab7qms1h_`,
                                        Ih80sscPv: ``,
                                        layoutId: `Ab7qms1h_`,
                                        qrji55bSI: `Suresh Narasimha`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 200,
                                            pixelWidth: 200,
                                            src: `../../assets/images/NEoNwnWW3rt9M3i5TEv0TiI6soA.jpg`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 2154,
                                  },
                                  iE2XOLkII: { height: 728, width: `326px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 2504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 2504,
                                  children: c(V, {
                                    className: `framer-4ng8pn-container`,
                                    nodeId: `S1u6MqsBo`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `S1u6MqsBo`,
                                        Ih80sscPv: ``,
                                        layoutId: `S1u6MqsBo`,
                                        qrji55bSI: `Ravindra Krishappa`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 200,
                                            pixelWidth: 200,
                                            src: `../../assets/images/HtAg7rEkB3WsWhNkFJAGRIn83Y.jpg`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 2994,
                                  },
                                  iE2XOLkII: { height: 712, width: `326px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 3504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 3504,
                                  children: c(V, {
                                    className: `framer-15vz5db-container`,
                                    nodeId: `JGUKj9O3v`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `JGUKj9O3v`,
                                        Ih80sscPv: ``,
                                        layoutId: `JGUKj9O3v`,
                                        qrji55bSI: `Pavan Krishnamurthy`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 1440,
                                            pixelWidth: 1061,
                                            positionX: `49.7%`,
                                            positionY: `18.7%`,
                                            src: `../../assets/images/iscQKrAcHET9rgCn6pQpybbbUKY.jpg?width=1061&height=1440`,
                                            srcSet: `../../assets/images/iscQKrAcHET9rgCn6pQpybbbUKY.jpg 754w,../../assets/images/iscQKrAcHET9rgCn6pQpybbbUKY.jpg?width=1061&height=1440 1061w`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 3834,
                                  },
                                  iE2XOLkII: { height: 733, width: `322px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 4504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 4504,
                                  children: c(V, {
                                    className: `framer-kfhp5l-container`,
                                    nodeId: `xSF5QFoEV`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `xSF5QFoEV`,
                                        Ih80sscPv: ``,
                                        layoutId: `xSF5QFoEV`,
                                        qrji55bSI: `Arun Seetharam`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 200,
                                            pixelWidth: 200,
                                            src: `../../assets/images/xe4dk6uDhR1HpvmgmcfU3f2ISQ.jpg`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    height: 840,
                                    y: (u?.y || 0) + 0 + 3098.8 + 0 + 0 + 24 + 590.4 + 0 + 4674,
                                  },
                                  iE2XOLkII: { height: 676, width: `319px`, y: void 0 },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 3223.8 + 0 + 0 + 24 + 590.4 + 0 + 5504,
                                  },
                                },
                                children: c(G, {
                                  height: 1e3,
                                  width: `calc(${u?.width || `100vw`} - 48px)`,
                                  y: (u?.y || 0) + 0 + 3236.8 + 0 + 0 + 24 + 585.6 + 0 + 5504,
                                  children: c(V, {
                                    className: `framer-1hp3iea-container`,
                                    nodeId: `HnLvzSmSI`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          style: { width: `100%` },
                                          variant: `HmmL38cT7`,
                                          Wf7tEjyQZ: Js(
                                            {
                                              pixelHeight: 221,
                                              pixelWidth: 358,
                                              positionX: `33.5%`,
                                              positionY: `45%`,
                                              src: `../../assets/images/yf2NcImex50fWzD4NmKGGtn6nZY.png`,
                                            },
                                            ``
                                          ),
                                        },
                                        iE2XOLkII: { variant: `dJ70K_8cL` },
                                      },
                                      children: c(Vn, {
                                        height: `100%`,
                                        id: `HnLvzSmSI`,
                                        Ih80sscPv: ``,
                                        layoutId: `HnLvzSmSI`,
                                        qrji55bSI: `Prof. Jawahar Doreswamy`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `aVzx9Tbuc`,
                                        Wf7tEjyQZ: Js(
                                          {
                                            pixelHeight: 221,
                                            pixelWidth: 358,
                                            positionX: `23%`,
                                            positionY: `44.7%`,
                                            src: `../../assets/images/yf2NcImex50fWzD4NmKGGtn6nZY.png`,
                                          },
                                          ``
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    f(`div`, {
                      className: `framer-cmosow`,
                      "data-framer-name": `Services`,
                      id: me,
                      ref: O,
                      children: [
                        c(j, {
                          breakpoint: x,
                          overrides: {
                            fWs0PU7uh: {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                intrinsicHeight: 256,
                                intrinsicWidth: 256,
                                loading: D((u?.y || 0) + 0 + 9251.2 + -126.3133),
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                              },
                            },
                            iE2XOLkII: {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                intrinsicHeight: 256,
                                intrinsicWidth: 256,
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                              },
                            },
                            mpTgpjS31: {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                intrinsicHeight: 256,
                                intrinsicWidth: 256,
                                loading: D((u?.y || 0) + 0 + 10366.2 + -103.0528),
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                              },
                            },
                          },
                          children: c(U, {
                            background: {
                              alt: ``,
                              backgroundSize: 1,
                              fit: `tile`,
                              intrinsicHeight: 256,
                              intrinsicWidth: 256,
                              loading: D((u?.y || 0) + 0 + 10374.4 + -103.0528),
                              pixelHeight: 256,
                              pixelWidth: 256,
                              positionX: `left`,
                              positionY: `top`,
                              src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                            },
                            className: `framer-q5xujw`,
                            "data-framer-name": `Noise Pattern`,
                          }),
                        }),
                        f(`div`, {
                          className: `framer-1sedh8t`,
                          "data-framer-name": `Complete Handholding`,
                          children: [
                            f(`div`, {
                              className: `framer-gr3aqq`,
                              "data-framer-name": `Container`,
                              children: [
                                f(`div`, {
                                  className: `framer-12mgusd`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__styleTransformEffectEnabled: void 0,
                                          style: {},
                                        },
                                      },
                                      children: c($, {
                                        __framer__spring: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stiffness: 250,
                                          type: `spring`,
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.9,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onInView`,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-18nrgpc`,
                                        style: { transformPerspective: 1200 },
                                        children: c(j, {
                                          breakpoint: x,
                                          overrides: {
                                            fWs0PU7uh: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3840,
                                                intrinsicWidth: 5760,
                                                loading: D(
                                                  (u?.y || 0) +
                                                    0 +
                                                    9251.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    48 +
                                                    137.6 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 359,
                                                pixelWidth: 359,
                                                src: `../../assets/images/84v7FuTWkxO0a05UXQ1ShCgcL1k.png`,
                                              },
                                            },
                                            iE2XOLkII: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3840,
                                                intrinsicWidth: 5760,
                                                pixelHeight: 359,
                                                pixelWidth: 359,
                                                src: `../../assets/images/84v7FuTWkxO0a05UXQ1ShCgcL1k.png`,
                                              },
                                            },
                                            mpTgpjS31: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3840,
                                                intrinsicWidth: 5760,
                                                loading: D(
                                                  (u?.y || 0) +
                                                    0 +
                                                    10366.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 359,
                                                pixelWidth: 359,
                                                src: `../../assets/images/84v7FuTWkxO0a05UXQ1ShCgcL1k.png`,
                                              },
                                            },
                                          },
                                          children: c(U, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 3840,
                                              intrinsicWidth: 5760,
                                              loading: D(
                                                (u?.y || 0) +
                                                  0 +
                                                  10374.4 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 359,
                                              pixelWidth: 359,
                                              src: `../../assets/images/84v7FuTWkxO0a05UXQ1ShCgcL1k.png`,
                                            },
                                            className: `framer-ylfa7p`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    he() &&
                                      c(j, {
                                        breakpoint: x,
                                        overrides: {
                                          iE2XOLkII: {
                                            __framer__parallaxTransformEnabled: void 0,
                                            transformTemplate: ks,
                                          },
                                        },
                                        children: f($, {
                                          __framer__adjustPosition: !0,
                                          __framer__offset: 1024,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 120,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-hji4ig hidden-8blmsd hidden-ulzftn hidden-1c4zlhw`,
                                          "data-framer-name": `Rows 1`,
                                          children: [
                                            f(`div`, {
                                              className: `framer-14hboq1`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                c(G, {
                                                  children: c(V, {
                                                    className: `framer-197i1pj-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `JO7xjXDNC`,
                                                    scopeId: `eQrbBJrm8`,
                                                    children: c(J, {
                                                      color: `rgba(255, 255, 255, 0.5)`,
                                                      height: `100%`,
                                                      iconSearch: `money-square`,
                                                      iconSelection: `StatsReport`,
                                                      id: `JO7xjXDNC`,
                                                      layoutId: `JO7xjXDNC`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    iE2XOLkII: {
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-weight": `300`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-line-height": `2em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                          },
                                                          children: `Assessment credits and grades refelective of implementation`,
                                                        }),
                                                      }),
                                                      fonts: [`GF;Inter-300`],
                                                    },
                                                  },
                                                  children: c(K, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Assessment credits and grades refelective of implementation`,
                                                      }),
                                                    }),
                                                    className: `framer-1k7vq0l`,
                                                    "data-framer-name": `Text`,
                                                    fonts: [`FS;Satoshi-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            f(`div`, {
                                              className: `framer-1dt1070`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                c(G, {
                                                  children: c(V, {
                                                    className: `framer-c61c23-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `Pw9tZrcbF`,
                                                    scopeId: `eQrbBJrm8`,
                                                    children: c(J, {
                                                      color: `rgba(255, 255, 255, 0.5)`,
                                                      height: `100%`,
                                                      iconSearch: `money-square`,
                                                      iconSelection: `Frame`,
                                                      id: `Pw9tZrcbF`,
                                                      layoutId: `Pw9tZrcbF`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    iE2XOLkII: {
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-weight": `300`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-line-height": `2em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                          },
                                                          children: `Startup relevant academic assignments and assessments`,
                                                        }),
                                                      }),
                                                      fonts: [`GF;Inter-300`],
                                                    },
                                                  },
                                                  children: c(K, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Startup relevant academic assignments and assessments`,
                                                      }),
                                                    }),
                                                    className: `framer-pi3zmq`,
                                                    "data-framer-name": `Text`,
                                                    fonts: [`FS;Satoshi-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            f(`div`, {
                                              className: `framer-1gh70dj`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                c(G, {
                                                  children: c(V, {
                                                    className: `framer-1rnow0b-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `pYfzlFWiI`,
                                                    scopeId: `eQrbBJrm8`,
                                                    children: c(J, {
                                                      color: `rgba(255, 255, 255, 0.5)`,
                                                      height: `100%`,
                                                      iconSearch: `money-square`,
                                                      iconSelection: `Code`,
                                                      id: `pYfzlFWiI`,
                                                      layoutId: `pYfzlFWiI`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    iE2XOLkII: {
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-weight": `300`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-line-height": `2em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                          },
                                                          children: `Regular pitch sessions and dynamic monthly forums`,
                                                        }),
                                                      }),
                                                      fonts: [`GF;Inter-300`],
                                                    },
                                                  },
                                                  children: c(K, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Regular pitch sessions and dynamic monthly forums`,
                                                      }),
                                                    }),
                                                    className: `framer-167fl0t`,
                                                    "data-framer-name": `Text`,
                                                    fonts: [`FS;Satoshi-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            f(`div`, {
                                              className: `framer-11ajrl1`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                c(G, {
                                                  children: c(V, {
                                                    className: `framer-d536gd-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `JeXvcAJ3J`,
                                                    scopeId: `eQrbBJrm8`,
                                                    children: c(J, {
                                                      color: `rgba(255, 255, 255, 0.5)`,
                                                      height: `100%`,
                                                      iconSearch: `money-square`,
                                                      iconSelection: `Combine`,
                                                      id: `JeXvcAJ3J`,
                                                      layoutId: `JeXvcAJ3J`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    iE2XOLkII: {
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-weight": `300`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-line-height": `2em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                          },
                                                          children: `Engagement with industry, entrepreneurs and investors`,
                                                        }),
                                                      }),
                                                      fonts: [`GF;Inter-300`],
                                                    },
                                                  },
                                                  children: c(K, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Engagement with industry, entrepreneurs and investors`,
                                                      }),
                                                    }),
                                                    className: `framer-1kwrhjf`,
                                                    "data-framer-name": `Text`,
                                                    fonts: [`FS;Satoshi-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            f(`div`, {
                                              className: `framer-1d2di21`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                c(G, {
                                                  children: c(V, {
                                                    className: `framer-1tg6glg-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `Dh5mlmBeD`,
                                                    scopeId: `eQrbBJrm8`,
                                                    children: c(J, {
                                                      color: `rgba(255, 255, 255, 0.5)`,
                                                      height: `100%`,
                                                      iconSearch: `tech`,
                                                      iconSelection: `City`,
                                                      id: `Dh5mlmBeD`,
                                                      layoutId: `Dh5mlmBeD`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    iE2XOLkII: {
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-weight": `300`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-line-height": `2em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                          },
                                                          children: `Breakfall with Innovation labs by GCCs`,
                                                        }),
                                                      }),
                                                      fonts: [`GF;Inter-300`],
                                                    },
                                                  },
                                                  children: c(K, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                          "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Breakfall with Innovation labs by GCCs`,
                                                      }),
                                                    }),
                                                    className: `framer-1b9n2b`,
                                                    "data-framer-name": `Text`,
                                                    fonts: [`FS;Satoshi-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-13i7de0`,
                                  children: f(`div`, {
                                    className: `framer-yk6j1t`,
                                    "data-framer-name": `Vrednost`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-1pl970m`,
                                        "data-framer-name": `Web Engineering`,
                                        children: c(`div`, {
                                          className: `framer-xa48s6`,
                                          "data-framer-name": `Layout`,
                                          children: c(`div`, {
                                            className: `framer-1xpzvf5`,
                                            "data-framer-name": `Text`,
                                            children: c(K, {
                                              __fromCanvasComponent: !0,
                                              children: c(i, {
                                                children: c(`h2`, {
                                                  className: `framer-styles-preset-3ossdy`,
                                                  "data-styles-preset": `eSObMJ2RV`,
                                                  style: {
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                                  },
                                                  children: `Our comprehensive support to Higher Educational Instutions in creating Future Innovators`,
                                                }),
                                              }),
                                              className: `framer-d1qs0s`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      c(`div`, {
                                        className: `framer-w8ax42`,
                                        "data-framer-name": `Content`,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1uy17z9`,
                              "data-framer-name": `Container`,
                              children: c(`div`, {
                                className: `framer-hh0ibz`,
                                children: c(j, {
                                  breakpoint: x,
                                  overrides: {
                                    iE2XOLkII: {
                                      __framer__styleTransformEffectEnabled: void 0,
                                      style: {},
                                    },
                                  },
                                  children: c($, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stiffness: 250,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.9,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onInView`,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-fnc3rv`,
                                    style: { transformPerspective: 1200 },
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 3840,
                                            intrinsicWidth: 5760,
                                            loading: D(
                                              (u?.y || 0) +
                                                0 +
                                                9251.2 +
                                                0 +
                                                0 +
                                                0 +
                                                663.6 +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 460,
                                            pixelWidth: 1501,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(min(${u?.width || `100vw`}, 1279px) - 128px)`,
                                            src: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg`,
                                            srcSet: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=512&width=1501&height=460 512w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=1024&width=1501&height=460 1024w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg 1501w`,
                                          },
                                        },
                                        iE2XOLkII: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 3840,
                                            intrinsicWidth: 5760,
                                            pixelHeight: 460,
                                            pixelWidth: 1501,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(min(${u?.width || `100vw`}, 1200px) - 32px)`,
                                            src: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg`,
                                            srcSet: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=512&width=1501&height=460 512w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=1024&width=1501&height=460 1024w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg 1501w`,
                                          },
                                        },
                                        mpTgpjS31: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 3840,
                                            intrinsicWidth: 5760,
                                            loading: D(
                                              (u?.y || 0) +
                                                0 +
                                                10366.2 +
                                                0 +
                                                0 +
                                                0 +
                                                494 +
                                                32 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 460,
                                            pixelWidth: 1501,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `max((min(${u?.width || `100vw`} - 64px, 1200px) - 64px) * 1, 1px)`,
                                            src: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg`,
                                            srcSet: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=512&width=1501&height=460 512w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=1024&width=1501&height=460 1024w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg 1501w`,
                                          },
                                        },
                                      },
                                      children: c(U, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 3840,
                                          intrinsicWidth: 5760,
                                          loading: D(
                                            (u?.y || 0) +
                                              0 +
                                              10374.4 +
                                              0 +
                                              0 +
                                              0 +
                                              494 +
                                              32 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 460,
                                          pixelWidth: 1501,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `max((min(${u?.width || `100vw`} - 64px, 1200px) - 64px) * 1, 1px)`,
                                          src: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg`,
                                          srcSet: `../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=512&width=1501&height=460 512w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg?scale-down-to=1024&width=1501&height=460 1024w,../../assets/images/l8XXH1Hbyl2quGYUgq4OFXhz0rQ.jpeg 1501w`,
                                        },
                                        className: `framer-1vxnivp`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-1wtgq6q`,
                          "data-framer-name": `Academic Programs`,
                          children: f(`div`, {
                            className: `framer-k4gi8z`,
                            "data-framer-name": `Container`,
                            children: [
                              c(`div`, {
                                className: `framer-1c3e3h0`,
                                children: f(`div`, {
                                  className: `framer-1i0ucl9`,
                                  "data-framer-name": `UX Design`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-7rqgeb`,
                                      "data-framer-name": `Heading`,
                                      children: c(`div`, {
                                        className: `framer-1vlm9tv`,
                                        "data-framer-name": `Layout`,
                                        children: c(`div`, {
                                          className: `framer-1tu5fof`,
                                          "data-framer-name": `Text`,
                                          children: c(K, {
                                            __fromCanvasComponent: !0,
                                            children: c(i, {
                                              children: c(`h2`, {
                                                className: `framer-styles-preset-3ossdy`,
                                                "data-styles-preset": `eSObMJ2RV`,
                                                style: {
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                                },
                                                children: `HIRE Academic Programs`,
                                              }),
                                            }),
                                            className: `framer-10zx63b`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-1g7e5t5`,
                                      "data-framer-name": `Content`,
                                      children: c(j, {
                                        breakpoint: x,
                                        overrides: {
                                          iE2XOLkII: {
                                            __framer__styleAppearEffectEnabled: void 0,
                                            style: {},
                                          },
                                        },
                                        children: c(ls, {
                                          __framer__animate: { transition: Xs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Ys,
                                          __framer__exit: Zs,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          children: c(i, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1bbl997`,
                                              "data-styles-preset": `UW1s8Kd16`,
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                              },
                                              children: `Programs that makes innovators acquire the required skills and get credits against the learning`,
                                            }),
                                          }),
                                          className: `framer-19infwu`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          style: { transformPerspective: 1200 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              f(`div`, {
                                className: `framer-lmfl4q`,
                                children: [
                                  c(j, {
                                    breakpoint: x,
                                    overrides: {
                                      iE2XOLkII: {
                                        __framer__styleTransformEffectEnabled: void 0,
                                        style: {},
                                      },
                                    },
                                    children: c($, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 250,
                                        type: `spring`,
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.9,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onInView`,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-p1ul5v`,
                                      style: { transformPerspective: 1200 },
                                      children: c(j, {
                                        breakpoint: x,
                                        overrides: {
                                          fWs0PU7uh: {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 4032,
                                              intrinsicWidth: 3024,
                                              loading: D(
                                                (u?.y || 0) +
                                                  0 +
                                                  9251.2 +
                                                  0 +
                                                  1221.6 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  305.6 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 4032,
                                              pixelWidth: 3024,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `calc(min(${u?.width || `100vw`}, 1279px) - 128px)`,
                                              src: `../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?width=3024&height=4032`,
                                              srcSet: `../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?scale-down-to=1024&width=3024&height=4032 768w,../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg 1536w,../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?width=3024&height=4032 3024w`,
                                            },
                                          },
                                          iE2XOLkII: {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 4032,
                                              intrinsicWidth: 3024,
                                              pixelHeight: 4032,
                                              pixelWidth: 3024,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `calc(min(${u?.width || `100vw`}, 1200px) - 32px)`,
                                              src: `../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?width=3024&height=4032`,
                                              srcSet: `../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?scale-down-to=1024&width=3024&height=4032 768w,../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg 1536w,../../assets/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?width=3024&height=4032 3024w`,
                                            },
                                          },
                                          mpTgpjS31: {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 4032,
                                              intrinsicWidth: 3024,
                                              loading: D(
                                                (u?.y || 0) +
                                                  0 +
                                                  10366.2 +
                                                  0 +
                                                  1020 +
                                                  80 +
                                                  0 +
                                                  64 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 565,
                                              pixelWidth: 1543,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `max((min(${u?.width || `100vw`} - 64px, 1200px) - 112px) * 0.6, 1px)`,
                                              src: `../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?width=1543&height=565`,
                                              srcSet: `../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?scale-down-to=512&width=1543&height=565 512w,../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg 1024w,../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?width=1543&height=565 1543w`,
                                            },
                                          },
                                        },
                                        children: c(U, {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 4032,
                                            intrinsicWidth: 3024,
                                            loading: D(
                                              (u?.y || 0) +
                                                0 +
                                                10374.4 +
                                                0 +
                                                1020 +
                                                80 +
                                                0 +
                                                64 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 565,
                                            pixelWidth: 1543,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `max((min(${u?.width || `100vw`} - 64px, 1200px) - 112px) * 0.6, 1px)`,
                                            src: `../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?width=1543&height=565`,
                                            srcSet: `../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?scale-down-to=512&width=1543&height=565 512w,../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg 1024w,../../assets/images/2VmBCE6Evx4bNQwk5hoRHjz9lg.jpeg?width=1543&height=565 1543w`,
                                          },
                                          className: `framer-133zwa1`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  he() &&
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__parallaxTransformEnabled: void 0,
                                          transformTemplate: ks,
                                        },
                                      },
                                      children: f($, {
                                        __framer__adjustPosition: !0,
                                        __framer__offset: 1024,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 120,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1pwmbmj hidden-8blmsd hidden-ulzftn hidden-1c4zlhw`,
                                        children: [
                                          f(`div`, {
                                            className: `framer-p4nwcv`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-gtoglc-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `kblQdkSVu`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `UserScan`,
                                                    id: `kblQdkSVu`,
                                                    layoutId: `kblQdkSVu`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Ideate based on the white spaces/ inputs from the industry`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Ideate based on the white spaces/ inputs from the industry`,
                                                    }),
                                                  }),
                                                  className: `framer-1ht9p0n`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-1sqgj5g`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-anmcu6-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `t15OWeuDO`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `UserCircleAlt`,
                                                    id: `t15OWeuDO`,
                                                    layoutId: `t15OWeuDO`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Build a POC with customer using venture studio resources`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Build a POC with customer using venture studio resources`,
                                                    }),
                                                  }),
                                                  className: `framer-1angar7`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-4ah0i0`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-117zveq-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `Dr9AoR8vN`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `Intersect`,
                                                    id: `Dr9AoR8vN`,
                                                    layoutId: `Dr9AoR8vN`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Get required funding from our VC fund`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Get required funding from our VC fund`,
                                                    }),
                                                  }),
                                                  className: `framer-ya28fn`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-1c9xp9n`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-1it4en4-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `yWlVK8U4H`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `Flower`,
                                                    id: `yWlVK8U4H`,
                                                    layoutId: `yWlVK8U4H`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Find customers/ acquirers in our partners`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Find customers/ acquirers in our partners`,
                                                    }),
                                                  }),
                                                  className: `framer-e86ip8`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        he() &&
                          c(`div`, {
                            className: `framer-9r8i5s hidden-8blmsd hidden-ulzftn hidden-1c4zlhw`,
                            "data-framer-name": `Minor Degree`,
                            children: f(`div`, {
                              className: `framer-jl0nss`,
                              "data-framer-name": `Container`,
                              children: [
                                f(`div`, {
                                  className: `framer-g13s6y`,
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__styleTransformEffectEnabled: void 0,
                                          style: {},
                                        },
                                      },
                                      children: c($, {
                                        __framer__spring: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stiffness: 250,
                                          type: `spring`,
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.9,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onInView`,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1j3rxgf`,
                                        style: { transformPerspective: 1200 },
                                        children: c(j, {
                                          breakpoint: x,
                                          overrides: {
                                            iE2XOLkII: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3840,
                                                intrinsicWidth: 5760,
                                                pixelHeight: 1200,
                                                pixelWidth: 1600,
                                                sizes: `calc(min(${u?.width || `100vw`}, 1200px) - 32px)`,
                                                src: `../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg`,
                                                srcSet: `../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg?scale-down-to=512&width=1600&height=1200 512w,../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg?scale-down-to=1024&width=1600&height=1200 1024w,../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg 1600w`,
                                              },
                                            },
                                          },
                                          children: c(U, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 3840,
                                              intrinsicWidth: 5760,
                                              pixelHeight: 1200,
                                              pixelWidth: 1600,
                                              src: `../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg`,
                                              srcSet: `../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg?scale-down-to=512&width=1600&height=1200 512w,../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg?scale-down-to=1024&width=1600&height=1200 1024w,../../assets/images/2PGrzEPjMgen0B8gdQ9gZZuLVHU.jpg 1600w`,
                                            },
                                            className: `framer-kgrzs4`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        iE2XOLkII: {
                                          __framer__parallaxTransformEnabled: void 0,
                                          transformTemplate: ks,
                                        },
                                      },
                                      children: f($, {
                                        __framer__adjustPosition: !0,
                                        __framer__offset: 1024,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 120,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-obvbic`,
                                        "data-framer-name": `Rows 1`,
                                        children: [
                                          f(`div`, {
                                            className: `framer-1jhwp80`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-rvzh2x-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `H9Y64cCKL`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `StatsReport`,
                                                    id: `H9Y64cCKL`,
                                                    layoutId: `H9Y64cCKL`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Assessment credits and grades refelective of implementation`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Assessment credits and grades refelective of implementation`,
                                                    }),
                                                  }),
                                                  className: `framer-eggolq`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-1iah5lw`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-icm1rm-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `llWD4vZBW`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `Frame`,
                                                    id: `llWD4vZBW`,
                                                    layoutId: `llWD4vZBW`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Startup relevant academic assignments and assessments`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Startup relevant academic assignments and assessments`,
                                                    }),
                                                  }),
                                                  className: `framer-o95cmr`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-qrnuso`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-w2ygi4-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `TBpWOfsQn`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `Code`,
                                                    id: `TBpWOfsQn`,
                                                    layoutId: `TBpWOfsQn`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Regular pitch sessions and dynamic monthly forums`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Regular pitch sessions and dynamic monthly forums`,
                                                    }),
                                                  }),
                                                  className: `framer-cpj00a`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-1tqjp9g`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-1mg8g5g-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `A2aF7KcAT`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `money-square`,
                                                    iconSelection: `Combine`,
                                                    id: `A2aF7KcAT`,
                                                    layoutId: `A2aF7KcAT`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Engagement with industry, entrepreneurs and investors`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Engagement with industry, entrepreneurs and investors`,
                                                    }),
                                                  }),
                                                  className: `framer-1idsx98`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          f(`div`, {
                                            className: `framer-1ii9txf`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(G, {
                                                children: c(V, {
                                                  className: `framer-12fuy9b-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `KFkkMG4hV`,
                                                  scopeId: `eQrbBJrm8`,
                                                  children: c(J, {
                                                    color: `rgba(255, 255, 255, 0.5)`,
                                                    height: `100%`,
                                                    iconSearch: `tech`,
                                                    iconSelection: `City`,
                                                    id: `KFkkMG4hV`,
                                                    layoutId: `KFkkMG4hV`,
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItMzAw`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-letter-spacing": `-0.2px`,
                                                          "--framer-line-height": `2em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `Breakfall with Innovation labs by GCCs`,
                                                      }),
                                                    }),
                                                    fonts: [`GF;Inter-300`],
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `2em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Breakfall with Innovation labs by GCCs`,
                                                    }),
                                                  }),
                                                  className: `framer-9talk2`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`FS;Satoshi-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-16brj03`,
                                  children: f(`div`, {
                                    className: `framer-1nxbhsj`,
                                    "data-framer-name": `Vrednost`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-1co5sdl`,
                                        "data-framer-name": `Web Engineering`,
                                        children: c(`div`, {
                                          className: `framer-s98q4q`,
                                          "data-framer-name": `Layout`,
                                          children: c(`div`, {
                                            className: `framer-pbfzth`,
                                            "data-framer-name": `Text`,
                                            children: c(K, {
                                              __fromCanvasComponent: !0,
                                              children: c(i, {
                                                children: c(`h2`, {
                                                  className: `framer-styles-preset-3ossdy`,
                                                  "data-styles-preset": `eSObMJ2RV`,
                                                  style: {
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.65)`,
                                                  },
                                                  children: `Academic Programs in Innovation and Entrepreneurship`,
                                                }),
                                              }),
                                              className: `framer-1gjo4p0`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      c(`div`, {
                                        className: `framer-6dhlsd`,
                                        "data-framer-name": `Content`,
                                        children: c(j, {
                                          breakpoint: x,
                                          overrides: {
                                            iE2XOLkII: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                              style: {},
                                            },
                                          },
                                          children: c(ls, {
                                            __framer__animate: { transition: Xs },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Ys,
                                            __framer__exit: Zs,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: c(i, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1bbl997`,
                                                "data-styles-preset": `UW1s8Kd16`,
                                                children: `Integrated with Venture Studio to actually build a startup in parallel with the program. Provides essential resources, industry connects, funding opportunities and expert mentoring. Equips you with pertinent knowledge and skills for robust growth over the next five years. Delivered by seasoned entrepreneurs and investors, our curriculum is enriched with engaging assignments, hands-on exercises, and collaborative learning`,
                                              }),
                                            }),
                                            className: `framer-q78t2d`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            style: { transformPerspective: 1200 },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      c(G, {
                                        height: 44,
                                        children: c(V, {
                                          className: `framer-124u1el-container`,
                                          nodeId: `qZd3XZMMW`,
                                          scopeId: `eQrbBJrm8`,
                                          children: c(ir, {
                                            AL6IB9otP: `var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65))`,
                                            fTULNZYxz: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                            g0e9eEWSg: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `qZd3XZMMW`,
                                            k3JhaMy5_: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
                                            layoutId: `qZd3XZMMW`,
                                            Lf8afaZg_: `rgb(252, 94, 66)`,
                                            Lzyfez8Rw: `rgb(255, 255, 255)`,
                                            mKVpWCoSL: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                            n4p6Q_Jl3: `https://babarogic.com/custom-solution`,
                                            Oon8L041D: `var(--token-0ea8e2e5-e7ab-4f28-af8b-2269b349f920, rgb(13, 50, 114))`,
                                            rZYR6tqXt: `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                            Saf4VZmW2: !1,
                                            style: { height: `100%` },
                                            VArIlTNTt: `I need this`,
                                            wbc_aIg1P: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 5L20.5 12L13.5 19M3.5 12L20 12" stroke="black" stroke-width="2"/> </svg>`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    c(`div`, {
                      className: `framer-w5d0gm`,
                      "data-framer-name": `Works`,
                      children: f(`div`, {
                        className: `framer-3v1zl2`,
                        "data-border": !0,
                        "data-framer-name": `Container`,
                        id: ge,
                        ref: k,
                        children: [
                          f(`div`, {
                            className: `framer-g55glk`,
                            "data-framer-name": `Background`,
                            children: [
                              c($, {
                                __framer__animate: { transition: Qs },
                                __framer__animateOnce: !0,
                                __framer__enter: ws,
                                __framer__exit: $s,
                                __framer__loop: Os,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: `loop`,
                                __framer__loopTransition: Ds,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1sy7fig`,
                                "data-framer-name": `Blur, Rotate`,
                                style: { transformPerspective: 1200 },
                                transformTemplate: ec,
                                children: c($, {
                                  __framer__loop: js,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: tc,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-6grpee`,
                                  "data-framer-name": `Conic`,
                                }),
                              }),
                              c($, {
                                __framer__animate: { transition: Qs },
                                __framer__animateOnce: !0,
                                __framer__enter: ws,
                                __framer__exit: $s,
                                __framer__loop: Os,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: `loop`,
                                __framer__loopTransition: Ds,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-14uxv06`,
                                "data-framer-name": `Blur, Rotate, Blend`,
                                style: { transformPerspective: 1200 },
                                transformTemplate: ec,
                                children: c($, {
                                  __framer__loop: js,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: tc,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1i4xpq9`,
                                  "data-framer-name": `Conic`,
                                }),
                              }),
                            ],
                          }),
                          c(j, {
                            breakpoint: x,
                            overrides: {
                              fWs0PU7uh: {
                                background: {
                                  alt: ``,
                                  backgroundSize: 1,
                                  fit: `tile`,
                                  intrinsicHeight: 256,
                                  intrinsicWidth: 256,
                                  loading: D((u?.y || 0) + 0 + 11310.4 + 0 + -399.2387),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  positionX: `left`,
                                  positionY: `top`,
                                  src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                                },
                              },
                              iE2XOLkII: {
                                background: {
                                  alt: ``,
                                  backgroundSize: 1,
                                  fit: `tile`,
                                  intrinsicHeight: 256,
                                  intrinsicWidth: 256,
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  positionX: `left`,
                                  positionY: `top`,
                                  src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                                },
                              },
                              mpTgpjS31: {
                                background: {
                                  alt: ``,
                                  backgroundSize: 1,
                                  fit: `tile`,
                                  intrinsicHeight: 256,
                                  intrinsicWidth: 256,
                                  loading: D((u?.y || 0) + 0 + 12046.2 + 0 + -0.9749),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  positionX: `left`,
                                  positionY: `top`,
                                  src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                                },
                              },
                            },
                            children: c(U, {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                intrinsicHeight: 256,
                                intrinsicWidth: 256,
                                loading: D((u?.y || 0) + 0 + 12054.4 + 0 + -404.0791),
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                              },
                              className: `framer-1yyuo03`,
                              "data-framer-name": `Noise Pattern`,
                            }),
                          }),
                          c(`div`, {
                            className: `framer-1sg40u5`,
                            "data-framer-name": `Heading`,
                            children: c(`div`, {
                              className: `framer-hz8ng2`,
                              "data-framer-name": `Container`,
                              children: c(j, {
                                breakpoint: x,
                                overrides: {
                                  iE2XOLkII: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                    style: {},
                                  },
                                },
                                children: f($, {
                                  __framer__animate: { transition: rc },
                                  __framer__animateOnce: !0,
                                  __framer__enter: nc,
                                  __framer__exit: ic,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1g9mvxf`,
                                  "data-framer-name": `Content`,
                                  style: { transformPerspective: 1200 },
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          children: c(i, {
                                            children: c(`h2`, {
                                              style: {
                                                "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                "--framer-font-size": `48px`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Platforms that create a culture of Innovation`,
                                            }),
                                          }),
                                        },
                                        iE2XOLkII: {
                                          children: c(i, {
                                            children: c(`h2`, {
                                              style: {
                                                "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                "--framer-font-size": `42px`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Platforms that create a culture of Innovation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: c(K, {
                                        __fromCanvasComponent: !0,
                                        children: c(i, {
                                          children: c(`h2`, {
                                            style: {
                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-letter-spacing": `-1px`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Platforms that create a culture of Innovation`,
                                          }),
                                        }),
                                        className: `framer-lcpjma`,
                                        "data-framer-name": `Our Priority is Attending to the Demands of Your Clientele.`,
                                        fonts: [`GF;Lustria-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    c(K, {
                                      __fromCanvasComponent: !0,
                                      children: c(i, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-1bbl997`,
                                          "data-styles-preset": `UW1s8Kd16`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `We provide access to platforms for creating a culture of innovation on campus, enabling innovators with resources & motivation while achieving the requirements of accreditation agencies`,
                                        }),
                                      }),
                                      className: `framer-1434g10`,
                                      "data-framer-name": `A well-known NoCode company and Framer Partner, Nicey is situated in Novi Sad, Serbia. By developing the newest web experiences, we propel our clients quickly into the future.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          c(j, {
                            breakpoint: x,
                            overrides: {
                              iE2XOLkII: { __framer__styleAppearEffectEnabled: void 0, style: {} },
                            },
                            children: c($, {
                              __framer__animate: { transition: oc },
                              __framer__animateOnce: !0,
                              __framer__enter: ac,
                              __framer__exit: sc,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-2z3gh3`,
                              "data-framer-name": `Cards`,
                              style: { transformPerspective: 1200 },
                              children: c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    width: `calc(min(max(${u?.width || `100vw`} - 128px, 1px), 1200px) - 128px)`,
                                    y: (u?.y || 0) + 0 + 11310.4 + 0 + 160 + 259.6 + 80 + 0,
                                  },
                                  iE2XOLkII: {
                                    width: `calc(min(max(${u?.width || `100vw`}, 1px), 1200px) - 32px)`,
                                    y: void 0,
                                  },
                                  mpTgpjS31: {
                                    y: (u?.y || 0) + 0 + 12046.2 + 0 + 160 + 278.8 + 80 + 0,
                                  },
                                },
                                children: c(G, {
                                  height: 940,
                                  width: `calc(min(max(${u?.width || `100vw`} - 128px, 1px), 1200px) - 64px)`,
                                  y: (u?.y || 0) + 0 + 12054.4 + 0 + 160 + 278.8 + 80 + 0,
                                  children: c(V, {
                                    className: `framer-1b3lqpq-container`,
                                    nodeId: `QAgs9Uc0Y`,
                                    scopeId: `eQrbBJrm8`,
                                    children: c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: { variant: `kOvULR1ke` },
                                        iE2XOLkII: { variant: `euhfKfRXa` },
                                      },
                                      children: c($o, {
                                        height: `100%`,
                                        id: `QAgs9Uc0Y`,
                                        layoutId: `QAgs9Uc0Y`,
                                        style: { width: `100%` },
                                        variant: `QKHn8_wiy`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    f($, {
                      __framer__animate: { transition: lc },
                      __framer__animateOnce: !0,
                      __framer__enter: cc,
                      __framer__exit: uc,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-bwwrxh`,
                      "data-framer-name": `Feature Section 1`,
                      id: ve,
                      ref: xe,
                      style: { transformPerspective: 1200 },
                      children: [
                        c(`div`, { className: `framer-afmb8n`, "data-framer-name": `Gradient BG` }),
                        c(`div`, {
                          className: `framer-28vs73`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-12qm5w3`,
                            "data-framer-name": `Content`,
                            children: c($, {
                              __framer__animate: { transition: dc },
                              __framer__animateOnce: !0,
                              __framer__enter: cc,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__targets: [{ ref: xe, target: `animate` }],
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-38b18k`,
                              "data-framer-name": `Header`,
                              style: { transformPerspective: 1200 },
                              children: c(K, {
                                __fromCanvasComponent: !0,
                                children: c(i, {
                                  children: c(`h1`, {
                                    className: `framer-styles-preset-1lblvzu`,
                                    "data-styles-preset": `GrBQnWkw1`,
                                    children: `In our vision to enable a better tomorrow, we invite Universities, Institutions and Industries to partner with us`,
                                  }),
                                }),
                                className: `framer-hvm04`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    f(`div`, {
                      className: `framer-1jb4p85`,
                      "data-framer-name": `About`,
                      id: Se,
                      ref: A,
                      children: [
                        c(`div`, {
                          className: `framer-ve4r0h`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-1frg8so`,
                            "data-framer-name": `Heading`,
                            children: c(K, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-3ossdy`,
                                  "data-styles-preset": `eSObMJ2RV`,
                                  style: {
                                    "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                  },
                                  children: [
                                    `Why Campus CoCreate `,
                                    c(`br`, {}),
                                    `for `,
                                    c(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                      },
                                      children: `Innovations`,
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-1mskj6l`,
                              "data-framer-name": `We blend a strategic approach with studio-caliber creativity.`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        f(`div`, {
                          className: `framer-1yxxvq1`,
                          "data-framer-name": `Container`,
                          children: [
                            Ce() &&
                              c(`div`, {
                                className: `framer-1ioq3io hidden-ulzftn hidden-lrt0pz`,
                                "data-framer-name": `Sidebar Content`,
                                children: f(`div`, {
                                  className: `framer-1c3w0pt`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    c(P, {
                                      links: [
                                        {
                                          href: { hash: `:DW5qkDhtJ`, webPageId: `eQrbBJrm8` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:DW5qkDhtJ`, webPageId: `eQrbBJrm8` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        c(j, {
                                          breakpoint: x,
                                          overrides: {
                                            mpTgpjS31: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                14053 +
                                                160 +
                                                121.6 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: c(G, {
                                            height: 42,
                                            width: `max((min(${u?.width || `100vw`}, 1080px) - 128px) / 3, 1px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              14061.2 +
                                              160 +
                                              121.6 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: c(V, {
                                              className: `framer-5y81pj-container`,
                                              nodeId: `SgXZ1lXx6`,
                                              rendersWithMotion: !0,
                                              scopeId: `eQrbBJrm8`,
                                              children: c(j, {
                                                breakpoint: x,
                                                overrides: { mpTgpjS31: { LRvvsEeHp: e[1] } },
                                                children: c(vs, {
                                                  __framer__animateOnce: !1,
                                                  __framer__targets: [
                                                    { ref: we, target: `ca5eT7goh` },
                                                    { ref: Te, target: `pm3k58vGI` },
                                                  ],
                                                  __framer__threshold: 0.5,
                                                  __framer__variantAppearEffectEnabled: !0,
                                                  height: `100%`,
                                                  id: `SgXZ1lXx6`,
                                                  kCh3xRGWK: `About`,
                                                  layoutId: `SgXZ1lXx6`,
                                                  LRvvsEeHp: e[0],
                                                  style: { width: `100%` },
                                                  variant: `pm3k58vGI`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    c(P, {
                                      links: [
                                        {
                                          href: { hash: `:FbNKkQFFK`, webPageId: `eQrbBJrm8` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:FbNKkQFFK`, webPageId: `eQrbBJrm8` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        c(j, {
                                          breakpoint: x,
                                          overrides: {
                                            mpTgpjS31: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                14053 +
                                                160 +
                                                121.6 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                58,
                                            },
                                          },
                                          children: c(G, {
                                            height: 42,
                                            width: `max((min(${u?.width || `100vw`}, 1080px) - 128px) / 3, 1px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              14061.2 +
                                              160 +
                                              121.6 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              58,
                                            children: c(V, {
                                              className: `framer-1xo5s5t-container`,
                                              nodeId: `L7I1jvGOz`,
                                              rendersWithMotion: !0,
                                              scopeId: `eQrbBJrm8`,
                                              children: c(j, {
                                                breakpoint: x,
                                                overrides: { mpTgpjS31: { LRvvsEeHp: e[1] } },
                                                children: c(vs, {
                                                  __framer__animateOnce: !1,
                                                  __framer__targets: [
                                                    { ref: De, target: `ca5eT7goh` },
                                                  ],
                                                  __framer__threshold: 0.5,
                                                  __framer__variantAppearEffectEnabled: !0,
                                                  height: `100%`,
                                                  id: `L7I1jvGOz`,
                                                  kCh3xRGWK: `Experience`,
                                                  layoutId: `L7I1jvGOz`,
                                                  LRvvsEeHp: e[0],
                                                  style: { width: `100%` },
                                                  variant: `pm3k58vGI`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                            c(`div`, {
                              className: `framer-phuqjq`,
                              "data-framer-name": `Content`,
                              children: c(j, {
                                breakpoint: x,
                                overrides: {
                                  fWs0PU7uh: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                    style: {},
                                  },
                                  iE2XOLkII: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                    style: {},
                                  },
                                },
                                children: f($, {
                                  __framer__animate: { transition: Gs },
                                  __framer__animateOnce: !0,
                                  __framer__enter: fc,
                                  __framer__exit: pc,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-bsge3f`,
                                  "data-framer-name": `Container`,
                                  style: { transformPerspective: 1200 },
                                  children: [
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          __framer__animate: { transition: vc },
                                          __framer__enter: _c,
                                          __framer__exit: yc,
                                        },
                                        iE2XOLkII: {
                                          __framer__animate: { transition: vc },
                                          __framer__enter: _c,
                                          __framer__exit: yc,
                                          __framer__threshold: 0,
                                        },
                                      },
                                      children: f($, {
                                        __framer__animate: { transition: hc },
                                        __framer__animateOnce: !0,
                                        __framer__enter: mc,
                                        __framer__exit: gc,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1dwias0`,
                                        "data-framer-name": `Section About`,
                                        id: Oe,
                                        ref: we,
                                        style: { transformPerspective: 1200 },
                                        children: [
                                          c(`div`, {
                                            className: `framer-tkmo14`,
                                            children: c(`div`, {
                                              className: `framer-1lxx76k`,
                                              "data-framer-name": `txt`,
                                              children: c(j, {
                                                breakpoint: x,
                                                overrides: {
                                                  iE2XOLkII: {
                                                    children: c(i, {
                                                      children: c(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                          "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                          "--framer-font-size": `18px`,
                                                          "--framer-letter-spacing": `-0.32px`,
                                                          "--framer-line-height": `150%`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                        },
                                                        children: `Composed of a core team with Venture capitalists, industry veterans, serial entrepreneurs. We collaborate closely with leaders of governments, MNCs & higher educational institutions to ensure that every aspect of the process, from ideas to funding, is validated, supported, and fundable.`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: c(K, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(i, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                        "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                        "--framer-font-size": `24px`,
                                                        "--framer-letter-spacing": `-0.32px`,
                                                        "--framer-line-height": `150%`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                      },
                                                      children: `Composed of a core team with Venture capitalists, industry veterans, serial entrepreneurs. We collaborate closely with leaders of governments, MNCs & higher educational institutions to ensure that every aspect of the process, from ideas to funding, is validated, supported, and fundable.`,
                                                    }),
                                                  }),
                                                  className: `framer-14e7p6h`,
                                                  "data-framer-name": `Almost before…`,
                                                  fonts: [`GF;Inter-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                          f(`div`, {
                                            className: `framer-6sha8a`,
                                            children: [
                                              f(`div`, {
                                                className: `framer-1ew6wry`,
                                                children: [
                                                  c(j, {
                                                    breakpoint: x,
                                                    overrides: {
                                                      fWs0PU7uh: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `100 Crore`,
                                                          }),
                                                        }),
                                                      },
                                                      iE2XOLkII: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `100 Crore`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: c(K, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                            "--framer-font-size": `36px`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                          },
                                                          children: `100 Crore`,
                                                        }),
                                                      }),
                                                      className: `framer-1850cbq`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`GF;Lustria-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  c(`div`, {
                                                    className: `framer-k55q04`,
                                                    "data-framer-name": `txt`,
                                                    children: c(j, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        iE2XOLkII: {
                                                          children: c(i, {
                                                            children: c(`p`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `12px`,
                                                                "--framer-letter-spacing": `-0.32px`,
                                                                "--framer-line-height": `150%`,
                                                                "--framer-text-alignment": `left`,
                                                                "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                              },
                                                              children: `Fund to Student Startups`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: c(K, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                              "--framer-letter-spacing": `-0.32px`,
                                                              "--framer-line-height": `150%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                            },
                                                            children: `Fund to Student Startups`,
                                                          }),
                                                        }),
                                                        className: `framer-fxwank`,
                                                        "data-framer-name": `Almost before…`,
                                                        fonts: [`GF;Instrument Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              f(`div`, {
                                                className: `framer-12g5owm`,
                                                children: [
                                                  c(j, {
                                                    breakpoint: x,
                                                    overrides: {
                                                      fWs0PU7uh: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `40+`,
                                                          }),
                                                        }),
                                                      },
                                                      iE2XOLkII: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `40+`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: c(K, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                            "--framer-font-size": `36px`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                          },
                                                          children: `40+`,
                                                        }),
                                                      }),
                                                      className: `framer-196bnt9`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`GF;Lustria-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  c(`div`, {
                                                    className: `framer-76gfye`,
                                                    "data-framer-name": `txt`,
                                                    children: c(j, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        iE2XOLkII: {
                                                          children: c(i, {
                                                            children: c(`p`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `12px`,
                                                                "--framer-letter-spacing": `-0.32px`,
                                                                "--framer-line-height": `150%`,
                                                                "--framer-text-alignment": `left`,
                                                                "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                              },
                                                              children: `Universities working with`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: c(K, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                              "--framer-letter-spacing": `-0.32px`,
                                                              "--framer-line-height": `150%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                            },
                                                            children: `Universities working with`,
                                                          }),
                                                        }),
                                                        className: `framer-subsab`,
                                                        "data-framer-name": `Almost before…`,
                                                        fonts: [`GF;Instrument Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              f(`div`, {
                                                className: `framer-1ab265g`,
                                                children: [
                                                  c(j, {
                                                    breakpoint: x,
                                                    overrides: {
                                                      fWs0PU7uh: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `20+`,
                                                          }),
                                                        }),
                                                      },
                                                      iE2XOLkII: {
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                              "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                              "--framer-font-size": `24px`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `120%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                            },
                                                            children: `20+`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: c(K, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(i, {
                                                        children: c(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7THVzdHJpYS1yZWd1bGFy`,
                                                            "--framer-font-family": `"Lustria", "Lustria Placeholder", serif`,
                                                            "--framer-font-size": `36px`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-e00c601a-4f2b-448f-a9b6-442e84608158, rgb(250, 92, 64))`,
                                                          },
                                                          children: `20+`,
                                                        }),
                                                      }),
                                                      className: `framer-1aazm1v`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`GF;Lustria-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  c(`div`, {
                                                    className: `framer-1hxhdve`,
                                                    "data-framer-name": `txt`,
                                                    children: c(j, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        iE2XOLkII: {
                                                          children: c(i, {
                                                            children: c(`p`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                                "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `12px`,
                                                                "--framer-letter-spacing": `-0.32px`,
                                                                "--framer-line-height": `150%`,
                                                                "--framer-text-alignment": `left`,
                                                                "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                              },
                                                              children: `GCC and MNC Partners`,
                                                            }),
                                                          }),
                                                        },
                                                      },
                                                      children: c(K, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(i, {
                                                          children: c(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SW5zdHJ1bWVudCBTYW5zLXJlZ3VsYXI=`,
                                                              "--framer-font-family": `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                                              "--framer-letter-spacing": `-0.32px`,
                                                              "--framer-line-height": `150%`,
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                            },
                                                            children: `GCC and MNC Partners`,
                                                          }),
                                                        }),
                                                        className: `framer-oq80c1`,
                                                        "data-framer-name": `Almost before…`,
                                                        fonts: [`GF;Instrument Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    c(j, {
                                      breakpoint: x,
                                      overrides: {
                                        fWs0PU7uh: {
                                          __framer__animate: { transition: vc },
                                          __framer__enter: _c,
                                          __framer__exit: yc,
                                        },
                                        iE2XOLkII: {
                                          __framer__animate: { transition: vc },
                                          __framer__enter: _c,
                                          __framer__exit: yc,
                                          __framer__threshold: 0,
                                        },
                                      },
                                      children: c($, {
                                        __framer__animate: { transition: hc },
                                        __framer__animateOnce: !0,
                                        __framer__enter: mc,
                                        __framer__exit: gc,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1mc741w`,
                                        "data-framer-name": `Section Experience`,
                                        id: Ae,
                                        ref: De,
                                        style: { transformPerspective: 1200 },
                                        children: c(`div`, {
                                          className: `framer-1o8p23x`,
                                          children: c(`div`, {
                                            className: `framer-l748bh`,
                                            "data-framer-name": `txt`,
                                            children: c(K, {
                                              __fromCanvasComponent: !0,
                                              children: f(i, {
                                                children: [
                                                  c(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                      "--framer-font-size": `24px`,
                                                      "--framer-letter-spacing": `-0.32px`,
                                                      "--framer-line-height": `150%`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                    },
                                                    children: `In numbers`,
                                                  }),
                                                  f(`ul`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                      "--framer-font-size": `24px`,
                                                      "--framer-letter-spacing": `-0.32px`,
                                                      "--framer-line-height": `150%`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-9f78760f-4e77-4579-86b9-46ed9f33d785, rgba(0, 0, 0, 0.65))`,
                                                    },
                                                    children: [
                                                      c(`li`, {
                                                        children: c(`p`, {
                                                          children: `5000 students reached`,
                                                        }),
                                                      }),
                                                      c(`li`, {
                                                        children: c(`p`, {
                                                          children: `60 patents filed`,
                                                        }),
                                                      }),
                                                      c(`li`, {
                                                        children: c(`p`, {
                                                          children: `200 initiated ideas`,
                                                        }),
                                                      }),
                                                      c(`li`, {
                                                        children: c(`p`, {
                                                          children: `40 startups`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              className: `framer-2y5adn`,
                                              "data-framer-name": `Almost before…`,
                                              fonts: [`GF;Inter-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c(j, {
                      breakpoint: x,
                      overrides: {
                        fWs0PU7uh: { y: (u?.y || 0) + 0 + 14805.6 },
                        iE2XOLkII: { y: void 0 },
                        mpTgpjS31: { y: (u?.y || 0) + 0 + 16036.6 },
                      },
                      children: c(G, {
                        height: 495,
                        width: u?.width || `100vw`,
                        y: (u?.y || 0) + 0 + 16084.8,
                        children: c(V, {
                          className: `framer-a2k7h0-container`,
                          nodeId: `sW0nud3pp`,
                          scopeId: `eQrbBJrm8`,
                          children: c(j, {
                            breakpoint: x,
                            overrides: {
                              fWs0PU7uh: { variant: `J2q8PCmMu` },
                              iE2XOLkII: { variant: `J2q8PCmMu` },
                            },
                            children: c(be, {
                              height: `100%`,
                              id: `sW0nud3pp`,
                              layoutId: `sW0nud3pp`,
                              style: { width: `100%` },
                              variant: `Md9vpNvNH`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ObTUi.framer-sq6v7c, .framer-ObTUi .framer-sq6v7c { display: block; }`,
        `.framer-ObTUi.framer-8blmsd { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1400px; }`,
        `.framer-ObTUi .framer-foun8u-container, .framer-ObTUi .framer-1fzuu32-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ObTUi .framer-yn8d5q-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 9; }`,
        `.framer-ObTUi .framer-h4wm52 { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.85); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 128px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 240px 0px 24px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-9u8728 { flex: none; height: 100%; left: calc(50.00000000000002% - 99.64285714285714% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; }`,
        `.framer-ObTUi .framer-1jpwnvh { -webkit-filter: blur(100px); aspect-ratio: 1 / 1; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-left-radius: 500px; border-top-right-radius: 500px; filter: blur(100px); flex: none; height: var(--framer-aspect-ratio-supported, 1097px); left: 50%; overflow: visible; position: absolute; top: -694px; transform: translateX(-50%); width: 1097px; }`,
        `.framer-ObTUi .framer-1ibt9zd { background: conic-gradient(from 0deg at 50% 50%, #ff8000 0deg, rgb(255, 195, 0) 360deg); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; bottom: 0px; flex: none; left: 0px; opacity: 0.8; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-f4rzca { background-color: #ffffff; border-bottom-left-radius: 720px; border-bottom-right-radius: 720px; border-top-left-radius: 720px; border-top-right-radius: 720px; flex: none; height: 736px; left: calc(50.00000000000002% - 736px / 2); overflow: hidden; position: absolute; top: -524px; width: 736px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-ObTUi .framer-16y955e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 64px 32px 0px 32px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-ObTUi .framer-1u7s1ni { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-ptx6gs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1d7qh14 { flex: none; height: auto; max-width: 540px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-5vfd6x, .framer-ObTUi .framer-hz8ng2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-12ogq85 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ObTUi .framer-1dxctp4-container { flex: none; height: 56px; position: relative; width: auto; }`,
        `.framer-ObTUi .framer-hwa7jc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ObTUi .framer-1rcvybr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 0px 48px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ObTUi .framer-1tcv2ls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 32px 0px 32px; position: sticky; width: 100%; }`,
        `.framer-ObTUi .framer-wckk5o, .framer-ObTUi .framer-m30zhn, .framer-ObTUi .framer-g0m2qt { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 720px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1e05mt9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 60px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1e0vfwo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px 0px 40px 0px; position: relative; scroll-margin-top: 130px; width: 100%; }`,
        `.framer-ObTUi .framer-11lf7op, .framer-ObTUi .framer-cmosow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-mtwegm-container, .framer-ObTUi .framer-1b3lqpq-container, .framer-ObTUi .framer-5y81pj-container, .framer-ObTUi .framer-1xo5s5t-container, .framer-ObTUi .framer-a2k7h0-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-a468qo { align-content: center; align-items: center; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-b849g5 { align-content: flex-start; align-items: flex-start; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-1s2nizm, .framer-ObTUi .framer-ztbabr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1k6syo1 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 190px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-ObTUi .framer-i8ake0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 22%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-ObTUi .framer-yucx86, .framer-ObTUi .framer-1gc5q7o, .framer-ObTUi .framer-1g45huf { align-content: flex-end; align-items: flex-end; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 136px 24px 136px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-ObTUi .framer-j58coo, .framer-ObTUi .framer-12a4xvy, .framer-ObTUi .framer-1bw8flc, .framer-ObTUi .framer-1b22uom { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1rgo8mw, .framer-ObTUi .framer-qupk6m, .framer-ObTUi .framer-mdf2sl, .framer-ObTUi .framer-pv20r0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: hidden; position: relative; width: 24px; z-index: 1; }`,
        `.framer-ObTUi .framer-m4jvtz, .framer-ObTUi .framer-15xltt4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 1480px; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1tlur37, .framer-ObTUi .framer-4vrko { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 1480px; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1ddnrav { align-content: flex-end; align-items: flex-end; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 136px 96px 136px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-ObTUi .framer-jyg6mw { align-content: center; align-items: center; border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 184px 24px 24px 136px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-ObTUi .framer-53yek1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-ObTUi .framer-1hxckuw { align-content: flex-start; align-items: flex-start; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 96px 136px 0px 136px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-1degeqa { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 1480px; position: relative; white-space: pre-wrap; width: 55%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-g33jcg-container, .framer-ObTUi .framer-8b3noc-container, .framer-ObTUi .framer-4ng8pn-container, .framer-ObTUi .framer-15vz5db-container, .framer-ObTUi .framer-kfhp5l-container, .framer-ObTUi .framer-1hp3iea-container { flex: none; height: 100vh; pointer-events: none; position: sticky; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-q5xujw { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); mix-blend-mode: color-dodge; opacity: 0.4; position: absolute; top: calc(43.86590584878747% - 100% / 2); width: 100%; }`,
        `.framer-ObTUi .framer-1sedh8t, .framer-ObTUi .framer-9r8i5s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 32px 32px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-gr3aqq, .framer-ObTUi .framer-1uy17z9, .framer-ObTUi .framer-jl0nss { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-12mgusd, .framer-ObTUi .framer-hh0ibz, .framer-ObTUi .framer-lmfl4q, .framer-ObTUi .framer-g13s6y { align-content: center; align-items: center; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-18nrgpc, .framer-ObTUi .framer-fnc3rv, .framer-ObTUi .framer-p1ul5v, .framer-ObTUi .framer-1j3rxgf { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 0px 0.7113342898827977px 1.5649354377421554px -0.6000000000000001px rgba(0, 0, 0, 0.06), 0px 1.9371521717053837px 4.261734777751845px -1.2000000000000002px rgba(0, 0, 0, 0.06), 0px 4.253285051195417px 9.35722711262992px -1.7999999999999998px rgba(0, 0, 0, 0.06), 0px 9.4413216807344px 20.770907697615687px -2.4000000000000004px rgba(0, 0, 0, 0.05), 0px 24px 52.80000000000001px -3px rgba(0, 0, 0, 0.04); flex: none; height: 420px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-ylfa7p, .framer-ObTUi .framer-1vxnivp, .framer-ObTUi .framer-kgrzs4 { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 0px; flex: none; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-hji4ig, .framer-ObTUi .framer-1pwmbmj, .framer-ObTUi .framer-obvbic { align-content: flex-start; align-items: flex-start; background-color: #333333; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 12px 24px 0px rgba(0, 0, 0, 0.1), 0px 32px 64px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-14hboq1, .framer-ObTUi .framer-1dt1070, .framer-ObTUi .framer-1gh70dj, .framer-ObTUi .framer-11ajrl1, .framer-ObTUi .framer-1d2di21, .framer-ObTUi .framer-p4nwcv, .framer-ObTUi .framer-1sqgj5g, .framer-ObTUi .framer-4ah0i0, .framer-ObTUi .framer-1c9xp9n, .framer-ObTUi .framer-1jhwp80, .framer-ObTUi .framer-1iah5lw, .framer-ObTUi .framer-qrnuso, .framer-ObTUi .framer-1tqjp9g, .framer-ObTUi .framer-1ii9txf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 12px 0px 0px; position: relative; width: min-content; }`,
        `.framer-ObTUi .framer-197i1pj-container, .framer-ObTUi .framer-c61c23-container, .framer-ObTUi .framer-1rnow0b-container, .framer-ObTUi .framer-d536gd-container, .framer-ObTUi .framer-1tg6glg-container, .framer-ObTUi .framer-gtoglc-container, .framer-ObTUi .framer-anmcu6-container, .framer-ObTUi .framer-117zveq-container, .framer-ObTUi .framer-1it4en4-container, .framer-ObTUi .framer-rvzh2x-container, .framer-ObTUi .framer-icm1rm-container, .framer-ObTUi .framer-w2ygi4-container, .framer-ObTUi .framer-1mg8g5g-container, .framer-ObTUi .framer-12fuy9b-container { flex: none; height: 32px; position: relative; width: 32px; }`,
        `.framer-ObTUi .framer-1k7vq0l, .framer-ObTUi .framer-pi3zmq, .framer-ObTUi .framer-167fl0t, .framer-ObTUi .framer-1kwrhjf, .framer-ObTUi .framer-1b9n2b, .framer-ObTUi .framer-1ht9p0n, .framer-ObTUi .framer-1angar7, .framer-ObTUi .framer-ya28fn, .framer-ObTUi .framer-e86ip8, .framer-ObTUi .framer-eggolq, .framer-ObTUi .framer-o95cmr, .framer-ObTUi .framer-cpj00a, .framer-ObTUi .framer-1idsx98, .framer-ObTUi .framer-9talk2 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-ObTUi .framer-13i7de0 { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-yk6j1t { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1pl970m, .framer-ObTUi .framer-7rqgeb, .framer-ObTUi .framer-1co5sdl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-xa48s6, .framer-ObTUi .framer-s98q4q { -webkit-backdrop-filter: blur(0px); align-content: flex-start; align-items: flex-start; backdrop-filter: blur(0px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1xpzvf5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-d1qs0s, .framer-ObTUi .framer-10zx63b, .framer-ObTUi .framer-19infwu, .framer-ObTUi .framer-1gjo4p0, .framer-ObTUi .framer-q78t2d { flex: 1 0 0px; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-w8ax42 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 168px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1wtgq6q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 32px 32px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-k4gi8z { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 64px 32px 64px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1c3e3h0 { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ObTUi .framer-1i0ucl9, .framer-ObTUi .framer-1nxbhsj { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1vlm9tv { -webkit-backdrop-filter: blur(0px); align-content: center; align-items: center; backdrop-filter: blur(0px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1tu5fof, .framer-ObTUi .framer-pbfzth { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 12px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1g7e5t5, .framer-ObTUi .framer-6dhlsd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-133zwa1 { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-16brj03 { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-124u1el-container { flex: none; height: 44px; position: relative; width: auto; }`,
        `.framer-ObTUi .framer-w5d0gm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 64px 64px 64px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-3v1zl2 { --border-bottom-width: 1px; --border-color: #c9664d; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, #de523a 0%, var(--token-64aa7881-4c79-48ee-81eb-99def950f90c, rgb(250, 142, 65)) 100%); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; box-shadow: 0px 0.6021873017743928px 2.2883117467426928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 8.696426552325137px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 38px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 0px 80px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ObTUi .framer-g55glk { flex: none; height: 380px; left: calc(50.00000000000002% - 99.67447916666666% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; }`,
        `.framer-ObTUi .framer-1sy7fig { -webkit-filter: blur(100px); aspect-ratio: 1 / 1; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-left-radius: 500px; border-top-right-radius: 500px; filter: blur(100px); flex: none; height: var(--framer-aspect-ratio-supported, 823px); left: 50%; overflow: visible; position: absolute; top: -15%; transform: translate(-50%, -50%); width: 823px; }`,
        `.framer-ObTUi .framer-6grpee { background: conic-gradient(from 0deg at 50% 50%, #ffce8f 0deg, rgb(230, 92, 18) 215.67567567567568deg, rgb(255, 28, 28) 360deg); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-ObTUi .framer-14uxv06 { -webkit-filter: blur(100px); aspect-ratio: 1 / 1; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-left-radius: 500px; border-top-right-radius: 500px; filter: blur(100px); flex: none; height: var(--framer-aspect-ratio-supported, 823px); left: 50%; mix-blend-mode: overlay; overflow: visible; position: absolute; top: -15%; transform: translate(-50%, -50%); width: 823px; }`,
        `.framer-ObTUi .framer-1i4xpq9 { background: conic-gradient(from 0deg at 50% 50%, #ffffff 0deg, rgb(255, 166, 64) 180deg, rgb(252, 143, 76) 360deg); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-ObTUi .framer-1yyuo03 { flex: none; height: 150%; left: calc(50.00000000000002% - 100% / 2); mix-blend-mode: color-dodge; opacity: 0.4; position: absolute; top: calc(49.939172749391744% - 150.30413625304135% / 2); width: 100%; }`,
        `.framer-ObTUi .framer-1sg40u5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1g9mvxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 760px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-lcpjma, .framer-ObTUi .framer-1434g10, .framer-ObTUi .framer-14e7p6h, .framer-ObTUi .framer-1850cbq, .framer-ObTUi .framer-fxwank, .framer-ObTUi .framer-196bnt9, .framer-ObTUi .framer-subsab, .framer-ObTUi .framer-1aazm1v, .framer-ObTUi .framer-oq80c1, .framer-ObTUi .framer-2y5adn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-2z3gh3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 80px 32px 64px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-bwwrxh { align-content: center; align-items: center; background-color: var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 96px 64px 160px 64px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ObTUi .framer-afmb8n { background: radial-gradient(50% 50% at 50% 50%, #ffd3b5 28.8288013355152%, var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, rgb(255, 255, 255)) 79.63353633629877%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-ObTUi .framer-28vs73 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-12qm5w3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ObTUi .framer-38b18k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-hvm04 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1jb4p85 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-ve4r0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1frg8so { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 50%; }`,
        `.framer-ObTUi .framer-1mskj6l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ObTUi .framer-1yxxvq1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: visible; padding: 0px 32px 60px 32px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-1ioq3io { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 100px; width: 1px; z-index: 1; }`,
        `.framer-ObTUi .framer-1c3w0pt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-phuqjq { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-bsge3f { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: flex-start; overflow: visible; padding: 128px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ObTUi .framer-1dwias0, .framer-ObTUi .framer-1mc741w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-tkmo14, .framer-ObTUi .framer-1o8p23x { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-1lxx76k, .framer-ObTUi .framer-k55q04, .framer-ObTUi .framer-76gfye, .framer-ObTUi .framer-1hxhdve, .framer-ObTUi .framer-l748bh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ObTUi .framer-6sha8a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ObTUi .framer-1ew6wry, .framer-ObTUi .framer-12g5owm, .framer-ObTUi .framer-1ab265g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 78px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        ...Ie,
        ...ns,
        ...De,
        ...Se,
        ...xe,
        `.framer-ObTUi[data-border="true"]::after, .framer-ObTUi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 768px) and (max-width: 1199.98px) { .framer-ObTUi.framer-8blmsd { width: 768px; } .framer-ObTUi .framer-h4wm52 { gap: 48px; } .framer-ObTUi .framer-16y955e { padding: 64px 64px 0px 64px; } .framer-ObTUi .framer-ptx6gs, .framer-ObTUi .framer-1d7qh14 { width: 90%; } .framer-ObTUi .framer-1tcv2ls { max-width: 800px; padding: 0px 64px 0px 64px; } .framer-ObTUi .framer-wckk5o, .framer-ObTUi .framer-m30zhn, .framer-ObTUi .framer-g0m2qt, .framer-ObTUi .framer-1fzuu32-container, .framer-ObTUi .framer-i8ake0 { width: 100%; } .framer-ObTUi .framer-1k6syo1 { padding: 24px 24px 24px 72px; } .framer-ObTUi .framer-yucx86, .framer-ObTUi .framer-1gc5q7o, .framer-ObTUi .framer-1g45huf { padding: 24px 136px 24px 72px; } .framer-ObTUi .framer-m4jvtz, .framer-ObTUi .framer-15xltt4, .framer-ObTUi .framer-1tlur37, .framer-ObTUi .framer-4vrko, .framer-ObTUi .framer-1degeqa { width: 80%; } .framer-ObTUi .framer-1ddnrav { padding: 24px 136px 96px 72px; } .framer-ObTUi .framer-jyg6mw { padding: 184px 24px 24px 72px; } .framer-ObTUi .framer-1hxckuw { padding: 96px 136px 0px 72px; } .framer-ObTUi .framer-g33jcg-container, .framer-ObTUi .framer-8b3noc-container, .framer-ObTUi .framer-4ng8pn-container, .framer-ObTUi .framer-15vz5db-container, .framer-ObTUi .framer-kfhp5l-container, .framer-ObTUi .framer-1hp3iea-container { height: auto; } .framer-ObTUi .framer-1sedh8t { padding: 0px 0px 32px 0px; } .framer-ObTUi .framer-gr3aqq, .framer-ObTUi .framer-1uy17z9 { flex-direction: column; max-width: 1279px; padding: 48px 0px 48px 0px; } .framer-ObTUi .framer-12mgusd { flex: none; order: 1; padding: 0px 64px 0px 64px; width: 100%; } .framer-ObTUi .framer-ylfa7p, .framer-ObTUi .framer-1vxnivp, .framer-ObTUi .framer-133zwa1 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; will-change: var(--framer-will-change-filter-override, filter); } .framer-ObTUi .framer-13i7de0, .framer-ObTUi .framer-hh0ibz { flex: none; order: 0; padding: 0px 64px 0px 64px; width: 100%; } .framer-ObTUi .framer-1wtgq6q { overflow: visible; padding: 80px 0px 32px 0px; } .framer-ObTUi .framer-k4gi8z { flex-direction: column; max-width: 1279px; padding: 0px; } .framer-ObTUi .framer-1c3e3h0, .framer-ObTUi .framer-lmfl4q { flex: none; padding: 0px 64px 0px 64px; width: 100%; } .framer-ObTUi .framer-1sg40u5 { padding: 0px 64px 0px 64px; } .framer-ObTUi .framer-2z3gh3 { padding: 80px 64px 64px 64px; } .framer-ObTUi .framer-bwwrxh { background-color: #070803; justify-content: center; padding: 64px; } .framer-ObTUi .framer-afmb8n { background: radial-gradient(55.00000000000001% 50% at 50% 50%, #ffd3b5 35.31524383269989%, var(--token-7b76f337-6b7a-4460-8b9d-6a995b1b0c0f, rgb(255, 255, 255)) 79.63353633629877%); } .framer-ObTUi .framer-28vs73 { overflow: visible; } .framer-ObTUi .framer-12qm5w3, .framer-ObTUi .framer-1jb4p85 { gap: 32px; } .framer-ObTUi .framer-38b18k { max-width: 710px; } .framer-ObTUi .framer-1yxxvq1 { flex-direction: column; gap: 48px; overflow: hidden; padding: 0px; } .framer-ObTUi .framer-phuqjq { flex: none; width: 100%; } .framer-ObTUi .framer-bsge3f { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; gap: 32px; padding: 0px 30px 0px 30px; }}`,
        `@media (max-width: 767.98px) { .framer-ObTUi.framer-8blmsd, .framer-ObTUi .framer-mtwegm-container { width: 320px; } .framer-ObTUi .framer-h4wm52 { gap: 64px; padding: 120px 0px 80px 0px; } .framer-ObTUi .framer-1jpwnvh { left: 50%; top: -754px; } .framer-ObTUi .framer-f4rzca { height: 476px; left: calc(50.00000000000002% - 476px / 2); top: -324px; width: 476px; } .framer-ObTUi .framer-16y955e { gap: 40px; padding: 64px 24px 0px 24px; } .framer-ObTUi .framer-ptx6gs, .framer-ObTUi .framer-wckk5o, .framer-ObTUi .framer-m30zhn, .framer-ObTUi .framer-g0m2qt, .framer-ObTUi .framer-1fzuu32-container, .framer-ObTUi .framer-i8ake0, .framer-ObTUi .framer-14hboq1, .framer-ObTUi .framer-1dt1070, .framer-ObTUi .framer-1gh70dj, .framer-ObTUi .framer-11ajrl1, .framer-ObTUi .framer-1d2di21, .framer-ObTUi .framer-p4nwcv, .framer-ObTUi .framer-1sqgj5g, .framer-ObTUi .framer-4ah0i0, .framer-ObTUi .framer-1c9xp9n, .framer-ObTUi .framer-1jhwp80, .framer-ObTUi .framer-1iah5lw, .framer-ObTUi .framer-qrnuso, .framer-ObTUi .framer-1tqjp9g, .framer-ObTUi .framer-1ii9txf, .framer-ObTUi .framer-1frg8so { width: 100%; } .framer-ObTUi .framer-1rcvybr { padding: 80px 0px 40px 0px; } .framer-ObTUi .framer-1tcv2ls, .framer-ObTUi .framer-ve4r0h { padding: 0px 16px 0px 16px; } .framer-ObTUi .framer-b849g5 { padding: 0px; } .framer-ObTUi .framer-1k6syo1 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 96px 0px 24px 24px; will-change: unset; } .framer-ObTUi .framer-yucx86, .framer-ObTUi .framer-1gc5q7o, .framer-ObTUi .framer-1g45huf, .framer-ObTUi .framer-1ddnrav { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 0px 24px 0px 24px; will-change: unset; } .framer-ObTUi .framer-j58coo, .framer-ObTUi .framer-12a4xvy, .framer-ObTUi .framer-1bw8flc, .framer-ObTUi .framer-1b22uom { flex-direction: column; gap: 96px; justify-content: flex-start; padding: 96px 0px 96px 0px; } .framer-ObTUi .framer-1rgo8mw, .framer-ObTUi .framer-qupk6m, .framer-ObTUi .framer-mdf2sl, .framer-ObTUi .framer-pv20r0, .framer-ObTUi .framer-1434g10 { order: 1; } .framer-ObTUi .framer-m4jvtz, .framer-ObTUi .framer-15xltt4, .framer-ObTUi .framer-1tlur37, .framer-ObTUi .framer-4vrko { max-width: unset; order: 0; width: 100%; } .framer-ObTUi .framer-jyg6mw { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 96px 24px 24px 24px; will-change: unset; } .framer-ObTUi .framer-1hxckuw { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 96px 24px 96px 24px; } .framer-ObTUi .framer-1degeqa { max-width: unset; width: 100%; } .framer-ObTUi .framer-g33jcg-container { height: 681px; width: 319px; } .framer-ObTUi .framer-8b3noc-container { height: 756px; width: 326px; } .framer-ObTUi .framer-4ng8pn-container { height: 728px; width: 326px; } .framer-ObTUi .framer-15vz5db-container { height: 712px; width: 326px; } .framer-ObTUi .framer-kfhp5l-container { height: 733px; width: 322px; } .framer-ObTUi .framer-1hp3iea-container { height: 676px; width: 319px; } .framer-ObTUi .framer-1sedh8t, .framer-ObTUi .framer-9r8i5s { overflow: visible; padding: 32px 0px 0px 0px; } .framer-ObTUi .framer-gr3aqq, .framer-ObTUi .framer-1uy17z9, .framer-ObTUi .framer-k4gi8z, .framer-ObTUi .framer-jl0nss { flex-direction: column; padding: 0px 16px 64px 16px; } .framer-ObTUi .framer-12mgusd, .framer-ObTUi .framer-g13s6y { display: block; flex: none; gap: 0px; height: 592px; order: 1; padding: unset; width: 100%; } .framer-ObTUi .framer-18nrgpc, .framer-ObTUi .framer-fnc3rv, .framer-ObTUi .framer-p1ul5v, .framer-ObTUi .framer-1j3rxgf { height: 320px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; } .framer-ObTUi .framer-hji4ig, .framer-ObTUi .framer-obvbic { bottom: 40px; left: 50%; padding: 20px; position: absolute; transform: translateX(-50%); width: 96%; } .framer-ObTUi .framer-1k7vq0l, .framer-ObTUi .framer-pi3zmq, .framer-ObTUi .framer-167fl0t, .framer-ObTUi .framer-1kwrhjf, .framer-ObTUi .framer-1b9n2b, .framer-ObTUi .framer-1ht9p0n, .framer-ObTUi .framer-1angar7, .framer-ObTUi .framer-ya28fn, .framer-ObTUi .framer-e86ip8, .framer-ObTUi .framer-eggolq, .framer-ObTUi .framer-o95cmr, .framer-ObTUi .framer-cpj00a, .framer-ObTUi .framer-1idsx98, .framer-ObTUi .framer-9talk2 { flex: 1 0 0px; overflow: hidden; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-ObTUi .framer-13i7de0, .framer-ObTUi .framer-16brj03 { flex: none; order: 0; width: 100%; } .framer-ObTUi .framer-hh0ibz { display: block; flex: none; gap: 0px; height: 592px; order: 0; padding: unset; width: 100%; } .framer-ObTUi .framer-1wtgq6q { overflow: visible; padding: 80px 0px 0px 0px; } .framer-ObTUi .framer-1c3e3h0, .framer-ObTUi .framer-phuqjq, .framer-ObTUi .framer-tkmo14, .framer-ObTUi .framer-1o8p23x { flex: none; width: 100%; } .framer-ObTUi .framer-lmfl4q { display: block; flex: none; gap: 0px; height: 552px; padding: unset; width: 100%; } .framer-ObTUi .framer-1pwmbmj { bottom: 40px; left: 50%; padding: 20px; position: absolute; transform: translateX(-50%); width: 100%; } .framer-ObTUi .framer-w5d0gm { padding: 0px 0px 64px 0px; } .framer-ObTUi .framer-3v1zl2 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 120px 0px 64px 0px; will-change: unset; } .framer-ObTUi .framer-g55glk { left: calc(50.00000000000002% - 99.6875% / 2); order: 1; width: 100%; } .framer-ObTUi .framer-1sy7fig, .framer-ObTUi .framer-14uxv06 { -webkit-filter: blur(22px); filter: blur(22px); height: var(--framer-aspect-ratio-supported, 277px); left: 50%; top: -35%; width: 277px; } .framer-ObTUi .framer-1yyuo03 { height: 100%; order: 0; top: calc(49.939172749391744% - 100% / 2); } .framer-ObTUi .framer-1sg40u5 { gap: 40px; order: 2; padding: 0px 16px 0px 16px; } .framer-ObTUi .framer-lcpjma { order: 0; } .framer-ObTUi .framer-2z3gh3 { order: 3; padding: 64px 16px 48px 16px; } .framer-ObTUi .framer-bwwrxh { background-color: #070803; gap: 48px; padding: 48px 20px 48px 20px; } .framer-ObTUi .framer-28vs73 { align-content: flex-start; align-items: flex-start; gap: 12px; } .framer-ObTUi .framer-12qm5w3 { gap: 24px; max-width: 450px; } .framer-ObTUi .framer-1jb4p85 { padding: 120px 0px 0px 0px; } .framer-ObTUi .framer-1yxxvq1 { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex-direction: column; gap: 32px; padding: 0px 16px 0px 16px; } .framer-ObTUi .framer-bsge3f { flex: 1 0 0px; gap: 24px; padding: 0px; } .framer-ObTUi .framer-1dwias0 { flex-direction: column; gap: 32px; justify-content: center; padding: 0px 0px 40px 0px; } .framer-ObTUi .framer-1lxx76k, .framer-ObTUi .framer-k55q04, .framer-ObTUi .framer-76gfye, .framer-ObTUi .framer-1hxhdve, .framer-ObTUi .framer-l748bh { gap: 16px; } .framer-ObTUi .framer-6sha8a { flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px; width: 100%; } .framer-ObTUi .framer-1ew6wry, .framer-ObTUi .framer-12g5owm, .framer-ObTUi .framer-1ab265g { flex: 1 0 0px; gap: 6px; height: min-content; width: 1px; } .framer-ObTUi .framer-1mc741w { flex-direction: column; gap: 32px; justify-content: center; padding: 40px 0px 0px 0px; }}`,
        `@media (min-width: 1200px) and (max-width: 1399.98px) { .framer-ObTUi.framer-8blmsd { width: 1200px; } .framer-ObTUi .framer-ptx6gs { width: 70%; } .framer-ObTUi .framer-1d7qh14 { width: 90%; } .framer-ObTUi .framer-g55glk { order: 1; } .framer-ObTUi .framer-1yyuo03 { height: 100%; order: 0; top: calc(49.939172749391744% - 100% / 2); } .framer-ObTUi .framer-1sg40u5 { order: 2; } .framer-ObTUi .framer-2z3gh3 { order: 3; } .framer-ObTUi .framer-bsge3f { gap: 160px; }}`,
      ],
      `framer-ObTUi`
    )),
    (wc = Cc),
    (Cc.displayName = `Home`),
    (Cc.defaultProps = { height: 15511, width: 1400 }),
    C(
      Cc,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Bespoke Serif`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Bespoke Serif`,
              url: `../../assets/misc/DLLWXFUYSJGEWBBZLWVRWRKWK2K5HHIO.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Satoshi`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Satoshi`,
              url: `../../assets/misc/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Bespoke Serif`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Bespoke Serif`,
              url: `../../assets/misc/A3D35MFKWQ3EIKAD2QI6LGKQ7ZD2BKN5.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Lustria`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Lustria`,
              url: `https://fonts.gstatic.com/s/lustria/v14/9oRONYodvDEyjuhOrC05MtPyAcg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Tight`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter Tight`,
              url: `https://fonts.gstatic.com/s/intertight/v9/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter`,
              url: `https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZ1rib2Bg-4.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter`,
              url: `https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Instrument Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Instrument Sans`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-QfwmS0v3_7Y.woff2`,
              weight: `400`,
            },
          ],
        },
        ...as,
        ...os,
        ...ss,
        ...us,
        ...fs,
        ...ps,
        ...ms,
        ...hs,
        ...gs,
        ..._s,
        ...ys,
        ...E(Le),
        ...E(ts),
        ...E(me),
        ...E(Te),
        ...E(we),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Tc = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramereQrbBJrm8`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1400`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"WryNIFQCV":{"pattern":":WryNIFQCV","name":"story"},"AvOOP7rlC":{"pattern":":AvOOP7rlC","name":"benefits"},"Iu9lkPGq4":{"pattern":":Iu9lkPGq4","name":"about-section"},"cYr5o27bG":{"pattern":":cYr5o27bG","name":"about-01"},"gtGXByLKm":{"pattern":":gtGXByLKm","name":"about-text-01"},"fRJignev1":{"pattern":":fRJignev1","name":"about-text-02"},"eb4s2BgDs":{"pattern":":eb4s2BgDs","name":"about-text-03"},"HsrhDHl1m":{"pattern":":HsrhDHl1m","name":"about-text-03"},"K_GmQiQOC":{"pattern":":K_GmQiQOC","name":"meet-us-01"},"zxBzwrwUr":{"pattern":":zxBzwrwUr","name":"service"},"qEGmhVOrq":{"pattern":":qEGmhVOrq","name":"work"},"sXHUI_Xgz":{"pattern":":sXHUI_Xgz","name":"feature-section-1"},"F9uPyqmjG":{"pattern":":F9uPyqmjG","name":"experience"},"DW5qkDhtJ":{"pattern":":DW5qkDhtJ","name":"about"},"FbNKkQFFK":{"pattern":":FbNKkQFFK","name":"experience"}}`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fWs0PU7uh":{"layout":["fixed","auto"]},"iE2XOLkII":{"layout":["fixed","auto"]},"mpTgpjS31":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `15511`,
            framerResponsiveScreen: ``,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Tc as __FramerMetadata__, wc as default };
//# sourceMappingURL=dsPy1BvwsbqPrTharM7-CWLDllLFA3or245UHIK5qjw.B8MxVaEL.mjs.map

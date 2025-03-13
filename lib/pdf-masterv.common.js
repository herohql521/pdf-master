/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _classPrivateFieldLooseBase=(__webpack_require__(5504)["default"]);var _classPrivateFieldLooseKey=(__webpack_require__(9654)["default"]);__webpack_require__(4114);__webpack_require__(6573);__webpack_require__(8100);__webpack_require__(7936);__webpack_require__(7467);__webpack_require__(4732);__webpack_require__(9577);__webpack_require__(3375);__webpack_require__(9225);__webpack_require__(3972);__webpack_require__(9209);__webpack_require__(5714);__webpack_require__(7561);__webpack_require__(6197);__webpack_require__(4979);__webpack_require__(1678);__webpack_require__(4603);__webpack_require__(7566);__webpack_require__(8721);/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(globalThis,()=>{return/******/(()=>{// webpackBootstrap
/******/"use strict";/******/var __webpack_modules__=[/* 0 */,(/* 1 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.VerbosityLevel=exports.Util=exports.UnknownErrorException=exports.UnexpectedResponseException=exports.TextRenderingMode=exports.RenderingIntentFlag=exports.PromiseCapability=exports.PermissionFlag=exports.PasswordResponses=exports.PasswordException=exports.PageActionEventType=exports.OPS=exports.MissingPDFException=exports.MAX_IMAGE_SIZE_TO_CACHE=exports.LINE_FACTOR=exports.LINE_DESCENT_FACTOR=exports.InvalidPDFException=exports.ImageKind=exports.IDENTITY_MATRIX=exports.FormatError=exports.FeatureTest=exports.FONT_IDENTITY_MATRIX=exports.DocumentActionEventType=exports.CMapCompressionType=exports.BaseException=exports.BASELINE_FACTOR=exports.AnnotationType=exports.AnnotationStateModelType=exports.AnnotationReviewState=exports.AnnotationReplyType=exports.AnnotationMode=exports.AnnotationMarkedState=exports.AnnotationFlag=exports.AnnotationFieldFlag=exports.AnnotationEditorType=exports.AnnotationEditorPrefix=exports.AnnotationEditorParamsType=exports.AnnotationBorderStyleType=exports.AnnotationActionEventType=exports.AbortException=void 0;exports.assert=assert;exports.bytesToString=bytesToString;exports.createValidAbsoluteUrl=createValidAbsoluteUrl;exports.getModificationDate=getModificationDate;exports.getVerbosityLevel=getVerbosityLevel;exports.info=info;exports.isArrayBuffer=isArrayBuffer;exports.isArrayEqual=isArrayEqual;exports.normalizeUnicode=normalizeUnicode;exports.objectFromMap=objectFromMap;exports.objectSize=objectSize;exports.setVerbosityLevel=setVerbosityLevel;exports.shadow=shadow;exports.string32=string32;exports.stringToBytes=stringToBytes;exports.stringToPDFString=stringToPDFString;exports.stringToUTF8String=stringToUTF8String;exports.unreachable=unreachable;exports.utf8StringToString=utf8StringToString;exports.warn=warn;;const IDENTITY_MATRIX=[1,0,0,1,0,0];exports.IDENTITY_MATRIX=IDENTITY_MATRIX;const FONT_IDENTITY_MATRIX=[0.001,0,0,0.001,0,0];exports.FONT_IDENTITY_MATRIX=FONT_IDENTITY_MATRIX;const MAX_IMAGE_SIZE_TO_CACHE=10e6;exports.MAX_IMAGE_SIZE_TO_CACHE=MAX_IMAGE_SIZE_TO_CACHE;const LINE_FACTOR=1.35;exports.LINE_FACTOR=LINE_FACTOR;const LINE_DESCENT_FACTOR=0.35;exports.LINE_DESCENT_FACTOR=LINE_DESCENT_FACTOR;const BASELINE_FACTOR=LINE_DESCENT_FACTOR/LINE_FACTOR;exports.BASELINE_FACTOR=BASELINE_FACTOR;const RenderingIntentFlag={ANY:0x01,DISPLAY:0x02,PRINT:0x04,SAVE:0x08,ANNOTATIONS_FORMS:0x10,ANNOTATIONS_STORAGE:0x20,ANNOTATIONS_DISABLE:0x40,OPLIST:0x100};exports.RenderingIntentFlag=RenderingIntentFlag;const AnnotationMode={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3};exports.AnnotationMode=AnnotationMode;const AnnotationEditorPrefix="pdfjs_internal_editor_";exports.AnnotationEditorPrefix=AnnotationEditorPrefix;const AnnotationEditorType={DISABLE:-1,NONE:0,FREETEXT:3,INK:15};exports.AnnotationEditorType=AnnotationEditorType;const AnnotationEditorParamsType={FREETEXT_SIZE:1,FREETEXT_COLOR:2,FREETEXT_OPACITY:3,INK_COLOR:11,INK_THICKNESS:12,INK_OPACITY:13};exports.AnnotationEditorParamsType=AnnotationEditorParamsType;const PermissionFlag={PRINT:0x04,MODIFY_CONTENTS:0x08,COPY:0x10,MODIFY_ANNOTATIONS:0x20,FILL_INTERACTIVE_FORMS:0x100,COPY_FOR_ACCESSIBILITY:0x200,ASSEMBLE:0x400,PRINT_HIGH_QUALITY:0x800};exports.PermissionFlag=PermissionFlag;const TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};exports.TextRenderingMode=TextRenderingMode;const ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};exports.ImageKind=ImageKind;const AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};exports.AnnotationType=AnnotationType;const AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};exports.AnnotationStateModelType=AnnotationStateModelType;const AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};exports.AnnotationMarkedState=AnnotationMarkedState;const AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};exports.AnnotationReviewState=AnnotationReviewState;const AnnotationReplyType={GROUP:"Group",REPLY:"R"};exports.AnnotationReplyType=AnnotationReplyType;const AnnotationFlag={INVISIBLE:0x01,HIDDEN:0x02,PRINT:0x04,NOZOOM:0x08,NOROTATE:0x10,NOVIEW:0x20,READONLY:0x40,LOCKED:0x80,TOGGLENOVIEW:0x100,LOCKEDCONTENTS:0x200};exports.AnnotationFlag=AnnotationFlag;const AnnotationFieldFlag={READONLY:0x0000001,REQUIRED:0x0000002,NOEXPORT:0x0000004,MULTILINE:0x0001000,PASSWORD:0x0002000,NOTOGGLETOOFF:0x0004000,RADIO:0x0008000,PUSHBUTTON:0x0010000,COMBO:0x0020000,EDIT:0x0040000,SORT:0x0080000,FILESELECT:0x0100000,MULTISELECT:0x0200000,DONOTSPELLCHECK:0x0400000,DONOTSCROLL:0x0800000,COMB:0x1000000,RICHTEXT:0x2000000,RADIOSINUNISON:0x2000000,COMMITONSELCHANGE:0x4000000};exports.AnnotationFieldFlag=AnnotationFieldFlag;const AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};exports.AnnotationBorderStyleType=AnnotationBorderStyleType;const AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"};exports.AnnotationActionEventType=AnnotationActionEventType;const DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"};exports.DocumentActionEventType=DocumentActionEventType;const PageActionEventType={O:"PageOpen",C:"PageClose"};exports.PageActionEventType=PageActionEventType;const VerbosityLevel={ERRORS:0,WARNINGS:1,INFOS:5};exports.VerbosityLevel=VerbosityLevel;const CMapCompressionType={NONE:0,BINARY:1};exports.CMapCompressionType=CMapCompressionType;const OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotation:80,endAnnotation:81,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};exports.OPS=OPS;const PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};exports.PasswordResponses=PasswordResponses;let verbosity=VerbosityLevel.WARNINGS;function setVerbosityLevel(level){if(Number.isInteger(level)){verbosity=level;}}function getVerbosityLevel(){return verbosity;}function info(msg){if(verbosity>=VerbosityLevel.INFOS){console.log(`Info: ${msg}`);}}function warn(msg){if(verbosity>=VerbosityLevel.WARNINGS){console.log(`Warning: ${msg}`);}}function unreachable(msg){throw new Error(msg);}function assert(cond,msg){if(!cond){unreachable(msg);}}function _isValidProtocol(url){switch(url?.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return true;default:return false;}}function createValidAbsoluteUrl(url,baseUrl=null,options=null){if(!url){return null;}try{if(options&&typeof url==="string"){if(options.addDefaultProtocol&&url.startsWith("www.")){const dots=url.match(/\./g);if(dots?.length>=2){url=`http://${url}`;}}if(options.tryConvertEncoding){try{url=stringToUTF8String(url);}catch(ex){}}}const absoluteUrl=baseUrl?new URL(url,baseUrl):new URL(url);if(_isValidProtocol(absoluteUrl)){return absoluteUrl;}}catch(ex){}return null;}function shadow(obj,prop,value,nonSerializable=false){Object.defineProperty(obj,prop,{value,enumerable:!nonSerializable,configurable:true,writable:false});return value;}const BaseException=function BaseExceptionClosure(){function BaseException(message,name){if(this.constructor===BaseException){unreachable("Cannot initialize BaseException.");}this.message=message;this.name=name;}BaseException.prototype=new Error();BaseException.constructor=BaseException;return BaseException;}();exports.BaseException=BaseException;class PasswordException extends BaseException{constructor(msg,code){super(msg,"PasswordException");this.code=code;}}exports.PasswordException=PasswordException;class UnknownErrorException extends BaseException{constructor(msg,details){super(msg,"UnknownErrorException");this.details=details;}}exports.UnknownErrorException=UnknownErrorException;class InvalidPDFException extends BaseException{constructor(msg){super(msg,"InvalidPDFException");}}exports.InvalidPDFException=InvalidPDFException;class MissingPDFException extends BaseException{constructor(msg){super(msg,"MissingPDFException");}}exports.MissingPDFException=MissingPDFException;class UnexpectedResponseException extends BaseException{constructor(msg,status){super(msg,"UnexpectedResponseException");this.status=status;}}exports.UnexpectedResponseException=UnexpectedResponseException;class FormatError extends BaseException{constructor(msg){super(msg,"FormatError");}}exports.FormatError=FormatError;class AbortException extends BaseException{constructor(msg){super(msg,"AbortException");}}exports.AbortException=AbortException;function bytesToString(bytes){if(typeof bytes!=="object"||bytes?.length===undefined){unreachable("Invalid argument for bytesToString");}const length=bytes.length;const MAX_ARGUMENT_COUNT=8192;if(length<MAX_ARGUMENT_COUNT){return String.fromCharCode.apply(null,bytes);}const strBuf=[];for(let i=0;i<length;i+=MAX_ARGUMENT_COUNT){const chunkEnd=Math.min(i+MAX_ARGUMENT_COUNT,length);const chunk=bytes.subarray(i,chunkEnd);strBuf.push(String.fromCharCode.apply(null,chunk));}return strBuf.join("");}function stringToBytes(str){if(typeof str!=="string"){unreachable("Invalid argument for stringToBytes");}const length=str.length;const bytes=new Uint8Array(length);for(let i=0;i<length;++i){bytes[i]=str.charCodeAt(i)&0xff;}return bytes;}function string32(value){return String.fromCharCode(value>>24&0xff,value>>16&0xff,value>>8&0xff,value&0xff);}function objectSize(obj){return Object.keys(obj).length;}function objectFromMap(map){const obj=Object.create(null);for(const[key,value]of map){obj[key]=value;}return obj;}function isLittleEndian(){const buffer8=new Uint8Array(4);buffer8[0]=1;const view32=new Uint32Array(buffer8.buffer,0,1);return view32[0]===1;}function isEvalSupported(){try{new Function("");return true;}catch(e){return false;}}class FeatureTest{static get isLittleEndian(){return shadow(this,"isLittleEndian",isLittleEndian());}static get isEvalSupported(){return shadow(this,"isEvalSupported",isEvalSupported());}static get isOffscreenCanvasSupported(){return shadow(this,"isOffscreenCanvasSupported",typeof OffscreenCanvas!=="undefined");}static get platform(){if(typeof navigator==="undefined"){return shadow(this,"platform",{isWin:false,isMac:false});}return shadow(this,"platform",{isWin:navigator.platform.includes("Win"),isMac:navigator.platform.includes("Mac")});}}exports.FeatureTest=FeatureTest;const hexNumbers=[...Array(256).keys()].map(n=>n.toString(16).padStart(2,"0"));class Util{static makeHexColor(r,g,b){return`#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;}static scaleMinMax(transform,minMax){let temp;if(transform[0]){if(transform[0]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[0];minMax[1]*=transform[0];if(transform[3]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[3];minMax[3]*=transform[3];}else{temp=minMax[0];minMax[0]=minMax[2];minMax[2]=temp;temp=minMax[1];minMax[1]=minMax[3];minMax[3]=temp;if(transform[1]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[1];minMax[3]*=transform[1];if(transform[2]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[2];minMax[1]*=transform[2];}minMax[0]+=transform[4];minMax[1]+=transform[4];minMax[2]+=transform[5];minMax[3]+=transform[5];}static transform(m1,m2){return[m1[0]*m2[0]+m1[2]*m2[1],m1[1]*m2[0]+m1[3]*m2[1],m1[0]*m2[2]+m1[2]*m2[3],m1[1]*m2[2]+m1[3]*m2[3],m1[0]*m2[4]+m1[2]*m2[5]+m1[4],m1[1]*m2[4]+m1[3]*m2[5]+m1[5]];}static applyTransform(p,m){const xt=p[0]*m[0]+p[1]*m[2]+m[4];const yt=p[0]*m[1]+p[1]*m[3]+m[5];return[xt,yt];}static applyInverseTransform(p,m){const d=m[0]*m[3]-m[1]*m[2];const xt=(p[0]*m[3]-p[1]*m[2]+m[2]*m[5]-m[4]*m[3])/d;const yt=(-p[0]*m[1]+p[1]*m[0]+m[4]*m[1]-m[5]*m[0])/d;return[xt,yt];}static getAxialAlignedBoundingBox(r,m){const p1=Util.applyTransform(r,m);const p2=Util.applyTransform(r.slice(2,4),m);const p3=Util.applyTransform([r[0],r[3]],m);const p4=Util.applyTransform([r[2],r[1]],m);return[Math.min(p1[0],p2[0],p3[0],p4[0]),Math.min(p1[1],p2[1],p3[1],p4[1]),Math.max(p1[0],p2[0],p3[0],p4[0]),Math.max(p1[1],p2[1],p3[1],p4[1])];}static inverseTransform(m){const d=m[0]*m[3]-m[1]*m[2];return[m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[4]*m[3])/d,(m[4]*m[1]-m[5]*m[0])/d];}static singularValueDecompose2dScale(m){const transpose=[m[0],m[2],m[1],m[3]];const a=m[0]*transpose[0]+m[1]*transpose[2];const b=m[0]*transpose[1]+m[1]*transpose[3];const c=m[2]*transpose[0]+m[3]*transpose[2];const d=m[2]*transpose[1]+m[3]*transpose[3];const first=(a+d)/2;const second=Math.sqrt((a+d)**2-4*(a*d-c*b))/2;const sx=first+second||1;const sy=first-second||1;return[Math.sqrt(sx),Math.sqrt(sy)];}static normalizeRect(rect){const r=rect.slice(0);if(rect[0]>rect[2]){r[0]=rect[2];r[2]=rect[0];}if(rect[1]>rect[3]){r[1]=rect[3];r[3]=rect[1];}return r;}static intersect(rect1,rect2){const xLow=Math.max(Math.min(rect1[0],rect1[2]),Math.min(rect2[0],rect2[2]));const xHigh=Math.min(Math.max(rect1[0],rect1[2]),Math.max(rect2[0],rect2[2]));if(xLow>xHigh){return null;}const yLow=Math.max(Math.min(rect1[1],rect1[3]),Math.min(rect2[1],rect2[3]));const yHigh=Math.min(Math.max(rect1[1],rect1[3]),Math.max(rect2[1],rect2[3]));if(yLow>yHigh){return null;}return[xLow,yLow,xHigh,yHigh];}static bezierBoundingBox(x0,y0,x1,y1,x2,y2,x3,y3){const tvalues=[],bounds=[[],[]];let a,b,c,t,t1,t2,b2ac,sqrtb2ac;for(let i=0;i<2;++i){if(i===0){b=6*x0-12*x1+6*x2;a=-3*x0+9*x1-9*x2+3*x3;c=3*x1-3*x0;}else{b=6*y0-12*y1+6*y2;a=-3*y0+9*y1-9*y2+3*y3;c=3*y1-3*y0;}if(Math.abs(a)<1e-12){if(Math.abs(b)<1e-12){continue;}t=-c/b;if(0<t&&t<1){tvalues.push(t);}continue;}b2ac=b*b-4*c*a;sqrtb2ac=Math.sqrt(b2ac);if(b2ac<0){continue;}t1=(-b+sqrtb2ac)/(2*a);if(0<t1&&t1<1){tvalues.push(t1);}t2=(-b-sqrtb2ac)/(2*a);if(0<t2&&t2<1){tvalues.push(t2);}}let j=tvalues.length,mt;const jlen=j;while(j--){t=tvalues[j];mt=1-t;bounds[0][j]=mt*mt*mt*x0+3*mt*mt*t*x1+3*mt*t*t*x2+t*t*t*x3;bounds[1][j]=mt*mt*mt*y0+3*mt*mt*t*y1+3*mt*t*t*y2+t*t*t*y3;}bounds[0][jlen]=x0;bounds[1][jlen]=y0;bounds[0][jlen+1]=x3;bounds[1][jlen+1]=y3;bounds[0].length=bounds[1].length=jlen+2;return[Math.min(...bounds[0]),Math.min(...bounds[1]),Math.max(...bounds[0]),Math.max(...bounds[1])];}}exports.Util=Util;const PDFStringTranslateTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2d8,0x2c7,0x2c6,0x2d9,0x2dd,0x2db,0x2da,0x2dc,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2022,0x2020,0x2021,0x2026,0x2014,0x2013,0x192,0x2044,0x2039,0x203a,0x2212,0x2030,0x201e,0x201c,0x201d,0x2018,0x2019,0x201a,0x2122,0xfb01,0xfb02,0x141,0x152,0x160,0x178,0x17d,0x131,0x142,0x153,0x161,0x17e,0,0x20ac];function stringToPDFString(str){if(str[0]>="\xEF"){let encoding;if(str[0]==="\xFE"&&str[1]==="\xFF"){encoding="utf-16be";}else if(str[0]==="\xFF"&&str[1]==="\xFE"){encoding="utf-16le";}else if(str[0]==="\xEF"&&str[1]==="\xBB"&&str[2]==="\xBF"){encoding="utf-8";}if(encoding){try{const decoder=new TextDecoder(encoding,{fatal:true});const buffer=stringToBytes(str);return decoder.decode(buffer);}catch(ex){warn(`stringToPDFString: "${ex}".`);}}}const strBuf=[];for(let i=0,ii=str.length;i<ii;i++){const code=PDFStringTranslateTable[str.charCodeAt(i)];strBuf.push(code?String.fromCharCode(code):str.charAt(i));}return strBuf.join("");}function stringToUTF8String(str){return decodeURIComponent(escape(str));}function utf8StringToString(str){return unescape(encodeURIComponent(str));}function isArrayBuffer(v){return typeof v==="object"&&v?.byteLength!==undefined;}function isArrayEqual(arr1,arr2){if(arr1.length!==arr2.length){return false;}for(let i=0,ii=arr1.length;i<ii;i++){if(arr1[i]!==arr2[i]){return false;}}return true;}function getModificationDate(date=new Date()){const buffer=[date.getUTCFullYear().toString(),(date.getUTCMonth()+1).toString().padStart(2,"0"),date.getUTCDate().toString().padStart(2,"0"),date.getUTCHours().toString().padStart(2,"0"),date.getUTCMinutes().toString().padStart(2,"0"),date.getUTCSeconds().toString().padStart(2,"0")];return buffer.join("");}var _settled=/*#__PURE__*/_classPrivateFieldLooseKey("settled");class PromiseCapability{constructor(){Object.defineProperty(this,_settled,{writable:true,value:false});this.promise=new Promise((resolve,reject)=>{this.resolve=data=>{_classPrivateFieldLooseBase(this,_settled)[_settled]=true;resolve(data);};this.reject=reason=>{_classPrivateFieldLooseBase(this,_settled)[_settled]=true;reject(reason);};});}get settled(){return _classPrivateFieldLooseBase(this,_settled)[_settled];}}exports.PromiseCapability=PromiseCapability;let NormalizeRegex=null;let NormalizationMap=null;function normalizeUnicode(str){if(!NormalizeRegex){NormalizeRegex=/([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;NormalizationMap=new Map([["ﬅ","ſt"]]);}return str.replaceAll(NormalizeRegex,(_,p1,p2)=>{return p1?p1.normalize("NFKC"):NormalizationMap.get(p2);});}/***/}),(/* 2 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.build=exports.RenderTask=exports.PDFWorkerUtil=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDocumentLoadingTask=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultStandardFontDataFactory=exports.DefaultFilterFactory=exports.DefaultCanvasFactory=exports.DefaultCMapReaderFactory=void 0;exports.getDocument=getDocument;exports.version=void 0;var _util=__w_pdfjs_require__(1);var _annotation_storage=__w_pdfjs_require__(3);var _display_utils=__w_pdfjs_require__(6);var _font_loader=__w_pdfjs_require__(9);var _canvas=__w_pdfjs_require__(11);var _worker_options=__w_pdfjs_require__(14);var _is_node=__w_pdfjs_require__(10);var _message_handler=__w_pdfjs_require__(15);var _metadata=__w_pdfjs_require__(16);var _optional_content_config=__w_pdfjs_require__(17);var _transport_stream=__w_pdfjs_require__(18);var _xfa_text=__w_pdfjs_require__(19);const DEFAULT_RANGE_CHUNK_SIZE=65536;const RENDERING_CANCELLED_TIMEOUT=100;const DELAYED_CLEANUP_TIMEOUT=5000;let DefaultCanvasFactory=_display_utils.DOMCanvasFactory;exports.DefaultCanvasFactory=DefaultCanvasFactory;let DefaultCMapReaderFactory=_display_utils.DOMCMapReaderFactory;exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory;let DefaultFilterFactory=_display_utils.DOMFilterFactory;exports.DefaultFilterFactory=DefaultFilterFactory;let DefaultStandardFontDataFactory=_display_utils.DOMStandardFontDataFactory;exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory;if(_is_node.isNodeJS){const{NodeCanvasFactory,NodeCMapReaderFactory,NodeFilterFactory,NodeStandardFontDataFactory}=__w_pdfjs_require__(20);exports.DefaultCanvasFactory=DefaultCanvasFactory=NodeCanvasFactory;exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory=NodeCMapReaderFactory;exports.DefaultFilterFactory=DefaultFilterFactory=NodeFilterFactory;exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory=NodeStandardFontDataFactory;}let createPDFNetworkStream;{if(_is_node.isNodeJS){const{PDFNodeStream}=__w_pdfjs_require__(21);createPDFNetworkStream=params=>{return new PDFNodeStream(params);};}else{const{PDFNetworkStream}=__w_pdfjs_require__(24);const{PDFFetchStream}=__w_pdfjs_require__(25);createPDFNetworkStream=params=>{return(0,_display_utils.isValidFetchUrl)(params.url)?new PDFFetchStream(params):new PDFNetworkStream(params);};}}function getDocument(src){if(typeof src==="string"||src instanceof URL){src={url:src};}else if((0,_util.isArrayBuffer)(src)){src={data:src};}if(typeof src!=="object"){throw new Error("Invalid parameter in getDocument, need parameter object.");}if(!src.url&&!src.data&&!src.range){throw new Error("Invalid parameter object: need either .data, .range or .url");}const task=new PDFDocumentLoadingTask();const{docId}=task;const url=src.url?getUrlProp(src.url):null;const data=src.data?getDataProp(src.data):null;const httpHeaders=src.httpHeaders||null;const withCredentials=src.withCredentials===true;const password=src.password??null;const rangeTransport=src.range instanceof PDFDataRangeTransport?src.range:null;const rangeChunkSize=Number.isInteger(src.rangeChunkSize)&&src.rangeChunkSize>0?src.rangeChunkSize:DEFAULT_RANGE_CHUNK_SIZE;let worker=src.worker instanceof PDFWorker?src.worker:null;const verbosity=src.verbosity;const docBaseUrl=typeof src.docBaseUrl==="string"&&!(0,_display_utils.isDataScheme)(src.docBaseUrl)?src.docBaseUrl:null;const cMapUrl=typeof src.cMapUrl==="string"?src.cMapUrl:null;const cMapPacked=src.cMapPacked!==false;const CMapReaderFactory=src.CMapReaderFactory||DefaultCMapReaderFactory;const standardFontDataUrl=typeof src.standardFontDataUrl==="string"?src.standardFontDataUrl:null;const StandardFontDataFactory=src.StandardFontDataFactory||DefaultStandardFontDataFactory;const ignoreErrors=src.stopAtErrors!==true;const maxImageSize=Number.isInteger(src.maxImageSize)&&src.maxImageSize>-1?src.maxImageSize:-1;const isEvalSupported=src.isEvalSupported!==false;const isOffscreenCanvasSupported=typeof src.isOffscreenCanvasSupported==="boolean"?src.isOffscreenCanvasSupported:!_is_node.isNodeJS;const canvasMaxAreaInBytes=Number.isInteger(src.canvasMaxAreaInBytes)?src.canvasMaxAreaInBytes:-1;const disableFontFace=typeof src.disableFontFace==="boolean"?src.disableFontFace:_is_node.isNodeJS;const fontExtraProperties=src.fontExtraProperties===true;const enableXfa=src.enableXfa===true;const ownerDocument=src.ownerDocument||globalThis.document;const disableRange=src.disableRange===true;const disableStream=src.disableStream===true;const disableAutoFetch=src.disableAutoFetch===true;const pdfBug=src.pdfBug===true;const length=rangeTransport?rangeTransport.length:src.length??NaN;const useSystemFonts=typeof src.useSystemFonts==="boolean"?src.useSystemFonts:!_is_node.isNodeJS&&!disableFontFace;const useWorkerFetch=typeof src.useWorkerFetch==="boolean"?src.useWorkerFetch:CMapReaderFactory===_display_utils.DOMCMapReaderFactory&&StandardFontDataFactory===_display_utils.DOMStandardFontDataFactory&&(0,_display_utils.isValidFetchUrl)(cMapUrl,document.baseURI)&&(0,_display_utils.isValidFetchUrl)(standardFontDataUrl,document.baseURI);const canvasFactory=src.canvasFactory||new DefaultCanvasFactory({ownerDocument});const filterFactory=src.filterFactory||new DefaultFilterFactory({docId,ownerDocument});const styleElement=null;(0,_util.setVerbosityLevel)(verbosity);const transportFactory={canvasFactory,filterFactory};if(!useWorkerFetch){transportFactory.cMapReaderFactory=new CMapReaderFactory({baseUrl:cMapUrl,isCompressed:cMapPacked});transportFactory.standardFontDataFactory=new StandardFontDataFactory({baseUrl:standardFontDataUrl});}if(!worker){const workerParams={verbosity,port:_worker_options.GlobalWorkerOptions.workerPort};worker=workerParams.port?PDFWorker.fromPort(workerParams):new PDFWorker(workerParams);task._worker=worker;}const fetchDocParams={docId,apiVersion:'3.6.172',data,password,disableAutoFetch,rangeChunkSize,length,docBaseUrl,enableXfa,evaluatorOptions:{maxImageSize,disableFontFace,ignoreErrors,isEvalSupported,isOffscreenCanvasSupported,canvasMaxAreaInBytes,fontExtraProperties,useSystemFonts,cMapUrl:useWorkerFetch?cMapUrl:null,standardFontDataUrl:useWorkerFetch?standardFontDataUrl:null}};const transportParams={ignoreErrors,isEvalSupported,disableFontFace,fontExtraProperties,enableXfa,ownerDocument,disableAutoFetch,pdfBug,styleElement};worker.promise.then(function(){if(task.destroyed){throw new Error("Loading aborted");}const workerIdPromise=_fetchDocument(worker,fetchDocParams);const networkStreamPromise=new Promise(function(resolve){let networkStream;if(rangeTransport){networkStream=new _transport_stream.PDFDataTransportStream({length,initialData:rangeTransport.initialData,progressiveDone:rangeTransport.progressiveDone,contentDispositionFilename:rangeTransport.contentDispositionFilename,disableRange,disableStream},rangeTransport);}else if(!data){networkStream=createPDFNetworkStream({url,length,httpHeaders,withCredentials,rangeChunkSize,disableRange,disableStream});}resolve(networkStream);});return Promise.all([workerIdPromise,networkStreamPromise]).then(function([workerId,networkStream]){if(task.destroyed){throw new Error("Loading aborted");}const messageHandler=new _message_handler.MessageHandler(docId,workerId,worker.port);const transport=new WorkerTransport(messageHandler,task,networkStream,transportParams,transportFactory);task._transport=transport;messageHandler.send("Ready",null);});}).catch(task._capability.reject);return task;}async function _fetchDocument(worker,source){if(worker.destroyed){throw new Error("Worker was destroyed");}const workerId=await worker.messageHandler.sendWithPromise("GetDocRequest",source,source.data?[source.data.buffer]:null);if(worker.destroyed){throw new Error("Worker was destroyed");}return workerId;}function getUrlProp(val){if(val instanceof URL){return val.href;}try{return new URL(val,window.location).href;}catch(ex){if(_is_node.isNodeJS&&typeof val==="string"){return val;}}throw new Error("Invalid PDF url data: "+"either string or URL-object is expected in the url property.");}function getDataProp(val){if(_is_node.isNodeJS&&typeof Buffer!=="undefined"&&val instanceof Buffer){(0,_display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`.");return new Uint8Array(val);}if(val instanceof Uint8Array&&val.byteLength===val.buffer.byteLength){return val;}if(typeof val==="string"){return(0,_util.stringToBytes)(val);}if(typeof val==="object"&&!isNaN(val?.length)||(0,_util.isArrayBuffer)(val)){return new Uint8Array(val);}throw new Error("Invalid PDF binary data: either TypedArray, "+"string, or array-like object is expected in the data property.");}var _docId=/*#__PURE__*/_classPrivateFieldLooseKey("docId");class PDFDocumentLoadingTask{constructor(){this._capability=new _util.PromiseCapability();this._transport=null;this._worker=null;this.docId=`d${_classPrivateFieldLooseBase(PDFDocumentLoadingTask,_docId)[_docId]++}`;this.destroyed=false;this.onPassword=null;this.onProgress=null;}get promise(){return this._capability.promise;}async destroy(){this.destroyed=true;await this._transport?.destroy();this._transport=null;if(this._worker){this._worker.destroy();this._worker=null;}}}Object.defineProperty(PDFDocumentLoadingTask,_docId,{writable:true,value:0});exports.PDFDocumentLoadingTask=PDFDocumentLoadingTask;class PDFDataRangeTransport{constructor(length,initialData,progressiveDone=false,contentDispositionFilename=null){this.length=length;this.initialData=initialData;this.progressiveDone=progressiveDone;this.contentDispositionFilename=contentDispositionFilename;this._rangeListeners=[];this._progressListeners=[];this._progressiveReadListeners=[];this._progressiveDoneListeners=[];this._readyCapability=new _util.PromiseCapability();}addRangeListener(listener){this._rangeListeners.push(listener);}addProgressListener(listener){this._progressListeners.push(listener);}addProgressiveReadListener(listener){this._progressiveReadListeners.push(listener);}addProgressiveDoneListener(listener){this._progressiveDoneListeners.push(listener);}onDataRange(begin,chunk){for(const listener of this._rangeListeners){listener(begin,chunk);}}onDataProgress(loaded,total){this._readyCapability.promise.then(()=>{for(const listener of this._progressListeners){listener(loaded,total);}});}onDataProgressiveRead(chunk){this._readyCapability.promise.then(()=>{for(const listener of this._progressiveReadListeners){listener(chunk);}});}onDataProgressiveDone(){this._readyCapability.promise.then(()=>{for(const listener of this._progressiveDoneListeners){listener();}});}transportReady(){this._readyCapability.resolve();}requestDataRange(begin,end){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");}abort(){}}exports.PDFDataRangeTransport=PDFDataRangeTransport;class PDFDocumentProxy{constructor(pdfInfo,transport){this._pdfInfo=pdfInfo;this._transport=transport;}get annotationStorage(){return this._transport.annotationStorage;}get filterFactory(){return this._transport.filterFactory;}get numPages(){return this._pdfInfo.numPages;}get fingerprints(){return this._pdfInfo.fingerprints;}get isPureXfa(){return(0,_util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa);}get allXfaHtml(){return this._transport._htmlForXfa;}getPage(pageNumber){return this._transport.getPage(pageNumber);}getPageIndex(ref){return this._transport.getPageIndex(ref);}getDestinations(){return this._transport.getDestinations();}getDestination(id){return this._transport.getDestination(id);}getPageLabels(){return this._transport.getPageLabels();}getPageLayout(){return this._transport.getPageLayout();}getPageMode(){return this._transport.getPageMode();}getViewerPreferences(){return this._transport.getViewerPreferences();}getOpenAction(){return this._transport.getOpenAction();}getAttachments(){return this._transport.getAttachments();}getJavaScript(){return this._transport.getJavaScript();}getJSActions(){return this._transport.getDocJSActions();}getOutline(){return this._transport.getOutline();}getOptionalContentConfig(){return this._transport.getOptionalContentConfig();}getPermissions(){return this._transport.getPermissions();}getMetadata(){return this._transport.getMetadata();}getMarkInfo(){return this._transport.getMarkInfo();}getData(){return this._transport.getData();}saveDocument(){return this._transport.saveDocument();}getDownloadInfo(){return this._transport.downloadInfoCapability.promise;}cleanup(keepLoadedFonts=false){return this._transport.startCleanup(keepLoadedFonts||this.isPureXfa);}destroy(){return this.loadingTask.destroy();}get loadingParams(){return this._transport.loadingParams;}get loadingTask(){return this._transport.loadingTask;}getFieldObjects(){return this._transport.getFieldObjects();}hasJSActions(){return this._transport.hasJSActions();}getCalculationOrderIds(){return this._transport.getCalculationOrderIds();}}exports.PDFDocumentProxy=PDFDocumentProxy;var _delayedCleanupTimeout=/*#__PURE__*/_classPrivateFieldLooseKey("delayedCleanupTimeout");var _pendingCleanup=/*#__PURE__*/_classPrivateFieldLooseKey("pendingCleanup");var _tryCleanup=/*#__PURE__*/_classPrivateFieldLooseKey("tryCleanup");var _abortDelayedCleanup=/*#__PURE__*/_classPrivateFieldLooseKey("abortDelayedCleanup");class PDFPageProxy{constructor(pageIndex,pageInfo,transport,pdfBug=false){Object.defineProperty(this,_abortDelayedCleanup,{value:_abortDelayedCleanup2});Object.defineProperty(this,_tryCleanup,{value:_tryCleanup2});Object.defineProperty(this,_delayedCleanupTimeout,{writable:true,value:null});Object.defineProperty(this,_pendingCleanup,{writable:true,value:false});this._pageIndex=pageIndex;this._pageInfo=pageInfo;this._transport=transport;this._stats=pdfBug?new _display_utils.StatTimer():null;this._pdfBug=pdfBug;this.commonObjs=transport.commonObjs;this.objs=new PDFObjects();this._maybeCleanupAfterRender=false;this._intentStates=new Map();this.destroyed=false;}get pageNumber(){return this._pageIndex+1;}get rotate(){return this._pageInfo.rotate;}get ref(){return this._pageInfo.ref;}get userUnit(){return this._pageInfo.userUnit;}get view(){return this._pageInfo.view;}getViewport({scale,rotation=this.rotate,offsetX=0,offsetY=0,dontFlip=false}={}){return new _display_utils.PageViewport({viewBox:this.view,scale,rotation,offsetX,offsetY,dontFlip});}getAnnotations({intent="display"}={}){const intentArgs=this._transport.getRenderingIntent(intent);return this._transport.getAnnotations(this._pageIndex,intentArgs.renderingIntent);}getJSActions(){return this._transport.getPageJSActions(this._pageIndex);}get isPureXfa(){return(0,_util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa);}async getXfa(){return this._transport._htmlForXfa?.children[this._pageIndex]||null;}render({canvasContext,viewport,intent="display",annotationMode=_util.AnnotationMode.ENABLE,transform=null,background=null,optionalContentConfigPromise=null,annotationCanvasMap=null,pageColors=null,printAnnotationStorage=null}){if(arguments[0]?.canvasFactory){throw new Error("render no longer accepts the `canvasFactory`-option, "+"please pass it to the `getDocument`-function instead.");}this._stats?.time("Overall");const intentArgs=this._transport.getRenderingIntent(intent,annotationMode,printAnnotationStorage);_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]=false;_classPrivateFieldLooseBase(this,_abortDelayedCleanup)[_abortDelayedCleanup]();if(!optionalContentConfigPromise){optionalContentConfigPromise=this._transport.getOptionalContentConfig();}let intentState=this._intentStates.get(intentArgs.cacheKey);if(!intentState){intentState=Object.create(null);this._intentStates.set(intentArgs.cacheKey,intentState);}if(intentState.streamReaderCancelTimeout){clearTimeout(intentState.streamReaderCancelTimeout);intentState.streamReaderCancelTimeout=null;}const intentPrint=!!(intentArgs.renderingIntent&_util.RenderingIntentFlag.PRINT);if(!intentState.displayReadyCapability){intentState.displayReadyCapability=new _util.PromiseCapability();intentState.operatorList={fnArray:[],argsArray:[],lastChunk:false,separateAnnots:null};this._stats?.time("Page Request");this._pumpOperatorList(intentArgs);}const complete=error=>{intentState.renderTasks.delete(internalRenderTask);if(this._maybeCleanupAfterRender||intentPrint){_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]=true;}_classPrivateFieldLooseBase(this,_tryCleanup)[_tryCleanup](!intentPrint);if(error){internalRenderTask.capability.reject(error);this._abortOperatorList({intentState,reason:error instanceof Error?error:new Error(error)});}else{internalRenderTask.capability.resolve();}this._stats?.timeEnd("Rendering");this._stats?.timeEnd("Overall");};const internalRenderTask=new InternalRenderTask({callback:complete,params:{canvasContext,viewport,transform,background},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap,operatorList:intentState.operatorList,pageIndex:this._pageIndex,canvasFactory:this._transport.canvasFactory,filterFactory:this._transport.filterFactory,useRequestAnimationFrame:!intentPrint,pdfBug:this._pdfBug,pageColors});(intentState.renderTasks||=new Set()).add(internalRenderTask);const renderTask=internalRenderTask.task;Promise.all([intentState.displayReadyCapability.promise,optionalContentConfigPromise]).then(([transparency,optionalContentConfig])=>{if(_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]){complete();return;}this._stats?.time("Rendering");internalRenderTask.initializeGraphics({transparency,optionalContentConfig});internalRenderTask.operatorListChanged();}).catch(complete);return renderTask;}getOperatorList({intent="display",annotationMode=_util.AnnotationMode.ENABLE,printAnnotationStorage=null}={}){function operatorListChanged(){if(intentState.operatorList.lastChunk){intentState.opListReadCapability.resolve(intentState.operatorList);intentState.renderTasks.delete(opListTask);}}const intentArgs=this._transport.getRenderingIntent(intent,annotationMode,printAnnotationStorage,true);let intentState=this._intentStates.get(intentArgs.cacheKey);if(!intentState){intentState=Object.create(null);this._intentStates.set(intentArgs.cacheKey,intentState);}let opListTask;if(!intentState.opListReadCapability){opListTask=Object.create(null);opListTask.operatorListChanged=operatorListChanged;intentState.opListReadCapability=new _util.PromiseCapability();(intentState.renderTasks||=new Set()).add(opListTask);intentState.operatorList={fnArray:[],argsArray:[],lastChunk:false,separateAnnots:null};this._stats?.time("Page Request");this._pumpOperatorList(intentArgs);}return intentState.opListReadCapability.promise;}streamTextContent({includeMarkedContent=false,disableNormalization=false}={}){const TEXT_CONTENT_CHUNK_SIZE=100;return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,includeMarkedContent:includeMarkedContent===true,disableNormalization:disableNormalization===true},{highWaterMark:TEXT_CONTENT_CHUNK_SIZE,size(textContent){return textContent.items.length;}});}getTextContent(params={}){if(this._transport._htmlForXfa){return this.getXfa().then(xfa=>{return _xfa_text.XfaText.textContent(xfa);});}const readableStream=this.streamTextContent(params);return new Promise(function(resolve,reject){function pump(){reader.read().then(function({value,done}){if(done){resolve(textContent);return;}Object.assign(textContent.styles,value.styles);textContent.items.push(...value.items);pump();},reject);}const reader=readableStream.getReader();const textContent={items:[],styles:Object.create(null)};pump();});}getStructTree(){return this._transport.getStructTree(this._pageIndex);}_destroy(){this.destroyed=true;const waitOn=[];for(const intentState of this._intentStates.values()){this._abortOperatorList({intentState,reason:new Error("Page was destroyed."),force:true});if(intentState.opListReadCapability){continue;}for(const internalRenderTask of intentState.renderTasks){waitOn.push(internalRenderTask.completed);internalRenderTask.cancel();}}this.objs.clear();_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]=false;_classPrivateFieldLooseBase(this,_abortDelayedCleanup)[_abortDelayedCleanup]();return Promise.all(waitOn);}cleanup(resetStats=false){_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]=true;const success=_classPrivateFieldLooseBase(this,_tryCleanup)[_tryCleanup](false);if(resetStats&&success){this._stats&&=new _display_utils.StatTimer();}return success;}_startRenderPage(transparency,cacheKey){const intentState=this._intentStates.get(cacheKey);if(!intentState){return;}this._stats?.timeEnd("Page Request");intentState.displayReadyCapability?.resolve(transparency);}_renderPageChunk(operatorListChunk,intentState){for(let i=0,ii=operatorListChunk.length;i<ii;i++){intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);}intentState.operatorList.lastChunk=operatorListChunk.lastChunk;intentState.operatorList.separateAnnots=operatorListChunk.separateAnnots;for(const internalRenderTask of intentState.renderTasks){internalRenderTask.operatorListChanged();}if(operatorListChunk.lastChunk){_classPrivateFieldLooseBase(this,_tryCleanup)[_tryCleanup](true);}}_pumpOperatorList({renderingIntent,cacheKey,annotationStorageMap}){const readableStream=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:renderingIntent,cacheKey,annotationStorage:annotationStorageMap});const reader=readableStream.getReader();const intentState=this._intentStates.get(cacheKey);intentState.streamReader=reader;const pump=()=>{reader.read().then(({value,done})=>{if(done){intentState.streamReader=null;return;}if(this._transport.destroyed){return;}this._renderPageChunk(value,intentState);pump();},reason=>{intentState.streamReader=null;if(this._transport.destroyed){return;}if(intentState.operatorList){intentState.operatorList.lastChunk=true;for(const internalRenderTask of intentState.renderTasks){internalRenderTask.operatorListChanged();}_classPrivateFieldLooseBase(this,_tryCleanup)[_tryCleanup](true);}if(intentState.displayReadyCapability){intentState.displayReadyCapability.reject(reason);}else if(intentState.opListReadCapability){intentState.opListReadCapability.reject(reason);}else{throw reason;}});};pump();}_abortOperatorList({intentState,reason,force=false}){if(!intentState.streamReader){return;}if(intentState.streamReaderCancelTimeout){clearTimeout(intentState.streamReaderCancelTimeout);intentState.streamReaderCancelTimeout=null;}if(!force){if(intentState.renderTasks.size>0){return;}if(reason instanceof _display_utils.RenderingCancelledException){let delay=RENDERING_CANCELLED_TIMEOUT;if(reason.extraDelay>0&&reason.extraDelay<1000){delay+=reason.extraDelay;}intentState.streamReaderCancelTimeout=setTimeout(()=>{intentState.streamReaderCancelTimeout=null;this._abortOperatorList({intentState,reason,force:true});},delay);return;}}intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(()=>{});intentState.streamReader=null;if(this._transport.destroyed){return;}for(const[curCacheKey,curIntentState]of this._intentStates){if(curIntentState===intentState){this._intentStates.delete(curCacheKey);break;}}this.cleanup();}get stats(){return this._stats;}}function _tryCleanup2(delayed=false){_classPrivateFieldLooseBase(this,_abortDelayedCleanup)[_abortDelayedCleanup]();if(!_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]){return false;}if(delayed){_classPrivateFieldLooseBase(this,_delayedCleanupTimeout)[_delayedCleanupTimeout]=setTimeout(()=>{_classPrivateFieldLooseBase(this,_delayedCleanupTimeout)[_delayedCleanupTimeout]=null;_classPrivateFieldLooseBase(this,_tryCleanup)[_tryCleanup](false);},DELAYED_CLEANUP_TIMEOUT);return false;}for(const{renderTasks,operatorList}of this._intentStates.values()){if(renderTasks.size>0||!operatorList.lastChunk){return false;}}this._intentStates.clear();this.objs.clear();_classPrivateFieldLooseBase(this,_pendingCleanup)[_pendingCleanup]=false;return true;}function _abortDelayedCleanup2(){if(_classPrivateFieldLooseBase(this,_delayedCleanupTimeout)[_delayedCleanupTimeout]){clearTimeout(_classPrivateFieldLooseBase(this,_delayedCleanupTimeout)[_delayedCleanupTimeout]);_classPrivateFieldLooseBase(this,_delayedCleanupTimeout)[_delayedCleanupTimeout]=null;}}exports.PDFPageProxy=PDFPageProxy;var _listeners=/*#__PURE__*/_classPrivateFieldLooseKey("listeners");var _deferred=/*#__PURE__*/_classPrivateFieldLooseKey("deferred");class LoopbackPort{constructor(){Object.defineProperty(this,_listeners,{writable:true,value:new Set()});Object.defineProperty(this,_deferred,{writable:true,value:Promise.resolve()});}postMessage(obj,transfer){const event={data:structuredClone(obj,transfer?{transfer}:null)};_classPrivateFieldLooseBase(this,_deferred)[_deferred].then(()=>{for(const listener of _classPrivateFieldLooseBase(this,_listeners)[_listeners]){listener.call(this,event);}});}addEventListener(name,listener){_classPrivateFieldLooseBase(this,_listeners)[_listeners].add(listener);}removeEventListener(name,listener){_classPrivateFieldLooseBase(this,_listeners)[_listeners].delete(listener);}terminate(){_classPrivateFieldLooseBase(this,_listeners)[_listeners].clear();}}exports.LoopbackPort=LoopbackPort;const PDFWorkerUtil={isWorkerDisabled:false,fallbackWorkerSrc:null,fakeWorkerId:0};exports.PDFWorkerUtil=PDFWorkerUtil;{if(_is_node.isNodeJS&&"function"==="function"){PDFWorkerUtil.isWorkerDisabled=true;PDFWorkerUtil.fallbackWorkerSrc="./pdf.worker.js";}else if(typeof document==="object"){const pdfjsFilePath=document?.currentScript?.src;if(pdfjsFilePath){PDFWorkerUtil.fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2");}}PDFWorkerUtil.isSameOrigin=function(baseUrl,otherUrl){let base;try{base=new URL(baseUrl);if(!base.origin||base.origin==="null"){return false;}}catch(e){return false;}const other=new URL(otherUrl,base);return base.origin===other.origin;};PDFWorkerUtil.createCDNWrapper=function(url){const wrapper=`importScripts("${url}");`;return URL.createObjectURL(new Blob([wrapper]));};}var _workerPorts=/*#__PURE__*/_classPrivateFieldLooseKey("workerPorts");class PDFWorker{constructor({name=null,port=null,verbosity=(0,_util.getVerbosityLevel)()}={}){if(port&&_classPrivateFieldLooseBase(PDFWorker,_workerPorts)[_workerPorts].has(port)){throw new Error("Cannot use more than one PDFWorker per port.");}this.name=name;this.destroyed=false;this.verbosity=verbosity;this._readyCapability=new _util.PromiseCapability();this._port=null;this._webWorker=null;this._messageHandler=null;if(port){_classPrivateFieldLooseBase(PDFWorker,_workerPorts)[_workerPorts].set(port,this);this._initializeFromPort(port);return;}this._initialize();}get promise(){return this._readyCapability.promise;}get port(){return this._port;}get messageHandler(){return this._messageHandler;}_initializeFromPort(port){this._port=port;this._messageHandler=new _message_handler.MessageHandler("main","worker",port);this._messageHandler.on("ready",function(){});this._readyCapability.resolve();this._messageHandler.send("configure",{verbosity:this.verbosity});}_initialize(){if(!PDFWorkerUtil.isWorkerDisabled&&!PDFWorker._mainThreadWorkerMessageHandler){let{workerSrc}=PDFWorker;try{if(!PDFWorkerUtil.isSameOrigin(window.location.href,workerSrc)){workerSrc=PDFWorkerUtil.createCDNWrapper(new URL(workerSrc,window.location).href);}const worker=new Worker(workerSrc);const messageHandler=new _message_handler.MessageHandler("main","worker",worker);const terminateEarly=()=>{worker.removeEventListener("error",onWorkerError);messageHandler.destroy();worker.terminate();if(this.destroyed){this._readyCapability.reject(new Error("Worker was destroyed"));}else{this._setupFakeWorker();}};const onWorkerError=()=>{if(!this._webWorker){terminateEarly();}};worker.addEventListener("error",onWorkerError);messageHandler.on("test",data=>{worker.removeEventListener("error",onWorkerError);if(this.destroyed){terminateEarly();return;}if(data){this._messageHandler=messageHandler;this._port=worker;this._webWorker=worker;this._readyCapability.resolve();messageHandler.send("configure",{verbosity:this.verbosity});}else{this._setupFakeWorker();messageHandler.destroy();worker.terminate();}});messageHandler.on("ready",data=>{worker.removeEventListener("error",onWorkerError);if(this.destroyed){terminateEarly();return;}try{sendTest();}catch(e){this._setupFakeWorker();}});const sendTest=()=>{const testObj=new Uint8Array();messageHandler.send("test",testObj,[testObj.buffer]);};sendTest();return;}catch(e){(0,_util.info)("The worker has been disabled.");}}this._setupFakeWorker();}_setupFakeWorker(){if(!PDFWorkerUtil.isWorkerDisabled){(0,_util.warn)("Setting up fake worker.");PDFWorkerUtil.isWorkerDisabled=true;}PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler=>{if(this.destroyed){this._readyCapability.reject(new Error("Worker was destroyed"));return;}const port=new LoopbackPort();this._port=port;const id=`fake${PDFWorkerUtil.fakeWorkerId++}`;const workerHandler=new _message_handler.MessageHandler(id+"_worker",id,port);WorkerMessageHandler.setup(workerHandler,port);const messageHandler=new _message_handler.MessageHandler(id,id+"_worker",port);this._messageHandler=messageHandler;this._readyCapability.resolve();messageHandler.send("configure",{verbosity:this.verbosity});}).catch(reason=>{this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));});}destroy(){this.destroyed=true;if(this._webWorker){this._webWorker.terminate();this._webWorker=null;}_classPrivateFieldLooseBase(PDFWorker,_workerPorts)[_workerPorts].delete(this._port);this._port=null;if(this._messageHandler){this._messageHandler.destroy();this._messageHandler=null;}}static fromPort(params){if(!params?.port){throw new Error("PDFWorker.fromPort - invalid method signature.");}if(_classPrivateFieldLooseBase(this,_workerPorts)[_workerPorts].has(params.port)){return _classPrivateFieldLooseBase(this,_workerPorts)[_workerPorts].get(params.port);}return new PDFWorker(params);}static get workerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc){return _worker_options.GlobalWorkerOptions.workerSrc;}if(PDFWorkerUtil.fallbackWorkerSrc!==null){if(!_is_node.isNodeJS){(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');}return PDFWorkerUtil.fallbackWorkerSrc;}throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');}static get _mainThreadWorkerMessageHandler(){try{return globalThis.pdfjsWorker?.WorkerMessageHandler||null;}catch(ex){return null;}}static get _setupFakeWorkerGlobal(){const loader=async()=>{const mainWorkerMessageHandler=this._mainThreadWorkerMessageHandler;if(mainWorkerMessageHandler){return mainWorkerMessageHandler;}if(_is_node.isNodeJS&&"function"==="function"){const worker=eval("require")(this.workerSrc);return worker.WorkerMessageHandler;}await(0,_display_utils.loadScript)(this.workerSrc);return window.pdfjsWorker.WorkerMessageHandler;};return(0,_util.shadow)(this,"_setupFakeWorkerGlobal",loader());}}Object.defineProperty(PDFWorker,_workerPorts,{writable:true,value:new WeakMap()});exports.PDFWorker=PDFWorker;var _methodPromises=/*#__PURE__*/_classPrivateFieldLooseKey("methodPromises");var _pageCache=/*#__PURE__*/_classPrivateFieldLooseKey("pageCache");var _pagePromises=/*#__PURE__*/_classPrivateFieldLooseKey("pagePromises");var _cacheSimpleMethod=/*#__PURE__*/_classPrivateFieldLooseKey("cacheSimpleMethod");class WorkerTransport{constructor(messageHandler,loadingTask,networkStream,params,factory){Object.defineProperty(this,_cacheSimpleMethod,{value:_cacheSimpleMethod2});Object.defineProperty(this,_methodPromises,{writable:true,value:new Map()});Object.defineProperty(this,_pageCache,{writable:true,value:new Map()});Object.defineProperty(this,_pagePromises,{writable:true,value:new Map()});this.messageHandler=messageHandler;this.loadingTask=loadingTask;this.commonObjs=new PDFObjects();this.fontLoader=new _font_loader.FontLoader({ownerDocument:params.ownerDocument,styleElement:params.styleElement});this._params=params;this.canvasFactory=factory.canvasFactory;this.filterFactory=factory.filterFactory;this.cMapReaderFactory=factory.cMapReaderFactory;this.standardFontDataFactory=factory.standardFontDataFactory;this.destroyed=false;this.destroyCapability=null;this._passwordCapability=null;this._networkStream=networkStream;this._fullReader=null;this._lastProgress=null;this.downloadInfoCapability=new _util.PromiseCapability();this.setupMessageHandler();}get annotationStorage(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage());}getRenderingIntent(intent,annotationMode=_util.AnnotationMode.ENABLE,printAnnotationStorage=null,isOpList=false){let renderingIntent=_util.RenderingIntentFlag.DISPLAY;let annotationMap=null;switch(intent){case"any":renderingIntent=_util.RenderingIntentFlag.ANY;break;case"display":break;case"print":renderingIntent=_util.RenderingIntentFlag.PRINT;break;default:(0,_util.warn)(`getRenderingIntent - invalid intent: ${intent}`);}switch(annotationMode){case _util.AnnotationMode.DISABLE:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_DISABLE;break;case _util.AnnotationMode.ENABLE:break;case _util.AnnotationMode.ENABLE_FORMS:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_FORMS;break;case _util.AnnotationMode.ENABLE_STORAGE:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_STORAGE;const annotationStorage=renderingIntent&_util.RenderingIntentFlag.PRINT&&printAnnotationStorage instanceof _annotation_storage.PrintAnnotationStorage?printAnnotationStorage:this.annotationStorage;annotationMap=annotationStorage.serializable;break;default:(0,_util.warn)(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);}if(isOpList){renderingIntent+=_util.RenderingIntentFlag.OPLIST;}return{renderingIntent,cacheKey:`${renderingIntent}_${_annotation_storage.AnnotationStorage.getHash(annotationMap)}`,annotationStorageMap:annotationMap};}destroy(){if(this.destroyCapability){return this.destroyCapability.promise;}this.destroyed=true;this.destroyCapability=new _util.PromiseCapability();if(this._passwordCapability){this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));}const waitOn=[];for(const page of _classPrivateFieldLooseBase(this,_pageCache)[_pageCache].values()){waitOn.push(page._destroy());}_classPrivateFieldLooseBase(this,_pageCache)[_pageCache].clear();_classPrivateFieldLooseBase(this,_pagePromises)[_pagePromises].clear();if(this.hasOwnProperty("annotationStorage")){this.annotationStorage.resetModified();}const terminated=this.messageHandler.sendWithPromise("Terminate",null);waitOn.push(terminated);Promise.all(waitOn).then(()=>{this.commonObjs.clear();this.fontLoader.clear();_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].clear();this.filterFactory.destroy();if(this._networkStream){this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));}if(this.messageHandler){this.messageHandler.destroy();this.messageHandler=null;}this.destroyCapability.resolve();},this.destroyCapability.reject);return this.destroyCapability.promise;}setupMessageHandler(){const{messageHandler,loadingTask}=this;messageHandler.on("GetReader",(data,sink)=>{(0,_util.assert)(this._networkStream,"GetReader - no `IPDFStream` instance available.");this._fullReader=this._networkStream.getFullReader();this._fullReader.onProgress=evt=>{this._lastProgress={loaded:evt.loaded,total:evt.total};};sink.onPull=()=>{this._fullReader.read().then(function({value,done}){if(done){sink.close();return;}(0,_util.assert)(value instanceof ArrayBuffer,"GetReader - expected an ArrayBuffer.");sink.enqueue(new Uint8Array(value),1,[value]);}).catch(reason=>{sink.error(reason);});};sink.onCancel=reason=>{this._fullReader.cancel(reason);sink.ready.catch(readyReason=>{if(this.destroyed){return;}throw readyReason;});};});messageHandler.on("ReaderHeadersReady",data=>{const headersCapability=new _util.PromiseCapability();const fullReader=this._fullReader;fullReader.headersReady.then(()=>{if(!fullReader.isStreamingSupported||!fullReader.isRangeSupported){if(this._lastProgress){loadingTask.onProgress?.(this._lastProgress);}fullReader.onProgress=evt=>{loadingTask.onProgress?.({loaded:evt.loaded,total:evt.total});};}headersCapability.resolve({isStreamingSupported:fullReader.isStreamingSupported,isRangeSupported:fullReader.isRangeSupported,contentLength:fullReader.contentLength});},headersCapability.reject);return headersCapability.promise;});messageHandler.on("GetRangeReader",(data,sink)=>{(0,_util.assert)(this._networkStream,"GetRangeReader - no `IPDFStream` instance available.");const rangeReader=this._networkStream.getRangeReader(data.begin,data.end);if(!rangeReader){sink.close();return;}sink.onPull=()=>{rangeReader.read().then(function({value,done}){if(done){sink.close();return;}(0,_util.assert)(value instanceof ArrayBuffer,"GetRangeReader - expected an ArrayBuffer.");sink.enqueue(new Uint8Array(value),1,[value]);}).catch(reason=>{sink.error(reason);});};sink.onCancel=reason=>{rangeReader.cancel(reason);sink.ready.catch(readyReason=>{if(this.destroyed){return;}throw readyReason;});};});messageHandler.on("GetDoc",({pdfInfo})=>{this._numPages=pdfInfo.numPages;this._htmlForXfa=pdfInfo.htmlForXfa;delete pdfInfo.htmlForXfa;loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo,this));});messageHandler.on("DocException",function(ex){let reason;switch(ex.name){case"PasswordException":reason=new _util.PasswordException(ex.message,ex.code);break;case"InvalidPDFException":reason=new _util.InvalidPDFException(ex.message);break;case"MissingPDFException":reason=new _util.MissingPDFException(ex.message);break;case"UnexpectedResponseException":reason=new _util.UnexpectedResponseException(ex.message,ex.status);break;case"UnknownErrorException":reason=new _util.UnknownErrorException(ex.message,ex.details);break;default:(0,_util.unreachable)("DocException - expected a valid Error.");}loadingTask._capability.reject(reason);});messageHandler.on("PasswordRequest",exception=>{this._passwordCapability=new _util.PromiseCapability();if(loadingTask.onPassword){const updatePassword=password=>{if(password instanceof Error){this._passwordCapability.reject(password);}else{this._passwordCapability.resolve({password});}};try{loadingTask.onPassword(updatePassword,exception.code);}catch(ex){this._passwordCapability.reject(ex);}}else{this._passwordCapability.reject(new _util.PasswordException(exception.message,exception.code));}return this._passwordCapability.promise;});messageHandler.on("DataLoaded",data=>{loadingTask.onProgress?.({loaded:data.length,total:data.length});this.downloadInfoCapability.resolve(data);});messageHandler.on("StartRenderPage",data=>{if(this.destroyed){return;}const page=_classPrivateFieldLooseBase(this,_pageCache)[_pageCache].get(data.pageIndex);page._startRenderPage(data.transparency,data.cacheKey);});messageHandler.on("commonobj",([id,type,exportedData])=>{if(this.destroyed){return;}if(this.commonObjs.has(id)){return;}switch(type){case"Font":const params=this._params;if("error"in exportedData){const exportedError=exportedData.error;(0,_util.warn)(`Error during font loading: ${exportedError}`);this.commonObjs.resolve(id,exportedError);break;}const inspectFont=params.pdfBug&&globalThis.FontInspector?.enabled?(font,url)=>globalThis.FontInspector.fontAdded(font,url):null;const font=new _font_loader.FontFaceObject(exportedData,{isEvalSupported:params.isEvalSupported,disableFontFace:params.disableFontFace,ignoreErrors:params.ignoreErrors,inspectFont});this.fontLoader.bind(font).catch(reason=>{return messageHandler.sendWithPromise("FontFallback",{id});}).finally(()=>{if(!params.fontExtraProperties&&font.data){font.data=null;}this.commonObjs.resolve(id,font);});break;case"FontPath":case"Image":case"Pattern":this.commonObjs.resolve(id,exportedData);break;default:throw new Error(`Got unknown common object type ${type}`);}});messageHandler.on("obj",([id,pageIndex,type,imageData])=>{if(this.destroyed){return;}const pageProxy=_classPrivateFieldLooseBase(this,_pageCache)[_pageCache].get(pageIndex);if(pageProxy.objs.has(id)){return;}switch(type){case"Image":pageProxy.objs.resolve(id,imageData);if(imageData){let length;if(imageData.bitmap){const{width,height}=imageData;length=width*height*4;}else{length=imageData.data?.length||0;}if(length>_util.MAX_IMAGE_SIZE_TO_CACHE){pageProxy._maybeCleanupAfterRender=true;}}break;case"Pattern":pageProxy.objs.resolve(id,imageData);break;default:throw new Error(`Got unknown object type ${type}`);}});messageHandler.on("DocProgress",data=>{if(this.destroyed){return;}loadingTask.onProgress?.({loaded:data.loaded,total:data.total});});messageHandler.on("FetchBuiltInCMap",data=>{if(this.destroyed){return Promise.reject(new Error("Worker was destroyed."));}if(!this.cMapReaderFactory){return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));}return this.cMapReaderFactory.fetch(data);});messageHandler.on("FetchStandardFontData",data=>{if(this.destroyed){return Promise.reject(new Error("Worker was destroyed."));}if(!this.standardFontDataFactory){return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));}return this.standardFontDataFactory.fetch(data);});}getData(){return this.messageHandler.sendWithPromise("GetData",null);}saveDocument(){if(this.annotationStorage.size<=0){(0,_util.warn)("saveDocument called while `annotationStorage` is empty, "+"please use the getData-method instead.");}return this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:this.annotationStorage.serializable,filename:this._fullReader?.filename??null}).finally(()=>{this.annotationStorage.resetModified();});}getPage(pageNumber){if(!Number.isInteger(pageNumber)||pageNumber<=0||pageNumber>this._numPages){return Promise.reject(new Error("Invalid page request."));}const pageIndex=pageNumber-1,cachedPromise=_classPrivateFieldLooseBase(this,_pagePromises)[_pagePromises].get(pageIndex);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise("GetPage",{pageIndex}).then(pageInfo=>{if(this.destroyed){throw new Error("Transport destroyed");}const page=new PDFPageProxy(pageIndex,pageInfo,this,this._params.pdfBug);_classPrivateFieldLooseBase(this,_pageCache)[_pageCache].set(pageIndex,page);return page;});_classPrivateFieldLooseBase(this,_pagePromises)[_pagePromises].set(pageIndex,promise);return promise;}getPageIndex(ref){if(typeof ref!=="object"||ref===null||!Number.isInteger(ref.num)||ref.num<0||!Number.isInteger(ref.gen)||ref.gen<0){return Promise.reject(new Error("Invalid pageIndex request."));}return this.messageHandler.sendWithPromise("GetPageIndex",{num:ref.num,gen:ref.gen});}getAnnotations(pageIndex,intent){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex,intent});}getFieldObjects(){return _classPrivateFieldLooseBase(this,_cacheSimpleMethod)[_cacheSimpleMethod]("GetFieldObjects");}hasJSActions(){return _classPrivateFieldLooseBase(this,_cacheSimpleMethod)[_cacheSimpleMethod]("HasJSActions");}getCalculationOrderIds(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null);}getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null);}getDestination(id){if(typeof id!=="string"){return Promise.reject(new Error("Invalid destination request."));}return this.messageHandler.sendWithPromise("GetDestination",{id});}getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null);}getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null);}getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null);}getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null);}getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null);}getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null);}getJavaScript(){return this.messageHandler.sendWithPromise("GetJavaScript",null);}getDocJSActions(){return this.messageHandler.sendWithPromise("GetDocJSActions",null);}getPageJSActions(pageIndex){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex});}getStructTree(pageIndex){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex});}getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null);}getOptionalContentConfig(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then(results=>{return new _optional_content_config.OptionalContentConfig(results);});}getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null);}getMetadata(){const name="GetMetadata",cachedPromise=_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].get(name);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise(name,null).then(results=>{return{info:results[0],metadata:results[1]?new _metadata.Metadata(results[1]):null,contentDispositionFilename:this._fullReader?.filename??null,contentLength:this._fullReader?.contentLength??null};});_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].set(name,promise);return promise;}getMarkInfo(){return this.messageHandler.sendWithPromise("GetMarkInfo",null);}async startCleanup(keepLoadedFonts=false){if(this.destroyed){return;}await this.messageHandler.sendWithPromise("Cleanup",null);for(const page of _classPrivateFieldLooseBase(this,_pageCache)[_pageCache].values()){const cleanupSuccessful=page.cleanup();if(!cleanupSuccessful){throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);}}this.commonObjs.clear();if(!keepLoadedFonts){this.fontLoader.clear();}_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].clear();this.filterFactory.destroy(true);}get loadingParams(){const{disableAutoFetch,enableXfa}=this._params;return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch,enableXfa});}}function _cacheSimpleMethod2(name,data=null){const cachedPromise=_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].get(name);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise(name,data);_classPrivateFieldLooseBase(this,_methodPromises)[_methodPromises].set(name,promise);return promise;}var _objs=/*#__PURE__*/_classPrivateFieldLooseKey("objs");var _ensureObj=/*#__PURE__*/_classPrivateFieldLooseKey("ensureObj");class PDFObjects{constructor(){Object.defineProperty(this,_ensureObj,{value:_ensureObj2});Object.defineProperty(this,_objs,{writable:true,value:Object.create(null)});}get(objId,callback=null){if(callback){const obj=_classPrivateFieldLooseBase(this,_ensureObj)[_ensureObj](objId);obj.capability.promise.then(()=>callback(obj.data));return null;}const obj=_classPrivateFieldLooseBase(this,_objs)[_objs][objId];if(!obj?.capability.settled){throw new Error(`Requesting object that isn't resolved yet ${objId}.`);}return obj.data;}has(objId){const obj=_classPrivateFieldLooseBase(this,_objs)[_objs][objId];return obj?.capability.settled||false;}resolve(objId,data=null){const obj=_classPrivateFieldLooseBase(this,_ensureObj)[_ensureObj](objId);obj.data=data;obj.capability.resolve();}clear(){for(const objId in _classPrivateFieldLooseBase(this,_objs)[_objs]){const{data}=_classPrivateFieldLooseBase(this,_objs)[_objs][objId];data?.bitmap?.close();}_classPrivateFieldLooseBase(this,_objs)[_objs]=Object.create(null);}}function _ensureObj2(objId){const obj=_classPrivateFieldLooseBase(this,_objs)[_objs][objId];if(obj){return obj;}return _classPrivateFieldLooseBase(this,_objs)[_objs][objId]={capability:new _util.PromiseCapability(),data:null};}var _internalRenderTask=/*#__PURE__*/_classPrivateFieldLooseKey("internalRenderTask");class RenderTask{constructor(internalRenderTask){Object.defineProperty(this,_internalRenderTask,{writable:true,value:null});_classPrivateFieldLooseBase(this,_internalRenderTask)[_internalRenderTask]=internalRenderTask;this.onContinue=null;}get promise(){return _classPrivateFieldLooseBase(this,_internalRenderTask)[_internalRenderTask].capability.promise;}cancel(extraDelay=0){_classPrivateFieldLooseBase(this,_internalRenderTask)[_internalRenderTask].cancel(null,extraDelay);}get separateAnnots(){const{separateAnnots}=_classPrivateFieldLooseBase(this,_internalRenderTask)[_internalRenderTask].operatorList;if(!separateAnnots){return false;}const{annotationCanvasMap}=_classPrivateFieldLooseBase(this,_internalRenderTask)[_internalRenderTask];return separateAnnots.form||separateAnnots.canvas&&annotationCanvasMap?.size>0;}}exports.RenderTask=RenderTask;var _canvasInUse=/*#__PURE__*/_classPrivateFieldLooseKey("canvasInUse");class InternalRenderTask{constructor({callback,params,objs,commonObjs,annotationCanvasMap,operatorList,pageIndex,canvasFactory,filterFactory,useRequestAnimationFrame=false,pdfBug=false,pageColors=null}){this.callback=callback;this.params=params;this.objs=objs;this.commonObjs=commonObjs;this.annotationCanvasMap=annotationCanvasMap;this.operatorListIdx=null;this.operatorList=operatorList;this._pageIndex=pageIndex;this.canvasFactory=canvasFactory;this.filterFactory=filterFactory;this._pdfBug=pdfBug;this.pageColors=pageColors;this.running=false;this.graphicsReadyCallback=null;this.graphicsReady=false;this._useRequestAnimationFrame=useRequestAnimationFrame===true&&typeof window!=="undefined";this.cancelled=false;this.capability=new _util.PromiseCapability();this.task=new RenderTask(this);this._cancelBound=this.cancel.bind(this);this._continueBound=this._continue.bind(this);this._scheduleNextBound=this._scheduleNext.bind(this);this._nextBound=this._next.bind(this);this._canvas=params.canvasContext.canvas;}get completed(){return this.capability.promise.catch(function(){});}initializeGraphics({transparency=false,optionalContentConfig}){if(this.cancelled){return;}if(this._canvas){if(_classPrivateFieldLooseBase(InternalRenderTask,_canvasInUse)[_canvasInUse].has(this._canvas)){throw new Error("Cannot use the same canvas during multiple render() operations. "+"Use different canvas or ensure previous operations were "+"cancelled or completed.");}_classPrivateFieldLooseBase(InternalRenderTask,_canvasInUse)[_canvasInUse].add(this._canvas);}if(this._pdfBug&&globalThis.StepperManager?.enabled){this.stepper=globalThis.StepperManager.create(this._pageIndex);this.stepper.init(this.operatorList);this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint();}const{canvasContext,viewport,transform,background}=this.params;this.gfx=new _canvas.CanvasGraphics(canvasContext,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig},this.annotationCanvasMap,this.pageColors);this.gfx.beginDrawing({transform,viewport,transparency,background});this.operatorListIdx=0;this.graphicsReady=true;this.graphicsReadyCallback?.();}cancel(error=null,extraDelay=0){this.running=false;this.cancelled=true;this.gfx?.endDrawing();if(this._canvas){_classPrivateFieldLooseBase(InternalRenderTask,_canvasInUse)[_canvasInUse].delete(this._canvas);}this.callback(error||new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex+1}`,"canvas",extraDelay));}operatorListChanged(){if(!this.graphicsReady){this.graphicsReadyCallback||=this._continueBound;return;}this.stepper?.updateOperatorList(this.operatorList);if(this.running){return;}this._continue();}_continue(){this.running=true;if(this.cancelled){return;}if(this.task.onContinue){this.task.onContinue(this._scheduleNextBound);}else{this._scheduleNext();}}_scheduleNext(){if(this._useRequestAnimationFrame){window.requestAnimationFrame(()=>{this._nextBound().catch(this._cancelBound);});}else{Promise.resolve().then(this._nextBound).catch(this._cancelBound);}}async _next(){if(this.cancelled){return;}this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper);if(this.operatorListIdx===this.operatorList.argsArray.length){this.running=false;if(this.operatorList.lastChunk){this.gfx.endDrawing(this.pageColors);if(this._canvas){_classPrivateFieldLooseBase(InternalRenderTask,_canvasInUse)[_canvasInUse].delete(this._canvas);}this.callback();}}}}Object.defineProperty(InternalRenderTask,_canvasInUse,{writable:true,value:new WeakSet()});const version='3.6.172';exports.version=version;const build='4d3dfe254';exports.build=build;/***/}),(/* 3 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PrintAnnotationStorage=exports.AnnotationStorage=void 0;var _util=__w_pdfjs_require__(1);var _editor=__w_pdfjs_require__(4);var _murmurhash=__w_pdfjs_require__(8);var _modified=/*#__PURE__*/_classPrivateFieldLooseKey("modified");var _storage=/*#__PURE__*/_classPrivateFieldLooseKey("storage");var _setModified=/*#__PURE__*/_classPrivateFieldLooseKey("setModified");class AnnotationStorage{constructor(){Object.defineProperty(this,_setModified,{value:_setModified2});Object.defineProperty(this,_modified,{writable:true,value:false});Object.defineProperty(this,_storage,{writable:true,value:new Map()});this.onSetModified=null;this.onResetModified=null;this.onAnnotationEditor=null;}getValue(key,defaultValue){const value=_classPrivateFieldLooseBase(this,_storage)[_storage].get(key);if(value===undefined){return defaultValue;}return Object.assign(defaultValue,value);}getRawValue(key){return _classPrivateFieldLooseBase(this,_storage)[_storage].get(key);}remove(key){_classPrivateFieldLooseBase(this,_storage)[_storage].delete(key);if(_classPrivateFieldLooseBase(this,_storage)[_storage].size===0){this.resetModified();}if(typeof this.onAnnotationEditor==="function"){for(const value of _classPrivateFieldLooseBase(this,_storage)[_storage].values()){if(value instanceof _editor.AnnotationEditor){return;}}this.onAnnotationEditor(null);}}setValue(key,value){const obj=_classPrivateFieldLooseBase(this,_storage)[_storage].get(key);let modified=false;if(obj!==undefined){for(const[entry,val]of Object.entries(value)){if(obj[entry]!==val){modified=true;obj[entry]=val;}}}else{modified=true;_classPrivateFieldLooseBase(this,_storage)[_storage].set(key,value);}if(modified){_classPrivateFieldLooseBase(this,_setModified)[_setModified]();}if(value instanceof _editor.AnnotationEditor&&typeof this.onAnnotationEditor==="function"){this.onAnnotationEditor(value.constructor._type);}}has(key){return _classPrivateFieldLooseBase(this,_storage)[_storage].has(key);}getAll(){return _classPrivateFieldLooseBase(this,_storage)[_storage].size>0?(0,_util.objectFromMap)(_classPrivateFieldLooseBase(this,_storage)[_storage]):null;}setAll(obj){for(const[key,val]of Object.entries(obj)){this.setValue(key,val);}}get size(){return _classPrivateFieldLooseBase(this,_storage)[_storage].size;}resetModified(){if(_classPrivateFieldLooseBase(this,_modified)[_modified]){_classPrivateFieldLooseBase(this,_modified)[_modified]=false;if(typeof this.onResetModified==="function"){this.onResetModified();}}}get print(){return new PrintAnnotationStorage(this);}get serializable(){if(_classPrivateFieldLooseBase(this,_storage)[_storage].size===0){return null;}const clone=new Map();for(const[key,val]of _classPrivateFieldLooseBase(this,_storage)[_storage]){const serialized=val instanceof _editor.AnnotationEditor?val.serialize():val;if(serialized){clone.set(key,serialized);}}return clone;}static getHash(map){if(!map){return"";}const hash=new _murmurhash.MurmurHash3_64();for(const[key,val]of map){hash.update(`${key}:${JSON.stringify(val)}`);}return hash.hexdigest();}}function _setModified2(){if(!_classPrivateFieldLooseBase(this,_modified)[_modified]){_classPrivateFieldLooseBase(this,_modified)[_modified]=true;if(typeof this.onSetModified==="function"){this.onSetModified();}}}exports.AnnotationStorage=AnnotationStorage;var _serializable=/*#__PURE__*/_classPrivateFieldLooseKey("serializable");class PrintAnnotationStorage extends AnnotationStorage{constructor(parent){super();Object.defineProperty(this,_serializable,{writable:true,value:null});_classPrivateFieldLooseBase(this,_serializable)[_serializable]=structuredClone(parent.serializable);}get print(){(0,_util.unreachable)("Should not call PrintAnnotationStorage.print");}get serializable(){return _classPrivateFieldLooseBase(this,_serializable)[_serializable];}}exports.PrintAnnotationStorage=PrintAnnotationStorage;/***/}),(/* 4 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationEditor=void 0;var _tools=__w_pdfjs_require__(5);var _util=__w_pdfjs_require__(1);var _boundFocusin=/*#__PURE__*/_classPrivateFieldLooseKey("boundFocusin");var _boundFocusout=/*#__PURE__*/_classPrivateFieldLooseKey("boundFocusout");var _hasBeenSelected=/*#__PURE__*/_classPrivateFieldLooseKey("hasBeenSelected");var _isEditing=/*#__PURE__*/_classPrivateFieldLooseKey("isEditing");var _isInEditMode=/*#__PURE__*/_classPrivateFieldLooseKey("isInEditMode");var _zIndex=/*#__PURE__*/_classPrivateFieldLooseKey("zIndex");class AnnotationEditor{constructor(parameters){Object.defineProperty(this,_boundFocusin,{writable:true,value:this.focusin.bind(this)});Object.defineProperty(this,_boundFocusout,{writable:true,value:this.focusout.bind(this)});Object.defineProperty(this,_hasBeenSelected,{writable:true,value:false});Object.defineProperty(this,_isEditing,{writable:true,value:false});Object.defineProperty(this,_isInEditMode,{writable:true,value:false});this._uiManager=null;Object.defineProperty(this,_zIndex,{writable:true,value:AnnotationEditor._zIndex++});if(this.constructor===AnnotationEditor){(0,_util.unreachable)("Cannot initialize AnnotationEditor.");}this.parent=parameters.parent;this.id=parameters.id;this.width=this.height=null;this.pageIndex=parameters.parent.pageIndex;this.name=parameters.name;this.div=null;this._uiManager=parameters.uiManager;const{rotation,rawDims:{pageWidth,pageHeight,pageX,pageY}}=this.parent.viewport;this.rotation=rotation;this.pageRotation=(360+rotation-this._uiManager.viewParameters.rotation)%360;this.pageDimensions=[pageWidth,pageHeight];this.pageTranslation=[pageX,pageY];const[width,height]=this.parentDimensions;this.x=parameters.x/width;this.y=parameters.y/height;this.isAttachedToDOM=false;}static get _defaultLineColor(){return(0,_util.shadow)(this,"_defaultLineColor",this._colorManager.getHexCode("CanvasText"));}addCommands(params){this._uiManager.addCommands(params);}get currentLayer(){return this._uiManager.currentLayer;}setInBackground(){this.div.style.zIndex=0;}setInForeground(){this.div.style.zIndex=_classPrivateFieldLooseBase(this,_zIndex)[_zIndex];}setParent(parent){if(parent!==null){this.pageIndex=parent.pageIndex;this.pageDimensions=parent.pageDimensions;}this.parent=parent;}focusin(event){if(!_classPrivateFieldLooseBase(this,_hasBeenSelected)[_hasBeenSelected]){this.parent.setSelected(this);}else{_classPrivateFieldLooseBase(this,_hasBeenSelected)[_hasBeenSelected]=false;}}focusout(event){if(!this.isAttachedToDOM){return;}const target=event.relatedTarget;if(target?.closest(`#${this.id}`)){return;}event.preventDefault();if(!this.parent?.isMultipleSelection){this.commitOrRemove();}}commitOrRemove(){if(this.isEmpty()){this.remove();}else{this.commit();}}commit(){this.addToAnnotationStorage();}addToAnnotationStorage(){this._uiManager.addToAnnotationStorage(this);}dragstart(event){const rect=this.parent.div.getBoundingClientRect();this.startX=event.clientX-rect.x;this.startY=event.clientY-rect.y;event.dataTransfer.setData("text/plain",this.id);event.dataTransfer.effectAllowed="move";}setAt(x,y,tx,ty){const[width,height]=this.parentDimensions;[tx,ty]=this.screenToPageTranslation(tx,ty);this.x=(x+tx)/width;this.y=(y+ty)/height;this.div.style.left=`${100*this.x}%`;this.div.style.top=`${100*this.y}%`;}translate(x,y){const[width,height]=this.parentDimensions;[x,y]=this.screenToPageTranslation(x,y);this.x+=x/width;this.y+=y/height;this.div.style.left=`${100*this.x}%`;this.div.style.top=`${100*this.y}%`;}screenToPageTranslation(x,y){switch(this.parentRotation){case 90:return[y,-x];case 180:return[-x,-y];case 270:return[-y,x];default:return[x,y];}}get parentScale(){return this._uiManager.viewParameters.realScale;}get parentRotation(){return(this._uiManager.viewParameters.rotation+this.pageRotation)%360;}get parentDimensions(){const{realScale}=this._uiManager.viewParameters;const[pageWidth,pageHeight]=this.pageDimensions;return[pageWidth*realScale,pageHeight*realScale];}setDims(width,height){const[parentWidth,parentHeight]=this.parentDimensions;this.div.style.width=`${100*width/parentWidth}%`;this.div.style.height=`${100*height/parentHeight}%`;}fixDims(){const{style}=this.div;const{height,width}=style;const widthPercent=width.endsWith("%");const heightPercent=height.endsWith("%");if(widthPercent&&heightPercent){return;}const[parentWidth,parentHeight]=this.parentDimensions;if(!widthPercent){style.width=`${100*parseFloat(width)/parentWidth}%`;}if(!heightPercent){style.height=`${100*parseFloat(height)/parentHeight}%`;}}getInitialTranslation(){return[0,0];}render(){this.div=document.createElement("div");this.div.setAttribute("data-editor-rotation",(360-this.rotation)%360);this.div.className=this.name;this.div.setAttribute("id",this.id);this.div.setAttribute("tabIndex",0);this.setInForeground();this.div.addEventListener("focusin",_classPrivateFieldLooseBase(this,_boundFocusin)[_boundFocusin]);this.div.addEventListener("focusout",_classPrivateFieldLooseBase(this,_boundFocusout)[_boundFocusout]);const[tx,ty]=this.getInitialTranslation();this.translate(tx,ty);(0,_tools.bindEvents)(this,this.div,["dragstart","pointerdown"]);return this.div;}pointerdown(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){event.preventDefault();return;}if(event.ctrlKey&&!isMac||event.shiftKey||event.metaKey&&isMac){this.parent.toggleSelected(this);}else{this.parent.setSelected(this);}_classPrivateFieldLooseBase(this,_hasBeenSelected)[_hasBeenSelected]=true;}getRect(tx,ty){const scale=this.parentScale;const[pageWidth,pageHeight]=this.pageDimensions;const[pageX,pageY]=this.pageTranslation;const shiftX=tx/scale;const shiftY=ty/scale;const x=this.x*pageWidth;const y=this.y*pageHeight;const width=this.width*pageWidth;const height=this.height*pageHeight;switch(this.rotation){case 0:return[x+shiftX+pageX,pageHeight-y-shiftY-height+pageY,x+shiftX+width+pageX,pageHeight-y-shiftY+pageY];case 90:return[x+shiftY+pageX,pageHeight-y+shiftX+pageY,x+shiftY+height+pageX,pageHeight-y+shiftX+width+pageY];case 180:return[x-shiftX-width+pageX,pageHeight-y+shiftY+pageY,x-shiftX+pageX,pageHeight-y+shiftY+height+pageY];case 270:return[x-shiftY-height+pageX,pageHeight-y-shiftX-width+pageY,x-shiftY+pageX,pageHeight-y-shiftX+pageY];default:throw new Error("Invalid rotation");}}getRectInCurrentCoords(rect,pageHeight){const[x1,y1,x2,y2]=rect;const width=x2-x1;const height=y2-y1;switch(this.rotation){case 0:return[x1,pageHeight-y2,width,height];case 90:return[x1,pageHeight-y1,height,width];case 180:return[x2,pageHeight-y1,width,height];case 270:return[x2,pageHeight-y2,height,width];default:throw new Error("Invalid rotation");}}onceAdded(){}isEmpty(){return false;}enableEditMode(){_classPrivateFieldLooseBase(this,_isInEditMode)[_isInEditMode]=true;}disableEditMode(){_classPrivateFieldLooseBase(this,_isInEditMode)[_isInEditMode]=false;}isInEditMode(){return _classPrivateFieldLooseBase(this,_isInEditMode)[_isInEditMode];}shouldGetKeyboardEvents(){return false;}needsToBeRebuilt(){return this.div&&!this.isAttachedToDOM;}rebuild(){this.div?.addEventListener("focusin",_classPrivateFieldLooseBase(this,_boundFocusin)[_boundFocusin]);}serialize(){(0,_util.unreachable)("An editor must be serializable");}static deserialize(data,parent,uiManager){const editor=new this.prototype.constructor({parent,id:parent.getNextId(),uiManager});editor.rotation=data.rotation;const[pageWidth,pageHeight]=editor.pageDimensions;const[x,y,width,height]=editor.getRectInCurrentCoords(data.rect,pageHeight);editor.x=x/pageWidth;editor.y=y/pageHeight;editor.width=width/pageWidth;editor.height=height/pageHeight;return editor;}remove(){this.div.removeEventListener("focusin",_classPrivateFieldLooseBase(this,_boundFocusin)[_boundFocusin]);this.div.removeEventListener("focusout",_classPrivateFieldLooseBase(this,_boundFocusout)[_boundFocusout]);if(!this.isEmpty()){this.commit();}this.parent.remove(this);}select(){this.div?.classList.add("selectedEditor");}unselect(){this.div?.classList.remove("selectedEditor");}updateParams(type,value){}disableEditing(){}enableEditing(){}get propertiesToUpdate(){return{};}get contentDiv(){return this.div;}get isEditing(){return _classPrivateFieldLooseBase(this,_isEditing)[_isEditing];}set isEditing(value){_classPrivateFieldLooseBase(this,_isEditing)[_isEditing]=value;if(value){this.parent.setSelected(this);this.parent.setActiveEditor(this);}else{this.parent.setActiveEditor(null);}}}AnnotationEditor._colorManager=new _tools.ColorManager();AnnotationEditor._zIndex=1;exports.AnnotationEditor=AnnotationEditor;/***/}),(/* 5 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var _AnnotationEditorUIManager;Object.defineProperty(exports,"__esModule",{value:true});exports.KeyboardManager=exports.CommandManager=exports.ColorManager=exports.AnnotationEditorUIManager=void 0;exports.bindEvents=bindEvents;exports.opacityToHex=opacityToHex;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);function bindEvents(obj,element,names){for(const name of names){element.addEventListener(name,obj[name].bind(obj));}}function opacityToHex(opacity){return Math.round(Math.min(255,Math.max(1,255*opacity))).toString(16).padStart(2,"0");}var _id=/*#__PURE__*/_classPrivateFieldLooseKey("id");class IdManager{constructor(){Object.defineProperty(this,_id,{writable:true,value:0});}getId(){return`${_util.AnnotationEditorPrefix}${_classPrivateFieldLooseBase(this,_id)[_id]++}`;}}var _commands=/*#__PURE__*/_classPrivateFieldLooseKey("commands");var _locked=/*#__PURE__*/_classPrivateFieldLooseKey("locked");var _maxSize=/*#__PURE__*/_classPrivateFieldLooseKey("maxSize");var _position=/*#__PURE__*/_classPrivateFieldLooseKey("position");class CommandManager{constructor(maxSize=128){Object.defineProperty(this,_commands,{writable:true,value:[]});Object.defineProperty(this,_locked,{writable:true,value:false});Object.defineProperty(this,_maxSize,{writable:true,value:void 0});Object.defineProperty(this,_position,{writable:true,value:-1});_classPrivateFieldLooseBase(this,_maxSize)[_maxSize]=maxSize;}add({cmd,undo,mustExec,type=NaN,overwriteIfSameType=false,keepUndo=false}){if(mustExec){cmd();}if(_classPrivateFieldLooseBase(this,_locked)[_locked]){return;}const save={cmd,undo,type};if(_classPrivateFieldLooseBase(this,_position)[_position]===-1){if(_classPrivateFieldLooseBase(this,_commands)[_commands].length>0){_classPrivateFieldLooseBase(this,_commands)[_commands].length=0;}_classPrivateFieldLooseBase(this,_position)[_position]=0;_classPrivateFieldLooseBase(this,_commands)[_commands].push(save);return;}if(overwriteIfSameType&&_classPrivateFieldLooseBase(this,_commands)[_commands][_classPrivateFieldLooseBase(this,_position)[_position]].type===type){if(keepUndo){save.undo=_classPrivateFieldLooseBase(this,_commands)[_commands][_classPrivateFieldLooseBase(this,_position)[_position]].undo;}_classPrivateFieldLooseBase(this,_commands)[_commands][_classPrivateFieldLooseBase(this,_position)[_position]]=save;return;}const next=_classPrivateFieldLooseBase(this,_position)[_position]+1;if(next===_classPrivateFieldLooseBase(this,_maxSize)[_maxSize]){_classPrivateFieldLooseBase(this,_commands)[_commands].splice(0,1);}else{_classPrivateFieldLooseBase(this,_position)[_position]=next;if(next<_classPrivateFieldLooseBase(this,_commands)[_commands].length){_classPrivateFieldLooseBase(this,_commands)[_commands].splice(next);}}_classPrivateFieldLooseBase(this,_commands)[_commands].push(save);}undo(){if(_classPrivateFieldLooseBase(this,_position)[_position]===-1){return;}_classPrivateFieldLooseBase(this,_locked)[_locked]=true;_classPrivateFieldLooseBase(this,_commands)[_commands][_classPrivateFieldLooseBase(this,_position)[_position]].undo();_classPrivateFieldLooseBase(this,_locked)[_locked]=false;_classPrivateFieldLooseBase(this,_position)[_position]-=1;}redo(){if(_classPrivateFieldLooseBase(this,_position)[_position]<_classPrivateFieldLooseBase(this,_commands)[_commands].length-1){_classPrivateFieldLooseBase(this,_position)[_position]+=1;_classPrivateFieldLooseBase(this,_locked)[_locked]=true;_classPrivateFieldLooseBase(this,_commands)[_commands][_classPrivateFieldLooseBase(this,_position)[_position]].cmd();_classPrivateFieldLooseBase(this,_locked)[_locked]=false;}}hasSomethingToUndo(){return _classPrivateFieldLooseBase(this,_position)[_position]!==-1;}hasSomethingToRedo(){return _classPrivateFieldLooseBase(this,_position)[_position]<_classPrivateFieldLooseBase(this,_commands)[_commands].length-1;}destroy(){_classPrivateFieldLooseBase(this,_commands)[_commands]=null;}}exports.CommandManager=CommandManager;var _serialize=/*#__PURE__*/_classPrivateFieldLooseKey("serialize");class KeyboardManager{constructor(callbacks){Object.defineProperty(this,_serialize,{value:_serialize2});this.buffer=[];this.callbacks=new Map();this.allKeys=new Set();const{isMac}=_util.FeatureTest.platform;for(const[keys,callback]of callbacks){for(const key of keys){const isMacKey=key.startsWith("mac+");if(isMac&&isMacKey){this.callbacks.set(key.slice(4),callback);this.allKeys.add(key.split("+").at(-1));}else if(!isMac&&!isMacKey){this.callbacks.set(key,callback);this.allKeys.add(key.split("+").at(-1));}}}}exec(self,event){if(!this.allKeys.has(event.key)){return;}const callback=this.callbacks.get(_classPrivateFieldLooseBase(this,_serialize)[_serialize](event));if(!callback){return;}callback.bind(self)();event.stopPropagation();event.preventDefault();}}function _serialize2(event){if(event.altKey){this.buffer.push("alt");}if(event.ctrlKey){this.buffer.push("ctrl");}if(event.metaKey){this.buffer.push("meta");}if(event.shiftKey){this.buffer.push("shift");}this.buffer.push(event.key);const str=this.buffer.join("+");this.buffer.length=0;return str;}exports.KeyboardManager=KeyboardManager;class ColorManager{get _colors(){const colors=new Map([["CanvasText",null],["Canvas",null]]);(0,_display_utils.getColorValues)(colors);return(0,_util.shadow)(this,"_colors",colors);}convert(color){const rgb=(0,_display_utils.getRGB)(color);if(!window.matchMedia("(forced-colors: active)").matches){return rgb;}for(const[name,RGB]of this._colors){if(RGB.every((x,i)=>x===rgb[i])){return ColorManager._colorsMapping.get(name);}}return rgb;}getHexCode(name){const rgb=this._colors.get(name);if(!rgb){return name;}return _util.Util.makeHexColor(...rgb);}}ColorManager._colorsMapping=new Map([["CanvasText",[0,0,0]],["Canvas",[255,255,255]]]);exports.ColorManager=ColorManager;var _activeEditor=/*#__PURE__*/_classPrivateFieldLooseKey("activeEditor");var _allEditors=/*#__PURE__*/_classPrivateFieldLooseKey("allEditors");var _allLayers=/*#__PURE__*/_classPrivateFieldLooseKey("allLayers");var _annotationStorage=/*#__PURE__*/_classPrivateFieldLooseKey("annotationStorage");var _commandManager=/*#__PURE__*/_classPrivateFieldLooseKey("commandManager");var _currentPageIndex=/*#__PURE__*/_classPrivateFieldLooseKey("currentPageIndex");var _editorTypes=/*#__PURE__*/_classPrivateFieldLooseKey("editorTypes");var _editorsToRescale=/*#__PURE__*/_classPrivateFieldLooseKey("editorsToRescale");var _eventBus=/*#__PURE__*/_classPrivateFieldLooseKey("eventBus");var _idManager=/*#__PURE__*/_classPrivateFieldLooseKey("idManager");var _isEnabled=/*#__PURE__*/_classPrivateFieldLooseKey("isEnabled");var _mode=/*#__PURE__*/_classPrivateFieldLooseKey("mode");var _selectedEditors=/*#__PURE__*/_classPrivateFieldLooseKey("selectedEditors");var _boundCopy=/*#__PURE__*/_classPrivateFieldLooseKey("boundCopy");var _boundCut=/*#__PURE__*/_classPrivateFieldLooseKey("boundCut");var _boundPaste=/*#__PURE__*/_classPrivateFieldLooseKey("boundPaste");var _boundKeydown=/*#__PURE__*/_classPrivateFieldLooseKey("boundKeydown");var _boundOnEditingAction=/*#__PURE__*/_classPrivateFieldLooseKey("boundOnEditingAction");var _boundOnPageChanging=/*#__PURE__*/_classPrivateFieldLooseKey("boundOnPageChanging");var _boundOnScaleChanging=/*#__PURE__*/_classPrivateFieldLooseKey("boundOnScaleChanging");var _boundOnRotationChanging=/*#__PURE__*/_classPrivateFieldLooseKey("boundOnRotationChanging");var _previousStates=/*#__PURE__*/_classPrivateFieldLooseKey("previousStates");var _container=/*#__PURE__*/_classPrivateFieldLooseKey("container");var _addKeyboardManager=/*#__PURE__*/_classPrivateFieldLooseKey("addKeyboardManager");var _removeKeyboardManager=/*#__PURE__*/_classPrivateFieldLooseKey("removeKeyboardManager");var _addCopyPasteListeners=/*#__PURE__*/_classPrivateFieldLooseKey("addCopyPasteListeners");var _removeCopyPasteListeners=/*#__PURE__*/_classPrivateFieldLooseKey("removeCopyPasteListeners");var _dispatchUpdateStates=/*#__PURE__*/_classPrivateFieldLooseKey("dispatchUpdateStates");var _dispatchUpdateUI=/*#__PURE__*/_classPrivateFieldLooseKey("dispatchUpdateUI");var _enableAll=/*#__PURE__*/_classPrivateFieldLooseKey("enableAll");var _disableAll=/*#__PURE__*/_classPrivateFieldLooseKey("disableAll");var _addEditorToLayer=/*#__PURE__*/_classPrivateFieldLooseKey("addEditorToLayer");var _isEmpty=/*#__PURE__*/_classPrivateFieldLooseKey("isEmpty");var _selectEditors=/*#__PURE__*/_classPrivateFieldLooseKey("selectEditors");class AnnotationEditorUIManager{constructor(container,eventBus,annotationStorage){Object.defineProperty(this,_selectEditors,{value:_selectEditors2});Object.defineProperty(this,_isEmpty,{value:_isEmpty2});Object.defineProperty(this,_addEditorToLayer,{value:_addEditorToLayer2});Object.defineProperty(this,_disableAll,{value:_disableAll2});Object.defineProperty(this,_enableAll,{value:_enableAll2});Object.defineProperty(this,_dispatchUpdateUI,{value:_dispatchUpdateUI2});Object.defineProperty(this,_dispatchUpdateStates,{value:_dispatchUpdateStates2});Object.defineProperty(this,_removeCopyPasteListeners,{value:_removeCopyPasteListeners2});Object.defineProperty(this,_addCopyPasteListeners,{value:_addCopyPasteListeners2});Object.defineProperty(this,_removeKeyboardManager,{value:_removeKeyboardManager2});Object.defineProperty(this,_addKeyboardManager,{value:_addKeyboardManager2});Object.defineProperty(this,_activeEditor,{writable:true,value:null});Object.defineProperty(this,_allEditors,{writable:true,value:new Map()});Object.defineProperty(this,_allLayers,{writable:true,value:new Map()});Object.defineProperty(this,_annotationStorage,{writable:true,value:null});Object.defineProperty(this,_commandManager,{writable:true,value:new CommandManager()});Object.defineProperty(this,_currentPageIndex,{writable:true,value:0});Object.defineProperty(this,_editorTypes,{writable:true,value:null});Object.defineProperty(this,_editorsToRescale,{writable:true,value:new Set()});Object.defineProperty(this,_eventBus,{writable:true,value:null});Object.defineProperty(this,_idManager,{writable:true,value:new IdManager()});Object.defineProperty(this,_isEnabled,{writable:true,value:false});Object.defineProperty(this,_mode,{writable:true,value:_util.AnnotationEditorType.NONE});Object.defineProperty(this,_selectedEditors,{writable:true,value:new Set()});Object.defineProperty(this,_boundCopy,{writable:true,value:this.copy.bind(this)});Object.defineProperty(this,_boundCut,{writable:true,value:this.cut.bind(this)});Object.defineProperty(this,_boundPaste,{writable:true,value:this.paste.bind(this)});Object.defineProperty(this,_boundKeydown,{writable:true,value:this.keydown.bind(this)});Object.defineProperty(this,_boundOnEditingAction,{writable:true,value:this.onEditingAction.bind(this)});Object.defineProperty(this,_boundOnPageChanging,{writable:true,value:this.onPageChanging.bind(this)});Object.defineProperty(this,_boundOnScaleChanging,{writable:true,value:this.onScaleChanging.bind(this)});Object.defineProperty(this,_boundOnRotationChanging,{writable:true,value:this.onRotationChanging.bind(this)});Object.defineProperty(this,_previousStates,{writable:true,value:{isEditing:false,isEmpty:true,hasSomethingToUndo:false,hasSomethingToRedo:false,hasSelectedEditor:false}});Object.defineProperty(this,_container,{writable:true,value:null});_classPrivateFieldLooseBase(this,_container)[_container]=container;_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]=eventBus;_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._on("editingaction",_classPrivateFieldLooseBase(this,_boundOnEditingAction)[_boundOnEditingAction]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._on("pagechanging",_classPrivateFieldLooseBase(this,_boundOnPageChanging)[_boundOnPageChanging]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._on("scalechanging",_classPrivateFieldLooseBase(this,_boundOnScaleChanging)[_boundOnScaleChanging]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._on("rotationchanging",_classPrivateFieldLooseBase(this,_boundOnRotationChanging)[_boundOnRotationChanging]);_classPrivateFieldLooseBase(this,_annotationStorage)[_annotationStorage]=annotationStorage;this.viewParameters={realScale:_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS,rotation:0};}destroy(){_classPrivateFieldLooseBase(this,_removeKeyboardManager)[_removeKeyboardManager]();_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._off("editingaction",_classPrivateFieldLooseBase(this,_boundOnEditingAction)[_boundOnEditingAction]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._off("pagechanging",_classPrivateFieldLooseBase(this,_boundOnPageChanging)[_boundOnPageChanging]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._off("scalechanging",_classPrivateFieldLooseBase(this,_boundOnScaleChanging)[_boundOnScaleChanging]);_classPrivateFieldLooseBase(this,_eventBus)[_eventBus]._off("rotationchanging",_classPrivateFieldLooseBase(this,_boundOnRotationChanging)[_boundOnRotationChanging]);for(const layer of _classPrivateFieldLooseBase(this,_allLayers)[_allLayers].values()){layer.destroy();}_classPrivateFieldLooseBase(this,_allLayers)[_allLayers].clear();_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].clear();_classPrivateFieldLooseBase(this,_editorsToRescale)[_editorsToRescale].clear();_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]=null;_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].clear();_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].destroy();}onPageChanging({pageNumber}){_classPrivateFieldLooseBase(this,_currentPageIndex)[_currentPageIndex]=pageNumber-1;}focusMainContainer(){_classPrivateFieldLooseBase(this,_container)[_container].focus();}addShouldRescale(editor){_classPrivateFieldLooseBase(this,_editorsToRescale)[_editorsToRescale].add(editor);}removeShouldRescale(editor){_classPrivateFieldLooseBase(this,_editorsToRescale)[_editorsToRescale].delete(editor);}onScaleChanging({scale}){this.commitOrRemove();this.viewParameters.realScale=scale*_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS;for(const editor of _classPrivateFieldLooseBase(this,_editorsToRescale)[_editorsToRescale]){editor.onScaleChanging();}}onRotationChanging({pagesRotation}){this.commitOrRemove();this.viewParameters.rotation=pagesRotation;}addToAnnotationStorage(editor){if(!editor.isEmpty()&&_classPrivateFieldLooseBase(this,_annotationStorage)[_annotationStorage]&&!_classPrivateFieldLooseBase(this,_annotationStorage)[_annotationStorage].has(editor.id)){_classPrivateFieldLooseBase(this,_annotationStorage)[_annotationStorage].setValue(editor.id,editor);}}copy(event){event.preventDefault();if(_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]){_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor].commitOrRemove();}if(!this.hasSelection){return;}const editors=[];for(const editor of _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]){if(!editor.isEmpty()){editors.push(editor.serialize());}}if(editors.length===0){return;}event.clipboardData.setData("application/pdfjs",JSON.stringify(editors));}cut(event){this.copy(event);this.delete();}paste(event){event.preventDefault();let data=event.clipboardData.getData("application/pdfjs");if(!data){return;}try{data=JSON.parse(data);}catch(ex){(0,_util.warn)(`paste: "${ex.message}".`);return;}if(!Array.isArray(data)){return;}this.unselectAll();const layer=_classPrivateFieldLooseBase(this,_allLayers)[_allLayers].get(_classPrivateFieldLooseBase(this,_currentPageIndex)[_currentPageIndex]);try{const newEditors=[];for(const editor of data){const deserializedEditor=layer.deserialize(editor);if(!deserializedEditor){return;}newEditors.push(deserializedEditor);}const cmd=()=>{for(const editor of newEditors){_classPrivateFieldLooseBase(this,_addEditorToLayer)[_addEditorToLayer](editor);}_classPrivateFieldLooseBase(this,_selectEditors)[_selectEditors](newEditors);};const undo=()=>{for(const editor of newEditors){editor.remove();}};this.addCommands({cmd,undo,mustExec:true});}catch(ex){(0,_util.warn)(`paste: "${ex.message}".`);}}keydown(event){if(!this.getActive()?.shouldGetKeyboardEvents()){AnnotationEditorUIManager._keyboardManager.exec(this,event);}}onEditingAction(details){if(["undo","redo","delete","selectAll"].includes(details.name)){this[details.name]();}}setEditingState(isEditing){if(isEditing){_classPrivateFieldLooseBase(this,_addKeyboardManager)[_addKeyboardManager]();_classPrivateFieldLooseBase(this,_addCopyPasteListeners)[_addCopyPasteListeners]();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({isEditing:_classPrivateFieldLooseBase(this,_mode)[_mode]!==_util.AnnotationEditorType.NONE,isEmpty:_classPrivateFieldLooseBase(this,_isEmpty)[_isEmpty](),hasSomethingToUndo:_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].hasSomethingToUndo(),hasSomethingToRedo:_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].hasSomethingToRedo(),hasSelectedEditor:false});}else{_classPrivateFieldLooseBase(this,_removeKeyboardManager)[_removeKeyboardManager]();_classPrivateFieldLooseBase(this,_removeCopyPasteListeners)[_removeCopyPasteListeners]();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({isEditing:false});}}registerEditorTypes(types){if(_classPrivateFieldLooseBase(this,_editorTypes)[_editorTypes]){return;}_classPrivateFieldLooseBase(this,_editorTypes)[_editorTypes]=types;for(const editorType of _classPrivateFieldLooseBase(this,_editorTypes)[_editorTypes]){_classPrivateFieldLooseBase(this,_dispatchUpdateUI)[_dispatchUpdateUI](editorType.defaultPropertiesToUpdate);}}getId(){return _classPrivateFieldLooseBase(this,_idManager)[_idManager].getId();}get currentLayer(){return _classPrivateFieldLooseBase(this,_allLayers)[_allLayers].get(_classPrivateFieldLooseBase(this,_currentPageIndex)[_currentPageIndex]);}get currentPageIndex(){return _classPrivateFieldLooseBase(this,_currentPageIndex)[_currentPageIndex];}addLayer(layer){_classPrivateFieldLooseBase(this,_allLayers)[_allLayers].set(layer.pageIndex,layer);if(_classPrivateFieldLooseBase(this,_isEnabled)[_isEnabled]){layer.enable();}else{layer.disable();}}removeLayer(layer){_classPrivateFieldLooseBase(this,_allLayers)[_allLayers].delete(layer.pageIndex);}updateMode(mode){_classPrivateFieldLooseBase(this,_mode)[_mode]=mode;if(mode===_util.AnnotationEditorType.NONE){this.setEditingState(false);_classPrivateFieldLooseBase(this,_disableAll)[_disableAll]();}else{this.setEditingState(true);_classPrivateFieldLooseBase(this,_enableAll)[_enableAll]();for(const layer of _classPrivateFieldLooseBase(this,_allLayers)[_allLayers].values()){layer.updateMode(mode);}}}updateToolbar(mode){if(mode===_classPrivateFieldLooseBase(this,_mode)[_mode]){return;}_classPrivateFieldLooseBase(this,_eventBus)[_eventBus].dispatch("switchannotationeditormode",{source:this,mode});}updateParams(type,value){if(!_classPrivateFieldLooseBase(this,_editorTypes)[_editorTypes]){return;}for(const editor of _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]){editor.updateParams(type,value);}for(const editorType of _classPrivateFieldLooseBase(this,_editorTypes)[_editorTypes]){editorType.updateDefaultParams(type,value);}}getEditors(pageIndex){const editors=[];for(const editor of _classPrivateFieldLooseBase(this,_allEditors)[_allEditors].values()){if(editor.pageIndex===pageIndex){editors.push(editor);}}return editors;}getEditor(id){return _classPrivateFieldLooseBase(this,_allEditors)[_allEditors].get(id);}addEditor(editor){_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].set(editor.id,editor);}removeEditor(editor){_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].delete(editor.id);this.unselect(editor);_classPrivateFieldLooseBase(this,_annotationStorage)[_annotationStorage]?.remove(editor.id);}setActiveEditor(editor){if(_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]===editor){return;}_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]=editor;if(editor){_classPrivateFieldLooseBase(this,_dispatchUpdateUI)[_dispatchUpdateUI](editor.propertiesToUpdate);}}toggleSelected(editor){if(_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].has(editor)){_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].delete(editor);editor.unselect();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:this.hasSelection});return;}_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].add(editor);editor.select();_classPrivateFieldLooseBase(this,_dispatchUpdateUI)[_dispatchUpdateUI](editor.propertiesToUpdate);_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:true});}setSelected(editor){for(const ed of _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]){if(ed!==editor){ed.unselect();}}_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].clear();_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].add(editor);editor.select();_classPrivateFieldLooseBase(this,_dispatchUpdateUI)[_dispatchUpdateUI](editor.propertiesToUpdate);_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:true});}isSelected(editor){return _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].has(editor);}unselect(editor){editor.unselect();_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].delete(editor);_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:this.hasSelection});}get hasSelection(){return _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].size!==0;}undo(){_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].undo();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSomethingToUndo:_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].hasSomethingToUndo(),hasSomethingToRedo:true,isEmpty:_classPrivateFieldLooseBase(this,_isEmpty)[_isEmpty]()});}redo(){_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].redo();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSomethingToUndo:true,hasSomethingToRedo:_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].hasSomethingToRedo(),isEmpty:_classPrivateFieldLooseBase(this,_isEmpty)[_isEmpty]()});}addCommands(params){_classPrivateFieldLooseBase(this,_commandManager)[_commandManager].add(params);_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSomethingToUndo:true,hasSomethingToRedo:false,isEmpty:_classPrivateFieldLooseBase(this,_isEmpty)[_isEmpty]()});}delete(){this.commitOrRemove();if(!this.hasSelection){return;}const editors=[..._classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]];const cmd=()=>{for(const editor of editors){editor.remove();}};const undo=()=>{for(const editor of editors){_classPrivateFieldLooseBase(this,_addEditorToLayer)[_addEditorToLayer](editor);}};this.addCommands({cmd,undo,mustExec:true});}commitOrRemove(){_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]?.commitOrRemove();}selectAll(){for(const editor of _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]){editor.commit();}_classPrivateFieldLooseBase(this,_selectEditors)[_selectEditors](_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].values());}unselectAll(){if(_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]){_classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor].commitOrRemove();return;}if(_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].size===0){return;}for(const editor of _classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors]){editor.unselect();}_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].clear();_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:false});}isActive(editor){return _classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor]===editor;}getActive(){return _classPrivateFieldLooseBase(this,_activeEditor)[_activeEditor];}getMode(){return _classPrivateFieldLooseBase(this,_mode)[_mode];}}_AnnotationEditorUIManager=AnnotationEditorUIManager;function _addKeyboardManager2(){_classPrivateFieldLooseBase(this,_container)[_container].addEventListener("keydown",_classPrivateFieldLooseBase(this,_boundKeydown)[_boundKeydown]);}function _removeKeyboardManager2(){_classPrivateFieldLooseBase(this,_container)[_container].removeEventListener("keydown",_classPrivateFieldLooseBase(this,_boundKeydown)[_boundKeydown]);}function _addCopyPasteListeners2(){document.addEventListener("copy",_classPrivateFieldLooseBase(this,_boundCopy)[_boundCopy]);document.addEventListener("cut",_classPrivateFieldLooseBase(this,_boundCut)[_boundCut]);document.addEventListener("paste",_classPrivateFieldLooseBase(this,_boundPaste)[_boundPaste]);}function _removeCopyPasteListeners2(){document.removeEventListener("copy",_classPrivateFieldLooseBase(this,_boundCopy)[_boundCopy]);document.removeEventListener("cut",_classPrivateFieldLooseBase(this,_boundCut)[_boundCut]);document.removeEventListener("paste",_classPrivateFieldLooseBase(this,_boundPaste)[_boundPaste]);}function _dispatchUpdateStates2(details){const hasChanged=Object.entries(details).some(([key,value])=>_classPrivateFieldLooseBase(this,_previousStates)[_previousStates][key]!==value);if(hasChanged){_classPrivateFieldLooseBase(this,_eventBus)[_eventBus].dispatch("annotationeditorstateschanged",{source:this,details:Object.assign(_classPrivateFieldLooseBase(this,_previousStates)[_previousStates],details)});}}function _dispatchUpdateUI2(details){_classPrivateFieldLooseBase(this,_eventBus)[_eventBus].dispatch("annotationeditorparamschanged",{source:this,details});}function _enableAll2(){if(!_classPrivateFieldLooseBase(this,_isEnabled)[_isEnabled]){_classPrivateFieldLooseBase(this,_isEnabled)[_isEnabled]=true;for(const layer of _classPrivateFieldLooseBase(this,_allLayers)[_allLayers].values()){layer.enable();}}}function _disableAll2(){this.unselectAll();if(_classPrivateFieldLooseBase(this,_isEnabled)[_isEnabled]){_classPrivateFieldLooseBase(this,_isEnabled)[_isEnabled]=false;for(const layer of _classPrivateFieldLooseBase(this,_allLayers)[_allLayers].values()){layer.disable();}}}function _addEditorToLayer2(editor){const layer=_classPrivateFieldLooseBase(this,_allLayers)[_allLayers].get(editor.pageIndex);if(layer){layer.addOrRebuild(editor);}else{this.addEditor(editor);}}function _isEmpty2(){if(_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].size===0){return true;}if(_classPrivateFieldLooseBase(this,_allEditors)[_allEditors].size===1){for(const editor of _classPrivateFieldLooseBase(this,_allEditors)[_allEditors].values()){return editor.isEmpty();}}return false;}function _selectEditors2(editors){_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].clear();for(const editor of editors){if(editor.isEmpty()){continue;}_classPrivateFieldLooseBase(this,_selectedEditors)[_selectedEditors].add(editor);editor.select();}_classPrivateFieldLooseBase(this,_dispatchUpdateStates)[_dispatchUpdateStates]({hasSelectedEditor:true});}AnnotationEditorUIManager._keyboardManager=new KeyboardManager([[["ctrl+a","mac+meta+a"],_AnnotationEditorUIManager.prototype.selectAll],[["ctrl+z","mac+meta+z"],_AnnotationEditorUIManager.prototype.undo],[["ctrl+y","ctrl+shift+Z","mac+meta+shift+Z"],_AnnotationEditorUIManager.prototype.redo],[["Backspace","alt+Backspace","ctrl+Backspace","shift+Backspace","mac+Backspace","mac+alt+Backspace","mac+ctrl+Backspace","Delete","ctrl+Delete","shift+Delete"],_AnnotationEditorUIManager.prototype.delete],[["Escape","mac+Escape"],_AnnotationEditorUIManager.prototype.unselectAll]]);exports.AnnotationEditorUIManager=AnnotationEditorUIManager;/***/}),(/* 6 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var _PixelsPerInch;Object.defineProperty(exports,"__esModule",{value:true});exports.StatTimer=exports.RenderingCancelledException=exports.PixelsPerInch=exports.PageViewport=exports.PDFDateString=exports.DOMStandardFontDataFactory=exports.DOMSVGFactory=exports.DOMFilterFactory=exports.DOMCanvasFactory=exports.DOMCMapReaderFactory=exports.AnnotationPrefix=void 0;exports.deprecated=deprecated;exports.getColorValues=getColorValues;exports.getCurrentTransform=getCurrentTransform;exports.getCurrentTransformInverse=getCurrentTransformInverse;exports.getFilenameFromUrl=getFilenameFromUrl;exports.getPdfFilenameFromUrl=getPdfFilenameFromUrl;exports.getRGB=getRGB;exports.getXfaPageViewport=getXfaPageViewport;exports.isDataScheme=isDataScheme;exports.isPdfFile=isPdfFile;exports.isValidFetchUrl=isValidFetchUrl;exports.loadScript=loadScript;exports.setLayerDimensions=setLayerDimensions;var _base_factory=__w_pdfjs_require__(7);var _util=__w_pdfjs_require__(1);const SVG_NS="http://www.w3.org/2000/svg";const AnnotationPrefix="pdfjs_internal_id_";exports.AnnotationPrefix=AnnotationPrefix;class PixelsPerInch{}_PixelsPerInch=PixelsPerInch;PixelsPerInch.CSS=96.0;PixelsPerInch.PDF=72.0;PixelsPerInch.PDF_TO_CSS_UNITS=_PixelsPerInch.CSS/_PixelsPerInch.PDF;exports.PixelsPerInch=PixelsPerInch;var _cache=/*#__PURE__*/_classPrivateFieldLooseKey("_cache");var _defs=/*#__PURE__*/_classPrivateFieldLooseKey("_defs");var _docId2=/*#__PURE__*/_classPrivateFieldLooseKey("docId");var _document=/*#__PURE__*/_classPrivateFieldLooseKey("document");var _hcmFilter=/*#__PURE__*/_classPrivateFieldLooseKey("hcmFilter");var _hcmKey=/*#__PURE__*/_classPrivateFieldLooseKey("hcmKey");var _hcmUrl=/*#__PURE__*/_classPrivateFieldLooseKey("hcmUrl");var _id2=/*#__PURE__*/_classPrivateFieldLooseKey("id");var _cache2=/*#__PURE__*/_classPrivateFieldLooseKey("cache");var _defs2=/*#__PURE__*/_classPrivateFieldLooseKey("defs");var _appendFeFunc=/*#__PURE__*/_classPrivateFieldLooseKey("appendFeFunc");class DOMFilterFactory extends _base_factory.BaseFilterFactory{constructor({docId,ownerDocument=globalThis.document}={}){super();Object.defineProperty(this,_appendFeFunc,{value:_appendFeFunc2});Object.defineProperty(this,_defs2,{get:_get_defs,set:void 0});Object.defineProperty(this,_cache2,{get:_get_cache,set:void 0});Object.defineProperty(this,_cache,{writable:true,value:void 0});Object.defineProperty(this,_defs,{writable:true,value:void 0});Object.defineProperty(this,_docId2,{writable:true,value:void 0});Object.defineProperty(this,_document,{writable:true,value:void 0});Object.defineProperty(this,_hcmFilter,{writable:true,value:void 0});Object.defineProperty(this,_hcmKey,{writable:true,value:void 0});Object.defineProperty(this,_hcmUrl,{writable:true,value:void 0});Object.defineProperty(this,_id2,{writable:true,value:0});_classPrivateFieldLooseBase(this,_docId2)[_docId2]=docId;_classPrivateFieldLooseBase(this,_document)[_document]=ownerDocument;}addFilter(maps){if(!maps){return"none";}let value=_classPrivateFieldLooseBase(this,_cache2)[_cache2].get(maps);if(value){return value;}let tableR,tableG,tableB,key;if(maps.length===1){const mapR=maps[0];const buffer=new Array(256);for(let i=0;i<256;i++){buffer[i]=mapR[i]/255;}key=tableR=tableG=tableB=buffer.join(",");}else{const[mapR,mapG,mapB]=maps;const bufferR=new Array(256);const bufferG=new Array(256);const bufferB=new Array(256);for(let i=0;i<256;i++){bufferR[i]=mapR[i]/255;bufferG[i]=mapG[i]/255;bufferB[i]=mapB[i]/255;}tableR=bufferR.join(",");tableG=bufferG.join(",");tableB=bufferB.join(",");key=`${tableR}${tableG}${tableB}`;}value=_classPrivateFieldLooseBase(this,_cache2)[_cache2].get(key);if(value){_classPrivateFieldLooseBase(this,_cache2)[_cache2].set(maps,value);return value;}const id=`g_${_classPrivateFieldLooseBase(this,_docId2)[_docId2]}_transfer_map_${_classPrivateFieldLooseBase(this,_id2)[_id2]++}`;const url=`url(#${id})`;_classPrivateFieldLooseBase(this,_cache2)[_cache2].set(maps,url);_classPrivateFieldLooseBase(this,_cache2)[_cache2].set(key,url);const filter=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"filter",SVG_NS);filter.setAttribute("id",id);filter.setAttribute("color-interpolation-filters","sRGB");const feComponentTransfer=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"feComponentTransfer");filter.append(feComponentTransfer);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncR",tableR);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncG",tableG);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncB",tableB);_classPrivateFieldLooseBase(this,_defs2)[_defs2].append(filter);return url;}addHCMFilter(fgColor,bgColor){const key=`${fgColor}-${bgColor}`;if(_classPrivateFieldLooseBase(this,_hcmKey)[_hcmKey]===key){return _classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl];}_classPrivateFieldLooseBase(this,_hcmKey)[_hcmKey]=key;_classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl]="none";_classPrivateFieldLooseBase(this,_hcmFilter)[_hcmFilter]?.remove();if(!fgColor||!bgColor){return _classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl];}_classPrivateFieldLooseBase(this,_defs2)[_defs2].style.color=fgColor;fgColor=getComputedStyle(_classPrivateFieldLooseBase(this,_defs2)[_defs2]).getPropertyValue("color");const fgRGB=getRGB(fgColor);fgColor=_util.Util.makeHexColor(...fgRGB);_classPrivateFieldLooseBase(this,_defs2)[_defs2].style.color=bgColor;bgColor=getComputedStyle(_classPrivateFieldLooseBase(this,_defs2)[_defs2]).getPropertyValue("color");const bgRGB=getRGB(bgColor);bgColor=_util.Util.makeHexColor(...bgRGB);_classPrivateFieldLooseBase(this,_defs2)[_defs2].style.color="";if(fgColor==="#000000"&&bgColor==="#ffffff"||fgColor===bgColor){return _classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl];}const map=new Array(256);for(let i=0;i<=255;i++){const x=i/255;map[i]=x<=0.03928?x/12.92:((x+0.055)/1.055)**2.4;}const table=map.join(",");const id=`g_${_classPrivateFieldLooseBase(this,_docId2)[_docId2]}_hcm_filter`;const filter=_classPrivateFieldLooseBase(this,_hcmFilter)[_hcmFilter]=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"filter",SVG_NS);filter.setAttribute("id",id);filter.setAttribute("color-interpolation-filters","sRGB");let feComponentTransfer=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"feComponentTransfer");filter.append(feComponentTransfer);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncR",table);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncG",table);_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncB",table);const feColorMatrix=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"feColorMatrix");feColorMatrix.setAttribute("type","matrix");feColorMatrix.setAttribute("values","0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");filter.append(feColorMatrix);feComponentTransfer=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"feComponentTransfer");filter.append(feComponentTransfer);const getSteps=(c,n)=>{const start=fgRGB[c]/255;const end=bgRGB[c]/255;const arr=new Array(n+1);for(let i=0;i<=n;i++){arr[i]=start+i/n*(end-start);}return arr.join(",");};_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncR",getSteps(0,5));_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncG",getSteps(1,5));_classPrivateFieldLooseBase(this,_appendFeFunc)[_appendFeFunc](feComponentTransfer,"feFuncB",getSteps(2,5));_classPrivateFieldLooseBase(this,_defs2)[_defs2].append(filter);_classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl]=`url(#${id})`;return _classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl];}destroy(keepHCM=false){if(keepHCM&&_classPrivateFieldLooseBase(this,_hcmUrl)[_hcmUrl]){return;}if(_classPrivateFieldLooseBase(this,_defs)[_defs]){_classPrivateFieldLooseBase(this,_defs)[_defs].parentNode.parentNode.remove();_classPrivateFieldLooseBase(this,_defs)[_defs]=null;}if(_classPrivateFieldLooseBase(this,_cache)[_cache]){_classPrivateFieldLooseBase(this,_cache)[_cache].clear();_classPrivateFieldLooseBase(this,_cache)[_cache]=null;}_classPrivateFieldLooseBase(this,_id2)[_id2]=0;}}function _get_cache(){return _classPrivateFieldLooseBase(this,_cache)[_cache]||=new Map();}function _get_defs(){if(!_classPrivateFieldLooseBase(this,_defs)[_defs]){const div=_classPrivateFieldLooseBase(this,_document)[_document].createElement("div");const{style}=div;style.visibility="hidden";style.contain="strict";style.width=style.height=0;style.position="absolute";style.top=style.left=0;style.zIndex=-1;const svg=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"svg");svg.setAttribute("width",0);svg.setAttribute("height",0);_classPrivateFieldLooseBase(this,_defs)[_defs]=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,"defs");div.append(svg);svg.append(_classPrivateFieldLooseBase(this,_defs)[_defs]);_classPrivateFieldLooseBase(this,_document)[_document].body.append(div);}return _classPrivateFieldLooseBase(this,_defs)[_defs];}function _appendFeFunc2(feComponentTransfer,func,table){const feFunc=_classPrivateFieldLooseBase(this,_document)[_document].createElementNS(SVG_NS,func);feFunc.setAttribute("type","discrete");feFunc.setAttribute("tableValues",table);feComponentTransfer.append(feFunc);}exports.DOMFilterFactory=DOMFilterFactory;class DOMCanvasFactory extends _base_factory.BaseCanvasFactory{constructor({ownerDocument=globalThis.document}={}){super();this._document=ownerDocument;}_createCanvas(width,height){const canvas=this._document.createElement("canvas");canvas.width=width;canvas.height=height;return canvas;}}exports.DOMCanvasFactory=DOMCanvasFactory;async function fetchData(url,asTypedArray=false){if(isValidFetchUrl(url,document.baseURI)){const response=await fetch(url);if(!response.ok){throw new Error(response.statusText);}return asTypedArray?new Uint8Array(await response.arrayBuffer()):(0,_util.stringToBytes)(await response.text());}return new Promise((resolve,reject)=>{const request=new XMLHttpRequest();request.open("GET",url,true);if(asTypedArray){request.responseType="arraybuffer";}request.onreadystatechange=()=>{if(request.readyState!==XMLHttpRequest.DONE){return;}if(request.status===200||request.status===0){let data;if(asTypedArray&&request.response){data=new Uint8Array(request.response);}else if(!asTypedArray&&request.responseText){data=(0,_util.stringToBytes)(request.responseText);}if(data){resolve(data);return;}}reject(new Error(request.statusText));};request.send(null);});}class DOMCMapReaderFactory extends _base_factory.BaseCMapReaderFactory{_fetchData(url,compressionType){return fetchData(url,this.isCompressed).then(data=>{return{cMapData:data,compressionType};});}}exports.DOMCMapReaderFactory=DOMCMapReaderFactory;class DOMStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory{_fetchData(url){return fetchData(url,true);}}exports.DOMStandardFontDataFactory=DOMStandardFontDataFactory;class DOMSVGFactory extends _base_factory.BaseSVGFactory{_createSVG(type){return document.createElementNS(SVG_NS,type);}}exports.DOMSVGFactory=DOMSVGFactory;class PageViewport{constructor({viewBox,scale,rotation,offsetX=0,offsetY=0,dontFlip=false}){this.viewBox=viewBox;this.scale=scale;this.rotation=rotation;this.offsetX=offsetX;this.offsetY=offsetY;const centerX=(viewBox[2]+viewBox[0])/2;const centerY=(viewBox[3]+viewBox[1])/2;let rotateA,rotateB,rotateC,rotateD;rotation%=360;if(rotation<0){rotation+=360;}switch(rotation){case 180:rotateA=-1;rotateB=0;rotateC=0;rotateD=1;break;case 90:rotateA=0;rotateB=1;rotateC=1;rotateD=0;break;case 270:rotateA=0;rotateB=-1;rotateC=-1;rotateD=0;break;case 0:rotateA=1;rotateB=0;rotateC=0;rotateD=-1;break;default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");}if(dontFlip){rotateC=-rotateC;rotateD=-rotateD;}let offsetCanvasX,offsetCanvasY;let width,height;if(rotateA===0){offsetCanvasX=Math.abs(centerY-viewBox[1])*scale+offsetX;offsetCanvasY=Math.abs(centerX-viewBox[0])*scale+offsetY;width=(viewBox[3]-viewBox[1])*scale;height=(viewBox[2]-viewBox[0])*scale;}else{offsetCanvasX=Math.abs(centerX-viewBox[0])*scale+offsetX;offsetCanvasY=Math.abs(centerY-viewBox[1])*scale+offsetY;width=(viewBox[2]-viewBox[0])*scale;height=(viewBox[3]-viewBox[1])*scale;}this.transform=[rotateA*scale,rotateB*scale,rotateC*scale,rotateD*scale,offsetCanvasX-rotateA*scale*centerX-rotateC*scale*centerY,offsetCanvasY-rotateB*scale*centerX-rotateD*scale*centerY];this.width=width;this.height=height;}get rawDims(){const{viewBox}=this;return(0,_util.shadow)(this,"rawDims",{pageWidth:viewBox[2]-viewBox[0],pageHeight:viewBox[3]-viewBox[1],pageX:viewBox[0],pageY:viewBox[1]});}clone({scale=this.scale,rotation=this.rotation,offsetX=this.offsetX,offsetY=this.offsetY,dontFlip=false}={}){return new PageViewport({viewBox:this.viewBox.slice(),scale,rotation,offsetX,offsetY,dontFlip});}convertToViewportPoint(x,y){return _util.Util.applyTransform([x,y],this.transform);}convertToViewportRectangle(rect){const topLeft=_util.Util.applyTransform([rect[0],rect[1]],this.transform);const bottomRight=_util.Util.applyTransform([rect[2],rect[3]],this.transform);return[topLeft[0],topLeft[1],bottomRight[0],bottomRight[1]];}convertToPdfPoint(x,y){return _util.Util.applyInverseTransform([x,y],this.transform);}}exports.PageViewport=PageViewport;class RenderingCancelledException extends _util.BaseException{constructor(msg,type,extraDelay=0){super(msg,"RenderingCancelledException");this.type=type;this.extraDelay=extraDelay;}}exports.RenderingCancelledException=RenderingCancelledException;function isDataScheme(url){const ii=url.length;let i=0;while(i<ii&&url[i].trim()===""){i++;}return url.substring(i,i+5).toLowerCase()==="data:";}function isPdfFile(filename){return typeof filename==="string"&&/\.pdf$/i.test(filename);}function getFilenameFromUrl(url,onlyStripPath=false){if(!onlyStripPath){[url]=url.split(/[#?]/,1);}return url.substring(url.lastIndexOf("/")+1);}function getPdfFilenameFromUrl(url,defaultFilename="document.pdf"){if(typeof url!=="string"){return defaultFilename;}if(isDataScheme(url)){(0,_util.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');return defaultFilename;}const reURI=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;const reFilename=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;const splitURI=reURI.exec(url);let suggestedFilename=reFilename.exec(splitURI[1])||reFilename.exec(splitURI[2])||reFilename.exec(splitURI[3]);if(suggestedFilename){suggestedFilename=suggestedFilename[0];if(suggestedFilename.includes("%")){try{suggestedFilename=reFilename.exec(decodeURIComponent(suggestedFilename))[0];}catch(ex){}}}return suggestedFilename||defaultFilename;}class StatTimer{constructor(){this.started=Object.create(null);this.times=[];}time(name){if(name in this.started){(0,_util.warn)(`Timer is already running for ${name}`);}this.started[name]=Date.now();}timeEnd(name){if(!(name in this.started)){(0,_util.warn)(`Timer has not been started for ${name}`);}this.times.push({name,start:this.started[name],end:Date.now()});delete this.started[name];}toString(){const outBuf=[];let longest=0;for(const{name}of this.times){longest=Math.max(name.length,longest);}for(const{name,start,end}of this.times){outBuf.push(`${name.padEnd(longest)} ${end-start}ms\n`);}return outBuf.join("");}}exports.StatTimer=StatTimer;function isValidFetchUrl(url,baseUrl){try{const{protocol}=baseUrl?new URL(url,baseUrl):new URL(url);return protocol==="http:"||protocol==="https:";}catch(ex){return false;}}function loadScript(src,removeScriptElement=false){return new Promise((resolve,reject)=>{const script=document.createElement("script");script.src=src;script.onload=function(evt){if(removeScriptElement){script.remove();}resolve(evt);};script.onerror=function(){reject(new Error(`Cannot load script at: ${script.src}`));};(document.head||document.documentElement).append(script);});}function deprecated(details){console.log("Deprecated API usage: "+details);}let pdfDateStringRegex;class PDFDateString{static toDateObject(input){if(!input||typeof input!=="string"){return null;}if(!pdfDateStringRegex){pdfDateStringRegex=new RegExp("^D:"+"(\\d{4})"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"([Z|+|-])?"+"(\\d{2})?"+"'?"+"(\\d{2})?"+"'?");}const matches=pdfDateStringRegex.exec(input);if(!matches){return null;}const year=parseInt(matches[1],10);let month=parseInt(matches[2],10);month=month>=1&&month<=12?month-1:0;let day=parseInt(matches[3],10);day=day>=1&&day<=31?day:1;let hour=parseInt(matches[4],10);hour=hour>=0&&hour<=23?hour:0;let minute=parseInt(matches[5],10);minute=minute>=0&&minute<=59?minute:0;let second=parseInt(matches[6],10);second=second>=0&&second<=59?second:0;const universalTimeRelation=matches[7]||"Z";let offsetHour=parseInt(matches[8],10);offsetHour=offsetHour>=0&&offsetHour<=23?offsetHour:0;let offsetMinute=parseInt(matches[9],10)||0;offsetMinute=offsetMinute>=0&&offsetMinute<=59?offsetMinute:0;if(universalTimeRelation==="-"){hour+=offsetHour;minute+=offsetMinute;}else if(universalTimeRelation==="+"){hour-=offsetHour;minute-=offsetMinute;}return new Date(Date.UTC(year,month,day,hour,minute,second));}}exports.PDFDateString=PDFDateString;function getXfaPageViewport(xfaPage,{scale=1,rotation=0}){const{width,height}=xfaPage.attributes.style;const viewBox=[0,0,parseInt(width),parseInt(height)];return new PageViewport({viewBox,scale,rotation});}function getRGB(color){if(color.startsWith("#")){const colorRGB=parseInt(color.slice(1),16);return[(colorRGB&0xff0000)>>16,(colorRGB&0x00ff00)>>8,colorRGB&0x0000ff];}if(color.startsWith("rgb(")){return color.slice(4,-1).split(",").map(x=>parseInt(x));}if(color.startsWith("rgba(")){return color.slice(5,-1).split(",").map(x=>parseInt(x)).slice(0,3);}(0,_util.warn)(`Not a valid color format: "${color}"`);return[0,0,0];}function getColorValues(colors){const span=document.createElement("span");span.style.visibility="hidden";document.body.append(span);for(const name of colors.keys()){span.style.color=name;const computedColor=window.getComputedStyle(span).color;colors.set(name,getRGB(computedColor));}span.remove();}function getCurrentTransform(ctx){const{a,b,c,d,e,f}=ctx.getTransform();return[a,b,c,d,e,f];}function getCurrentTransformInverse(ctx){const{a,b,c,d,e,f}=ctx.getTransform().invertSelf();return[a,b,c,d,e,f];}function setLayerDimensions(div,viewport,mustFlip=false,mustRotate=true){if(viewport instanceof PageViewport){const{pageWidth,pageHeight}=viewport.rawDims;const{style}=div;const widthStr=`calc(var(--scale-factor) * ${pageWidth}px)`;const heightStr=`calc(var(--scale-factor) * ${pageHeight}px)`;if(!mustFlip||viewport.rotation%180===0){style.width=widthStr;style.height=heightStr;}else{style.width=heightStr;style.height=widthStr;}}if(mustRotate){div.setAttribute("data-main-rotation",viewport.rotation);}}/***/}),(/* 7 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.BaseStandardFontDataFactory=exports.BaseSVGFactory=exports.BaseFilterFactory=exports.BaseCanvasFactory=exports.BaseCMapReaderFactory=void 0;var _util=__w_pdfjs_require__(1);class BaseFilterFactory{constructor(){if(this.constructor===BaseFilterFactory){(0,_util.unreachable)("Cannot initialize BaseFilterFactory.");}}addFilter(maps){return"none";}addHCMFilter(fgColor,bgColor){return"none";}destroy(keepHCM=false){}}exports.BaseFilterFactory=BaseFilterFactory;class BaseCanvasFactory{constructor(){if(this.constructor===BaseCanvasFactory){(0,_util.unreachable)("Cannot initialize BaseCanvasFactory.");}}create(width,height){if(width<=0||height<=0){throw new Error("Invalid canvas size");}const canvas=this._createCanvas(width,height);return{canvas,context:canvas.getContext("2d")};}reset(canvasAndContext,width,height){if(!canvasAndContext.canvas){throw new Error("Canvas is not specified");}if(width<=0||height<=0){throw new Error("Invalid canvas size");}canvasAndContext.canvas.width=width;canvasAndContext.canvas.height=height;}destroy(canvasAndContext){if(!canvasAndContext.canvas){throw new Error("Canvas is not specified");}canvasAndContext.canvas.width=0;canvasAndContext.canvas.height=0;canvasAndContext.canvas=null;canvasAndContext.context=null;}_createCanvas(width,height){(0,_util.unreachable)("Abstract method `_createCanvas` called.");}}exports.BaseCanvasFactory=BaseCanvasFactory;class BaseCMapReaderFactory{constructor({baseUrl=null,isCompressed=true}){if(this.constructor===BaseCMapReaderFactory){(0,_util.unreachable)("Cannot initialize BaseCMapReaderFactory.");}this.baseUrl=baseUrl;this.isCompressed=isCompressed;}async fetch({name}){if(!this.baseUrl){throw new Error('The CMap "baseUrl" parameter must be specified, ensure that '+'the "cMapUrl" and "cMapPacked" API parameters are provided.');}if(!name){throw new Error("CMap name must be specified.");}const url=this.baseUrl+name+(this.isCompressed?".bcmap":"");const compressionType=this.isCompressed?_util.CMapCompressionType.BINARY:_util.CMapCompressionType.NONE;return this._fetchData(url,compressionType).catch(reason=>{throw new Error(`Unable to load ${this.isCompressed?"binary ":""}CMap at: ${url}`);});}_fetchData(url,compressionType){(0,_util.unreachable)("Abstract method `_fetchData` called.");}}exports.BaseCMapReaderFactory=BaseCMapReaderFactory;class BaseStandardFontDataFactory{constructor({baseUrl=null}){if(this.constructor===BaseStandardFontDataFactory){(0,_util.unreachable)("Cannot initialize BaseStandardFontDataFactory.");}this.baseUrl=baseUrl;}async fetch({filename}){if(!this.baseUrl){throw new Error('The standard font "baseUrl" parameter must be specified, ensure that '+'the "standardFontDataUrl" API parameter is provided.');}if(!filename){throw new Error("Font filename must be specified.");}const url=`${this.baseUrl}${filename}`;return this._fetchData(url).catch(reason=>{throw new Error(`Unable to load font data at: ${url}`);});}_fetchData(url){(0,_util.unreachable)("Abstract method `_fetchData` called.");}}exports.BaseStandardFontDataFactory=BaseStandardFontDataFactory;class BaseSVGFactory{constructor(){if(this.constructor===BaseSVGFactory){(0,_util.unreachable)("Cannot initialize BaseSVGFactory.");}}create(width,height,skipDimensions=false){if(width<=0||height<=0){throw new Error("Invalid SVG dimensions");}const svg=this._createSVG("svg:svg");svg.setAttribute("version","1.1");if(!skipDimensions){svg.setAttribute("width",`${width}px`);svg.setAttribute("height",`${height}px`);}svg.setAttribute("preserveAspectRatio","none");svg.setAttribute("viewBox",`0 0 ${width} ${height}`);return svg;}createElement(type){if(typeof type!=="string"){throw new Error("Invalid SVG element type");}return this._createSVG(type);}_createSVG(type){(0,_util.unreachable)("Abstract method `_createSVG` called.");}}exports.BaseSVGFactory=BaseSVGFactory;/***/}),(/* 8 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.MurmurHash3_64=void 0;var _util=__w_pdfjs_require__(1);const SEED=0xc3d2e1f0;const MASK_HIGH=0xffff0000;const MASK_LOW=0xffff;class MurmurHash3_64{constructor(seed){this.h1=seed?seed&0xffffffff:SEED;this.h2=seed?seed&0xffffffff:SEED;}update(input){let data,length;if(typeof input==="string"){data=new Uint8Array(input.length*2);length=0;for(let i=0,ii=input.length;i<ii;i++){const code=input.charCodeAt(i);if(code<=0xff){data[length++]=code;}else{data[length++]=code>>>8;data[length++]=code&0xff;}}}else if((0,_util.isArrayBuffer)(input)){data=input.slice();length=data.byteLength;}else{throw new Error("Wrong data format in MurmurHash3_64_update. "+"Input must be a string or array.");}const blockCounts=length>>2;const tailLength=length-blockCounts*4;const dataUint32=new Uint32Array(data.buffer,0,blockCounts);let k1=0,k2=0;let h1=this.h1,h2=this.h2;const C1=0xcc9e2d51,C2=0x1b873593;const C1_LOW=C1&MASK_LOW,C2_LOW=C2&MASK_LOW;for(let i=0;i<blockCounts;i++){if(i&1){k1=dataUint32[i];k1=k1*C1&MASK_HIGH|k1*C1_LOW&MASK_LOW;k1=k1<<15|k1>>>17;k1=k1*C2&MASK_HIGH|k1*C2_LOW&MASK_LOW;h1^=k1;h1=h1<<13|h1>>>19;h1=h1*5+0xe6546b64;}else{k2=dataUint32[i];k2=k2*C1&MASK_HIGH|k2*C1_LOW&MASK_LOW;k2=k2<<15|k2>>>17;k2=k2*C2&MASK_HIGH|k2*C2_LOW&MASK_LOW;h2^=k2;h2=h2<<13|h2>>>19;h2=h2*5+0xe6546b64;}}k1=0;switch(tailLength){case 3:k1^=data[blockCounts*4+2]<<16;case 2:k1^=data[blockCounts*4+1]<<8;case 1:k1^=data[blockCounts*4];k1=k1*C1&MASK_HIGH|k1*C1_LOW&MASK_LOW;k1=k1<<15|k1>>>17;k1=k1*C2&MASK_HIGH|k1*C2_LOW&MASK_LOW;if(blockCounts&1){h1^=k1;}else{h2^=k1;}}this.h1=h1;this.h2=h2;}hexdigest(){let h1=this.h1,h2=this.h2;h1^=h2>>>1;h1=h1*0xed558ccd&MASK_HIGH|h1*0x8ccd&MASK_LOW;h2=h2*0xff51afd7&MASK_HIGH|((h2<<16|h1>>>16)*0xafd7ed55&MASK_HIGH)>>>16;h1^=h2>>>1;h1=h1*0x1a85ec53&MASK_HIGH|h1*0xec53&MASK_LOW;h2=h2*0xc4ceb9fe&MASK_HIGH|((h2<<16|h1>>>16)*0xb9fe1a85&MASK_HIGH)>>>16;h1^=h2>>>1;return(h1>>>0).toString(16).padStart(8,"0")+(h2>>>0).toString(16).padStart(8,"0");}}exports.MurmurHash3_64=MurmurHash3_64;/***/}),(/* 9 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.FontLoader=exports.FontFaceObject=void 0;var _util=__w_pdfjs_require__(1);var _is_node=__w_pdfjs_require__(10);class FontLoader{constructor({ownerDocument=globalThis.document,styleElement=null}){this._document=ownerDocument;this.nativeFontFaces=[];this.styleElement=null;this.loadingRequests=[];this.loadTestFontId=0;}addNativeFontFace(nativeFontFace){this.nativeFontFaces.push(nativeFontFace);this._document.fonts.add(nativeFontFace);}insertRule(rule){if(!this.styleElement){this.styleElement=this._document.createElement("style");this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);}const styleSheet=this.styleElement.sheet;styleSheet.insertRule(rule,styleSheet.cssRules.length);}clear(){for(const nativeFontFace of this.nativeFontFaces){this._document.fonts.delete(nativeFontFace);}this.nativeFontFaces.length=0;if(this.styleElement){this.styleElement.remove();this.styleElement=null;}}async bind(font){if(font.attached||font.missingFile){return;}font.attached=true;if(this.isFontLoadingAPISupported){const nativeFontFace=font.createNativeFontFace();if(nativeFontFace){this.addNativeFontFace(nativeFontFace);try{await nativeFontFace.loaded;}catch(ex){(0,_util.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);font.disableFontFace=true;throw ex;}}return;}const rule=font.createFontFaceRule();if(rule){this.insertRule(rule);if(this.isSyncFontLoadingSupported){return;}await new Promise(resolve=>{const request=this._queueLoadingCallback(resolve);this._prepareFontLoadEvent(font,request);});}}get isFontLoadingAPISupported(){const hasFonts=!!this._document?.fonts;return(0,_util.shadow)(this,"isFontLoadingAPISupported",hasFonts);}get isSyncFontLoadingSupported(){let supported=false;if(_is_node.isNodeJS){supported=true;}else if(typeof navigator!=="undefined"&&/Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)){supported=true;}return(0,_util.shadow)(this,"isSyncFontLoadingSupported",supported);}_queueLoadingCallback(callback){function completeRequest(){(0,_util.assert)(!request.done,"completeRequest() cannot be called twice.");request.done=true;while(loadingRequests.length>0&&loadingRequests[0].done){const otherRequest=loadingRequests.shift();setTimeout(otherRequest.callback,0);}}const{loadingRequests}=this;const request={done:false,complete:completeRequest,callback};loadingRequests.push(request);return request;}get _loadTestFont(){const testFont=atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA"+"FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA"+"ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA"+"AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1"+"AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD"+"6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM"+"AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D"+"IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA"+"AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA"+"AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB"+"AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY"+"AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA"+"AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA"+"AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC"+"AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3"+"Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj"+"FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");return(0,_util.shadow)(this,"_loadTestFont",testFont);}_prepareFontLoadEvent(font,request){function int32(data,offset){return data.charCodeAt(offset)<<24|data.charCodeAt(offset+1)<<16|data.charCodeAt(offset+2)<<8|data.charCodeAt(offset+3)&0xff;}function spliceString(s,offset,remove,insert){const chunk1=s.substring(0,offset);const chunk2=s.substring(offset+remove);return chunk1+insert+chunk2;}let i,ii;const canvas=this._document.createElement("canvas");canvas.width=1;canvas.height=1;const ctx=canvas.getContext("2d");let called=0;function isFontReady(name,callback){if(++called>30){(0,_util.warn)("Load test font never loaded.");callback();return;}ctx.font="30px "+name;ctx.fillText(".",0,20);const imageData=ctx.getImageData(0,0,1,1);if(imageData.data[3]>0){callback();return;}setTimeout(isFontReady.bind(null,name,callback));}const loadTestFontId=`lt${Date.now()}${this.loadTestFontId++}`;let data=this._loadTestFont;const COMMENT_OFFSET=976;data=spliceString(data,COMMENT_OFFSET,loadTestFontId.length,loadTestFontId);const CFF_CHECKSUM_OFFSET=16;const XXXX_VALUE=0x58585858;let checksum=int32(data,CFF_CHECKSUM_OFFSET);for(i=0,ii=loadTestFontId.length-3;i<ii;i+=4){checksum=checksum-XXXX_VALUE+int32(loadTestFontId,i)|0;}if(i<loadTestFontId.length){checksum=checksum-XXXX_VALUE+int32(loadTestFontId+"XXX",i)|0;}data=spliceString(data,CFF_CHECKSUM_OFFSET,4,(0,_util.string32)(checksum));const url=`url(data:font/opentype;base64,${btoa(data)});`;const rule=`@font-face {font-family:"${loadTestFontId}";src:${url}}`;this.insertRule(rule);const div=this._document.createElement("div");div.style.visibility="hidden";div.style.width=div.style.height="10px";div.style.position="absolute";div.style.top=div.style.left="0px";for(const name of[font.loadedName,loadTestFontId]){const span=this._document.createElement("span");span.textContent="Hi";span.style.fontFamily=name;div.append(span);}this._document.body.append(div);isFontReady(loadTestFontId,()=>{div.remove();request.complete();});}}exports.FontLoader=FontLoader;class FontFaceObject{constructor(translatedData,{isEvalSupported=true,disableFontFace=false,ignoreErrors=false,inspectFont=null}){this.compiledGlyphs=Object.create(null);for(const i in translatedData){this[i]=translatedData[i];}this.isEvalSupported=isEvalSupported!==false;this.disableFontFace=disableFontFace===true;this.ignoreErrors=ignoreErrors===true;this._inspectFont=inspectFont;}createNativeFontFace(){if(!this.data||this.disableFontFace){return null;}let nativeFontFace;if(!this.cssFontInfo){nativeFontFace=new FontFace(this.loadedName,this.data,{});}else{const css={weight:this.cssFontInfo.fontWeight};if(this.cssFontInfo.italicAngle){css.style=`oblique ${this.cssFontInfo.italicAngle}deg`;}nativeFontFace=new FontFace(this.cssFontInfo.fontFamily,this.data,css);}this._inspectFont?.(this);return nativeFontFace;}createFontFaceRule(){if(!this.data||this.disableFontFace){return null;}const data=(0,_util.bytesToString)(this.data);const url=`url(data:${this.mimetype};base64,${btoa(data)});`;let rule;if(!this.cssFontInfo){rule=`@font-face {font-family:"${this.loadedName}";src:${url}}`;}else{let css=`font-weight: ${this.cssFontInfo.fontWeight};`;if(this.cssFontInfo.italicAngle){css+=`font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;}rule=`@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;}this._inspectFont?.(this,url);return rule;}getPathGenerator(objs,character){if(this.compiledGlyphs[character]!==undefined){return this.compiledGlyphs[character];}let cmds;try{cmds=objs.get(this.loadedName+"_path_"+character);}catch(ex){if(!this.ignoreErrors){throw ex;}(0,_util.warn)(`getPathGenerator - ignoring character: "${ex}".`);return this.compiledGlyphs[character]=function(c,size){};}if(this.isEvalSupported&&_util.FeatureTest.isEvalSupported){const jsBuf=[];for(const current of cmds){const args=current.args!==undefined?current.args.join(","):"";jsBuf.push("c.",current.cmd,"(",args,");\n");}return this.compiledGlyphs[character]=new Function("c","size",jsBuf.join(""));}return this.compiledGlyphs[character]=function(c,size){for(const current of cmds){if(current.cmd==="scale"){current.args=[size,-size];}c[current.cmd].apply(c,current.args);}};}}exports.FontFaceObject=FontFaceObject;/***/}),(/* 10 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.isNodeJS=void 0;const isNodeJS=typeof process==="object"&&process+""==="[object process]"&&!process.versions.nw&&!(process.versions.electron&&process.type&&process.type!=="browser");exports.isNodeJS=isNodeJS;/***/}),(/* 11 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.CanvasGraphics=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);var _pattern_helper=__w_pdfjs_require__(12);var _image_utils=__w_pdfjs_require__(13);var _is_node=__w_pdfjs_require__(10);const MIN_FONT_SIZE=16;const MAX_FONT_SIZE=100;const MAX_GROUP_SIZE=4096;const EXECUTION_TIME=15;const EXECUTION_STEPS=10;const MAX_SIZE_TO_COMPILE=1000;const FULL_CHUNK_HEIGHT=16;function mirrorContextOperations(ctx,destCtx){if(ctx._removeMirroring){throw new Error("Context is already forwarding operations.");}ctx.__originalSave=ctx.save;ctx.__originalRestore=ctx.restore;ctx.__originalRotate=ctx.rotate;ctx.__originalScale=ctx.scale;ctx.__originalTranslate=ctx.translate;ctx.__originalTransform=ctx.transform;ctx.__originalSetTransform=ctx.setTransform;ctx.__originalResetTransform=ctx.resetTransform;ctx.__originalClip=ctx.clip;ctx.__originalMoveTo=ctx.moveTo;ctx.__originalLineTo=ctx.lineTo;ctx.__originalBezierCurveTo=ctx.bezierCurveTo;ctx.__originalRect=ctx.rect;ctx.__originalClosePath=ctx.closePath;ctx.__originalBeginPath=ctx.beginPath;ctx._removeMirroring=()=>{ctx.save=ctx.__originalSave;ctx.restore=ctx.__originalRestore;ctx.rotate=ctx.__originalRotate;ctx.scale=ctx.__originalScale;ctx.translate=ctx.__originalTranslate;ctx.transform=ctx.__originalTransform;ctx.setTransform=ctx.__originalSetTransform;ctx.resetTransform=ctx.__originalResetTransform;ctx.clip=ctx.__originalClip;ctx.moveTo=ctx.__originalMoveTo;ctx.lineTo=ctx.__originalLineTo;ctx.bezierCurveTo=ctx.__originalBezierCurveTo;ctx.rect=ctx.__originalRect;ctx.closePath=ctx.__originalClosePath;ctx.beginPath=ctx.__originalBeginPath;delete ctx._removeMirroring;};ctx.save=function ctxSave(){destCtx.save();this.__originalSave();};ctx.restore=function ctxRestore(){destCtx.restore();this.__originalRestore();};ctx.translate=function ctxTranslate(x,y){destCtx.translate(x,y);this.__originalTranslate(x,y);};ctx.scale=function ctxScale(x,y){destCtx.scale(x,y);this.__originalScale(x,y);};ctx.transform=function ctxTransform(a,b,c,d,e,f){destCtx.transform(a,b,c,d,e,f);this.__originalTransform(a,b,c,d,e,f);};ctx.setTransform=function ctxSetTransform(a,b,c,d,e,f){destCtx.setTransform(a,b,c,d,e,f);this.__originalSetTransform(a,b,c,d,e,f);};ctx.resetTransform=function ctxResetTransform(){destCtx.resetTransform();this.__originalResetTransform();};ctx.rotate=function ctxRotate(angle){destCtx.rotate(angle);this.__originalRotate(angle);};ctx.clip=function ctxRotate(rule){destCtx.clip(rule);this.__originalClip(rule);};ctx.moveTo=function(x,y){destCtx.moveTo(x,y);this.__originalMoveTo(x,y);};ctx.lineTo=function(x,y){destCtx.lineTo(x,y);this.__originalLineTo(x,y);};ctx.bezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){destCtx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);this.__originalBezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);};ctx.rect=function(x,y,width,height){destCtx.rect(x,y,width,height);this.__originalRect(x,y,width,height);};ctx.closePath=function(){destCtx.closePath();this.__originalClosePath();};ctx.beginPath=function(){destCtx.beginPath();this.__originalBeginPath();};}class CachedCanvases{constructor(canvasFactory){this.canvasFactory=canvasFactory;this.cache=Object.create(null);}getCanvas(id,width,height){let canvasEntry;if(this.cache[id]!==undefined){canvasEntry=this.cache[id];this.canvasFactory.reset(canvasEntry,width,height);}else{canvasEntry=this.canvasFactory.create(width,height);this.cache[id]=canvasEntry;}return canvasEntry;}delete(id){delete this.cache[id];}clear(){for(const id in this.cache){const canvasEntry=this.cache[id];this.canvasFactory.destroy(canvasEntry);delete this.cache[id];}}}function drawImageAtIntegerCoords(ctx,srcImg,srcX,srcY,srcW,srcH,destX,destY,destW,destH){const[a,b,c,d,tx,ty]=(0,_display_utils.getCurrentTransform)(ctx);if(b===0&&c===0){const tlX=destX*a+tx;const rTlX=Math.round(tlX);const tlY=destY*d+ty;const rTlY=Math.round(tlY);const brX=(destX+destW)*a+tx;const rWidth=Math.abs(Math.round(brX)-rTlX)||1;const brY=(destY+destH)*d+ty;const rHeight=Math.abs(Math.round(brY)-rTlY)||1;ctx.setTransform(Math.sign(a),0,0,Math.sign(d),rTlX,rTlY);ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,0,0,rWidth,rHeight);ctx.setTransform(a,b,c,d,tx,ty);return[rWidth,rHeight];}if(a===0&&d===0){const tlX=destY*c+tx;const rTlX=Math.round(tlX);const tlY=destX*b+ty;const rTlY=Math.round(tlY);const brX=(destY+destH)*c+tx;const rWidth=Math.abs(Math.round(brX)-rTlX)||1;const brY=(destX+destW)*b+ty;const rHeight=Math.abs(Math.round(brY)-rTlY)||1;ctx.setTransform(0,Math.sign(b),Math.sign(c),0,rTlX,rTlY);ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,0,0,rHeight,rWidth);ctx.setTransform(a,b,c,d,tx,ty);return[rHeight,rWidth];}ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,destX,destY,destW,destH);const scaleX=Math.hypot(a,b);const scaleY=Math.hypot(c,d);return[scaleX*destW,scaleY*destH];}function compileType3Glyph(imgData){const{width,height}=imgData;if(width>MAX_SIZE_TO_COMPILE||height>MAX_SIZE_TO_COMPILE){return null;}const POINT_TO_PROCESS_LIMIT=1000;const POINT_TYPES=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]);const width1=width+1;let points=new Uint8Array(width1*(height+1));let i,j,j0;const lineSize=width+7&~7;let data=new Uint8Array(lineSize*height),pos=0;for(const elem of imgData.data){let mask=128;while(mask>0){data[pos++]=elem&mask?0:255;mask>>=1;}}let count=0;pos=0;if(data[pos]!==0){points[0]=1;++count;}for(j=1;j<width;j++){if(data[pos]!==data[pos+1]){points[j]=data[pos]?2:1;++count;}pos++;}if(data[pos]!==0){points[j]=2;++count;}for(i=1;i<height;i++){pos=i*lineSize;j0=i*width1;if(data[pos-lineSize]!==data[pos]){points[j0]=data[pos]?1:8;++count;}let sum=(data[pos]?4:0)+(data[pos-lineSize]?8:0);for(j=1;j<width;j++){sum=(sum>>2)+(data[pos+1]?4:0)+(data[pos-lineSize+1]?8:0);if(POINT_TYPES[sum]){points[j0+j]=POINT_TYPES[sum];++count;}pos++;}if(data[pos-lineSize]!==data[pos]){points[j0+j]=data[pos]?2:4;++count;}if(count>POINT_TO_PROCESS_LIMIT){return null;}}pos=lineSize*(height-1);j0=i*width1;if(data[pos]!==0){points[j0]=8;++count;}for(j=1;j<width;j++){if(data[pos]!==data[pos+1]){points[j0+j]=data[pos]?4:8;++count;}pos++;}if(data[pos]!==0){points[j0+j]=4;++count;}if(count>POINT_TO_PROCESS_LIMIT){return null;}const steps=new Int32Array([0,width1,-1,0,-width1,0,0,0,1]);const path=new Path2D();for(i=0;count&&i<=height;i++){let p=i*width1;const end=p+width;while(p<end&&!points[p]){p++;}if(p===end){continue;}path.moveTo(p%width1,i);const p0=p;let type=points[p];do{const step=steps[type];do{p+=step;}while(!points[p]);const pp=points[p];if(pp!==5&&pp!==10){type=pp;points[p]=0;}else{type=pp&0x33*type>>4;points[p]&=type>>2|type<<2;}path.lineTo(p%width1,p/width1|0);if(!points[p]){--count;}}while(p0!==p);--i;}data=null;points=null;const drawOutline=function(c){c.save();c.scale(1/width,-1/height);c.translate(0,-height);c.fill(path);c.beginPath();c.restore();};return drawOutline;}class CanvasExtraState{constructor(width,height){this.alphaIsShape=false;this.fontSize=0;this.fontSizeScale=1;this.textMatrix=_util.IDENTITY_MATRIX;this.textMatrixScale=1;this.fontMatrix=_util.FONT_IDENTITY_MATRIX;this.leading=0;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRenderingMode=_util.TextRenderingMode.FILL;this.textRise=0;this.fillColor="#000000";this.strokeColor="#000000";this.patternFill=false;this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.activeSMask=null;this.transferMaps="none";this.startNewPathAndClipBox([0,0,width,height]);}clone(){const clone=Object.create(this);clone.clipBox=this.clipBox.slice();return clone;}setCurrentPoint(x,y){this.x=x;this.y=y;}updatePathMinMax(transform,x,y){[x,y]=_util.Util.applyTransform([x,y],transform);this.minX=Math.min(this.minX,x);this.minY=Math.min(this.minY,y);this.maxX=Math.max(this.maxX,x);this.maxY=Math.max(this.maxY,y);}updateRectMinMax(transform,rect){const p1=_util.Util.applyTransform(rect,transform);const p2=_util.Util.applyTransform(rect.slice(2),transform);this.minX=Math.min(this.minX,p1[0],p2[0]);this.minY=Math.min(this.minY,p1[1],p2[1]);this.maxX=Math.max(this.maxX,p1[0],p2[0]);this.maxY=Math.max(this.maxY,p1[1],p2[1]);}updateScalingPathMinMax(transform,minMax){_util.Util.scaleMinMax(transform,minMax);this.minX=Math.min(this.minX,minMax[0]);this.maxX=Math.max(this.maxX,minMax[1]);this.minY=Math.min(this.minY,minMax[2]);this.maxY=Math.max(this.maxY,minMax[3]);}updateCurvePathMinMax(transform,x0,y0,x1,y1,x2,y2,x3,y3,minMax){const box=_util.Util.bezierBoundingBox(x0,y0,x1,y1,x2,y2,x3,y3);if(minMax){minMax[0]=Math.min(minMax[0],box[0],box[2]);minMax[1]=Math.max(minMax[1],box[0],box[2]);minMax[2]=Math.min(minMax[2],box[1],box[3]);minMax[3]=Math.max(minMax[3],box[1],box[3]);return;}this.updateRectMinMax(transform,box);}getPathBoundingBox(pathType=_pattern_helper.PathType.FILL,transform=null){const box=[this.minX,this.minY,this.maxX,this.maxY];if(pathType===_pattern_helper.PathType.STROKE){if(!transform){(0,_util.unreachable)("Stroke bounding box must include transform.");}const scale=_util.Util.singularValueDecompose2dScale(transform);const xStrokePad=scale[0]*this.lineWidth/2;const yStrokePad=scale[1]*this.lineWidth/2;box[0]-=xStrokePad;box[1]-=yStrokePad;box[2]+=xStrokePad;box[3]+=yStrokePad;}return box;}updateClipFromPath(){const intersect=_util.Util.intersect(this.clipBox,this.getPathBoundingBox());this.startNewPathAndClipBox(intersect||[0,0,0,0]);}isEmptyClip(){return this.minX===Infinity;}startNewPathAndClipBox(box){this.clipBox=box;this.minX=Infinity;this.minY=Infinity;this.maxX=0;this.maxY=0;}getClippedPathBoundingBox(pathType=_pattern_helper.PathType.FILL,transform=null){return _util.Util.intersect(this.clipBox,this.getPathBoundingBox(pathType,transform));}}function putBinaryImageData(ctx,imgData){if(typeof ImageData!=="undefined"&&imgData instanceof ImageData){ctx.putImageData(imgData,0,0);return;}const height=imgData.height,width=imgData.width;const partialChunkHeight=height%FULL_CHUNK_HEIGHT;const fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT;const totalChunks=partialChunkHeight===0?fullChunks:fullChunks+1;const chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT);let srcPos=0,destPos;const src=imgData.data;const dest=chunkImgData.data;let i,j,thisChunkHeight,elemsInThisChunk;if(imgData.kind===_util.ImageKind.GRAYSCALE_1BPP){const srcLength=src.byteLength;const dest32=new Uint32Array(dest.buffer,0,dest.byteLength>>2);const dest32DataLength=dest32.length;const fullSrcDiff=width+7>>3;const white=0xffffffff;const black=_util.FeatureTest.isLittleEndian?0xff000000:0x000000ff;for(i=0;i<totalChunks;i++){thisChunkHeight=i<fullChunks?FULL_CHUNK_HEIGHT:partialChunkHeight;destPos=0;for(j=0;j<thisChunkHeight;j++){const srcDiff=srcLength-srcPos;let k=0;const kEnd=srcDiff>fullSrcDiff?width:srcDiff*8-7;const kEndUnrolled=kEnd&~7;let mask=0;let srcByte=0;for(;k<kEndUnrolled;k+=8){srcByte=src[srcPos++];dest32[destPos++]=srcByte&128?white:black;dest32[destPos++]=srcByte&64?white:black;dest32[destPos++]=srcByte&32?white:black;dest32[destPos++]=srcByte&16?white:black;dest32[destPos++]=srcByte&8?white:black;dest32[destPos++]=srcByte&4?white:black;dest32[destPos++]=srcByte&2?white:black;dest32[destPos++]=srcByte&1?white:black;}for(;k<kEnd;k++){if(mask===0){srcByte=src[srcPos++];mask=128;}dest32[destPos++]=srcByte&mask?white:black;mask>>=1;}}while(destPos<dest32DataLength){dest32[destPos++]=0;}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}else if(imgData.kind===_util.ImageKind.RGBA_32BPP){j=0;elemsInThisChunk=width*FULL_CHUNK_HEIGHT*4;for(i=0;i<fullChunks;i++){dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk));srcPos+=elemsInThisChunk;ctx.putImageData(chunkImgData,0,j);j+=FULL_CHUNK_HEIGHT;}if(i<totalChunks){elemsInThisChunk=width*partialChunkHeight*4;dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk));ctx.putImageData(chunkImgData,0,j);}}else if(imgData.kind===_util.ImageKind.RGB_24BPP){thisChunkHeight=FULL_CHUNK_HEIGHT;elemsInThisChunk=width*thisChunkHeight;for(i=0;i<totalChunks;i++){if(i>=fullChunks){thisChunkHeight=partialChunkHeight;elemsInThisChunk=width*thisChunkHeight;}destPos=0;for(j=elemsInThisChunk;j--;){dest[destPos++]=src[srcPos++];dest[destPos++]=src[srcPos++];dest[destPos++]=src[srcPos++];dest[destPos++]=255;}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}else{throw new Error(`bad image kind: ${imgData.kind}`);}}function putBinaryImageMask(ctx,imgData){if(imgData.bitmap){ctx.drawImage(imgData.bitmap,0,0);return;}const height=imgData.height,width=imgData.width;const partialChunkHeight=height%FULL_CHUNK_HEIGHT;const fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT;const totalChunks=partialChunkHeight===0?fullChunks:fullChunks+1;const chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT);let srcPos=0;const src=imgData.data;const dest=chunkImgData.data;for(let i=0;i<totalChunks;i++){const thisChunkHeight=i<fullChunks?FULL_CHUNK_HEIGHT:partialChunkHeight;({srcPos}=(0,_image_utils.convertBlackAndWhiteToRGBA)({src,srcPos,dest,width,height:thisChunkHeight,nonBlackColor:0}));ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}function copyCtxState(sourceCtx,destCtx){const properties=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font","filter"];for(const property of properties){if(sourceCtx[property]!==undefined){destCtx[property]=sourceCtx[property];}}if(sourceCtx.setLineDash!==undefined){destCtx.setLineDash(sourceCtx.getLineDash());destCtx.lineDashOffset=sourceCtx.lineDashOffset;}}function resetCtxToDefault(ctx){ctx.strokeStyle=ctx.fillStyle="#000000";ctx.fillRule="nonzero";ctx.globalAlpha=1;ctx.lineWidth=1;ctx.lineCap="butt";ctx.lineJoin="miter";ctx.miterLimit=10;ctx.globalCompositeOperation="source-over";ctx.font="10px sans-serif";if(ctx.setLineDash!==undefined){ctx.setLineDash([]);ctx.lineDashOffset=0;}if(!_is_node.isNodeJS){ctx.filter="none";}}function composeSMaskBackdrop(bytes,r0,g0,b0){const length=bytes.length;for(let i=3;i<length;i+=4){const alpha=bytes[i];if(alpha===0){bytes[i-3]=r0;bytes[i-2]=g0;bytes[i-1]=b0;}else if(alpha<255){const alpha_=255-alpha;bytes[i-3]=bytes[i-3]*alpha+r0*alpha_>>8;bytes[i-2]=bytes[i-2]*alpha+g0*alpha_>>8;bytes[i-1]=bytes[i-1]*alpha+b0*alpha_>>8;}}}function composeSMaskAlpha(maskData,layerData,transferMap){const length=maskData.length;const scale=1/255;for(let i=3;i<length;i+=4){const alpha=transferMap?transferMap[maskData[i]]:maskData[i];layerData[i]=layerData[i]*alpha*scale|0;}}function composeSMaskLuminosity(maskData,layerData,transferMap){const length=maskData.length;for(let i=3;i<length;i+=4){const y=maskData[i-3]*77+maskData[i-2]*152+maskData[i-1]*28;layerData[i]=transferMap?layerData[i]*transferMap[y>>8]>>8:layerData[i]*y>>16;}}function genericComposeSMask(maskCtx,layerCtx,width,height,subtype,backdrop,transferMap,layerOffsetX,layerOffsetY,maskOffsetX,maskOffsetY){const hasBackdrop=!!backdrop;const r0=hasBackdrop?backdrop[0]:0;const g0=hasBackdrop?backdrop[1]:0;const b0=hasBackdrop?backdrop[2]:0;let composeFn;if(subtype==="Luminosity"){composeFn=composeSMaskLuminosity;}else{composeFn=composeSMaskAlpha;}const PIXELS_TO_PROCESS=1048576;const chunkSize=Math.min(height,Math.ceil(PIXELS_TO_PROCESS/width));for(let row=0;row<height;row+=chunkSize){const chunkHeight=Math.min(chunkSize,height-row);const maskData=maskCtx.getImageData(layerOffsetX-maskOffsetX,row+(layerOffsetY-maskOffsetY),width,chunkHeight);const layerData=layerCtx.getImageData(layerOffsetX,row+layerOffsetY,width,chunkHeight);if(hasBackdrop){composeSMaskBackdrop(maskData.data,r0,g0,b0);}composeFn(maskData.data,layerData.data,transferMap);layerCtx.putImageData(layerData,layerOffsetX,row+layerOffsetY);}}function composeSMask(ctx,smask,layerCtx,layerBox){const layerOffsetX=layerBox[0];const layerOffsetY=layerBox[1];const layerWidth=layerBox[2]-layerOffsetX;const layerHeight=layerBox[3]-layerOffsetY;if(layerWidth===0||layerHeight===0){return;}genericComposeSMask(smask.context,layerCtx,layerWidth,layerHeight,smask.subtype,smask.backdrop,smask.transferMap,layerOffsetX,layerOffsetY,smask.offsetX,smask.offsetY);ctx.save();ctx.globalAlpha=1;ctx.globalCompositeOperation="source-over";ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(layerCtx.canvas,0,0);ctx.restore();}function getImageSmoothingEnabled(transform,interpolate){const scale=_util.Util.singularValueDecompose2dScale(transform);scale[0]=Math.fround(scale[0]);scale[1]=Math.fround(scale[1]);const actualScale=Math.fround((globalThis.devicePixelRatio||1)*_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);if(interpolate!==undefined){return interpolate;}else if(scale[0]<=actualScale||scale[1]<=actualScale){return true;}return false;}const LINE_CAP_STYLES=["butt","round","square"];const LINE_JOIN_STYLES=["miter","round","bevel"];const NORMAL_CLIP={};const EO_CLIP={};var _restoreInitialState=/*#__PURE__*/_classPrivateFieldLooseKey("restoreInitialState");var _drawFilter=/*#__PURE__*/_classPrivateFieldLooseKey("drawFilter");class CanvasGraphics{constructor(canvasCtx,commonObjs,objs,canvasFactory,filterFactory,{optionalContentConfig,markedContentStack=null},annotationCanvasMap,pageColors){Object.defineProperty(this,_drawFilter,{value:_drawFilter2});Object.defineProperty(this,_restoreInitialState,{value:_restoreInitialState2});this.ctx=canvasCtx;this.current=new CanvasExtraState(this.ctx.canvas.width,this.ctx.canvas.height);this.stateStack=[];this.pendingClip=null;this.pendingEOFill=false;this.res=null;this.xobjs=null;this.commonObjs=commonObjs;this.objs=objs;this.canvasFactory=canvasFactory;this.filterFactory=filterFactory;this.groupStack=[];this.processingType3=null;this.baseTransform=null;this.baseTransformStack=[];this.groupLevel=0;this.smaskStack=[];this.smaskCounter=0;this.tempSMask=null;this.suspendedCtx=null;this.contentVisible=true;this.markedContentStack=markedContentStack||[];this.optionalContentConfig=optionalContentConfig;this.cachedCanvases=new CachedCanvases(this.canvasFactory);this.cachedPatterns=new Map();this.annotationCanvasMap=annotationCanvasMap;this.viewportScale=1;this.outputScaleX=1;this.outputScaleY=1;this.pageColors=pageColors;this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;this._cachedBitmapsMap=new Map();}getObject(data,fallback=null){if(typeof data==="string"){return data.startsWith("g_")?this.commonObjs.get(data):this.objs.get(data);}return fallback;}beginDrawing({transform,viewport,transparency=false,background=null}){const width=this.ctx.canvas.width;const height=this.ctx.canvas.height;const savedFillStyle=this.ctx.fillStyle;this.ctx.fillStyle=background||"#ffffff";this.ctx.fillRect(0,0,width,height);this.ctx.fillStyle=savedFillStyle;if(transparency){const transparentCanvas=this.cachedCanvases.getCanvas("transparent",width,height);this.compositeCtx=this.ctx;this.transparentCanvas=transparentCanvas.canvas;this.ctx=transparentCanvas.context;this.ctx.save();this.ctx.transform(...(0,_display_utils.getCurrentTransform)(this.compositeCtx));}this.ctx.save();resetCtxToDefault(this.ctx);if(transform){this.ctx.transform(...transform);this.outputScaleX=transform[0];this.outputScaleY=transform[0];}this.ctx.transform(...viewport.transform);this.viewportScale=viewport.scale;this.baseTransform=(0,_display_utils.getCurrentTransform)(this.ctx);}executeOperatorList(operatorList,executionStartIdx,continueCallback,stepper){const argsArray=operatorList.argsArray;const fnArray=operatorList.fnArray;let i=executionStartIdx||0;const argsArrayLen=argsArray.length;if(argsArrayLen===i){return i;}const chunkOperations=argsArrayLen-i>EXECUTION_STEPS&&typeof continueCallback==="function";const endTime=chunkOperations?Date.now()+EXECUTION_TIME:0;let steps=0;const commonObjs=this.commonObjs;const objs=this.objs;let fnId;while(true){if(stepper!==undefined&&i===stepper.nextBreakPoint){stepper.breakIt(i,continueCallback);return i;}fnId=fnArray[i];if(fnId!==_util.OPS.dependency){this[fnId].apply(this,argsArray[i]);}else{for(const depObjId of argsArray[i]){const objsPool=depObjId.startsWith("g_")?commonObjs:objs;if(!objsPool.has(depObjId)){objsPool.get(depObjId,continueCallback);return i;}}}i++;if(i===argsArrayLen){return i;}if(chunkOperations&&++steps>EXECUTION_STEPS){if(Date.now()>endTime){continueCallback();return i;}steps=0;}}}endDrawing(){_classPrivateFieldLooseBase(this,_restoreInitialState)[_restoreInitialState]();this.cachedCanvases.clear();this.cachedPatterns.clear();for(const cache of this._cachedBitmapsMap.values()){for(const canvas of cache.values()){if(typeof HTMLCanvasElement!=="undefined"&&canvas instanceof HTMLCanvasElement){canvas.width=canvas.height=0;}}cache.clear();}this._cachedBitmapsMap.clear();_classPrivateFieldLooseBase(this,_drawFilter)[_drawFilter]();}_scaleImage(img,inverseTransform){const width=img.width;const height=img.height;let widthScale=Math.max(Math.hypot(inverseTransform[0],inverseTransform[1]),1);let heightScale=Math.max(Math.hypot(inverseTransform[2],inverseTransform[3]),1);let paintWidth=width,paintHeight=height;let tmpCanvasId="prescale1";let tmpCanvas,tmpCtx;while(widthScale>2&&paintWidth>1||heightScale>2&&paintHeight>1){let newWidth=paintWidth,newHeight=paintHeight;if(widthScale>2&&paintWidth>1){newWidth=paintWidth>=16384?Math.floor(paintWidth/2)-1||1:Math.ceil(paintWidth/2);widthScale/=paintWidth/newWidth;}if(heightScale>2&&paintHeight>1){newHeight=paintHeight>=16384?Math.floor(paintHeight/2)-1||1:Math.ceil(paintHeight)/2;heightScale/=paintHeight/newHeight;}tmpCanvas=this.cachedCanvases.getCanvas(tmpCanvasId,newWidth,newHeight);tmpCtx=tmpCanvas.context;tmpCtx.clearRect(0,0,newWidth,newHeight);tmpCtx.drawImage(img,0,0,paintWidth,paintHeight,0,0,newWidth,newHeight);img=tmpCanvas.canvas;paintWidth=newWidth;paintHeight=newHeight;tmpCanvasId=tmpCanvasId==="prescale1"?"prescale2":"prescale1";}return{img,paintWidth,paintHeight};}_createMaskCanvas(img){const ctx=this.ctx;const{width,height}=img;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;const currentTransform=(0,_display_utils.getCurrentTransform)(ctx);let cache,cacheKey,scaled,maskCanvas;if((img.bitmap||img.data)&&img.count>1){const mainKey=img.bitmap||img.data.buffer;cacheKey=JSON.stringify(isPatternFill?currentTransform:[currentTransform.slice(0,4),fillColor]);cache=this._cachedBitmapsMap.get(mainKey);if(!cache){cache=new Map();this._cachedBitmapsMap.set(mainKey,cache);}const cachedImage=cache.get(cacheKey);if(cachedImage&&!isPatternFill){const offsetX=Math.round(Math.min(currentTransform[0],currentTransform[2])+currentTransform[4]);const offsetY=Math.round(Math.min(currentTransform[1],currentTransform[3])+currentTransform[5]);return{canvas:cachedImage,offsetX,offsetY};}scaled=cachedImage;}if(!scaled){maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height);putBinaryImageMask(maskCanvas.context,img);}let maskToCanvas=_util.Util.transform(currentTransform,[1/width,0,0,-1/height,0,0]);maskToCanvas=_util.Util.transform(maskToCanvas,[1,0,0,1,0,-height]);const cord1=_util.Util.applyTransform([0,0],maskToCanvas);const cord2=_util.Util.applyTransform([width,height],maskToCanvas);const rect=_util.Util.normalizeRect([cord1[0],cord1[1],cord2[0],cord2[1]]);const drawnWidth=Math.round(rect[2]-rect[0])||1;const drawnHeight=Math.round(rect[3]-rect[1])||1;const fillCanvas=this.cachedCanvases.getCanvas("fillCanvas",drawnWidth,drawnHeight);const fillCtx=fillCanvas.context;const offsetX=Math.min(cord1[0],cord2[0]);const offsetY=Math.min(cord1[1],cord2[1]);fillCtx.translate(-offsetX,-offsetY);fillCtx.transform(...maskToCanvas);if(!scaled){scaled=this._scaleImage(maskCanvas.canvas,(0,_display_utils.getCurrentTransformInverse)(fillCtx));scaled=scaled.img;if(cache&&isPatternFill){cache.set(cacheKey,scaled);}}fillCtx.imageSmoothingEnabled=getImageSmoothingEnabled((0,_display_utils.getCurrentTransform)(fillCtx),img.interpolate);drawImageAtIntegerCoords(fillCtx,scaled,0,0,scaled.width,scaled.height,0,0,width,height);fillCtx.globalCompositeOperation="source-in";const inverse=_util.Util.transform((0,_display_utils.getCurrentTransformInverse)(fillCtx),[1,0,0,1,-offsetX,-offsetY]);fillCtx.fillStyle=isPatternFill?fillColor.getPattern(ctx,this,inverse,_pattern_helper.PathType.FILL):fillColor;fillCtx.fillRect(0,0,width,height);if(cache&&!isPatternFill){this.cachedCanvases.delete("fillCanvas");cache.set(cacheKey,fillCanvas.canvas);}return{canvas:fillCanvas.canvas,offsetX:Math.round(offsetX),offsetY:Math.round(offsetY)};}setLineWidth(width){if(width!==this.current.lineWidth){this._cachedScaleForStroking=null;}this.current.lineWidth=width;this.ctx.lineWidth=width;}setLineCap(style){this.ctx.lineCap=LINE_CAP_STYLES[style];}setLineJoin(style){this.ctx.lineJoin=LINE_JOIN_STYLES[style];}setMiterLimit(limit){this.ctx.miterLimit=limit;}setDash(dashArray,dashPhase){const ctx=this.ctx;if(ctx.setLineDash!==undefined){ctx.setLineDash(dashArray);ctx.lineDashOffset=dashPhase;}}setRenderingIntent(intent){}setFlatness(flatness){}setGState(states){for(const[key,value]of states){switch(key){case"LW":this.setLineWidth(value);break;case"LC":this.setLineCap(value);break;case"LJ":this.setLineJoin(value);break;case"ML":this.setMiterLimit(value);break;case"D":this.setDash(value[0],value[1]);break;case"RI":this.setRenderingIntent(value);break;case"FL":this.setFlatness(value);break;case"Font":this.setFont(value[0],value[1]);break;case"CA":this.current.strokeAlpha=value;break;case"ca":this.current.fillAlpha=value;this.ctx.globalAlpha=value;break;case"BM":this.ctx.globalCompositeOperation=value;break;case"SMask":this.current.activeSMask=value?this.tempSMask:null;this.tempSMask=null;this.checkSMaskState();break;case"TR":this.ctx.filter=this.current.transferMaps=this.filterFactory.addFilter(value);break;}}}get inSMaskMode(){return!!this.suspendedCtx;}checkSMaskState(){const inSMaskMode=this.inSMaskMode;if(this.current.activeSMask&&!inSMaskMode){this.beginSMaskMode();}else if(!this.current.activeSMask&&inSMaskMode){this.endSMaskMode();}}beginSMaskMode(){if(this.inSMaskMode){throw new Error("beginSMaskMode called while already in smask mode");}const drawnWidth=this.ctx.canvas.width;const drawnHeight=this.ctx.canvas.height;const cacheId="smaskGroupAt"+this.groupLevel;const scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight);this.suspendedCtx=this.ctx;this.ctx=scratchCanvas.context;const ctx=this.ctx;ctx.setTransform(...(0,_display_utils.getCurrentTransform)(this.suspendedCtx));copyCtxState(this.suspendedCtx,ctx);mirrorContextOperations(ctx,this.suspendedCtx);this.setGState([["BM","source-over"],["ca",1],["CA",1]]);}endSMaskMode(){if(!this.inSMaskMode){throw new Error("endSMaskMode called while not in smask mode");}this.ctx._removeMirroring();copyCtxState(this.ctx,this.suspendedCtx);this.ctx=this.suspendedCtx;this.suspendedCtx=null;}compose(dirtyBox){if(!this.current.activeSMask){return;}if(!dirtyBox){dirtyBox=[0,0,this.ctx.canvas.width,this.ctx.canvas.height];}else{dirtyBox[0]=Math.floor(dirtyBox[0]);dirtyBox[1]=Math.floor(dirtyBox[1]);dirtyBox[2]=Math.ceil(dirtyBox[2]);dirtyBox[3]=Math.ceil(dirtyBox[3]);}const smask=this.current.activeSMask;const suspendedCtx=this.suspendedCtx;composeSMask(suspendedCtx,smask,this.ctx,dirtyBox);this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);this.ctx.restore();}save(){if(this.inSMaskMode){copyCtxState(this.ctx,this.suspendedCtx);this.suspendedCtx.save();}else{this.ctx.save();}const old=this.current;this.stateStack.push(old);this.current=old.clone();}restore(){if(this.stateStack.length===0&&this.inSMaskMode){this.endSMaskMode();}if(this.stateStack.length!==0){this.current=this.stateStack.pop();if(this.inSMaskMode){this.suspendedCtx.restore();copyCtxState(this.suspendedCtx,this.ctx);}else{this.ctx.restore();}this.checkSMaskState();this.pendingClip=null;this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;}}transform(a,b,c,d,e,f){this.ctx.transform(a,b,c,d,e,f);this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;}constructPath(ops,args,minMax){const ctx=this.ctx;const current=this.current;let x=current.x,y=current.y;let startX,startY;const currentTransform=(0,_display_utils.getCurrentTransform)(ctx);const isScalingMatrix=currentTransform[0]===0&&currentTransform[3]===0||currentTransform[1]===0&&currentTransform[2]===0;const minMaxForBezier=isScalingMatrix?minMax.slice(0):null;for(let i=0,j=0,ii=ops.length;i<ii;i++){switch(ops[i]|0){case _util.OPS.rectangle:x=args[j++];y=args[j++];const width=args[j++];const height=args[j++];const xw=x+width;const yh=y+height;ctx.moveTo(x,y);if(width===0||height===0){ctx.lineTo(xw,yh);}else{ctx.lineTo(xw,y);ctx.lineTo(xw,yh);ctx.lineTo(x,yh);}if(!isScalingMatrix){current.updateRectMinMax(currentTransform,[x,y,xw,yh]);}ctx.closePath();break;case _util.OPS.moveTo:x=args[j++];y=args[j++];ctx.moveTo(x,y);if(!isScalingMatrix){current.updatePathMinMax(currentTransform,x,y);}break;case _util.OPS.lineTo:x=args[j++];y=args[j++];ctx.lineTo(x,y);if(!isScalingMatrix){current.updatePathMinMax(currentTransform,x,y);}break;case _util.OPS.curveTo:startX=x;startY=y;x=args[j+4];y=args[j+5];ctx.bezierCurveTo(args[j],args[j+1],args[j+2],args[j+3],x,y);current.updateCurvePathMinMax(currentTransform,startX,startY,args[j],args[j+1],args[j+2],args[j+3],x,y,minMaxForBezier);j+=6;break;case _util.OPS.curveTo2:startX=x;startY=y;ctx.bezierCurveTo(x,y,args[j],args[j+1],args[j+2],args[j+3]);current.updateCurvePathMinMax(currentTransform,startX,startY,x,y,args[j],args[j+1],args[j+2],args[j+3],minMaxForBezier);x=args[j+2];y=args[j+3];j+=4;break;case _util.OPS.curveTo3:startX=x;startY=y;x=args[j+2];y=args[j+3];ctx.bezierCurveTo(args[j],args[j+1],x,y,x,y);current.updateCurvePathMinMax(currentTransform,startX,startY,args[j],args[j+1],x,y,x,y,minMaxForBezier);j+=4;break;case _util.OPS.closePath:ctx.closePath();break;}}if(isScalingMatrix){current.updateScalingPathMinMax(currentTransform,minMaxForBezier);}current.setCurrentPoint(x,y);}closePath(){this.ctx.closePath();}stroke(consumePath=true){const ctx=this.ctx;const strokeColor=this.current.strokeColor;ctx.globalAlpha=this.current.strokeAlpha;if(this.contentVisible){if(typeof strokeColor==="object"&&strokeColor?.getPattern){ctx.save();ctx.strokeStyle=strokeColor.getPattern(ctx,this,(0,_display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.STROKE);this.rescaleAndStroke(false);ctx.restore();}else{this.rescaleAndStroke(true);}}if(consumePath){this.consumePath(this.current.getClippedPathBoundingBox());}ctx.globalAlpha=this.current.fillAlpha;}closeStroke(){this.closePath();this.stroke();}fill(consumePath=true){const ctx=this.ctx;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;let needRestore=false;if(isPatternFill){ctx.save();ctx.fillStyle=fillColor.getPattern(ctx,this,(0,_display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL);needRestore=true;}const intersect=this.current.getClippedPathBoundingBox();if(this.contentVisible&&intersect!==null){if(this.pendingEOFill){ctx.fill("evenodd");this.pendingEOFill=false;}else{ctx.fill();}}if(needRestore){ctx.restore();}if(consumePath){this.consumePath(intersect);}}eoFill(){this.pendingEOFill=true;this.fill();}fillStroke(){this.fill(false);this.stroke(false);this.consumePath();}eoFillStroke(){this.pendingEOFill=true;this.fillStroke();}closeFillStroke(){this.closePath();this.fillStroke();}closeEOFillStroke(){this.pendingEOFill=true;this.closePath();this.fillStroke();}endPath(){this.consumePath();}clip(){this.pendingClip=NORMAL_CLIP;}eoClip(){this.pendingClip=EO_CLIP;}beginText(){this.current.textMatrix=_util.IDENTITY_MATRIX;this.current.textMatrixScale=1;this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0;}endText(){const paths=this.pendingTextPaths;const ctx=this.ctx;if(paths===undefined){ctx.beginPath();return;}ctx.save();ctx.beginPath();for(const path of paths){ctx.setTransform(...path.transform);ctx.translate(path.x,path.y);path.addToPath(ctx,path.fontSize);}ctx.restore();ctx.clip();ctx.beginPath();delete this.pendingTextPaths;}setCharSpacing(spacing){this.current.charSpacing=spacing;}setWordSpacing(spacing){this.current.wordSpacing=spacing;}setHScale(scale){this.current.textHScale=scale/100;}setLeading(leading){this.current.leading=-leading;}setFont(fontRefName,size){const fontObj=this.commonObjs.get(fontRefName);const current=this.current;if(!fontObj){throw new Error(`Can't find font for ${fontRefName}`);}current.fontMatrix=fontObj.fontMatrix||_util.FONT_IDENTITY_MATRIX;if(current.fontMatrix[0]===0||current.fontMatrix[3]===0){(0,_util.warn)("Invalid font matrix for font "+fontRefName);}if(size<0){size=-size;current.fontDirection=-1;}else{current.fontDirection=1;}this.current.font=fontObj;this.current.fontSize=size;if(fontObj.isType3Font){return;}const name=fontObj.loadedName||"sans-serif";let bold="normal";if(fontObj.black){bold="900";}else if(fontObj.bold){bold="bold";}const italic=fontObj.italic?"italic":"normal";const typeface=`"${name}", ${fontObj.fallbackName}`;let browserFontSize=size;if(size<MIN_FONT_SIZE){browserFontSize=MIN_FONT_SIZE;}else if(size>MAX_FONT_SIZE){browserFontSize=MAX_FONT_SIZE;}this.current.fontSizeScale=size/browserFontSize;this.ctx.font=`${italic} ${bold} ${browserFontSize}px ${typeface}`;}setTextRenderingMode(mode){this.current.textRenderingMode=mode;}setTextRise(rise){this.current.textRise=rise;}moveText(x,y){this.current.x=this.current.lineX+=x;this.current.y=this.current.lineY+=y;}setLeadingMoveText(x,y){this.setLeading(-y);this.moveText(x,y);}setTextMatrix(a,b,c,d,e,f){this.current.textMatrix=[a,b,c,d,e,f];this.current.textMatrixScale=Math.hypot(a,b);this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0;}nextLine(){this.moveText(0,this.current.leading);}paintChar(character,x,y,patternTransform){const ctx=this.ctx;const current=this.current;const font=current.font;const textRenderingMode=current.textRenderingMode;const fontSize=current.fontSize/current.fontSizeScale;const fillStrokeMode=textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;const isAddToPathSet=!!(textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG);const patternFill=current.patternFill&&!font.missingFile;let addToPath;if(font.disableFontFace||isAddToPathSet||patternFill){addToPath=font.getPathGenerator(this.commonObjs,character);}if(font.disableFontFace||patternFill){ctx.save();ctx.translate(x,y);ctx.beginPath();addToPath(ctx,fontSize);if(patternTransform){ctx.setTransform(...patternTransform);}if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.fill();}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.stroke();}ctx.restore();}else{if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.fillText(character,x,y);}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.strokeText(character,x,y);}}if(isAddToPathSet){const paths=this.pendingTextPaths||(this.pendingTextPaths=[]);paths.push({transform:(0,_display_utils.getCurrentTransform)(ctx),x,y,fontSize,addToPath});}}get isFontSubpixelAAEnabled(){const{context:ctx}=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10);ctx.scale(1.5,1);ctx.fillText("I",0,10);const data=ctx.getImageData(0,0,10,10).data;let enabled=false;for(let i=3;i<data.length;i+=4){if(data[i]>0&&data[i]<255){enabled=true;break;}}return(0,_util.shadow)(this,"isFontSubpixelAAEnabled",enabled);}showText(glyphs){const current=this.current;const font=current.font;if(font.isType3Font){return this.showType3Text(glyphs);}const fontSize=current.fontSize;if(fontSize===0){return undefined;}const ctx=this.ctx;const fontSizeScale=current.fontSizeScale;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const fontDirection=current.fontDirection;const textHScale=current.textHScale*fontDirection;const glyphsLength=glyphs.length;const vertical=font.vertical;const spacingDir=vertical?1:-1;const defaultVMetrics=font.defaultVMetrics;const widthAdvanceScale=fontSize*current.fontMatrix[0];const simpleFillText=current.textRenderingMode===_util.TextRenderingMode.FILL&&!font.disableFontFace&&!current.patternFill;ctx.save();ctx.transform(...current.textMatrix);ctx.translate(current.x,current.y+current.textRise);if(fontDirection>0){ctx.scale(textHScale,-1);}else{ctx.scale(textHScale,1);}let patternTransform;if(current.patternFill){ctx.save();const pattern=current.fillColor.getPattern(ctx,this,(0,_display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL);patternTransform=(0,_display_utils.getCurrentTransform)(ctx);ctx.restore();ctx.fillStyle=pattern;}let lineWidth=current.lineWidth;const scale=current.textMatrixScale;if(scale===0||lineWidth===0){const fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){lineWidth=this.getSinglePixelWidth();}}else{lineWidth/=scale;}if(fontSizeScale!==1.0){ctx.scale(fontSizeScale,fontSizeScale);lineWidth/=fontSizeScale;}ctx.lineWidth=lineWidth;if(font.isInvalidPDFjsFont){const chars=[];let width=0;for(const glyph of glyphs){chars.push(glyph.unicode);width+=glyph.width;}ctx.fillText(chars.join(""),0,0);current.x+=width*widthAdvanceScale*textHScale;ctx.restore();this.compose();return undefined;}let x=0,i;for(i=0;i<glyphsLength;++i){const glyph=glyphs[i];if(typeof glyph==="number"){x+=spacingDir*glyph*fontSize/1000;continue;}let restoreNeeded=false;const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const character=glyph.fontChar;const accent=glyph.accent;let scaledX,scaledY;let width=glyph.width;if(vertical){const vmetric=glyph.vmetric||defaultVMetrics;const vx=-(glyph.vmetric?vmetric[1]:width*0.5)*widthAdvanceScale;const vy=vmetric[2]*widthAdvanceScale;width=vmetric?-vmetric[0]:width;scaledX=vx/fontSizeScale;scaledY=(x+vy)/fontSizeScale;}else{scaledX=x/fontSizeScale;scaledY=0;}if(font.remeasure&&width>0){const measuredWidth=ctx.measureText(character).width*1000/fontSize*fontSizeScale;if(width<measuredWidth&&this.isFontSubpixelAAEnabled){const characterScaleX=width/measuredWidth;restoreNeeded=true;ctx.save();ctx.scale(characterScaleX,1);scaledX/=characterScaleX;}else if(width!==measuredWidth){scaledX+=(width-measuredWidth)/2000*fontSize/fontSizeScale;}}if(this.contentVisible&&(glyph.isInFont||font.missingFile)){if(simpleFillText&&!accent){ctx.fillText(character,scaledX,scaledY);}else{this.paintChar(character,scaledX,scaledY,patternTransform);if(accent){const scaledAccentX=scaledX+fontSize*accent.offset.x/fontSizeScale;const scaledAccentY=scaledY-fontSize*accent.offset.y/fontSizeScale;this.paintChar(accent.fontChar,scaledAccentX,scaledAccentY,patternTransform);}}}let charWidth;if(vertical){charWidth=width*widthAdvanceScale-spacing*fontDirection;}else{charWidth=width*widthAdvanceScale+spacing*fontDirection;}x+=charWidth;if(restoreNeeded){ctx.restore();}}if(vertical){current.y-=x;}else{current.x+=x*textHScale;}ctx.restore();this.compose();return undefined;}showType3Text(glyphs){const ctx=this.ctx;const current=this.current;const font=current.font;const fontSize=current.fontSize;const fontDirection=current.fontDirection;const spacingDir=font.vertical?1:-1;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const textHScale=current.textHScale*fontDirection;const fontMatrix=current.fontMatrix||_util.FONT_IDENTITY_MATRIX;const glyphsLength=glyphs.length;const isTextInvisible=current.textRenderingMode===_util.TextRenderingMode.INVISIBLE;let i,glyph,width,spacingLength;if(isTextInvisible||fontSize===0){return;}this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;ctx.save();ctx.transform(...current.textMatrix);ctx.translate(current.x,current.y);ctx.scale(textHScale,fontDirection);for(i=0;i<glyphsLength;++i){glyph=glyphs[i];if(typeof glyph==="number"){spacingLength=spacingDir*glyph*fontSize/1000;this.ctx.translate(spacingLength,0);current.x+=spacingLength*textHScale;continue;}const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const operatorList=font.charProcOperatorList[glyph.operatorListId];if(!operatorList){(0,_util.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);continue;}if(this.contentVisible){this.processingType3=glyph;this.save();ctx.scale(fontSize,fontSize);ctx.transform(...fontMatrix);this.executeOperatorList(operatorList);this.restore();}const transformed=_util.Util.applyTransform([glyph.width,0],fontMatrix);width=transformed[0]*fontSize+spacing;ctx.translate(width,0);current.x+=width*textHScale;}ctx.restore();this.processingType3=null;}setCharWidth(xWidth,yWidth){}setCharWidthAndBounds(xWidth,yWidth,llx,lly,urx,ury){this.ctx.rect(llx,lly,urx-llx,ury-lly);this.ctx.clip();this.endPath();}getColorN_Pattern(IR){let pattern;if(IR[0]==="TilingPattern"){const color=IR[1];const baseTransform=this.baseTransform||(0,_display_utils.getCurrentTransform)(this.ctx);const canvasGraphicsFactory={createCanvasGraphics:ctx=>{return new CanvasGraphics(ctx,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig:this.optionalContentConfig,markedContentStack:this.markedContentStack});}};pattern=new _pattern_helper.TilingPattern(IR,color,this.ctx,canvasGraphicsFactory,baseTransform);}else{pattern=this._getPattern(IR[1],IR[2]);}return pattern;}setStrokeColorN(){this.current.strokeColor=this.getColorN_Pattern(arguments);}setFillColorN(){this.current.fillColor=this.getColorN_Pattern(arguments);this.current.patternFill=true;}setStrokeRGBColor(r,g,b){const color=_util.Util.makeHexColor(r,g,b);this.ctx.strokeStyle=color;this.current.strokeColor=color;}setFillRGBColor(r,g,b){const color=_util.Util.makeHexColor(r,g,b);this.ctx.fillStyle=color;this.current.fillColor=color;this.current.patternFill=false;}_getPattern(objId,matrix=null){let pattern;if(this.cachedPatterns.has(objId)){pattern=this.cachedPatterns.get(objId);}else{pattern=(0,_pattern_helper.getShadingPattern)(this.getObject(objId));this.cachedPatterns.set(objId,pattern);}if(matrix){pattern.matrix=matrix;}return pattern;}shadingFill(objId){if(!this.contentVisible){return;}const ctx=this.ctx;this.save();const pattern=this._getPattern(objId);ctx.fillStyle=pattern.getPattern(ctx,this,(0,_display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.SHADING);const inv=(0,_display_utils.getCurrentTransformInverse)(ctx);if(inv){const canvas=ctx.canvas;const width=canvas.width;const height=canvas.height;const bl=_util.Util.applyTransform([0,0],inv);const br=_util.Util.applyTransform([0,height],inv);const ul=_util.Util.applyTransform([width,0],inv);const ur=_util.Util.applyTransform([width,height],inv);const x0=Math.min(bl[0],br[0],ul[0],ur[0]);const y0=Math.min(bl[1],br[1],ul[1],ur[1]);const x1=Math.max(bl[0],br[0],ul[0],ur[0]);const y1=Math.max(bl[1],br[1],ul[1],ur[1]);this.ctx.fillRect(x0,y0,x1-x0,y1-y0);}else{this.ctx.fillRect(-1e10,-1e10,2e10,2e10);}this.compose(this.current.getClippedPathBoundingBox());this.restore();}beginInlineImage(){(0,_util.unreachable)("Should not call beginInlineImage");}beginImageData(){(0,_util.unreachable)("Should not call beginImageData");}paintFormXObjectBegin(matrix,bbox){if(!this.contentVisible){return;}this.save();this.baseTransformStack.push(this.baseTransform);if(Array.isArray(matrix)&&matrix.length===6){this.transform(...matrix);}this.baseTransform=(0,_display_utils.getCurrentTransform)(this.ctx);if(bbox){const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];this.ctx.rect(bbox[0],bbox[1],width,height);this.current.updateRectMinMax((0,_display_utils.getCurrentTransform)(this.ctx),bbox);this.clip();this.endPath();}}paintFormXObjectEnd(){if(!this.contentVisible){return;}this.restore();this.baseTransform=this.baseTransformStack.pop();}beginGroup(group){if(!this.contentVisible){return;}this.save();if(this.inSMaskMode){this.endSMaskMode();this.current.activeSMask=null;}const currentCtx=this.ctx;if(!group.isolated){(0,_util.info)("TODO: Support non-isolated groups.");}if(group.knockout){(0,_util.warn)("Knockout groups not supported.");}const currentTransform=(0,_display_utils.getCurrentTransform)(currentCtx);if(group.matrix){currentCtx.transform(...group.matrix);}if(!group.bbox){throw new Error("Bounding box is required.");}let bounds=_util.Util.getAxialAlignedBoundingBox(group.bbox,(0,_display_utils.getCurrentTransform)(currentCtx));const canvasBounds=[0,0,currentCtx.canvas.width,currentCtx.canvas.height];bounds=_util.Util.intersect(bounds,canvasBounds)||[0,0,0,0];const offsetX=Math.floor(bounds[0]);const offsetY=Math.floor(bounds[1]);let drawnWidth=Math.max(Math.ceil(bounds[2])-offsetX,1);let drawnHeight=Math.max(Math.ceil(bounds[3])-offsetY,1);let scaleX=1,scaleY=1;if(drawnWidth>MAX_GROUP_SIZE){scaleX=drawnWidth/MAX_GROUP_SIZE;drawnWidth=MAX_GROUP_SIZE;}if(drawnHeight>MAX_GROUP_SIZE){scaleY=drawnHeight/MAX_GROUP_SIZE;drawnHeight=MAX_GROUP_SIZE;}this.current.startNewPathAndClipBox([0,0,drawnWidth,drawnHeight]);let cacheId="groupAt"+this.groupLevel;if(group.smask){cacheId+="_smask_"+this.smaskCounter++%2;}const scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight);const groupCtx=scratchCanvas.context;groupCtx.scale(1/scaleX,1/scaleY);groupCtx.translate(-offsetX,-offsetY);groupCtx.transform(...currentTransform);if(group.smask){this.smaskStack.push({canvas:scratchCanvas.canvas,context:groupCtx,offsetX,offsetY,scaleX,scaleY,subtype:group.smask.subtype,backdrop:group.smask.backdrop,transferMap:group.smask.transferMap||null,startTransformInverse:null});}else{currentCtx.setTransform(1,0,0,1,0,0);currentCtx.translate(offsetX,offsetY);currentCtx.scale(scaleX,scaleY);currentCtx.save();}copyCtxState(currentCtx,groupCtx);this.ctx=groupCtx;this.setGState([["BM","source-over"],["ca",1],["CA",1]]);this.groupStack.push(currentCtx);this.groupLevel++;}endGroup(group){if(!this.contentVisible){return;}this.groupLevel--;const groupCtx=this.ctx;const ctx=this.groupStack.pop();this.ctx=ctx;this.ctx.imageSmoothingEnabled=false;if(group.smask){this.tempSMask=this.smaskStack.pop();this.restore();}else{this.ctx.restore();const currentMtx=(0,_display_utils.getCurrentTransform)(this.ctx);this.restore();this.ctx.save();this.ctx.setTransform(...currentMtx);const dirtyBox=_util.Util.getAxialAlignedBoundingBox([0,0,groupCtx.canvas.width,groupCtx.canvas.height],currentMtx);this.ctx.drawImage(groupCtx.canvas,0,0);this.ctx.restore();this.compose(dirtyBox);}}beginAnnotation(id,rect,transform,matrix,hasOwnCanvas){_classPrivateFieldLooseBase(this,_restoreInitialState)[_restoreInitialState]();resetCtxToDefault(this.ctx);this.ctx.save();this.save();if(this.baseTransform){this.ctx.setTransform(...this.baseTransform);}if(Array.isArray(rect)&&rect.length===4){const width=rect[2]-rect[0];const height=rect[3]-rect[1];if(hasOwnCanvas&&this.annotationCanvasMap){transform=transform.slice();transform[4]-=rect[0];transform[5]-=rect[1];rect=rect.slice();rect[0]=rect[1]=0;rect[2]=width;rect[3]=height;const[scaleX,scaleY]=_util.Util.singularValueDecompose2dScale((0,_display_utils.getCurrentTransform)(this.ctx));const{viewportScale}=this;const canvasWidth=Math.ceil(width*this.outputScaleX*viewportScale);const canvasHeight=Math.ceil(height*this.outputScaleY*viewportScale);this.annotationCanvas=this.canvasFactory.create(canvasWidth,canvasHeight);const{canvas,context}=this.annotationCanvas;this.annotationCanvasMap.set(id,canvas);this.annotationCanvas.savedCtx=this.ctx;this.ctx=context;this.ctx.save();this.ctx.setTransform(scaleX,0,0,-scaleY,0,height*scaleY);resetCtxToDefault(this.ctx);}else{resetCtxToDefault(this.ctx);this.ctx.rect(rect[0],rect[1],width,height);this.ctx.clip();this.endPath();}}this.current=new CanvasExtraState(this.ctx.canvas.width,this.ctx.canvas.height);this.transform(...transform);this.transform(...matrix);}endAnnotation(){if(this.annotationCanvas){this.ctx.restore();_classPrivateFieldLooseBase(this,_drawFilter)[_drawFilter]();this.ctx=this.annotationCanvas.savedCtx;delete this.annotationCanvas.savedCtx;delete this.annotationCanvas;}}paintImageMaskXObject(img){if(!this.contentVisible){return;}const count=img.count;img=this.getObject(img.data,img);img.count=count;const ctx=this.ctx;const glyph=this.processingType3;if(glyph){if(glyph.compiled===undefined){glyph.compiled=compileType3Glyph(img);}if(glyph.compiled){glyph.compiled(ctx);return;}}const mask=this._createMaskCanvas(img);const maskCanvas=mask.canvas;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(maskCanvas,mask.offsetX,mask.offsetY);ctx.restore();this.compose();}paintImageMaskXObjectRepeat(img,scaleX,skewX=0,skewY=0,scaleY,positions){if(!this.contentVisible){return;}img=this.getObject(img.data,img);const ctx=this.ctx;ctx.save();const currentTransform=(0,_display_utils.getCurrentTransform)(ctx);ctx.transform(scaleX,skewX,skewY,scaleY,0,0);const mask=this._createMaskCanvas(img);ctx.setTransform(1,0,0,1,mask.offsetX-currentTransform[4],mask.offsetY-currentTransform[5]);for(let i=0,ii=positions.length;i<ii;i+=2){const trans=_util.Util.transform(currentTransform,[scaleX,skewX,skewY,scaleY,positions[i],positions[i+1]]);const[x,y]=_util.Util.applyTransform([0,0],trans);ctx.drawImage(mask.canvas,x,y);}ctx.restore();this.compose();}paintImageMaskXObjectGroup(images){if(!this.contentVisible){return;}const ctx=this.ctx;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;for(const image of images){const{data,width,height,transform}=image;const maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height);const maskCtx=maskCanvas.context;maskCtx.save();const img=this.getObject(data,image);putBinaryImageMask(maskCtx,img);maskCtx.globalCompositeOperation="source-in";maskCtx.fillStyle=isPatternFill?fillColor.getPattern(maskCtx,this,(0,_display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL):fillColor;maskCtx.fillRect(0,0,width,height);maskCtx.restore();ctx.save();ctx.transform(...transform);ctx.scale(1,-1);drawImageAtIntegerCoords(ctx,maskCanvas.canvas,0,0,width,height,0,-1,1,1);ctx.restore();}this.compose();}paintImageXObject(objId){if(!this.contentVisible){return;}const imgData=this.getObject(objId);if(!imgData){(0,_util.warn)("Dependent image isn't ready yet");return;}this.paintInlineImageXObject(imgData);}paintImageXObjectRepeat(objId,scaleX,scaleY,positions){if(!this.contentVisible){return;}const imgData=this.getObject(objId);if(!imgData){(0,_util.warn)("Dependent image isn't ready yet");return;}const width=imgData.width;const height=imgData.height;const map=[];for(let i=0,ii=positions.length;i<ii;i+=2){map.push({transform:[scaleX,0,0,scaleY,positions[i],positions[i+1]],x:0,y:0,w:width,h:height});}this.paintInlineImageXObjectGroup(imgData,map);}applyTransferMapsToCanvas(ctx){if(this.current.transferMaps!=="none"){ctx.filter=this.current.transferMaps;ctx.drawImage(ctx.canvas,0,0);ctx.filter="none";}return ctx.canvas;}applyTransferMapsToBitmap(imgData){if(this.current.transferMaps==="none"){return imgData.bitmap;}const{bitmap,width,height}=imgData;const tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",width,height);const tmpCtx=tmpCanvas.context;tmpCtx.filter=this.current.transferMaps;tmpCtx.drawImage(bitmap,0,0);tmpCtx.filter="none";return tmpCanvas.canvas;}paintInlineImageXObject(imgData){if(!this.contentVisible){return;}const width=imgData.width;const height=imgData.height;const ctx=this.ctx;this.save();if(!_is_node.isNodeJS){ctx.filter="none";}ctx.scale(1/width,-1/height);let imgToPaint;if(imgData.bitmap){imgToPaint=this.applyTransferMapsToBitmap(imgData);}else if(typeof HTMLElement==="function"&&imgData instanceof HTMLElement||!imgData.data){imgToPaint=imgData;}else{const tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",width,height);const tmpCtx=tmpCanvas.context;putBinaryImageData(tmpCtx,imgData);imgToPaint=this.applyTransferMapsToCanvas(tmpCtx);}const scaled=this._scaleImage(imgToPaint,(0,_display_utils.getCurrentTransformInverse)(ctx));ctx.imageSmoothingEnabled=getImageSmoothingEnabled((0,_display_utils.getCurrentTransform)(ctx),imgData.interpolate);drawImageAtIntegerCoords(ctx,scaled.img,0,0,scaled.paintWidth,scaled.paintHeight,0,-height,width,height);this.compose();this.restore();}paintInlineImageXObjectGroup(imgData,map){if(!this.contentVisible){return;}const ctx=this.ctx;let imgToPaint;if(imgData.bitmap){imgToPaint=imgData.bitmap;}else{const w=imgData.width;const h=imgData.height;const tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",w,h);const tmpCtx=tmpCanvas.context;putBinaryImageData(tmpCtx,imgData);imgToPaint=this.applyTransferMapsToCanvas(tmpCtx);}for(const entry of map){ctx.save();ctx.transform(...entry.transform);ctx.scale(1,-1);drawImageAtIntegerCoords(ctx,imgToPaint,entry.x,entry.y,entry.w,entry.h,0,-1,1,1);ctx.restore();}this.compose();}paintSolidColorImageMask(){if(!this.contentVisible){return;}this.ctx.fillRect(0,0,1,1);this.compose();}markPoint(tag){}markPointProps(tag,properties){}beginMarkedContent(tag){this.markedContentStack.push({visible:true});}beginMarkedContentProps(tag,properties){if(tag==="OC"){this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(properties)});}else{this.markedContentStack.push({visible:true});}this.contentVisible=this.isContentVisible();}endMarkedContent(){this.markedContentStack.pop();this.contentVisible=this.isContentVisible();}beginCompat(){}endCompat(){}consumePath(clipBox){const isEmpty=this.current.isEmptyClip();if(this.pendingClip){this.current.updateClipFromPath();}if(!this.pendingClip){this.compose(clipBox);}const ctx=this.ctx;if(this.pendingClip){if(!isEmpty){if(this.pendingClip===EO_CLIP){ctx.clip("evenodd");}else{ctx.clip();}}this.pendingClip=null;}this.current.startNewPathAndClipBox(this.current.clipBox);ctx.beginPath();}getSinglePixelWidth(){if(!this._cachedGetSinglePixelWidth){const m=(0,_display_utils.getCurrentTransform)(this.ctx);if(m[1]===0&&m[2]===0){this._cachedGetSinglePixelWidth=1/Math.min(Math.abs(m[0]),Math.abs(m[3]));}else{const absDet=Math.abs(m[0]*m[3]-m[2]*m[1]);const normX=Math.hypot(m[0],m[2]);const normY=Math.hypot(m[1],m[3]);this._cachedGetSinglePixelWidth=Math.max(normX,normY)/absDet;}}return this._cachedGetSinglePixelWidth;}getScaleForStroking(){if(!this._cachedScaleForStroking){const{lineWidth}=this.current;const m=(0,_display_utils.getCurrentTransform)(this.ctx);let scaleX,scaleY;if(m[1]===0&&m[2]===0){const normX=Math.abs(m[0]);const normY=Math.abs(m[3]);if(lineWidth===0){scaleX=1/normX;scaleY=1/normY;}else{const scaledXLineWidth=normX*lineWidth;const scaledYLineWidth=normY*lineWidth;scaleX=scaledXLineWidth<1?1/scaledXLineWidth:1;scaleY=scaledYLineWidth<1?1/scaledYLineWidth:1;}}else{const absDet=Math.abs(m[0]*m[3]-m[2]*m[1]);const normX=Math.hypot(m[0],m[1]);const normY=Math.hypot(m[2],m[3]);if(lineWidth===0){scaleX=normY/absDet;scaleY=normX/absDet;}else{const baseArea=lineWidth*absDet;scaleX=normY>baseArea?normY/baseArea:1;scaleY=normX>baseArea?normX/baseArea:1;}}this._cachedScaleForStroking=[scaleX,scaleY];}return this._cachedScaleForStroking;}rescaleAndStroke(saveRestore){const{ctx}=this;const{lineWidth}=this.current;const[scaleX,scaleY]=this.getScaleForStroking();ctx.lineWidth=lineWidth||1;if(scaleX===1&&scaleY===1){ctx.stroke();return;}let savedMatrix,savedDashes,savedDashOffset;if(saveRestore){savedMatrix=(0,_display_utils.getCurrentTransform)(ctx);savedDashes=ctx.getLineDash().slice();savedDashOffset=ctx.lineDashOffset;}ctx.scale(scaleX,scaleY);const scale=Math.max(scaleX,scaleY);ctx.setLineDash(ctx.getLineDash().map(x=>x/scale));ctx.lineDashOffset/=scale;ctx.stroke();if(saveRestore){ctx.setTransform(...savedMatrix);ctx.setLineDash(savedDashes);ctx.lineDashOffset=savedDashOffset;}}isContentVisible(){for(let i=this.markedContentStack.length-1;i>=0;i--){if(!this.markedContentStack[i].visible){return false;}}return true;}}function _restoreInitialState2(){while(this.stateStack.length||this.inSMaskMode){this.restore();}this.ctx.restore();if(this.transparentCanvas){this.ctx=this.compositeCtx;this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.drawImage(this.transparentCanvas,0,0);this.ctx.restore();this.transparentCanvas=null;}}function _drawFilter2(){if(this.pageColors){const hcmFilterId=this.filterFactory.addHCMFilter(this.pageColors.foreground,this.pageColors.background);if(hcmFilterId!=="none"){const savedFilter=this.ctx.filter;this.ctx.filter=hcmFilterId;this.ctx.drawImage(this.ctx.canvas,0,0);this.ctx.filter=savedFilter;}}}exports.CanvasGraphics=CanvasGraphics;for(const op in _util.OPS){if(CanvasGraphics.prototype[op]!==undefined){CanvasGraphics.prototype[_util.OPS[op]]=CanvasGraphics.prototype[op];}}/***/}),(/* 12 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.TilingPattern=exports.PathType=void 0;exports.getShadingPattern=getShadingPattern;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);const PathType={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"};exports.PathType=PathType;function applyBoundingBox(ctx,bbox){if(!bbox){return;}const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];const region=new Path2D();region.rect(bbox[0],bbox[1],width,height);ctx.clip(region);}class BaseShadingPattern{constructor(){if(this.constructor===BaseShadingPattern){(0,_util.unreachable)("Cannot initialize BaseShadingPattern.");}}getPattern(){(0,_util.unreachable)("Abstract method `getPattern` called.");}}class RadialAxialShadingPattern extends BaseShadingPattern{constructor(IR){super();this._type=IR[1];this._bbox=IR[2];this._colorStops=IR[3];this._p0=IR[4];this._p1=IR[5];this._r0=IR[6];this._r1=IR[7];this.matrix=null;}_createGradient(ctx){let grad;if(this._type==="axial"){grad=ctx.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]);}else if(this._type==="radial"){grad=ctx.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1);}for(const colorStop of this._colorStops){grad.addColorStop(colorStop[0],colorStop[1]);}return grad;}getPattern(ctx,owner,inverse,pathType){let pattern;if(pathType===PathType.STROKE||pathType===PathType.FILL){const ownerBBox=owner.current.getClippedPathBoundingBox(pathType,(0,_display_utils.getCurrentTransform)(ctx))||[0,0,0,0];const width=Math.ceil(ownerBBox[2]-ownerBBox[0])||1;const height=Math.ceil(ownerBBox[3]-ownerBBox[1])||1;const tmpCanvas=owner.cachedCanvases.getCanvas("pattern",width,height,true);const tmpCtx=tmpCanvas.context;tmpCtx.clearRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);tmpCtx.beginPath();tmpCtx.rect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);tmpCtx.translate(-ownerBBox[0],-ownerBBox[1]);inverse=_util.Util.transform(inverse,[1,0,0,1,ownerBBox[0],ownerBBox[1]]);tmpCtx.transform(...owner.baseTransform);if(this.matrix){tmpCtx.transform(...this.matrix);}applyBoundingBox(tmpCtx,this._bbox);tmpCtx.fillStyle=this._createGradient(tmpCtx);tmpCtx.fill();pattern=ctx.createPattern(tmpCanvas.canvas,"no-repeat");const domMatrix=new DOMMatrix(inverse);pattern.setTransform(domMatrix);}else{applyBoundingBox(ctx,this._bbox);pattern=this._createGradient(ctx);}return pattern;}}function drawTriangle(data,context,p1,p2,p3,c1,c2,c3){const coords=context.coords,colors=context.colors;const bytes=data.data,rowSize=data.width*4;let tmp;if(coords[p1+1]>coords[p2+1]){tmp=p1;p1=p2;p2=tmp;tmp=c1;c1=c2;c2=tmp;}if(coords[p2+1]>coords[p3+1]){tmp=p2;p2=p3;p3=tmp;tmp=c2;c2=c3;c3=tmp;}if(coords[p1+1]>coords[p2+1]){tmp=p1;p1=p2;p2=tmp;tmp=c1;c1=c2;c2=tmp;}const x1=(coords[p1]+context.offsetX)*context.scaleX;const y1=(coords[p1+1]+context.offsetY)*context.scaleY;const x2=(coords[p2]+context.offsetX)*context.scaleX;const y2=(coords[p2+1]+context.offsetY)*context.scaleY;const x3=(coords[p3]+context.offsetX)*context.scaleX;const y3=(coords[p3+1]+context.offsetY)*context.scaleY;if(y1>=y3){return;}const c1r=colors[c1],c1g=colors[c1+1],c1b=colors[c1+2];const c2r=colors[c2],c2g=colors[c2+1],c2b=colors[c2+2];const c3r=colors[c3],c3g=colors[c3+1],c3b=colors[c3+2];const minY=Math.round(y1),maxY=Math.round(y3);let xa,car,cag,cab;let xb,cbr,cbg,cbb;for(let y=minY;y<=maxY;y++){if(y<y2){let k;if(y<y1){k=0;}else{k=(y1-y)/(y1-y2);}xa=x1-(x1-x2)*k;car=c1r-(c1r-c2r)*k;cag=c1g-(c1g-c2g)*k;cab=c1b-(c1b-c2b)*k;}else{let k;if(y>y3){k=1;}else if(y2===y3){k=0;}else{k=(y2-y)/(y2-y3);}xa=x2-(x2-x3)*k;car=c2r-(c2r-c3r)*k;cag=c2g-(c2g-c3g)*k;cab=c2b-(c2b-c3b)*k;}let k;if(y<y1){k=0;}else if(y>y3){k=1;}else{k=(y1-y)/(y1-y3);}xb=x1-(x1-x3)*k;cbr=c1r-(c1r-c3r)*k;cbg=c1g-(c1g-c3g)*k;cbb=c1b-(c1b-c3b)*k;const x1_=Math.round(Math.min(xa,xb));const x2_=Math.round(Math.max(xa,xb));let j=rowSize*y+x1_*4;for(let x=x1_;x<=x2_;x++){k=(xa-x)/(xa-xb);if(k<0){k=0;}else if(k>1){k=1;}bytes[j++]=car-(car-cbr)*k|0;bytes[j++]=cag-(cag-cbg)*k|0;bytes[j++]=cab-(cab-cbb)*k|0;bytes[j++]=255;}}}function drawFigure(data,figure,context){const ps=figure.coords;const cs=figure.colors;let i,ii;switch(figure.type){case"lattice":const verticesPerRow=figure.verticesPerRow;const rows=Math.floor(ps.length/verticesPerRow)-1;const cols=verticesPerRow-1;for(i=0;i<rows;i++){let q=i*verticesPerRow;for(let j=0;j<cols;j++,q++){drawTriangle(data,context,ps[q],ps[q+1],ps[q+verticesPerRow],cs[q],cs[q+1],cs[q+verticesPerRow]);drawTriangle(data,context,ps[q+verticesPerRow+1],ps[q+1],ps[q+verticesPerRow],cs[q+verticesPerRow+1],cs[q+1],cs[q+verticesPerRow]);}}break;case"triangles":for(i=0,ii=ps.length;i<ii;i+=3){drawTriangle(data,context,ps[i],ps[i+1],ps[i+2],cs[i],cs[i+1],cs[i+2]);}break;default:throw new Error("illegal figure");}}class MeshShadingPattern extends BaseShadingPattern{constructor(IR){super();this._coords=IR[2];this._colors=IR[3];this._figures=IR[4];this._bounds=IR[5];this._bbox=IR[7];this._background=IR[8];this.matrix=null;}_createMeshCanvas(combinedScale,backgroundColor,cachedCanvases){const EXPECTED_SCALE=1.1;const MAX_PATTERN_SIZE=3000;const BORDER_SIZE=2;const offsetX=Math.floor(this._bounds[0]);const offsetY=Math.floor(this._bounds[1]);const boundsWidth=Math.ceil(this._bounds[2])-offsetX;const boundsHeight=Math.ceil(this._bounds[3])-offsetY;const width=Math.min(Math.ceil(Math.abs(boundsWidth*combinedScale[0]*EXPECTED_SCALE)),MAX_PATTERN_SIZE);const height=Math.min(Math.ceil(Math.abs(boundsHeight*combinedScale[1]*EXPECTED_SCALE)),MAX_PATTERN_SIZE);const scaleX=boundsWidth/width;const scaleY=boundsHeight/height;const context={coords:this._coords,colors:this._colors,offsetX:-offsetX,offsetY:-offsetY,scaleX:1/scaleX,scaleY:1/scaleY};const paddedWidth=width+BORDER_SIZE*2;const paddedHeight=height+BORDER_SIZE*2;const tmpCanvas=cachedCanvases.getCanvas("mesh",paddedWidth,paddedHeight,false);const tmpCtx=tmpCanvas.context;const data=tmpCtx.createImageData(width,height);if(backgroundColor){const bytes=data.data;for(let i=0,ii=bytes.length;i<ii;i+=4){bytes[i]=backgroundColor[0];bytes[i+1]=backgroundColor[1];bytes[i+2]=backgroundColor[2];bytes[i+3]=255;}}for(const figure of this._figures){drawFigure(data,figure,context);}tmpCtx.putImageData(data,BORDER_SIZE,BORDER_SIZE);const canvas=tmpCanvas.canvas;return{canvas,offsetX:offsetX-BORDER_SIZE*scaleX,offsetY:offsetY-BORDER_SIZE*scaleY,scaleX,scaleY};}getPattern(ctx,owner,inverse,pathType){applyBoundingBox(ctx,this._bbox);let scale;if(pathType===PathType.SHADING){scale=_util.Util.singularValueDecompose2dScale((0,_display_utils.getCurrentTransform)(ctx));}else{scale=_util.Util.singularValueDecompose2dScale(owner.baseTransform);if(this.matrix){const matrixScale=_util.Util.singularValueDecompose2dScale(this.matrix);scale=[scale[0]*matrixScale[0],scale[1]*matrixScale[1]];}}const temporaryPatternCanvas=this._createMeshCanvas(scale,pathType===PathType.SHADING?null:this._background,owner.cachedCanvases);if(pathType!==PathType.SHADING){ctx.setTransform(...owner.baseTransform);if(this.matrix){ctx.transform(...this.matrix);}}ctx.translate(temporaryPatternCanvas.offsetX,temporaryPatternCanvas.offsetY);ctx.scale(temporaryPatternCanvas.scaleX,temporaryPatternCanvas.scaleY);return ctx.createPattern(temporaryPatternCanvas.canvas,"no-repeat");}}class DummyShadingPattern extends BaseShadingPattern{getPattern(){return"hotpink";}}function getShadingPattern(IR){switch(IR[0]){case"RadialAxial":return new RadialAxialShadingPattern(IR);case"Mesh":return new MeshShadingPattern(IR);case"Dummy":return new DummyShadingPattern();}throw new Error(`Unknown IR type: ${IR[0]}`);}const PaintType={COLORED:1,UNCOLORED:2};class TilingPattern{constructor(IR,color,ctx,canvasGraphicsFactory,baseTransform){this.operatorList=IR[2];this.matrix=IR[3]||[1,0,0,1,0,0];this.bbox=IR[4];this.xstep=IR[5];this.ystep=IR[6];this.paintType=IR[7];this.tilingType=IR[8];this.color=color;this.ctx=ctx;this.canvasGraphicsFactory=canvasGraphicsFactory;this.baseTransform=baseTransform;}createPatternCanvas(owner){const operatorList=this.operatorList;const bbox=this.bbox;const xstep=this.xstep;const ystep=this.ystep;const paintType=this.paintType;const tilingType=this.tilingType;const color=this.color;const canvasGraphicsFactory=this.canvasGraphicsFactory;(0,_util.info)("TilingType: "+tilingType);const x0=bbox[0],y0=bbox[1],x1=bbox[2],y1=bbox[3];const matrixScale=_util.Util.singularValueDecompose2dScale(this.matrix);const curMatrixScale=_util.Util.singularValueDecompose2dScale(this.baseTransform);const combinedScale=[matrixScale[0]*curMatrixScale[0],matrixScale[1]*curMatrixScale[1]];const dimx=this.getSizeAndScale(xstep,this.ctx.canvas.width,combinedScale[0]);const dimy=this.getSizeAndScale(ystep,this.ctx.canvas.height,combinedScale[1]);const tmpCanvas=owner.cachedCanvases.getCanvas("pattern",dimx.size,dimy.size,true);const tmpCtx=tmpCanvas.context;const graphics=canvasGraphicsFactory.createCanvasGraphics(tmpCtx);graphics.groupLevel=owner.groupLevel;this.setFillAndStrokeStyleToContext(graphics,paintType,color);let adjustedX0=x0;let adjustedY0=y0;let adjustedX1=x1;let adjustedY1=y1;if(x0<0){adjustedX0=0;adjustedX1+=Math.abs(x0);}if(y0<0){adjustedY0=0;adjustedY1+=Math.abs(y0);}tmpCtx.translate(-(dimx.scale*adjustedX0),-(dimy.scale*adjustedY0));graphics.transform(dimx.scale,0,0,dimy.scale,0,0);tmpCtx.save();this.clipBbox(graphics,adjustedX0,adjustedY0,adjustedX1,adjustedY1);graphics.baseTransform=(0,_display_utils.getCurrentTransform)(graphics.ctx);graphics.executeOperatorList(operatorList);graphics.endDrawing();return{canvas:tmpCanvas.canvas,scaleX:dimx.scale,scaleY:dimy.scale,offsetX:adjustedX0,offsetY:adjustedY0};}getSizeAndScale(step,realOutputSize,scale){step=Math.abs(step);const maxSize=Math.max(TilingPattern.MAX_PATTERN_SIZE,realOutputSize);let size=Math.ceil(step*scale);if(size>=maxSize){size=maxSize;}else{scale=size/step;}return{scale,size};}clipBbox(graphics,x0,y0,x1,y1){const bboxWidth=x1-x0;const bboxHeight=y1-y0;graphics.ctx.rect(x0,y0,bboxWidth,bboxHeight);graphics.current.updateRectMinMax((0,_display_utils.getCurrentTransform)(graphics.ctx),[x0,y0,x1,y1]);graphics.clip();graphics.endPath();}setFillAndStrokeStyleToContext(graphics,paintType,color){const context=graphics.ctx,current=graphics.current;switch(paintType){case PaintType.COLORED:const ctx=this.ctx;context.fillStyle=ctx.fillStyle;context.strokeStyle=ctx.strokeStyle;current.fillColor=ctx.fillStyle;current.strokeColor=ctx.strokeStyle;break;case PaintType.UNCOLORED:const cssColor=_util.Util.makeHexColor(color[0],color[1],color[2]);context.fillStyle=cssColor;context.strokeStyle=cssColor;current.fillColor=cssColor;current.strokeColor=cssColor;break;default:throw new _util.FormatError(`Unsupported paint type: ${paintType}`);}}getPattern(ctx,owner,inverse,pathType){let matrix=inverse;if(pathType!==PathType.SHADING){matrix=_util.Util.transform(matrix,owner.baseTransform);if(this.matrix){matrix=_util.Util.transform(matrix,this.matrix);}}const temporaryPatternCanvas=this.createPatternCanvas(owner);let domMatrix=new DOMMatrix(matrix);domMatrix=domMatrix.translate(temporaryPatternCanvas.offsetX,temporaryPatternCanvas.offsetY);domMatrix=domMatrix.scale(1/temporaryPatternCanvas.scaleX,1/temporaryPatternCanvas.scaleY);const pattern=ctx.createPattern(temporaryPatternCanvas.canvas,"repeat");pattern.setTransform(domMatrix);return pattern;}}TilingPattern.MAX_PATTERN_SIZE=3000;exports.TilingPattern=TilingPattern;/***/}),(/* 13 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.convertBlackAndWhiteToRGBA=convertBlackAndWhiteToRGBA;exports.convertToRGBA=convertToRGBA;exports.grayToRGBA=grayToRGBA;var _util=__w_pdfjs_require__(1);function convertToRGBA(params){switch(params.kind){case _util.ImageKind.GRAYSCALE_1BPP:return convertBlackAndWhiteToRGBA(params);case _util.ImageKind.RGB_24BPP:return convertRGBToRGBA(params);}return null;}function convertBlackAndWhiteToRGBA({src,srcPos=0,dest,width,height,nonBlackColor=0xffffffff,inverseDecode=false}){const black=_util.FeatureTest.isLittleEndian?0xff000000:0x000000ff;const[zeroMapping,oneMapping]=inverseDecode?[nonBlackColor,black]:[black,nonBlackColor];const widthInSource=width>>3;const widthRemainder=width&7;const srcLength=src.length;dest=new Uint32Array(dest.buffer);let destPos=0;for(let i=0;i<height;i++){for(const max=srcPos+widthInSource;srcPos<max;srcPos++){const elem=srcPos<srcLength?src[srcPos]:255;dest[destPos++]=elem&0b10000000?oneMapping:zeroMapping;dest[destPos++]=elem&0b1000000?oneMapping:zeroMapping;dest[destPos++]=elem&0b100000?oneMapping:zeroMapping;dest[destPos++]=elem&0b10000?oneMapping:zeroMapping;dest[destPos++]=elem&0b1000?oneMapping:zeroMapping;dest[destPos++]=elem&0b100?oneMapping:zeroMapping;dest[destPos++]=elem&0b10?oneMapping:zeroMapping;dest[destPos++]=elem&0b1?oneMapping:zeroMapping;}if(widthRemainder===0){continue;}const elem=srcPos<srcLength?src[srcPos++]:255;for(let j=0;j<widthRemainder;j++){dest[destPos++]=elem&1<<7-j?oneMapping:zeroMapping;}}return{srcPos,destPos};}function convertRGBToRGBA({src,srcPos=0,dest,destPos=0,width,height}){let i=0;const len32=src.length>>2;const src32=new Uint32Array(src.buffer,srcPos,len32);if(_util.FeatureTest.isLittleEndian){for(;i<len32-2;i+=3,destPos+=4){const s1=src32[i];const s2=src32[i+1];const s3=src32[i+2];dest[destPos]=s1|0xff000000;dest[destPos+1]=s1>>>24|s2<<8|0xff000000;dest[destPos+2]=s2>>>16|s3<<16|0xff000000;dest[destPos+3]=s3>>>8|0xff000000;}for(let j=i*4,jj=src.length;j<jj;j+=3){dest[destPos++]=src[j]|src[j+1]<<8|src[j+2]<<16|0xff000000;}}else{for(;i<len32-2;i+=3,destPos+=4){const s1=src32[i];const s2=src32[i+1];const s3=src32[i+2];dest[destPos]=s1|0xff;dest[destPos+1]=s1<<24|s2>>>8|0xff;dest[destPos+2]=s2<<16|s3>>>16|0xff;dest[destPos+3]=s3<<8|0xff;}for(let j=i*4,jj=src.length;j<jj;j+=3){dest[destPos++]=src[j]<<24|src[j+1]<<16|src[j+2]<<8|0xff;}}return{srcPos,destPos};}function grayToRGBA(src,dest){if(_util.FeatureTest.isLittleEndian){for(let i=0,ii=src.length;i<ii;i++){dest[i]=src[i]*0x10101|0xff000000;}}else{for(let i=0,ii=src.length;i<ii;i++){dest[i]=src[i]*0x1010100|0x000000ff;}}}/***/}),(/* 14 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.GlobalWorkerOptions=void 0;const GlobalWorkerOptions=Object.create(null);exports.GlobalWorkerOptions=GlobalWorkerOptions;GlobalWorkerOptions.workerPort=null;GlobalWorkerOptions.workerSrc="";/***/}),(/* 15 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.MessageHandler=void 0;var _util=__w_pdfjs_require__(1);const CallbackKind={UNKNOWN:0,DATA:1,ERROR:2};const StreamKind={UNKNOWN:0,CANCEL:1,CANCEL_COMPLETE:2,CLOSE:3,ENQUEUE:4,ERROR:5,PULL:6,PULL_COMPLETE:7,START_COMPLETE:8};function wrapReason(reason){if(!(reason instanceof Error||typeof reason==="object"&&reason!==null)){(0,_util.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');}switch(reason.name){case"AbortException":return new _util.AbortException(reason.message);case"MissingPDFException":return new _util.MissingPDFException(reason.message);case"PasswordException":return new _util.PasswordException(reason.message,reason.code);case"UnexpectedResponseException":return new _util.UnexpectedResponseException(reason.message,reason.status);case"UnknownErrorException":return new _util.UnknownErrorException(reason.message,reason.details);default:return new _util.UnknownErrorException(reason.message,reason.toString());}}var _createStreamSink=/*#__PURE__*/_classPrivateFieldLooseKey("createStreamSink");var _processStreamMessage=/*#__PURE__*/_classPrivateFieldLooseKey("processStreamMessage");var _deleteStreamController=/*#__PURE__*/_classPrivateFieldLooseKey("deleteStreamController");class MessageHandler{constructor(_sourceName,_targetName,_comObj){Object.defineProperty(this,_deleteStreamController,{value:_deleteStreamController2});Object.defineProperty(this,_processStreamMessage,{value:_processStreamMessage2});Object.defineProperty(this,_createStreamSink,{value:_createStreamSink2});this.sourceName=_sourceName;this.targetName=_targetName;this.comObj=_comObj;this.callbackId=1;this.streamId=1;this.streamSinks=Object.create(null);this.streamControllers=Object.create(null);this.callbackCapabilities=Object.create(null);this.actionHandler=Object.create(null);this._onComObjOnMessage=event=>{const data=event.data;if(data.targetName!==this.sourceName){return;}if(data.stream){_classPrivateFieldLooseBase(this,_processStreamMessage)[_processStreamMessage](data);return;}if(data.callback){const callbackId=data.callbackId;const capability=this.callbackCapabilities[callbackId];if(!capability){throw new Error(`Cannot resolve callback ${callbackId}`);}delete this.callbackCapabilities[callbackId];if(data.callback===CallbackKind.DATA){capability.resolve(data.data);}else if(data.callback===CallbackKind.ERROR){capability.reject(wrapReason(data.reason));}else{throw new Error("Unexpected callback case");}return;}const action=this.actionHandler[data.action];if(!action){throw new Error(`Unknown action from worker: ${data.action}`);}if(data.callbackId){const cbSourceName=this.sourceName;const cbTargetName=data.sourceName;new Promise(function(resolve){resolve(action(data.data));}).then(function(result){_comObj.postMessage({sourceName:cbSourceName,targetName:cbTargetName,callback:CallbackKind.DATA,callbackId:data.callbackId,data:result});},function(reason){_comObj.postMessage({sourceName:cbSourceName,targetName:cbTargetName,callback:CallbackKind.ERROR,callbackId:data.callbackId,reason:wrapReason(reason)});});return;}if(data.streamId){_classPrivateFieldLooseBase(this,_createStreamSink)[_createStreamSink](data);return;}action(data.data);};_comObj.addEventListener("message",this._onComObjOnMessage);}on(actionName,handler){const ah=this.actionHandler;if(ah[actionName]){throw new Error(`There is already an actionName called "${actionName}"`);}ah[actionName]=handler;}send(actionName,data,transfers){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:actionName,data},transfers);}sendWithPromise(actionName,data,transfers){const callbackId=this.callbackId++;const capability=new _util.PromiseCapability();this.callbackCapabilities[callbackId]=capability;try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:actionName,callbackId,data},transfers);}catch(ex){capability.reject(ex);}return capability.promise;}sendWithStream(actionName,data,queueingStrategy,transfers){const streamId=this.streamId++,sourceName=this.sourceName,targetName=this.targetName,comObj=this.comObj;return new ReadableStream({start:controller=>{const startCapability=new _util.PromiseCapability();this.streamControllers[streamId]={controller,startCall:startCapability,pullCall:null,cancelCall:null,isClosed:false};comObj.postMessage({sourceName,targetName,action:actionName,streamId,data,desiredSize:controller.desiredSize},transfers);return startCapability.promise;},pull:controller=>{const pullCapability=new _util.PromiseCapability();this.streamControllers[streamId].pullCall=pullCapability;comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL,streamId,desiredSize:controller.desiredSize});return pullCapability.promise;},cancel:reason=>{(0,_util.assert)(reason instanceof Error,"cancel must have a valid reason");const cancelCapability=new _util.PromiseCapability();this.streamControllers[streamId].cancelCall=cancelCapability;this.streamControllers[streamId].isClosed=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL,streamId,reason:wrapReason(reason)});return cancelCapability.promise;}},queueingStrategy);}destroy(){this.comObj.removeEventListener("message",this._onComObjOnMessage);}}function _createStreamSink2(data){const streamId=data.streamId,sourceName=this.sourceName,targetName=data.sourceName,comObj=this.comObj;const self=this,action=this.actionHandler[data.action];const streamSink={enqueue(chunk,size=1,transfers){if(this.isCancelled){return;}const lastDesiredSize=this.desiredSize;this.desiredSize-=size;if(lastDesiredSize>0&&this.desiredSize<=0){this.sinkCapability=new _util.PromiseCapability();this.ready=this.sinkCapability.promise;}comObj.postMessage({sourceName,targetName,stream:StreamKind.ENQUEUE,streamId,chunk},transfers);},close(){if(this.isCancelled){return;}this.isCancelled=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.CLOSE,streamId});delete self.streamSinks[streamId];},error(reason){(0,_util.assert)(reason instanceof Error,"error must have a valid reason");if(this.isCancelled){return;}this.isCancelled=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.ERROR,streamId,reason:wrapReason(reason)});},sinkCapability:new _util.PromiseCapability(),onPull:null,onCancel:null,isCancelled:false,desiredSize:data.desiredSize,ready:null};streamSink.sinkCapability.resolve();streamSink.ready=streamSink.sinkCapability.promise;this.streamSinks[streamId]=streamSink;new Promise(function(resolve){resolve(action(data.data,streamSink));}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.START_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.START_COMPLETE,streamId,reason:wrapReason(reason)});});}function _processStreamMessage2(data){const streamId=data.streamId,sourceName=this.sourceName,targetName=data.sourceName,comObj=this.comObj;const streamController=this.streamControllers[streamId],streamSink=this.streamSinks[streamId];switch(data.stream){case StreamKind.START_COMPLETE:if(data.success){streamController.startCall.resolve();}else{streamController.startCall.reject(wrapReason(data.reason));}break;case StreamKind.PULL_COMPLETE:if(data.success){streamController.pullCall.resolve();}else{streamController.pullCall.reject(wrapReason(data.reason));}break;case StreamKind.PULL:if(!streamSink){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,success:true});break;}if(streamSink.desiredSize<=0&&data.desiredSize>0){streamSink.sinkCapability.resolve();}streamSink.desiredSize=data.desiredSize;new Promise(function(resolve){resolve(streamSink.onPull?.());}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,reason:wrapReason(reason)});});break;case StreamKind.ENQUEUE:(0,_util.assert)(streamController,"enqueue should have stream controller");if(streamController.isClosed){break;}streamController.controller.enqueue(data.chunk);break;case StreamKind.CLOSE:(0,_util.assert)(streamController,"close should have stream controller");if(streamController.isClosed){break;}streamController.isClosed=true;streamController.controller.close();_classPrivateFieldLooseBase(this,_deleteStreamController)[_deleteStreamController](streamController,streamId);break;case StreamKind.ERROR:(0,_util.assert)(streamController,"error should have stream controller");streamController.controller.error(wrapReason(data.reason));_classPrivateFieldLooseBase(this,_deleteStreamController)[_deleteStreamController](streamController,streamId);break;case StreamKind.CANCEL_COMPLETE:if(data.success){streamController.cancelCall.resolve();}else{streamController.cancelCall.reject(wrapReason(data.reason));}_classPrivateFieldLooseBase(this,_deleteStreamController)[_deleteStreamController](streamController,streamId);break;case StreamKind.CANCEL:if(!streamSink){break;}new Promise(function(resolve){resolve(streamSink.onCancel?.(wrapReason(data.reason)));}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL_COMPLETE,streamId,reason:wrapReason(reason)});});streamSink.sinkCapability.reject(wrapReason(data.reason));streamSink.isCancelled=true;delete this.streamSinks[streamId];break;default:throw new Error("Unexpected stream case");}}async function _deleteStreamController2(streamController,streamId){await Promise.allSettled([streamController.startCall?.promise,streamController.pullCall?.promise,streamController.cancelCall?.promise]);delete this.streamControllers[streamId];}exports.MessageHandler=MessageHandler;/***/}),(/* 16 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.Metadata=void 0;var _util=__w_pdfjs_require__(1);var _metadataMap=/*#__PURE__*/_classPrivateFieldLooseKey("metadataMap");var _data=/*#__PURE__*/_classPrivateFieldLooseKey("data");class Metadata{constructor({parsedData,rawData}){Object.defineProperty(this,_metadataMap,{writable:true,value:void 0});Object.defineProperty(this,_data,{writable:true,value:void 0});_classPrivateFieldLooseBase(this,_metadataMap)[_metadataMap]=parsedData;_classPrivateFieldLooseBase(this,_data)[_data]=rawData;}getRaw(){return _classPrivateFieldLooseBase(this,_data)[_data];}get(name){return _classPrivateFieldLooseBase(this,_metadataMap)[_metadataMap].get(name)??null;}getAll(){return(0,_util.objectFromMap)(_classPrivateFieldLooseBase(this,_metadataMap)[_metadataMap]);}has(name){return _classPrivateFieldLooseBase(this,_metadataMap)[_metadataMap].has(name);}}exports.Metadata=Metadata;/***/}),(/* 17 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.OptionalContentConfig=void 0;var _util=__w_pdfjs_require__(1);var _murmurhash=__w_pdfjs_require__(8);const INTERNAL=Symbol("INTERNAL");var _visible=/*#__PURE__*/_classPrivateFieldLooseKey("visible");class OptionalContentGroup{constructor(name,intent){Object.defineProperty(this,_visible,{writable:true,value:true});this.name=name;this.intent=intent;}get visible(){return _classPrivateFieldLooseBase(this,_visible)[_visible];}_setVisible(internal,visible){if(internal!==INTERNAL){(0,_util.unreachable)("Internal method `_setVisible` called.");}_classPrivateFieldLooseBase(this,_visible)[_visible]=visible;}}var _cachedGetHash=/*#__PURE__*/_classPrivateFieldLooseKey("cachedGetHash");var _groups=/*#__PURE__*/_classPrivateFieldLooseKey("groups");var _initialHash=/*#__PURE__*/_classPrivateFieldLooseKey("initialHash");var _order=/*#__PURE__*/_classPrivateFieldLooseKey("order");var _evaluateVisibilityExpression=/*#__PURE__*/_classPrivateFieldLooseKey("evaluateVisibilityExpression");class OptionalContentConfig{constructor(data){Object.defineProperty(this,_evaluateVisibilityExpression,{value:_evaluateVisibilityExpression2});Object.defineProperty(this,_cachedGetHash,{writable:true,value:null});Object.defineProperty(this,_groups,{writable:true,value:new Map()});Object.defineProperty(this,_initialHash,{writable:true,value:null});Object.defineProperty(this,_order,{writable:true,value:null});this.name=null;this.creator=null;if(data===null){return;}this.name=data.name;this.creator=data.creator;_classPrivateFieldLooseBase(this,_order)[_order]=data.order;for(const group of data.groups){_classPrivateFieldLooseBase(this,_groups)[_groups].set(group.id,new OptionalContentGroup(group.name,group.intent));}if(data.baseState==="OFF"){for(const group of _classPrivateFieldLooseBase(this,_groups)[_groups].values()){group._setVisible(INTERNAL,false);}}for(const on of data.on){_classPrivateFieldLooseBase(this,_groups)[_groups].get(on)._setVisible(INTERNAL,true);}for(const off of data.off){_classPrivateFieldLooseBase(this,_groups)[_groups].get(off)._setVisible(INTERNAL,false);}_classPrivateFieldLooseBase(this,_initialHash)[_initialHash]=this.getHash();}isVisible(group){if(_classPrivateFieldLooseBase(this,_groups)[_groups].size===0){return true;}if(!group){(0,_util.warn)("Optional content group not defined.");return true;}if(group.type==="OCG"){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(group.id)){(0,_util.warn)(`Optional content group not found: ${group.id}`);return true;}return _classPrivateFieldLooseBase(this,_groups)[_groups].get(group.id).visible;}else if(group.type==="OCMD"){if(group.expression){return _classPrivateFieldLooseBase(this,_evaluateVisibilityExpression)[_evaluateVisibilityExpression](group.expression);}if(!group.policy||group.policy==="AnyOn"){for(const id of group.ids){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(id)){(0,_util.warn)(`Optional content group not found: ${id}`);return true;}if(_classPrivateFieldLooseBase(this,_groups)[_groups].get(id).visible){return true;}}return false;}else if(group.policy==="AllOn"){for(const id of group.ids){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(id)){(0,_util.warn)(`Optional content group not found: ${id}`);return true;}if(!_classPrivateFieldLooseBase(this,_groups)[_groups].get(id).visible){return false;}}return true;}else if(group.policy==="AnyOff"){for(const id of group.ids){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(id)){(0,_util.warn)(`Optional content group not found: ${id}`);return true;}if(!_classPrivateFieldLooseBase(this,_groups)[_groups].get(id).visible){return true;}}return false;}else if(group.policy==="AllOff"){for(const id of group.ids){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(id)){(0,_util.warn)(`Optional content group not found: ${id}`);return true;}if(_classPrivateFieldLooseBase(this,_groups)[_groups].get(id).visible){return false;}}return true;}(0,_util.warn)(`Unknown optional content policy ${group.policy}.`);return true;}(0,_util.warn)(`Unknown group type ${group.type}.`);return true;}setVisibility(id,visible=true){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].has(id)){(0,_util.warn)(`Optional content group not found: ${id}`);return;}_classPrivateFieldLooseBase(this,_groups)[_groups].get(id)._setVisible(INTERNAL,!!visible);_classPrivateFieldLooseBase(this,_cachedGetHash)[_cachedGetHash]=null;}get hasInitialVisibility(){return this.getHash()===_classPrivateFieldLooseBase(this,_initialHash)[_initialHash];}getOrder(){if(!_classPrivateFieldLooseBase(this,_groups)[_groups].size){return null;}if(_classPrivateFieldLooseBase(this,_order)[_order]){return _classPrivateFieldLooseBase(this,_order)[_order].slice();}return[..._classPrivateFieldLooseBase(this,_groups)[_groups].keys()];}getGroups(){return _classPrivateFieldLooseBase(this,_groups)[_groups].size>0?(0,_util.objectFromMap)(_classPrivateFieldLooseBase(this,_groups)[_groups]):null;}getGroup(id){return _classPrivateFieldLooseBase(this,_groups)[_groups].get(id)||null;}getHash(){if(_classPrivateFieldLooseBase(this,_cachedGetHash)[_cachedGetHash]!==null){return _classPrivateFieldLooseBase(this,_cachedGetHash)[_cachedGetHash];}const hash=new _murmurhash.MurmurHash3_64();for(const[id,group]of _classPrivateFieldLooseBase(this,_groups)[_groups]){hash.update(`${id}:${group.visible}`);}return _classPrivateFieldLooseBase(this,_cachedGetHash)[_cachedGetHash]=hash.hexdigest();}}function _evaluateVisibilityExpression2(array){const length=array.length;if(length<2){return true;}const operator=array[0];for(let i=1;i<length;i++){const element=array[i];let state;if(Array.isArray(element)){state=_classPrivateFieldLooseBase(this,_evaluateVisibilityExpression)[_evaluateVisibilityExpression](element);}else if(_classPrivateFieldLooseBase(this,_groups)[_groups].has(element)){state=_classPrivateFieldLooseBase(this,_groups)[_groups].get(element).visible;}else{(0,_util.warn)(`Optional content group not found: ${element}`);return true;}switch(operator){case"And":if(!state){return false;}break;case"Or":if(state){return true;}break;case"Not":return!state;default:return true;}}return operator==="And";}exports.OptionalContentConfig=OptionalContentConfig;/***/}),(/* 18 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFDataTransportStream=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);class PDFDataTransportStream{constructor({length,initialData,progressiveDone=false,contentDispositionFilename=null,disableRange=false,disableStream=false},pdfDataRangeTransport){(0,_util.assert)(pdfDataRangeTransport,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');this._queuedChunks=[];this._progressiveDone=progressiveDone;this._contentDispositionFilename=contentDispositionFilename;if(initialData?.length>0){const buffer=initialData instanceof Uint8Array&&initialData.byteLength===initialData.buffer.byteLength?initialData.buffer:new Uint8Array(initialData).buffer;this._queuedChunks.push(buffer);}this._pdfDataRangeTransport=pdfDataRangeTransport;this._isStreamingSupported=!disableStream;this._isRangeSupported=!disableRange;this._contentLength=length;this._fullRequestReader=null;this._rangeReaders=[];this._pdfDataRangeTransport.addRangeListener((begin,chunk)=>{this._onReceiveData({begin,chunk});});this._pdfDataRangeTransport.addProgressListener((loaded,total)=>{this._onProgress({loaded,total});});this._pdfDataRangeTransport.addProgressiveReadListener(chunk=>{this._onReceiveData({chunk});});this._pdfDataRangeTransport.addProgressiveDoneListener(()=>{this._onProgressiveDone();});this._pdfDataRangeTransport.transportReady();}_onReceiveData({begin,chunk}){const buffer=chunk instanceof Uint8Array&&chunk.byteLength===chunk.buffer.byteLength?chunk.buffer:new Uint8Array(chunk).buffer;if(begin===undefined){if(this._fullRequestReader){this._fullRequestReader._enqueue(buffer);}else{this._queuedChunks.push(buffer);}}else{const found=this._rangeReaders.some(function(rangeReader){if(rangeReader._begin!==begin){return false;}rangeReader._enqueue(buffer);return true;});(0,_util.assert)(found,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");}}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}_onProgress(evt){if(evt.total===undefined){this._rangeReaders[0]?.onProgress?.({loaded:evt.loaded});}else{this._fullRequestReader?.onProgress?.({loaded:evt.loaded,total:evt.total});}}_onProgressiveDone(){this._fullRequestReader?.progressiveDone();this._progressiveDone=true;}_removeRangeReader(reader){const i=this._rangeReaders.indexOf(reader);if(i>=0){this._rangeReaders.splice(i,1);}}getFullReader(){(0,_util.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.");const queuedChunks=this._queuedChunks;this._queuedChunks=null;return new PDFDataTransportStreamReader(this,queuedChunks,this._progressiveDone,this._contentDispositionFilename);}getRangeReader(begin,end){if(end<=this._progressiveDataLength){return null;}const reader=new PDFDataTransportStreamRangeReader(this,begin,end);this._pdfDataRangeTransport.requestDataRange(begin,end);this._rangeReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeReaders.slice(0)){reader.cancel(reason);}this._pdfDataRangeTransport.abort();}}exports.PDFDataTransportStream=PDFDataTransportStream;class PDFDataTransportStreamReader{constructor(stream,queuedChunks,progressiveDone=false,contentDispositionFilename=null){this._stream=stream;this._done=progressiveDone||false;this._filename=(0,_display_utils.isPdfFile)(contentDispositionFilename)?contentDispositionFilename:null;this._queuedChunks=queuedChunks||[];this._loaded=0;for(const chunk of this._queuedChunks){this._loaded+=chunk.byteLength;}this._requests=[];this._headersReady=Promise.resolve();stream._fullRequestReader=this;this.onProgress=null;}_enqueue(chunk){if(this._done){return;}if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:chunk,done:false});}else{this._queuedChunks.push(chunk);}this._loaded+=chunk.byteLength;}get headersReady(){return this._headersReady;}get filename(){return this._filename;}get isRangeSupported(){return this._stream._isRangeSupported;}get isStreamingSupported(){return this._stream._isStreamingSupported;}get contentLength(){return this._stream._contentLength;}async read(){if(this._queuedChunks.length>0){const chunk=this._queuedChunks.shift();return{value:chunk,done:false};}if(this._done){return{value:undefined,done:true};}const requestCapability=new _util.PromiseCapability();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}progressiveDone(){if(this._done){return;}this._done=true;}}class PDFDataTransportStreamRangeReader{constructor(stream,begin,end){this._stream=stream;this._begin=begin;this._end=end;this._queuedChunk=null;this._requests=[];this._done=false;this.onProgress=null;}_enqueue(chunk){if(this._done){return;}if(this._requests.length===0){this._queuedChunk=chunk;}else{const requestsCapability=this._requests.shift();requestsCapability.resolve({value:chunk,done:false});for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}this._done=true;this._stream._removeRangeReader(this);}get isStreamingSupported(){return false;}async read(){if(this._queuedChunk){const chunk=this._queuedChunk;this._queuedChunk=null;return{value:chunk,done:false};}if(this._done){return{value:undefined,done:true};}const requestCapability=new _util.PromiseCapability();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;this._stream._removeRangeReader(this);}}/***/}),(/* 19 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.XfaText=void 0;class XfaText{static textContent(xfa){const items=[];const output={items,styles:Object.create(null)};function walk(node){if(!node){return;}let str=null;const name=node.name;if(name==="#text"){str=node.value;}else if(!XfaText.shouldBuildText(name)){return;}else if(node?.attributes?.textContent){str=node.attributes.textContent;}else if(node.value){str=node.value;}if(str!==null){items.push({str});}if(!node.children){return;}for(const child of node.children){walk(child);}}walk(xfa);return output;}static shouldBuildText(name){return!(name==="textarea"||name==="input"||name==="option"||name==="select");}}exports.XfaText=XfaText;/***/}),(/* 20 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.NodeStandardFontDataFactory=exports.NodeFilterFactory=exports.NodeCanvasFactory=exports.NodeCMapReaderFactory=void 0;var _base_factory=__w_pdfjs_require__(7);;const fetchData=function(url){return new Promise((resolve,reject)=>{const fs=__webpack_require__(3237);fs.readFile(url,(error,data)=>{if(error||!data){reject(new Error(error));return;}resolve(new Uint8Array(data));});});};class NodeFilterFactory extends _base_factory.BaseFilterFactory{}exports.NodeFilterFactory=NodeFilterFactory;class NodeCanvasFactory extends _base_factory.BaseCanvasFactory{_createCanvas(width,height){const Canvas=__webpack_require__(7640);return Canvas.createCanvas(width,height);}}exports.NodeCanvasFactory=NodeCanvasFactory;class NodeCMapReaderFactory extends _base_factory.BaseCMapReaderFactory{_fetchData(url,compressionType){return fetchData(url).then(data=>{return{cMapData:data,compressionType};});}}exports.NodeCMapReaderFactory=NodeCMapReaderFactory;class NodeStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory{_fetchData(url){return fetchData(url);}}exports.NodeStandardFontDataFactory=NodeStandardFontDataFactory;/***/}),(/* 21 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNodeStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);;const fs=__webpack_require__(3237);const http=__webpack_require__(7492);const https=__webpack_require__(1815);const url=__webpack_require__(6671);const fileUriRegex=/^file:\/\/\/[a-zA-Z]:\//;function parseUrl(sourceUrl){const parsedUrl=url.parse(sourceUrl);if(parsedUrl.protocol==="file:"||parsedUrl.host){return parsedUrl;}if(/^[a-z]:[/\\]/i.test(sourceUrl)){return url.parse(`file:///${sourceUrl}`);}if(!parsedUrl.host){parsedUrl.protocol="file:";}return parsedUrl;}class PDFNodeStream{constructor(source){this.source=source;this.url=parseUrl(source.url);this.isHttp=this.url.protocol==="http:"||this.url.protocol==="https:";this.isFsUrl=this.url.protocol==="file:";this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}getFullReader(){(0,_util.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once.");this._fullRequestReader=this.isFsUrl?new PDFNodeStreamFsFullReader(this):new PDFNodeStreamFullReader(this);return this._fullRequestReader;}getRangeReader(start,end){if(end<=this._progressiveDataLength){return null;}const rangeReader=this.isFsUrl?new PDFNodeStreamFsRangeReader(this,start,end):new PDFNodeStreamRangeReader(this,start,end);this._rangeRequestReaders.push(rangeReader);return rangeReader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFNodeStream=PDFNodeStream;class BaseFullReader{constructor(stream){this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;const source=stream.source;this._contentLength=source.length;this._loaded=0;this._filename=null;this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._readableStream=null;this._readCapability=new _util.PromiseCapability();this._headersCapability=new _util.PromiseCapability();}get headersReady(){return this._headersCapability.promise;}get filename(){return this._filename;}get contentLength(){return this._contentLength;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;if(this._done){return{value:undefined,done:true};}if(this._storedError){throw this._storedError;}const chunk=this._readableStream.read();if(chunk===null){this._readCapability=new _util.PromiseCapability();return this.read();}this._loaded+=chunk.length;this.onProgress?.({loaded:this._loaded,total:this._contentLength});const buffer=new Uint8Array(chunk).buffer;return{value:buffer,done:false};}cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}_error(reason){this._storedError=reason;this._readCapability.resolve();}_setReadableStream(readableStream){this._readableStream=readableStream;readableStream.on("readable",()=>{this._readCapability.resolve();});readableStream.on("end",()=>{readableStream.destroy();this._done=true;this._readCapability.resolve();});readableStream.on("error",reason=>{this._error(reason);});if(!this._isStreamingSupported&&this._isRangeSupported){this._error(new _util.AbortException("streaming is disabled"));}if(this._storedError){this._readableStream.destroy(this._storedError);}}}class BaseRangeReader{constructor(stream){this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;this._loaded=0;this._readableStream=null;this._readCapability=new _util.PromiseCapability();const source=stream.source;this._isStreamingSupported=!source.disableStream;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;if(this._done){return{value:undefined,done:true};}if(this._storedError){throw this._storedError;}const chunk=this._readableStream.read();if(chunk===null){this._readCapability=new _util.PromiseCapability();return this.read();}this._loaded+=chunk.length;this.onProgress?.({loaded:this._loaded});const buffer=new Uint8Array(chunk).buffer;return{value:buffer,done:false};}cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}_error(reason){this._storedError=reason;this._readCapability.resolve();}_setReadableStream(readableStream){this._readableStream=readableStream;readableStream.on("readable",()=>{this._readCapability.resolve();});readableStream.on("end",()=>{readableStream.destroy();this._done=true;this._readCapability.resolve();});readableStream.on("error",reason=>{this._error(reason);});if(this._storedError){this._readableStream.destroy(this._storedError);}}}function createRequestOptions(parsedUrl,headers){return{protocol:parsedUrl.protocol,auth:parsedUrl.auth,host:parsedUrl.hostname,port:parsedUrl.port,path:parsedUrl.path,method:"GET",headers};}class PDFNodeStreamFullReader extends BaseFullReader{constructor(stream){super(stream);const handleResponse=response=>{if(response.statusCode===404){const error=new _util.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=error;this._headersCapability.reject(error);return;}this._headersCapability.resolve();this._setReadableStream(response);const getResponseHeader=name=>{return this._readableStream.headers[name.toLowerCase()];};const{allowRangeRequests,suggestedLength}=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:stream.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=allowRangeRequests;this._contentLength=suggestedLength||this._contentLength;this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);};this._request=null;if(this._url.protocol==="http:"){this._request=http.request(createRequestOptions(this._url,stream.httpHeaders),handleResponse);}else{this._request=https.request(createRequestOptions(this._url,stream.httpHeaders),handleResponse);}this._request.on("error",reason=>{this._storedError=reason;this._headersCapability.reject(reason);});this._request.end();}}class PDFNodeStreamRangeReader extends BaseRangeReader{constructor(stream,start,end){super(stream);this._httpHeaders={};for(const property in stream.httpHeaders){const value=stream.httpHeaders[property];if(value===undefined){continue;}this._httpHeaders[property]=value;}this._httpHeaders.Range=`bytes=${start}-${end-1}`;const handleResponse=response=>{if(response.statusCode===404){const error=new _util.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=error;return;}this._setReadableStream(response);};this._request=null;if(this._url.protocol==="http:"){this._request=http.request(createRequestOptions(this._url,this._httpHeaders),handleResponse);}else{this._request=https.request(createRequestOptions(this._url,this._httpHeaders),handleResponse);}this._request.on("error",reason=>{this._storedError=reason;});this._request.end();}}class PDFNodeStreamFsFullReader extends BaseFullReader{constructor(stream){super(stream);let path=decodeURIComponent(this._url.path);if(fileUriRegex.test(this._url.href)){path=path.replace(/^\//,"");}fs.lstat(path,(error,stat)=>{if(error){if(error.code==="ENOENT"){error=new _util.MissingPDFException(`Missing PDF "${path}".`);}this._storedError=error;this._headersCapability.reject(error);return;}this._contentLength=stat.size;this._setReadableStream(fs.createReadStream(path));this._headersCapability.resolve();});}}class PDFNodeStreamFsRangeReader extends BaseRangeReader{constructor(stream,start,end){super(stream);let path=decodeURIComponent(this._url.path);if(fileUriRegex.test(this._url.href)){path=path.replace(/^\//,"");}this._setReadableStream(fs.createReadStream(path,{start,end:end-1}));}}/***/}),(/* 22 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.createResponseStatusError=createResponseStatusError;exports.extractFilenameFromHeader=extractFilenameFromHeader;exports.validateRangeRequestCapabilities=validateRangeRequestCapabilities;exports.validateResponseStatus=validateResponseStatus;var _util=__w_pdfjs_require__(1);var _content_disposition=__w_pdfjs_require__(23);var _display_utils=__w_pdfjs_require__(6);function validateRangeRequestCapabilities({getResponseHeader,isHttp,rangeChunkSize,disableRange}){const returnValues={allowRangeRequests:false,suggestedLength:undefined};const length=parseInt(getResponseHeader("Content-Length"),10);if(!Number.isInteger(length)){return returnValues;}returnValues.suggestedLength=length;if(length<=2*rangeChunkSize){return returnValues;}if(disableRange||!isHttp){return returnValues;}if(getResponseHeader("Accept-Ranges")!=="bytes"){return returnValues;}const contentEncoding=getResponseHeader("Content-Encoding")||"identity";if(contentEncoding!=="identity"){return returnValues;}returnValues.allowRangeRequests=true;return returnValues;}function extractFilenameFromHeader(getResponseHeader){const contentDisposition=getResponseHeader("Content-Disposition");if(contentDisposition){let filename=(0,_content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);if(filename.includes("%")){try{filename=decodeURIComponent(filename);}catch(ex){}}if((0,_display_utils.isPdfFile)(filename)){return filename;}}return null;}function createResponseStatusError(status,url){if(status===404||status===0&&url.startsWith("file:")){return new _util.MissingPDFException('Missing PDF "'+url+'".');}return new _util.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`,status);}function validateResponseStatus(status){return status===200||status===206;}/***/}),(/* 23 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.getFilenameFromContentDispositionHeader=getFilenameFromContentDispositionHeader;var _util=__w_pdfjs_require__(1);function getFilenameFromContentDispositionHeader(contentDisposition){let needsEncodingFixup=true;let tmp=toParamRegExp("filename\\*","i").exec(contentDisposition);if(tmp){tmp=tmp[1];let filename=rfc2616unquote(tmp);filename=unescape(filename);filename=rfc5987decode(filename);filename=rfc2047decode(filename);return fixupEncoding(filename);}tmp=rfc2231getparam(contentDisposition);if(tmp){const filename=rfc2047decode(tmp);return fixupEncoding(filename);}tmp=toParamRegExp("filename","i").exec(contentDisposition);if(tmp){tmp=tmp[1];let filename=rfc2616unquote(tmp);filename=rfc2047decode(filename);return fixupEncoding(filename);}function toParamRegExp(attributePattern,flags){return new RegExp("(?:^|;)\\s*"+attributePattern+"\\s*=\\s*"+"("+'[^";\\s][^;\\s]*'+"|"+'"(?:[^"\\\\]|\\\\"?)+"?'+")",flags);}function textdecode(encoding,value){if(encoding){if(!/^[\x00-\xFF]+$/.test(value)){return value;}try{const decoder=new TextDecoder(encoding,{fatal:true});const buffer=(0,_util.stringToBytes)(value);value=decoder.decode(buffer);needsEncodingFixup=false;}catch(e){}}return value;}function fixupEncoding(value){if(needsEncodingFixup&&/[\x80-\xff]/.test(value)){value=textdecode("utf-8",value);if(needsEncodingFixup){value=textdecode("iso-8859-1",value);}}return value;}function rfc2231getparam(contentDispositionStr){const matches=[];let match;const iter=toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)","ig");while((match=iter.exec(contentDispositionStr))!==null){let[,n,quot,part]=match;n=parseInt(n,10);if(n in matches){if(n===0){break;}continue;}matches[n]=[quot,part];}const parts=[];for(let n=0;n<matches.length;++n){if(!(n in matches)){break;}let[quot,part]=matches[n];part=rfc2616unquote(part);if(quot){part=unescape(part);if(n===0){part=rfc5987decode(part);}}parts.push(part);}return parts.join("");}function rfc2616unquote(value){if(value.startsWith('"')){const parts=value.slice(1).split('\\"');for(let i=0;i<parts.length;++i){const quotindex=parts[i].indexOf('"');if(quotindex!==-1){parts[i]=parts[i].slice(0,quotindex);parts.length=i+1;}parts[i]=parts[i].replaceAll(/\\(.)/g,"$1");}value=parts.join('"');}return value;}function rfc5987decode(extvalue){const encodingend=extvalue.indexOf("'");if(encodingend===-1){return extvalue;}const encoding=extvalue.slice(0,encodingend);const langvalue=extvalue.slice(encodingend+1);const value=langvalue.replace(/^[^']*'/,"");return textdecode(encoding,value);}function rfc2047decode(value){if(!value.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(value)){return value;}return value.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(matches,charset,encoding,text){if(encoding==="q"||encoding==="Q"){text=text.replaceAll("_"," ");text=text.replaceAll(/=([0-9a-fA-F]{2})/g,function(match,hex){return String.fromCharCode(parseInt(hex,16));});return textdecode(charset,text);}try{text=atob(text);}catch(e){}return textdecode(charset,text);});}return"";}/***/}),(/* 24 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNetworkStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);;const OK_RESPONSE=200;const PARTIAL_CONTENT_RESPONSE=206;function getArrayBuffer(xhr){const data=xhr.response;if(typeof data!=="string"){return data;}return(0,_util.stringToBytes)(data).buffer;}class NetworkManager{constructor(url,args={}){this.url=url;this.isHttp=/^https?:/i.test(url);this.httpHeaders=this.isHttp&&args.httpHeaders||Object.create(null);this.withCredentials=args.withCredentials||false;this.currXhrId=0;this.pendingRequests=Object.create(null);}requestRange(begin,end,listeners){const args={begin,end};for(const prop in listeners){args[prop]=listeners[prop];}return this.request(args);}requestFull(listeners){return this.request(listeners);}request(args){const xhr=new XMLHttpRequest();const xhrId=this.currXhrId++;const pendingRequest=this.pendingRequests[xhrId]={xhr};xhr.open("GET",this.url);xhr.withCredentials=this.withCredentials;for(const property in this.httpHeaders){const value=this.httpHeaders[property];if(value===undefined){continue;}xhr.setRequestHeader(property,value);}if(this.isHttp&&"begin"in args&&"end"in args){xhr.setRequestHeader("Range",`bytes=${args.begin}-${args.end-1}`);pendingRequest.expectedStatus=PARTIAL_CONTENT_RESPONSE;}else{pendingRequest.expectedStatus=OK_RESPONSE;}xhr.responseType="arraybuffer";if(args.onError){xhr.onerror=function(evt){args.onError(xhr.status);};}xhr.onreadystatechange=this.onStateChange.bind(this,xhrId);xhr.onprogress=this.onProgress.bind(this,xhrId);pendingRequest.onHeadersReceived=args.onHeadersReceived;pendingRequest.onDone=args.onDone;pendingRequest.onError=args.onError;pendingRequest.onProgress=args.onProgress;xhr.send(null);return xhrId;}onProgress(xhrId,evt){const pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}pendingRequest.onProgress?.(evt);}onStateChange(xhrId,evt){const pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}const xhr=pendingRequest.xhr;if(xhr.readyState>=2&&pendingRequest.onHeadersReceived){pendingRequest.onHeadersReceived();delete pendingRequest.onHeadersReceived;}if(xhr.readyState!==4){return;}if(!(xhrId in this.pendingRequests)){return;}delete this.pendingRequests[xhrId];if(xhr.status===0&&this.isHttp){pendingRequest.onError?.(xhr.status);return;}const xhrStatus=xhr.status||OK_RESPONSE;const ok_response_on_range_request=xhrStatus===OK_RESPONSE&&pendingRequest.expectedStatus===PARTIAL_CONTENT_RESPONSE;if(!ok_response_on_range_request&&xhrStatus!==pendingRequest.expectedStatus){pendingRequest.onError?.(xhr.status);return;}const chunk=getArrayBuffer(xhr);if(xhrStatus===PARTIAL_CONTENT_RESPONSE){const rangeHeader=xhr.getResponseHeader("Content-Range");const matches=/bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);pendingRequest.onDone({begin:parseInt(matches[1],10),chunk});}else if(chunk){pendingRequest.onDone({begin:0,chunk});}else{pendingRequest.onError?.(xhr.status);}}getRequestXhr(xhrId){return this.pendingRequests[xhrId].xhr;}isPendingRequest(xhrId){return xhrId in this.pendingRequests;}abortRequest(xhrId){const xhr=this.pendingRequests[xhrId].xhr;delete this.pendingRequests[xhrId];xhr.abort();}}class PDFNetworkStream{constructor(source){this._source=source;this._manager=new NetworkManager(source.url,{httpHeaders:source.httpHeaders,withCredentials:source.withCredentials});this._rangeChunkSize=source.rangeChunkSize;this._fullRequestReader=null;this._rangeRequestReaders=[];}_onRangeRequestReaderClosed(reader){const i=this._rangeRequestReaders.indexOf(reader);if(i>=0){this._rangeRequestReaders.splice(i,1);}}getFullReader(){(0,_util.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once.");this._fullRequestReader=new PDFNetworkStreamFullRequestReader(this._manager,this._source);return this._fullRequestReader;}getRangeReader(begin,end){const reader=new PDFNetworkStreamRangeRequestReader(this._manager,begin,end);reader.onClosed=this._onRangeRequestReaderClosed.bind(this);this._rangeRequestReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFNetworkStream=PDFNetworkStream;class PDFNetworkStreamFullRequestReader{constructor(manager,source){this._manager=manager;const args={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=source.url;this._fullRequestId=manager.requestFull(args);this._headersReceivedCapability=new _util.PromiseCapability();this._disableRange=source.disableRange||false;this._contentLength=source.length;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=false;this._isRangeSupported=false;this._cachedChunks=[];this._requests=[];this._done=false;this._storedError=undefined;this._filename=null;this.onProgress=null;}_onHeadersReceived(){const fullRequestXhrId=this._fullRequestId;const fullRequestXhr=this._manager.getRequestXhr(fullRequestXhrId);const getResponseHeader=name=>{return fullRequestXhr.getResponseHeader(name);};const{allowRangeRequests,suggestedLength}=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});if(allowRangeRequests){this._isRangeSupported=true;}this._contentLength=suggestedLength||this._contentLength;this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);if(this._isRangeSupported){this._manager.abortRequest(fullRequestXhrId);}this._headersReceivedCapability.resolve();}_onDone(data){if(data){if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:data.chunk,done:false});}else{this._cachedChunks.push(data.chunk);}}this._done=true;if(this._cachedChunks.length>0){return;}for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}_onError(status){this._storedError=(0,_network_utils.createResponseStatusError)(status,this._url);this._headersReceivedCapability.reject(this._storedError);for(const requestCapability of this._requests){requestCapability.reject(this._storedError);}this._requests.length=0;this._cachedChunks.length=0;}_onProgress(evt){this.onProgress?.({loaded:evt.loaded,total:evt.lengthComputable?evt.total:this._contentLength});}get filename(){return this._filename;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}get contentLength(){return this._contentLength;}get headersReady(){return this._headersReceivedCapability.promise;}async read(){if(this._storedError){throw this._storedError;}if(this._cachedChunks.length>0){const chunk=this._cachedChunks.shift();return{value:chunk,done:false};}if(this._done){return{value:undefined,done:true};}const requestCapability=new _util.PromiseCapability();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;this._headersReceivedCapability.reject(reason);for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;if(this._manager.isPendingRequest(this._fullRequestId)){this._manager.abortRequest(this._fullRequestId);}this._fullRequestReader=null;}}class PDFNetworkStreamRangeRequestReader{constructor(manager,begin,end){this._manager=manager;const args={onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=manager.url;this._requestId=manager.requestRange(begin,end,args);this._requests=[];this._queuedChunk=null;this._done=false;this._storedError=undefined;this.onProgress=null;this.onClosed=null;}_close(){this.onClosed?.(this);}_onDone(data){const chunk=data.chunk;if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:chunk,done:false});}else{this._queuedChunk=chunk;}this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;this._close();}_onError(status){this._storedError=(0,_network_utils.createResponseStatusError)(status,this._url);for(const requestCapability of this._requests){requestCapability.reject(this._storedError);}this._requests.length=0;this._queuedChunk=null;}_onProgress(evt){if(!this.isStreamingSupported){this.onProgress?.({loaded:evt.loaded});}}get isStreamingSupported(){return false;}async read(){if(this._storedError){throw this._storedError;}if(this._queuedChunk!==null){const chunk=this._queuedChunk;this._queuedChunk=null;return{value:chunk,done:false};}if(this._done){return{value:undefined,done:true};}const requestCapability=new _util.PromiseCapability();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;if(this._manager.isPendingRequest(this._requestId)){this._manager.abortRequest(this._requestId);}this._close();}}/***/}),(/* 25 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFFetchStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);;function createFetchOptions(headers,withCredentials,abortController){return{method:"GET",headers,signal:abortController.signal,mode:"cors",credentials:withCredentials?"include":"same-origin",redirect:"follow"};}function createHeaders(httpHeaders){const headers=new Headers();for(const property in httpHeaders){const value=httpHeaders[property];if(value===undefined){continue;}headers.append(property,value);}return headers;}function getArrayBuffer(val){if(val instanceof Uint8Array){return val.buffer;}if(val instanceof ArrayBuffer){return val;}(0,_util.warn)(`getArrayBuffer - unexpected data format: ${val}`);return new Uint8Array(val).buffer;}class PDFFetchStream{constructor(source){this.source=source;this.isHttp=/^https?:/i.test(source.url);this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}getFullReader(){(0,_util.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once.");this._fullRequestReader=new PDFFetchStreamReader(this);return this._fullRequestReader;}getRangeReader(begin,end){if(end<=this._progressiveDataLength){return null;}const reader=new PDFFetchStreamRangeReader(this,begin,end);this._rangeRequestReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFFetchStream=PDFFetchStream;class PDFFetchStreamReader{constructor(stream){this._stream=stream;this._reader=null;this._loaded=0;this._filename=null;const source=stream.source;this._withCredentials=source.withCredentials||false;this._contentLength=source.length;this._headersCapability=new _util.PromiseCapability();this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._abortController=new AbortController();this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._headers=createHeaders(this._stream.httpHeaders);const url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(response=>{if(!(0,_network_utils.validateResponseStatus)(response.status)){throw(0,_network_utils.createResponseStatusError)(response.status,url);}this._reader=response.body.getReader();this._headersCapability.resolve();const getResponseHeader=name=>{return response.headers.get(name);};const{allowRangeRequests,suggestedLength}=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:this._stream.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=allowRangeRequests;this._contentLength=suggestedLength||this._contentLength;this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);if(!this._isStreamingSupported&&this._isRangeSupported){this.cancel(new _util.AbortException("Streaming is disabled."));}}).catch(this._headersCapability.reject);this.onProgress=null;}get headersReady(){return this._headersCapability.promise;}get filename(){return this._filename;}get contentLength(){return this._contentLength;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._headersCapability.promise;const{value,done}=await this._reader.read();if(done){return{value,done};}this._loaded+=value.byteLength;this.onProgress?.({loaded:this._loaded,total:this._contentLength});return{value:getArrayBuffer(value),done:false};}cancel(reason){this._reader?.cancel(reason);this._abortController.abort();}}class PDFFetchStreamRangeReader{constructor(stream,begin,end){this._stream=stream;this._reader=null;this._loaded=0;const source=stream.source;this._withCredentials=source.withCredentials||false;this._readCapability=new _util.PromiseCapability();this._isStreamingSupported=!source.disableStream;this._abortController=new AbortController();this._headers=createHeaders(this._stream.httpHeaders);this._headers.append("Range",`bytes=${begin}-${end-1}`);const url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(response=>{if(!(0,_network_utils.validateResponseStatus)(response.status)){throw(0,_network_utils.createResponseStatusError)(response.status,url);}this._readCapability.resolve();this._reader=response.body.getReader();}).catch(this._readCapability.reject);this.onProgress=null;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;const{value,done}=await this._reader.read();if(done){return{value,done};}this._loaded+=value.byteLength;this.onProgress?.({loaded:this._loaded});return{value:getArrayBuffer(value),done:false};}cancel(reason){this._reader?.cancel(reason);this._abortController.abort();}}/***/}),(/* 26 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.TextLayerRenderTask=void 0;exports.renderTextLayer=renderTextLayer;exports.updateTextLayer=updateTextLayer;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);const MAX_TEXT_DIVS_TO_RENDER=100000;const DEFAULT_FONT_SIZE=30;const DEFAULT_FONT_ASCENT=0.8;const ascentCache=new Map();function getCtx(size,isOffscreenCanvasSupported){let ctx;if(isOffscreenCanvasSupported&&_util.FeatureTest.isOffscreenCanvasSupported){ctx=new OffscreenCanvas(size,size).getContext("2d",{alpha:false});}else{const canvas=document.createElement("canvas");canvas.width=canvas.height=size;ctx=canvas.getContext("2d",{alpha:false});}return ctx;}function getAscent(fontFamily,isOffscreenCanvasSupported){const cachedAscent=ascentCache.get(fontFamily);if(cachedAscent){return cachedAscent;}const ctx=getCtx(DEFAULT_FONT_SIZE,isOffscreenCanvasSupported);ctx.font=`${DEFAULT_FONT_SIZE}px ${fontFamily}`;const metrics=ctx.measureText("");let ascent=metrics.fontBoundingBoxAscent;let descent=Math.abs(metrics.fontBoundingBoxDescent);if(ascent){const ratio=ascent/(ascent+descent);ascentCache.set(fontFamily,ratio);ctx.canvas.width=ctx.canvas.height=0;return ratio;}ctx.strokeStyle="red";ctx.clearRect(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE);ctx.strokeText("g",0,0);let pixels=ctx.getImageData(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE).data;descent=0;for(let i=pixels.length-1-3;i>=0;i-=4){if(pixels[i]>0){descent=Math.ceil(i/4/DEFAULT_FONT_SIZE);break;}}ctx.clearRect(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE);ctx.strokeText("A",0,DEFAULT_FONT_SIZE);pixels=ctx.getImageData(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE).data;ascent=0;for(let i=0,ii=pixels.length;i<ii;i+=4){if(pixels[i]>0){ascent=DEFAULT_FONT_SIZE-Math.floor(i/4/DEFAULT_FONT_SIZE);break;}}ctx.canvas.width=ctx.canvas.height=0;if(ascent){const ratio=ascent/(ascent+descent);ascentCache.set(fontFamily,ratio);return ratio;}ascentCache.set(fontFamily,DEFAULT_FONT_ASCENT);return DEFAULT_FONT_ASCENT;}function appendText(task,geom,styles){const textDiv=document.createElement("span");const textDivProperties={angle:0,canvasWidth:0,hasText:geom.str!=="",hasEOL:geom.hasEOL,fontSize:0};task._textDivs.push(textDiv);const tx=_util.Util.transform(task._transform,geom.transform);let angle=Math.atan2(tx[1],tx[0]);const style=styles[geom.fontName];if(style.vertical){angle+=Math.PI/2;}const fontHeight=Math.hypot(tx[2],tx[3]);const fontAscent=fontHeight*getAscent(style.fontFamily,task._isOffscreenCanvasSupported);let left,top;if(angle===0){left=tx[4];top=tx[5]-fontAscent;}else{left=tx[4]+fontAscent*Math.sin(angle);top=tx[5]-fontAscent*Math.cos(angle);}const scaleFactorStr="calc(var(--scale-factor)*";const divStyle=textDiv.style;if(task._container===task._rootContainer){divStyle.left=`${(100*left/task._pageWidth).toFixed(2)}%`;divStyle.top=`${(100*top/task._pageHeight).toFixed(2)}%`;}else{divStyle.left=`${scaleFactorStr}${left.toFixed(2)}px)`;divStyle.top=`${scaleFactorStr}${top.toFixed(2)}px)`;}divStyle.fontSize=`${scaleFactorStr}${fontHeight.toFixed(2)}px)`;divStyle.fontFamily=style.fontFamily;textDivProperties.fontSize=fontHeight;textDiv.setAttribute("role","presentation");textDiv.textContent=geom.str;textDiv.dir=geom.dir;if(task._fontInspectorEnabled){textDiv.dataset.fontName=geom.fontName;}if(angle!==0){textDivProperties.angle=angle*(180/Math.PI);}let shouldScaleText=false;if(geom.str.length>1){shouldScaleText=true;}else if(geom.str!==" "&&geom.transform[0]!==geom.transform[3]){const absScaleX=Math.abs(geom.transform[0]),absScaleY=Math.abs(geom.transform[3]);if(absScaleX!==absScaleY&&Math.max(absScaleX,absScaleY)/Math.min(absScaleX,absScaleY)>1.5){shouldScaleText=true;}}if(shouldScaleText){textDivProperties.canvasWidth=style.vertical?geom.height:geom.width;}task._textDivProperties.set(textDiv,textDivProperties);if(task._isReadableStream){task._layoutText(textDiv);}}function layout(params){const{div,scale,properties,ctx,prevFontSize,prevFontFamily}=params;const{style}=div;let transform="";if(properties.canvasWidth!==0&&properties.hasText){const{fontFamily}=style;const{canvasWidth,fontSize}=properties;if(prevFontSize!==fontSize||prevFontFamily!==fontFamily){ctx.font=`${fontSize*scale}px ${fontFamily}`;params.prevFontSize=fontSize;params.prevFontFamily=fontFamily;}const{width}=ctx.measureText(div.textContent);if(width>0){transform=`scaleX(${canvasWidth*scale/width})`;}}if(properties.angle!==0){transform=`rotate(${properties.angle}deg) ${transform}`;}if(transform.length>0){style.transform=transform;}}function render(task){if(task._canceled){return;}const textDivs=task._textDivs;const capability=task._capability;const textDivsLength=textDivs.length;if(textDivsLength>MAX_TEXT_DIVS_TO_RENDER){capability.resolve();return;}if(!task._isReadableStream){for(const textDiv of textDivs){task._layoutText(textDiv);}}capability.resolve();}class TextLayerRenderTask{constructor({textContentSource,container,viewport,textDivs,textDivProperties,textContentItemsStr,isOffscreenCanvasSupported}){this._textContentSource=textContentSource;this._isReadableStream=textContentSource instanceof ReadableStream;this._container=this._rootContainer=container;this._textDivs=textDivs||[];this._textContentItemsStr=textContentItemsStr||[];this._isOffscreenCanvasSupported=isOffscreenCanvasSupported;this._fontInspectorEnabled=!!globalThis.FontInspector?.enabled;this._reader=null;this._textDivProperties=textDivProperties||new WeakMap();this._canceled=false;this._capability=new _util.PromiseCapability();this._layoutTextParams={prevFontSize:null,prevFontFamily:null,div:null,scale:viewport.scale*(globalThis.devicePixelRatio||1),properties:null,ctx:getCtx(0,isOffscreenCanvasSupported)};const{pageWidth,pageHeight,pageX,pageY}=viewport.rawDims;this._transform=[1,0,0,-1,-pageX,pageY+pageHeight];this._pageWidth=pageWidth;this._pageHeight=pageHeight;(0,_display_utils.setLayerDimensions)(container,viewport);this._capability.promise.finally(()=>{this._layoutTextParams=null;}).catch(()=>{});}get promise(){return this._capability.promise;}cancel(){this._canceled=true;if(this._reader){this._reader.cancel(new _util.AbortException("TextLayer task cancelled.")).catch(()=>{});this._reader=null;}this._capability.reject(new _util.AbortException("TextLayer task cancelled."));}_processItems(items,styleCache){for(const item of items){if(item.str===undefined){if(item.type==="beginMarkedContentProps"||item.type==="beginMarkedContent"){const parent=this._container;this._container=document.createElement("span");this._container.classList.add("markedContent");if(item.id!==null){this._container.setAttribute("id",`${item.id}`);}parent.append(this._container);}else if(item.type==="endMarkedContent"){this._container=this._container.parentNode;}continue;}this._textContentItemsStr.push(item.str);appendText(this,item,styleCache);}}_layoutText(textDiv){const textDivProperties=this._layoutTextParams.properties=this._textDivProperties.get(textDiv);this._layoutTextParams.div=textDiv;layout(this._layoutTextParams);if(textDivProperties.hasText){this._container.append(textDiv);}if(textDivProperties.hasEOL){const br=document.createElement("br");br.setAttribute("role","presentation");this._container.append(br);}}_render(){const capability=new _util.PromiseCapability();let styleCache=Object.create(null);if(this._isReadableStream){const pump=()=>{this._reader.read().then(({value,done})=>{if(done){capability.resolve();return;}Object.assign(styleCache,value.styles);this._processItems(value.items,styleCache);pump();},capability.reject);};this._reader=this._textContentSource.getReader();pump();}else if(this._textContentSource){const{items,styles}=this._textContentSource;this._processItems(items,styles);capability.resolve();}else{throw new Error('No "textContentSource" parameter specified.');}capability.promise.then(()=>{styleCache=null;render(this);},this._capability.reject);}}exports.TextLayerRenderTask=TextLayerRenderTask;function renderTextLayer(params){if(!params.textContentSource&&(params.textContent||params.textContentStream)){(0,_display_utils.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters "+"will be removed in the future, please use `textContentSource` instead.");params.textContentSource=params.textContent||params.textContentStream;}const{container,viewport}=params;const style=getComputedStyle(container);const visibility=style.getPropertyValue("visibility");const scaleFactor=parseFloat(style.getPropertyValue("--scale-factor"));if(visibility==="visible"&&(!scaleFactor||Math.abs(scaleFactor-viewport.scale)>1e-5)){console.error("The `--scale-factor` CSS-variable must be set, "+"to the same value as `viewport.scale`, "+"either on the `container`-element itself or higher up in the DOM.");}const task=new TextLayerRenderTask(params);task._render();return task;}function updateTextLayer({container,viewport,textDivs,textDivProperties,isOffscreenCanvasSupported,mustRotate=true,mustRescale=true}){if(mustRotate){(0,_display_utils.setLayerDimensions)(container,{rotation:viewport.rotation});}if(mustRescale){const ctx=getCtx(0,isOffscreenCanvasSupported);const scale=viewport.scale*(globalThis.devicePixelRatio||1);const params={prevFontSize:null,prevFontFamily:null,div:null,scale,properties:null,ctx};for(const div of textDivs){params.properties=textDivProperties.get(div);params.div=div;layout(params);}}}/***/}),(/* 27 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationEditorLayer=void 0;var _util=__w_pdfjs_require__(1);var _tools=__w_pdfjs_require__(5);var _freetext=__w_pdfjs_require__(28);var _ink=__w_pdfjs_require__(29);var _display_utils=__w_pdfjs_require__(6);var _accessibilityManager=/*#__PURE__*/_classPrivateFieldLooseKey("accessibilityManager");var _allowClick=/*#__PURE__*/_classPrivateFieldLooseKey("allowClick");var _boundPointerup=/*#__PURE__*/_classPrivateFieldLooseKey("boundPointerup");var _boundPointerdown=/*#__PURE__*/_classPrivateFieldLooseKey("boundPointerdown");var _editors=/*#__PURE__*/_classPrivateFieldLooseKey("editors");var _hadPointerDown=/*#__PURE__*/_classPrivateFieldLooseKey("hadPointerDown");var _isCleaningUp=/*#__PURE__*/_classPrivateFieldLooseKey("isCleaningUp");var _uiManager=/*#__PURE__*/_classPrivateFieldLooseKey("uiManager");var _changeParent=/*#__PURE__*/_classPrivateFieldLooseKey("changeParent");var _createNewEditor=/*#__PURE__*/_classPrivateFieldLooseKey("createNewEditor");var _createAndAddNewEditor=/*#__PURE__*/_classPrivateFieldLooseKey("createAndAddNewEditor");var _cleanup=/*#__PURE__*/_classPrivateFieldLooseKey("cleanup");class AnnotationEditorLayer{constructor(options){Object.defineProperty(this,_cleanup,{value:_cleanup2});Object.defineProperty(this,_createAndAddNewEditor,{value:_createAndAddNewEditor2});Object.defineProperty(this,_createNewEditor,{value:_createNewEditor2});Object.defineProperty(this,_changeParent,{value:_changeParent2});Object.defineProperty(this,_accessibilityManager,{writable:true,value:void 0});Object.defineProperty(this,_allowClick,{writable:true,value:false});Object.defineProperty(this,_boundPointerup,{writable:true,value:this.pointerup.bind(this)});Object.defineProperty(this,_boundPointerdown,{writable:true,value:this.pointerdown.bind(this)});Object.defineProperty(this,_editors,{writable:true,value:new Map()});Object.defineProperty(this,_hadPointerDown,{writable:true,value:false});Object.defineProperty(this,_isCleaningUp,{writable:true,value:false});Object.defineProperty(this,_uiManager,{writable:true,value:void 0});if(!AnnotationEditorLayer._initialized){AnnotationEditorLayer._initialized=true;_freetext.FreeTextEditor.initialize(options.l10n);_ink.InkEditor.initialize(options.l10n);}options.uiManager.registerEditorTypes([_freetext.FreeTextEditor,_ink.InkEditor]);_classPrivateFieldLooseBase(this,_uiManager)[_uiManager]=options.uiManager;this.pageIndex=options.pageIndex;this.div=options.div;_classPrivateFieldLooseBase(this,_accessibilityManager)[_accessibilityManager]=options.accessibilityManager;_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].addLayer(this);}get isEmpty(){return _classPrivateFieldLooseBase(this,_editors)[_editors].size===0;}updateToolbar(mode){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].updateToolbar(mode);}updateMode(mode=_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getMode()){_classPrivateFieldLooseBase(this,_cleanup)[_cleanup]();if(mode===_util.AnnotationEditorType.INK){this.addInkEditorIfNeeded(false);this.disableClick();}else{this.enableClick();}_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].unselectAll();if(mode!==_util.AnnotationEditorType.NONE){this.div.classList.toggle("freeTextEditing",mode===_util.AnnotationEditorType.FREETEXT);this.div.classList.toggle("inkEditing",mode===_util.AnnotationEditorType.INK);this.div.hidden=false;}}addInkEditorIfNeeded(isCommitting){if(!isCommitting&&_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getMode()!==_util.AnnotationEditorType.INK){return;}if(!isCommitting){for(const editor of _classPrivateFieldLooseBase(this,_editors)[_editors].values()){if(editor.isEmpty()){editor.setInBackground();return;}}}const editor=_classPrivateFieldLooseBase(this,_createAndAddNewEditor)[_createAndAddNewEditor]({offsetX:0,offsetY:0});editor.setInBackground();}setEditingState(isEditing){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].setEditingState(isEditing);}addCommands(params){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].addCommands(params);}enable(){this.div.style.pointerEvents="auto";for(const editor of _classPrivateFieldLooseBase(this,_editors)[_editors].values()){editor.enableEditing();}}disable(){this.div.style.pointerEvents="none";for(const editor of _classPrivateFieldLooseBase(this,_editors)[_editors].values()){editor.disableEditing();}_classPrivateFieldLooseBase(this,_cleanup)[_cleanup]();if(this.isEmpty){this.div.hidden=true;}}setActiveEditor(editor){const currentActive=_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getActive();if(currentActive===editor){return;}_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].setActiveEditor(editor);}enableClick(){this.div.addEventListener("pointerdown",_classPrivateFieldLooseBase(this,_boundPointerdown)[_boundPointerdown]);this.div.addEventListener("pointerup",_classPrivateFieldLooseBase(this,_boundPointerup)[_boundPointerup]);}disableClick(){this.div.removeEventListener("pointerdown",_classPrivateFieldLooseBase(this,_boundPointerdown)[_boundPointerdown]);this.div.removeEventListener("pointerup",_classPrivateFieldLooseBase(this,_boundPointerup)[_boundPointerup]);}attach(editor){_classPrivateFieldLooseBase(this,_editors)[_editors].set(editor.id,editor);}detach(editor){_classPrivateFieldLooseBase(this,_editors)[_editors].delete(editor.id);_classPrivateFieldLooseBase(this,_accessibilityManager)[_accessibilityManager]?.removePointerInTextLayer(editor.contentDiv);}remove(editor){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].removeEditor(editor);this.detach(editor);editor.div.style.display="none";setTimeout(()=>{editor.div.style.display="";editor.div.remove();editor.isAttachedToDOM=false;if(document.activeElement===document.body){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].focusMainContainer();}},0);if(!_classPrivateFieldLooseBase(this,_isCleaningUp)[_isCleaningUp]){this.addInkEditorIfNeeded(false);}}add(editor){_classPrivateFieldLooseBase(this,_changeParent)[_changeParent](editor);_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].addEditor(editor);this.attach(editor);if(!editor.isAttachedToDOM){const div=editor.render();this.div.append(div);editor.isAttachedToDOM=true;}this.moveEditorInDOM(editor);editor.onceAdded();_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].addToAnnotationStorage(editor);}moveEditorInDOM(editor){_classPrivateFieldLooseBase(this,_accessibilityManager)[_accessibilityManager]?.moveElementInDOM(this.div,editor.div,editor.contentDiv,true);}addOrRebuild(editor){if(editor.needsToBeRebuilt()){editor.rebuild();}else{this.add(editor);}}addANewEditor(editor){const cmd=()=>{this.addOrRebuild(editor);};const undo=()=>{editor.remove();};this.addCommands({cmd,undo,mustExec:true});}addUndoableEditor(editor){const cmd=()=>{this.addOrRebuild(editor);};const undo=()=>{editor.remove();};this.addCommands({cmd,undo,mustExec:false});}getNextId(){return _classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getId();}deserialize(data){switch(data.annotationType){case _util.AnnotationEditorType.FREETEXT:return _freetext.FreeTextEditor.deserialize(data,this,_classPrivateFieldLooseBase(this,_uiManager)[_uiManager]);case _util.AnnotationEditorType.INK:return _ink.InkEditor.deserialize(data,this,_classPrivateFieldLooseBase(this,_uiManager)[_uiManager]);}return null;}setSelected(editor){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].setSelected(editor);}toggleSelected(editor){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].toggleSelected(editor);}isSelected(editor){return _classPrivateFieldLooseBase(this,_uiManager)[_uiManager].isSelected(editor);}unselect(editor){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].unselect(editor);}pointerup(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){return;}if(event.target!==this.div){return;}if(!_classPrivateFieldLooseBase(this,_hadPointerDown)[_hadPointerDown]){return;}_classPrivateFieldLooseBase(this,_hadPointerDown)[_hadPointerDown]=false;if(!_classPrivateFieldLooseBase(this,_allowClick)[_allowClick]){_classPrivateFieldLooseBase(this,_allowClick)[_allowClick]=true;return;}_classPrivateFieldLooseBase(this,_createAndAddNewEditor)[_createAndAddNewEditor](event);}pointerdown(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){return;}if(event.target!==this.div){return;}_classPrivateFieldLooseBase(this,_hadPointerDown)[_hadPointerDown]=true;const editor=_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getActive();_classPrivateFieldLooseBase(this,_allowClick)[_allowClick]=!editor||editor.isEmpty();}drop(event){const id=event.dataTransfer.getData("text/plain");const editor=_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getEditor(id);if(!editor){return;}event.preventDefault();event.dataTransfer.dropEffect="move";_classPrivateFieldLooseBase(this,_changeParent)[_changeParent](editor);const rect=this.div.getBoundingClientRect();const endX=event.clientX-rect.x;const endY=event.clientY-rect.y;editor.translate(endX-editor.startX,endY-editor.startY);this.moveEditorInDOM(editor);editor.div.focus();}dragover(event){event.preventDefault();}destroy(){if(_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getActive()?.parent===this){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].setActiveEditor(null);}for(const editor of _classPrivateFieldLooseBase(this,_editors)[_editors].values()){_classPrivateFieldLooseBase(this,_accessibilityManager)[_accessibilityManager]?.removePointerInTextLayer(editor.contentDiv);editor.setParent(null);editor.isAttachedToDOM=false;editor.div.remove();}this.div=null;_classPrivateFieldLooseBase(this,_editors)[_editors].clear();_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].removeLayer(this);}render({viewport}){this.viewport=viewport;(0,_display_utils.setLayerDimensions)(this.div,viewport);(0,_tools.bindEvents)(this,this.div,["dragover","drop"]);for(const editor of _classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getEditors(this.pageIndex)){this.add(editor);}this.updateMode();}update({viewport}){_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].commitOrRemove();this.viewport=viewport;(0,_display_utils.setLayerDimensions)(this.div,{rotation:viewport.rotation});this.updateMode();}get pageDimensions(){const{pageWidth,pageHeight}=this.viewport.rawDims;return[pageWidth,pageHeight];}}function _changeParent2(editor){if(editor.parent===this){return;}this.attach(editor);editor.parent?.detach(editor);editor.setParent(this);if(editor.div&&editor.isAttachedToDOM){editor.div.remove();this.div.append(editor.div);}}function _createNewEditor2(params){switch(_classPrivateFieldLooseBase(this,_uiManager)[_uiManager].getMode()){case _util.AnnotationEditorType.FREETEXT:return new _freetext.FreeTextEditor(params);case _util.AnnotationEditorType.INK:return new _ink.InkEditor(params);}return null;}function _createAndAddNewEditor2(event){const id=this.getNextId();const editor=_classPrivateFieldLooseBase(this,_createNewEditor)[_createNewEditor]({parent:this,id,x:event.offsetX,y:event.offsetY,uiManager:_classPrivateFieldLooseBase(this,_uiManager)[_uiManager]});if(editor){this.add(editor);}return editor;}function _cleanup2(){_classPrivateFieldLooseBase(this,_isCleaningUp)[_isCleaningUp]=true;for(const editor of _classPrivateFieldLooseBase(this,_editors)[_editors].values()){if(editor.isEmpty()){editor.remove();}}_classPrivateFieldLooseBase(this,_isCleaningUp)[_isCleaningUp]=false;}AnnotationEditorLayer._initialized=false;exports.AnnotationEditorLayer=AnnotationEditorLayer;/***/}),(/* 28 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var _FreeTextEditor;Object.defineProperty(exports,"__esModule",{value:true});exports.FreeTextEditor=void 0;var _util=__w_pdfjs_require__(1);var _tools=__w_pdfjs_require__(5);var _editor=__w_pdfjs_require__(4);var _boundEditorDivBlur=/*#__PURE__*/_classPrivateFieldLooseKey("boundEditorDivBlur");var _boundEditorDivFocus=/*#__PURE__*/_classPrivateFieldLooseKey("boundEditorDivFocus");var _boundEditorDivInput=/*#__PURE__*/_classPrivateFieldLooseKey("boundEditorDivInput");var _boundEditorDivKeydown=/*#__PURE__*/_classPrivateFieldLooseKey("boundEditorDivKeydown");var _color=/*#__PURE__*/_classPrivateFieldLooseKey("color");var _content=/*#__PURE__*/_classPrivateFieldLooseKey("content");var _editorDivId=/*#__PURE__*/_classPrivateFieldLooseKey("editorDivId");var _hasAlreadyBeenCommitted=/*#__PURE__*/_classPrivateFieldLooseKey("hasAlreadyBeenCommitted");var _fontSize=/*#__PURE__*/_classPrivateFieldLooseKey("fontSize");var _updateFontSize=/*#__PURE__*/_classPrivateFieldLooseKey("updateFontSize");var _updateColor=/*#__PURE__*/_classPrivateFieldLooseKey("updateColor");var _extractText=/*#__PURE__*/_classPrivateFieldLooseKey("extractText");var _setEditorDimensions=/*#__PURE__*/_classPrivateFieldLooseKey("setEditorDimensions");class FreeTextEditor extends _editor.AnnotationEditor{constructor(params){super({...params,name:"freeTextEditor"});Object.defineProperty(this,_setEditorDimensions,{value:_setEditorDimensions2});Object.defineProperty(this,_extractText,{value:_extractText2});Object.defineProperty(this,_updateColor,{value:_updateColor2});Object.defineProperty(this,_updateFontSize,{value:_updateFontSize2});Object.defineProperty(this,_boundEditorDivBlur,{writable:true,value:this.editorDivBlur.bind(this)});Object.defineProperty(this,_boundEditorDivFocus,{writable:true,value:this.editorDivFocus.bind(this)});Object.defineProperty(this,_boundEditorDivInput,{writable:true,value:this.editorDivInput.bind(this)});Object.defineProperty(this,_boundEditorDivKeydown,{writable:true,value:this.editorDivKeydown.bind(this)});Object.defineProperty(this,_color,{writable:true,value:void 0});Object.defineProperty(this,_content,{writable:true,value:""});Object.defineProperty(this,_editorDivId,{writable:true,value:`${this.id}-editor`});Object.defineProperty(this,_hasAlreadyBeenCommitted,{writable:true,value:false});Object.defineProperty(this,_fontSize,{writable:true,value:void 0});_classPrivateFieldLooseBase(this,_color)[_color]=params.color||FreeTextEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor;_classPrivateFieldLooseBase(this,_fontSize)[_fontSize]=params.fontSize||FreeTextEditor._defaultFontSize;}static initialize(l10n){this._l10nPromise=new Map(["free_text2_default_content","editor_free_text2_aria_label"].map(str=>[str,l10n.get(str)]));const style=getComputedStyle(document.documentElement);this._internalPadding=parseFloat(style.getPropertyValue("--freetext-padding"));}static updateDefaultParams(type,value){switch(type){case _util.AnnotationEditorParamsType.FREETEXT_SIZE:FreeTextEditor._defaultFontSize=value;break;case _util.AnnotationEditorParamsType.FREETEXT_COLOR:FreeTextEditor._defaultColor=value;break;}}updateParams(type,value){switch(type){case _util.AnnotationEditorParamsType.FREETEXT_SIZE:_classPrivateFieldLooseBase(this,_updateFontSize)[_updateFontSize](value);break;case _util.AnnotationEditorParamsType.FREETEXT_COLOR:_classPrivateFieldLooseBase(this,_updateColor)[_updateColor](value);break;}}static get defaultPropertiesToUpdate(){return[[_util.AnnotationEditorParamsType.FREETEXT_SIZE,FreeTextEditor._defaultFontSize],[_util.AnnotationEditorParamsType.FREETEXT_COLOR,FreeTextEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor]];}get propertiesToUpdate(){return[[_util.AnnotationEditorParamsType.FREETEXT_SIZE,_classPrivateFieldLooseBase(this,_fontSize)[_fontSize]],[_util.AnnotationEditorParamsType.FREETEXT_COLOR,_classPrivateFieldLooseBase(this,_color)[_color]]];}getInitialTranslation(){const scale=this.parentScale;return[-FreeTextEditor._internalPadding*scale,-(FreeTextEditor._internalPadding+_classPrivateFieldLooseBase(this,_fontSize)[_fontSize])*scale];}rebuild(){super.rebuild();if(this.div===null){return;}if(!this.isAttachedToDOM){this.parent.add(this);}}enableEditMode(){if(this.isInEditMode()){return;}this.parent.setEditingState(false);this.parent.updateToolbar(_util.AnnotationEditorType.FREETEXT);super.enableEditMode();this.overlayDiv.classList.remove("enabled");this.editorDiv.contentEditable=true;this.div.draggable=false;this.div.removeAttribute("aria-activedescendant");this.editorDiv.addEventListener("keydown",_classPrivateFieldLooseBase(this,_boundEditorDivKeydown)[_boundEditorDivKeydown]);this.editorDiv.addEventListener("focus",_classPrivateFieldLooseBase(this,_boundEditorDivFocus)[_boundEditorDivFocus]);this.editorDiv.addEventListener("blur",_classPrivateFieldLooseBase(this,_boundEditorDivBlur)[_boundEditorDivBlur]);this.editorDiv.addEventListener("input",_classPrivateFieldLooseBase(this,_boundEditorDivInput)[_boundEditorDivInput]);}disableEditMode(){if(!this.isInEditMode()){return;}this.parent.setEditingState(true);super.disableEditMode();this.overlayDiv.classList.add("enabled");this.editorDiv.contentEditable=false;this.div.setAttribute("aria-activedescendant",_classPrivateFieldLooseBase(this,_editorDivId)[_editorDivId]);this.div.draggable=true;this.editorDiv.removeEventListener("keydown",_classPrivateFieldLooseBase(this,_boundEditorDivKeydown)[_boundEditorDivKeydown]);this.editorDiv.removeEventListener("focus",_classPrivateFieldLooseBase(this,_boundEditorDivFocus)[_boundEditorDivFocus]);this.editorDiv.removeEventListener("blur",_classPrivateFieldLooseBase(this,_boundEditorDivBlur)[_boundEditorDivBlur]);this.editorDiv.removeEventListener("input",_classPrivateFieldLooseBase(this,_boundEditorDivInput)[_boundEditorDivInput]);this.div.focus({preventScroll:true});this.isEditing=false;this.parent.div.classList.add("freeTextEditing");}focusin(event){super.focusin(event);if(event.target!==this.editorDiv){this.editorDiv.focus();}}onceAdded(){if(this.width){return;}this.enableEditMode();this.editorDiv.focus();}isEmpty(){return!this.editorDiv||this.editorDiv.innerText.trim()==="";}remove(){this.isEditing=false;this.parent.setEditingState(true);this.parent.div.classList.add("freeTextEditing");super.remove();}commit(){if(!this.isInEditMode()){return;}super.commit();if(!_classPrivateFieldLooseBase(this,_hasAlreadyBeenCommitted)[_hasAlreadyBeenCommitted]){_classPrivateFieldLooseBase(this,_hasAlreadyBeenCommitted)[_hasAlreadyBeenCommitted]=true;this.parent.addUndoableEditor(this);}this.disableEditMode();_classPrivateFieldLooseBase(this,_content)[_content]=_classPrivateFieldLooseBase(this,_extractText)[_extractText]().trimEnd();_classPrivateFieldLooseBase(this,_setEditorDimensions)[_setEditorDimensions]();}shouldGetKeyboardEvents(){return this.isInEditMode();}dblclick(event){this.enableEditMode();this.editorDiv.focus();}keydown(event){if(event.target===this.div&&event.key==="Enter"){this.enableEditMode();this.editorDiv.focus();}}editorDivKeydown(event){FreeTextEditor._keyboardManager.exec(this,event);}editorDivFocus(event){this.isEditing=true;}editorDivBlur(event){this.isEditing=false;}editorDivInput(event){this.parent.div.classList.toggle("freeTextEditing",this.isEmpty());}disableEditing(){this.editorDiv.setAttribute("role","comment");this.editorDiv.removeAttribute("aria-multiline");}enableEditing(){this.editorDiv.setAttribute("role","textbox");this.editorDiv.setAttribute("aria-multiline",true);}render(){if(this.div){return this.div;}let baseX,baseY;if(this.width){baseX=this.x;baseY=this.y;}super.render();this.editorDiv=document.createElement("div");this.editorDiv.className="internal";this.editorDiv.setAttribute("id",_classPrivateFieldLooseBase(this,_editorDivId)[_editorDivId]);this.enableEditing();FreeTextEditor._l10nPromise.get("editor_free_text2_aria_label").then(msg=>this.editorDiv?.setAttribute("aria-label",msg));FreeTextEditor._l10nPromise.get("free_text2_default_content").then(msg=>this.editorDiv?.setAttribute("default-content",msg));this.editorDiv.contentEditable=true;const{style}=this.editorDiv;style.fontSize=`calc(${_classPrivateFieldLooseBase(this,_fontSize)[_fontSize]}px * var(--scale-factor))`;style.color=_classPrivateFieldLooseBase(this,_color)[_color];this.div.append(this.editorDiv);this.overlayDiv=document.createElement("div");this.overlayDiv.classList.add("overlay","enabled");this.div.append(this.overlayDiv);(0,_tools.bindEvents)(this,this.div,["dblclick","keydown"]);if(this.width){const[parentWidth,parentHeight]=this.parentDimensions;this.setAt(baseX*parentWidth,baseY*parentHeight,this.width*parentWidth,this.height*parentHeight);for(const line of _classPrivateFieldLooseBase(this,_content)[_content].split("\n")){const div=document.createElement("div");div.append(line?document.createTextNode(line):document.createElement("br"));this.editorDiv.append(div);}this.div.draggable=true;this.editorDiv.contentEditable=false;}else{this.div.draggable=false;this.editorDiv.contentEditable=true;}return this.div;}get contentDiv(){return this.editorDiv;}static deserialize(data,parent,uiManager){const editor=super.deserialize(data,parent,uiManager);_classPrivateFieldLooseBase(editor,_fontSize)[_fontSize]=data.fontSize;_classPrivateFieldLooseBase(editor,_color)[_color]=_util.Util.makeHexColor(...data.color);_classPrivateFieldLooseBase(editor,_content)[_content]=data.value;return editor;}serialize(){if(this.isEmpty()){return null;}const padding=FreeTextEditor._internalPadding*this.parentScale;const rect=this.getRect(padding,padding);const color=_editor.AnnotationEditor._colorManager.convert(this.isAttachedToDOM?getComputedStyle(this.editorDiv).color:_classPrivateFieldLooseBase(this,_color)[_color]);return{annotationType:_util.AnnotationEditorType.FREETEXT,color,fontSize:_classPrivateFieldLooseBase(this,_fontSize)[_fontSize],value:_classPrivateFieldLooseBase(this,_content)[_content],pageIndex:this.pageIndex,rect,rotation:this.rotation};}}_FreeTextEditor=FreeTextEditor;function _updateFontSize2(fontSize){const setFontsize=size=>{this.editorDiv.style.fontSize=`calc(${size}px * var(--scale-factor))`;this.translate(0,-(size-_classPrivateFieldLooseBase(this,_fontSize)[_fontSize])*this.parentScale);_classPrivateFieldLooseBase(this,_fontSize)[_fontSize]=size;_classPrivateFieldLooseBase(this,_setEditorDimensions)[_setEditorDimensions]();};const savedFontsize=_classPrivateFieldLooseBase(this,_fontSize)[_fontSize];this.addCommands({cmd:()=>{setFontsize(fontSize);},undo:()=>{setFontsize(savedFontsize);},mustExec:true,type:_util.AnnotationEditorParamsType.FREETEXT_SIZE,overwriteIfSameType:true,keepUndo:true});}function _updateColor2(color){const savedColor=_classPrivateFieldLooseBase(this,_color)[_color];this.addCommands({cmd:()=>{_classPrivateFieldLooseBase(this,_color)[_color]=this.editorDiv.style.color=color;},undo:()=>{_classPrivateFieldLooseBase(this,_color)[_color]=this.editorDiv.style.color=savedColor;},mustExec:true,type:_util.AnnotationEditorParamsType.FREETEXT_COLOR,overwriteIfSameType:true,keepUndo:true});}function _extractText2(){const divs=this.editorDiv.getElementsByTagName("div");if(divs.length===0){return this.editorDiv.innerText;}const buffer=[];for(const div of divs){buffer.push(div.innerText.replace(/\r\n?|\n/,""));}return buffer.join("\n");}function _setEditorDimensions2(){const[parentWidth,parentHeight]=this.parentDimensions;let rect;if(this.isAttachedToDOM){rect=this.div.getBoundingClientRect();}else{const{currentLayer,div}=this;const savedDisplay=div.style.display;div.style.display="hidden";currentLayer.div.append(this.div);rect=div.getBoundingClientRect();div.remove();div.style.display=savedDisplay;}this.width=rect.width/parentWidth;this.height=rect.height/parentHeight;}FreeTextEditor._freeTextDefaultContent="";FreeTextEditor._l10nPromise=void 0;FreeTextEditor._internalPadding=0;FreeTextEditor._defaultColor=null;FreeTextEditor._defaultFontSize=10;FreeTextEditor._keyboardManager=new _tools.KeyboardManager([[["ctrl+Enter","mac+meta+Enter","Escape","mac+Escape"],_FreeTextEditor.prototype.commitOrRemove]]);FreeTextEditor._type="freetext";exports.FreeTextEditor=FreeTextEditor;/***/}),(/* 29 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var _InkEditor;Object.defineProperty(exports,"__esModule",{value:true});exports.InkEditor=void 0;Object.defineProperty(exports,"fitCurve",{enumerable:true,get:function(){return _pdfjsFitCurve.fitCurve;}});var _util=__w_pdfjs_require__(1);var _editor=__w_pdfjs_require__(4);var _pdfjsFitCurve=__w_pdfjs_require__(30);var _tools=__w_pdfjs_require__(5);const RESIZER_SIZE=16;var _aspectRatio=/*#__PURE__*/_classPrivateFieldLooseKey("aspectRatio");var _baseHeight=/*#__PURE__*/_classPrivateFieldLooseKey("baseHeight");var _baseWidth=/*#__PURE__*/_classPrivateFieldLooseKey("baseWidth");var _boundCanvasPointermove=/*#__PURE__*/_classPrivateFieldLooseKey("boundCanvasPointermove");var _boundCanvasPointerleave=/*#__PURE__*/_classPrivateFieldLooseKey("boundCanvasPointerleave");var _boundCanvasPointerup=/*#__PURE__*/_classPrivateFieldLooseKey("boundCanvasPointerup");var _boundCanvasPointerdown=/*#__PURE__*/_classPrivateFieldLooseKey("boundCanvasPointerdown");var _disableEditing=/*#__PURE__*/_classPrivateFieldLooseKey("disableEditing");var _isCanvasInitialized=/*#__PURE__*/_classPrivateFieldLooseKey("isCanvasInitialized");var _lastPoint=/*#__PURE__*/_classPrivateFieldLooseKey("lastPoint");var _observer=/*#__PURE__*/_classPrivateFieldLooseKey("observer");var _realWidth=/*#__PURE__*/_classPrivateFieldLooseKey("realWidth");var _realHeight=/*#__PURE__*/_classPrivateFieldLooseKey("realHeight");var _requestFrameCallback=/*#__PURE__*/_classPrivateFieldLooseKey("requestFrameCallback");var _updateThickness=/*#__PURE__*/_classPrivateFieldLooseKey("updateThickness");var _updateColor3=/*#__PURE__*/_classPrivateFieldLooseKey("updateColor");var _updateOpacity=/*#__PURE__*/_classPrivateFieldLooseKey("updateOpacity");var _getInitialBBox=/*#__PURE__*/_classPrivateFieldLooseKey("getInitialBBox");var _setStroke=/*#__PURE__*/_classPrivateFieldLooseKey("setStroke");var _startDrawing=/*#__PURE__*/_classPrivateFieldLooseKey("startDrawing");var _draw=/*#__PURE__*/_classPrivateFieldLooseKey("draw");var _stopDrawing=/*#__PURE__*/_classPrivateFieldLooseKey("stopDrawing");var _redraw=/*#__PURE__*/_classPrivateFieldLooseKey("redraw");var _endDrawing=/*#__PURE__*/_classPrivateFieldLooseKey("endDrawing");var _createCanvas=/*#__PURE__*/_classPrivateFieldLooseKey("createCanvas");var _createObserver=/*#__PURE__*/_classPrivateFieldLooseKey("createObserver");var _setCanvasDims=/*#__PURE__*/_classPrivateFieldLooseKey("setCanvasDims");var _setScaleFactor=/*#__PURE__*/_classPrivateFieldLooseKey("setScaleFactor");var _updateTransform=/*#__PURE__*/_classPrivateFieldLooseKey("updateTransform");var _buildPath2D=/*#__PURE__*/_classPrivateFieldLooseKey("buildPath2D");var _serializePaths=/*#__PURE__*/_classPrivateFieldLooseKey("serializePaths");var _extractPointsOnBezier=/*#__PURE__*/_classPrivateFieldLooseKey("extractPointsOnBezier");var _isAlmostFlat=/*#__PURE__*/_classPrivateFieldLooseKey("isAlmostFlat");var _getBbox=/*#__PURE__*/_classPrivateFieldLooseKey("getBbox");var _getPadding=/*#__PURE__*/_classPrivateFieldLooseKey("getPadding");var _fitToContent=/*#__PURE__*/_classPrivateFieldLooseKey("fitToContent");var _setMinDims=/*#__PURE__*/_classPrivateFieldLooseKey("setMinDims");class InkEditor extends _editor.AnnotationEditor{constructor(params){super({...params,name:"inkEditor"});Object.defineProperty(this,_setMinDims,{value:_setMinDims2});Object.defineProperty(this,_fitToContent,{value:_fitToContent2});Object.defineProperty(this,_getPadding,{value:_getPadding2});Object.defineProperty(this,_getBbox,{value:_getBbox2});Object.defineProperty(this,_isAlmostFlat,{value:_isAlmostFlat2});Object.defineProperty(this,_extractPointsOnBezier,{value:_extractPointsOnBezier2});Object.defineProperty(this,_serializePaths,{value:_serializePaths2});Object.defineProperty(this,_updateTransform,{value:_updateTransform2});Object.defineProperty(this,_setScaleFactor,{value:_setScaleFactor2});Object.defineProperty(this,_setCanvasDims,{value:_setCanvasDims2});Object.defineProperty(this,_createObserver,{value:_createObserver2});Object.defineProperty(this,_createCanvas,{value:_createCanvas2});Object.defineProperty(this,_endDrawing,{value:_endDrawing2});Object.defineProperty(this,_redraw,{value:_redraw2});Object.defineProperty(this,_stopDrawing,{value:_stopDrawing2});Object.defineProperty(this,_draw,{value:_draw2});Object.defineProperty(this,_startDrawing,{value:_startDrawing2});Object.defineProperty(this,_setStroke,{value:_setStroke2});Object.defineProperty(this,_getInitialBBox,{value:_getInitialBBox2});Object.defineProperty(this,_updateOpacity,{value:_updateOpacity2});Object.defineProperty(this,_updateColor3,{value:_updateColor4});Object.defineProperty(this,_updateThickness,{value:_updateThickness2});Object.defineProperty(this,_aspectRatio,{writable:true,value:0});Object.defineProperty(this,_baseHeight,{writable:true,value:0});Object.defineProperty(this,_baseWidth,{writable:true,value:0});Object.defineProperty(this,_boundCanvasPointermove,{writable:true,value:this.canvasPointermove.bind(this)});Object.defineProperty(this,_boundCanvasPointerleave,{writable:true,value:this.canvasPointerleave.bind(this)});Object.defineProperty(this,_boundCanvasPointerup,{writable:true,value:this.canvasPointerup.bind(this)});Object.defineProperty(this,_boundCanvasPointerdown,{writable:true,value:this.canvasPointerdown.bind(this)});Object.defineProperty(this,_disableEditing,{writable:true,value:false});Object.defineProperty(this,_isCanvasInitialized,{writable:true,value:false});Object.defineProperty(this,_lastPoint,{writable:true,value:null});Object.defineProperty(this,_observer,{writable:true,value:null});Object.defineProperty(this,_realWidth,{writable:true,value:0});Object.defineProperty(this,_realHeight,{writable:true,value:0});Object.defineProperty(this,_requestFrameCallback,{writable:true,value:null});this.color=params.color||null;this.thickness=params.thickness||null;this.opacity=params.opacity||null;this.paths=[];this.bezierPath2D=[];this.currentPath=[];this.scaleFactor=1;this.translationX=this.translationY=0;this.x=0;this.y=0;}static initialize(l10n){this._l10nPromise=new Map(["editor_ink_canvas_aria_label","editor_ink2_aria_label"].map(str=>[str,l10n.get(str)]));}static updateDefaultParams(type,value){switch(type){case _util.AnnotationEditorParamsType.INK_THICKNESS:InkEditor._defaultThickness=value;break;case _util.AnnotationEditorParamsType.INK_COLOR:InkEditor._defaultColor=value;break;case _util.AnnotationEditorParamsType.INK_OPACITY:InkEditor._defaultOpacity=value/100;break;}}updateParams(type,value){switch(type){case _util.AnnotationEditorParamsType.INK_THICKNESS:_classPrivateFieldLooseBase(this,_updateThickness)[_updateThickness](value);break;case _util.AnnotationEditorParamsType.INK_COLOR:_classPrivateFieldLooseBase(this,_updateColor3)[_updateColor3](value);break;case _util.AnnotationEditorParamsType.INK_OPACITY:_classPrivateFieldLooseBase(this,_updateOpacity)[_updateOpacity](value);break;}}static get defaultPropertiesToUpdate(){return[[_util.AnnotationEditorParamsType.INK_THICKNESS,InkEditor._defaultThickness],[_util.AnnotationEditorParamsType.INK_COLOR,InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor],[_util.AnnotationEditorParamsType.INK_OPACITY,Math.round(InkEditor._defaultOpacity*100)]];}get propertiesToUpdate(){return[[_util.AnnotationEditorParamsType.INK_THICKNESS,this.thickness||InkEditor._defaultThickness],[_util.AnnotationEditorParamsType.INK_COLOR,this.color||InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor],[_util.AnnotationEditorParamsType.INK_OPACITY,Math.round(100*(this.opacity??InkEditor._defaultOpacity))]];}rebuild(){super.rebuild();if(this.div===null){return;}if(!this.canvas){_classPrivateFieldLooseBase(this,_createCanvas)[_createCanvas]();_classPrivateFieldLooseBase(this,_createObserver)[_createObserver]();}if(!this.isAttachedToDOM){this.parent.add(this);_classPrivateFieldLooseBase(this,_setCanvasDims)[_setCanvasDims]();}_classPrivateFieldLooseBase(this,_fitToContent)[_fitToContent]();}remove(){if(this.canvas===null){return;}if(!this.isEmpty()){this.commit();}this.canvas.width=this.canvas.height=0;this.canvas.remove();this.canvas=null;_classPrivateFieldLooseBase(this,_observer)[_observer].disconnect();_classPrivateFieldLooseBase(this,_observer)[_observer]=null;super.remove();}setParent(parent){if(!this.parent&&parent){this._uiManager.removeShouldRescale(this);}else if(this.parent&&parent===null){this._uiManager.addShouldRescale(this);}super.setParent(parent);}onScaleChanging(){const[parentWidth,parentHeight]=this.parentDimensions;const width=this.width*parentWidth;const height=this.height*parentHeight;this.setDimensions(width,height);}enableEditMode(){if(_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]||this.canvas===null){return;}super.enableEditMode();this.div.draggable=false;this.canvas.addEventListener("pointerdown",_classPrivateFieldLooseBase(this,_boundCanvasPointerdown)[_boundCanvasPointerdown]);this.canvas.addEventListener("pointerup",_classPrivateFieldLooseBase(this,_boundCanvasPointerup)[_boundCanvasPointerup]);}disableEditMode(){if(!this.isInEditMode()||this.canvas===null){return;}super.disableEditMode();this.div.draggable=!this.isEmpty();this.div.classList.remove("editing");this.canvas.removeEventListener("pointerdown",_classPrivateFieldLooseBase(this,_boundCanvasPointerdown)[_boundCanvasPointerdown]);this.canvas.removeEventListener("pointerup",_classPrivateFieldLooseBase(this,_boundCanvasPointerup)[_boundCanvasPointerup]);}onceAdded(){this.div.draggable=!this.isEmpty();}isEmpty(){return this.paths.length===0||this.paths.length===1&&this.paths[0].length===0;}commit(){if(_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]){return;}super.commit();this.isEditing=false;this.disableEditMode();this.setInForeground();_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]=true;this.div.classList.add("disabled");_classPrivateFieldLooseBase(this,_fitToContent)[_fitToContent](true);this.parent.addInkEditorIfNeeded(true);this.parent.moveEditorInDOM(this);this.div.focus({preventScroll:true});}focusin(event){super.focusin(event);this.enableEditMode();}canvasPointerdown(event){if(event.button!==0||!this.isInEditMode()||_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]){return;}this.setInForeground();if(event.type!=="mouse"){this.div.focus();}event.stopPropagation();this.canvas.addEventListener("pointerleave",_classPrivateFieldLooseBase(this,_boundCanvasPointerleave)[_boundCanvasPointerleave]);this.canvas.addEventListener("pointermove",_classPrivateFieldLooseBase(this,_boundCanvasPointermove)[_boundCanvasPointermove]);_classPrivateFieldLooseBase(this,_startDrawing)[_startDrawing](event.offsetX,event.offsetY);}canvasPointermove(event){event.stopPropagation();_classPrivateFieldLooseBase(this,_draw)[_draw](event.offsetX,event.offsetY);}canvasPointerup(event){if(event.button!==0){return;}if(this.isInEditMode()&&this.currentPath.length!==0){event.stopPropagation();_classPrivateFieldLooseBase(this,_endDrawing)[_endDrawing](event);this.setInBackground();}}canvasPointerleave(event){_classPrivateFieldLooseBase(this,_endDrawing)[_endDrawing](event);this.setInBackground();}render(){if(this.div){return this.div;}let baseX,baseY;if(this.width){baseX=this.x;baseY=this.y;}super.render();InkEditor._l10nPromise.get("editor_ink2_aria_label").then(msg=>this.div?.setAttribute("aria-label",msg));const[x,y,w,h]=_classPrivateFieldLooseBase(this,_getInitialBBox)[_getInitialBBox]();this.setAt(x,y,0,0);this.setDims(w,h);_classPrivateFieldLooseBase(this,_createCanvas)[_createCanvas]();if(this.width){const[parentWidth,parentHeight]=this.parentDimensions;this.setAt(baseX*parentWidth,baseY*parentHeight,this.width*parentWidth,this.height*parentHeight);_classPrivateFieldLooseBase(this,_isCanvasInitialized)[_isCanvasInitialized]=true;_classPrivateFieldLooseBase(this,_setCanvasDims)[_setCanvasDims]();this.setDims(this.width*parentWidth,this.height*parentHeight);_classPrivateFieldLooseBase(this,_redraw)[_redraw]();_classPrivateFieldLooseBase(this,_setMinDims)[_setMinDims]();this.div.classList.add("disabled");}else{this.div.classList.add("editing");this.enableEditMode();}_classPrivateFieldLooseBase(this,_createObserver)[_createObserver]();return this.div;}setDimensions(width,height){const roundedWidth=Math.round(width);const roundedHeight=Math.round(height);if(_classPrivateFieldLooseBase(this,_realWidth)[_realWidth]===roundedWidth&&_classPrivateFieldLooseBase(this,_realHeight)[_realHeight]===roundedHeight){return;}_classPrivateFieldLooseBase(this,_realWidth)[_realWidth]=roundedWidth;_classPrivateFieldLooseBase(this,_realHeight)[_realHeight]=roundedHeight;this.canvas.style.visibility="hidden";if(_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]&&Math.abs(_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]-width/height)>1e-2){height=Math.ceil(width/_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]);this.setDims(width,height);}const[parentWidth,parentHeight]=this.parentDimensions;this.width=width/parentWidth;this.height=height/parentHeight;if(_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]){_classPrivateFieldLooseBase(this,_setScaleFactor)[_setScaleFactor](width,height);}_classPrivateFieldLooseBase(this,_setCanvasDims)[_setCanvasDims]();_classPrivateFieldLooseBase(this,_redraw)[_redraw]();this.canvas.style.visibility="visible";this.fixDims();}static deserialize(data,parent,uiManager){const editor=super.deserialize(data,parent,uiManager);editor.thickness=data.thickness;editor.color=_util.Util.makeHexColor(...data.color);editor.opacity=data.opacity;const[pageWidth,pageHeight]=editor.pageDimensions;const width=editor.width*pageWidth;const height=editor.height*pageHeight;const scaleFactor=editor.parentScale;const padding=data.thickness/2;_classPrivateFieldLooseBase(editor,_aspectRatio)[_aspectRatio]=width/height;_classPrivateFieldLooseBase(editor,_disableEditing)[_disableEditing]=true;_classPrivateFieldLooseBase(editor,_realWidth)[_realWidth]=Math.round(width);_classPrivateFieldLooseBase(editor,_realHeight)[_realHeight]=Math.round(height);for(const{bezier}of data.paths){const path=[];editor.paths.push(path);let p0=scaleFactor*(bezier[0]-padding);let p1=scaleFactor*(height-bezier[1]-padding);for(let i=2,ii=bezier.length;i<ii;i+=6){const p10=scaleFactor*(bezier[i]-padding);const p11=scaleFactor*(height-bezier[i+1]-padding);const p20=scaleFactor*(bezier[i+2]-padding);const p21=scaleFactor*(height-bezier[i+3]-padding);const p30=scaleFactor*(bezier[i+4]-padding);const p31=scaleFactor*(height-bezier[i+5]-padding);path.push([[p0,p1],[p10,p11],[p20,p21],[p30,p31]]);p0=p30;p1=p31;}const path2D=_classPrivateFieldLooseBase(this,_buildPath2D)[_buildPath2D](path);editor.bezierPath2D.push(path2D);}const bbox=_classPrivateFieldLooseBase(editor,_getBbox)[_getBbox]();_classPrivateFieldLooseBase(editor,_baseWidth)[_baseWidth]=Math.max(RESIZER_SIZE,bbox[2]-bbox[0]);_classPrivateFieldLooseBase(editor,_baseHeight)[_baseHeight]=Math.max(RESIZER_SIZE,bbox[3]-bbox[1]);_classPrivateFieldLooseBase(editor,_setScaleFactor)[_setScaleFactor](width,height);return editor;}serialize(){if(this.isEmpty()){return null;}const rect=this.getRect(0,0);const height=this.rotation%180===0?rect[3]-rect[1]:rect[2]-rect[0];const color=_editor.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);return{annotationType:_util.AnnotationEditorType.INK,color,thickness:this.thickness,opacity:this.opacity,paths:_classPrivateFieldLooseBase(this,_serializePaths)[_serializePaths](this.scaleFactor/this.parentScale,this.translationX,this.translationY,height),pageIndex:this.pageIndex,rect,rotation:this.rotation};}}_InkEditor=InkEditor;function _updateThickness2(thickness){const savedThickness=this.thickness;this.addCommands({cmd:()=>{this.thickness=thickness;_classPrivateFieldLooseBase(this,_fitToContent)[_fitToContent]();},undo:()=>{this.thickness=savedThickness;_classPrivateFieldLooseBase(this,_fitToContent)[_fitToContent]();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_THICKNESS,overwriteIfSameType:true,keepUndo:true});}function _updateColor4(color){const savedColor=this.color;this.addCommands({cmd:()=>{this.color=color;_classPrivateFieldLooseBase(this,_redraw)[_redraw]();},undo:()=>{this.color=savedColor;_classPrivateFieldLooseBase(this,_redraw)[_redraw]();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_COLOR,overwriteIfSameType:true,keepUndo:true});}function _updateOpacity2(opacity){opacity/=100;const savedOpacity=this.opacity;this.addCommands({cmd:()=>{this.opacity=opacity;_classPrivateFieldLooseBase(this,_redraw)[_redraw]();},undo:()=>{this.opacity=savedOpacity;_classPrivateFieldLooseBase(this,_redraw)[_redraw]();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_OPACITY,overwriteIfSameType:true,keepUndo:true});}function _getInitialBBox2(){const{parentRotation,parentDimensions:[width,height]}=this;switch(parentRotation){case 90:return[0,height,height,width];case 180:return[width,height,width,height];case 270:return[width,0,height,width];default:return[0,0,width,height];}}function _setStroke2(){const{ctx,color,opacity,thickness,parentScale,scaleFactor}=this;ctx.lineWidth=thickness*parentScale/scaleFactor;ctx.lineCap="round";ctx.lineJoin="round";ctx.miterLimit=10;ctx.strokeStyle=`${color}${(0,_tools.opacityToHex)(opacity)}`;}function _startDrawing2(x,y){this.isEditing=true;if(!_classPrivateFieldLooseBase(this,_isCanvasInitialized)[_isCanvasInitialized]){_classPrivateFieldLooseBase(this,_isCanvasInitialized)[_isCanvasInitialized]=true;_classPrivateFieldLooseBase(this,_setCanvasDims)[_setCanvasDims]();this.thickness||=_InkEditor._defaultThickness;this.color||=_InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor;this.opacity??=_InkEditor._defaultOpacity;}this.currentPath.push([x,y]);_classPrivateFieldLooseBase(this,_lastPoint)[_lastPoint]=null;_classPrivateFieldLooseBase(this,_setStroke)[_setStroke]();this.ctx.beginPath();this.ctx.moveTo(x,y);_classPrivateFieldLooseBase(this,_requestFrameCallback)[_requestFrameCallback]=()=>{if(!_classPrivateFieldLooseBase(this,_requestFrameCallback)[_requestFrameCallback]){return;}if(_classPrivateFieldLooseBase(this,_lastPoint)[_lastPoint]){if(this.isEmpty()){this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);}else{_classPrivateFieldLooseBase(this,_redraw)[_redraw]();}this.ctx.lineTo(..._classPrivateFieldLooseBase(this,_lastPoint)[_lastPoint]);_classPrivateFieldLooseBase(this,_lastPoint)[_lastPoint]=null;this.ctx.stroke();}window.requestAnimationFrame(_classPrivateFieldLooseBase(this,_requestFrameCallback)[_requestFrameCallback]);};window.requestAnimationFrame(_classPrivateFieldLooseBase(this,_requestFrameCallback)[_requestFrameCallback]);}function _draw2(x,y){const[lastX,lastY]=this.currentPath.at(-1);if(x===lastX&&y===lastY){return;}this.currentPath.push([x,y]);_classPrivateFieldLooseBase(this,_lastPoint)[_lastPoint]=[x,y];}function _stopDrawing2(x,y){this.ctx.closePath();_classPrivateFieldLooseBase(this,_requestFrameCallback)[_requestFrameCallback]=null;x=Math.min(Math.max(x,0),this.canvas.width);y=Math.min(Math.max(y,0),this.canvas.height);const[lastX,lastY]=this.currentPath.at(-1);if(x!==lastX||y!==lastY){this.currentPath.push([x,y]);}let bezier;if(this.currentPath.length!==1){bezier=(0,_pdfjsFitCurve.fitCurve)(this.currentPath,30,null);}else{const xy=[x,y];bezier=[[xy,xy.slice(),xy.slice(),xy]];}const path2D=_classPrivateFieldLooseBase(_InkEditor,_buildPath2D)[_buildPath2D](bezier);this.currentPath.length=0;const cmd=()=>{this.paths.push(bezier);this.bezierPath2D.push(path2D);this.rebuild();};const undo=()=>{this.paths.pop();this.bezierPath2D.pop();if(this.paths.length===0){this.remove();}else{if(!this.canvas){_classPrivateFieldLooseBase(this,_createCanvas)[_createCanvas]();_classPrivateFieldLooseBase(this,_createObserver)[_createObserver]();}_classPrivateFieldLooseBase(this,_fitToContent)[_fitToContent]();}};this.addCommands({cmd,undo,mustExec:true});}function _redraw2(){if(this.isEmpty()){_classPrivateFieldLooseBase(this,_updateTransform)[_updateTransform]();return;}_classPrivateFieldLooseBase(this,_setStroke)[_setStroke]();const{canvas,ctx}=this;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);_classPrivateFieldLooseBase(this,_updateTransform)[_updateTransform]();for(const path of this.bezierPath2D){ctx.stroke(path);}}function _endDrawing2(event){_classPrivateFieldLooseBase(this,_stopDrawing)[_stopDrawing](event.offsetX,event.offsetY);this.canvas.removeEventListener("pointerleave",_classPrivateFieldLooseBase(this,_boundCanvasPointerleave)[_boundCanvasPointerleave]);this.canvas.removeEventListener("pointermove",_classPrivateFieldLooseBase(this,_boundCanvasPointermove)[_boundCanvasPointermove]);this.addToAnnotationStorage();}function _createCanvas2(){this.canvas=document.createElement("canvas");this.canvas.width=this.canvas.height=0;this.canvas.className="inkEditorCanvas";_InkEditor._l10nPromise.get("editor_ink_canvas_aria_label").then(msg=>this.canvas?.setAttribute("aria-label",msg));this.div.append(this.canvas);this.ctx=this.canvas.getContext("2d");}function _createObserver2(){_classPrivateFieldLooseBase(this,_observer)[_observer]=new ResizeObserver(entries=>{const rect=entries[0].contentRect;if(rect.width&&rect.height){this.setDimensions(rect.width,rect.height);}});_classPrivateFieldLooseBase(this,_observer)[_observer].observe(this.div);}function _setCanvasDims2(){if(!_classPrivateFieldLooseBase(this,_isCanvasInitialized)[_isCanvasInitialized]){return;}const[parentWidth,parentHeight]=this.parentDimensions;this.canvas.width=Math.ceil(this.width*parentWidth);this.canvas.height=Math.ceil(this.height*parentHeight);_classPrivateFieldLooseBase(this,_updateTransform)[_updateTransform]();}function _setScaleFactor2(width,height){const padding=_classPrivateFieldLooseBase(this,_getPadding)[_getPadding]();const scaleFactorW=(width-padding)/_classPrivateFieldLooseBase(this,_baseWidth)[_baseWidth];const scaleFactorH=(height-padding)/_classPrivateFieldLooseBase(this,_baseHeight)[_baseHeight];this.scaleFactor=Math.min(scaleFactorW,scaleFactorH);}function _updateTransform2(){const padding=_classPrivateFieldLooseBase(this,_getPadding)[_getPadding]()/2;this.ctx.setTransform(this.scaleFactor,0,0,this.scaleFactor,this.translationX*this.scaleFactor+padding,this.translationY*this.scaleFactor+padding);}function _buildPath2D2(bezier){const path2D=new Path2D();for(let i=0,ii=bezier.length;i<ii;i++){const[first,control1,control2,second]=bezier[i];if(i===0){path2D.moveTo(...first);}path2D.bezierCurveTo(control1[0],control1[1],control2[0],control2[1],second[0],second[1]);}return path2D;}function _serializePaths2(s,tx,ty,h){const NUMBER_OF_POINTS_ON_BEZIER_CURVE=4;const paths=[];const padding=this.thickness/2;let buffer,points;for(const bezier of this.paths){buffer=[];points=[];for(let i=0,ii=bezier.length;i<ii;i++){const[first,control1,control2,second]=bezier[i];const p10=s*(first[0]+tx)+padding;const p11=h-s*(first[1]+ty)-padding;const p20=s*(control1[0]+tx)+padding;const p21=h-s*(control1[1]+ty)-padding;const p30=s*(control2[0]+tx)+padding;const p31=h-s*(control2[1]+ty)-padding;const p40=s*(second[0]+tx)+padding;const p41=h-s*(second[1]+ty)-padding;if(i===0){buffer.push(p10,p11);points.push(p10,p11);}buffer.push(p20,p21,p30,p31,p40,p41);_classPrivateFieldLooseBase(this,_extractPointsOnBezier)[_extractPointsOnBezier](p10,p11,p20,p21,p30,p31,p40,p41,NUMBER_OF_POINTS_ON_BEZIER_CURVE,points);}paths.push({bezier:buffer,points});}return paths;}function _extractPointsOnBezier2(p10,p11,p20,p21,p30,p31,p40,p41,n,points){if(_classPrivateFieldLooseBase(this,_isAlmostFlat)[_isAlmostFlat](p10,p11,p20,p21,p30,p31,p40,p41)){points.push(p40,p41);return;}for(let i=1;i<n-1;i++){const t=i/n;const mt=1-t;let q10=t*p10+mt*p20;let q11=t*p11+mt*p21;let q20=t*p20+mt*p30;let q21=t*p21+mt*p31;const q30=t*p30+mt*p40;const q31=t*p31+mt*p41;q10=t*q10+mt*q20;q11=t*q11+mt*q21;q20=t*q20+mt*q30;q21=t*q21+mt*q31;q10=t*q10+mt*q20;q11=t*q11+mt*q21;points.push(q10,q11);}points.push(p40,p41);}function _isAlmostFlat2(p10,p11,p20,p21,p30,p31,p40,p41){const tol=10;const ax=(3*p20-2*p10-p40)**2;const ay=(3*p21-2*p11-p41)**2;const bx=(3*p30-p10-2*p40)**2;const by=(3*p31-p11-2*p41)**2;return Math.max(ax,bx)+Math.max(ay,by)<=tol;}function _getBbox2(){let xMin=Infinity;let xMax=-Infinity;let yMin=Infinity;let yMax=-Infinity;for(const path of this.paths){for(const[first,control1,control2,second]of path){const bbox=_util.Util.bezierBoundingBox(...first,...control1,...control2,...second);xMin=Math.min(xMin,bbox[0]);yMin=Math.min(yMin,bbox[1]);xMax=Math.max(xMax,bbox[2]);yMax=Math.max(yMax,bbox[3]);}}return[xMin,yMin,xMax,yMax];}function _getPadding2(){return _classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]?Math.ceil(this.thickness*this.parentScale):0;}function _fitToContent2(firstTime=false){if(this.isEmpty()){return;}if(!_classPrivateFieldLooseBase(this,_disableEditing)[_disableEditing]){_classPrivateFieldLooseBase(this,_redraw)[_redraw]();return;}const bbox=_classPrivateFieldLooseBase(this,_getBbox)[_getBbox]();const padding=_classPrivateFieldLooseBase(this,_getPadding)[_getPadding]();_classPrivateFieldLooseBase(this,_baseWidth)[_baseWidth]=Math.max(RESIZER_SIZE,bbox[2]-bbox[0]);_classPrivateFieldLooseBase(this,_baseHeight)[_baseHeight]=Math.max(RESIZER_SIZE,bbox[3]-bbox[1]);const width=Math.ceil(padding+_classPrivateFieldLooseBase(this,_baseWidth)[_baseWidth]*this.scaleFactor);const height=Math.ceil(padding+_classPrivateFieldLooseBase(this,_baseHeight)[_baseHeight]*this.scaleFactor);const[parentWidth,parentHeight]=this.parentDimensions;this.width=width/parentWidth;this.height=height/parentHeight;_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]=width/height;_classPrivateFieldLooseBase(this,_setMinDims)[_setMinDims]();const prevTranslationX=this.translationX;const prevTranslationY=this.translationY;this.translationX=-bbox[0];this.translationY=-bbox[1];_classPrivateFieldLooseBase(this,_setCanvasDims)[_setCanvasDims]();_classPrivateFieldLooseBase(this,_redraw)[_redraw]();_classPrivateFieldLooseBase(this,_realWidth)[_realWidth]=width;_classPrivateFieldLooseBase(this,_realHeight)[_realHeight]=height;this.setDims(width,height);const unscaledPadding=firstTime?padding/this.scaleFactor/2:0;this.translate(prevTranslationX-this.translationX-unscaledPadding,prevTranslationY-this.translationY-unscaledPadding);}function _setMinDims2(){const{style}=this.div;if(_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]>=1){style.minHeight=`${RESIZER_SIZE}px`;style.minWidth=`${Math.round(_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio]*RESIZER_SIZE)}px`;}else{style.minWidth=`${RESIZER_SIZE}px`;style.minHeight=`${Math.round(RESIZER_SIZE/_classPrivateFieldLooseBase(this,_aspectRatio)[_aspectRatio])}px`;}}Object.defineProperty(InkEditor,_buildPath2D,{value:_buildPath2D2});InkEditor._defaultColor=null;InkEditor._defaultOpacity=1;InkEditor._defaultThickness=1;InkEditor._l10nPromise=void 0;InkEditor._type="ink";exports.InkEditor=InkEditor;/***/}),(/* 30 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.fitCurve=void 0;const fitCurve=__w_pdfjs_require__(31);exports.fitCurve=fitCurve;/***/}),(/* 31 */ /***/module=>{function fitCurve(points,maxError,progressCallback){if(!Array.isArray(points)){throw new TypeError("First argument should be an array");}points.forEach(point=>{if(!Array.isArray(point)||point.some(item=>typeof item!=='number')||point.length!==points[0].length){throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.");}});points=points.filter((point,i)=>i===0||!point.every((val,j)=>val===points[i-1][j]));if(points.length<2){return[];}const len=points.length;const leftTangent=createTangent(points[1],points[0]);const rightTangent=createTangent(points[len-2],points[len-1]);return fitCubic(points,leftTangent,rightTangent,maxError,progressCallback);}function fitCubic(points,leftTangent,rightTangent,error,progressCallback){const MaxIterations=20;var bezCurve,u,uPrime,maxError,prevErr,splitPoint,prevSplit,centerVector,toCenterTangent,fromCenterTangent,beziers,dist,i;if(points.length===2){dist=maths.vectorLen(maths.subtract(points[0],points[1]))/3.0;bezCurve=[points[0],maths.addArrays(points[0],maths.mulItems(leftTangent,dist)),maths.addArrays(points[1],maths.mulItems(rightTangent,dist)),points[1]];return[bezCurve];}u=chordLengthParameterize(points);[bezCurve,maxError,splitPoint]=generateAndReport(points,u,u,leftTangent,rightTangent,progressCallback);if(maxError===0||maxError<error){return[bezCurve];}if(maxError<error*error){uPrime=u;prevErr=maxError;prevSplit=splitPoint;for(i=0;i<MaxIterations;i++){uPrime=reparameterize(bezCurve,points,uPrime);[bezCurve,maxError,splitPoint]=generateAndReport(points,u,uPrime,leftTangent,rightTangent,progressCallback);if(maxError<error){return[bezCurve];}else if(splitPoint===prevSplit){let errChange=maxError/prevErr;if(errChange>.9999&&errChange<1.0001){break;}}prevErr=maxError;prevSplit=splitPoint;}}beziers=[];centerVector=maths.subtract(points[splitPoint-1],points[splitPoint+1]);if(centerVector.every(val=>val===0)){centerVector=maths.subtract(points[splitPoint-1],points[splitPoint]);[centerVector[0],centerVector[1]]=[-centerVector[1],centerVector[0]];}toCenterTangent=maths.normalize(centerVector);fromCenterTangent=maths.mulItems(toCenterTangent,-1);beziers=beziers.concat(fitCubic(points.slice(0,splitPoint+1),leftTangent,toCenterTangent,error,progressCallback));beziers=beziers.concat(fitCubic(points.slice(splitPoint),fromCenterTangent,rightTangent,error,progressCallback));return beziers;};function generateAndReport(points,paramsOrig,paramsPrime,leftTangent,rightTangent,progressCallback){var bezCurve,maxError,splitPoint;bezCurve=generateBezier(points,paramsPrime,leftTangent,rightTangent,progressCallback);[maxError,splitPoint]=computeMaxError(points,bezCurve,paramsOrig);if(progressCallback){progressCallback({bez:bezCurve,points:points,params:paramsOrig,maxErr:maxError,maxPoint:splitPoint});}return[bezCurve,maxError,splitPoint];}function generateBezier(points,parameters,leftTangent,rightTangent){var bezCurve,A,a,C,X,det_C0_C1,det_C0_X,det_X_C1,alpha_l,alpha_r,epsilon,segLength,i,len,tmp,u,ux,firstPoint=points[0],lastPoint=points[points.length-1];bezCurve=[firstPoint,null,null,lastPoint];A=maths.zeros_Xx2x2(parameters.length);for(i=0,len=parameters.length;i<len;i++){u=parameters[i];ux=1-u;a=A[i];a[0]=maths.mulItems(leftTangent,3*u*(ux*ux));a[1]=maths.mulItems(rightTangent,3*ux*(u*u));}C=[[0,0],[0,0]];X=[0,0];for(i=0,len=points.length;i<len;i++){u=parameters[i];a=A[i];C[0][0]+=maths.dot(a[0],a[0]);C[0][1]+=maths.dot(a[0],a[1]);C[1][0]+=maths.dot(a[0],a[1]);C[1][1]+=maths.dot(a[1],a[1]);tmp=maths.subtract(points[i],bezier.q([firstPoint,firstPoint,lastPoint,lastPoint],u));X[0]+=maths.dot(a[0],tmp);X[1]+=maths.dot(a[1],tmp);}det_C0_C1=C[0][0]*C[1][1]-C[1][0]*C[0][1];det_C0_X=C[0][0]*X[1]-C[1][0]*X[0];det_X_C1=X[0]*C[1][1]-X[1]*C[0][1];alpha_l=det_C0_C1===0?0:det_X_C1/det_C0_C1;alpha_r=det_C0_C1===0?0:det_C0_X/det_C0_C1;segLength=maths.vectorLen(maths.subtract(firstPoint,lastPoint));epsilon=1.0e-6*segLength;if(alpha_l<epsilon||alpha_r<epsilon){bezCurve[1]=maths.addArrays(firstPoint,maths.mulItems(leftTangent,segLength/3.0));bezCurve[2]=maths.addArrays(lastPoint,maths.mulItems(rightTangent,segLength/3.0));}else{bezCurve[1]=maths.addArrays(firstPoint,maths.mulItems(leftTangent,alpha_l));bezCurve[2]=maths.addArrays(lastPoint,maths.mulItems(rightTangent,alpha_r));}return bezCurve;};function reparameterize(bezier,points,parameters){return parameters.map((p,i)=>newtonRaphsonRootFind(bezier,points[i],p));};function newtonRaphsonRootFind(bez,point,u){var d=maths.subtract(bezier.q(bez,u),point),qprime=bezier.qprime(bez,u),numerator=maths.mulMatrix(d,qprime),denominator=maths.sum(maths.squareItems(qprime))+2*maths.mulMatrix(d,bezier.qprimeprime(bez,u));if(denominator===0){return u;}else{return u-numerator/denominator;}};function chordLengthParameterize(points){var u=[],currU,prevU,prevP;points.forEach((p,i)=>{currU=i?prevU+maths.vectorLen(maths.subtract(p,prevP)):0;u.push(currU);prevU=currU;prevP=p;});u=u.map(x=>x/prevU);return u;};function computeMaxError(points,bez,parameters){var dist,maxDist,splitPoint,v,i,count,point,t;maxDist=0;splitPoint=Math.floor(points.length/2);const t_distMap=mapTtoRelativeDistances(bez,10);for(i=0,count=points.length;i<count;i++){point=points[i];t=find_t(bez,parameters[i],t_distMap,10);v=maths.subtract(bezier.q(bez,t),point);dist=v[0]*v[0]+v[1]*v[1];if(dist>maxDist){maxDist=dist;splitPoint=i;}}return[maxDist,splitPoint];};var mapTtoRelativeDistances=function(bez,B_parts){var B_t_curr;var B_t_dist=[0];var B_t_prev=bez[0];var sumLen=0;for(var i=1;i<=B_parts;i++){B_t_curr=bezier.q(bez,i/B_parts);sumLen+=maths.vectorLen(maths.subtract(B_t_curr,B_t_prev));B_t_dist.push(sumLen);B_t_prev=B_t_curr;}B_t_dist=B_t_dist.map(x=>x/sumLen);return B_t_dist;};function find_t(bez,param,t_distMap,B_parts){if(param<0){return 0;}if(param>1){return 1;}var lenMax,lenMin,tMax,tMin,t;for(var i=1;i<=B_parts;i++){if(param<=t_distMap[i]){tMin=(i-1)/B_parts;tMax=i/B_parts;lenMin=t_distMap[i-1];lenMax=t_distMap[i];t=(param-lenMin)/(lenMax-lenMin)*(tMax-tMin)+tMin;break;}}return t;}function createTangent(pointA,pointB){return maths.normalize(maths.subtract(pointA,pointB));}class maths{static zeros_Xx2x2(x){var zs=[];while(x--){zs.push([0,0]);}return zs;}static mulItems(items,multiplier){return items.map(x=>x*multiplier);}static mulMatrix(m1,m2){return m1.reduce((sum,x1,i)=>sum+x1*m2[i],0);}static subtract(arr1,arr2){return arr1.map((x1,i)=>x1-arr2[i]);}static addArrays(arr1,arr2){return arr1.map((x1,i)=>x1+arr2[i]);}static addItems(items,addition){return items.map(x=>x+addition);}static sum(items){return items.reduce((sum,x)=>sum+x);}static dot(m1,m2){return maths.mulMatrix(m1,m2);}static vectorLen(v){return Math.hypot(...v);}static divItems(items,divisor){return items.map(x=>x/divisor);}static squareItems(items){return items.map(x=>x*x);}static normalize(v){return this.divItems(v,this.vectorLen(v));}}class bezier{static q(ctrlPoly,t){var tx=1.0-t;var pA=maths.mulItems(ctrlPoly[0],tx*tx*tx),pB=maths.mulItems(ctrlPoly[1],3*tx*tx*t),pC=maths.mulItems(ctrlPoly[2],3*tx*t*t),pD=maths.mulItems(ctrlPoly[3],t*t*t);return maths.addArrays(maths.addArrays(pA,pB),maths.addArrays(pC,pD));}static qprime(ctrlPoly,t){var tx=1.0-t;var pA=maths.mulItems(maths.subtract(ctrlPoly[1],ctrlPoly[0]),3*tx*tx),pB=maths.mulItems(maths.subtract(ctrlPoly[2],ctrlPoly[1]),6*tx*t),pC=maths.mulItems(maths.subtract(ctrlPoly[3],ctrlPoly[2]),3*t*t);return maths.addArrays(maths.addArrays(pA,pB),pC);}static qprimeprime(ctrlPoly,t){return maths.addArrays(maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[2],maths.mulItems(ctrlPoly[1],2)),ctrlPoly[0]),6*(1.0-t)),maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[3],maths.mulItems(ctrlPoly[2],2)),ctrlPoly[1]),6*t));}}module.exports=fitCurve;module.exports.fitCubic=fitCubic;module.exports.createTangent=createTangent;/***/}),(/* 32 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationLayer=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);var _annotation_storage=__w_pdfjs_require__(3);var _scripting_utils=__w_pdfjs_require__(33);var _xfa_layer=__w_pdfjs_require__(34);const DEFAULT_TAB_INDEX=1000;const DEFAULT_FONT_SIZE=9;const GetElementsByNameSet=new WeakSet();function getRectDims(rect){return{width:rect[2]-rect[0],height:rect[3]-rect[1]};}class AnnotationElementFactory{static create(parameters){const subtype=parameters.data.annotationType;switch(subtype){case _util.AnnotationType.LINK:return new LinkAnnotationElement(parameters);case _util.AnnotationType.TEXT:return new TextAnnotationElement(parameters);case _util.AnnotationType.WIDGET:const fieldType=parameters.data.fieldType;switch(fieldType){case"Tx":return new TextWidgetAnnotationElement(parameters);case"Btn":if(parameters.data.radioButton){return new RadioButtonWidgetAnnotationElement(parameters);}else if(parameters.data.checkBox){return new CheckboxWidgetAnnotationElement(parameters);}return new PushButtonWidgetAnnotationElement(parameters);case"Ch":return new ChoiceWidgetAnnotationElement(parameters);}return new WidgetAnnotationElement(parameters);case _util.AnnotationType.POPUP:return new PopupAnnotationElement(parameters);case _util.AnnotationType.FREETEXT:return new FreeTextAnnotationElement(parameters);case _util.AnnotationType.LINE:return new LineAnnotationElement(parameters);case _util.AnnotationType.SQUARE:return new SquareAnnotationElement(parameters);case _util.AnnotationType.CIRCLE:return new CircleAnnotationElement(parameters);case _util.AnnotationType.POLYLINE:return new PolylineAnnotationElement(parameters);case _util.AnnotationType.CARET:return new CaretAnnotationElement(parameters);case _util.AnnotationType.INK:return new InkAnnotationElement(parameters);case _util.AnnotationType.POLYGON:return new PolygonAnnotationElement(parameters);case _util.AnnotationType.HIGHLIGHT:return new HighlightAnnotationElement(parameters);case _util.AnnotationType.UNDERLINE:return new UnderlineAnnotationElement(parameters);case _util.AnnotationType.SQUIGGLY:return new SquigglyAnnotationElement(parameters);case _util.AnnotationType.STRIKEOUT:return new StrikeOutAnnotationElement(parameters);case _util.AnnotationType.STAMP:return new StampAnnotationElement(parameters);case _util.AnnotationType.FILEATTACHMENT:return new FileAttachmentAnnotationElement(parameters);default:return new AnnotationElement(parameters);}}}class AnnotationElement{constructor(parameters,{isRenderable=false,ignoreBorder=false,createQuadrilaterals=false}={}){this.isRenderable=isRenderable;this.data=parameters.data;this.layer=parameters.layer;this.page=parameters.page;this.viewport=parameters.viewport;this.linkService=parameters.linkService;this.downloadManager=parameters.downloadManager;this.imageResourcesPath=parameters.imageResourcesPath;this.renderForms=parameters.renderForms;this.svgFactory=parameters.svgFactory;this.annotationStorage=parameters.annotationStorage;this.enableScripting=parameters.enableScripting;this.hasJSActions=parameters.hasJSActions;this._fieldObjects=parameters.fieldObjects;if(isRenderable){this.container=this._createContainer(ignoreBorder);}if(createQuadrilaterals){this.quadrilaterals=this._createQuadrilaterals(ignoreBorder);}}_createContainer(ignoreBorder=false){const{data,page,viewport}=this;const container=document.createElement("section");container.setAttribute("data-annotation-id",data.id);if(data.noRotate){container.classList.add("norotate");}const{pageWidth,pageHeight,pageX,pageY}=viewport.rawDims;const{width,height}=getRectDims(data.rect);const rect=_util.Util.normalizeRect([data.rect[0],page.view[3]-data.rect[1]+page.view[1],data.rect[2],page.view[3]-data.rect[3]+page.view[1]]);if(!ignoreBorder&&data.borderStyle.width>0){container.style.borderWidth=`${data.borderStyle.width}px`;const horizontalRadius=data.borderStyle.horizontalCornerRadius;const verticalRadius=data.borderStyle.verticalCornerRadius;if(horizontalRadius>0||verticalRadius>0){const radius=`calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;container.style.borderRadius=radius;}else if(this instanceof RadioButtonWidgetAnnotationElement){const radius=`calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;container.style.borderRadius=radius;}switch(data.borderStyle.style){case _util.AnnotationBorderStyleType.SOLID:container.style.borderStyle="solid";break;case _util.AnnotationBorderStyleType.DASHED:container.style.borderStyle="dashed";break;case _util.AnnotationBorderStyleType.BEVELED:(0,_util.warn)("Unimplemented border style: beveled");break;case _util.AnnotationBorderStyleType.INSET:(0,_util.warn)("Unimplemented border style: inset");break;case _util.AnnotationBorderStyleType.UNDERLINE:container.style.borderBottomStyle="solid";break;default:break;}const borderColor=data.borderColor||null;if(borderColor){container.style.borderColor=_util.Util.makeHexColor(borderColor[0]|0,borderColor[1]|0,borderColor[2]|0);}else{container.style.borderWidth=0;}}container.style.left=`${100*(rect[0]-pageX)/pageWidth}%`;container.style.top=`${100*(rect[1]-pageY)/pageHeight}%`;const{rotation}=data;if(data.hasOwnCanvas||rotation===0){container.style.width=`${100*width/pageWidth}%`;container.style.height=`${100*height/pageHeight}%`;}else{this.setRotation(rotation,container);}return container;}setRotation(angle,container=this.container){const{pageWidth,pageHeight}=this.viewport.rawDims;const{width,height}=getRectDims(this.data.rect);let elementWidth,elementHeight;if(angle%180===0){elementWidth=100*width/pageWidth;elementHeight=100*height/pageHeight;}else{elementWidth=100*height/pageWidth;elementHeight=100*width/pageHeight;}container.style.width=`${elementWidth}%`;container.style.height=`${elementHeight}%`;container.setAttribute("data-main-rotation",(360-angle)%360);}get _commonActions(){const setColor=(jsName,styleName,event)=>{const color=event.detail[jsName];event.target.style[styleName]=_scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));};return(0,_util.shadow)(this,"_commonActions",{display:event=>{const hidden=event.detail.display%2===1;this.container.style.visibility=hidden?"hidden":"visible";this.annotationStorage.setValue(this.data.id,{hidden,print:event.detail.display===0||event.detail.display===3});},print:event=>{this.annotationStorage.setValue(this.data.id,{print:event.detail.print});},hidden:event=>{this.container.style.visibility=event.detail.hidden?"hidden":"visible";this.annotationStorage.setValue(this.data.id,{hidden:event.detail.hidden});},focus:event=>{setTimeout(()=>event.target.focus({preventScroll:false}),0);},userName:event=>{event.target.title=event.detail.userName;},readonly:event=>{if(event.detail.readonly){event.target.setAttribute("readonly","");}else{event.target.removeAttribute("readonly");}},required:event=>{this._setRequired(event.target,event.detail.required);},bgColor:event=>{setColor("bgColor","backgroundColor",event);},fillColor:event=>{setColor("fillColor","backgroundColor",event);},fgColor:event=>{setColor("fgColor","color",event);},textColor:event=>{setColor("textColor","color",event);},borderColor:event=>{setColor("borderColor","borderColor",event);},strokeColor:event=>{setColor("strokeColor","borderColor",event);},rotation:event=>{const angle=event.detail.rotation;this.setRotation(angle);this.annotationStorage.setValue(this.data.id,{rotation:angle});}});}_dispatchEventFromSandbox(actions,jsEvent){const commonActions=this._commonActions;for(const name of Object.keys(jsEvent.detail)){const action=actions[name]||commonActions[name];action?.(jsEvent);}}_setDefaultPropertiesFromJS(element){if(!this.enableScripting){return;}const storedData=this.annotationStorage.getRawValue(this.data.id);if(!storedData){return;}const commonActions=this._commonActions;for(const[actionName,detail]of Object.entries(storedData)){const action=commonActions[actionName];if(action){const eventProxy={detail:{[actionName]:detail},target:element};action(eventProxy);delete storedData[actionName];}}}_createQuadrilaterals(ignoreBorder=false){if(!this.data.quadPoints){return null;}const quadrilaterals=[];const savedRect=this.data.rect;for(const quadPoint of this.data.quadPoints){this.data.rect=[quadPoint[2].x,quadPoint[2].y,quadPoint[1].x,quadPoint[1].y];quadrilaterals.push(this._createContainer(ignoreBorder));}this.data.rect=savedRect;return quadrilaterals;}_createPopup(trigger,data){let container=this.container;if(this.quadrilaterals){trigger||=this.quadrilaterals;container=this.quadrilaterals[0];}if(!trigger){trigger=document.createElement("div");trigger.classList.add("popupTriggerArea");container.append(trigger);}const popupElement=new PopupElement({container,trigger,color:data.color,titleObj:data.titleObj,modificationDate:data.modificationDate,contentsObj:data.contentsObj,richText:data.richText,hideWrapper:true});const popup=popupElement.render();popup.style.left="100%";container.append(popup);}_renderQuadrilaterals(className){for(const quadrilateral of this.quadrilaterals){quadrilateral.classList.add(className);}return this.quadrilaterals;}render(){(0,_util.unreachable)("Abstract method `AnnotationElement.render` called");}_getElementsByName(name,skipId=null){const fields=[];if(this._fieldObjects){const fieldObj=this._fieldObjects[name];if(fieldObj){for(const{page,id,exportValues}of fieldObj){if(page===-1){continue;}if(id===skipId){continue;}const exportValue=typeof exportValues==="string"?exportValues:null;const domElement=document.querySelector(`[data-element-id="${id}"]`);if(domElement&&!GetElementsByNameSet.has(domElement)){(0,_util.warn)(`_getElementsByName - element not allowed: ${id}`);continue;}fields.push({id,exportValue,domElement});}}return fields;}for(const domElement of document.getElementsByName(name)){const{exportValue}=domElement;const id=domElement.getAttribute("data-element-id");if(id===skipId){continue;}if(!GetElementsByNameSet.has(domElement)){continue;}fields.push({id,exportValue,domElement});}return fields;}}var _setInternalLink=/*#__PURE__*/_classPrivateFieldLooseKey("setInternalLink");var _bindSetOCGState=/*#__PURE__*/_classPrivateFieldLooseKey("bindSetOCGState");class LinkAnnotationElement extends AnnotationElement{constructor(parameters,options=null){super(parameters,{isRenderable:true,ignoreBorder:!!options?.ignoreBorder,createQuadrilaterals:true});Object.defineProperty(this,_bindSetOCGState,{value:_bindSetOCGState2});Object.defineProperty(this,_setInternalLink,{value:_setInternalLink2});this.isTooltipOnly=parameters.data.isTooltipOnly;}render(){const{data,linkService}=this;const link=document.createElement("a");link.setAttribute("data-element-id",data.id);let isBound=false;if(data.url){linkService.addLinkAttributes(link,data.url,data.newWindow);isBound=true;}else if(data.action){this._bindNamedAction(link,data.action);isBound=true;}else if(data.attachment){this._bindAttachment(link,data.attachment);isBound=true;}else if(data.setOCGState){_classPrivateFieldLooseBase(this,_bindSetOCGState)[_bindSetOCGState](link,data.setOCGState);isBound=true;}else if(data.dest){this._bindLink(link,data.dest);isBound=true;}else{if(data.actions&&(data.actions.Action||data.actions["Mouse Up"]||data.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions){this._bindJSAction(link,data);isBound=true;}if(data.resetForm){this._bindResetFormAction(link,data.resetForm);isBound=true;}else if(this.isTooltipOnly&&!isBound){this._bindLink(link,"");isBound=true;}}if(this.quadrilaterals){return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral,index)=>{const linkElement=index===0?link:link.cloneNode();quadrilateral.append(linkElement);return quadrilateral;});}this.container.classList.add("linkAnnotation");if(isBound){this.container.append(link);}return this.container;}_bindLink(link,destination){link.href=this.linkService.getDestinationHash(destination);link.onclick=()=>{if(destination){this.linkService.goToDestination(destination);}return false;};if(destination||destination===""){_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();}}_bindNamedAction(link,action){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.linkService.executeNamedAction(action);return false;};_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();}_bindAttachment(link,attachment){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.downloadManager?.openOrDownloadData(this.container,attachment.content,attachment.filename);return false;};_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();}_bindJSAction(link,data){link.href=this.linkService.getAnchorUrl("");const map=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]);for(const name of Object.keys(data.actions)){const jsName=map.get(name);if(!jsName){continue;}link[jsName]=()=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:data.id,name}});return false;};}if(!link.onclick){link.onclick=()=>false;}_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();}_bindResetFormAction(link,resetForm){const otherClickAction=link.onclick;if(!otherClickAction){link.href=this.linkService.getAnchorUrl("");}_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();if(!this._fieldObjects){(0,_util.warn)(`_bindResetFormAction - "resetForm" action not supported, `+"ensure that the `fieldObjects` parameter is provided.");if(!otherClickAction){link.onclick=()=>false;}return;}link.onclick=()=>{otherClickAction?.();const{fields:resetFormFields,refs:resetFormRefs,include}=resetForm;const allFields=[];if(resetFormFields.length!==0||resetFormRefs.length!==0){const fieldIds=new Set(resetFormRefs);for(const fieldName of resetFormFields){const fields=this._fieldObjects[fieldName]||[];for(const{id}of fields){fieldIds.add(id);}}for(const fields of Object.values(this._fieldObjects)){for(const field of fields){if(fieldIds.has(field.id)===include){allFields.push(field);}}}}else{for(const fields of Object.values(this._fieldObjects)){allFields.push(...fields);}}const storage=this.annotationStorage;const allIds=[];for(const field of allFields){const{id}=field;allIds.push(id);switch(field.type){case"text":{const value=field.defaultValue||"";storage.setValue(id,{value});break;}case"checkbox":case"radiobutton":{const value=field.defaultValue===field.exportValues;storage.setValue(id,{value});break;}case"combobox":case"listbox":{const value=field.defaultValue||"";storage.setValue(id,{value});break;}default:continue;}const domElement=document.querySelector(`[data-element-id="${id}"]`);if(!domElement){continue;}else if(!GetElementsByNameSet.has(domElement)){(0,_util.warn)(`_bindResetFormAction - element not allowed: ${id}`);continue;}domElement.dispatchEvent(new Event("resetform"));}if(this.enableScripting){this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:"app",ids:allIds,name:"ResetForm"}});}return false;};}}function _setInternalLink2(){this.container.setAttribute("data-internal-link","");}function _bindSetOCGState2(link,action){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.linkService.executeSetOCGState(action);return false;};_classPrivateFieldLooseBase(this,_setInternalLink)[_setInternalLink]();}class TextAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable});}render(){this.container.classList.add("textAnnotation");const image=document.createElement("img");image.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg";image.alt="[{{type}} Annotation]";image.dataset.l10nId="text_annotation_type";image.dataset.l10nArgs=JSON.stringify({type:this.data.name});if(!this.data.hasPopup){this._createPopup(image,this.data);}this.container.append(image);return this.container;}}class WidgetAnnotationElement extends AnnotationElement{render(){if(this.data.alternativeText){this.container.title=this.data.alternativeText;}return this.container;}showElementAndHideCanvas(element){if(this.data.hasOwnCanvas){if(element.previousSibling?.nodeName==="CANVAS"){element.previousSibling.hidden=true;}element.hidden=false;}}_getKeyModifier(event){const{isWin,isMac}=_util.FeatureTest.platform;return isWin&&event.ctrlKey||isMac&&event.metaKey;}_setEventListener(element,baseName,eventName,valueGetter){if(baseName.includes("mouse")){element.addEventListener(baseName,event=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:eventName,value:valueGetter(event),shift:event.shiftKey,modifier:this._getKeyModifier(event)}});});}else{element.addEventListener(baseName,event=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:eventName,value:valueGetter(event)}});});}}_setEventListeners(element,names,getter){for(const[baseName,eventName]of names){if(eventName==="Action"||this.data.actions?.[eventName]){this._setEventListener(element,baseName,eventName,getter);}}}_setBackgroundColor(element){const color=this.data.backgroundColor||null;element.style.backgroundColor=color===null?"transparent":_util.Util.makeHexColor(color[0],color[1],color[2]);}_setTextStyle(element){const TEXT_ALIGNMENT=["left","center","right"];const{fontColor}=this.data.defaultAppearanceData;const fontSize=this.data.defaultAppearanceData.fontSize||DEFAULT_FONT_SIZE;const style=element.style;let computedFontSize;const BORDER_SIZE=2;const roundToOneDecimal=x=>Math.round(10*x)/10;if(this.data.multiLine){const height=Math.abs(this.data.rect[3]-this.data.rect[1]-BORDER_SIZE);const numberOfLines=Math.round(height/(_util.LINE_FACTOR*fontSize))||1;const lineHeight=height/numberOfLines;computedFontSize=Math.min(fontSize,roundToOneDecimal(lineHeight/_util.LINE_FACTOR));}else{const height=Math.abs(this.data.rect[3]-this.data.rect[1]-BORDER_SIZE);computedFontSize=Math.min(fontSize,roundToOneDecimal(height/_util.LINE_FACTOR));}style.fontSize=`calc(${computedFontSize}px * var(--scale-factor))`;style.color=_util.Util.makeHexColor(fontColor[0],fontColor[1],fontColor[2]);if(this.data.textAlignment!==null){style.textAlign=TEXT_ALIGNMENT[this.data.textAlignment];}}_setRequired(element,isRequired){if(isRequired){element.setAttribute("required",true);}else{element.removeAttribute("required");}element.setAttribute("aria-required",isRequired);}}class TextWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){const isRenderable=parameters.renderForms||!parameters.data.hasAppearance&&!!parameters.data.fieldValue;super(parameters,{isRenderable});}setPropertyOnSiblings(base,key,value,keyInStorage){const storage=this.annotationStorage;for(const element of this._getElementsByName(base.name,base.id)){if(element.domElement){element.domElement[key]=value;}storage.setValue(element.id,{[keyInStorage]:value});}}render(){const storage=this.annotationStorage;const id=this.data.id;this.container.classList.add("textWidgetAnnotation");let element=null;if(this.renderForms){const storedData=storage.getValue(id,{value:this.data.fieldValue});let textContent=storedData.formattedValue||storedData.value||"";const maxLen=storage.getValue(id,{charLimit:this.data.maxLen}).charLimit;if(maxLen&&textContent.length>maxLen){textContent=textContent.slice(0,maxLen);}const elementData={userValue:textContent,formattedValue:null,lastCommittedValue:null,commitKey:1};if(this.data.multiLine){element=document.createElement("textarea");element.textContent=textContent;if(this.data.doNotScroll){element.style.overflowY="hidden";}}else{element=document.createElement("input");element.type="text";element.setAttribute("value",textContent);if(this.data.doNotScroll){element.style.overflowX="hidden";}}if(this.data.hasOwnCanvas){element.hidden=true;}GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=this.data.readOnly;element.name=this.data.fieldName;element.tabIndex=DEFAULT_TAB_INDEX;this._setRequired(element,this.data.required);if(maxLen){element.maxLength=maxLen;}element.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});this.setPropertyOnSiblings(element,"value",event.target.value,"value");});element.addEventListener("resetform",event=>{const defaultValue=this.data.defaultFieldValue??"";element.value=elementData.userValue=defaultValue;elementData.formattedValue=null;});let blurListener=event=>{const{formattedValue}=elementData;if(formattedValue!==null&&formattedValue!==undefined){event.target.value=formattedValue;}event.target.scrollLeft=0;};if(this.enableScripting&&this.hasJSActions){element.addEventListener("focus",event=>{const{target}=event;if(elementData.userValue){target.value=elementData.userValue;}elementData.lastCommittedValue=target.value;elementData.commitKey=1;});element.addEventListener("updatefromsandbox",jsEvent=>{this.showElementAndHideCanvas(jsEvent.target);const actions={value(event){elementData.userValue=event.detail.value??"";storage.setValue(id,{value:elementData.userValue.toString()});event.target.value=elementData.userValue;},formattedValue(event){const{formattedValue}=event.detail;elementData.formattedValue=formattedValue;if(formattedValue!==null&&formattedValue!==undefined&&event.target!==document.activeElement){event.target.value=formattedValue;}storage.setValue(id,{formattedValue});},selRange(event){event.target.setSelectionRange(...event.detail.selRange);},charLimit:event=>{const{charLimit}=event.detail;const{target}=event;if(charLimit===0){target.removeAttribute("maxLength");return;}target.setAttribute("maxLength",charLimit);let value=elementData.userValue;if(!value||value.length<=charLimit){return;}value=value.slice(0,charLimit);target.value=elementData.userValue=value;storage.setValue(id,{value});this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey:1,selStart:target.selectionStart,selEnd:target.selectionEnd}});}};this._dispatchEventFromSandbox(actions,jsEvent);});element.addEventListener("keydown",event=>{elementData.commitKey=1;let commitKey=-1;if(event.key==="Escape"){commitKey=0;}else if(event.key==="Enter"&&!this.data.multiLine){commitKey=2;}else if(event.key==="Tab"){elementData.commitKey=3;}if(commitKey===-1){return;}const{value}=event.target;if(elementData.lastCommittedValue===value){return;}elementData.lastCommittedValue=value;elementData.userValue=value;this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey,selStart:event.target.selectionStart,selEnd:event.target.selectionEnd}});});const _blurListener=blurListener;blurListener=null;element.addEventListener("blur",event=>{if(!event.relatedTarget){return;}const{value}=event.target;elementData.userValue=value;if(elementData.lastCommittedValue!==value){this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey:elementData.commitKey,selStart:event.target.selectionStart,selEnd:event.target.selectionEnd}});}_blurListener(event);});if(this.data.actions?.Keystroke){element.addEventListener("beforeinput",event=>{elementData.lastCommittedValue=null;const{data,target}=event;const{value,selectionStart,selectionEnd}=target;let selStart=selectionStart,selEnd=selectionEnd;switch(event.inputType){case"deleteWordBackward":{const match=value.substring(0,selectionStart).match(/\w*[^\w]*$/);if(match){selStart-=match[0].length;}break;}case"deleteWordForward":{const match=value.substring(selectionStart).match(/^[^\w]*\w*/);if(match){selEnd+=match[0].length;}break;}case"deleteContentBackward":if(selectionStart===selectionEnd){selStart-=1;}break;case"deleteContentForward":if(selectionStart===selectionEnd){selEnd+=1;}break;}event.preventDefault();this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,change:data||"",willCommit:false,selStart,selEnd}});});}this._setEventListeners(element,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.value);}if(blurListener){element.addEventListener("blur",blurListener);}if(this.data.comb){const fieldWidth=this.data.rect[2]-this.data.rect[0];const combWidth=fieldWidth/maxLen;element.classList.add("comb");element.style.letterSpacing=`calc(${combWidth}px * var(--scale-factor) - 1ch)`;}}else{element=document.createElement("div");element.textContent=this.data.fieldValue;element.style.verticalAlign="middle";element.style.display="table-cell";}this._setTextStyle(element);this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){const storage=this.annotationStorage;const data=this.data;const id=data.id;let value=storage.getValue(id,{value:data.exportValue===data.fieldValue}).value;if(typeof value==="string"){value=value!=="Off";storage.setValue(id,{value});}this.container.classList.add("buttonWidgetAnnotation","checkBox");const element=document.createElement("input");GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=data.readOnly;this._setRequired(element,this.data.required);element.type="checkbox";element.name=data.fieldName;if(value){element.setAttribute("checked",true);}element.setAttribute("exportValue",data.exportValue);element.tabIndex=DEFAULT_TAB_INDEX;element.addEventListener("change",event=>{const{name,checked}=event.target;for(const checkbox of this._getElementsByName(name,id)){const curChecked=checked&&checkbox.exportValue===data.exportValue;if(checkbox.domElement){checkbox.domElement.checked=curChecked;}storage.setValue(checkbox.id,{value:curChecked});}storage.setValue(id,{value:checked});});element.addEventListener("resetform",event=>{const defaultValue=data.defaultFieldValue||"Off";event.target.checked=defaultValue===data.exportValue;});if(this.enableScripting&&this.hasJSActions){element.addEventListener("updatefromsandbox",jsEvent=>{const actions={value(event){event.target.checked=event.detail.value!=="Off";storage.setValue(id,{value:event.target.checked});}};this._dispatchEventFromSandbox(actions,jsEvent);});this._setEventListeners(element,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.checked);}this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){this.container.classList.add("buttonWidgetAnnotation","radioButton");const storage=this.annotationStorage;const data=this.data;const id=data.id;let value=storage.getValue(id,{value:data.fieldValue===data.buttonValue}).value;if(typeof value==="string"){value=value!==data.buttonValue;storage.setValue(id,{value});}const element=document.createElement("input");GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=data.readOnly;this._setRequired(element,this.data.required);element.type="radio";element.name=data.fieldName;if(value){element.setAttribute("checked",true);}element.tabIndex=DEFAULT_TAB_INDEX;element.addEventListener("change",event=>{const{name,checked}=event.target;for(const radio of this._getElementsByName(name,id)){storage.setValue(radio.id,{value:false});}storage.setValue(id,{value:checked});});element.addEventListener("resetform",event=>{const defaultValue=data.defaultFieldValue;event.target.checked=defaultValue!==null&&defaultValue!==undefined&&defaultValue===data.buttonValue;});if(this.enableScripting&&this.hasJSActions){const pdfButtonValue=data.buttonValue;element.addEventListener("updatefromsandbox",jsEvent=>{const actions={value:event=>{const checked=pdfButtonValue===event.detail.value;for(const radio of this._getElementsByName(event.target.name)){const curChecked=checked&&radio.id===id;if(radio.domElement){radio.domElement.checked=curChecked;}storage.setValue(radio.id,{value:curChecked});}}};this._dispatchEventFromSandbox(actions,jsEvent);});this._setEventListeners(element,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.checked);}this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class PushButtonWidgetAnnotationElement extends LinkAnnotationElement{constructor(parameters){super(parameters,{ignoreBorder:parameters.data.hasAppearance});}render(){const container=super.render();container.classList.add("buttonWidgetAnnotation","pushButton");if(this.data.alternativeText){container.title=this.data.alternativeText;}const linkElement=container.lastChild;if(this.enableScripting&&this.hasJSActions&&linkElement){this._setDefaultPropertiesFromJS(linkElement);linkElement.addEventListener("updatefromsandbox",jsEvent=>{this._dispatchEventFromSandbox({},jsEvent);});}return container;}}class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){this.container.classList.add("choiceWidgetAnnotation");const storage=this.annotationStorage;const id=this.data.id;const storedData=storage.getValue(id,{value:this.data.fieldValue});const selectElement=document.createElement("select");GetElementsByNameSet.add(selectElement);selectElement.setAttribute("data-element-id",id);selectElement.disabled=this.data.readOnly;this._setRequired(selectElement,this.data.required);selectElement.name=this.data.fieldName;selectElement.tabIndex=DEFAULT_TAB_INDEX;let addAnEmptyEntry=this.data.combo&&this.data.options.length>0;if(!this.data.combo){selectElement.size=this.data.options.length;if(this.data.multiSelect){selectElement.multiple=true;}}selectElement.addEventListener("resetform",event=>{const defaultValue=this.data.defaultFieldValue;for(const option of selectElement.options){option.selected=option.value===defaultValue;}});for(const option of this.data.options){const optionElement=document.createElement("option");optionElement.textContent=option.displayValue;optionElement.value=option.exportValue;if(storedData.value.includes(option.exportValue)){optionElement.setAttribute("selected",true);addAnEmptyEntry=false;}selectElement.append(optionElement);}let removeEmptyEntry=null;if(addAnEmptyEntry){const noneOptionElement=document.createElement("option");noneOptionElement.value=" ";noneOptionElement.setAttribute("hidden",true);noneOptionElement.setAttribute("selected",true);selectElement.prepend(noneOptionElement);removeEmptyEntry=()=>{noneOptionElement.remove();selectElement.removeEventListener("input",removeEmptyEntry);removeEmptyEntry=null;};selectElement.addEventListener("input",removeEmptyEntry);}const getValue=isExport=>{const name=isExport?"value":"textContent";const{options,multiple}=selectElement;if(!multiple){return options.selectedIndex===-1?null:options[options.selectedIndex][name];}return Array.prototype.filter.call(options,option=>option.selected).map(option=>option[name]);};let selectedValues=getValue(false);const getItems=event=>{const options=event.target.options;return Array.prototype.map.call(options,option=>{return{displayValue:option.textContent,exportValue:option.value};});};if(this.enableScripting&&this.hasJSActions){selectElement.addEventListener("updatefromsandbox",jsEvent=>{const actions={value(event){removeEmptyEntry?.();const value=event.detail.value;const values=new Set(Array.isArray(value)?value:[value]);for(const option of selectElement.options){option.selected=values.has(option.value);}storage.setValue(id,{value:getValue(true)});selectedValues=getValue(false);},multipleSelection(event){selectElement.multiple=true;},remove(event){const options=selectElement.options;const index=event.detail.remove;options[index].selected=false;selectElement.remove(index);if(options.length>0){const i=Array.prototype.findIndex.call(options,option=>option.selected);if(i===-1){options[0].selected=true;}}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},clear(event){while(selectElement.length!==0){selectElement.remove(0);}storage.setValue(id,{value:null,items:[]});selectedValues=getValue(false);},insert(event){const{index,displayValue,exportValue}=event.detail.insert;const selectChild=selectElement.children[index];const optionElement=document.createElement("option");optionElement.textContent=displayValue;optionElement.value=exportValue;if(selectChild){selectChild.before(optionElement);}else{selectElement.append(optionElement);}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},items(event){const{items}=event.detail;while(selectElement.length!==0){selectElement.remove(0);}for(const item of items){const{displayValue,exportValue}=item;const optionElement=document.createElement("option");optionElement.textContent=displayValue;optionElement.value=exportValue;selectElement.append(optionElement);}if(selectElement.options.length>0){selectElement.options[0].selected=true;}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},indices(event){const indices=new Set(event.detail.indices);for(const option of event.target.options){option.selected=indices.has(option.index);}storage.setValue(id,{value:getValue(true)});selectedValues=getValue(false);},editable(event){event.target.disabled=!event.detail.editable;}};this._dispatchEventFromSandbox(actions,jsEvent);});selectElement.addEventListener("input",event=>{const exportValue=getValue(true);storage.setValue(id,{value:exportValue});event.preventDefault();this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value:selectedValues,changeEx:exportValue,willCommit:false,commitKey:1,keyDown:false}});});this._setEventListeners(selectElement,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"],["input","Validate"]],event=>event.target.value);}else{selectElement.addEventListener("input",function(event){storage.setValue(id,{value:getValue(true)});});}if(this.data.combo){this._setTextStyle(selectElement);}else{}this._setBackgroundColor(selectElement);this._setDefaultPropertiesFromJS(selectElement);this.container.append(selectElement);return this.container;}}class PopupAnnotationElement extends AnnotationElement{constructor(parameters){const{data}=parameters;const isRenderable=!PopupAnnotationElement.IGNORE_TYPES.has(data.parentType)&&!!(data.titleObj?.str||data.contentsObj?.str||data.richText?.str);super(parameters,{isRenderable});}render(){this.container.classList.add("popupAnnotation");const parentElements=this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);if(parentElements.length===0){return this.container;}const popup=new PopupElement({container:this.container,trigger:Array.from(parentElements),color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate,contentsObj:this.data.contentsObj,richText:this.data.richText});const page=this.page;const rect=_util.Util.normalizeRect([this.data.parentRect[0],page.view[3]-this.data.parentRect[1]+page.view[1],this.data.parentRect[2],page.view[3]-this.data.parentRect[3]+page.view[1]]);const popupLeft=rect[0]+this.data.parentRect[2]-this.data.parentRect[0];const popupTop=rect[1];const{pageWidth,pageHeight,pageX,pageY}=this.viewport.rawDims;this.container.style.left=`${100*(popupLeft-pageX)/pageWidth}%`;this.container.style.top=`${100*(popupTop-pageY)/pageHeight}%`;this.container.append(popup.render());return this.container;}}PopupAnnotationElement.IGNORE_TYPES=new Set(["Line","Square","Circle","PolyLine","Polygon","Ink"]);class PopupElement{constructor(parameters){this.container=parameters.container;this.trigger=parameters.trigger;this.color=parameters.color;this.titleObj=parameters.titleObj;this.modificationDate=parameters.modificationDate;this.contentsObj=parameters.contentsObj;this.richText=parameters.richText;this.hideWrapper=parameters.hideWrapper||false;this.pinned=false;}render(){const BACKGROUND_ENLIGHT=0.7;const wrapper=document.createElement("div");wrapper.classList.add("popupWrapper");this.hideElement=this.hideWrapper?wrapper:this.container;this.hideElement.hidden=true;const popup=document.createElement("div");popup.classList.add("popup");const color=this.color;if(color){const r=BACKGROUND_ENLIGHT*(255-color[0])+color[0];const g=BACKGROUND_ENLIGHT*(255-color[1])+color[1];const b=BACKGROUND_ENLIGHT*(255-color[2])+color[2];popup.style.backgroundColor=_util.Util.makeHexColor(r|0,g|0,b|0);}const title=document.createElement("h1");title.dir=this.titleObj.dir;title.textContent=this.titleObj.str;popup.append(title);const dateObject=_display_utils.PDFDateString.toDateObject(this.modificationDate);if(dateObject){const modificationDate=document.createElement("span");modificationDate.classList.add("popupDate");modificationDate.textContent="{{date}}, {{time}}";modificationDate.dataset.l10nId="annotation_date_string";modificationDate.dataset.l10nArgs=JSON.stringify({date:dateObject.toLocaleDateString(),time:dateObject.toLocaleTimeString()});popup.append(modificationDate);}if(this.richText?.str&&(!this.contentsObj?.str||this.contentsObj.str===this.richText.str)){_xfa_layer.XfaLayer.render({xfaHtml:this.richText.html,intent:"richText",div:popup});popup.lastChild.classList.add("richText","popupContent");}else{const contents=this._formatContents(this.contentsObj);popup.append(contents);}if(!Array.isArray(this.trigger)){this.trigger=[this.trigger];}for(const element of this.trigger){element.addEventListener("click",this._toggle.bind(this));element.addEventListener("mouseover",this._show.bind(this,false));element.addEventListener("mouseout",this._hide.bind(this,false));}popup.addEventListener("click",this._hide.bind(this,true));wrapper.append(popup);return wrapper;}_formatContents({str,dir}){const p=document.createElement("p");p.classList.add("popupContent");p.dir=dir;const lines=str.split(/(?:\r\n?|\n)/);for(let i=0,ii=lines.length;i<ii;++i){const line=lines[i];p.append(document.createTextNode(line));if(i<ii-1){p.append(document.createElement("br"));}}return p;}_toggle(){if(this.pinned){this._hide(true);}else{this._show(true);}}_show(pin=false){if(pin){this.pinned=true;}if(this.hideElement.hidden){this.hideElement.hidden=false;this.container.style.zIndex=parseInt(this.container.style.zIndex)+1000;}}_hide(unpin=true){if(unpin){this.pinned=false;}if(!this.hideElement.hidden&&!this.pinned){this.hideElement.hidden=true;this.container.style.zIndex=parseInt(this.container.style.zIndex)-1000;}}}class FreeTextAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.textContent=parameters.data.textContent;}render(){this.container.classList.add("freeTextAnnotation");if(this.textContent){const content=document.createElement("div");content.classList.add("annotationTextContent");content.setAttribute("role","comment");for(const line of this.textContent){const lineSpan=document.createElement("span");lineSpan.textContent=line;content.append(lineSpan);}this.container.append(content);}if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class LineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.classList.add("lineAnnotation");const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const line=this.svgFactory.createElement("svg:line");line.setAttribute("x1",data.rect[2]-data.lineCoordinates[0]);line.setAttribute("y1",data.rect[3]-data.lineCoordinates[1]);line.setAttribute("x2",data.rect[2]-data.lineCoordinates[2]);line.setAttribute("y2",data.rect[3]-data.lineCoordinates[3]);line.setAttribute("stroke-width",data.borderStyle.width||1);line.setAttribute("stroke","transparent");line.setAttribute("fill","transparent");svg.append(line);this.container.append(svg);this._createPopup(line,data);return this.container;}}class SquareAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.classList.add("squareAnnotation");const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const borderWidth=data.borderStyle.width;const square=this.svgFactory.createElement("svg:rect");square.setAttribute("x",borderWidth/2);square.setAttribute("y",borderWidth/2);square.setAttribute("width",width-borderWidth);square.setAttribute("height",height-borderWidth);square.setAttribute("stroke-width",borderWidth||1);square.setAttribute("stroke","transparent");square.setAttribute("fill","transparent");svg.append(square);this.container.append(svg);this._createPopup(square,data);return this.container;}}class CircleAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.classList.add("circleAnnotation");const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const borderWidth=data.borderStyle.width;const circle=this.svgFactory.createElement("svg:ellipse");circle.setAttribute("cx",width/2);circle.setAttribute("cy",height/2);circle.setAttribute("rx",width/2-borderWidth/2);circle.setAttribute("ry",height/2-borderWidth/2);circle.setAttribute("stroke-width",borderWidth||1);circle.setAttribute("stroke","transparent");circle.setAttribute("fill","transparent");svg.append(circle);this.container.append(svg);this._createPopup(circle,data);return this.container;}}class PolylineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.containerClassName="polylineAnnotation";this.svgElementName="svg:polyline";}render(){this.container.classList.add(this.containerClassName);const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);let points=[];for(const coordinate of data.vertices){const x=coordinate.x-data.rect[0];const y=data.rect[3]-coordinate.y;points.push(x+","+y);}points=points.join(" ");const polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute("points",points);polyline.setAttribute("stroke-width",data.borderStyle.width||1);polyline.setAttribute("stroke","transparent");polyline.setAttribute("fill","transparent");svg.append(polyline);this.container.append(svg);this._createPopup(polyline,data);return this.container;}}class PolygonAnnotationElement extends PolylineAnnotationElement{constructor(parameters){super(parameters);this.containerClassName="polygonAnnotation";this.svgElementName="svg:polygon";}}class CaretAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.classList.add("caretAnnotation");if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class InkAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.containerClassName="inkAnnotation";this.svgElementName="svg:polyline";}render(){this.container.classList.add(this.containerClassName);const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);for(const inkList of data.inkLists){let points=[];for(const coordinate of inkList){const x=coordinate.x-data.rect[0];const y=data.rect[3]-coordinate.y;points.push(`${x},${y}`);}points=points.join(" ");const polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute("points",points);polyline.setAttribute("stroke-width",data.borderStyle.width||1);polyline.setAttribute("stroke","transparent");polyline.setAttribute("fill","transparent");this._createPopup(polyline,data);svg.append(polyline);}this.container.append(svg);return this.container;}}class HighlightAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("highlightAnnotation");}this.container.classList.add("highlightAnnotation");return this.container;}}class UnderlineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("underlineAnnotation");}this.container.classList.add("underlineAnnotation");return this.container;}}class SquigglyAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("squigglyAnnotation");}this.container.classList.add("squigglyAnnotation");return this.container;}}class StrikeOutAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("strikeoutAnnotation");}this.container.classList.add("strikeoutAnnotation");return this.container;}}class StampAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.classList.add("stampAnnotation");if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class FileAttachmentAnnotationElement extends AnnotationElement{constructor(parameters){super(parameters,{isRenderable:true});const{filename,content}=this.data.file;this.filename=(0,_display_utils.getFilenameFromUrl)(filename,true);this.content=content;this.linkService.eventBus?.dispatch("fileattachmentannotation",{source:this,filename,content});}render(){this.container.classList.add("fileAttachmentAnnotation");let trigger;if(this.data.hasAppearance){trigger=document.createElement("div");}else{trigger=document.createElement("img");trigger.src=`${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name)?"paperclip":"pushpin"}.svg`;}trigger.classList.add("popupTriggerArea");trigger.addEventListener("dblclick",this._download.bind(this));if(!this.data.hasPopup&&(this.data.titleObj?.str||this.data.contentsObj?.str||this.data.richText)){this._createPopup(trigger,this.data);}this.container.append(trigger);return this.container;}_download(){this.downloadManager?.openOrDownloadData(this.container,this.content,this.filename);}}var _appendElement=/*#__PURE__*/_classPrivateFieldLooseKey("appendElement");var _setAnnotationCanvasMap=/*#__PURE__*/_classPrivateFieldLooseKey("setAnnotationCanvasMap");class AnnotationLayer{static render(params){const{annotations,div,viewport,accessibilityManager}=params;(0,_display_utils.setLayerDimensions)(div,viewport);const elementParams={data:null,layer:div,page:params.page,viewport,linkService:params.linkService,downloadManager:params.downloadManager,imageResourcesPath:params.imageResourcesPath||"",renderForms:params.renderForms!==false,svgFactory:new _display_utils.DOMSVGFactory(),annotationStorage:params.annotationStorage||new _annotation_storage.AnnotationStorage(),enableScripting:params.enableScripting===true,hasJSActions:params.hasJSActions,fieldObjects:params.fieldObjects};let zIndex=0;for(const data of annotations){if(data.noHTML){continue;}if(data.annotationType!==_util.AnnotationType.POPUP){const{width,height}=getRectDims(data.rect);if(width<=0||height<=0){continue;}}elementParams.data=data;const element=AnnotationElementFactory.create(elementParams);if(!element.isRenderable){continue;}const rendered=element.render();if(data.hidden){rendered.style.visibility="hidden";}if(Array.isArray(rendered)){for(const renderedElement of rendered){renderedElement.style.zIndex=zIndex++;_classPrivateFieldLooseBase(AnnotationLayer,_appendElement)[_appendElement](renderedElement,data.id,div,accessibilityManager);}}else{rendered.style.zIndex=zIndex++;if(element instanceof PopupAnnotationElement){div.prepend(rendered);}else{_classPrivateFieldLooseBase(AnnotationLayer,_appendElement)[_appendElement](rendered,data.id,div,accessibilityManager);}}}_classPrivateFieldLooseBase(this,_setAnnotationCanvasMap)[_setAnnotationCanvasMap](div,params.annotationCanvasMap);}static update(params){const{annotationCanvasMap,div,viewport}=params;(0,_display_utils.setLayerDimensions)(div,{rotation:viewport.rotation});_classPrivateFieldLooseBase(this,_setAnnotationCanvasMap)[_setAnnotationCanvasMap](div,annotationCanvasMap);div.hidden=false;}}function _appendElement2(element,id,div,accessibilityManager){const contentElement=element.firstChild||element;contentElement.id=`${_display_utils.AnnotationPrefix}${id}`;div.append(element);accessibilityManager?.moveElementInDOM(div,element,contentElement,false);}function _setAnnotationCanvasMap2(div,annotationCanvasMap){if(!annotationCanvasMap){return;}for(const[id,canvas]of annotationCanvasMap){const element=div.querySelector(`[data-annotation-id="${id}"]`);if(!element){continue;}const{firstChild}=element;if(!firstChild){element.append(canvas);}else if(firstChild.nodeName==="CANVAS"){firstChild.replaceWith(canvas);}else{firstChild.before(canvas);}}annotationCanvasMap.clear();}Object.defineProperty(AnnotationLayer,_setAnnotationCanvasMap,{value:_setAnnotationCanvasMap2});Object.defineProperty(AnnotationLayer,_appendElement,{value:_appendElement2});exports.AnnotationLayer=AnnotationLayer;/***/}),(/* 33 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.ColorConverters=void 0;function makeColorComp(n){return Math.floor(Math.max(0,Math.min(1,n))*255).toString(16).padStart(2,"0");}class ColorConverters{static CMYK_G([c,y,m,k]){return["G",1-Math.min(1,0.3*c+0.59*m+0.11*y+k)];}static G_CMYK([g]){return["CMYK",0,0,0,1-g];}static G_RGB([g]){return["RGB",g,g,g];}static G_HTML([g]){const G=makeColorComp(g);return`#${G}${G}${G}`;}static RGB_G([r,g,b]){return["G",0.3*r+0.59*g+0.11*b];}static RGB_HTML([r,g,b]){const R=makeColorComp(r);const G=makeColorComp(g);const B=makeColorComp(b);return`#${R}${G}${B}`;}static T_HTML(){return"#00000000";}static CMYK_RGB([c,y,m,k]){return["RGB",1-Math.min(1,c+k),1-Math.min(1,m+k),1-Math.min(1,y+k)];}static CMYK_HTML(components){const rgb=this.CMYK_RGB(components).slice(1);return this.RGB_HTML(rgb);}static RGB_CMYK([r,g,b]){const c=1-r;const m=1-g;const y=1-b;const k=Math.min(c,m,y);return["CMYK",c,m,y,k];}}exports.ColorConverters=ColorConverters;/***/}),(/* 34 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.XfaLayer=void 0;var _xfa_text=__w_pdfjs_require__(19);class XfaLayer{static setupStorage(html,id,element,storage,intent){const storedData=storage.getValue(id,{value:null});switch(element.name){case"textarea":if(storedData.value!==null){html.textContent=storedData.value;}if(intent==="print"){break;}html.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});});break;case"input":if(element.attributes.type==="radio"||element.attributes.type==="checkbox"){if(storedData.value===element.attributes.xfaOn){html.setAttribute("checked",true);}else if(storedData.value===element.attributes.xfaOff){html.removeAttribute("checked");}if(intent==="print"){break;}html.addEventListener("change",event=>{storage.setValue(id,{value:event.target.checked?event.target.getAttribute("xfaOn"):event.target.getAttribute("xfaOff")});});}else{if(storedData.value!==null){html.setAttribute("value",storedData.value);}if(intent==="print"){break;}html.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});});}break;case"select":if(storedData.value!==null){for(const option of element.children){if(option.attributes.value===storedData.value){option.attributes.selected=true;}}}html.addEventListener("input",event=>{const options=event.target.options;const value=options.selectedIndex===-1?"":options[options.selectedIndex].value;storage.setValue(id,{value});});break;}}static setAttributes({html,element,storage=null,intent,linkService}){const{attributes}=element;const isHTMLAnchorElement=html instanceof HTMLAnchorElement;if(attributes.type==="radio"){attributes.name=`${attributes.name}-${intent}`;}for(const[key,value]of Object.entries(attributes)){if(value===null||value===undefined){continue;}switch(key){case"class":if(value.length){html.setAttribute(key,value.join(" "));}break;case"dataId":break;case"id":html.setAttribute("data-element-id",value);break;case"style":Object.assign(html.style,value);break;case"textContent":html.textContent=value;break;default:if(!isHTMLAnchorElement||key!=="href"&&key!=="newWindow"){html.setAttribute(key,value);}}}if(isHTMLAnchorElement){linkService.addLinkAttributes(html,attributes.href,attributes.newWindow);}if(storage&&attributes.dataId){this.setupStorage(html,attributes.dataId,element,storage);}}static render(parameters){const storage=parameters.annotationStorage;const linkService=parameters.linkService;const root=parameters.xfaHtml;const intent=parameters.intent||"display";const rootHtml=document.createElement(root.name);if(root.attributes){this.setAttributes({html:rootHtml,element:root,intent,linkService});}const stack=[[root,-1,rootHtml]];const rootDiv=parameters.div;rootDiv.append(rootHtml);if(parameters.viewport){const transform=`matrix(${parameters.viewport.transform.join(",")})`;rootDiv.style.transform=transform;}if(intent!=="richText"){rootDiv.setAttribute("class","xfaLayer xfaFont");}const textDivs=[];while(stack.length>0){const[parent,i,html]=stack.at(-1);if(i+1===parent.children.length){stack.pop();continue;}const child=parent.children[++stack.at(-1)[1]];if(child===null){continue;}const{name}=child;if(name==="#text"){const node=document.createTextNode(child.value);textDivs.push(node);html.append(node);continue;}let childHtml;if(child?.attributes?.xmlns){childHtml=document.createElementNS(child.attributes.xmlns,name);}else{childHtml=document.createElement(name);}html.append(childHtml);if(child.attributes){this.setAttributes({html:childHtml,element:child,storage,intent,linkService});}if(child.children&&child.children.length>0){stack.push([child,-1,childHtml]);}else if(child.value){const node=document.createTextNode(child.value);if(_xfa_text.XfaText.shouldBuildText(name)){textDivs.push(node);}childHtml.append(node);}}for(const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")){el.setAttribute("readOnly",true);}return{textDivs};}static update(parameters){const transform=`matrix(${parameters.viewport.transform.join(",")})`;parameters.div.style.transform=transform;parameters.div.hidden=false;}}exports.XfaLayer=XfaLayer;/***/}),(/* 35 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.SVGGraphics=void 0;var _display_utils=__w_pdfjs_require__(6);var _util=__w_pdfjs_require__(1);var _is_node=__w_pdfjs_require__(10);let SVGGraphics=class{constructor(){(0,_util.unreachable)("Not implemented: SVGGraphics");}};exports.SVGGraphics=SVGGraphics;{const SVG_DEFAULTS={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"};const XML_NS="http://www.w3.org/XML/1998/namespace";const XLINK_NS="http://www.w3.org/1999/xlink";const LINE_CAP_STYLES=["butt","round","square"];const LINE_JOIN_STYLES=["miter","round","bevel"];const createObjectURL=function(data,contentType="",forceDataSchema=false){if(URL.createObjectURL&&typeof Blob!=="undefined"&&!forceDataSchema){return URL.createObjectURL(new Blob([data],{type:contentType}));}const digits="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let buffer=`data:${contentType};base64,`;for(let i=0,ii=data.length;i<ii;i+=3){const b1=data[i]&0xff;const b2=data[i+1]&0xff;const b3=data[i+2]&0xff;const d1=b1>>2,d2=(b1&3)<<4|b2>>4;const d3=i+1<ii?(b2&0xf)<<2|b3>>6:64;const d4=i+2<ii?b3&0x3f:64;buffer+=digits[d1]+digits[d2]+digits[d3]+digits[d4];}return buffer;};const convertImgDataToPng=function(){const PNG_HEADER=new Uint8Array([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);const CHUNK_WRAPPER_SIZE=12;const crcTable=new Int32Array(256);for(let i=0;i<256;i++){let c=i;for(let h=0;h<8;h++){if(c&1){c=0xedb88320^c>>1&0x7fffffff;}else{c=c>>1&0x7fffffff;}}crcTable[i]=c;}function crc32(data,start,end){let crc=-1;for(let i=start;i<end;i++){const a=(crc^data[i])&0xff;const b=crcTable[a];crc=crc>>>8^b;}return crc^-1;}function writePngChunk(type,body,data,offset){let p=offset;const len=body.length;data[p]=len>>24&0xff;data[p+1]=len>>16&0xff;data[p+2]=len>>8&0xff;data[p+3]=len&0xff;p+=4;data[p]=type.charCodeAt(0)&0xff;data[p+1]=type.charCodeAt(1)&0xff;data[p+2]=type.charCodeAt(2)&0xff;data[p+3]=type.charCodeAt(3)&0xff;p+=4;data.set(body,p);p+=body.length;const crc=crc32(data,offset+4,p);data[p]=crc>>24&0xff;data[p+1]=crc>>16&0xff;data[p+2]=crc>>8&0xff;data[p+3]=crc&0xff;}function adler32(data,start,end){let a=1;let b=0;for(let i=start;i<end;++i){a=(a+(data[i]&0xff))%65521;b=(b+a)%65521;}return b<<16|a;}function deflateSync(literals){if(!_is_node.isNodeJS){return deflateSyncUncompressed(literals);}try{let input;if(parseInt(process.versions.node)>=8){input=literals;}else{input=Buffer.from(literals);}const output=(__webpack_require__(5168).deflateSync)(input,{level:9});return output instanceof Uint8Array?output:new Uint8Array(output);}catch(e){(0,_util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e);}return deflateSyncUncompressed(literals);}function deflateSyncUncompressed(literals){let len=literals.length;const maxBlockLength=0xffff;const deflateBlocks=Math.ceil(len/maxBlockLength);const idat=new Uint8Array(2+len+deflateBlocks*5+4);let pi=0;idat[pi++]=0x78;idat[pi++]=0x9c;let pos=0;while(len>maxBlockLength){idat[pi++]=0x00;idat[pi++]=0xff;idat[pi++]=0xff;idat[pi++]=0x00;idat[pi++]=0x00;idat.set(literals.subarray(pos,pos+maxBlockLength),pi);pi+=maxBlockLength;pos+=maxBlockLength;len-=maxBlockLength;}idat[pi++]=0x01;idat[pi++]=len&0xff;idat[pi++]=len>>8&0xff;idat[pi++]=~len&0xffff&0xff;idat[pi++]=(~len&0xffff)>>8&0xff;idat.set(literals.subarray(pos),pi);pi+=literals.length-pos;const adler=adler32(literals,0,literals.length);idat[pi++]=adler>>24&0xff;idat[pi++]=adler>>16&0xff;idat[pi++]=adler>>8&0xff;idat[pi++]=adler&0xff;return idat;}function encode(imgData,kind,forceDataSchema,isMask){const width=imgData.width;const height=imgData.height;let bitDepth,colorType,lineSize;const bytes=imgData.data;switch(kind){case _util.ImageKind.GRAYSCALE_1BPP:colorType=0;bitDepth=1;lineSize=width+7>>3;break;case _util.ImageKind.RGB_24BPP:colorType=2;bitDepth=8;lineSize=width*3;break;case _util.ImageKind.RGBA_32BPP:colorType=6;bitDepth=8;lineSize=width*4;break;default:throw new Error("invalid format");}const literals=new Uint8Array((1+lineSize)*height);let offsetLiterals=0,offsetBytes=0;for(let y=0;y<height;++y){literals[offsetLiterals++]=0;literals.set(bytes.subarray(offsetBytes,offsetBytes+lineSize),offsetLiterals);offsetBytes+=lineSize;offsetLiterals+=lineSize;}if(kind===_util.ImageKind.GRAYSCALE_1BPP&&isMask){offsetLiterals=0;for(let y=0;y<height;y++){offsetLiterals++;for(let i=0;i<lineSize;i++){literals[offsetLiterals++]^=0xff;}}}const ihdr=new Uint8Array([width>>24&0xff,width>>16&0xff,width>>8&0xff,width&0xff,height>>24&0xff,height>>16&0xff,height>>8&0xff,height&0xff,bitDepth,colorType,0x00,0x00,0x00]);const idat=deflateSync(literals);const pngLength=PNG_HEADER.length+CHUNK_WRAPPER_SIZE*3+ihdr.length+idat.length;const data=new Uint8Array(pngLength);let offset=0;data.set(PNG_HEADER,offset);offset+=PNG_HEADER.length;writePngChunk("IHDR",ihdr,data,offset);offset+=CHUNK_WRAPPER_SIZE+ihdr.length;writePngChunk("IDATA",idat,data,offset);offset+=CHUNK_WRAPPER_SIZE+idat.length;writePngChunk("IEND",new Uint8Array(0),data,offset);return createObjectURL(data,"image/png",forceDataSchema);}return function convertImgDataToPng(imgData,forceDataSchema,isMask){const kind=imgData.kind===undefined?_util.ImageKind.GRAYSCALE_1BPP:imgData.kind;return encode(imgData,kind,forceDataSchema,isMask);};}();class SVGExtraState{constructor(){this.fontSizeScale=1;this.fontWeight=SVG_DEFAULTS.fontWeight;this.fontSize=0;this.textMatrix=_util.IDENTITY_MATRIX;this.fontMatrix=_util.FONT_IDENTITY_MATRIX;this.leading=0;this.textRenderingMode=_util.TextRenderingMode.FILL;this.textMatrixScale=1;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRise=0;this.fillColor=SVG_DEFAULTS.fillColor;this.strokeColor="#000000";this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.lineJoin="";this.lineCap="";this.miterLimit=0;this.dashArray=[];this.dashPhase=0;this.dependencies=[];this.activeClipUrl=null;this.clipGroup=null;this.maskId="";}clone(){return Object.create(this);}setCurrentPoint(x,y){this.x=x;this.y=y;}}function opListToTree(opList){let opTree=[];const tmp=[];for(const opListElement of opList){if(opListElement.fn==="save"){opTree.push({fnId:92,fn:"group",items:[]});tmp.push(opTree);opTree=opTree.at(-1).items;continue;}if(opListElement.fn==="restore"){opTree=tmp.pop();}else{opTree.push(opListElement);}}return opTree;}function pf(value){if(Number.isInteger(value)){return value.toString();}const s=value.toFixed(10);let i=s.length-1;if(s[i]!=="0"){return s;}do{i--;}while(s[i]==="0");return s.substring(0,s[i]==="."?i:i+1);}function pm(m){if(m[4]===0&&m[5]===0){if(m[1]===0&&m[2]===0){if(m[0]===1&&m[3]===1){return"";}return`scale(${pf(m[0])} ${pf(m[3])})`;}if(m[0]===m[3]&&m[1]===-m[2]){const a=Math.acos(m[0])*180/Math.PI;return`rotate(${pf(a)})`;}}else{if(m[0]===1&&m[1]===0&&m[2]===0&&m[3]===1){return`translate(${pf(m[4])} ${pf(m[5])})`;}}return`matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} `+`${pf(m[5])})`;}let clipCount=0;let maskCount=0;let shadingCount=0;exports.SVGGraphics=SVGGraphics=class{constructor(commonObjs,objs,forceDataSchema=false){(0,_display_utils.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future.");this.svgFactory=new _display_utils.DOMSVGFactory();this.current=new SVGExtraState();this.transformMatrix=_util.IDENTITY_MATRIX;this.transformStack=[];this.extraStack=[];this.commonObjs=commonObjs;this.objs=objs;this.pendingClip=null;this.pendingEOFill=false;this.embedFonts=false;this.embeddedFonts=Object.create(null);this.cssStyle=null;this.forceDataSchema=!!forceDataSchema;this._operatorIdMapping=[];for(const op in _util.OPS){this._operatorIdMapping[_util.OPS[op]]=op;}}getObject(data,fallback=null){if(typeof data==="string"){return data.startsWith("g_")?this.commonObjs.get(data):this.objs.get(data);}return fallback;}save(){this.transformStack.push(this.transformMatrix);const old=this.current;this.extraStack.push(old);this.current=old.clone();}restore(){this.transformMatrix=this.transformStack.pop();this.current=this.extraStack.pop();this.pendingClip=null;this.tgrp=null;}group(items){this.save();this.executeOpTree(items);this.restore();}loadDependencies(operatorList){const fnArray=operatorList.fnArray;const argsArray=operatorList.argsArray;for(let i=0,ii=fnArray.length;i<ii;i++){if(fnArray[i]!==_util.OPS.dependency){continue;}for(const obj of argsArray[i]){const objsPool=obj.startsWith("g_")?this.commonObjs:this.objs;const promise=new Promise(resolve=>{objsPool.get(obj,resolve);});this.current.dependencies.push(promise);}}return Promise.all(this.current.dependencies);}transform(a,b,c,d,e,f){const transformMatrix=[a,b,c,d,e,f];this.transformMatrix=_util.Util.transform(this.transformMatrix,transformMatrix);this.tgrp=null;}getSVG(operatorList,viewport){this.viewport=viewport;const svgElement=this._initialize(viewport);return this.loadDependencies(operatorList).then(()=>{this.transformMatrix=_util.IDENTITY_MATRIX;this.executeOpTree(this.convertOpList(operatorList));return svgElement;});}convertOpList(operatorList){const operatorIdMapping=this._operatorIdMapping;const argsArray=operatorList.argsArray;const fnArray=operatorList.fnArray;const opList=[];for(let i=0,ii=fnArray.length;i<ii;i++){const fnId=fnArray[i];opList.push({fnId,fn:operatorIdMapping[fnId],args:argsArray[i]});}return opListToTree(opList);}executeOpTree(opTree){for(const opTreeElement of opTree){const fn=opTreeElement.fn;const fnId=opTreeElement.fnId;const args=opTreeElement.args;switch(fnId|0){case _util.OPS.beginText:this.beginText();break;case _util.OPS.dependency:break;case _util.OPS.setLeading:this.setLeading(args);break;case _util.OPS.setLeadingMoveText:this.setLeadingMoveText(args[0],args[1]);break;case _util.OPS.setFont:this.setFont(args);break;case _util.OPS.showText:this.showText(args[0]);break;case _util.OPS.showSpacedText:this.showText(args[0]);break;case _util.OPS.endText:this.endText();break;case _util.OPS.moveText:this.moveText(args[0],args[1]);break;case _util.OPS.setCharSpacing:this.setCharSpacing(args[0]);break;case _util.OPS.setWordSpacing:this.setWordSpacing(args[0]);break;case _util.OPS.setHScale:this.setHScale(args[0]);break;case _util.OPS.setTextMatrix:this.setTextMatrix(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.setTextRise:this.setTextRise(args[0]);break;case _util.OPS.setTextRenderingMode:this.setTextRenderingMode(args[0]);break;case _util.OPS.setLineWidth:this.setLineWidth(args[0]);break;case _util.OPS.setLineJoin:this.setLineJoin(args[0]);break;case _util.OPS.setLineCap:this.setLineCap(args[0]);break;case _util.OPS.setMiterLimit:this.setMiterLimit(args[0]);break;case _util.OPS.setFillRGBColor:this.setFillRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeRGBColor:this.setStrokeRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeColorN:this.setStrokeColorN(args);break;case _util.OPS.setFillColorN:this.setFillColorN(args);break;case _util.OPS.shadingFill:this.shadingFill(args[0]);break;case _util.OPS.setDash:this.setDash(args[0],args[1]);break;case _util.OPS.setRenderingIntent:this.setRenderingIntent(args[0]);break;case _util.OPS.setFlatness:this.setFlatness(args[0]);break;case _util.OPS.setGState:this.setGState(args[0]);break;case _util.OPS.fill:this.fill();break;case _util.OPS.eoFill:this.eoFill();break;case _util.OPS.stroke:this.stroke();break;case _util.OPS.fillStroke:this.fillStroke();break;case _util.OPS.eoFillStroke:this.eoFillStroke();break;case _util.OPS.clip:this.clip("nonzero");break;case _util.OPS.eoClip:this.clip("evenodd");break;case _util.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case _util.OPS.paintImageXObject:this.paintImageXObject(args[0]);break;case _util.OPS.paintInlineImageXObject:this.paintInlineImageXObject(args[0]);break;case _util.OPS.paintImageMaskXObject:this.paintImageMaskXObject(args[0]);break;case _util.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(args[0],args[1]);break;case _util.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case _util.OPS.closePath:this.closePath();break;case _util.OPS.closeStroke:this.closeStroke();break;case _util.OPS.closeFillStroke:this.closeFillStroke();break;case _util.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case _util.OPS.nextLine:this.nextLine();break;case _util.OPS.transform:this.transform(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.constructPath:this.constructPath(args[0],args[1]);break;case _util.OPS.endPath:this.endPath();break;case 92:this.group(opTreeElement.items);break;default:(0,_util.warn)(`Unimplemented operator ${fn}`);break;}}}setWordSpacing(wordSpacing){this.current.wordSpacing=wordSpacing;}setCharSpacing(charSpacing){this.current.charSpacing=charSpacing;}nextLine(){this.moveText(0,this.current.leading);}setTextMatrix(a,b,c,d,e,f){const current=this.current;current.textMatrix=current.lineMatrix=[a,b,c,d,e,f];current.textMatrixScale=Math.hypot(a,b);current.x=current.lineX=0;current.y=current.lineY=0;current.xcoords=[];current.ycoords=[];current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);current.tspan.setAttributeNS(null,"y",pf(-current.y));current.txtElement=this.svgFactory.createElement("svg:text");current.txtElement.append(current.tspan);}beginText(){const current=this.current;current.x=current.lineX=0;current.y=current.lineY=0;current.textMatrix=_util.IDENTITY_MATRIX;current.lineMatrix=_util.IDENTITY_MATRIX;current.textMatrixScale=1;current.tspan=this.svgFactory.createElement("svg:tspan");current.txtElement=this.svgFactory.createElement("svg:text");current.txtgrp=this.svgFactory.createElement("svg:g");current.xcoords=[];current.ycoords=[];}moveText(x,y){const current=this.current;current.x=current.lineX+=x;current.y=current.lineY+=y;current.xcoords=[];current.ycoords=[];current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);current.tspan.setAttributeNS(null,"y",pf(-current.y));}showText(glyphs){const current=this.current;const font=current.font;const fontSize=current.fontSize;if(fontSize===0){return;}const fontSizeScale=current.fontSizeScale;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const fontDirection=current.fontDirection;const textHScale=current.textHScale*fontDirection;const vertical=font.vertical;const spacingDir=vertical?1:-1;const defaultVMetrics=font.defaultVMetrics;const widthAdvanceScale=fontSize*current.fontMatrix[0];let x=0;for(const glyph of glyphs){if(glyph===null){x+=fontDirection*wordSpacing;continue;}else if(typeof glyph==="number"){x+=spacingDir*glyph*fontSize/1000;continue;}const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const character=glyph.fontChar;let scaledX,scaledY;let width=glyph.width;if(vertical){let vx;const vmetric=glyph.vmetric||defaultVMetrics;vx=glyph.vmetric?vmetric[1]:width*0.5;vx=-vx*widthAdvanceScale;const vy=vmetric[2]*widthAdvanceScale;width=vmetric?-vmetric[0]:width;scaledX=vx/fontSizeScale;scaledY=(x+vy)/fontSizeScale;}else{scaledX=x/fontSizeScale;scaledY=0;}if(glyph.isInFont||font.missingFile){current.xcoords.push(current.x+scaledX);if(vertical){current.ycoords.push(-current.y+scaledY);}current.tspan.textContent+=character;}else{}let charWidth;if(vertical){charWidth=width*widthAdvanceScale-spacing*fontDirection;}else{charWidth=width*widthAdvanceScale+spacing*fontDirection;}x+=charWidth;}current.tspan.setAttributeNS(null,"x",current.xcoords.map(pf).join(" "));if(vertical){current.tspan.setAttributeNS(null,"y",current.ycoords.map(pf).join(" "));}else{current.tspan.setAttributeNS(null,"y",pf(-current.y));}if(vertical){current.y-=x;}else{current.x+=x*textHScale;}current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);if(current.fontStyle!==SVG_DEFAULTS.fontStyle){current.tspan.setAttributeNS(null,"font-style",current.fontStyle);}if(current.fontWeight!==SVG_DEFAULTS.fontWeight){current.tspan.setAttributeNS(null,"font-weight",current.fontWeight);}const fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){if(current.fillColor!==SVG_DEFAULTS.fillColor){current.tspan.setAttributeNS(null,"fill",current.fillColor);}if(current.fillAlpha<1){current.tspan.setAttributeNS(null,"fill-opacity",current.fillAlpha);}}else if(current.textRenderingMode===_util.TextRenderingMode.ADD_TO_PATH){current.tspan.setAttributeNS(null,"fill","transparent");}else{current.tspan.setAttributeNS(null,"fill","none");}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){const lineWidthScale=1/(current.textMatrixScale||1);this._setStrokeAttributes(current.tspan,lineWidthScale);}let textMatrix=current.textMatrix;if(current.textRise!==0){textMatrix=textMatrix.slice();textMatrix[5]+=current.textRise;}current.txtElement.setAttributeNS(null,"transform",`${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);current.txtElement.setAttributeNS(XML_NS,"xml:space","preserve");current.txtElement.append(current.tspan);current.txtgrp.append(current.txtElement);this._ensureTransformGroup().append(current.txtElement);}setLeadingMoveText(x,y){this.setLeading(-y);this.moveText(x,y);}addFontStyle(fontObj){if(!fontObj.data){throw new Error("addFontStyle: No font data available, "+'ensure that the "fontExtraProperties" API parameter is set.');}if(!this.cssStyle){this.cssStyle=this.svgFactory.createElement("svg:style");this.cssStyle.setAttributeNS(null,"type","text/css");this.defs.append(this.cssStyle);}const url=createObjectURL(fontObj.data,fontObj.mimetype,this.forceDataSchema);this.cssStyle.textContent+=`@font-face { font-family: "${fontObj.loadedName}";`+` src: url(${url}); }\n`;}setFont(details){const current=this.current;const fontObj=this.commonObjs.get(details[0]);let size=details[1];current.font=fontObj;if(this.embedFonts&&!fontObj.missingFile&&!this.embeddedFonts[fontObj.loadedName]){this.addFontStyle(fontObj);this.embeddedFonts[fontObj.loadedName]=fontObj;}current.fontMatrix=fontObj.fontMatrix||_util.FONT_IDENTITY_MATRIX;let bold="normal";if(fontObj.black){bold="900";}else if(fontObj.bold){bold="bold";}const italic=fontObj.italic?"italic":"normal";if(size<0){size=-size;current.fontDirection=-1;}else{current.fontDirection=1;}current.fontSize=size;current.fontFamily=fontObj.loadedName;current.fontWeight=bold;current.fontStyle=italic;current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"y",pf(-current.y));current.xcoords=[];current.ycoords=[];}endText(){const current=this.current;if(current.textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG&&current.txtElement?.hasChildNodes()){current.element=current.txtElement;this.clip("nonzero");this.endPath();}}setLineWidth(width){if(width>0){this.current.lineWidth=width;}}setLineCap(style){this.current.lineCap=LINE_CAP_STYLES[style];}setLineJoin(style){this.current.lineJoin=LINE_JOIN_STYLES[style];}setMiterLimit(limit){this.current.miterLimit=limit;}setStrokeAlpha(strokeAlpha){this.current.strokeAlpha=strokeAlpha;}setStrokeRGBColor(r,g,b){this.current.strokeColor=_util.Util.makeHexColor(r,g,b);}setFillAlpha(fillAlpha){this.current.fillAlpha=fillAlpha;}setFillRGBColor(r,g,b){this.current.fillColor=_util.Util.makeHexColor(r,g,b);this.current.tspan=this.svgFactory.createElement("svg:tspan");this.current.xcoords=[];this.current.ycoords=[];}setStrokeColorN(args){this.current.strokeColor=this._makeColorN_Pattern(args);}setFillColorN(args){this.current.fillColor=this._makeColorN_Pattern(args);}shadingFill(args){const width=this.viewport.width;const height=this.viewport.height;const inv=_util.Util.inverseTransform(this.transformMatrix);const bl=_util.Util.applyTransform([0,0],inv);const br=_util.Util.applyTransform([0,height],inv);const ul=_util.Util.applyTransform([width,0],inv);const ur=_util.Util.applyTransform([width,height],inv);const x0=Math.min(bl[0],br[0],ul[0],ur[0]);const y0=Math.min(bl[1],br[1],ul[1],ur[1]);const x1=Math.max(bl[0],br[0],ul[0],ur[0]);const y1=Math.max(bl[1],br[1],ul[1],ur[1]);const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x",x0);rect.setAttributeNS(null,"y",y0);rect.setAttributeNS(null,"width",x1-x0);rect.setAttributeNS(null,"height",y1-y0);rect.setAttributeNS(null,"fill",this._makeShadingPattern(args));if(this.current.fillAlpha<1){rect.setAttributeNS(null,"fill-opacity",this.current.fillAlpha);}this._ensureTransformGroup().append(rect);}_makeColorN_Pattern(args){if(args[0]==="TilingPattern"){return this._makeTilingPattern(args);}return this._makeShadingPattern(args);}_makeTilingPattern(args){const color=args[1];const operatorList=args[2];const matrix=args[3]||_util.IDENTITY_MATRIX;const[x0,y0,x1,y1]=args[4];const xstep=args[5];const ystep=args[6];const paintType=args[7];const tilingId=`shading${shadingCount++}`;const[tx0,ty0,tx1,ty1]=_util.Util.normalizeRect([..._util.Util.applyTransform([x0,y0],matrix),..._util.Util.applyTransform([x1,y1],matrix)]);const[xscale,yscale]=_util.Util.singularValueDecompose2dScale(matrix);const txstep=xstep*xscale;const tystep=ystep*yscale;const tiling=this.svgFactory.createElement("svg:pattern");tiling.setAttributeNS(null,"id",tilingId);tiling.setAttributeNS(null,"patternUnits","userSpaceOnUse");tiling.setAttributeNS(null,"width",txstep);tiling.setAttributeNS(null,"height",tystep);tiling.setAttributeNS(null,"x",`${tx0}`);tiling.setAttributeNS(null,"y",`${ty0}`);const svg=this.svg;const transformMatrix=this.transformMatrix;const fillColor=this.current.fillColor;const strokeColor=this.current.strokeColor;const bbox=this.svgFactory.create(tx1-tx0,ty1-ty0);this.svg=bbox;this.transformMatrix=matrix;if(paintType===2){const cssColor=_util.Util.makeHexColor(...color);this.current.fillColor=cssColor;this.current.strokeColor=cssColor;}this.executeOpTree(this.convertOpList(operatorList));this.svg=svg;this.transformMatrix=transformMatrix;this.current.fillColor=fillColor;this.current.strokeColor=strokeColor;tiling.append(bbox.childNodes[0]);this.defs.append(tiling);return`url(#${tilingId})`;}_makeShadingPattern(args){if(typeof args==="string"){args=this.objs.get(args);}switch(args[0]){case"RadialAxial":const shadingId=`shading${shadingCount++}`;const colorStops=args[3];let gradient;switch(args[1]){case"axial":const point0=args[4];const point1=args[5];gradient=this.svgFactory.createElement("svg:linearGradient");gradient.setAttributeNS(null,"id",shadingId);gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");gradient.setAttributeNS(null,"x1",point0[0]);gradient.setAttributeNS(null,"y1",point0[1]);gradient.setAttributeNS(null,"x2",point1[0]);gradient.setAttributeNS(null,"y2",point1[1]);break;case"radial":const focalPoint=args[4];const circlePoint=args[5];const focalRadius=args[6];const circleRadius=args[7];gradient=this.svgFactory.createElement("svg:radialGradient");gradient.setAttributeNS(null,"id",shadingId);gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");gradient.setAttributeNS(null,"cx",circlePoint[0]);gradient.setAttributeNS(null,"cy",circlePoint[1]);gradient.setAttributeNS(null,"r",circleRadius);gradient.setAttributeNS(null,"fx",focalPoint[0]);gradient.setAttributeNS(null,"fy",focalPoint[1]);gradient.setAttributeNS(null,"fr",focalRadius);break;default:throw new Error(`Unknown RadialAxial type: ${args[1]}`);}for(const colorStop of colorStops){const stop=this.svgFactory.createElement("svg:stop");stop.setAttributeNS(null,"offset",colorStop[0]);stop.setAttributeNS(null,"stop-color",colorStop[1]);gradient.append(stop);}this.defs.append(gradient);return`url(#${shadingId})`;case"Mesh":(0,_util.warn)("Unimplemented pattern Mesh");return null;case"Dummy":return"hotpink";default:throw new Error(`Unknown IR type: ${args[0]}`);}}setDash(dashArray,dashPhase){this.current.dashArray=dashArray;this.current.dashPhase=dashPhase;}constructPath(ops,args){const current=this.current;let x=current.x,y=current.y;let d=[];let j=0;for(const op of ops){switch(op|0){case _util.OPS.rectangle:x=args[j++];y=args[j++];const width=args[j++];const height=args[j++];const xw=x+width;const yh=y+height;d.push("M",pf(x),pf(y),"L",pf(xw),pf(y),"L",pf(xw),pf(yh),"L",pf(x),pf(yh),"Z");break;case _util.OPS.moveTo:x=args[j++];y=args[j++];d.push("M",pf(x),pf(y));break;case _util.OPS.lineTo:x=args[j++];y=args[j++];d.push("L",pf(x),pf(y));break;case _util.OPS.curveTo:x=args[j+4];y=args[j+5];d.push("C",pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]),pf(x),pf(y));j+=6;break;case _util.OPS.curveTo2:d.push("C",pf(x),pf(y),pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]));x=args[j+2];y=args[j+3];j+=4;break;case _util.OPS.curveTo3:x=args[j+2];y=args[j+3];d.push("C",pf(args[j]),pf(args[j+1]),pf(x),pf(y),pf(x),pf(y));j+=4;break;case _util.OPS.closePath:d.push("Z");break;}}d=d.join(" ");if(current.path&&ops.length>0&&ops[0]!==_util.OPS.rectangle&&ops[0]!==_util.OPS.moveTo){d=current.path.getAttributeNS(null,"d")+d;}else{current.path=this.svgFactory.createElement("svg:path");this._ensureTransformGroup().append(current.path);}current.path.setAttributeNS(null,"d",d);current.path.setAttributeNS(null,"fill","none");current.element=current.path;current.setCurrentPoint(x,y);}endPath(){const current=this.current;current.path=null;if(!this.pendingClip){return;}if(!current.element){this.pendingClip=null;return;}const clipId=`clippath${clipCount++}`;const clipPath=this.svgFactory.createElement("svg:clipPath");clipPath.setAttributeNS(null,"id",clipId);clipPath.setAttributeNS(null,"transform",pm(this.transformMatrix));const clipElement=current.element.cloneNode(true);if(this.pendingClip==="evenodd"){clipElement.setAttributeNS(null,"clip-rule","evenodd");}else{clipElement.setAttributeNS(null,"clip-rule","nonzero");}this.pendingClip=null;clipPath.append(clipElement);this.defs.append(clipPath);if(current.activeClipUrl){current.clipGroup=null;for(const prev of this.extraStack){prev.clipGroup=null;}clipPath.setAttributeNS(null,"clip-path",current.activeClipUrl);}current.activeClipUrl=`url(#${clipId})`;this.tgrp=null;}clip(type){this.pendingClip=type;}closePath(){const current=this.current;if(current.path){const d=`${current.path.getAttributeNS(null,"d")}Z`;current.path.setAttributeNS(null,"d",d);}}setLeading(leading){this.current.leading=-leading;}setTextRise(textRise){this.current.textRise=textRise;}setTextRenderingMode(textRenderingMode){this.current.textRenderingMode=textRenderingMode;}setHScale(scale){this.current.textHScale=scale/100;}setRenderingIntent(intent){}setFlatness(flatness){}setGState(states){for(const[key,value]of states){switch(key){case"LW":this.setLineWidth(value);break;case"LC":this.setLineCap(value);break;case"LJ":this.setLineJoin(value);break;case"ML":this.setMiterLimit(value);break;case"D":this.setDash(value[0],value[1]);break;case"RI":this.setRenderingIntent(value);break;case"FL":this.setFlatness(value);break;case"Font":this.setFont(value);break;case"CA":this.setStrokeAlpha(value);break;case"ca":this.setFillAlpha(value);break;default:(0,_util.warn)(`Unimplemented graphic state operator ${key}`);break;}}}fill(){const current=this.current;if(current.element){current.element.setAttributeNS(null,"fill",current.fillColor);current.element.setAttributeNS(null,"fill-opacity",current.fillAlpha);this.endPath();}}stroke(){const current=this.current;if(current.element){this._setStrokeAttributes(current.element);current.element.setAttributeNS(null,"fill","none");this.endPath();}}_setStrokeAttributes(element,lineWidthScale=1){const current=this.current;let dashArray=current.dashArray;if(lineWidthScale!==1&&dashArray.length>0){dashArray=dashArray.map(function(value){return lineWidthScale*value;});}element.setAttributeNS(null,"stroke",current.strokeColor);element.setAttributeNS(null,"stroke-opacity",current.strokeAlpha);element.setAttributeNS(null,"stroke-miterlimit",pf(current.miterLimit));element.setAttributeNS(null,"stroke-linecap",current.lineCap);element.setAttributeNS(null,"stroke-linejoin",current.lineJoin);element.setAttributeNS(null,"stroke-width",pf(lineWidthScale*current.lineWidth)+"px");element.setAttributeNS(null,"stroke-dasharray",dashArray.map(pf).join(" "));element.setAttributeNS(null,"stroke-dashoffset",pf(lineWidthScale*current.dashPhase)+"px");}eoFill(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd");this.fill();}fillStroke(){this.stroke();this.fill();}eoFillStroke(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd");this.fillStroke();}closeStroke(){this.closePath();this.stroke();}closeFillStroke(){this.closePath();this.fillStroke();}closeEOFillStroke(){this.closePath();this.eoFillStroke();}paintSolidColorImageMask(){const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x","0");rect.setAttributeNS(null,"y","0");rect.setAttributeNS(null,"width","1px");rect.setAttributeNS(null,"height","1px");rect.setAttributeNS(null,"fill",this.current.fillColor);this._ensureTransformGroup().append(rect);}paintImageXObject(objId){const imgData=this.getObject(objId);if(!imgData){(0,_util.warn)(`Dependent image with object ID ${objId} is not ready yet`);return;}this.paintInlineImageXObject(imgData);}paintInlineImageXObject(imgData,mask){const width=imgData.width;const height=imgData.height;const imgSrc=convertImgDataToPng(imgData,this.forceDataSchema,!!mask);const cliprect=this.svgFactory.createElement("svg:rect");cliprect.setAttributeNS(null,"x","0");cliprect.setAttributeNS(null,"y","0");cliprect.setAttributeNS(null,"width",pf(width));cliprect.setAttributeNS(null,"height",pf(height));this.current.element=cliprect;this.clip("nonzero");const imgEl=this.svgFactory.createElement("svg:image");imgEl.setAttributeNS(XLINK_NS,"xlink:href",imgSrc);imgEl.setAttributeNS(null,"x","0");imgEl.setAttributeNS(null,"y",pf(-height));imgEl.setAttributeNS(null,"width",pf(width)+"px");imgEl.setAttributeNS(null,"height",pf(height)+"px");imgEl.setAttributeNS(null,"transform",`scale(${pf(1/width)} ${pf(-1/height)})`);if(mask){mask.append(imgEl);}else{this._ensureTransformGroup().append(imgEl);}}paintImageMaskXObject(img){const imgData=this.getObject(img.data,img);if(imgData.bitmap){(0,_util.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, "+"ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");return;}const current=this.current;const width=imgData.width;const height=imgData.height;const fillColor=current.fillColor;current.maskId=`mask${maskCount++}`;const mask=this.svgFactory.createElement("svg:mask");mask.setAttributeNS(null,"id",current.maskId);const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x","0");rect.setAttributeNS(null,"y","0");rect.setAttributeNS(null,"width",pf(width));rect.setAttributeNS(null,"height",pf(height));rect.setAttributeNS(null,"fill",fillColor);rect.setAttributeNS(null,"mask",`url(#${current.maskId})`);this.defs.append(mask);this._ensureTransformGroup().append(rect);this.paintInlineImageXObject(imgData,mask);}paintFormXObjectBegin(matrix,bbox){if(Array.isArray(matrix)&&matrix.length===6){this.transform(matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5]);}if(bbox){const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];const cliprect=this.svgFactory.createElement("svg:rect");cliprect.setAttributeNS(null,"x",bbox[0]);cliprect.setAttributeNS(null,"y",bbox[1]);cliprect.setAttributeNS(null,"width",pf(width));cliprect.setAttributeNS(null,"height",pf(height));this.current.element=cliprect;this.clip("nonzero");this.endPath();}}paintFormXObjectEnd(){}_initialize(viewport){const svg=this.svgFactory.create(viewport.width,viewport.height);const definitions=this.svgFactory.createElement("svg:defs");svg.append(definitions);this.defs=definitions;const rootGroup=this.svgFactory.createElement("svg:g");rootGroup.setAttributeNS(null,"transform",pm(viewport.transform));svg.append(rootGroup);this.svg=rootGroup;return svg;}_ensureClipGroup(){if(!this.current.clipGroup){const clipGroup=this.svgFactory.createElement("svg:g");clipGroup.setAttributeNS(null,"clip-path",this.current.activeClipUrl);this.svg.append(clipGroup);this.current.clipGroup=clipGroup;}return this.current.clipGroup;}_ensureTransformGroup(){if(!this.tgrp){this.tgrp=this.svgFactory.createElement("svg:g");this.tgrp.setAttributeNS(null,"transform",pm(this.transformMatrix));if(this.current.activeClipUrl){this._ensureClipGroup().append(this.tgrp);}else{this.svg.append(this.tgrp);}}return this.tgrp;}};}/***/}/******/)];/************************************************************************/ /******/ // The module cache
/******/var __webpack_module_cache__={};/******/ /******/ // The require function
/******/function __w_pdfjs_require__(moduleId){/******/ // Check if module is in cache
/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/__webpack_modules__[moduleId](module,module.exports,__w_pdfjs_require__);/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /************************************************************************/var __nested_webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(()=>{var exports=__nested_webpack_exports__;Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"AbortException",{enumerable:true,get:function(){return _util.AbortException;}});Object.defineProperty(exports,"AnnotationEditorLayer",{enumerable:true,get:function(){return _annotation_editor_layer.AnnotationEditorLayer;}});Object.defineProperty(exports,"AnnotationEditorParamsType",{enumerable:true,get:function(){return _util.AnnotationEditorParamsType;}});Object.defineProperty(exports,"AnnotationEditorType",{enumerable:true,get:function(){return _util.AnnotationEditorType;}});Object.defineProperty(exports,"AnnotationEditorUIManager",{enumerable:true,get:function(){return _tools.AnnotationEditorUIManager;}});Object.defineProperty(exports,"AnnotationLayer",{enumerable:true,get:function(){return _annotation_layer.AnnotationLayer;}});Object.defineProperty(exports,"AnnotationMode",{enumerable:true,get:function(){return _util.AnnotationMode;}});Object.defineProperty(exports,"CMapCompressionType",{enumerable:true,get:function(){return _util.CMapCompressionType;}});Object.defineProperty(exports,"FeatureTest",{enumerable:true,get:function(){return _util.FeatureTest;}});Object.defineProperty(exports,"GlobalWorkerOptions",{enumerable:true,get:function(){return _worker_options.GlobalWorkerOptions;}});Object.defineProperty(exports,"InvalidPDFException",{enumerable:true,get:function(){return _util.InvalidPDFException;}});Object.defineProperty(exports,"MissingPDFException",{enumerable:true,get:function(){return _util.MissingPDFException;}});Object.defineProperty(exports,"OPS",{enumerable:true,get:function(){return _util.OPS;}});Object.defineProperty(exports,"PDFDataRangeTransport",{enumerable:true,get:function(){return _api.PDFDataRangeTransport;}});Object.defineProperty(exports,"PDFDateString",{enumerable:true,get:function(){return _display_utils.PDFDateString;}});Object.defineProperty(exports,"PDFWorker",{enumerable:true,get:function(){return _api.PDFWorker;}});Object.defineProperty(exports,"PasswordResponses",{enumerable:true,get:function(){return _util.PasswordResponses;}});Object.defineProperty(exports,"PermissionFlag",{enumerable:true,get:function(){return _util.PermissionFlag;}});Object.defineProperty(exports,"PixelsPerInch",{enumerable:true,get:function(){return _display_utils.PixelsPerInch;}});Object.defineProperty(exports,"PromiseCapability",{enumerable:true,get:function(){return _util.PromiseCapability;}});Object.defineProperty(exports,"RenderingCancelledException",{enumerable:true,get:function(){return _display_utils.RenderingCancelledException;}});Object.defineProperty(exports,"SVGGraphics",{enumerable:true,get:function(){return _svg.SVGGraphics;}});Object.defineProperty(exports,"UnexpectedResponseException",{enumerable:true,get:function(){return _util.UnexpectedResponseException;}});Object.defineProperty(exports,"Util",{enumerable:true,get:function(){return _util.Util;}});Object.defineProperty(exports,"VerbosityLevel",{enumerable:true,get:function(){return _util.VerbosityLevel;}});Object.defineProperty(exports,"XfaLayer",{enumerable:true,get:function(){return _xfa_layer.XfaLayer;}});Object.defineProperty(exports,"build",{enumerable:true,get:function(){return _api.build;}});Object.defineProperty(exports,"createValidAbsoluteUrl",{enumerable:true,get:function(){return _util.createValidAbsoluteUrl;}});Object.defineProperty(exports,"getDocument",{enumerable:true,get:function(){return _api.getDocument;}});Object.defineProperty(exports,"getFilenameFromUrl",{enumerable:true,get:function(){return _display_utils.getFilenameFromUrl;}});Object.defineProperty(exports,"getPdfFilenameFromUrl",{enumerable:true,get:function(){return _display_utils.getPdfFilenameFromUrl;}});Object.defineProperty(exports,"getXfaPageViewport",{enumerable:true,get:function(){return _display_utils.getXfaPageViewport;}});Object.defineProperty(exports,"isDataScheme",{enumerable:true,get:function(){return _display_utils.isDataScheme;}});Object.defineProperty(exports,"isPdfFile",{enumerable:true,get:function(){return _display_utils.isPdfFile;}});Object.defineProperty(exports,"loadScript",{enumerable:true,get:function(){return _display_utils.loadScript;}});Object.defineProperty(exports,"normalizeUnicode",{enumerable:true,get:function(){return _util.normalizeUnicode;}});Object.defineProperty(exports,"renderTextLayer",{enumerable:true,get:function(){return _text_layer.renderTextLayer;}});Object.defineProperty(exports,"setLayerDimensions",{enumerable:true,get:function(){return _display_utils.setLayerDimensions;}});Object.defineProperty(exports,"shadow",{enumerable:true,get:function(){return _util.shadow;}});Object.defineProperty(exports,"updateTextLayer",{enumerable:true,get:function(){return _text_layer.updateTextLayer;}});Object.defineProperty(exports,"version",{enumerable:true,get:function(){return _api.version;}});var _util=__w_pdfjs_require__(1);var _api=__w_pdfjs_require__(2);var _display_utils=__w_pdfjs_require__(6);var _text_layer=__w_pdfjs_require__(26);var _annotation_editor_layer=__w_pdfjs_require__(27);var _tools=__w_pdfjs_require__(5);var _annotation_layer=__w_pdfjs_require__(32);var _worker_options=__w_pdfjs_require__(14);var _svg=__w_pdfjs_require__(35);var _xfa_layer=__w_pdfjs_require__(34);const pdfjsVersion='3.6.172';const pdfjsBuild='4d3dfe254';})();/******/return __nested_webpack_exports__;/******/})();});

/***/ }),

/***/ 5694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _classPrivateFieldLooseBase = (__webpack_require__(5504)["default"]);
var _classPrivateFieldLooseKey = (__webpack_require__(9654)["default"]);
__webpack_require__(4114);
__webpack_require__(3375);
__webpack_require__(9225);
__webpack_require__(3972);
__webpack_require__(9209);
__webpack_require__(5714);
__webpack_require__(7561);
__webpack_require__(6197);
__webpack_require__(4603);
__webpack_require__(7566);
__webpack_require__(8721);
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(globalThis, () => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    /******/
    var __webpack_modules__ = [
      /* 0 */
    , ( /* 1 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SimpleLinkService = exports.PDFLinkService = exports.LinkTarget = void 0;
      var _ui_utils = __w_pdfjs_require__(2);
      const DEFAULT_LINK_REL = "noopener noreferrer nofollow";
      const LinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4
      };
      exports.LinkTarget = LinkTarget;
      function addLinkAttributes(link, {
        url,
        target,
        rel,
        enabled = true
      } = {}) {
        if (!url || typeof url !== "string") {
          throw new Error('A valid "url" parameter must provided.');
        }
        const urlNullRemoved = (0, _ui_utils.removeNullCharacters)(url);
        if (enabled) {
          link.href = link.title = urlNullRemoved;
        } else {
          link.href = "";
          link.title = `Disabled: ${urlNullRemoved}`;
          link.onclick = () => {
            return false;
          };
        }
        let targetStr = "";
        switch (target) {
          case LinkTarget.NONE:
            break;
          case LinkTarget.SELF:
            targetStr = "_self";
            break;
          case LinkTarget.BLANK:
            targetStr = "_blank";
            break;
          case LinkTarget.PARENT:
            targetStr = "_parent";
            break;
          case LinkTarget.TOP:
            targetStr = "_top";
            break;
        }
        link.target = targetStr;
        link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
      }
      var _pagesRefCache = /*#__PURE__*/_classPrivateFieldLooseKey("pagesRefCache");
      var _goToDestinationHelper = /*#__PURE__*/_classPrivateFieldLooseKey("goToDestinationHelper");
      var _isValidExplicitDestination = /*#__PURE__*/_classPrivateFieldLooseKey("isValidExplicitDestination");
      class PDFLinkService {
        constructor({
          eventBus,
          externalLinkTarget = null,
          externalLinkRel = null,
          ignoreDestinationZoom = false
        } = {}) {
          Object.defineProperty(this, _goToDestinationHelper, {
            value: _goToDestinationHelper2
          });
          Object.defineProperty(this, _pagesRefCache, {
            writable: true,
            value: new Map()
          });
          this.eventBus = eventBus;
          this.externalLinkTarget = externalLinkTarget;
          this.externalLinkRel = externalLinkRel;
          this.externalLinkEnabled = true;
          this._ignoreDestinationZoom = ignoreDestinationZoom;
          this.baseUrl = null;
          this.pdfDocument = null;
          this.pdfViewer = null;
          this.pdfHistory = null;
        }
        setDocument(pdfDocument, baseUrl = null) {
          this.baseUrl = baseUrl;
          this.pdfDocument = pdfDocument;
          _classPrivateFieldLooseBase(this, _pagesRefCache)[_pagesRefCache].clear();
        }
        setViewer(pdfViewer) {
          this.pdfViewer = pdfViewer;
        }
        setHistory(pdfHistory) {
          this.pdfHistory = pdfHistory;
        }
        get pagesCount() {
          return this.pdfDocument ? this.pdfDocument.numPages : 0;
        }
        get page() {
          return this.pdfViewer.currentPageNumber;
        }
        set page(value) {
          this.pdfViewer.currentPageNumber = value;
        }
        get rotation() {
          return this.pdfViewer.pagesRotation;
        }
        set rotation(value) {
          this.pdfViewer.pagesRotation = value;
        }
        get isInPresentationMode() {
          return this.pdfViewer.isInPresentationMode;
        }
        async goToDestination(dest) {
          if (!this.pdfDocument) {
            return;
          }
          let namedDest, explicitDest;
          if (typeof dest === "string") {
            namedDest = dest;
            explicitDest = await this.pdfDocument.getDestination(dest);
          } else {
            namedDest = null;
            explicitDest = await dest;
          }
          if (!Array.isArray(explicitDest)) {
            console.error(`PDFLinkService.goToDestination: "${explicitDest}" is not ` + `a valid destination array, for dest="${dest}".`);
            return;
          }
          _classPrivateFieldLooseBase(this, _goToDestinationHelper)[_goToDestinationHelper](dest, namedDest, explicitDest);
        }
        goToPage(val) {
          if (!this.pdfDocument) {
            return;
          }
          const pageNumber = typeof val === "string" && this.pdfViewer.pageLabelToPageNumber(val) || val | 0;
          if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
            console.error(`PDFLinkService.goToPage: "${val}" is not a valid page.`);
            return;
          }
          if (this.pdfHistory) {
            this.pdfHistory.pushCurrentPosition();
            this.pdfHistory.pushPage(pageNumber);
          }
          this.pdfViewer.scrollPageIntoView({
            pageNumber
          });
        }
        addLinkAttributes(link, url, newWindow = false) {
          addLinkAttributes(link, {
            url,
            target: newWindow ? LinkTarget.BLANK : this.externalLinkTarget,
            rel: this.externalLinkRel,
            enabled: this.externalLinkEnabled
          });
        }
        getDestinationHash(dest) {
          if (typeof dest === "string") {
            if (dest.length > 0) {
              return this.getAnchorUrl("#" + escape(dest));
            }
          } else if (Array.isArray(dest)) {
            const str = JSON.stringify(dest);
            if (str.length > 0) {
              return this.getAnchorUrl("#" + escape(str));
            }
          }
          return this.getAnchorUrl("");
        }
        getAnchorUrl(anchor) {
          return this.baseUrl ? this.baseUrl + anchor : anchor;
        }
        setHash(hash) {
          if (!this.pdfDocument) {
            return;
          }
          let pageNumber, dest;
          if (hash.includes("=")) {
            const params = (0, _ui_utils.parseQueryString)(hash);
            if (params.has("search")) {
              const query = params.get("search").replaceAll('"', ""),
                phrase = params.get("phrase") === "true";
              this.eventBus.dispatch("findfromurlhash", {
                source: this,
                query: phrase ? query : query.match(/\S+/g)
              });
            }
            if (params.has("page")) {
              pageNumber = params.get("page") | 0 || 1;
            }
            if (params.has("zoom")) {
              const zoomArgs = params.get("zoom").split(",");
              const zoomArg = zoomArgs[0];
              const zoomArgNumber = parseFloat(zoomArg);
              if (!zoomArg.includes("Fit")) {
                dest = [null, {
                  name: "XYZ"
                }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
              } else {
                if (zoomArg === "Fit" || zoomArg === "FitB") {
                  dest = [null, {
                    name: zoomArg
                  }];
                } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
                  dest = [null, {
                    name: zoomArg
                  }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
                } else if (zoomArg === "FitR") {
                  if (zoomArgs.length !== 5) {
                    console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
                  } else {
                    dest = [null, {
                      name: zoomArg
                    }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
                  }
                } else {
                  console.error(`PDFLinkService.setHash: "${zoomArg}" is not a valid zoom value.`);
                }
              }
            }
            if (dest) {
              this.pdfViewer.scrollPageIntoView({
                pageNumber: pageNumber || this.page,
                destArray: dest,
                allowNegativeOffset: true
              });
            } else if (pageNumber) {
              this.page = pageNumber;
            }
            if (params.has("pagemode")) {
              this.eventBus.dispatch("pagemode", {
                source: this,
                mode: params.get("pagemode")
              });
            }
            if (params.has("nameddest")) {
              this.goToDestination(params.get("nameddest"));
            }
          } else {
            dest = unescape(hash);
            try {
              dest = JSON.parse(dest);
              if (!Array.isArray(dest)) {
                dest = dest.toString();
              }
            } catch (ex) {}
            if (typeof dest === "string" || _classPrivateFieldLooseBase(PDFLinkService, _isValidExplicitDestination)[_isValidExplicitDestination](dest)) {
              this.goToDestination(dest);
              return;
            }
            console.error(`PDFLinkService.setHash: "${unescape(hash)}" is not a valid destination.`);
          }
        }
        executeNamedAction(action) {
          switch (action) {
            case "GoBack":
              this.pdfHistory?.back();
              break;
            case "GoForward":
              this.pdfHistory?.forward();
              break;
            case "NextPage":
              this.pdfViewer.nextPage();
              break;
            case "PrevPage":
              this.pdfViewer.previousPage();
              break;
            case "LastPage":
              this.page = this.pagesCount;
              break;
            case "FirstPage":
              this.page = 1;
              break;
            default:
              break;
          }
          this.eventBus.dispatch("namedaction", {
            source: this,
            action
          });
        }
        async executeSetOCGState(action) {
          const pdfDocument = this.pdfDocument;
          const optionalContentConfig = await this.pdfViewer.optionalContentConfigPromise;
          if (pdfDocument !== this.pdfDocument) {
            return;
          }
          let operator;
          for (const elem of action.state) {
            switch (elem) {
              case "ON":
              case "OFF":
              case "Toggle":
                operator = elem;
                continue;
            }
            switch (operator) {
              case "ON":
                optionalContentConfig.setVisibility(elem, true);
                break;
              case "OFF":
                optionalContentConfig.setVisibility(elem, false);
                break;
              case "Toggle":
                const group = optionalContentConfig.getGroup(elem);
                if (group) {
                  optionalContentConfig.setVisibility(elem, !group.visible);
                }
                break;
            }
          }
          this.pdfViewer.optionalContentConfigPromise = Promise.resolve(optionalContentConfig);
        }
        cachePageRef(pageNum, pageRef) {
          if (!pageRef) {
            return;
          }
          const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
          _classPrivateFieldLooseBase(this, _pagesRefCache)[_pagesRefCache].set(refStr, pageNum);
        }
        _cachedPageNumber(pageRef) {
          if (!pageRef) {
            return null;
          }
          const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
          return _classPrivateFieldLooseBase(this, _pagesRefCache)[_pagesRefCache].get(refStr) || null;
        }
        isPageVisible(pageNumber) {
          return this.pdfViewer.isPageVisible(pageNumber);
        }
        isPageCached(pageNumber) {
          return this.pdfViewer.isPageCached(pageNumber);
        }
      }
      function _goToDestinationHelper2(rawDest, namedDest = null, explicitDest) {
        const destRef = explicitDest[0];
        let pageNumber;
        if (typeof destRef === "object" && destRef !== null) {
          pageNumber = this._cachedPageNumber(destRef);
          if (!pageNumber) {
            this.pdfDocument.getPageIndex(destRef).then(pageIndex => {
              this.cachePageRef(pageIndex + 1, destRef);
              _classPrivateFieldLooseBase(this, _goToDestinationHelper)[_goToDestinationHelper](rawDest, namedDest, explicitDest);
            }).catch(() => {
              console.error(`PDFLinkService.#goToDestinationHelper: "${destRef}" is not ` + `a valid page reference, for dest="${rawDest}".`);
            });
            return;
          }
        } else if (Number.isInteger(destRef)) {
          pageNumber = destRef + 1;
        } else {
          console.error(`PDFLinkService.#goToDestinationHelper: "${destRef}" is not ` + `a valid destination reference, for dest="${rawDest}".`);
          return;
        }
        if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
          console.error(`PDFLinkService.#goToDestinationHelper: "${pageNumber}" is not ` + `a valid page number, for dest="${rawDest}".`);
          return;
        }
        if (this.pdfHistory) {
          this.pdfHistory.pushCurrentPosition();
          this.pdfHistory.push({
            namedDest,
            explicitDest,
            pageNumber
          });
        }
        this.pdfViewer.scrollPageIntoView({
          pageNumber,
          destArray: explicitDest,
          ignoreDestinationZoom: this._ignoreDestinationZoom
        });
      }
      function _isValidExplicitDestination2(dest) {
        if (!Array.isArray(dest)) {
          return false;
        }
        const destLength = dest.length;
        if (destLength < 2) {
          return false;
        }
        const page = dest[0];
        if (!(typeof page === "object" && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
          return false;
        }
        const zoom = dest[1];
        if (!(typeof zoom === "object" && typeof zoom.name === "string")) {
          return false;
        }
        let allowNull = true;
        switch (zoom.name) {
          case "XYZ":
            if (destLength !== 5) {
              return false;
            }
            break;
          case "Fit":
          case "FitB":
            return destLength === 2;
          case "FitH":
          case "FitBH":
          case "FitV":
          case "FitBV":
            if (destLength !== 3) {
              return false;
            }
            break;
          case "FitR":
            if (destLength !== 6) {
              return false;
            }
            allowNull = false;
            break;
          default:
            return false;
        }
        for (let i = 2; i < destLength; i++) {
          const param = dest[i];
          if (!(typeof param === "number" || allowNull && param === null)) {
            return false;
          }
        }
        return true;
      }
      Object.defineProperty(PDFLinkService, _isValidExplicitDestination, {
        value: _isValidExplicitDestination2
      });
      exports.PDFLinkService = PDFLinkService;
      class SimpleLinkService {
        constructor() {
          this.externalLinkEnabled = true;
        }
        get pagesCount() {
          return 0;
        }
        get page() {
          return 0;
        }
        set page(value) {}
        get rotation() {
          return 0;
        }
        set rotation(value) {}
        get isInPresentationMode() {
          return false;
        }
        async goToDestination(dest) {}
        goToPage(val) {}
        addLinkAttributes(link, url, newWindow = false) {
          addLinkAttributes(link, {
            url,
            enabled: this.externalLinkEnabled
          });
        }
        getDestinationHash(dest) {
          return "#";
        }
        getAnchorUrl(hash) {
          return "#";
        }
        setHash(hash) {}
        executeNamedAction(action) {}
        executeSetOCGState(action) {}
        cachePageRef(pageNum, pageRef) {}
        isPageVisible(pageNumber) {
          return true;
        }
        isPageCached(pageNumber) {
          return true;
        }
      }
      exports.SimpleLinkService = SimpleLinkService;

      /***/
    }), ( /* 2 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.animationStarted = exports.VERTICAL_PADDING = exports.UNKNOWN_SCALE = exports.TextLayerMode = exports.SpreadMode = exports.SidebarView = exports.ScrollMode = exports.SCROLLBAR_PADDING = exports.RenderingStates = exports.ProgressBar = exports.PresentationModeState = exports.OutputScale = exports.MIN_SCALE = exports.MAX_SCALE = exports.MAX_AUTO_SCALE = exports.DEFAULT_SCALE_VALUE = exports.DEFAULT_SCALE_DELTA = exports.DEFAULT_SCALE = exports.CursorTool = exports.AutoPrintRegExp = void 0;
      exports.apiPageLayoutToViewerModes = apiPageLayoutToViewerModes;
      exports.apiPageModeToSidebarView = apiPageModeToSidebarView;
      exports.approximateFraction = approximateFraction;
      exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
      exports.binarySearchFirstItem = binarySearchFirstItem;
      exports.docStyle = void 0;
      exports.getActiveOrFocusedElement = getActiveOrFocusedElement;
      exports.getPageSizeInches = getPageSizeInches;
      exports.getVisibleElements = getVisibleElements;
      exports.isPortraitOrientation = isPortraitOrientation;
      exports.isValidRotation = isValidRotation;
      exports.isValidScrollMode = isValidScrollMode;
      exports.isValidSpreadMode = isValidSpreadMode;
      exports.noContextMenuHandler = noContextMenuHandler;
      exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
      exports.normalizeWheelEventDirection = normalizeWheelEventDirection;
      exports.parseQueryString = parseQueryString;
      exports.removeNullCharacters = removeNullCharacters;
      exports.roundToDivide = roundToDivide;
      exports.scrollIntoView = scrollIntoView;
      exports.toggleCheckedBtn = toggleCheckedBtn;
      exports.watchScroll = watchScroll;
      const DEFAULT_SCALE_VALUE = "auto";
      exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
      const DEFAULT_SCALE = 1.0;
      exports.DEFAULT_SCALE = DEFAULT_SCALE;
      const DEFAULT_SCALE_DELTA = 1.1;
      exports.DEFAULT_SCALE_DELTA = DEFAULT_SCALE_DELTA;
      const MIN_SCALE = 0.1;
      exports.MIN_SCALE = MIN_SCALE;
      const MAX_SCALE = 10.0;
      exports.MAX_SCALE = MAX_SCALE;
      const UNKNOWN_SCALE = 0;
      exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
      const MAX_AUTO_SCALE = 1.25;
      exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
      const SCROLLBAR_PADDING = 40;
      exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
      const VERTICAL_PADDING = 5;
      exports.VERTICAL_PADDING = VERTICAL_PADDING;
      const RenderingStates = {
        INITIAL: 0,
        RUNNING: 1,
        PAUSED: 2,
        FINISHED: 3
      };
      exports.RenderingStates = RenderingStates;
      const PresentationModeState = {
        UNKNOWN: 0,
        NORMAL: 1,
        CHANGING: 2,
        FULLSCREEN: 3
      };
      exports.PresentationModeState = PresentationModeState;
      const SidebarView = {
        UNKNOWN: -1,
        NONE: 0,
        THUMBS: 1,
        OUTLINE: 2,
        ATTACHMENTS: 3,
        LAYERS: 4
      };
      exports.SidebarView = SidebarView;
      const TextLayerMode = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_PERMISSIONS: 2
      };
      exports.TextLayerMode = TextLayerMode;
      const ScrollMode = {
        UNKNOWN: -1,
        VERTICAL: 0,
        HORIZONTAL: 1,
        WRAPPED: 2,
        PAGE: 3
      };
      exports.ScrollMode = ScrollMode;
      const SpreadMode = {
        UNKNOWN: -1,
        NONE: 0,
        ODD: 1,
        EVEN: 2
      };
      exports.SpreadMode = SpreadMode;
      const CursorTool = {
        SELECT: 0,
        HAND: 1,
        ZOOM: 2
      };
      exports.CursorTool = CursorTool;
      const AutoPrintRegExp = /\bprint\s*\(/;
      exports.AutoPrintRegExp = AutoPrintRegExp;
      class OutputScale {
        constructor() {
          const pixelRatio = window.devicePixelRatio || 1;
          this.sx = pixelRatio;
          this.sy = pixelRatio;
        }
        get scaled() {
          return this.sx !== 1 || this.sy !== 1;
        }
      }
      exports.OutputScale = OutputScale;
      function scrollIntoView(element, spot, scrollMatches = false) {
        let parent = element.offsetParent;
        if (!parent) {
          console.error("offsetParent is not set -- cannot scroll");
          return;
        }
        let offsetY = element.offsetTop + element.clientTop;
        let offsetX = element.offsetLeft + element.clientLeft;
        while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || scrollMatches && (parent.classList.contains("markedContent") || getComputedStyle(parent).overflow === "hidden")) {
          offsetY += parent.offsetTop;
          offsetX += parent.offsetLeft;
          parent = parent.offsetParent;
          if (!parent) {
            return;
          }
        }
        if (spot) {
          if (spot.top !== undefined) {
            offsetY += spot.top;
          }
          if (spot.left !== undefined) {
            offsetX += spot.left;
            parent.scrollLeft = offsetX;
          }
        }
        parent.scrollTop = offsetY;
      }
      function watchScroll(viewAreaElement, callback) {
        const debounceScroll = function (evt) {
          if (rAF) {
            return;
          }
          rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
            rAF = null;
            const currentX = viewAreaElement.scrollLeft;
            const lastX = state.lastX;
            if (currentX !== lastX) {
              state.right = currentX > lastX;
            }
            state.lastX = currentX;
            const currentY = viewAreaElement.scrollTop;
            const lastY = state.lastY;
            if (currentY !== lastY) {
              state.down = currentY > lastY;
            }
            state.lastY = currentY;
            callback(state);
          });
        };
        const state = {
          right: true,
          down: true,
          lastX: viewAreaElement.scrollLeft,
          lastY: viewAreaElement.scrollTop,
          _eventHandler: debounceScroll
        };
        let rAF = null;
        viewAreaElement.addEventListener("scroll", debounceScroll, true);
        return state;
      }
      function parseQueryString(query) {
        const params = new Map();
        for (const [key, value] of new URLSearchParams(query)) {
          params.set(key.toLowerCase(), value);
        }
        return params;
      }
      const InvisibleCharactersRegExp = /[\x01-\x1F]/g;
      function removeNullCharacters(str, replaceInvisible = false) {
        if (typeof str !== "string") {
          console.error(`The argument must be a string.`);
          return str;
        }
        if (replaceInvisible) {
          str = str.replaceAll(InvisibleCharactersRegExp, " ");
        }
        return str.replaceAll("\x00", "");
      }
      function binarySearchFirstItem(items, condition, start = 0) {
        let minIndex = start;
        let maxIndex = items.length - 1;
        if (maxIndex < 0 || !condition(items[maxIndex])) {
          return items.length;
        }
        if (condition(items[minIndex])) {
          return minIndex;
        }
        while (minIndex < maxIndex) {
          const currentIndex = minIndex + maxIndex >> 1;
          const currentItem = items[currentIndex];
          if (condition(currentItem)) {
            maxIndex = currentIndex;
          } else {
            minIndex = currentIndex + 1;
          }
        }
        return minIndex;
      }
      function approximateFraction(x) {
        if (Math.floor(x) === x) {
          return [x, 1];
        }
        const xinv = 1 / x;
        const limit = 8;
        if (xinv > limit) {
          return [1, limit];
        } else if (Math.floor(xinv) === xinv) {
          return [1, xinv];
        }
        const x_ = x > 1 ? xinv : x;
        let a = 0,
          b = 1,
          c = 1,
          d = 1;
        while (true) {
          const p = a + c,
            q = b + d;
          if (q > limit) {
            break;
          }
          if (x_ <= p / q) {
            c = p;
            d = q;
          } else {
            a = p;
            b = q;
          }
        }
        let result;
        if (x_ - a / b < c / d - x_) {
          result = x_ === x ? [a, b] : [b, a];
        } else {
          result = x_ === x ? [c, d] : [d, c];
        }
        return result;
      }
      function roundToDivide(x, div) {
        const r = x % div;
        return r === 0 ? x : Math.round(x - r + div);
      }
      function getPageSizeInches({
        view,
        userUnit,
        rotate
      }) {
        const [x1, y1, x2, y2] = view;
        const changeOrientation = rotate % 180 !== 0;
        const width = (x2 - x1) / 72 * userUnit;
        const height = (y2 - y1) / 72 * userUnit;
        return {
          width: changeOrientation ? height : width,
          height: changeOrientation ? width : height
        };
      }
      function backtrackBeforeAllVisibleElements(index, views, top) {
        if (index < 2) {
          return index;
        }
        let elt = views[index].div;
        let pageTop = elt.offsetTop + elt.clientTop;
        if (pageTop >= top) {
          elt = views[index - 1].div;
          pageTop = elt.offsetTop + elt.clientTop;
        }
        for (let i = index - 2; i >= 0; --i) {
          elt = views[i].div;
          if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
            break;
          }
          index = i;
        }
        return index;
      }
      function getVisibleElements({
        scrollEl,
        views,
        sortByVisibility = false,
        horizontal = false,
        rtl = false
      }) {
        const top = scrollEl.scrollTop,
          bottom = top + scrollEl.clientHeight;
        const left = scrollEl.scrollLeft,
          right = left + scrollEl.clientWidth;
        function isElementBottomAfterViewTop(view) {
          const element = view.div;
          const elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
          return elementBottom > top;
        }
        function isElementNextAfterViewHorizontally(view) {
          const element = view.div;
          const elementLeft = element.offsetLeft + element.clientLeft;
          const elementRight = elementLeft + element.clientWidth;
          return rtl ? elementLeft < right : elementRight > left;
        }
        const visible = [],
          ids = new Set(),
          numViews = views.length;
        let firstVisibleElementInd = binarySearchFirstItem(views, horizontal ? isElementNextAfterViewHorizontally : isElementBottomAfterViewTop);
        if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
          firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
        }
        let lastEdge = horizontal ? right : -1;
        for (let i = firstVisibleElementInd; i < numViews; i++) {
          const view = views[i],
            element = view.div;
          const currentWidth = element.offsetLeft + element.clientLeft;
          const currentHeight = element.offsetTop + element.clientTop;
          const viewWidth = element.clientWidth,
            viewHeight = element.clientHeight;
          const viewRight = currentWidth + viewWidth;
          const viewBottom = currentHeight + viewHeight;
          if (lastEdge === -1) {
            if (viewBottom >= bottom) {
              lastEdge = viewBottom;
            }
          } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
            break;
          }
          if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
            continue;
          }
          const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
          const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
          const fractionHeight = (viewHeight - hiddenHeight) / viewHeight,
            fractionWidth = (viewWidth - hiddenWidth) / viewWidth;
          const percent = fractionHeight * fractionWidth * 100 | 0;
          visible.push({
            id: view.id,
            x: currentWidth,
            y: currentHeight,
            view,
            percent,
            widthPercent: fractionWidth * 100 | 0
          });
          ids.add(view.id);
        }
        const first = visible[0],
          last = visible.at(-1);
        if (sortByVisibility) {
          visible.sort(function (a, b) {
            const pc = a.percent - b.percent;
            if (Math.abs(pc) > 0.001) {
              return -pc;
            }
            return a.id - b.id;
          });
        }
        return {
          first,
          last,
          views: visible,
          ids
        };
      }
      function noContextMenuHandler(evt) {
        evt.preventDefault();
      }
      function normalizeWheelEventDirection(evt) {
        let delta = Math.hypot(evt.deltaX, evt.deltaY);
        const angle = Math.atan2(evt.deltaY, evt.deltaX);
        if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
          delta = -delta;
        }
        return delta;
      }
      function normalizeWheelEventDelta(evt) {
        const deltaMode = evt.deltaMode;
        let delta = normalizeWheelEventDirection(evt);
        const MOUSE_PIXELS_PER_LINE = 30;
        const MOUSE_LINES_PER_PAGE = 30;
        if (deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
          delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
        } else if (deltaMode === WheelEvent.DOM_DELTA_LINE) {
          delta /= MOUSE_LINES_PER_PAGE;
        }
        return delta;
      }
      function isValidRotation(angle) {
        return Number.isInteger(angle) && angle % 90 === 0;
      }
      function isValidScrollMode(mode) {
        return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
      }
      function isValidSpreadMode(mode) {
        return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
      }
      function isPortraitOrientation(size) {
        return size.width <= size.height;
      }
      const animationStarted = new Promise(function (resolve) {
        window.requestAnimationFrame(resolve);
      });
      exports.animationStarted = animationStarted;
      const docStyle = document.documentElement.style;
      exports.docStyle = docStyle;
      function clamp(v, min, max) {
        return Math.min(Math.max(v, min), max);
      }
      var _classList = /*#__PURE__*/_classPrivateFieldLooseKey("classList");
      var _disableAutoFetchTimeout = /*#__PURE__*/_classPrivateFieldLooseKey("disableAutoFetchTimeout");
      var _percent = /*#__PURE__*/_classPrivateFieldLooseKey("percent");
      var _style = /*#__PURE__*/_classPrivateFieldLooseKey("style");
      var _visible = /*#__PURE__*/_classPrivateFieldLooseKey("visible");
      class ProgressBar {
        constructor(bar) {
          Object.defineProperty(this, _classList, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _disableAutoFetchTimeout, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _percent, {
            writable: true,
            value: 0
          });
          Object.defineProperty(this, _style, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _visible, {
            writable: true,
            value: true
          });
          _classPrivateFieldLooseBase(this, _classList)[_classList] = bar.classList;
          _classPrivateFieldLooseBase(this, _style)[_style] = bar.style;
        }
        get percent() {
          return _classPrivateFieldLooseBase(this, _percent)[_percent];
        }
        set percent(val) {
          _classPrivateFieldLooseBase(this, _percent)[_percent] = clamp(val, 0, 100);
          if (isNaN(val)) {
            _classPrivateFieldLooseBase(this, _classList)[_classList].add("indeterminate");
            return;
          }
          _classPrivateFieldLooseBase(this, _classList)[_classList].remove("indeterminate");
          _classPrivateFieldLooseBase(this, _style)[_style].setProperty("--progressBar-percent", `${_classPrivateFieldLooseBase(this, _percent)[_percent]}%`);
        }
        setWidth(viewer) {
          if (!viewer) {
            return;
          }
          const container = viewer.parentNode;
          const scrollbarWidth = container.offsetWidth - viewer.offsetWidth;
          if (scrollbarWidth > 0) {
            _classPrivateFieldLooseBase(this, _style)[_style].setProperty("--progressBar-end-offset", `${scrollbarWidth}px`);
          }
        }
        setDisableAutoFetch(delay = 5000) {
          if (isNaN(_classPrivateFieldLooseBase(this, _percent)[_percent])) {
            return;
          }
          if (_classPrivateFieldLooseBase(this, _disableAutoFetchTimeout)[_disableAutoFetchTimeout]) {
            clearTimeout(_classPrivateFieldLooseBase(this, _disableAutoFetchTimeout)[_disableAutoFetchTimeout]);
          }
          this.show();
          _classPrivateFieldLooseBase(this, _disableAutoFetchTimeout)[_disableAutoFetchTimeout] = setTimeout(() => {
            _classPrivateFieldLooseBase(this, _disableAutoFetchTimeout)[_disableAutoFetchTimeout] = null;
            this.hide();
          }, delay);
        }
        hide() {
          if (!_classPrivateFieldLooseBase(this, _visible)[_visible]) {
            return;
          }
          _classPrivateFieldLooseBase(this, _visible)[_visible] = false;
          _classPrivateFieldLooseBase(this, _classList)[_classList].add("hidden");
        }
        show() {
          if (_classPrivateFieldLooseBase(this, _visible)[_visible]) {
            return;
          }
          _classPrivateFieldLooseBase(this, _visible)[_visible] = true;
          _classPrivateFieldLooseBase(this, _classList)[_classList].remove("hidden");
        }
      }
      exports.ProgressBar = ProgressBar;
      function getActiveOrFocusedElement() {
        let curRoot = document;
        let curActiveOrFocused = curRoot.activeElement || curRoot.querySelector(":focus");
        while (curActiveOrFocused?.shadowRoot) {
          curRoot = curActiveOrFocused.shadowRoot;
          curActiveOrFocused = curRoot.activeElement || curRoot.querySelector(":focus");
        }
        return curActiveOrFocused;
      }
      function apiPageLayoutToViewerModes(layout) {
        let scrollMode = ScrollMode.VERTICAL,
          spreadMode = SpreadMode.NONE;
        switch (layout) {
          case "SinglePage":
            scrollMode = ScrollMode.PAGE;
            break;
          case "OneColumn":
            break;
          case "TwoPageLeft":
            scrollMode = ScrollMode.PAGE;
          case "TwoColumnLeft":
            spreadMode = SpreadMode.ODD;
            break;
          case "TwoPageRight":
            scrollMode = ScrollMode.PAGE;
          case "TwoColumnRight":
            spreadMode = SpreadMode.EVEN;
            break;
        }
        return {
          scrollMode,
          spreadMode
        };
      }
      function apiPageModeToSidebarView(mode) {
        switch (mode) {
          case "UseNone":
            return SidebarView.NONE;
          case "UseThumbs":
            return SidebarView.THUMBS;
          case "UseOutlines":
            return SidebarView.OUTLINE;
          case "UseAttachments":
            return SidebarView.ATTACHMENTS;
          case "UseOC":
            return SidebarView.LAYERS;
        }
        return SidebarView.NONE;
      }
      function toggleCheckedBtn(button, toggle, view = null) {
        button.classList.toggle("toggled", toggle);
        button.setAttribute("aria-checked", toggle);
        view?.classList.toggle("hidden", !toggle);
      }

      /***/
    }), ( /* 3 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnnotationLayerBuilder = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _l10n_utils = __w_pdfjs_require__(5);
      var _ui_utils = __w_pdfjs_require__(2);
      var _numAnnotations = /*#__PURE__*/_classPrivateFieldLooseKey("numAnnotations");
      var _onPresentationModeChanged = /*#__PURE__*/_classPrivateFieldLooseKey("onPresentationModeChanged");
      var _updatePresentationModeState = /*#__PURE__*/_classPrivateFieldLooseKey("updatePresentationModeState");
      class AnnotationLayerBuilder {
        constructor({
          pageDiv,
          pdfPage,
          linkService,
          downloadManager,
          annotationStorage = null,
          imageResourcesPath = "",
          renderForms = true,
          l10n = _l10n_utils.NullL10n,
          enableScripting = false,
          hasJSActionsPromise = null,
          fieldObjectsPromise = null,
          annotationCanvasMap = null,
          accessibilityManager = null
        }) {
          Object.defineProperty(this, _updatePresentationModeState, {
            value: _updatePresentationModeState2
          });
          Object.defineProperty(this, _numAnnotations, {
            writable: true,
            value: 0
          });
          Object.defineProperty(this, _onPresentationModeChanged, {
            writable: true,
            value: null
          });
          this.pageDiv = pageDiv;
          this.pdfPage = pdfPage;
          this.linkService = linkService;
          this.downloadManager = downloadManager;
          this.imageResourcesPath = imageResourcesPath;
          this.renderForms = renderForms;
          this.l10n = l10n;
          this.annotationStorage = annotationStorage;
          this.enableScripting = enableScripting;
          this._hasJSActionsPromise = hasJSActionsPromise || Promise.resolve(false);
          this._fieldObjectsPromise = fieldObjectsPromise || Promise.resolve(null);
          this._annotationCanvasMap = annotationCanvasMap;
          this._accessibilityManager = accessibilityManager;
          this.div = null;
          this._cancelled = false;
          this._eventBus = linkService.eventBus;
        }
        async render(viewport, intent = "display") {
          if (this.div) {
            if (this._cancelled || _classPrivateFieldLooseBase(this, _numAnnotations)[_numAnnotations] === 0) {
              return;
            }
            _pdfjsLib.AnnotationLayer.update({
              viewport: viewport.clone({
                dontFlip: true
              }),
              div: this.div,
              annotationCanvasMap: this._annotationCanvasMap
            });
            return;
          }
          const [annotations, hasJSActions, fieldObjects] = await Promise.all([this.pdfPage.getAnnotations({
            intent
          }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
          if (this._cancelled) {
            return;
          }
          _classPrivateFieldLooseBase(this, _numAnnotations)[_numAnnotations] = annotations.length;
          this.div = document.createElement("div");
          this.div.className = "annotationLayer";
          this.pageDiv.append(this.div);
          if (_classPrivateFieldLooseBase(this, _numAnnotations)[_numAnnotations] === 0) {
            this.hide();
            return;
          }
          _pdfjsLib.AnnotationLayer.render({
            viewport: viewport.clone({
              dontFlip: true
            }),
            div: this.div,
            annotations,
            page: this.pdfPage,
            imageResourcesPath: this.imageResourcesPath,
            renderForms: this.renderForms,
            linkService: this.linkService,
            downloadManager: this.downloadManager,
            annotationStorage: this.annotationStorage,
            enableScripting: this.enableScripting,
            hasJSActions,
            fieldObjects,
            annotationCanvasMap: this._annotationCanvasMap,
            accessibilityManager: this._accessibilityManager
          });
          this.l10n.translate(this.div);
          if (this.linkService.isInPresentationMode) {
            _classPrivateFieldLooseBase(this, _updatePresentationModeState)[_updatePresentationModeState](_ui_utils.PresentationModeState.FULLSCREEN);
          }
          if (!_classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged]) {
            _classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged] = evt => {
              _classPrivateFieldLooseBase(this, _updatePresentationModeState)[_updatePresentationModeState](evt.state);
            };
            this._eventBus?._on("presentationmodechanged", _classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged]);
          }
        }
        cancel() {
          this._cancelled = true;
          if (_classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged]) {
            this._eventBus?._off("presentationmodechanged", _classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged]);
            _classPrivateFieldLooseBase(this, _onPresentationModeChanged)[_onPresentationModeChanged] = null;
          }
        }
        hide() {
          if (!this.div) {
            return;
          }
          this.div.hidden = true;
        }
      }
      function _updatePresentationModeState2(state) {
        if (!this.div) {
          return;
        }
        let disableFormElements = false;
        switch (state) {
          case _ui_utils.PresentationModeState.FULLSCREEN:
            disableFormElements = true;
            break;
          case _ui_utils.PresentationModeState.NORMAL:
            break;
          default:
            return;
        }
        for (const section of this.div.childNodes) {
          if (section.hasAttribute("data-internal-link")) {
            continue;
          }
          section.inert = disableFormElements;
        }
      }
      exports.AnnotationLayerBuilder = AnnotationLayerBuilder;

      /***/
    }), ( /* 4 */
    /***/module => {
      let pdfjsLib;
      if (typeof window !== "undefined" && window["pdfjs-dist/build/pdf"]) {
        pdfjsLib = window["pdfjs-dist/build/pdf"];
      } else {
        pdfjsLib = __webpack_require__(5279);
      }
      module.exports = pdfjsLib;

      /***/
    }), ( /* 5 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NullL10n = void 0;
      exports.fixupLangCode = fixupLangCode;
      exports.getL10nFallback = getL10nFallback;
      const DEFAULT_L10N_STRINGS = {
        of_pages: "of {{pagesCount}}",
        page_of_pages: "({{pageNumber}} of {{pagesCount}})",
        document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
        document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
        document_properties_date_string: "{{date}}, {{time}}",
        document_properties_page_size_unit_inches: "in",
        document_properties_page_size_unit_millimeters: "mm",
        document_properties_page_size_orientation_portrait: "portrait",
        document_properties_page_size_orientation_landscape: "landscape",
        document_properties_page_size_name_a3: "A3",
        document_properties_page_size_name_a4: "A4",
        document_properties_page_size_name_letter: "Letter",
        document_properties_page_size_name_legal: "Legal",
        document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
        document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
        document_properties_linearized_yes: "Yes",
        document_properties_linearized_no: "No",
        additional_layers: "Additional Layers",
        page_landmark: "Page {{page}}",
        thumb_page_title: "Page {{page}}",
        thumb_page_canvas: "Thumbnail of Page {{page}}",
        find_reached_top: "Reached top of document, continued from bottom",
        find_reached_bottom: "Reached end of document, continued from top",
        "find_match_count[one]": "{{current}} of {{total}} match",
        "find_match_count[other]": "{{current}} of {{total}} matches",
        "find_match_count_limit[one]": "More than {{limit}} match",
        "find_match_count_limit[other]": "More than {{limit}} matches",
        find_not_found: "Phrase not found",
        page_scale_width: "Page Width",
        page_scale_fit: "Page Fit",
        page_scale_auto: "Automatic Zoom",
        page_scale_actual: "Actual Size",
        page_scale_percent: "{{scale}}%",
        loading_error: "An error occurred while loading the PDF.",
        invalid_file_error: "Invalid or corrupted PDF file.",
        missing_file_error: "Missing PDF file.",
        unexpected_response_error: "Unexpected server response.",
        rendering_error: "An error occurred while rendering the page.",
        printing_not_supported: "Warning: Printing is not fully supported by this browser.",
        printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
        web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
        free_text2_default_content: "Start typing…",
        editor_free_text2_aria_label: "Text Editor",
        editor_ink2_aria_label: "Draw Editor",
        editor_ink_canvas_aria_label: "User-created image"
      };
      {
        DEFAULT_L10N_STRINGS.print_progress_percent = "{{progress}}%";
      }
      function getL10nFallback(key, args) {
        switch (key) {
          case "find_match_count":
            key = `find_match_count[${args.total === 1 ? "one" : "other"}]`;
            break;
          case "find_match_count_limit":
            key = `find_match_count_limit[${args.limit === 1 ? "one" : "other"}]`;
            break;
        }
        return DEFAULT_L10N_STRINGS[key] || "";
      }
      const PARTIAL_LANG_CODES = {
        en: "en-US",
        es: "es-ES",
        fy: "fy-NL",
        ga: "ga-IE",
        gu: "gu-IN",
        hi: "hi-IN",
        hy: "hy-AM",
        nb: "nb-NO",
        ne: "ne-NP",
        nn: "nn-NO",
        pa: "pa-IN",
        pt: "pt-PT",
        sv: "sv-SE",
        zh: "zh-CN"
      };
      function fixupLangCode(langCode) {
        return PARTIAL_LANG_CODES[langCode?.toLowerCase()] || langCode;
      }
      function formatL10nValue(text, args) {
        if (!args) {
          return text;
        }
        return text.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (all, name) => {
          return name in args ? args[name] : "{{" + name + "}}";
        });
      }
      const NullL10n = {
        async getLanguage() {
          return "en-us";
        },
        async getDirection() {
          return "ltr";
        },
        async get(key, args = null, fallback = getL10nFallback(key, args)) {
          return formatL10nValue(fallback, args);
        },
        async translate(element) {}
      };
      exports.NullL10n = NullL10n;

      /***/
    }), ( /* 6 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DownloadManager = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      ;
      function download(blobUrl, filename) {
        const a = document.createElement("a");
        if (!a.click) {
          throw new Error('DownloadManager: "a.click()" is not supported.');
        }
        a.href = blobUrl;
        a.target = "_parent";
        if ("download" in a) {
          a.download = filename;
        }
        (document.body || document.documentElement).append(a);
        a.click();
        a.remove();
      }
      var _openBlobUrls = /*#__PURE__*/_classPrivateFieldLooseKey("openBlobUrls");
      class DownloadManager {
        constructor() {
          Object.defineProperty(this, _openBlobUrls, {
            writable: true,
            value: new WeakMap()
          });
        }
        downloadUrl(url, filename, _options) {
          if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, "http://example.com")) {
            console.error(`downloadUrl - not a valid URL: ${url}`);
            return;
          }
          download(url + "#pdfjs.action=download", filename);
        }
        downloadData(data, filename, contentType) {
          const blobUrl = URL.createObjectURL(new Blob([data], {
            type: contentType
          }));
          download(blobUrl, filename);
        }
        openOrDownloadData(element, data, filename) {
          const isPdfData = (0, _pdfjsLib.isPdfFile)(filename);
          const contentType = isPdfData ? "application/pdf" : "";
          this.downloadData(data, filename, contentType);
          return false;
        }
        download(blob, url, filename, _options) {
          const blobUrl = URL.createObjectURL(blob);
          download(blobUrl, filename);
        }
      }
      exports.DownloadManager = DownloadManager;

      /***/
    }), ( /* 7 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WaitOnType = exports.EventBus = exports.AutomationEventBus = void 0;
      exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
      const WaitOnType = {
        EVENT: "event",
        TIMEOUT: "timeout"
      };
      exports.WaitOnType = WaitOnType;
      function waitOnEventOrTimeout({
        target,
        name,
        delay = 0
      }) {
        return new Promise(function (resolve, reject) {
          if (typeof target !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
            throw new Error("waitOnEventOrTimeout - invalid parameters.");
          }
          function handler(type) {
            if (target instanceof EventBus) {
              target._off(name, eventHandler);
            } else {
              target.removeEventListener(name, eventHandler);
            }
            if (timeout) {
              clearTimeout(timeout);
            }
            resolve(type);
          }
          const eventHandler = handler.bind(null, WaitOnType.EVENT);
          if (target instanceof EventBus) {
            target._on(name, eventHandler);
          } else {
            target.addEventListener(name, eventHandler);
          }
          const timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
          const timeout = setTimeout(timeoutHandler, delay);
        });
      }
      var _listeners = /*#__PURE__*/_classPrivateFieldLooseKey("listeners");
      class EventBus {
        constructor() {
          Object.defineProperty(this, _listeners, {
            writable: true,
            value: Object.create(null)
          });
        }
        on(eventName, listener, options = null) {
          this._on(eventName, listener, {
            external: true,
            once: options?.once
          });
        }
        off(eventName, listener, options = null) {
          this._off(eventName, listener, {
            external: true,
            once: options?.once
          });
        }
        dispatch(eventName, data) {
          const eventListeners = _classPrivateFieldLooseBase(this, _listeners)[_listeners][eventName];
          if (!eventListeners || eventListeners.length === 0) {
            return;
          }
          let externalListeners;
          for (const {
            listener,
            external,
            once
          } of eventListeners.slice(0)) {
            if (once) {
              this._off(eventName, listener);
            }
            if (external) {
              (externalListeners ||= []).push(listener);
              continue;
            }
            listener(data);
          }
          if (externalListeners) {
            for (const listener of externalListeners) {
              listener(data);
            }
            externalListeners = null;
          }
        }
        _on(eventName, listener, options = null) {
          const eventListeners = _classPrivateFieldLooseBase(this, _listeners)[_listeners][eventName] ||= [];
          eventListeners.push({
            listener,
            external: options?.external === true,
            once: options?.once === true
          });
        }
        _off(eventName, listener, options = null) {
          const eventListeners = _classPrivateFieldLooseBase(this, _listeners)[_listeners][eventName];
          if (!eventListeners) {
            return;
          }
          for (let i = 0, ii = eventListeners.length; i < ii; i++) {
            if (eventListeners[i].listener === listener) {
              eventListeners.splice(i, 1);
              return;
            }
          }
        }
      }
      exports.EventBus = EventBus;
      class AutomationEventBus extends EventBus {
        dispatch(eventName, data) {
          throw new Error("Not implemented: AutomationEventBus.dispatch");
        }
      }
      exports.AutomationEventBus = AutomationEventBus;

      /***/
    }), ( /* 8 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GenericL10n = void 0;
      __w_pdfjs_require__(9);
      var _l10n_utils = __w_pdfjs_require__(5);
      const webL10n = document.webL10n;
      class GenericL10n {
        constructor(lang) {
          this._lang = lang;
          this._ready = new Promise((resolve, reject) => {
            webL10n.setLanguage((0, _l10n_utils.fixupLangCode)(lang), () => {
              resolve(webL10n);
            });
          });
        }
        async getLanguage() {
          const l10n = await this._ready;
          return l10n.getLanguage();
        }
        async getDirection() {
          const l10n = await this._ready;
          return l10n.getDirection();
        }
        async get(key, args = null, fallback = (0, _l10n_utils.getL10nFallback)(key, args)) {
          const l10n = await this._ready;
          return l10n.get(key, args, fallback);
        }
        async translate(element) {
          const l10n = await this._ready;
          return l10n.translate(element);
        }
      }
      exports.GenericL10n = GenericL10n;

      /***/
    }), ( /* 9 */
    /***/() => {
      document.webL10n = function (window, document, undefined) {
        var gL10nData = {};
        var gTextData = '';
        var gTextProp = 'textContent';
        var gLanguage = '';
        var gMacros = {};
        var gReadyState = 'loading';
        var gAsyncResourceLoading = true;
        function getL10nResourceLinks() {
          return document.querySelectorAll('link[type="application/l10n"]');
        }
        function getL10nDictionary() {
          var script = document.querySelector('script[type="application/l10n"]');
          return script ? JSON.parse(script.innerHTML) : null;
        }
        function getTranslatableChildren(element) {
          return element ? element.querySelectorAll('*[data-l10n-id]') : [];
        }
        function getL10nAttributes(element) {
          if (!element) return {};
          var l10nId = element.getAttribute('data-l10n-id');
          var l10nArgs = element.getAttribute('data-l10n-args');
          var args = {};
          if (l10nArgs) {
            try {
              args = JSON.parse(l10nArgs);
            } catch (e) {
              console.warn('could not parse arguments for #' + l10nId);
            }
          }
          return {
            id: l10nId,
            args: args
          };
        }
        function xhrLoadText(url, onSuccess, onFailure) {
          onSuccess = onSuccess || function _onSuccess(data) {};
          onFailure = onFailure || function _onFailure() {};
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, gAsyncResourceLoading);
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=utf-8');
          }
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200 || xhr.status === 0) {
                onSuccess(xhr.responseText);
              } else {
                onFailure();
              }
            }
          };
          xhr.onerror = onFailure;
          xhr.ontimeout = onFailure;
          try {
            xhr.send(null);
          } catch (e) {
            onFailure();
          }
        }
        function parseResource(href, lang, successCallback, failureCallback) {
          var baseURL = href.replace(/[^\/]*$/, '') || './';
          function evalString(text) {
            if (text.lastIndexOf('\\') < 0) return text;
            return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'");
          }
          function parseProperties(text, parsedPropertiesCallback) {
            var dictionary = {};
            var reBlank = /^\s*|\s*$/;
            var reComment = /^\s*#|^\s*$/;
            var reSection = /^\s*\[(.*)\]\s*$/;
            var reImport = /^\s*@import\s+url\((.*)\)\s*$/i;
            var reSplit = /^([^=\s]*)\s*=\s*(.+)$/;
            function parseRawLines(rawText, extendedSyntax, parsedRawLinesCallback) {
              var entries = rawText.replace(reBlank, '').split(/[\r\n]+/);
              var currentLang = '*';
              var genericLang = lang.split('-', 1)[0];
              var skipLang = false;
              var match = '';
              function nextEntry() {
                while (true) {
                  if (!entries.length) {
                    parsedRawLinesCallback();
                    return;
                  }
                  var line = entries.shift();
                  if (reComment.test(line)) continue;
                  if (extendedSyntax) {
                    match = reSection.exec(line);
                    if (match) {
                      currentLang = match[1].toLowerCase();
                      skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang;
                      continue;
                    } else if (skipLang) {
                      continue;
                    }
                    match = reImport.exec(line);
                    if (match) {
                      loadImport(baseURL + match[1], nextEntry);
                      return;
                    }
                  }
                  var tmp = line.match(reSplit);
                  if (tmp && tmp.length == 3) {
                    dictionary[tmp[1]] = evalString(tmp[2]);
                  }
                }
              }
              nextEntry();
            }
            function loadImport(url, callback) {
              xhrLoadText(url, function (content) {
                parseRawLines(content, false, callback);
              }, function () {
                console.warn(url + ' not found.');
                callback();
              });
            }
            parseRawLines(text, true, function () {
              parsedPropertiesCallback(dictionary);
            });
          }
          xhrLoadText(href, function (response) {
            gTextData += response;
            parseProperties(response, function (data) {
              for (var key in data) {
                var id,
                  prop,
                  index = key.lastIndexOf('.');
                if (index > 0) {
                  id = key.substring(0, index);
                  prop = key.substring(index + 1);
                } else {
                  id = key;
                  prop = gTextProp;
                }
                if (!gL10nData[id]) {
                  gL10nData[id] = {};
                }
                gL10nData[id][prop] = data[key];
              }
              if (successCallback) {
                successCallback();
              }
            });
          }, failureCallback);
        }
        function loadLocale(lang, callback) {
          if (lang) {
            lang = lang.toLowerCase();
          }
          callback = callback || function _callback() {};
          clear();
          gLanguage = lang;
          var langLinks = getL10nResourceLinks();
          var langCount = langLinks.length;
          if (langCount === 0) {
            var dict = getL10nDictionary();
            if (dict && dict.locales && dict.default_locale) {
              console.log('using the embedded JSON directory, early way out');
              gL10nData = dict.locales[lang];
              if (!gL10nData) {
                var defaultLocale = dict.default_locale.toLowerCase();
                for (var anyCaseLang in dict.locales) {
                  anyCaseLang = anyCaseLang.toLowerCase();
                  if (anyCaseLang === lang) {
                    gL10nData = dict.locales[lang];
                    break;
                  } else if (anyCaseLang === defaultLocale) {
                    gL10nData = dict.locales[defaultLocale];
                  }
                }
              }
              callback();
            } else {
              console.log('no resource to load, early way out');
            }
            gReadyState = 'complete';
            return;
          }
          var onResourceLoaded = null;
          var gResourceCount = 0;
          onResourceLoaded = function () {
            gResourceCount++;
            if (gResourceCount >= langCount) {
              callback();
              gReadyState = 'complete';
            }
          };
          function L10nResourceLink(link) {
            var href = link.href;
            this.load = function (lang, callback) {
              parseResource(href, lang, callback, function () {
                console.warn(href + ' not found.');
                console.warn('"' + lang + '" resource not found');
                gLanguage = '';
                callback();
              });
            };
          }
          for (var i = 0; i < langCount; i++) {
            var resource = new L10nResourceLink(langLinks[i]);
            resource.load(lang, onResourceLoaded);
          }
        }
        function clear() {
          gL10nData = {};
          gTextData = '';
          gLanguage = '';
        }
        function getPluralRules(lang) {
          var locales2rules = {
            'af': 3,
            'ak': 4,
            'am': 4,
            'ar': 1,
            'asa': 3,
            'az': 0,
            'be': 11,
            'bem': 3,
            'bez': 3,
            'bg': 3,
            'bh': 4,
            'bm': 0,
            'bn': 3,
            'bo': 0,
            'br': 20,
            'brx': 3,
            'bs': 11,
            'ca': 3,
            'cgg': 3,
            'chr': 3,
            'cs': 12,
            'cy': 17,
            'da': 3,
            'de': 3,
            'dv': 3,
            'dz': 0,
            'ee': 3,
            'el': 3,
            'en': 3,
            'eo': 3,
            'es': 3,
            'et': 3,
            'eu': 3,
            'fa': 0,
            'ff': 5,
            'fi': 3,
            'fil': 4,
            'fo': 3,
            'fr': 5,
            'fur': 3,
            'fy': 3,
            'ga': 8,
            'gd': 24,
            'gl': 3,
            'gsw': 3,
            'gu': 3,
            'guw': 4,
            'gv': 23,
            'ha': 3,
            'haw': 3,
            'he': 2,
            'hi': 4,
            'hr': 11,
            'hu': 0,
            'id': 0,
            'ig': 0,
            'ii': 0,
            'is': 3,
            'it': 3,
            'iu': 7,
            'ja': 0,
            'jmc': 3,
            'jv': 0,
            'ka': 0,
            'kab': 5,
            'kaj': 3,
            'kcg': 3,
            'kde': 0,
            'kea': 0,
            'kk': 3,
            'kl': 3,
            'km': 0,
            'kn': 0,
            'ko': 0,
            'ksb': 3,
            'ksh': 21,
            'ku': 3,
            'kw': 7,
            'lag': 18,
            'lb': 3,
            'lg': 3,
            'ln': 4,
            'lo': 0,
            'lt': 10,
            'lv': 6,
            'mas': 3,
            'mg': 4,
            'mk': 16,
            'ml': 3,
            'mn': 3,
            'mo': 9,
            'mr': 3,
            'ms': 0,
            'mt': 15,
            'my': 0,
            'nah': 3,
            'naq': 7,
            'nb': 3,
            'nd': 3,
            'ne': 3,
            'nl': 3,
            'nn': 3,
            'no': 3,
            'nr': 3,
            'nso': 4,
            'ny': 3,
            'nyn': 3,
            'om': 3,
            'or': 3,
            'pa': 3,
            'pap': 3,
            'pl': 13,
            'ps': 3,
            'pt': 3,
            'rm': 3,
            'ro': 9,
            'rof': 3,
            'ru': 11,
            'rwk': 3,
            'sah': 0,
            'saq': 3,
            'se': 7,
            'seh': 3,
            'ses': 0,
            'sg': 0,
            'sh': 11,
            'shi': 19,
            'sk': 12,
            'sl': 14,
            'sma': 7,
            'smi': 7,
            'smj': 7,
            'smn': 7,
            'sms': 7,
            'sn': 3,
            'so': 3,
            'sq': 3,
            'sr': 11,
            'ss': 3,
            'ssy': 3,
            'st': 3,
            'sv': 3,
            'sw': 3,
            'syr': 3,
            'ta': 3,
            'te': 3,
            'teo': 3,
            'th': 0,
            'ti': 4,
            'tig': 3,
            'tk': 3,
            'tl': 4,
            'tn': 3,
            'to': 0,
            'tr': 0,
            'ts': 3,
            'tzm': 22,
            'uk': 11,
            'ur': 3,
            've': 3,
            'vi': 0,
            'vun': 3,
            'wa': 4,
            'wae': 3,
            'wo': 0,
            'xh': 3,
            'xog': 3,
            'yo': 0,
            'zh': 0,
            'zu': 3
          };
          function isIn(n, list) {
            return list.indexOf(n) !== -1;
          }
          function isBetween(n, start, end) {
            return start <= n && n <= end;
          }
          var pluralRules = {
            '0': function (n) {
              return 'other';
            },
            '1': function (n) {
              if (isBetween(n % 100, 3, 10)) return 'few';
              if (n === 0) return 'zero';
              if (isBetween(n % 100, 11, 99)) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '2': function (n) {
              if (n !== 0 && n % 10 === 0) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '3': function (n) {
              if (n == 1) return 'one';
              return 'other';
            },
            '4': function (n) {
              if (isBetween(n, 0, 1)) return 'one';
              return 'other';
            },
            '5': function (n) {
              if (isBetween(n, 0, 2) && n != 2) return 'one';
              return 'other';
            },
            '6': function (n) {
              if (n === 0) return 'zero';
              if (n % 10 == 1 && n % 100 != 11) return 'one';
              return 'other';
            },
            '7': function (n) {
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '8': function (n) {
              if (isBetween(n, 3, 6)) return 'few';
              if (isBetween(n, 7, 10)) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '9': function (n) {
              if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) return 'few';
              if (n == 1) return 'one';
              return 'other';
            },
            '10': function (n) {
              if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) return 'few';
              if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) return 'one';
              return 'other';
            },
            '11': function (n) {
              if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
              if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) return 'many';
              if (n % 10 == 1 && n % 100 != 11) return 'one';
              return 'other';
            },
            '12': function (n) {
              if (isBetween(n, 2, 4)) return 'few';
              if (n == 1) return 'one';
              return 'other';
            },
            '13': function (n) {
              if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
              if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) return 'many';
              if (n == 1) return 'one';
              return 'other';
            },
            '14': function (n) {
              if (isBetween(n % 100, 3, 4)) return 'few';
              if (n % 100 == 2) return 'two';
              if (n % 100 == 1) return 'one';
              return 'other';
            },
            '15': function (n) {
              if (n === 0 || isBetween(n % 100, 2, 10)) return 'few';
              if (isBetween(n % 100, 11, 19)) return 'many';
              if (n == 1) return 'one';
              return 'other';
            },
            '16': function (n) {
              if (n % 10 == 1 && n != 11) return 'one';
              return 'other';
            },
            '17': function (n) {
              if (n == 3) return 'few';
              if (n === 0) return 'zero';
              if (n == 6) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '18': function (n) {
              if (n === 0) return 'zero';
              if (isBetween(n, 0, 2) && n !== 0 && n != 2) return 'one';
              return 'other';
            },
            '19': function (n) {
              if (isBetween(n, 2, 10)) return 'few';
              if (isBetween(n, 0, 1)) return 'one';
              return 'other';
            },
            '20': function (n) {
              if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) return 'few';
              if (n % 1000000 === 0 && n !== 0) return 'many';
              if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) return 'two';
              if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) return 'one';
              return 'other';
            },
            '21': function (n) {
              if (n === 0) return 'zero';
              if (n == 1) return 'one';
              return 'other';
            },
            '22': function (n) {
              if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) return 'one';
              return 'other';
            },
            '23': function (n) {
              if (isBetween(n % 10, 1, 2) || n % 20 === 0) return 'one';
              return 'other';
            },
            '24': function (n) {
              if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) return 'few';
              if (isIn(n, [2, 12])) return 'two';
              if (isIn(n, [1, 11])) return 'one';
              return 'other';
            }
          };
          var index = locales2rules[lang.replace(/-.*$/, '')];
          if (!(index in pluralRules)) {
            console.warn('plural form unknown for [' + lang + ']');
            return function () {
              return 'other';
            };
          }
          return pluralRules[index];
        }
        gMacros.plural = function (str, param, key, prop) {
          var n = parseFloat(param);
          if (isNaN(n)) return str;
          if (prop != gTextProp) return str;
          if (!gMacros._pluralRules) {
            gMacros._pluralRules = getPluralRules(gLanguage);
          }
          var index = '[' + gMacros._pluralRules(n) + ']';
          if (n === 0 && key + '[zero]' in gL10nData) {
            str = gL10nData[key + '[zero]'][prop];
          } else if (n == 1 && key + '[one]' in gL10nData) {
            str = gL10nData[key + '[one]'][prop];
          } else if (n == 2 && key + '[two]' in gL10nData) {
            str = gL10nData[key + '[two]'][prop];
          } else if (key + index in gL10nData) {
            str = gL10nData[key + index][prop];
          } else if (key + '[other]' in gL10nData) {
            str = gL10nData[key + '[other]'][prop];
          }
          return str;
        };
        function getL10nData(key, args, fallback) {
          var data = gL10nData[key];
          if (!data) {
            console.warn('#' + key + ' is undefined.');
            if (!fallback) {
              return null;
            }
            data = fallback;
          }
          var rv = {};
          for (var prop in data) {
            var str = data[prop];
            str = substIndexes(str, args, key, prop);
            str = substArguments(str, args, key);
            rv[prop] = str;
          }
          return rv;
        }
        function substIndexes(str, args, key, prop) {
          var reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
          var reMatch = reIndex.exec(str);
          if (!reMatch || !reMatch.length) return str;
          var macroName = reMatch[1];
          var paramName = reMatch[2];
          var param;
          if (args && paramName in args) {
            param = args[paramName];
          } else if (paramName in gL10nData) {
            param = gL10nData[paramName];
          }
          if (macroName in gMacros) {
            var macro = gMacros[macroName];
            str = macro(str, param, key, prop);
          }
          return str;
        }
        function substArguments(str, args, key) {
          var reArgs = /\{\{\s*(.+?)\s*\}\}/g;
          return str.replace(reArgs, function (matched_text, arg) {
            if (args && arg in args) {
              return args[arg];
            }
            if (arg in gL10nData) {
              return gL10nData[arg];
            }
            console.log('argument {{' + arg + '}} for #' + key + ' is undefined.');
            return matched_text;
          });
        }
        function translateElement(element) {
          var l10n = getL10nAttributes(element);
          if (!l10n.id) return;
          var data = getL10nData(l10n.id, l10n.args);
          if (!data) {
            console.warn('#' + l10n.id + ' is undefined.');
            return;
          }
          if (data[gTextProp]) {
            if (getChildElementCount(element) === 0) {
              element[gTextProp] = data[gTextProp];
            } else {
              var children = element.childNodes;
              var found = false;
              for (var i = 0, l = children.length; i < l; i++) {
                if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
                  if (found) {
                    children[i].nodeValue = '';
                  } else {
                    children[i].nodeValue = data[gTextProp];
                    found = true;
                  }
                }
              }
              if (!found) {
                var textNode = document.createTextNode(data[gTextProp]);
                element.prepend(textNode);
              }
            }
            delete data[gTextProp];
          }
          for (var k in data) {
            element[k] = data[k];
          }
        }
        function getChildElementCount(element) {
          if (element.children) {
            return element.children.length;
          }
          if (typeof element.childElementCount !== 'undefined') {
            return element.childElementCount;
          }
          var count = 0;
          for (var i = 0; i < element.childNodes.length; i++) {
            count += element.nodeType === 1 ? 1 : 0;
          }
          return count;
        }
        function translateFragment(element) {
          element = element || document.documentElement;
          var children = getTranslatableChildren(element);
          var elementCount = children.length;
          for (var i = 0; i < elementCount; i++) {
            translateElement(children[i]);
          }
          translateElement(element);
        }
        return {
          get: function (key, args, fallbackString) {
            var index = key.lastIndexOf('.');
            var prop = gTextProp;
            if (index > 0) {
              prop = key.substring(index + 1);
              key = key.substring(0, index);
            }
            var fallback;
            if (fallbackString) {
              fallback = {};
              fallback[prop] = fallbackString;
            }
            var data = getL10nData(key, args, fallback);
            if (data && prop in data) {
              return data[prop];
            }
            return '{{' + key + '}}';
          },
          getData: function () {
            return gL10nData;
          },
          getText: function () {
            return gTextData;
          },
          getLanguage: function () {
            return gLanguage;
          },
          setLanguage: function (lang, callback) {
            loadLocale(lang, function () {
              if (callback) callback();
            });
          },
          getDirection: function () {
            var rtlList = ['ar', 'he', 'fa', 'ps', 'ur'];
            var shortCode = gLanguage.split('-', 1)[0];
            return rtlList.indexOf(shortCode) >= 0 ? 'rtl' : 'ltr';
          },
          translate: translateFragment,
          getReadyState: function () {
            return gReadyState;
          },
          ready: function (callback) {
            if (!callback) {
              return;
            } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
              window.setTimeout(function () {
                callback();
              });
            } else if (document.addEventListener) {
              document.addEventListener('localized', function once() {
                document.removeEventListener('localized', once);
                callback();
              });
            }
          }
        };
      }(window, document);

      /***/
    }), ( /* 10 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFFindController = exports.FindState = void 0;
      var _ui_utils = __w_pdfjs_require__(2);
      var _pdf_find_utils = __w_pdfjs_require__(11);
      var _pdfjsLib = __w_pdfjs_require__(4);
      const FindState = {
        FOUND: 0,
        NOT_FOUND: 1,
        WRAPPED: 2,
        PENDING: 3
      };
      exports.FindState = FindState;
      const FIND_TIMEOUT = 250;
      const MATCH_SCROLL_OFFSET_TOP = -50;
      const MATCH_SCROLL_OFFSET_LEFT = -400;
      const CHARACTERS_TO_NORMALIZE = {
        "\u2010": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201A": "'",
        "\u201B": "'",
        "\u201C": '"',
        "\u201D": '"',
        "\u201E": '"',
        "\u201F": '"',
        "\u00BC": "1/4",
        "\u00BD": "1/2",
        "\u00BE": "3/4"
      };
      const DIACRITICS_EXCEPTION = new Set([0x3099, 0x309a, 0x094d, 0x09cd, 0x0a4d, 0x0acd, 0x0b4d, 0x0bcd, 0x0c4d, 0x0ccd, 0x0d3b, 0x0d3c, 0x0d4d, 0x0dca, 0x0e3a, 0x0eba, 0x0f84, 0x1039, 0x103a, 0x1714, 0x1734, 0x17d2, 0x1a60, 0x1b44, 0x1baa, 0x1bab, 0x1bf2, 0x1bf3, 0x2d7f, 0xa806, 0xa82c, 0xa8c4, 0xa953, 0xa9c0, 0xaaf6, 0xabed, 0x0c56, 0x0f71, 0x0f72, 0x0f7a, 0x0f7b, 0x0f7c, 0x0f7d, 0x0f80, 0x0f74]);
      let DIACRITICS_EXCEPTION_STR;
      const DIACRITICS_REG_EXP = /\p{M}+/gu;
      const SPECIAL_CHARS_REG_EXP = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu;
      const NOT_DIACRITIC_FROM_END_REG_EXP = /([^\p{M}])\p{M}*$/u;
      const NOT_DIACRITIC_FROM_START_REG_EXP = /^\p{M}*([^\p{M}])/u;
      const SYLLABLES_REG_EXP = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g;
      const SYLLABLES_LENGTHS = new Map();
      const FIRST_CHAR_SYLLABLES_REG_EXP = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]";
      const NFKC_CHARS_TO_NORMALIZE = new Map();
      let noSyllablesRegExp = null;
      let withSyllablesRegExp = null;
      function normalize(text) {
        const syllablePositions = [];
        let m;
        while ((m = SYLLABLES_REG_EXP.exec(text)) !== null) {
          let {
            index
          } = m;
          for (const char of m[0]) {
            let len = SYLLABLES_LENGTHS.get(char);
            if (!len) {
              len = char.normalize("NFD").length;
              SYLLABLES_LENGTHS.set(char, len);
            }
            syllablePositions.push([len, index++]);
          }
        }
        let normalizationRegex;
        if (syllablePositions.length === 0 && noSyllablesRegExp) {
          normalizationRegex = noSyllablesRegExp;
        } else if (syllablePositions.length > 0 && withSyllablesRegExp) {
          normalizationRegex = withSyllablesRegExp;
        } else {
          const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join("");
          const toNormalizeWithNFKC = (0, _pdf_find_utils.getNormalizeWithNFKC)();
          const CJK = "(?:\\p{Ideographic}|[\u3040-\u30FF])";
          const HKDiacritics = "(?:\u3099|\u309A)";
          const regexp = `([${replace}])|([${toNormalizeWithNFKC}])|(${HKDiacritics}\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|(${CJK}\\n)|(\\n)`;
          if (syllablePositions.length === 0) {
            normalizationRegex = noSyllablesRegExp = new RegExp(regexp + "|(\\u0000)", "gum");
          } else {
            normalizationRegex = withSyllablesRegExp = new RegExp(regexp + `|(${FIRST_CHAR_SYLLABLES_REG_EXP})`, "gum");
          }
        }
        const rawDiacriticsPositions = [];
        while ((m = DIACRITICS_REG_EXP.exec(text)) !== null) {
          rawDiacriticsPositions.push([m[0].length, m.index]);
        }
        let normalized = text.normalize("NFD");
        const positions = [[0, 0]];
        let rawDiacriticsIndex = 0;
        let syllableIndex = 0;
        let shift = 0;
        let shiftOrigin = 0;
        let eol = 0;
        let hasDiacritics = false;
        normalized = normalized.replace(normalizationRegex, (match, p1, p2, p3, p4, p5, p6, p7, p8, i) => {
          i -= shiftOrigin;
          if (p1) {
            const replacement = CHARACTERS_TO_NORMALIZE[p1];
            const jj = replacement.length;
            for (let j = 1; j < jj; j++) {
              positions.push([i - shift + j, shift - j]);
            }
            shift -= jj - 1;
            return replacement;
          }
          if (p2) {
            let replacement = NFKC_CHARS_TO_NORMALIZE.get(p2);
            if (!replacement) {
              replacement = p2.normalize("NFKC");
              NFKC_CHARS_TO_NORMALIZE.set(p2, replacement);
            }
            const jj = replacement.length;
            for (let j = 1; j < jj; j++) {
              positions.push([i - shift + j, shift - j]);
            }
            shift -= jj - 1;
            return replacement;
          }
          if (p3) {
            hasDiacritics = true;
            if (i + eol === rawDiacriticsPositions[rawDiacriticsIndex]?.[1]) {
              ++rawDiacriticsIndex;
            } else {
              positions.push([i - 1 - shift + 1, shift - 1]);
              shift -= 1;
              shiftOrigin += 1;
            }
            positions.push([i - shift + 1, shift]);
            shiftOrigin += 1;
            eol += 1;
            return p3.charAt(0);
          }
          if (p4) {
            const hasTrailingDashEOL = p4.endsWith("\n");
            const len = hasTrailingDashEOL ? p4.length - 2 : p4.length;
            hasDiacritics = true;
            let jj = len;
            if (i + eol === rawDiacriticsPositions[rawDiacriticsIndex]?.[1]) {
              jj -= rawDiacriticsPositions[rawDiacriticsIndex][0];
              ++rawDiacriticsIndex;
            }
            for (let j = 1; j <= jj; j++) {
              positions.push([i - 1 - shift + j, shift - j]);
            }
            shift -= jj;
            shiftOrigin += jj;
            if (hasTrailingDashEOL) {
              i += len - 1;
              positions.push([i - shift + 1, 1 + shift]);
              shift += 1;
              shiftOrigin += 1;
              eol += 1;
              return p4.slice(0, len);
            }
            return p4;
          }
          if (p5) {
            const len = p5.length - 2;
            positions.push([i - shift + len, 1 + shift]);
            shift += 1;
            shiftOrigin += 1;
            eol += 1;
            return p5.slice(0, -2);
          }
          if (p6) {
            const len = p6.length - 1;
            positions.push([i - shift + len, shift]);
            shiftOrigin += 1;
            eol += 1;
            return p6.slice(0, -1);
          }
          if (p7) {
            positions.push([i - shift + 1, shift - 1]);
            shift -= 1;
            shiftOrigin += 1;
            eol += 1;
            return " ";
          }
          if (i + eol === syllablePositions[syllableIndex]?.[1]) {
            const newCharLen = syllablePositions[syllableIndex][0] - 1;
            ++syllableIndex;
            for (let j = 1; j <= newCharLen; j++) {
              positions.push([i - (shift - j), shift - j]);
            }
            shift -= newCharLen;
            shiftOrigin += newCharLen;
          }
          return p8;
        });
        positions.push([normalized.length, shift]);
        return [normalized, positions, hasDiacritics];
      }
      function getOriginalIndex(diffs, pos, len) {
        if (!diffs) {
          return [pos, len];
        }
        const start = pos;
        const end = pos + len - 1;
        let i = (0, _ui_utils.binarySearchFirstItem)(diffs, x => x[0] >= start);
        if (diffs[i][0] > start) {
          --i;
        }
        let j = (0, _ui_utils.binarySearchFirstItem)(diffs, x => x[0] >= end, i);
        if (diffs[j][0] > end) {
          --j;
        }
        const oldStart = start + diffs[i][1];
        const oldEnd = end + diffs[j][1];
        const oldLen = oldEnd + 1 - oldStart;
        return [oldStart, oldLen];
      }
      var _state = /*#__PURE__*/_classPrivateFieldLooseKey("state");
      var _updateMatchesCountOnProgress = /*#__PURE__*/_classPrivateFieldLooseKey("updateMatchesCountOnProgress");
      var _visitedPagesCount = /*#__PURE__*/_classPrivateFieldLooseKey("visitedPagesCount");
      var _onFind = /*#__PURE__*/_classPrivateFieldLooseKey("onFind");
      var _reset = /*#__PURE__*/_classPrivateFieldLooseKey("reset");
      var _query = /*#__PURE__*/_classPrivateFieldLooseKey("query");
      var _shouldDirtyMatch = /*#__PURE__*/_classPrivateFieldLooseKey("shouldDirtyMatch");
      var _isEntireWord = /*#__PURE__*/_classPrivateFieldLooseKey("isEntireWord");
      var _calculateRegExpMatch = /*#__PURE__*/_classPrivateFieldLooseKey("calculateRegExpMatch");
      var _convertToRegExpString = /*#__PURE__*/_classPrivateFieldLooseKey("convertToRegExpString");
      var _calculateMatch = /*#__PURE__*/_classPrivateFieldLooseKey("calculateMatch");
      var _extractText = /*#__PURE__*/_classPrivateFieldLooseKey("extractText");
      var _updatePage = /*#__PURE__*/_classPrivateFieldLooseKey("updatePage");
      var _updateAllPages = /*#__PURE__*/_classPrivateFieldLooseKey("updateAllPages");
      var _nextMatch = /*#__PURE__*/_classPrivateFieldLooseKey("nextMatch");
      var _matchesReady = /*#__PURE__*/_classPrivateFieldLooseKey("matchesReady");
      var _nextPageMatch = /*#__PURE__*/_classPrivateFieldLooseKey("nextPageMatch");
      var _advanceOffsetPage = /*#__PURE__*/_classPrivateFieldLooseKey("advanceOffsetPage");
      var _updateMatch = /*#__PURE__*/_classPrivateFieldLooseKey("updateMatch");
      var _onFindBarClose = /*#__PURE__*/_classPrivateFieldLooseKey("onFindBarClose");
      var _requestMatchesCount = /*#__PURE__*/_classPrivateFieldLooseKey("requestMatchesCount");
      var _updateUIResultsCount = /*#__PURE__*/_classPrivateFieldLooseKey("updateUIResultsCount");
      var _updateUIState = /*#__PURE__*/_classPrivateFieldLooseKey("updateUIState");
      class PDFFindController {
        constructor({
          linkService: _linkService,
          eventBus,
          updateMatchesCountOnProgress = true
        }) {
          Object.defineProperty(this, _updateUIState, {
            value: _updateUIState2
          });
          Object.defineProperty(this, _updateUIResultsCount, {
            value: _updateUIResultsCount2
          });
          Object.defineProperty(this, _requestMatchesCount, {
            value: _requestMatchesCount2
          });
          Object.defineProperty(this, _onFindBarClose, {
            value: _onFindBarClose2
          });
          Object.defineProperty(this, _updateMatch, {
            value: _updateMatch2
          });
          Object.defineProperty(this, _advanceOffsetPage, {
            value: _advanceOffsetPage2
          });
          Object.defineProperty(this, _nextPageMatch, {
            value: _nextPageMatch2
          });
          Object.defineProperty(this, _matchesReady, {
            value: _matchesReady2
          });
          Object.defineProperty(this, _nextMatch, {
            value: _nextMatch2
          });
          Object.defineProperty(this, _updateAllPages, {
            value: _updateAllPages2
          });
          Object.defineProperty(this, _updatePage, {
            value: _updatePage2
          });
          Object.defineProperty(this, _extractText, {
            value: _extractText2
          });
          Object.defineProperty(this, _calculateMatch, {
            value: _calculateMatch2
          });
          Object.defineProperty(this, _convertToRegExpString, {
            value: _convertToRegExpString2
          });
          Object.defineProperty(this, _calculateRegExpMatch, {
            value: _calculateRegExpMatch2
          });
          Object.defineProperty(this, _isEntireWord, {
            value: _isEntireWord2
          });
          Object.defineProperty(this, _shouldDirtyMatch, {
            value: _shouldDirtyMatch2
          });
          Object.defineProperty(this, _query, {
            get: _get_query,
            set: void 0
          });
          Object.defineProperty(this, _reset, {
            value: _reset2
          });
          Object.defineProperty(this, _onFind, {
            value: _onFind2
          });
          Object.defineProperty(this, _state, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _updateMatchesCountOnProgress, {
            writable: true,
            value: true
          });
          Object.defineProperty(this, _visitedPagesCount, {
            writable: true,
            value: 0
          });
          this._linkService = _linkService;
          this._eventBus = eventBus;
          _classPrivateFieldLooseBase(this, _updateMatchesCountOnProgress)[_updateMatchesCountOnProgress] = updateMatchesCountOnProgress;
          _classPrivateFieldLooseBase(this, _reset)[_reset]();
          eventBus._on("find", _classPrivateFieldLooseBase(this, _onFind)[_onFind].bind(this));
          eventBus._on("findbarclose", _classPrivateFieldLooseBase(this, _onFindBarClose)[_onFindBarClose].bind(this));
        }
        get highlightMatches() {
          return this._highlightMatches;
        }
        get pageMatches() {
          return this._pageMatches;
        }
        get pageMatchesLength() {
          return this._pageMatchesLength;
        }
        get selected() {
          return this._selected;
        }
        get state() {
          return _classPrivateFieldLooseBase(this, _state)[_state];
        }
        setDocument(pdfDocument) {
          if (this._pdfDocument) {
            _classPrivateFieldLooseBase(this, _reset)[_reset]();
          }
          if (!pdfDocument) {
            return;
          }
          this._pdfDocument = pdfDocument;
          this._firstPageCapability.resolve();
        }
        scrollMatchIntoView({
          element = null,
          selectedLeft = 0,
          pageIndex = -1,
          matchIndex = -1
        }) {
          if (!this._scrollMatches || !element) {
            return;
          } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
            return;
          } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
            return;
          }
          this._scrollMatches = false;
          const spot = {
            top: MATCH_SCROLL_OFFSET_TOP,
            left: selectedLeft + MATCH_SCROLL_OFFSET_LEFT
          };
          (0, _ui_utils.scrollIntoView)(element, spot, true);
        }
      }
      function _onFind2(state) {
        if (!state) {
          return;
        }
        if (state.phraseSearch === false) {
          console.error("The `phraseSearch`-parameter was removed, please provide " + "an Array of strings in the `query`-parameter instead.");
          if (typeof state.query === "string") {
            state.query = state.query.match(/\S+/g);
          }
        }
        const pdfDocument = this._pdfDocument;
        const {
          type
        } = state;
        if (_classPrivateFieldLooseBase(this, _state)[_state] === null || _classPrivateFieldLooseBase(this, _shouldDirtyMatch)[_shouldDirtyMatch](state)) {
          this._dirtyMatch = true;
        }
        _classPrivateFieldLooseBase(this, _state)[_state] = state;
        if (type !== "highlightallchange") {
          _classPrivateFieldLooseBase(this, _updateUIState)[_updateUIState](FindState.PENDING);
        }
        this._firstPageCapability.promise.then(() => {
          if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
            return;
          }
          _classPrivateFieldLooseBase(this, _extractText)[_extractText]();
          const findbarClosed = !this._highlightMatches;
          const pendingTimeout = !!this._findTimeout;
          if (this._findTimeout) {
            clearTimeout(this._findTimeout);
            this._findTimeout = null;
          }
          if (!type) {
            this._findTimeout = setTimeout(() => {
              _classPrivateFieldLooseBase(this, _nextMatch)[_nextMatch]();
              this._findTimeout = null;
            }, FIND_TIMEOUT);
          } else if (this._dirtyMatch) {
            _classPrivateFieldLooseBase(this, _nextMatch)[_nextMatch]();
          } else if (type === "again") {
            _classPrivateFieldLooseBase(this, _nextMatch)[_nextMatch]();
            if (findbarClosed && _classPrivateFieldLooseBase(this, _state)[_state].highlightAll) {
              _classPrivateFieldLooseBase(this, _updateAllPages)[_updateAllPages]();
            }
          } else if (type === "highlightallchange") {
            if (pendingTimeout) {
              _classPrivateFieldLooseBase(this, _nextMatch)[_nextMatch]();
            } else {
              this._highlightMatches = true;
            }
            _classPrivateFieldLooseBase(this, _updateAllPages)[_updateAllPages]();
          } else {
            _classPrivateFieldLooseBase(this, _nextMatch)[_nextMatch]();
          }
        });
      }
      function _reset2() {
        this._highlightMatches = false;
        this._scrollMatches = false;
        this._pdfDocument = null;
        this._pageMatches = [];
        this._pageMatchesLength = [];
        _classPrivateFieldLooseBase(this, _visitedPagesCount)[_visitedPagesCount] = 0;
        _classPrivateFieldLooseBase(this, _state)[_state] = null;
        this._selected = {
          pageIdx: -1,
          matchIdx: -1
        };
        this._offset = {
          pageIdx: null,
          matchIdx: null,
          wrapped: false
        };
        this._extractTextPromises = [];
        this._pageContents = [];
        this._pageDiffs = [];
        this._hasDiacritics = [];
        this._matchesCountTotal = 0;
        this._pagesToSearch = null;
        this._pendingFindMatches = new Set();
        this._resumePageIdx = null;
        this._dirtyMatch = false;
        clearTimeout(this._findTimeout);
        this._findTimeout = null;
        this._firstPageCapability = new _pdfjsLib.PromiseCapability();
      }
      function _get_query() {
        const {
          query
        } = _classPrivateFieldLooseBase(this, _state)[_state];
        if (typeof query === "string") {
          if (query !== this._rawQuery) {
            this._rawQuery = query;
            [this._normalizedQuery] = normalize(query);
          }
          return this._normalizedQuery;
        }
        return (query || []).filter(q => !!q).map(q => normalize(q)[0]);
      }
      function _shouldDirtyMatch2(state) {
        const newQuery = state.query,
          prevQuery = _classPrivateFieldLooseBase(this, _state)[_state].query;
        const newType = typeof newQuery,
          prevType = typeof prevQuery;
        if (newType !== prevType) {
          return true;
        }
        if (newType === "string") {
          if (newQuery !== prevQuery) {
            return true;
          }
        } else {
          if (JSON.stringify(newQuery) !== JSON.stringify(prevQuery)) {
            return true;
          }
        }
        switch (state.type) {
          case "again":
            const pageNumber = this._selected.pageIdx + 1;
            const linkService = this._linkService;
            if (pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !linkService.isPageVisible(pageNumber)) {
              return true;
            }
            return false;
          case "highlightallchange":
            return false;
        }
        return true;
      }
      function _isEntireWord2(content, startIdx, length) {
        let match = content.slice(0, startIdx).match(NOT_DIACRITIC_FROM_END_REG_EXP);
        if (match) {
          const first = content.charCodeAt(startIdx);
          const limit = match[1].charCodeAt(0);
          if ((0, _pdf_find_utils.getCharacterType)(first) === (0, _pdf_find_utils.getCharacterType)(limit)) {
            return false;
          }
        }
        match = content.slice(startIdx + length).match(NOT_DIACRITIC_FROM_START_REG_EXP);
        if (match) {
          const last = content.charCodeAt(startIdx + length - 1);
          const limit = match[1].charCodeAt(0);
          if ((0, _pdf_find_utils.getCharacterType)(last) === (0, _pdf_find_utils.getCharacterType)(limit)) {
            return false;
          }
        }
        return true;
      }
      function _calculateRegExpMatch2(query, entireWord, pageIndex, pageContent) {
        const matches = this._pageMatches[pageIndex] = [];
        const matchesLength = this._pageMatchesLength[pageIndex] = [];
        if (!query) {
          return;
        }
        const diffs = this._pageDiffs[pageIndex];
        let match;
        while ((match = query.exec(pageContent)) !== null) {
          if (entireWord && !_classPrivateFieldLooseBase(this, _isEntireWord)[_isEntireWord](pageContent, match.index, match[0].length)) {
            continue;
          }
          const [matchPos, matchLen] = getOriginalIndex(diffs, match.index, match[0].length);
          if (matchLen) {
            matches.push(matchPos);
            matchesLength.push(matchLen);
          }
        }
      }
      function _convertToRegExpString2(query, hasDiacritics) {
        const {
          matchDiacritics
        } = _classPrivateFieldLooseBase(this, _state)[_state];
        let isUnicode = false;
        query = query.replaceAll(SPECIAL_CHARS_REG_EXP, (match, p1, p2, p3, p4, p5) => {
          if (p1) {
            return `[ ]*\\${p1}[ ]*`;
          }
          if (p2) {
            return `[ ]*${p2}[ ]*`;
          }
          if (p3) {
            return "[ ]+";
          }
          if (matchDiacritics) {
            return p4 || p5;
          }
          if (p4) {
            return DIACRITICS_EXCEPTION.has(p4.charCodeAt(0)) ? p4 : "";
          }
          if (hasDiacritics) {
            isUnicode = true;
            return `${p5}\\p{M}*`;
          }
          return p5;
        });
        const trailingSpaces = "[ ]*";
        if (query.endsWith(trailingSpaces)) {
          query = query.slice(0, query.length - trailingSpaces.length);
        }
        if (matchDiacritics) {
          if (hasDiacritics) {
            DIACRITICS_EXCEPTION_STR ||= String.fromCharCode(...DIACRITICS_EXCEPTION);
            isUnicode = true;
            query = `${query}(?=[${DIACRITICS_EXCEPTION_STR}]|[^\\p{M}]|$)`;
          }
        }
        return [isUnicode, query];
      }
      function _calculateMatch2(pageIndex) {
        let query = _classPrivateFieldLooseBase(this, _query)[_query];
        if (query.length === 0) {
          return;
        }
        const {
          caseSensitive,
          entireWord
        } = _classPrivateFieldLooseBase(this, _state)[_state];
        const pageContent = this._pageContents[pageIndex];
        const hasDiacritics = this._hasDiacritics[pageIndex];
        let isUnicode = false;
        if (typeof query === "string") {
          [isUnicode, query] = _classPrivateFieldLooseBase(this, _convertToRegExpString)[_convertToRegExpString](query, hasDiacritics);
        } else {
          query = query.sort().reverse().map(q => {
            const [isUnicodePart, queryPart] = _classPrivateFieldLooseBase(this, _convertToRegExpString)[_convertToRegExpString](q, hasDiacritics);
            isUnicode ||= isUnicodePart;
            return `(${queryPart})`;
          }).join("|");
        }
        const flags = `g${isUnicode ? "u" : ""}${caseSensitive ? "" : "i"}`;
        query = query ? new RegExp(query, flags) : null;
        _classPrivateFieldLooseBase(this, _calculateRegExpMatch)[_calculateRegExpMatch](query, entireWord, pageIndex, pageContent);
        if (_classPrivateFieldLooseBase(this, _state)[_state].highlightAll) {
          _classPrivateFieldLooseBase(this, _updatePage)[_updatePage](pageIndex);
        }
        if (this._resumePageIdx === pageIndex) {
          this._resumePageIdx = null;
          _classPrivateFieldLooseBase(this, _nextPageMatch)[_nextPageMatch]();
        }
        const pageMatchesCount = this._pageMatches[pageIndex].length;
        this._matchesCountTotal += pageMatchesCount;
        if (_classPrivateFieldLooseBase(this, _updateMatchesCountOnProgress)[_updateMatchesCountOnProgress]) {
          if (pageMatchesCount > 0) {
            _classPrivateFieldLooseBase(this, _updateUIResultsCount)[_updateUIResultsCount]();
          }
        } else if (++_classPrivateFieldLooseBase(this, _visitedPagesCount)[_visitedPagesCount] === this._linkService.pagesCount) {
          _classPrivateFieldLooseBase(this, _updateUIResultsCount)[_updateUIResultsCount]();
        }
      }
      function _extractText2() {
        if (this._extractTextPromises.length > 0) {
          return;
        }
        let promise = Promise.resolve();
        const textOptions = {
          disableNormalization: true
        };
        for (let i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
          const extractTextCapability = new _pdfjsLib.PromiseCapability();
          this._extractTextPromises[i] = extractTextCapability.promise;
          promise = promise.then(() => {
            return this._pdfDocument.getPage(i + 1).then(pdfPage => {
              return pdfPage.getTextContent(textOptions);
            }).then(textContent => {
              const strBuf = [];
              for (const textItem of textContent.items) {
                strBuf.push(textItem.str);
                if (textItem.hasEOL) {
                  strBuf.push("\n");
                }
              }
              [this._pageContents[i], this._pageDiffs[i], this._hasDiacritics[i]] = normalize(strBuf.join(""));
              extractTextCapability.resolve();
            }, reason => {
              console.error(`Unable to get text content for page ${i + 1}`, reason);
              this._pageContents[i] = "";
              this._pageDiffs[i] = null;
              this._hasDiacritics[i] = false;
              extractTextCapability.resolve();
            });
          });
        }
      }
      function _updatePage2(index) {
        if (this._scrollMatches && this._selected.pageIdx === index) {
          this._linkService.page = index + 1;
        }
        this._eventBus.dispatch("updatetextlayermatches", {
          source: this,
          pageIndex: index
        });
      }
      function _updateAllPages2() {
        this._eventBus.dispatch("updatetextlayermatches", {
          source: this,
          pageIndex: -1
        });
      }
      function _nextMatch2() {
        const previous = _classPrivateFieldLooseBase(this, _state)[_state].findPrevious;
        const currentPageIndex = this._linkService.page - 1;
        const numPages = this._linkService.pagesCount;
        this._highlightMatches = true;
        if (this._dirtyMatch) {
          this._dirtyMatch = false;
          this._selected.pageIdx = this._selected.matchIdx = -1;
          this._offset.pageIdx = currentPageIndex;
          this._offset.matchIdx = null;
          this._offset.wrapped = false;
          this._resumePageIdx = null;
          this._pageMatches.length = 0;
          this._pageMatchesLength.length = 0;
          _classPrivateFieldLooseBase(this, _visitedPagesCount)[_visitedPagesCount] = 0;
          this._matchesCountTotal = 0;
          _classPrivateFieldLooseBase(this, _updateAllPages)[_updateAllPages]();
          for (let i = 0; i < numPages; i++) {
            if (this._pendingFindMatches.has(i)) {
              continue;
            }
            this._pendingFindMatches.add(i);
            this._extractTextPromises[i].then(() => {
              this._pendingFindMatches.delete(i);
              _classPrivateFieldLooseBase(this, _calculateMatch)[_calculateMatch](i);
            });
          }
        }
        const query = _classPrivateFieldLooseBase(this, _query)[_query];
        if (query.length === 0) {
          _classPrivateFieldLooseBase(this, _updateUIState)[_updateUIState](FindState.FOUND);
          return;
        }
        if (this._resumePageIdx) {
          return;
        }
        const offset = this._offset;
        this._pagesToSearch = numPages;
        if (offset.matchIdx !== null) {
          const numPageMatches = this._pageMatches[offset.pageIdx].length;
          if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
            offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
            _classPrivateFieldLooseBase(this, _updateMatch)[_updateMatch](true);
            return;
          }
          _classPrivateFieldLooseBase(this, _advanceOffsetPage)[_advanceOffsetPage](previous);
        }
        _classPrivateFieldLooseBase(this, _nextPageMatch)[_nextPageMatch]();
      }
      function _matchesReady2(matches) {
        const offset = this._offset;
        const numMatches = matches.length;
        const previous = _classPrivateFieldLooseBase(this, _state)[_state].findPrevious;
        if (numMatches) {
          offset.matchIdx = previous ? numMatches - 1 : 0;
          _classPrivateFieldLooseBase(this, _updateMatch)[_updateMatch](true);
          return true;
        }
        _classPrivateFieldLooseBase(this, _advanceOffsetPage)[_advanceOffsetPage](previous);
        if (offset.wrapped) {
          offset.matchIdx = null;
          if (this._pagesToSearch < 0) {
            _classPrivateFieldLooseBase(this, _updateMatch)[_updateMatch](false);
            return true;
          }
        }
        return false;
      }
      function _nextPageMatch2() {
        if (this._resumePageIdx !== null) {
          console.error("There can only be one pending page.");
        }
        let matches = null;
        do {
          const pageIdx = this._offset.pageIdx;
          matches = this._pageMatches[pageIdx];
          if (!matches) {
            this._resumePageIdx = pageIdx;
            break;
          }
        } while (!_classPrivateFieldLooseBase(this, _matchesReady)[_matchesReady](matches));
      }
      function _advanceOffsetPage2(previous) {
        const offset = this._offset;
        const numPages = this._linkService.pagesCount;
        offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
        offset.matchIdx = null;
        this._pagesToSearch--;
        if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
          offset.pageIdx = previous ? numPages - 1 : 0;
          offset.wrapped = true;
        }
      }
      function _updateMatch2(found = false) {
        let state = FindState.NOT_FOUND;
        const wrapped = this._offset.wrapped;
        this._offset.wrapped = false;
        if (found) {
          const previousPage = this._selected.pageIdx;
          this._selected.pageIdx = this._offset.pageIdx;
          this._selected.matchIdx = this._offset.matchIdx;
          state = wrapped ? FindState.WRAPPED : FindState.FOUND;
          if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
            _classPrivateFieldLooseBase(this, _updatePage)[_updatePage](previousPage);
          }
        }
        _classPrivateFieldLooseBase(this, _updateUIState)[_updateUIState](state, _classPrivateFieldLooseBase(this, _state)[_state].findPrevious);
        if (this._selected.pageIdx !== -1) {
          this._scrollMatches = true;
          _classPrivateFieldLooseBase(this, _updatePage)[_updatePage](this._selected.pageIdx);
        }
      }
      function _onFindBarClose2(evt) {
        const pdfDocument = this._pdfDocument;
        this._firstPageCapability.promise.then(() => {
          if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
            return;
          }
          if (this._findTimeout) {
            clearTimeout(this._findTimeout);
            this._findTimeout = null;
          }
          if (this._resumePageIdx) {
            this._resumePageIdx = null;
            this._dirtyMatch = true;
          }
          _classPrivateFieldLooseBase(this, _updateUIState)[_updateUIState](FindState.FOUND);
          this._highlightMatches = false;
          _classPrivateFieldLooseBase(this, _updateAllPages)[_updateAllPages]();
        });
      }
      function _requestMatchesCount2() {
        const {
          pageIdx,
          matchIdx
        } = this._selected;
        let current = 0,
          total = this._matchesCountTotal;
        if (matchIdx !== -1) {
          for (let i = 0; i < pageIdx; i++) {
            current += this._pageMatches[i]?.length || 0;
          }
          current += matchIdx + 1;
        }
        if (current < 1 || current > total) {
          current = total = 0;
        }
        return {
          current,
          total
        };
      }
      function _updateUIResultsCount2() {
        this._eventBus.dispatch("updatefindmatchescount", {
          source: this,
          matchesCount: _classPrivateFieldLooseBase(this, _requestMatchesCount)[_requestMatchesCount]()
        });
      }
      function _updateUIState2(state, previous = false) {
        if (!_classPrivateFieldLooseBase(this, _updateMatchesCountOnProgress)[_updateMatchesCountOnProgress] && (_classPrivateFieldLooseBase(this, _visitedPagesCount)[_visitedPagesCount] !== this._linkService.pagesCount || state === FindState.PENDING)) {
          return;
        }
        this._eventBus.dispatch("updatefindcontrolstate", {
          source: this,
          state,
          previous,
          matchesCount: _classPrivateFieldLooseBase(this, _requestMatchesCount)[_requestMatchesCount](),
          rawQuery: _classPrivateFieldLooseBase(this, _state)[_state]?.query ?? null
        });
      }
      exports.PDFFindController = PDFFindController;

      /***/
    }), ( /* 11 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CharacterType = void 0;
      exports.getCharacterType = getCharacterType;
      exports.getNormalizeWithNFKC = getNormalizeWithNFKC;
      const CharacterType = {
        SPACE: 0,
        ALPHA_LETTER: 1,
        PUNCT: 2,
        HAN_LETTER: 3,
        KATAKANA_LETTER: 4,
        HIRAGANA_LETTER: 5,
        HALFWIDTH_KATAKANA_LETTER: 6,
        THAI_LETTER: 7
      };
      exports.CharacterType = CharacterType;
      function isAlphabeticalScript(charCode) {
        return charCode < 0x2e80;
      }
      function isAscii(charCode) {
        return (charCode & 0xff80) === 0;
      }
      function isAsciiAlpha(charCode) {
        return charCode >= 0x61 && charCode <= 0x7a || charCode >= 0x41 && charCode <= 0x5a;
      }
      function isAsciiDigit(charCode) {
        return charCode >= 0x30 && charCode <= 0x39;
      }
      function isAsciiSpace(charCode) {
        return charCode === 0x20 || charCode === 0x09 || charCode === 0x0d || charCode === 0x0a;
      }
      function isHan(charCode) {
        return charCode >= 0x3400 && charCode <= 0x9fff || charCode >= 0xf900 && charCode <= 0xfaff;
      }
      function isKatakana(charCode) {
        return charCode >= 0x30a0 && charCode <= 0x30ff;
      }
      function isHiragana(charCode) {
        return charCode >= 0x3040 && charCode <= 0x309f;
      }
      function isHalfwidthKatakana(charCode) {
        return charCode >= 0xff60 && charCode <= 0xff9f;
      }
      function isThai(charCode) {
        return (charCode & 0xff80) === 0x0e00;
      }
      function getCharacterType(charCode) {
        if (isAlphabeticalScript(charCode)) {
          if (isAscii(charCode)) {
            if (isAsciiSpace(charCode)) {
              return CharacterType.SPACE;
            } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 0x5f) {
              return CharacterType.ALPHA_LETTER;
            }
            return CharacterType.PUNCT;
          } else if (isThai(charCode)) {
            return CharacterType.THAI_LETTER;
          } else if (charCode === 0xa0) {
            return CharacterType.SPACE;
          }
          return CharacterType.ALPHA_LETTER;
        }
        if (isHan(charCode)) {
          return CharacterType.HAN_LETTER;
        } else if (isKatakana(charCode)) {
          return CharacterType.KATAKANA_LETTER;
        } else if (isHiragana(charCode)) {
          return CharacterType.HIRAGANA_LETTER;
        } else if (isHalfwidthKatakana(charCode)) {
          return CharacterType.HALFWIDTH_KATAKANA_LETTER;
        }
        return CharacterType.ALPHA_LETTER;
      }
      let NormalizeWithNFKC;
      function getNormalizeWithNFKC() {
        NormalizeWithNFKC ||= ` ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦`;
        return NormalizeWithNFKC;
      }

      /***/
    }), ( /* 12 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFHistory = void 0;
      exports.isDestArraysEqual = isDestArraysEqual;
      exports.isDestHashesEqual = isDestHashesEqual;
      var _ui_utils = __w_pdfjs_require__(2);
      var _event_utils = __w_pdfjs_require__(7);
      const HASH_CHANGE_TIMEOUT = 1000;
      const POSITION_UPDATED_THRESHOLD = 50;
      const UPDATE_VIEWAREA_TIMEOUT = 1000;
      function getCurrentHash() {
        return document.location.hash;
      }
      class PDFHistory {
        constructor({
          linkService,
          eventBus
        }) {
          this.linkService = linkService;
          this.eventBus = eventBus;
          this._initialized = false;
          this._fingerprint = "";
          this.reset();
          this._boundEvents = null;
          this.eventBus._on("pagesinit", () => {
            this._isPagesLoaded = false;
            this.eventBus._on("pagesloaded", evt => {
              this._isPagesLoaded = !!evt.pagesCount;
            }, {
              once: true
            });
          });
        }
        initialize({
          fingerprint,
          resetHistory = false,
          updateUrl = false
        }) {
          if (!fingerprint || typeof fingerprint !== "string") {
            console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
            return;
          }
          if (this._initialized) {
            this.reset();
          }
          const reInitialized = this._fingerprint !== "" && this._fingerprint !== fingerprint;
          this._fingerprint = fingerprint;
          this._updateUrl = updateUrl === true;
          this._initialized = true;
          this._bindEvents();
          const state = window.history.state;
          this._popStateInProgress = false;
          this._blockHashChange = 0;
          this._currentHash = getCurrentHash();
          this._numPositionUpdates = 0;
          this._uid = this._maxUid = 0;
          this._destination = null;
          this._position = null;
          if (!this._isValidState(state, true) || resetHistory) {
            const {
              hash,
              page,
              rotation
            } = this._parseCurrentHash(true);
            if (!hash || reInitialized || resetHistory) {
              this._pushOrReplaceState(null, true);
              return;
            }
            this._pushOrReplaceState({
              hash,
              page,
              rotation
            }, true);
            return;
          }
          const destination = state.destination;
          this._updateInternalState(destination, state.uid, true);
          if (destination.rotation !== undefined) {
            this._initialRotation = destination.rotation;
          }
          if (destination.dest) {
            this._initialBookmark = JSON.stringify(destination.dest);
            this._destination.page = null;
          } else if (destination.hash) {
            this._initialBookmark = destination.hash;
          } else if (destination.page) {
            this._initialBookmark = `page=${destination.page}`;
          }
        }
        reset() {
          if (this._initialized) {
            this._pageHide();
            this._initialized = false;
            this._unbindEvents();
          }
          if (this._updateViewareaTimeout) {
            clearTimeout(this._updateViewareaTimeout);
            this._updateViewareaTimeout = null;
          }
          this._initialBookmark = null;
          this._initialRotation = null;
        }
        push({
          namedDest = null,
          explicitDest,
          pageNumber
        }) {
          if (!this._initialized) {
            return;
          }
          if (namedDest && typeof namedDest !== "string") {
            console.error("PDFHistory.push: " + `"${namedDest}" is not a valid namedDest parameter.`);
            return;
          } else if (!Array.isArray(explicitDest)) {
            console.error("PDFHistory.push: " + `"${explicitDest}" is not a valid explicitDest parameter.`);
            return;
          } else if (!this._isValidPage(pageNumber)) {
            if (pageNumber !== null || this._destination) {
              console.error("PDFHistory.push: " + `"${pageNumber}" is not a valid pageNumber parameter.`);
              return;
            }
          }
          const hash = namedDest || JSON.stringify(explicitDest);
          if (!hash) {
            return;
          }
          let forceReplace = false;
          if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
            if (this._destination.page) {
              return;
            }
            forceReplace = true;
          }
          if (this._popStateInProgress && !forceReplace) {
            return;
          }
          this._pushOrReplaceState({
            dest: explicitDest,
            hash,
            page: pageNumber,
            rotation: this.linkService.rotation
          }, forceReplace);
          if (!this._popStateInProgress) {
            this._popStateInProgress = true;
            Promise.resolve().then(() => {
              this._popStateInProgress = false;
            });
          }
        }
        pushPage(pageNumber) {
          if (!this._initialized) {
            return;
          }
          if (!this._isValidPage(pageNumber)) {
            console.error(`PDFHistory.pushPage: "${pageNumber}" is not a valid page number.`);
            return;
          }
          if (this._destination?.page === pageNumber) {
            return;
          }
          if (this._popStateInProgress) {
            return;
          }
          this._pushOrReplaceState({
            dest: null,
            hash: `page=${pageNumber}`,
            page: pageNumber,
            rotation: this.linkService.rotation
          });
          if (!this._popStateInProgress) {
            this._popStateInProgress = true;
            Promise.resolve().then(() => {
              this._popStateInProgress = false;
            });
          }
        }
        pushCurrentPosition() {
          if (!this._initialized || this._popStateInProgress) {
            return;
          }
          this._tryPushCurrentPosition();
        }
        back() {
          if (!this._initialized || this._popStateInProgress) {
            return;
          }
          const state = window.history.state;
          if (this._isValidState(state) && state.uid > 0) {
            window.history.back();
          }
        }
        forward() {
          if (!this._initialized || this._popStateInProgress) {
            return;
          }
          const state = window.history.state;
          if (this._isValidState(state) && state.uid < this._maxUid) {
            window.history.forward();
          }
        }
        get popStateInProgress() {
          return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
        }
        get initialBookmark() {
          return this._initialized ? this._initialBookmark : null;
        }
        get initialRotation() {
          return this._initialized ? this._initialRotation : null;
        }
        _pushOrReplaceState(destination, forceReplace = false) {
          const shouldReplace = forceReplace || !this._destination;
          const newState = {
            fingerprint: this._fingerprint,
            uid: shouldReplace ? this._uid : this._uid + 1,
            destination
          };
          this._updateInternalState(destination, newState.uid);
          let newUrl;
          if (this._updateUrl && destination?.hash) {
            const baseUrl = document.location.href.split("#")[0];
            if (!baseUrl.startsWith("file://")) {
              newUrl = `${baseUrl}#${destination.hash}`;
            }
          }
          if (shouldReplace) {
            window.history.replaceState(newState, "", newUrl);
          } else {
            window.history.pushState(newState, "", newUrl);
          }
        }
        _tryPushCurrentPosition(temporary = false) {
          if (!this._position) {
            return;
          }
          let position = this._position;
          if (temporary) {
            position = Object.assign(Object.create(null), this._position);
            position.temporary = true;
          }
          if (!this._destination) {
            this._pushOrReplaceState(position);
            return;
          }
          if (this._destination.temporary) {
            this._pushOrReplaceState(position, true);
            return;
          }
          if (this._destination.hash === position.hash) {
            return;
          }
          if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
            return;
          }
          let forceReplace = false;
          if (this._destination.page >= position.first && this._destination.page <= position.page) {
            if (this._destination.dest !== undefined || !this._destination.first) {
              return;
            }
            forceReplace = true;
          }
          this._pushOrReplaceState(position, forceReplace);
        }
        _isValidPage(val) {
          return Number.isInteger(val) && val > 0 && val <= this.linkService.pagesCount;
        }
        _isValidState(state, checkReload = false) {
          if (!state) {
            return false;
          }
          if (state.fingerprint !== this._fingerprint) {
            if (checkReload) {
              if (typeof state.fingerprint !== "string" || state.fingerprint.length !== this._fingerprint.length) {
                return false;
              }
              const [perfEntry] = performance.getEntriesByType("navigation");
              if (perfEntry?.type !== "reload") {
                return false;
              }
            } else {
              return false;
            }
          }
          if (!Number.isInteger(state.uid) || state.uid < 0) {
            return false;
          }
          if (state.destination === null || typeof state.destination !== "object") {
            return false;
          }
          return true;
        }
        _updateInternalState(destination, uid, removeTemporary = false) {
          if (this._updateViewareaTimeout) {
            clearTimeout(this._updateViewareaTimeout);
            this._updateViewareaTimeout = null;
          }
          if (removeTemporary && destination?.temporary) {
            delete destination.temporary;
          }
          this._destination = destination;
          this._uid = uid;
          this._maxUid = Math.max(this._maxUid, uid);
          this._numPositionUpdates = 0;
        }
        _parseCurrentHash(checkNameddest = false) {
          const hash = unescape(getCurrentHash()).substring(1);
          const params = (0, _ui_utils.parseQueryString)(hash);
          const nameddest = params.get("nameddest") || "";
          let page = params.get("page") | 0;
          if (!this._isValidPage(page) || checkNameddest && nameddest.length > 0) {
            page = null;
          }
          return {
            hash,
            page,
            rotation: this.linkService.rotation
          };
        }
        _updateViewarea({
          location
        }) {
          if (this._updateViewareaTimeout) {
            clearTimeout(this._updateViewareaTimeout);
            this._updateViewareaTimeout = null;
          }
          this._position = {
            hash: location.pdfOpenParams.substring(1),
            page: this.linkService.page,
            first: location.pageNumber,
            rotation: location.rotation
          };
          if (this._popStateInProgress) {
            return;
          }
          if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
            this._numPositionUpdates++;
          }
          if (UPDATE_VIEWAREA_TIMEOUT > 0) {
            this._updateViewareaTimeout = setTimeout(() => {
              if (!this._popStateInProgress) {
                this._tryPushCurrentPosition(true);
              }
              this._updateViewareaTimeout = null;
            }, UPDATE_VIEWAREA_TIMEOUT);
          }
        }
        _popState({
          state
        }) {
          const newHash = getCurrentHash(),
            hashChanged = this._currentHash !== newHash;
          this._currentHash = newHash;
          if (!state) {
            this._uid++;
            const {
              hash,
              page,
              rotation
            } = this._parseCurrentHash();
            this._pushOrReplaceState({
              hash,
              page,
              rotation
            }, true);
            return;
          }
          if (!this._isValidState(state)) {
            return;
          }
          this._popStateInProgress = true;
          if (hashChanged) {
            this._blockHashChange++;
            (0, _event_utils.waitOnEventOrTimeout)({
              target: window,
              name: "hashchange",
              delay: HASH_CHANGE_TIMEOUT
            }).then(() => {
              this._blockHashChange--;
            });
          }
          const destination = state.destination;
          this._updateInternalState(destination, state.uid, true);
          if ((0, _ui_utils.isValidRotation)(destination.rotation)) {
            this.linkService.rotation = destination.rotation;
          }
          if (destination.dest) {
            this.linkService.goToDestination(destination.dest);
          } else if (destination.hash) {
            this.linkService.setHash(destination.hash);
          } else if (destination.page) {
            this.linkService.page = destination.page;
          }
          Promise.resolve().then(() => {
            this._popStateInProgress = false;
          });
        }
        _pageHide() {
          if (!this._destination || this._destination.temporary) {
            this._tryPushCurrentPosition();
          }
        }
        _bindEvents() {
          if (this._boundEvents) {
            return;
          }
          this._boundEvents = {
            updateViewarea: this._updateViewarea.bind(this),
            popState: this._popState.bind(this),
            pageHide: this._pageHide.bind(this)
          };
          this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea);
          window.addEventListener("popstate", this._boundEvents.popState);
          window.addEventListener("pagehide", this._boundEvents.pageHide);
        }
        _unbindEvents() {
          if (!this._boundEvents) {
            return;
          }
          this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea);
          window.removeEventListener("popstate", this._boundEvents.popState);
          window.removeEventListener("pagehide", this._boundEvents.pageHide);
          this._boundEvents = null;
        }
      }
      exports.PDFHistory = PDFHistory;
      function isDestHashesEqual(destHash, pushHash) {
        if (typeof destHash !== "string" || typeof pushHash !== "string") {
          return false;
        }
        if (destHash === pushHash) {
          return true;
        }
        const nameddest = (0, _ui_utils.parseQueryString)(destHash).get("nameddest");
        if (nameddest === pushHash) {
          return true;
        }
        return false;
      }
      function isDestArraysEqual(firstDest, secondDest) {
        function isEntryEqual(first, second) {
          if (typeof first !== typeof second) {
            return false;
          }
          if (Array.isArray(first) || Array.isArray(second)) {
            return false;
          }
          if (first !== null && typeof first === "object" && second !== null) {
            if (Object.keys(first).length !== Object.keys(second).length) {
              return false;
            }
            for (const key in first) {
              if (!isEntryEqual(first[key], second[key])) {
                return false;
              }
            }
            return true;
          }
          return first === second || Number.isNaN(first) && Number.isNaN(second);
        }
        if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
          return false;
        }
        if (firstDest.length !== secondDest.length) {
          return false;
        }
        for (let i = 0, ii = firstDest.length; i < ii; i++) {
          if (!isEntryEqual(firstDest[i], secondDest[i])) {
            return false;
          }
        }
        return true;
      }

      /***/
    }), ( /* 13 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFPageView = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _ui_utils = __w_pdfjs_require__(2);
      var _annotation_editor_layer_builder = __w_pdfjs_require__(14);
      var _annotation_layer_builder = __w_pdfjs_require__(3);
      var _app_options = __w_pdfjs_require__(15);
      var _l10n_utils = __w_pdfjs_require__(5);
      var _pdf_link_service = __w_pdfjs_require__(1);
      var _struct_tree_layer_builder = __w_pdfjs_require__(16);
      var _text_accessibility = __w_pdfjs_require__(17);
      var _text_highlighter = __w_pdfjs_require__(18);
      var _text_layer_builder = __w_pdfjs_require__(19);
      var _xfa_layer_builder = __w_pdfjs_require__(20);
      const MAX_CANVAS_PIXELS = _app_options.compatibilityParams.maxCanvasPixels || 16777216;
      const DEFAULT_LAYER_PROPERTIES = () => {
        return {
          annotationEditorUIManager: null,
          annotationStorage: null,
          downloadManager: null,
          enableScripting: false,
          fieldObjectsPromise: null,
          findController: null,
          hasJSActionsPromise: null,
          get linkService() {
            return new _pdf_link_service.SimpleLinkService();
          }
        };
      };
      var _annotationMode = /*#__PURE__*/_classPrivateFieldLooseKey("annotationMode");
      var _layerProperties = /*#__PURE__*/_classPrivateFieldLooseKey("layerProperties");
      var _loadingId = /*#__PURE__*/_classPrivateFieldLooseKey("loadingId");
      var _previousRotation = /*#__PURE__*/_classPrivateFieldLooseKey("previousRotation");
      var _renderError = /*#__PURE__*/_classPrivateFieldLooseKey("renderError");
      var _renderingState = /*#__PURE__*/_classPrivateFieldLooseKey("renderingState");
      var _textLayerMode = /*#__PURE__*/_classPrivateFieldLooseKey("textLayerMode");
      var _useThumbnailCanvas = /*#__PURE__*/_classPrivateFieldLooseKey("useThumbnailCanvas");
      var _viewportMap = /*#__PURE__*/_classPrivateFieldLooseKey("viewportMap");
      var _setDimensions = /*#__PURE__*/_classPrivateFieldLooseKey("setDimensions");
      var _renderAnnotationLayer = /*#__PURE__*/_classPrivateFieldLooseKey("renderAnnotationLayer");
      var _renderAnnotationEditorLayer = /*#__PURE__*/_classPrivateFieldLooseKey("renderAnnotationEditorLayer");
      var _renderXfaLayer = /*#__PURE__*/_classPrivateFieldLooseKey("renderXfaLayer");
      var _renderTextLayer = /*#__PURE__*/_classPrivateFieldLooseKey("renderTextLayer");
      var _renderStructTreeLayer = /*#__PURE__*/_classPrivateFieldLooseKey("renderStructTreeLayer");
      var _buildXfaTextContentItems = /*#__PURE__*/_classPrivateFieldLooseKey("buildXfaTextContentItems");
      var _finishRenderTask = /*#__PURE__*/_classPrivateFieldLooseKey("finishRenderTask");
      class PDFPageView {
        constructor(options) {
          Object.defineProperty(this, _finishRenderTask, {
            value: _finishRenderTask2
          });
          Object.defineProperty(this, _buildXfaTextContentItems, {
            value: _buildXfaTextContentItems2
          });
          Object.defineProperty(this, _renderStructTreeLayer, {
            value: _renderStructTreeLayer2
          });
          Object.defineProperty(this, _renderTextLayer, {
            value: _renderTextLayer2
          });
          Object.defineProperty(this, _renderXfaLayer, {
            value: _renderXfaLayer2
          });
          Object.defineProperty(this, _renderAnnotationEditorLayer, {
            value: _renderAnnotationEditorLayer2
          });
          Object.defineProperty(this, _renderAnnotationLayer, {
            value: _renderAnnotationLayer2
          });
          Object.defineProperty(this, _setDimensions, {
            value: _setDimensions2
          });
          Object.defineProperty(this, _annotationMode, {
            writable: true,
            value: _pdfjsLib.AnnotationMode.ENABLE_FORMS
          });
          Object.defineProperty(this, _layerProperties, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _loadingId, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _previousRotation, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _renderError, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _renderingState, {
            writable: true,
            value: _ui_utils.RenderingStates.INITIAL
          });
          Object.defineProperty(this, _textLayerMode, {
            writable: true,
            value: _ui_utils.TextLayerMode.ENABLE
          });
          Object.defineProperty(this, _useThumbnailCanvas, {
            writable: true,
            value: {
              initialOptionalContent: true,
              regularAnnotations: true
            }
          });
          Object.defineProperty(this, _viewportMap, {
            writable: true,
            value: new WeakMap()
          });
          const container = options.container;
          const defaultViewport = options.defaultViewport;
          this.id = options.id;
          this.renderingId = "page" + this.id;
          _classPrivateFieldLooseBase(this, _layerProperties)[_layerProperties] = options.layerProperties || DEFAULT_LAYER_PROPERTIES;
          this.pdfPage = null;
          this.pageLabel = null;
          this.rotation = 0;
          this.scale = options.scale || _ui_utils.DEFAULT_SCALE;
          this.viewport = defaultViewport;
          this.pdfPageRotate = defaultViewport.rotation;
          this._optionalContentConfigPromise = options.optionalContentConfigPromise || null;
          this.hasRestrictedScaling = false;
          _classPrivateFieldLooseBase(this, _textLayerMode)[_textLayerMode] = options.textLayerMode ?? _ui_utils.TextLayerMode.ENABLE;
          _classPrivateFieldLooseBase(this, _annotationMode)[_annotationMode] = options.annotationMode ?? _pdfjsLib.AnnotationMode.ENABLE_FORMS;
          this.imageResourcesPath = options.imageResourcesPath || "";
          this.useOnlyCssZoom = options.useOnlyCssZoom || false;
          this.isOffscreenCanvasSupported = options.isOffscreenCanvasSupported ?? true;
          this.maxCanvasPixels = options.maxCanvasPixels || MAX_CANVAS_PIXELS;
          this.pageColors = options.pageColors || null;
          this.eventBus = options.eventBus;
          this.renderingQueue = options.renderingQueue;
          this.l10n = options.l10n || _l10n_utils.NullL10n;
          this.renderTask = null;
          this.resume = null;
          this._isStandalone = !this.renderingQueue?.hasViewer();
          this._annotationCanvasMap = null;
          this.annotationLayer = null;
          this.annotationEditorLayer = null;
          this.textLayer = null;
          this.zoomLayer = null;
          this.xfaLayer = null;
          this.structTreeLayer = null;
          const div = document.createElement("div");
          div.className = "page";
          div.setAttribute("data-page-number", this.id);
          div.setAttribute("role", "region");
          this.l10n.get("page_landmark", {
            page: this.id
          }).then(msg => {
            div.setAttribute("aria-label", msg);
          });
          this.div = div;
          _classPrivateFieldLooseBase(this, _setDimensions)[_setDimensions]();
          container?.append(div);
          if (this._isStandalone) {
            container?.style.setProperty("--scale-factor", this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS);
            const {
              optionalContentConfigPromise
            } = options;
            if (optionalContentConfigPromise) {
              optionalContentConfigPromise.then(optionalContentConfig => {
                if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
                  return;
                }
                _classPrivateFieldLooseBase(this, _useThumbnailCanvas)[_useThumbnailCanvas].initialOptionalContent = optionalContentConfig.hasInitialVisibility;
              });
            }
          }
        }
        get renderingState() {
          return _classPrivateFieldLooseBase(this, _renderingState)[_renderingState];
        }
        set renderingState(state) {
          if (state === _classPrivateFieldLooseBase(this, _renderingState)[_renderingState]) {
            return;
          }
          _classPrivateFieldLooseBase(this, _renderingState)[_renderingState] = state;
          if (_classPrivateFieldLooseBase(this, _loadingId)[_loadingId]) {
            clearTimeout(_classPrivateFieldLooseBase(this, _loadingId)[_loadingId]);
            _classPrivateFieldLooseBase(this, _loadingId)[_loadingId] = null;
          }
          switch (state) {
            case _ui_utils.RenderingStates.PAUSED:
              this.div.classList.remove("loading");
              break;
            case _ui_utils.RenderingStates.RUNNING:
              this.div.classList.add("loadingIcon");
              _classPrivateFieldLooseBase(this, _loadingId)[_loadingId] = setTimeout(() => {
                this.div.classList.add("loading");
                _classPrivateFieldLooseBase(this, _loadingId)[_loadingId] = null;
              }, 0);
              break;
            case _ui_utils.RenderingStates.INITIAL:
            case _ui_utils.RenderingStates.FINISHED:
              this.div.classList.remove("loadingIcon", "loading");
              break;
          }
        }
        setPdfPage(pdfPage) {
          this.pdfPage = pdfPage;
          this.pdfPageRotate = pdfPage.rotate;
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
          this.viewport = pdfPage.getViewport({
            scale: this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: totalRotation
          });
          _classPrivateFieldLooseBase(this, _setDimensions)[_setDimensions]();
          this.reset();
        }
        destroy() {
          this.reset();
          this.pdfPage?.cleanup();
        }
        get _textHighlighter() {
          return (0, _pdfjsLib.shadow)(this, "_textHighlighter", new _text_highlighter.TextHighlighter({
            pageIndex: this.id - 1,
            eventBus: this.eventBus,
            findController: _classPrivateFieldLooseBase(this, _layerProperties)[_layerProperties]().findController
          }));
        }
        _resetZoomLayer(removeFromDOM = false) {
          if (!this.zoomLayer) {
            return;
          }
          const zoomLayerCanvas = this.zoomLayer.firstChild;
          _classPrivateFieldLooseBase(this, _viewportMap)[_viewportMap].delete(zoomLayerCanvas);
          zoomLayerCanvas.width = 0;
          zoomLayerCanvas.height = 0;
          if (removeFromDOM) {
            this.zoomLayer.remove();
          }
          this.zoomLayer = null;
        }
        reset({
          keepZoomLayer = false,
          keepAnnotationLayer = false,
          keepAnnotationEditorLayer = false,
          keepXfaLayer = false,
          keepTextLayer = false
        } = {}) {
          this.cancelRendering({
            keepAnnotationLayer,
            keepAnnotationEditorLayer,
            keepXfaLayer,
            keepTextLayer
          });
          this.renderingState = _ui_utils.RenderingStates.INITIAL;
          const div = this.div;
          const childNodes = div.childNodes,
            zoomLayerNode = keepZoomLayer && this.zoomLayer || null,
            annotationLayerNode = keepAnnotationLayer && this.annotationLayer?.div || null,
            annotationEditorLayerNode = keepAnnotationEditorLayer && this.annotationEditorLayer?.div || null,
            xfaLayerNode = keepXfaLayer && this.xfaLayer?.div || null,
            textLayerNode = keepTextLayer && this.textLayer?.div || null;
          for (let i = childNodes.length - 1; i >= 0; i--) {
            const node = childNodes[i];
            switch (node) {
              case zoomLayerNode:
              case annotationLayerNode:
              case annotationEditorLayerNode:
              case xfaLayerNode:
              case textLayerNode:
                continue;
            }
            node.remove();
          }
          div.removeAttribute("data-loaded");
          if (annotationLayerNode) {
            this.annotationLayer.hide();
          }
          if (annotationEditorLayerNode) {
            this.annotationEditorLayer.hide();
          }
          if (xfaLayerNode) {
            this.xfaLayer.hide();
          }
          if (textLayerNode) {
            this.textLayer.hide();
          }
          this.structTreeLayer?.hide();
          if (!zoomLayerNode) {
            if (this.canvas) {
              _classPrivateFieldLooseBase(this, _viewportMap)[_viewportMap].delete(this.canvas);
              this.canvas.width = 0;
              this.canvas.height = 0;
              delete this.canvas;
            }
            this._resetZoomLayer();
          }
        }
        update({
          scale = 0,
          rotation = null,
          optionalContentConfigPromise = null,
          drawingDelay = -1
        }) {
          this.scale = scale || this.scale;
          if (typeof rotation === "number") {
            this.rotation = rotation;
          }
          if (optionalContentConfigPromise instanceof Promise) {
            this._optionalContentConfigPromise = optionalContentConfigPromise;
            optionalContentConfigPromise.then(optionalContentConfig => {
              if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
                return;
              }
              _classPrivateFieldLooseBase(this, _useThumbnailCanvas)[_useThumbnailCanvas].initialOptionalContent = optionalContentConfig.hasInitialVisibility;
            });
          }
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
          this.viewport = this.viewport.clone({
            scale: this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: totalRotation
          });
          _classPrivateFieldLooseBase(this, _setDimensions)[_setDimensions]();
          if (this._isStandalone) {
            this.div.parentNode?.style.setProperty("--scale-factor", this.viewport.scale);
          }
          let isScalingRestricted = false;
          if (this.canvas && this.maxCanvasPixels > 0) {
            const {
              width,
              height
            } = this.viewport;
            const {
              sx,
              sy
            } = this.outputScale;
            if ((Math.floor(width) * sx | 0) * (Math.floor(height) * sy | 0) > this.maxCanvasPixels) {
              isScalingRestricted = true;
            }
          }
          const onlyCssZoom = this.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted;
          const postponeDrawing = !onlyCssZoom && drawingDelay >= 0 && drawingDelay < 1000;
          if (this.canvas) {
            if (postponeDrawing || onlyCssZoom) {
              if (postponeDrawing && this.renderingState !== _ui_utils.RenderingStates.FINISHED) {
                this.cancelRendering({
                  keepZoomLayer: true,
                  keepAnnotationLayer: true,
                  keepAnnotationEditorLayer: true,
                  keepXfaLayer: true,
                  keepTextLayer: true,
                  cancelExtraDelay: drawingDelay
                });
                this.renderingState = _ui_utils.RenderingStates.FINISHED;
              }
              this.cssTransform({
                target: this.canvas,
                redrawAnnotationLayer: true,
                redrawAnnotationEditorLayer: true,
                redrawXfaLayer: true,
                redrawTextLayer: !postponeDrawing,
                hideTextLayer: postponeDrawing
              });
              this.eventBus.dispatch("pagerendered", {
                source: this,
                pageNumber: this.id,
                cssTransform: true,
                timestamp: performance.now(),
                error: _classPrivateFieldLooseBase(this, _renderError)[_renderError]
              });
              return;
            }
            if (!this.zoomLayer && !this.canvas.hidden) {
              this.zoomLayer = this.canvas.parentNode;
              this.zoomLayer.style.position = "absolute";
            }
          }
          if (this.zoomLayer) {
            this.cssTransform({
              target: this.zoomLayer.firstChild
            });
          }
          this.reset({
            keepZoomLayer: true,
            keepAnnotationLayer: true,
            keepAnnotationEditorLayer: true,
            keepXfaLayer: true,
            keepTextLayer: true
          });
        }
        cancelRendering({
          keepAnnotationLayer = false,
          keepAnnotationEditorLayer = false,
          keepXfaLayer = false,
          keepTextLayer = false,
          cancelExtraDelay = 0
        } = {}) {
          if (this.renderTask) {
            this.renderTask.cancel(cancelExtraDelay);
            this.renderTask = null;
          }
          this.resume = null;
          if (this.textLayer && (!keepTextLayer || !this.textLayer.div)) {
            this.textLayer.cancel();
            this.textLayer = null;
          }
          if (this.structTreeLayer && !this.textLayer) {
            this.structTreeLayer = null;
          }
          if (this.annotationLayer && (!keepAnnotationLayer || !this.annotationLayer.div)) {
            this.annotationLayer.cancel();
            this.annotationLayer = null;
            this._annotationCanvasMap = null;
          }
          if (this.annotationEditorLayer && (!keepAnnotationEditorLayer || !this.annotationEditorLayer.div)) {
            this.annotationEditorLayer.cancel();
            this.annotationEditorLayer = null;
          }
          if (this.xfaLayer && (!keepXfaLayer || !this.xfaLayer.div)) {
            this.xfaLayer.cancel();
            this.xfaLayer = null;
            this._textHighlighter?.disable();
          }
        }
        cssTransform({
          target,
          redrawAnnotationLayer = false,
          redrawAnnotationEditorLayer = false,
          redrawXfaLayer = false,
          redrawTextLayer = false,
          hideTextLayer = false
        }) {
          if (!target.hasAttribute("zooming")) {
            target.setAttribute("zooming", true);
            const {
              style
            } = target;
            style.width = style.height = "";
          }
          const originalViewport = _classPrivateFieldLooseBase(this, _viewportMap)[_viewportMap].get(target);
          if (this.viewport !== originalViewport) {
            const relativeRotation = this.viewport.rotation - originalViewport.rotation;
            const absRotation = Math.abs(relativeRotation);
            let scaleX = 1,
              scaleY = 1;
            if (absRotation === 90 || absRotation === 270) {
              const {
                width,
                height
              } = this.viewport;
              scaleX = height / width;
              scaleY = width / height;
            }
            target.style.transform = `rotate(${relativeRotation}deg) scale(${scaleX}, ${scaleY})`;
          }
          if (redrawAnnotationLayer && this.annotationLayer) {
            _classPrivateFieldLooseBase(this, _renderAnnotationLayer)[_renderAnnotationLayer]();
          }
          if (redrawAnnotationEditorLayer && this.annotationEditorLayer) {
            _classPrivateFieldLooseBase(this, _renderAnnotationEditorLayer)[_renderAnnotationEditorLayer]();
          }
          if (redrawXfaLayer && this.xfaLayer) {
            _classPrivateFieldLooseBase(this, _renderXfaLayer)[_renderXfaLayer]();
          }
          if (this.textLayer) {
            if (hideTextLayer) {
              this.textLayer.hide();
              this.structTreeLayer?.hide();
            } else if (redrawTextLayer) {
              _classPrivateFieldLooseBase(this, _renderTextLayer)[_renderTextLayer]();
            }
          }
        }
        get width() {
          return this.viewport.width;
        }
        get height() {
          return this.viewport.height;
        }
        getPagePoint(x, y) {
          return this.viewport.convertToPdfPoint(x, y);
        }
        async draw() {
          if (this.renderingState !== _ui_utils.RenderingStates.INITIAL) {
            console.error("Must be in new state before drawing");
            this.reset();
          }
          const {
            div,
            l10n,
            pageColors,
            pdfPage,
            viewport
          } = this;
          if (!pdfPage) {
            this.renderingState = _ui_utils.RenderingStates.FINISHED;
            throw new Error("pdfPage is not loaded");
          }
          this.renderingState = _ui_utils.RenderingStates.RUNNING;
          const canvasWrapper = document.createElement("div");
          canvasWrapper.classList.add("canvasWrapper");
          div.append(canvasWrapper);
          if (!this.textLayer && _classPrivateFieldLooseBase(this, _textLayerMode)[_textLayerMode] !== _ui_utils.TextLayerMode.DISABLE && !pdfPage.isPureXfa) {
            this._accessibilityManager ||= new _text_accessibility.TextAccessibilityManager();
            this.textLayer = new _text_layer_builder.TextLayerBuilder({
              highlighter: this._textHighlighter,
              accessibilityManager: this._accessibilityManager,
              isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
              enablePermissions: _classPrivateFieldLooseBase(this, _textLayerMode)[_textLayerMode] === _ui_utils.TextLayerMode.ENABLE_PERMISSIONS
            });
            div.append(this.textLayer.div);
          }
          if (!this.annotationLayer && _classPrivateFieldLooseBase(this, _annotationMode)[_annotationMode] !== _pdfjsLib.AnnotationMode.DISABLE) {
            const {
              annotationStorage,
              downloadManager,
              enableScripting,
              fieldObjectsPromise,
              hasJSActionsPromise,
              linkService
            } = _classPrivateFieldLooseBase(this, _layerProperties)[_layerProperties]();
            this._annotationCanvasMap ||= new Map();
            this.annotationLayer = new _annotation_layer_builder.AnnotationLayerBuilder({
              pageDiv: div,
              pdfPage,
              annotationStorage,
              imageResourcesPath: this.imageResourcesPath,
              renderForms: _classPrivateFieldLooseBase(this, _annotationMode)[_annotationMode] === _pdfjsLib.AnnotationMode.ENABLE_FORMS,
              linkService,
              downloadManager,
              l10n,
              enableScripting,
              hasJSActionsPromise,
              fieldObjectsPromise,
              annotationCanvasMap: this._annotationCanvasMap,
              accessibilityManager: this._accessibilityManager
            });
          }
          const renderContinueCallback = cont => {
            showCanvas?.(false);
            if (this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
              this.renderingState = _ui_utils.RenderingStates.PAUSED;
              this.resume = () => {
                this.renderingState = _ui_utils.RenderingStates.RUNNING;
                cont();
              };
              return;
            }
            cont();
          };
          const {
            width,
            height
          } = viewport;
          const canvas = document.createElement("canvas");
          canvas.setAttribute("role", "presentation");
          canvas.hidden = true;
          const hasHCM = !!(pageColors?.background && pageColors?.foreground);
          let showCanvas = isLastShow => {
            if (!hasHCM || isLastShow) {
              canvas.hidden = false;
              showCanvas = null;
            }
          };
          canvasWrapper.append(canvas);
          this.canvas = canvas;
          const ctx = canvas.getContext("2d", {
            alpha: false
          });
          const outputScale = this.outputScale = new _ui_utils.OutputScale();
          if (this.useOnlyCssZoom) {
            const actualSizeViewport = viewport.clone({
              scale: _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS
            });
            outputScale.sx *= actualSizeViewport.width / width;
            outputScale.sy *= actualSizeViewport.height / height;
          }
          if (this.maxCanvasPixels > 0) {
            const pixelsInViewport = width * height;
            const maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);
            if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
              outputScale.sx = maxScale;
              outputScale.sy = maxScale;
              this.hasRestrictedScaling = true;
            } else {
              this.hasRestrictedScaling = false;
            }
          }
          const sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
          const sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
          canvas.width = (0, _ui_utils.roundToDivide)(width * outputScale.sx, sfx[0]);
          canvas.height = (0, _ui_utils.roundToDivide)(height * outputScale.sy, sfy[0]);
          const {
            style
          } = canvas;
          style.width = (0, _ui_utils.roundToDivide)(width, sfx[1]) + "px";
          style.height = (0, _ui_utils.roundToDivide)(height, sfy[1]) + "px";
          _classPrivateFieldLooseBase(this, _viewportMap)[_viewportMap].set(canvas, viewport);
          const transform = outputScale.scaled ? [outputScale.sx, 0, 0, outputScale.sy, 0, 0] : null;
          const renderContext = {
            canvasContext: ctx,
            transform,
            viewport,
            annotationMode: _classPrivateFieldLooseBase(this, _annotationMode)[_annotationMode],
            optionalContentConfigPromise: this._optionalContentConfigPromise,
            annotationCanvasMap: this._annotationCanvasMap,
            pageColors
          };
          const renderTask = this.renderTask = this.pdfPage.render(renderContext);
          renderTask.onContinue = renderContinueCallback;
          const resultPromise = renderTask.promise.then(async () => {
            showCanvas?.(true);
            await _classPrivateFieldLooseBase(this, _finishRenderTask)[_finishRenderTask](renderTask);
            _classPrivateFieldLooseBase(this, _renderTextLayer)[_renderTextLayer]();
            if (this.annotationLayer) {
              await _classPrivateFieldLooseBase(this, _renderAnnotationLayer)[_renderAnnotationLayer]();
            }
            if (!this.annotationEditorLayer) {
              const {
                annotationEditorUIManager
              } = _classPrivateFieldLooseBase(this, _layerProperties)[_layerProperties]();
              if (!annotationEditorUIManager) {
                return;
              }
              this.annotationEditorLayer = new _annotation_editor_layer_builder.AnnotationEditorLayerBuilder({
                uiManager: annotationEditorUIManager,
                pageDiv: div,
                pdfPage,
                l10n,
                accessibilityManager: this._accessibilityManager
              });
            }
            _classPrivateFieldLooseBase(this, _renderAnnotationEditorLayer)[_renderAnnotationEditorLayer]();
          }, error => {
            if (!(error instanceof _pdfjsLib.RenderingCancelledException)) {
              showCanvas?.(true);
            }
            return _classPrivateFieldLooseBase(this, _finishRenderTask)[_finishRenderTask](renderTask, error);
          });
          if (pdfPage.isPureXfa) {
            if (!this.xfaLayer) {
              const {
                annotationStorage,
                linkService
              } = _classPrivateFieldLooseBase(this, _layerProperties)[_layerProperties]();
              this.xfaLayer = new _xfa_layer_builder.XfaLayerBuilder({
                pageDiv: div,
                pdfPage,
                annotationStorage,
                linkService
              });
            } else if (this.xfaLayer.div) {
              div.append(this.xfaLayer.div);
            }
            _classPrivateFieldLooseBase(this, _renderXfaLayer)[_renderXfaLayer]();
          }
          div.setAttribute("data-loaded", true);
          this.eventBus.dispatch("pagerender", {
            source: this,
            pageNumber: this.id
          });
          return resultPromise;
        }
        setPageLabel(label) {
          this.pageLabel = typeof label === "string" ? label : null;
          if (this.pageLabel !== null) {
            this.div.setAttribute("data-page-label", this.pageLabel);
          } else {
            this.div.removeAttribute("data-page-label");
          }
        }
        get thumbnailCanvas() {
          const {
            initialOptionalContent,
            regularAnnotations
          } = _classPrivateFieldLooseBase(this, _useThumbnailCanvas)[_useThumbnailCanvas];
          return initialOptionalContent && regularAnnotations ? this.canvas : null;
        }
      }
      function _setDimensions2() {
        const {
          viewport
        } = this;
        if (this.pdfPage) {
          if (_classPrivateFieldLooseBase(this, _previousRotation)[_previousRotation] === viewport.rotation) {
            return;
          }
          _classPrivateFieldLooseBase(this, _previousRotation)[_previousRotation] = viewport.rotation;
        }
        (0, _pdfjsLib.setLayerDimensions)(this.div, viewport, true, false);
      }
      async function _renderAnnotationLayer2() {
        let error = null;
        try {
          await this.annotationLayer.render(this.viewport, "display");
        } catch (ex) {
          console.error(`#renderAnnotationLayer: "${ex}".`);
          error = ex;
        } finally {
          this.eventBus.dispatch("annotationlayerrendered", {
            source: this,
            pageNumber: this.id,
            error
          });
        }
      }
      async function _renderAnnotationEditorLayer2() {
        let error = null;
        try {
          await this.annotationEditorLayer.render(this.viewport, "display");
        } catch (ex) {
          console.error(`#renderAnnotationEditorLayer: "${ex}".`);
          error = ex;
        } finally {
          this.eventBus.dispatch("annotationeditorlayerrendered", {
            source: this,
            pageNumber: this.id,
            error
          });
        }
      }
      async function _renderXfaLayer2() {
        let error = null;
        try {
          const result = await this.xfaLayer.render(this.viewport, "display");
          if (result?.textDivs && this._textHighlighter) {
            _classPrivateFieldLooseBase(this, _buildXfaTextContentItems)[_buildXfaTextContentItems](result.textDivs);
          }
        } catch (ex) {
          console.error(`#renderXfaLayer: "${ex}".`);
          error = ex;
        } finally {
          this.eventBus.dispatch("xfalayerrendered", {
            source: this,
            pageNumber: this.id,
            error
          });
        }
      }
      async function _renderTextLayer2() {
        const {
          pdfPage,
          textLayer,
          viewport
        } = this;
        if (!textLayer) {
          return;
        }
        let error = null;
        try {
          if (!textLayer.renderingDone) {
            const readableStream = pdfPage.streamTextContent({
              includeMarkedContent: true,
              disableNormalization: true
            });
            textLayer.setTextContentSource(readableStream);
          }
          await textLayer.render(viewport);
        } catch (ex) {
          if (ex instanceof _pdfjsLib.AbortException) {
            return;
          }
          console.error(`#renderTextLayer: "${ex}".`);
          error = ex;
        }
        this.eventBus.dispatch("textlayerrendered", {
          source: this,
          pageNumber: this.id,
          numTextDivs: textLayer.numTextDivs,
          error
        });
        _classPrivateFieldLooseBase(this, _renderStructTreeLayer)[_renderStructTreeLayer]();
      }
      async function _renderStructTreeLayer2() {
        if (!this.textLayer) {
          return;
        }
        this.structTreeLayer ||= new _struct_tree_layer_builder.StructTreeLayerBuilder();
        const tree = await (!this.structTreeLayer.renderingDone ? this.pdfPage.getStructTree() : null);
        const treeDom = this.structTreeLayer?.render(tree);
        if (treeDom) {
          this.canvas?.append(treeDom);
        }
        this.structTreeLayer?.show();
      }
      async function _buildXfaTextContentItems2(textDivs) {
        const text = await this.pdfPage.getTextContent();
        const items = [];
        for (const item of text.items) {
          items.push(item.str);
        }
        this._textHighlighter.setTextMapping(textDivs, items);
        this._textHighlighter.enable();
      }
      async function _finishRenderTask2(renderTask, error = null) {
        if (renderTask === this.renderTask) {
          this.renderTask = null;
        }
        if (error instanceof _pdfjsLib.RenderingCancelledException) {
          _classPrivateFieldLooseBase(this, _renderError)[_renderError] = null;
          return;
        }
        _classPrivateFieldLooseBase(this, _renderError)[_renderError] = error;
        this.renderingState = _ui_utils.RenderingStates.FINISHED;
        this._resetZoomLayer(true);
        _classPrivateFieldLooseBase(this, _useThumbnailCanvas)[_useThumbnailCanvas].regularAnnotations = !renderTask.separateAnnots;
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: false,
          timestamp: performance.now(),
          error: _classPrivateFieldLooseBase(this, _renderError)[_renderError]
        });
        if (error) {
          throw error;
        }
      }
      exports.PDFPageView = PDFPageView;

      /***/
    }), ( /* 14 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnnotationEditorLayerBuilder = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _l10n_utils = __w_pdfjs_require__(5);
      var _uiManager = /*#__PURE__*/_classPrivateFieldLooseKey("uiManager");
      class AnnotationEditorLayerBuilder {
        constructor(options) {
          Object.defineProperty(this, _uiManager, {
            writable: true,
            value: void 0
          });
          this.pageDiv = options.pageDiv;
          this.pdfPage = options.pdfPage;
          this.accessibilityManager = options.accessibilityManager;
          this.l10n = options.l10n || _l10n_utils.NullL10n;
          this.annotationEditorLayer = null;
          this.div = null;
          this._cancelled = false;
          _classPrivateFieldLooseBase(this, _uiManager)[_uiManager] = options.uiManager;
        }
        async render(viewport, intent = "display") {
          if (intent !== "display") {
            return;
          }
          if (this._cancelled) {
            return;
          }
          const clonedViewport = viewport.clone({
            dontFlip: true
          });
          if (this.div) {
            this.annotationEditorLayer.update({
              viewport: clonedViewport
            });
            this.show();
            return;
          }
          const div = this.div = document.createElement("div");
          div.className = "annotationEditorLayer";
          div.tabIndex = 0;
          div.hidden = true;
          this.pageDiv.append(div);
          this.annotationEditorLayer = new _pdfjsLib.AnnotationEditorLayer({
            uiManager: _classPrivateFieldLooseBase(this, _uiManager)[_uiManager],
            div,
            accessibilityManager: this.accessibilityManager,
            pageIndex: this.pdfPage.pageNumber - 1,
            l10n: this.l10n,
            viewport: clonedViewport
          });
          const parameters = {
            viewport: clonedViewport,
            div,
            annotations: null,
            intent
          };
          this.annotationEditorLayer.render(parameters);
          this.show();
        }
        cancel() {
          this._cancelled = true;
          if (!this.div) {
            return;
          }
          this.pageDiv = null;
          this.annotationEditorLayer.destroy();
          this.div.remove();
        }
        hide() {
          if (!this.div) {
            return;
          }
          this.div.hidden = true;
        }
        show() {
          if (!this.div || this.annotationEditorLayer.isEmpty) {
            return;
          }
          this.div.hidden = false;
        }
      }
      exports.AnnotationEditorLayerBuilder = AnnotationEditorLayerBuilder;

      /***/
    }), ( /* 15 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compatibilityParams = exports.OptionKind = exports.AppOptions = void 0;
      const compatibilityParams = Object.create(null);
      exports.compatibilityParams = compatibilityParams;
      {
        const userAgent = navigator.userAgent || "";
        const platform = navigator.platform || "";
        const maxTouchPoints = navigator.maxTouchPoints || 1;
        const isAndroid = /Android/.test(userAgent);
        const isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;
        (function checkCanvasSizeLimitation() {
          if (isIOS || isAndroid) {
            compatibilityParams.maxCanvasPixels = 5242880;
          }
        })();
      }
      const OptionKind = {
        VIEWER: 0x02,
        API: 0x04,
        WORKER: 0x08,
        PREFERENCE: 0x80
      };
      exports.OptionKind = OptionKind;
      const defaultOptions = {
        annotationEditorMode: {
          value: 0,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        annotationMode: {
          value: 2,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        cursorToolOnLoad: {
          value: 0,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        defaultZoomDelay: {
          value: 400,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        defaultZoomValue: {
          value: "",
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        disableHistory: {
          value: false,
          kind: OptionKind.VIEWER
        },
        disablePageLabels: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        enableFloatingToolbar: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        enablePermissions: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        enablePrintAutoRotate: {
          value: true,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        enableScripting: {
          value: true,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        externalLinkRel: {
          value: "noopener noreferrer nofollow",
          kind: OptionKind.VIEWER
        },
        externalLinkTarget: {
          value: 0,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        historyUpdateUrl: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        ignoreDestinationZoom: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        imageResourcesPath: {
          value: "./images/",
          kind: OptionKind.VIEWER
        },
        maxCanvasPixels: {
          value: 16777216,
          kind: OptionKind.VIEWER
        },
        forcePageColors: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        pageColorsBackground: {
          value: "Canvas",
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        pageColorsForeground: {
          value: "CanvasText",
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        pdfBugEnabled: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        printResolution: {
          value: 150,
          kind: OptionKind.VIEWER
        },
        sidebarViewOnLoad: {
          value: -1,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        scrollModeOnLoad: {
          value: -1,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        spreadModeOnLoad: {
          value: -1,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        textLayerMode: {
          value: 1,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        useOnlyCssZoom: {
          value: false,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        viewerCssTheme: {
          value: 0,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        viewOnLoad: {
          value: 0,
          kind: OptionKind.VIEWER + OptionKind.PREFERENCE
        },
        cMapPacked: {
          value: true,
          kind: OptionKind.API
        },
        cMapUrl: {
          value: "../web/cmaps/",
          kind: OptionKind.API
        },
        disableAutoFetch: {
          value: false,
          kind: OptionKind.API + OptionKind.PREFERENCE
        },
        disableFontFace: {
          value: false,
          kind: OptionKind.API + OptionKind.PREFERENCE
        },
        disableRange: {
          value: false,
          kind: OptionKind.API + OptionKind.PREFERENCE
        },
        disableStream: {
          value: false,
          kind: OptionKind.API + OptionKind.PREFERENCE
        },
        docBaseUrl: {
          value: "",
          kind: OptionKind.API
        },
        enableXfa: {
          value: true,
          kind: OptionKind.API + OptionKind.PREFERENCE
        },
        fontExtraProperties: {
          value: false,
          kind: OptionKind.API
        },
        isEvalSupported: {
          value: true,
          kind: OptionKind.API
        },
        isOffscreenCanvasSupported: {
          value: true,
          kind: OptionKind.API
        },
        maxImageSize: {
          value: -1,
          kind: OptionKind.API
        },
        pdfBug: {
          value: false,
          kind: OptionKind.API
        },
        standardFontDataUrl: {
          value: "../web/standard_fonts/",
          kind: OptionKind.API
        },
        verbosity: {
          value: 1,
          kind: OptionKind.API
        },
        workerPort: {
          value: null,
          kind: OptionKind.WORKER
        },
        workerSrc: {
          value: "../build/pdf.worker.js",
          kind: OptionKind.WORKER
        }
      };
      {
        defaultOptions.defaultUrl = {
          value: "compressed.tracemonkey-pldi-09.pdf",
          kind: OptionKind.VIEWER
        };
        defaultOptions.disablePreferences = {
          value: false,
          kind: OptionKind.VIEWER
        };
        defaultOptions.locale = {
          value: navigator.language || "en-US",
          kind: OptionKind.VIEWER
        };
        defaultOptions.sandboxBundleSrc = {
          value: "../build/pdf.sandbox.js",
          kind: OptionKind.VIEWER
        };
      }
      const userOptions = Object.create(null);
      class AppOptions {
        constructor() {
          throw new Error("Cannot initialize AppOptions.");
        }
        static get(name) {
          const userOption = userOptions[name];
          if (userOption !== undefined) {
            return userOption;
          }
          const defaultOption = defaultOptions[name];
          if (defaultOption !== undefined) {
            return compatibilityParams[name] ?? defaultOption.value;
          }
          return undefined;
        }
        static getAll(kind = null) {
          const options = Object.create(null);
          for (const name in defaultOptions) {
            const defaultOption = defaultOptions[name];
            if (kind) {
              if ((kind & defaultOption.kind) === 0) {
                continue;
              }
              if (kind === OptionKind.PREFERENCE) {
                const value = defaultOption.value,
                  valueType = typeof value;
                if (valueType === "boolean" || valueType === "string" || valueType === "number" && Number.isInteger(value)) {
                  options[name] = value;
                  continue;
                }
                throw new Error(`Invalid type for preference: ${name}`);
              }
            }
            const userOption = userOptions[name];
            options[name] = userOption !== undefined ? userOption : compatibilityParams[name] ?? defaultOption.value;
          }
          return options;
        }
        static set(name, value) {
          userOptions[name] = value;
        }
        static setAll(options) {
          for (const name in options) {
            userOptions[name] = options[name];
          }
        }
        static remove(name) {
          delete userOptions[name];
        }
      }
      exports.AppOptions = AppOptions;
      {
        AppOptions._hasUserOptions = function () {
          return Object.keys(userOptions).length > 0;
        };
      }

      /***/
    }), ( /* 16 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StructTreeLayerBuilder = void 0;
      const PDF_ROLE_TO_HTML_ROLE = {
        Document: null,
        DocumentFragment: null,
        Part: "group",
        Sect: "group",
        Div: "group",
        Aside: "note",
        NonStruct: "none",
        P: null,
        H: "heading",
        Title: null,
        FENote: "note",
        Sub: "group",
        Lbl: null,
        Span: null,
        Em: null,
        Strong: null,
        Link: "link",
        Annot: "note",
        Form: "form",
        Ruby: null,
        RB: null,
        RT: null,
        RP: null,
        Warichu: null,
        WT: null,
        WP: null,
        L: "list",
        LI: "listitem",
        LBody: null,
        Table: "table",
        TR: "row",
        TH: "columnheader",
        TD: "cell",
        THead: "columnheader",
        TBody: null,
        TFoot: null,
        Caption: null,
        Figure: "figure",
        Formula: null,
        Artifact: null
      };
      const HEADING_PATTERN = /^H(\d+)$/;
      var _treeDom = /*#__PURE__*/_classPrivateFieldLooseKey("treeDom");
      var _setAttributes = /*#__PURE__*/_classPrivateFieldLooseKey("setAttributes");
      var _walk = /*#__PURE__*/_classPrivateFieldLooseKey("walk");
      class StructTreeLayerBuilder {
        constructor() {
          Object.defineProperty(this, _walk, {
            value: _walk2
          });
          Object.defineProperty(this, _setAttributes, {
            value: _setAttributes2
          });
          Object.defineProperty(this, _treeDom, {
            writable: true,
            value: undefined
          });
        }
        get renderingDone() {
          return _classPrivateFieldLooseBase(this, _treeDom)[_treeDom] !== undefined;
        }
        render(structTree) {
          if (_classPrivateFieldLooseBase(this, _treeDom)[_treeDom] !== undefined) {
            return _classPrivateFieldLooseBase(this, _treeDom)[_treeDom];
          }
          const treeDom = _classPrivateFieldLooseBase(this, _walk)[_walk](structTree);
          treeDom?.classList.add("structTree");
          return _classPrivateFieldLooseBase(this, _treeDom)[_treeDom] = treeDom;
        }
        hide() {
          if (_classPrivateFieldLooseBase(this, _treeDom)[_treeDom] && !_classPrivateFieldLooseBase(this, _treeDom)[_treeDom].hidden) {
            _classPrivateFieldLooseBase(this, _treeDom)[_treeDom].hidden = true;
          }
        }
        show() {
          if (_classPrivateFieldLooseBase(this, _treeDom)[_treeDom]?.hidden) {
            _classPrivateFieldLooseBase(this, _treeDom)[_treeDom].hidden = false;
          }
        }
      }
      function _setAttributes2(structElement, htmlElement) {
        if (structElement.alt !== undefined) {
          htmlElement.setAttribute("aria-label", structElement.alt);
        }
        if (structElement.id !== undefined) {
          htmlElement.setAttribute("aria-owns", structElement.id);
        }
        if (structElement.lang !== undefined) {
          htmlElement.setAttribute("lang", structElement.lang);
        }
      }
      function _walk2(node) {
        if (!node) {
          return null;
        }
        const element = document.createElement("span");
        if ("role" in node) {
          const {
            role
          } = node;
          const match = role.match(HEADING_PATTERN);
          if (match) {
            element.setAttribute("role", "heading");
            element.setAttribute("aria-level", match[1]);
          } else if (PDF_ROLE_TO_HTML_ROLE[role]) {
            element.setAttribute("role", PDF_ROLE_TO_HTML_ROLE[role]);
          }
        }
        _classPrivateFieldLooseBase(this, _setAttributes)[_setAttributes](node, element);
        if (node.children) {
          if (node.children.length === 1 && "id" in node.children[0]) {
            _classPrivateFieldLooseBase(this, _setAttributes)[_setAttributes](node.children[0], element);
          } else {
            for (const kid of node.children) {
              element.append(_classPrivateFieldLooseBase(this, _walk)[_walk](kid));
            }
          }
        }
        return element;
      }
      exports.StructTreeLayerBuilder = StructTreeLayerBuilder;

      /***/
    }), ( /* 17 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextAccessibilityManager = void 0;
      var _ui_utils = __w_pdfjs_require__(2);
      var _enabled = /*#__PURE__*/_classPrivateFieldLooseKey("enabled");
      var _textChildren = /*#__PURE__*/_classPrivateFieldLooseKey("textChildren");
      var _textNodes = /*#__PURE__*/_classPrivateFieldLooseKey("textNodes");
      var _waitingElements = /*#__PURE__*/_classPrivateFieldLooseKey("waitingElements");
      var _compareElementPositions = /*#__PURE__*/_classPrivateFieldLooseKey("compareElementPositions");
      var _addIdToAriaOwns = /*#__PURE__*/_classPrivateFieldLooseKey("addIdToAriaOwns");
      class TextAccessibilityManager {
        constructor() {
          Object.defineProperty(this, _addIdToAriaOwns, {
            value: _addIdToAriaOwns2
          });
          Object.defineProperty(this, _enabled, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _textChildren, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _textNodes, {
            writable: true,
            value: new Map()
          });
          Object.defineProperty(this, _waitingElements, {
            writable: true,
            value: new Map()
          });
        }
        setTextMapping(textDivs) {
          _classPrivateFieldLooseBase(this, _textChildren)[_textChildren] = textDivs;
        }
        enable() {
          if (_classPrivateFieldLooseBase(this, _enabled)[_enabled]) {
            throw new Error("TextAccessibilityManager is already enabled.");
          }
          if (!_classPrivateFieldLooseBase(this, _textChildren)[_textChildren]) {
            throw new Error("Text divs and strings have not been set.");
          }
          _classPrivateFieldLooseBase(this, _enabled)[_enabled] = true;
          _classPrivateFieldLooseBase(this, _textChildren)[_textChildren] = _classPrivateFieldLooseBase(this, _textChildren)[_textChildren].slice();
          _classPrivateFieldLooseBase(this, _textChildren)[_textChildren].sort(_classPrivateFieldLooseBase(TextAccessibilityManager, _compareElementPositions)[_compareElementPositions]);
          if (_classPrivateFieldLooseBase(this, _textNodes)[_textNodes].size > 0) {
            const textChildren = _classPrivateFieldLooseBase(this, _textChildren)[_textChildren];
            for (const [id, nodeIndex] of _classPrivateFieldLooseBase(this, _textNodes)[_textNodes]) {
              const element = document.getElementById(id);
              if (!element) {
                _classPrivateFieldLooseBase(this, _textNodes)[_textNodes].delete(id);
                continue;
              }
              _classPrivateFieldLooseBase(this, _addIdToAriaOwns)[_addIdToAriaOwns](id, textChildren[nodeIndex]);
            }
          }
          for (const [element, isRemovable] of _classPrivateFieldLooseBase(this, _waitingElements)[_waitingElements]) {
            this.addPointerInTextLayer(element, isRemovable);
          }
          _classPrivateFieldLooseBase(this, _waitingElements)[_waitingElements].clear();
        }
        disable() {
          if (!_classPrivateFieldLooseBase(this, _enabled)[_enabled]) {
            return;
          }
          _classPrivateFieldLooseBase(this, _waitingElements)[_waitingElements].clear();
          _classPrivateFieldLooseBase(this, _textChildren)[_textChildren] = null;
          _classPrivateFieldLooseBase(this, _enabled)[_enabled] = false;
        }
        removePointerInTextLayer(element) {
          if (!_classPrivateFieldLooseBase(this, _enabled)[_enabled]) {
            _classPrivateFieldLooseBase(this, _waitingElements)[_waitingElements].delete(element);
            return;
          }
          const children = _classPrivateFieldLooseBase(this, _textChildren)[_textChildren];
          if (!children || children.length === 0) {
            return;
          }
          const {
            id
          } = element;
          const nodeIndex = _classPrivateFieldLooseBase(this, _textNodes)[_textNodes].get(id);
          if (nodeIndex === undefined) {
            return;
          }
          const node = children[nodeIndex];
          _classPrivateFieldLooseBase(this, _textNodes)[_textNodes].delete(id);
          let owns = node.getAttribute("aria-owns");
          if (owns?.includes(id)) {
            owns = owns.split(" ").filter(x => x !== id).join(" ");
            if (owns) {
              node.setAttribute("aria-owns", owns);
            } else {
              node.removeAttribute("aria-owns");
              node.setAttribute("role", "presentation");
            }
          }
        }
        addPointerInTextLayer(element, isRemovable) {
          const {
            id
          } = element;
          if (!id) {
            return;
          }
          if (!_classPrivateFieldLooseBase(this, _enabled)[_enabled]) {
            _classPrivateFieldLooseBase(this, _waitingElements)[_waitingElements].set(element, isRemovable);
            return;
          }
          if (isRemovable) {
            this.removePointerInTextLayer(element);
          }
          const children = _classPrivateFieldLooseBase(this, _textChildren)[_textChildren];
          if (!children || children.length === 0) {
            return;
          }
          const index = (0, _ui_utils.binarySearchFirstItem)(children, node => _classPrivateFieldLooseBase(TextAccessibilityManager, _compareElementPositions)[_compareElementPositions](element, node) < 0);
          const nodeIndex = Math.max(0, index - 1);
          _classPrivateFieldLooseBase(this, _addIdToAriaOwns)[_addIdToAriaOwns](id, children[nodeIndex]);
          _classPrivateFieldLooseBase(this, _textNodes)[_textNodes].set(id, nodeIndex);
        }
        moveElementInDOM(container, element, contentElement, isRemovable) {
          this.addPointerInTextLayer(contentElement, isRemovable);
          if (!container.hasChildNodes()) {
            container.append(element);
            return;
          }
          const children = Array.from(container.childNodes).filter(node => node !== element);
          if (children.length === 0) {
            return;
          }
          const elementToCompare = contentElement || element;
          const index = (0, _ui_utils.binarySearchFirstItem)(children, node => _classPrivateFieldLooseBase(TextAccessibilityManager, _compareElementPositions)[_compareElementPositions](elementToCompare, node) < 0);
          if (index === 0) {
            children[0].before(element);
          } else {
            children[index - 1].after(element);
          }
        }
      }
      function _compareElementPositions2(e1, e2) {
        const rect1 = e1.getBoundingClientRect();
        const rect2 = e2.getBoundingClientRect();
        if (rect1.width === 0 && rect1.height === 0) {
          return +1;
        }
        if (rect2.width === 0 && rect2.height === 0) {
          return -1;
        }
        const top1 = rect1.y;
        const bot1 = rect1.y + rect1.height;
        const mid1 = rect1.y + rect1.height / 2;
        const top2 = rect2.y;
        const bot2 = rect2.y + rect2.height;
        const mid2 = rect2.y + rect2.height / 2;
        if (mid1 <= top2 && mid2 >= bot1) {
          return -1;
        }
        if (mid2 <= top1 && mid1 >= bot2) {
          return +1;
        }
        const centerX1 = rect1.x + rect1.width / 2;
        const centerX2 = rect2.x + rect2.width / 2;
        return centerX1 - centerX2;
      }
      function _addIdToAriaOwns2(id, node) {
        const owns = node.getAttribute("aria-owns");
        if (!owns?.includes(id)) {
          node.setAttribute("aria-owns", owns ? `${owns} ${id}` : id);
        }
        node.removeAttribute("role");
      }
      Object.defineProperty(TextAccessibilityManager, _compareElementPositions, {
        value: _compareElementPositions2
      });
      exports.TextAccessibilityManager = TextAccessibilityManager;

      /***/
    }), ( /* 18 */
    /***/(__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextHighlighter = void 0;
      class TextHighlighter {
        constructor({
          findController,
          eventBus,
          pageIndex
        }) {
          this.findController = findController;
          this.matches = [];
          this.eventBus = eventBus;
          this.pageIdx = pageIndex;
          this._onUpdateTextLayerMatches = null;
          this.textDivs = null;
          this.textContentItemsStr = null;
          this.enabled = false;
        }
        setTextMapping(divs, texts) {
          this.textDivs = divs;
          this.textContentItemsStr = texts;
        }
        enable() {
          if (!this.textDivs || !this.textContentItemsStr) {
            throw new Error("Text divs and strings have not been set.");
          }
          if (this.enabled) {
            throw new Error("TextHighlighter is already enabled.");
          }
          this.enabled = true;
          if (!this._onUpdateTextLayerMatches) {
            this._onUpdateTextLayerMatches = evt => {
              if (evt.pageIndex === this.pageIdx || evt.pageIndex === -1) {
                this._updateMatches();
              }
            };
            this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches);
          }
          this._updateMatches();
        }
        disable() {
          if (!this.enabled) {
            return;
          }
          this.enabled = false;
          if (this._onUpdateTextLayerMatches) {
            this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches);
            this._onUpdateTextLayerMatches = null;
          }
          this._updateMatches(true);
        }
        _convertMatches(matches, matchesLength) {
          if (!matches) {
            return [];
          }
          const {
            textContentItemsStr
          } = this;
          let i = 0,
            iIndex = 0;
          const end = textContentItemsStr.length - 1;
          const result = [];
          for (let m = 0, mm = matches.length; m < mm; m++) {
            let matchIdx = matches[m];
            while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length;
              i++;
            }
            if (i === textContentItemsStr.length) {
              console.error("Could not find a matching mapping");
            }
            const match = {
              begin: {
                divIdx: i,
                offset: matchIdx - iIndex
              }
            };
            matchIdx += matchesLength[m];
            while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length;
              i++;
            }
            match.end = {
              divIdx: i,
              offset: matchIdx - iIndex
            };
            result.push(match);
          }
          return result;
        }
        _renderMatches(matches) {
          if (matches.length === 0) {
            return;
          }
          const {
            findController,
            pageIdx
          } = this;
          const {
            textContentItemsStr,
            textDivs
          } = this;
          const isSelectedPage = pageIdx === findController.selected.pageIdx;
          const selectedMatchIdx = findController.selected.matchIdx;
          const highlightAll = findController.state.highlightAll;
          let prevEnd = null;
          const infinity = {
            divIdx: -1,
            offset: undefined
          };
          function beginText(begin, className) {
            const divIdx = begin.divIdx;
            textDivs[divIdx].textContent = "";
            return appendTextToDiv(divIdx, 0, begin.offset, className);
          }
          function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
            let div = textDivs[divIdx];
            if (div.nodeType === Node.TEXT_NODE) {
              const span = document.createElement("span");
              div.before(span);
              span.append(div);
              textDivs[divIdx] = span;
              div = span;
            }
            const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
            const node = document.createTextNode(content);
            if (className) {
              const span = document.createElement("span");
              span.className = `${className} appended`;
              span.append(node);
              div.append(span);
              return className.includes("selected") ? span.offsetLeft : 0;
            }
            div.append(node);
            return 0;
          }
          let i0 = selectedMatchIdx,
            i1 = i0 + 1;
          if (highlightAll) {
            i0 = 0;
            i1 = matches.length;
          } else if (!isSelectedPage) {
            return;
          }
          let lastDivIdx = -1;
          let lastOffset = -1;
          for (let i = i0; i < i1; i++) {
            const match = matches[i];
            const begin = match.begin;
            if (begin.divIdx === lastDivIdx && begin.offset === lastOffset) {
              continue;
            }
            lastDivIdx = begin.divIdx;
            lastOffset = begin.offset;
            const end = match.end;
            const isSelected = isSelectedPage && i === selectedMatchIdx;
            const highlightSuffix = isSelected ? " selected" : "";
            let selectedLeft = 0;
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
              if (prevEnd !== null) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
              }
              beginText(begin);
            } else {
              appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
            }
            if (begin.divIdx === end.divIdx) {
              selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, end.offset, "highlight" + highlightSuffix);
            } else {
              selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, "highlight begin" + highlightSuffix);
              for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                textDivs[n0].className = "highlight middle" + highlightSuffix;
              }
              beginText(end, "highlight end" + highlightSuffix);
            }
            prevEnd = end;
            if (isSelected) {
              findController.scrollMatchIntoView({
                element: textDivs[begin.divIdx],
                selectedLeft,
                pageIndex: pageIdx,
                matchIndex: selectedMatchIdx
              });
            }
          }
          if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
          }
        }
        _updateMatches(reset = false) {
          if (!this.enabled && !reset) {
            return;
          }
          const {
            findController,
            matches,
            pageIdx
          } = this;
          const {
            textContentItemsStr,
            textDivs
          } = this;
          let clearedUntilDivIdx = -1;
          for (const match of matches) {
            const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
            for (let n = begin, end = match.end.divIdx; n <= end; n++) {
              const div = textDivs[n];
              div.textContent = textContentItemsStr[n];
              div.className = "";
            }
            clearedUntilDivIdx = match.end.divIdx + 1;
          }
          if (!findController?.highlightMatches || reset) {
            return;
          }
          const pageMatches = findController.pageMatches[pageIdx] || null;
          const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
          this.matches = this._convertMatches(pageMatches, pageMatchesLength);
          this._renderMatches(this.matches);
        }
      }
      exports.TextHighlighter = TextHighlighter;

      /***/
    }), ( /* 19 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextLayerBuilder = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _ui_utils = __w_pdfjs_require__(2);
      var _enablePermissions = /*#__PURE__*/_classPrivateFieldLooseKey("enablePermissions");
      var _rotation = /*#__PURE__*/_classPrivateFieldLooseKey("rotation");
      var _scale = /*#__PURE__*/_classPrivateFieldLooseKey("scale");
      var _textContentSource = /*#__PURE__*/_classPrivateFieldLooseKey("textContentSource");
      var _finishRendering = /*#__PURE__*/_classPrivateFieldLooseKey("finishRendering");
      var _bindMouse = /*#__PURE__*/_classPrivateFieldLooseKey("bindMouse");
      class TextLayerBuilder {
        constructor({
          highlighter = null,
          accessibilityManager = null,
          isOffscreenCanvasSupported = true,
          enablePermissions = false
        }) {
          Object.defineProperty(this, _bindMouse, {
            value: _bindMouse2
          });
          Object.defineProperty(this, _finishRendering, {
            value: _finishRendering2
          });
          Object.defineProperty(this, _enablePermissions, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _rotation, {
            writable: true,
            value: 0
          });
          Object.defineProperty(this, _scale, {
            writable: true,
            value: 0
          });
          Object.defineProperty(this, _textContentSource, {
            writable: true,
            value: null
          });
          this.textContentItemsStr = [];
          this.renderingDone = false;
          this.textDivs = [];
          this.textDivProperties = new WeakMap();
          this.textLayerRenderTask = null;
          this.highlighter = highlighter;
          this.accessibilityManager = accessibilityManager;
          this.isOffscreenCanvasSupported = isOffscreenCanvasSupported;
          _classPrivateFieldLooseBase(this, _enablePermissions)[_enablePermissions] = enablePermissions === true;
          this.div = document.createElement("div");
          this.div.className = "textLayer";
          this.hide();
        }
        get numTextDivs() {
          return this.textDivs.length;
        }
        async render(viewport) {
          if (!_classPrivateFieldLooseBase(this, _textContentSource)[_textContentSource]) {
            throw new Error('No "textContentSource" parameter specified.');
          }
          const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
          const {
            rotation
          } = viewport;
          if (this.renderingDone) {
            const mustRotate = rotation !== _classPrivateFieldLooseBase(this, _rotation)[_rotation];
            const mustRescale = scale !== _classPrivateFieldLooseBase(this, _scale)[_scale];
            if (mustRotate || mustRescale) {
              this.hide();
              (0, _pdfjsLib.updateTextLayer)({
                container: this.div,
                viewport,
                textDivs: this.textDivs,
                textDivProperties: this.textDivProperties,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                mustRescale,
                mustRotate
              });
              _classPrivateFieldLooseBase(this, _scale)[_scale] = scale;
              _classPrivateFieldLooseBase(this, _rotation)[_rotation] = rotation;
            }
            this.show();
            return;
          }
          this.cancel();
          this.highlighter?.setTextMapping(this.textDivs, this.textContentItemsStr);
          this.accessibilityManager?.setTextMapping(this.textDivs);
          this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
            textContentSource: _classPrivateFieldLooseBase(this, _textContentSource)[_textContentSource],
            container: this.div,
            viewport,
            textDivs: this.textDivs,
            textDivProperties: this.textDivProperties,
            textContentItemsStr: this.textContentItemsStr,
            isOffscreenCanvasSupported: this.isOffscreenCanvasSupported
          });
          await this.textLayerRenderTask.promise;
          _classPrivateFieldLooseBase(this, _finishRendering)[_finishRendering]();
          _classPrivateFieldLooseBase(this, _scale)[_scale] = scale;
          _classPrivateFieldLooseBase(this, _rotation)[_rotation] = rotation;
          this.show();
          this.accessibilityManager?.enable();
        }
        hide() {
          if (!this.div.hidden) {
            this.highlighter?.disable();
            this.div.hidden = true;
          }
        }
        show() {
          if (this.div.hidden && this.renderingDone) {
            this.div.hidden = false;
            this.highlighter?.enable();
          }
        }
        cancel() {
          if (this.textLayerRenderTask) {
            this.textLayerRenderTask.cancel();
            this.textLayerRenderTask = null;
          }
          this.highlighter?.disable();
          this.accessibilityManager?.disable();
          this.textContentItemsStr.length = 0;
          this.textDivs.length = 0;
          this.textDivProperties = new WeakMap();
        }
        setTextContentSource(source) {
          this.cancel();
          _classPrivateFieldLooseBase(this, _textContentSource)[_textContentSource] = source;
        }
      }
      function _finishRendering2() {
        this.renderingDone = true;
        const endOfContent = document.createElement("div");
        endOfContent.className = "endOfContent";
        this.div.append(endOfContent);
        _classPrivateFieldLooseBase(this, _bindMouse)[_bindMouse]();
      }
      function _bindMouse2() {
        const {
          div
        } = this;
        div.addEventListener("mousedown", evt => {
          const end = div.querySelector(".endOfContent");
          if (!end) {
            return;
          }
          let adjustTop = evt.target !== div;
          adjustTop &&= getComputedStyle(end).getPropertyValue("-moz-user-select") !== "none";
          if (adjustTop) {
            const divBounds = div.getBoundingClientRect();
            const r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
            end.style.top = (r * 100).toFixed(2) + "%";
          }
          end.classList.add("active");
        });
        div.addEventListener("mouseup", () => {
          const end = div.querySelector(".endOfContent");
          if (!end) {
            return;
          }
          end.style.top = "";
          end.classList.remove("active");
        });
        div.addEventListener("copy", event => {
          if (!_classPrivateFieldLooseBase(this, _enablePermissions)[_enablePermissions]) {
            const selection = document.getSelection();
            event.clipboardData.setData("text/plain", (0, _ui_utils.removeNullCharacters)((0, _pdfjsLib.normalizeUnicode)(selection.toString())));
          }
          event.preventDefault();
          event.stopPropagation();
        });
      }
      exports.TextLayerBuilder = TextLayerBuilder;

      /***/
    }), ( /* 20 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.XfaLayerBuilder = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      class XfaLayerBuilder {
        constructor({
          pageDiv,
          pdfPage,
          annotationStorage = null,
          linkService,
          xfaHtml = null
        }) {
          this.pageDiv = pageDiv;
          this.pdfPage = pdfPage;
          this.annotationStorage = annotationStorage;
          this.linkService = linkService;
          this.xfaHtml = xfaHtml;
          this.div = null;
          this._cancelled = false;
        }
        async render(viewport, intent = "display") {
          if (intent === "print") {
            const parameters = {
              viewport: viewport.clone({
                dontFlip: true
              }),
              div: this.div,
              xfaHtml: this.xfaHtml,
              annotationStorage: this.annotationStorage,
              linkService: this.linkService,
              intent
            };
            const div = document.createElement("div");
            this.pageDiv.append(div);
            parameters.div = div;
            return _pdfjsLib.XfaLayer.render(parameters);
          }
          const xfaHtml = await this.pdfPage.getXfa();
          if (this._cancelled || !xfaHtml) {
            return {
              textDivs: []
            };
          }
          const parameters = {
            viewport: viewport.clone({
              dontFlip: true
            }),
            div: this.div,
            xfaHtml,
            annotationStorage: this.annotationStorage,
            linkService: this.linkService,
            intent
          };
          if (this.div) {
            return _pdfjsLib.XfaLayer.update(parameters);
          }
          this.div = document.createElement("div");
          this.pageDiv.append(this.div);
          parameters.div = this.div;
          return _pdfjsLib.XfaLayer.render(parameters);
        }
        cancel() {
          this._cancelled = true;
        }
        hide() {
          if (!this.div) {
            return;
          }
          this.div.hidden = true;
        }
      }
      exports.XfaLayerBuilder = XfaLayerBuilder;

      /***/
    }), ( /* 21 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFScriptingManager = void 0;
      var _ui_utils = __w_pdfjs_require__(2);
      var _pdfjsLib = __w_pdfjs_require__(4);
      class PDFScriptingManager {
        constructor({
          eventBus,
          sandboxBundleSrc = null,
          scriptingFactory = null,
          docPropertiesLookup = null
        }) {
          this._pdfDocument = null;
          this._pdfViewer = null;
          this._closeCapability = null;
          this._destroyCapability = null;
          this._scripting = null;
          this._ready = false;
          this._eventBus = eventBus;
          this._sandboxBundleSrc = sandboxBundleSrc;
          this._scriptingFactory = scriptingFactory;
          this._docPropertiesLookup = docPropertiesLookup;
          if (!this._scriptingFactory) {
            window.addEventListener("updatefromsandbox", event => {
              this._eventBus.dispatch("updatefromsandbox", {
                source: window,
                detail: event.detail
              });
            });
          }
        }
        setViewer(pdfViewer) {
          this._pdfViewer = pdfViewer;
        }
        async setDocument(pdfDocument) {
          if (this._pdfDocument) {
            await this._destroyScripting();
          }
          this._pdfDocument = pdfDocument;
          if (!pdfDocument) {
            return;
          }
          const [objects, calculationOrder, docActions] = await Promise.all([pdfDocument.getFieldObjects(), pdfDocument.getCalculationOrderIds(), pdfDocument.getJSActions()]);
          if (!objects && !docActions) {
            await this._destroyScripting();
            return;
          }
          if (pdfDocument !== this._pdfDocument) {
            return;
          }
          try {
            this._scripting = this._createScripting();
          } catch (error) {
            console.error(`PDFScriptingManager.setDocument: "${error?.message}".`);
            await this._destroyScripting();
            return;
          }
          this._internalEvents.set("updatefromsandbox", event => {
            if (event?.source !== window) {
              return;
            }
            this._updateFromSandbox(event.detail);
          });
          this._internalEvents.set("dispatcheventinsandbox", event => {
            this._scripting?.dispatchEventInSandbox(event.detail);
          });
          this._internalEvents.set("pagechanging", ({
            pageNumber,
            previous
          }) => {
            if (pageNumber === previous) {
              return;
            }
            this._dispatchPageClose(previous);
            this._dispatchPageOpen(pageNumber);
          });
          this._internalEvents.set("pagerendered", ({
            pageNumber
          }) => {
            if (!this._pageOpenPending.has(pageNumber)) {
              return;
            }
            if (pageNumber !== this._pdfViewer.currentPageNumber) {
              return;
            }
            this._dispatchPageOpen(pageNumber);
          });
          this._internalEvents.set("pagesdestroy", async event => {
            await this._dispatchPageClose(this._pdfViewer.currentPageNumber);
            await this._scripting?.dispatchEventInSandbox({
              id: "doc",
              name: "WillClose"
            });
            this._closeCapability?.resolve();
          });
          for (const [name, listener] of this._internalEvents) {
            this._eventBus._on(name, listener);
          }
          try {
            const docProperties = await this._getDocProperties();
            if (pdfDocument !== this._pdfDocument) {
              return;
            }
            await this._scripting.createSandbox({
              objects,
              calculationOrder,
              appInfo: {
                platform: navigator.platform,
                language: navigator.language
              },
              docInfo: {
                ...docProperties,
                actions: docActions
              }
            });
            this._eventBus.dispatch("sandboxcreated", {
              source: this
            });
          } catch (error) {
            console.error(`PDFScriptingManager.setDocument: "${error?.message}".`);
            await this._destroyScripting();
            return;
          }
          await this._scripting?.dispatchEventInSandbox({
            id: "doc",
            name: "Open"
          });
          await this._dispatchPageOpen(this._pdfViewer.currentPageNumber, true);
          Promise.resolve().then(() => {
            if (pdfDocument === this._pdfDocument) {
              this._ready = true;
            }
          });
        }
        async dispatchWillSave(detail) {
          return this._scripting?.dispatchEventInSandbox({
            id: "doc",
            name: "WillSave"
          });
        }
        async dispatchDidSave(detail) {
          return this._scripting?.dispatchEventInSandbox({
            id: "doc",
            name: "DidSave"
          });
        }
        async dispatchWillPrint(detail) {
          return this._scripting?.dispatchEventInSandbox({
            id: "doc",
            name: "WillPrint"
          });
        }
        async dispatchDidPrint(detail) {
          return this._scripting?.dispatchEventInSandbox({
            id: "doc",
            name: "DidPrint"
          });
        }
        get destroyPromise() {
          return this._destroyCapability?.promise || null;
        }
        get ready() {
          return this._ready;
        }
        get _internalEvents() {
          return (0, _pdfjsLib.shadow)(this, "_internalEvents", new Map());
        }
        get _pageOpenPending() {
          return (0, _pdfjsLib.shadow)(this, "_pageOpenPending", new Set());
        }
        get _visitedPages() {
          return (0, _pdfjsLib.shadow)(this, "_visitedPages", new Map());
        }
        async _updateFromSandbox(detail) {
          const isInPresentationMode = this._pdfViewer.isInPresentationMode || this._pdfViewer.isChangingPresentationMode;
          const {
            id,
            siblings,
            command,
            value
          } = detail;
          if (!id) {
            switch (command) {
              case "clear":
                console.clear();
                break;
              case "error":
                console.error(value);
                break;
              case "layout":
                {
                  if (isInPresentationMode) {
                    return;
                  }
                  const modes = (0, _ui_utils.apiPageLayoutToViewerModes)(value);
                  this._pdfViewer.spreadMode = modes.spreadMode;
                  break;
                }
              case "page-num":
                this._pdfViewer.currentPageNumber = value + 1;
                break;
              case "print":
                await this._pdfViewer.pagesPromise;
                this._eventBus.dispatch("print", {
                  source: this
                });
                break;
              case "println":
                console.log(value);
                break;
              case "zoom":
                if (isInPresentationMode) {
                  return;
                }
                this._pdfViewer.currentScaleValue = value;
                break;
              case "SaveAs":
                this._eventBus.dispatch("download", {
                  source: this
                });
                break;
              case "FirstPage":
                this._pdfViewer.currentPageNumber = 1;
                break;
              case "LastPage":
                this._pdfViewer.currentPageNumber = this._pdfViewer.pagesCount;
                break;
              case "NextPage":
                this._pdfViewer.nextPage();
                break;
              case "PrevPage":
                this._pdfViewer.previousPage();
                break;
              case "ZoomViewIn":
                if (isInPresentationMode) {
                  return;
                }
                this._pdfViewer.increaseScale();
                break;
              case "ZoomViewOut":
                if (isInPresentationMode) {
                  return;
                }
                this._pdfViewer.decreaseScale();
                break;
            }
            return;
          }
          if (isInPresentationMode) {
            if (detail.focus) {
              return;
            }
          }
          delete detail.id;
          delete detail.siblings;
          const ids = siblings ? [id, ...siblings] : [id];
          for (const elementId of ids) {
            const element = document.querySelector(`[data-element-id="${elementId}"]`);
            if (element) {
              element.dispatchEvent(new CustomEvent("updatefromsandbox", {
                detail
              }));
            } else {
              this._pdfDocument?.annotationStorage.setValue(elementId, detail);
            }
          }
        }
        async _dispatchPageOpen(pageNumber, initialize = false) {
          const pdfDocument = this._pdfDocument,
            visitedPages = this._visitedPages;
          if (initialize) {
            this._closeCapability = new _pdfjsLib.PromiseCapability();
          }
          if (!this._closeCapability) {
            return;
          }
          const pageView = this._pdfViewer.getPageView(pageNumber - 1);
          if (pageView?.renderingState !== _ui_utils.RenderingStates.FINISHED) {
            this._pageOpenPending.add(pageNumber);
            return;
          }
          this._pageOpenPending.delete(pageNumber);
          const actionsPromise = (async () => {
            const actions = await (!visitedPages.has(pageNumber) ? pageView.pdfPage?.getJSActions() : null);
            if (pdfDocument !== this._pdfDocument) {
              return;
            }
            await this._scripting?.dispatchEventInSandbox({
              id: "page",
              name: "PageOpen",
              pageNumber,
              actions
            });
          })();
          visitedPages.set(pageNumber, actionsPromise);
        }
        async _dispatchPageClose(pageNumber) {
          const pdfDocument = this._pdfDocument,
            visitedPages = this._visitedPages;
          if (!this._closeCapability) {
            return;
          }
          if (this._pageOpenPending.has(pageNumber)) {
            return;
          }
          const actionsPromise = visitedPages.get(pageNumber);
          if (!actionsPromise) {
            return;
          }
          visitedPages.set(pageNumber, null);
          await actionsPromise;
          if (pdfDocument !== this._pdfDocument) {
            return;
          }
          await this._scripting?.dispatchEventInSandbox({
            id: "page",
            name: "PageClose",
            pageNumber
          });
        }
        async _getDocProperties() {
          if (this._docPropertiesLookup) {
            return this._docPropertiesLookup(this._pdfDocument);
          }
          const {
            docPropertiesLookup
          } = __w_pdfjs_require__(22);
          return docPropertiesLookup(this._pdfDocument);
        }
        _createScripting() {
          this._destroyCapability = new _pdfjsLib.PromiseCapability();
          if (this._scripting) {
            throw new Error("_createScripting: Scripting already exists.");
          }
          if (this._scriptingFactory) {
            return this._scriptingFactory.createScripting({
              sandboxBundleSrc: this._sandboxBundleSrc
            });
          }
          const {
            GenericScripting
          } = __w_pdfjs_require__(22);
          return new GenericScripting(this._sandboxBundleSrc);
        }
        async _destroyScripting() {
          if (!this._scripting) {
            this._pdfDocument = null;
            this._destroyCapability?.resolve();
            return;
          }
          if (this._closeCapability) {
            await Promise.race([this._closeCapability.promise, new Promise(resolve => {
              setTimeout(resolve, 1000);
            })]).catch(reason => {});
            this._closeCapability = null;
          }
          this._pdfDocument = null;
          try {
            await this._scripting.destroySandbox();
          } catch (ex) {}
          for (const [name, listener] of this._internalEvents) {
            this._eventBus._off(name, listener);
          }
          this._internalEvents.clear();
          this._pageOpenPending.clear();
          this._visitedPages.clear();
          this._scripting = null;
          this._ready = false;
          this._destroyCapability?.resolve();
        }
      }
      exports.PDFScriptingManager = PDFScriptingManager;

      /***/
    }), ( /* 22 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GenericScripting = void 0;
      exports.docPropertiesLookup = docPropertiesLookup;
      var _pdfjsLib = __w_pdfjs_require__(4);
      async function docPropertiesLookup(pdfDocument) {
        const url = "",
          baseUrl = url.split("#")[0];
        let {
          info,
          metadata,
          contentDispositionFilename,
          contentLength
        } = await pdfDocument.getMetadata();
        if (!contentLength) {
          const {
            length
          } = await pdfDocument.getDownloadInfo();
          contentLength = length;
        }
        return {
          ...info,
          baseURL: baseUrl,
          filesize: contentLength,
          filename: contentDispositionFilename || (0, _pdfjsLib.getPdfFilenameFromUrl)(url),
          metadata: metadata?.getRaw(),
          authors: metadata?.get("dc:creator"),
          numPages: pdfDocument.numPages,
          URL: url
        };
      }
      class GenericScripting {
        constructor(sandboxBundleSrc) {
          this._ready = (0, _pdfjsLib.loadScript)(sandboxBundleSrc, true).then(() => {
            return window.pdfjsSandbox.QuickJSSandbox();
          });
        }
        async createSandbox(data) {
          const sandbox = await this._ready;
          sandbox.create(data);
        }
        async dispatchEventInSandbox(event) {
          const sandbox = await this._ready;
          setTimeout(() => sandbox.dispatchEvent(event), 0);
        }
        async destroySandbox() {
          const sandbox = await this._ready;
          sandbox.nukeSandbox();
        }
      }
      exports.GenericScripting = GenericScripting;

      /***/
    }), ( /* 23 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFSinglePageViewer = void 0;
      var _ui_utils = __w_pdfjs_require__(2);
      var _pdf_viewer = __w_pdfjs_require__(24);
      class PDFSinglePageViewer extends _pdf_viewer.PDFViewer {
        _resetView() {
          super._resetView();
          this._scrollMode = _ui_utils.ScrollMode.PAGE;
          this._spreadMode = _ui_utils.SpreadMode.NONE;
        }
        set scrollMode(mode) {}
        _updateScrollMode() {}
        set spreadMode(mode) {}
        _updateSpreadMode() {}
      }
      exports.PDFSinglePageViewer = PDFSinglePageViewer;

      /***/
    }), ( /* 24 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PagesCountLimit = exports.PDFViewer = exports.PDFPageViewBuffer = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _ui_utils = __w_pdfjs_require__(2);
      var _l10n_utils = __w_pdfjs_require__(5);
      var _pdf_page_view = __w_pdfjs_require__(13);
      var _pdf_rendering_queue = __w_pdfjs_require__(25);
      var _pdf_link_service = __w_pdfjs_require__(1);
      const DEFAULT_CACHE_SIZE = 10;
      const PagesCountLimit = {
        FORCE_SCROLL_MODE_PAGE: 15000,
        FORCE_LAZY_PAGE_INIT: 7500,
        PAUSE_EAGER_PAGE_INIT: 250
      };
      exports.PagesCountLimit = PagesCountLimit;
      function isValidAnnotationEditorMode(mode) {
        return Object.values(_pdfjsLib.AnnotationEditorType).includes(mode) && mode !== _pdfjsLib.AnnotationEditorType.DISABLE;
      }
      var _buf = /*#__PURE__*/_classPrivateFieldLooseKey("buf");
      var _size = /*#__PURE__*/_classPrivateFieldLooseKey("size");
      var _destroyFirstView = /*#__PURE__*/_classPrivateFieldLooseKey("destroyFirstView");
      class PDFPageViewBuffer {
        constructor(size) {
          Object.defineProperty(this, _destroyFirstView, {
            value: _destroyFirstView2
          });
          Object.defineProperty(this, _buf, {
            writable: true,
            value: new Set()
          });
          Object.defineProperty(this, _size, {
            writable: true,
            value: 0
          });
          _classPrivateFieldLooseBase(this, _size)[_size] = size;
        }
        push(view) {
          const buf = _classPrivateFieldLooseBase(this, _buf)[_buf];
          if (buf.has(view)) {
            buf.delete(view);
          }
          buf.add(view);
          if (buf.size > _classPrivateFieldLooseBase(this, _size)[_size]) {
            _classPrivateFieldLooseBase(this, _destroyFirstView)[_destroyFirstView]();
          }
        }
        resize(newSize, idsToKeep = null) {
          _classPrivateFieldLooseBase(this, _size)[_size] = newSize;
          const buf = _classPrivateFieldLooseBase(this, _buf)[_buf];
          if (idsToKeep) {
            const ii = buf.size;
            let i = 1;
            for (const view of buf) {
              if (idsToKeep.has(view.id)) {
                buf.delete(view);
                buf.add(view);
              }
              if (++i > ii) {
                break;
              }
            }
          }
          while (buf.size > _classPrivateFieldLooseBase(this, _size)[_size]) {
            _classPrivateFieldLooseBase(this, _destroyFirstView)[_destroyFirstView]();
          }
        }
        has(view) {
          return _classPrivateFieldLooseBase(this, _buf)[_buf].has(view);
        }
        [Symbol.iterator]() {
          return _classPrivateFieldLooseBase(this, _buf)[_buf].keys();
        }
      }
      function _destroyFirstView2() {
        const firstView = _classPrivateFieldLooseBase(this, _buf)[_buf].keys().next().value;
        firstView?.destroy();
        _classPrivateFieldLooseBase(this, _buf)[_buf].delete(firstView);
      }
      exports.PDFPageViewBuffer = PDFPageViewBuffer;
      var _buffer = /*#__PURE__*/_classPrivateFieldLooseKey("buffer");
      var _annotationEditorMode = /*#__PURE__*/_classPrivateFieldLooseKey("annotationEditorMode");
      var _annotationEditorUIManager = /*#__PURE__*/_classPrivateFieldLooseKey("annotationEditorUIManager");
      var _annotationMode2 = /*#__PURE__*/_classPrivateFieldLooseKey("annotationMode");
      var _containerTopLeft = /*#__PURE__*/_classPrivateFieldLooseKey("containerTopLeft");
      var _copyCallbackBound = /*#__PURE__*/_classPrivateFieldLooseKey("copyCallbackBound");
      var _enablePermissions2 = /*#__PURE__*/_classPrivateFieldLooseKey("enablePermissions");
      var _getAllTextInProgress = /*#__PURE__*/_classPrivateFieldLooseKey("getAllTextInProgress");
      var _hiddenCopyElement = /*#__PURE__*/_classPrivateFieldLooseKey("hiddenCopyElement");
      var _interruptCopyCondition = /*#__PURE__*/_classPrivateFieldLooseKey("interruptCopyCondition");
      var _previousContainerHeight = /*#__PURE__*/_classPrivateFieldLooseKey("previousContainerHeight");
      var _resizeObserver = /*#__PURE__*/_classPrivateFieldLooseKey("resizeObserver");
      var _scrollModePageState = /*#__PURE__*/_classPrivateFieldLooseKey("scrollModePageState");
      var _onVisibilityChange = /*#__PURE__*/_classPrivateFieldLooseKey("onVisibilityChange");
      var _scaleTimeoutId = /*#__PURE__*/_classPrivateFieldLooseKey("scaleTimeoutId");
      var _textLayerMode2 = /*#__PURE__*/_classPrivateFieldLooseKey("textLayerMode");
      var _layerProperties2 = /*#__PURE__*/_classPrivateFieldLooseKey("layerProperties");
      var _initializePermissions = /*#__PURE__*/_classPrivateFieldLooseKey("initializePermissions");
      var _onePageRenderedOrForceFetch = /*#__PURE__*/_classPrivateFieldLooseKey("onePageRenderedOrForceFetch");
      var _copyCallback = /*#__PURE__*/_classPrivateFieldLooseKey("copyCallback");
      var _ensurePageViewVisible = /*#__PURE__*/_classPrivateFieldLooseKey("ensurePageViewVisible");
      var _scrollIntoView = /*#__PURE__*/_classPrivateFieldLooseKey("scrollIntoView");
      var _isSameScale = /*#__PURE__*/_classPrivateFieldLooseKey("isSameScale");
      var _setScaleUpdatePages = /*#__PURE__*/_classPrivateFieldLooseKey("setScaleUpdatePages");
      var _pageWidthScaleFactor = /*#__PURE__*/_classPrivateFieldLooseKey("pageWidthScaleFactor");
      var _setScale = /*#__PURE__*/_classPrivateFieldLooseKey("setScale");
      var _resetCurrentPageView = /*#__PURE__*/_classPrivateFieldLooseKey("resetCurrentPageView");
      var _ensurePdfPageLoaded = /*#__PURE__*/_classPrivateFieldLooseKey("ensurePdfPageLoaded");
      var _getScrollAhead = /*#__PURE__*/_classPrivateFieldLooseKey("getScrollAhead");
      var _updateContainerHeightCss = /*#__PURE__*/_classPrivateFieldLooseKey("updateContainerHeightCss");
      var _resizeObserverCallback = /*#__PURE__*/_classPrivateFieldLooseKey("resizeObserverCallback");
      class PDFViewer {
        constructor(_options2) {
          Object.defineProperty(this, _resizeObserverCallback, {
            value: _resizeObserverCallback2
          });
          Object.defineProperty(this, _updateContainerHeightCss, {
            value: _updateContainerHeightCss2
          });
          Object.defineProperty(this, _getScrollAhead, {
            value: _getScrollAhead2
          });
          Object.defineProperty(this, _ensurePdfPageLoaded, {
            value: _ensurePdfPageLoaded2
          });
          Object.defineProperty(this, _resetCurrentPageView, {
            value: _resetCurrentPageView2
          });
          Object.defineProperty(this, _setScale, {
            value: _setScale2
          });
          Object.defineProperty(this, _pageWidthScaleFactor, {
            get: _get_pageWidthScaleFactor,
            set: void 0
          });
          Object.defineProperty(this, _setScaleUpdatePages, {
            value: _setScaleUpdatePages2
          });
          Object.defineProperty(this, _isSameScale, {
            value: _isSameScale2
          });
          Object.defineProperty(this, _scrollIntoView, {
            value: _scrollIntoView2
          });
          Object.defineProperty(this, _ensurePageViewVisible, {
            value: _ensurePageViewVisible2
          });
          Object.defineProperty(this, _copyCallback, {
            value: _copyCallback2
          });
          Object.defineProperty(this, _onePageRenderedOrForceFetch, {
            value: _onePageRenderedOrForceFetch2
          });
          Object.defineProperty(this, _initializePermissions, {
            value: _initializePermissions2
          });
          Object.defineProperty(this, _layerProperties2, {
            value: _layerProperties3
          });
          Object.defineProperty(this, _buffer, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _annotationEditorMode, {
            writable: true,
            value: _pdfjsLib.AnnotationEditorType.NONE
          });
          Object.defineProperty(this, _annotationEditorUIManager, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _annotationMode2, {
            writable: true,
            value: _pdfjsLib.AnnotationMode.ENABLE_FORMS
          });
          Object.defineProperty(this, _containerTopLeft, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _copyCallbackBound, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _enablePermissions2, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _getAllTextInProgress, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _hiddenCopyElement, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _interruptCopyCondition, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _previousContainerHeight, {
            writable: true,
            value: 0
          });
          Object.defineProperty(this, _resizeObserver, {
            writable: true,
            value: new ResizeObserver(_classPrivateFieldLooseBase(this, _resizeObserverCallback)[_resizeObserverCallback].bind(this))
          });
          Object.defineProperty(this, _scrollModePageState, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _onVisibilityChange, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _scaleTimeoutId, {
            writable: true,
            value: null
          });
          Object.defineProperty(this, _textLayerMode2, {
            writable: true,
            value: _ui_utils.TextLayerMode.ENABLE
          });
          const viewerVersion = '3.6.172';
          if (_pdfjsLib.version !== viewerVersion) {
            throw new Error(`The API version "${_pdfjsLib.version}" does not match the Viewer version "${viewerVersion}".`);
          }
          this.container = _options2.container;
          this.viewer = _options2.viewer || _options2.container.firstElementChild;
          if (this.container?.tagName !== "DIV" || this.viewer?.tagName !== "DIV") {
            throw new Error("Invalid `container` and/or `viewer` option.");
          }
          if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute") {
            throw new Error("The `container` must be absolutely positioned.");
          }
          _classPrivateFieldLooseBase(this, _resizeObserver)[_resizeObserver].observe(this.container);
          this.eventBus = _options2.eventBus;
          this.linkService = _options2.linkService || new _pdf_link_service.SimpleLinkService();
          this.downloadManager = _options2.downloadManager || null;
          this.findController = _options2.findController || null;
          this._scriptingManager = _options2.scriptingManager || null;
          _classPrivateFieldLooseBase(this, _textLayerMode2)[_textLayerMode2] = _options2.textLayerMode ?? _ui_utils.TextLayerMode.ENABLE;
          _classPrivateFieldLooseBase(this, _annotationMode2)[_annotationMode2] = _options2.annotationMode ?? _pdfjsLib.AnnotationMode.ENABLE_FORMS;
          _classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode] = _options2.annotationEditorMode ?? _pdfjsLib.AnnotationEditorType.NONE;
          this.imageResourcesPath = _options2.imageResourcesPath || "";
          this.enablePrintAutoRotate = _options2.enablePrintAutoRotate || false;
          this.removePageBorders = _options2.removePageBorders || false;
          this.useOnlyCssZoom = _options2.useOnlyCssZoom || false;
          this.isOffscreenCanvasSupported = _options2.isOffscreenCanvasSupported ?? true;
          this.maxCanvasPixels = _options2.maxCanvasPixels;
          this.l10n = _options2.l10n || _l10n_utils.NullL10n;
          _classPrivateFieldLooseBase(this, _enablePermissions2)[_enablePermissions2] = _options2.enablePermissions || false;
          this.pageColors = _options2.pageColors || null;
          if (this.pageColors && !(CSS.supports("color", this.pageColors.background) && CSS.supports("color", this.pageColors.foreground))) {
            if (this.pageColors.background || this.pageColors.foreground) {
              console.warn("PDFViewer: Ignoring `pageColors`-option, since the browser doesn't support the values used.");
            }
            this.pageColors = null;
          }
          this.defaultRenderingQueue = !_options2.renderingQueue;
          if (this.defaultRenderingQueue) {
            this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
            this.renderingQueue.setViewer(this);
          } else {
            this.renderingQueue = _options2.renderingQueue;
          }
          this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
          this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
          this._onBeforeDraw = this._onAfterDraw = null;
          this._resetView();
          if (this.removePageBorders) {
            this.viewer.classList.add("removePageBorders");
          }
          _classPrivateFieldLooseBase(this, _updateContainerHeightCss)[_updateContainerHeightCss]();
        }
        get pagesCount() {
          return this._pages.length;
        }
        getPageView(index) {
          return this._pages[index];
        }
        get pageViewsReady() {
          return this._pagesCapability.settled && this._pages.every(pageView => pageView?.pdfPage);
        }
        get renderForms() {
          return _classPrivateFieldLooseBase(this, _annotationMode2)[_annotationMode2] === _pdfjsLib.AnnotationMode.ENABLE_FORMS;
        }
        get enableScripting() {
          return !!this._scriptingManager;
        }
        get currentPageNumber() {
          return this._currentPageNumber;
        }
        set currentPageNumber(val) {
          if (!Number.isInteger(val)) {
            throw new Error("Invalid page number.");
          }
          if (!this.pdfDocument) {
            return;
          }
          if (!this._setCurrentPageNumber(val, true)) {
            console.error(`currentPageNumber: "${val}" is not a valid page.`);
          }
        }
        _setCurrentPageNumber(val, resetCurrentPageView = false) {
          if (this._currentPageNumber === val) {
            if (resetCurrentPageView) {
              _classPrivateFieldLooseBase(this, _resetCurrentPageView)[_resetCurrentPageView]();
            }
            return true;
          }
          if (!(0 < val && val <= this.pagesCount)) {
            return false;
          }
          const previous = this._currentPageNumber;
          this._currentPageNumber = val;
          this.eventBus.dispatch("pagechanging", {
            source: this,
            pageNumber: val,
            pageLabel: this._pageLabels?.[val - 1] ?? null,
            previous
          });
          if (resetCurrentPageView) {
            _classPrivateFieldLooseBase(this, _resetCurrentPageView)[_resetCurrentPageView]();
          }
          return true;
        }
        get currentPageLabel() {
          return this._pageLabels?.[this._currentPageNumber - 1] ?? null;
        }
        set currentPageLabel(val) {
          if (!this.pdfDocument) {
            return;
          }
          let page = val | 0;
          if (this._pageLabels) {
            const i = this._pageLabels.indexOf(val);
            if (i >= 0) {
              page = i + 1;
            }
          }
          if (!this._setCurrentPageNumber(page, true)) {
            console.error(`currentPageLabel: "${val}" is not a valid page.`);
          }
        }
        get currentScale() {
          return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
        }
        set currentScale(val) {
          if (isNaN(val)) {
            throw new Error("Invalid numeric scale.");
          }
          if (!this.pdfDocument) {
            return;
          }
          _classPrivateFieldLooseBase(this, _setScale)[_setScale](val, {
            noScroll: false
          });
        }
        get currentScaleValue() {
          return this._currentScaleValue;
        }
        set currentScaleValue(val) {
          if (!this.pdfDocument) {
            return;
          }
          _classPrivateFieldLooseBase(this, _setScale)[_setScale](val, {
            noScroll: false
          });
        }
        get pagesRotation() {
          return this._pagesRotation;
        }
        set pagesRotation(rotation) {
          if (!(0, _ui_utils.isValidRotation)(rotation)) {
            throw new Error("Invalid pages rotation angle.");
          }
          if (!this.pdfDocument) {
            return;
          }
          rotation %= 360;
          if (rotation < 0) {
            rotation += 360;
          }
          if (this._pagesRotation === rotation) {
            return;
          }
          this._pagesRotation = rotation;
          const pageNumber = this._currentPageNumber;
          this.refresh(true, {
            rotation
          });
          if (this._currentScaleValue) {
            _classPrivateFieldLooseBase(this, _setScale)[_setScale](this._currentScaleValue, {
              noScroll: true
            });
          }
          this.eventBus.dispatch("rotationchanging", {
            source: this,
            pagesRotation: rotation,
            pageNumber
          });
          if (this.defaultRenderingQueue) {
            this.update();
          }
        }
        get firstPagePromise() {
          return this.pdfDocument ? this._firstPageCapability.promise : null;
        }
        get onePageRendered() {
          return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
        }
        get pagesPromise() {
          return this.pdfDocument ? this._pagesCapability.promise : null;
        }
        async getAllText() {
          const texts = [];
          const buffer = [];
          for (let pageNum = 1, pagesCount = this.pdfDocument.numPages; pageNum <= pagesCount; ++pageNum) {
            if (_classPrivateFieldLooseBase(this, _interruptCopyCondition)[_interruptCopyCondition]) {
              return null;
            }
            buffer.length = 0;
            const page = await this.pdfDocument.getPage(pageNum);
            const {
              items
            } = await page.getTextContent();
            for (const item of items) {
              if (item.str) {
                buffer.push(item.str);
              }
              if (item.hasEOL) {
                buffer.push("\n");
              }
            }
            texts.push((0, _ui_utils.removeNullCharacters)(buffer.join("")));
          }
          return texts.join("\n");
        }
        setDocument(pdfDocument) {
          if (this.pdfDocument) {
            this.eventBus.dispatch("pagesdestroy", {
              source: this
            });
            this._cancelRendering();
            this._resetView();
            this.findController?.setDocument(null);
            this._scriptingManager?.setDocument(null);
            if (_classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager]) {
              _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager].destroy();
              _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager] = null;
            }
          }
          this.pdfDocument = pdfDocument;
          if (!pdfDocument) {
            return;
          }
          const pagesCount = pdfDocument.numPages;
          const firstPagePromise = pdfDocument.getPage(1);
          const optionalContentConfigPromise = pdfDocument.getOptionalContentConfig();
          const permissionsPromise = _classPrivateFieldLooseBase(this, _enablePermissions2)[_enablePermissions2] ? pdfDocument.getPermissions() : Promise.resolve();
          if (pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
            console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
            const mode = this._scrollMode = _ui_utils.ScrollMode.PAGE;
            this.eventBus.dispatch("scrollmodechanged", {
              source: this,
              mode
            });
          }
          this._pagesCapability.promise.then(() => {
            this.eventBus.dispatch("pagesloaded", {
              source: this,
              pagesCount
            });
          }, () => {});
          this._onBeforeDraw = evt => {
            const pageView = this._pages[evt.pageNumber - 1];
            if (!pageView) {
              return;
            }
            _classPrivateFieldLooseBase(this, _buffer)[_buffer].push(pageView);
          };
          this.eventBus._on("pagerender", this._onBeforeDraw);
          this._onAfterDraw = evt => {
            if (evt.cssTransform || this._onePageRenderedCapability.settled) {
              return;
            }
            this._onePageRenderedCapability.resolve({
              timestamp: evt.timestamp
            });
            this.eventBus._off("pagerendered", this._onAfterDraw);
            this._onAfterDraw = null;
            if (_classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]) {
              document.removeEventListener("visibilitychange", _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]);
              _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange] = null;
            }
          };
          this.eventBus._on("pagerendered", this._onAfterDraw);
          Promise.all([firstPagePromise, permissionsPromise]).then(([firstPdfPage, permissions]) => {
            if (pdfDocument !== this.pdfDocument) {
              return;
            }
            this._firstPageCapability.resolve(firstPdfPage);
            this._optionalContentConfigPromise = optionalContentConfigPromise;
            const {
              annotationEditorMode,
              annotationMode,
              textLayerMode
            } = _classPrivateFieldLooseBase(this, _initializePermissions)[_initializePermissions](permissions);
            if (textLayerMode !== _ui_utils.TextLayerMode.DISABLE) {
              const element = _classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement] = document.createElement("div");
              element.id = "hiddenCopyElement";
              this.viewer.before(element);
            }
            if (annotationEditorMode !== _pdfjsLib.AnnotationEditorType.DISABLE) {
              const mode = annotationEditorMode;
              if (pdfDocument.isPureXfa) {
                console.warn("Warning: XFA-editing is not implemented.");
              } else if (isValidAnnotationEditorMode(mode)) {
                _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager] = new _pdfjsLib.AnnotationEditorUIManager(this.container, this.eventBus, pdfDocument?.annotationStorage);
                if (mode !== _pdfjsLib.AnnotationEditorType.NONE) {
                  _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager].updateMode(mode);
                }
              } else {
                console.error(`Invalid AnnotationEditor mode: ${mode}`);
              }
            }
            const layerProperties = _classPrivateFieldLooseBase(this, _layerProperties2)[_layerProperties2].bind(this);
            const viewerElement = this._scrollMode === _ui_utils.ScrollMode.PAGE ? null : this.viewer;
            const scale = this.currentScale;
            const viewport = firstPdfPage.getViewport({
              scale: scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS
            });
            this.viewer.style.setProperty("--scale-factor", viewport.scale);
            for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
              const pageView = new _pdf_page_view.PDFPageView({
                container: viewerElement,
                eventBus: this.eventBus,
                id: pageNum,
                scale,
                defaultViewport: viewport.clone(),
                optionalContentConfigPromise,
                renderingQueue: this.renderingQueue,
                textLayerMode,
                annotationMode,
                imageResourcesPath: this.imageResourcesPath,
                useOnlyCssZoom: this.useOnlyCssZoom,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                maxCanvasPixels: this.maxCanvasPixels,
                pageColors: this.pageColors,
                l10n: this.l10n,
                layerProperties
              });
              this._pages.push(pageView);
            }
            const firstPageView = this._pages[0];
            if (firstPageView) {
              firstPageView.setPdfPage(firstPdfPage);
              this.linkService.cachePageRef(1, firstPdfPage.ref);
            }
            if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
              _classPrivateFieldLooseBase(this, _ensurePageViewVisible)[_ensurePageViewVisible]();
            } else if (this._spreadMode !== _ui_utils.SpreadMode.NONE) {
              this._updateSpreadMode();
            }
            _classPrivateFieldLooseBase(this, _onePageRenderedOrForceFetch)[_onePageRenderedOrForceFetch]().then(async () => {
              this.findController?.setDocument(pdfDocument);
              this._scriptingManager?.setDocument(pdfDocument);
              if (_classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement]) {
                _classPrivateFieldLooseBase(this, _copyCallbackBound)[_copyCallbackBound] = _classPrivateFieldLooseBase(this, _copyCallback)[_copyCallback].bind(this, textLayerMode);
                document.addEventListener("copy", _classPrivateFieldLooseBase(this, _copyCallbackBound)[_copyCallbackBound]);
              }
              if (_classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager]) {
                this.eventBus.dispatch("annotationeditormodechanged", {
                  source: this,
                  mode: _classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode]
                });
              }
              if (pdfDocument.loadingParams.disableAutoFetch || pagesCount > PagesCountLimit.FORCE_LAZY_PAGE_INIT) {
                this._pagesCapability.resolve();
                return;
              }
              let getPagesLeft = pagesCount - 1;
              if (getPagesLeft <= 0) {
                this._pagesCapability.resolve();
                return;
              }
              for (let pageNum = 2; pageNum <= pagesCount; ++pageNum) {
                const promise = pdfDocument.getPage(pageNum).then(pdfPage => {
                  const pageView = this._pages[pageNum - 1];
                  if (!pageView.pdfPage) {
                    pageView.setPdfPage(pdfPage);
                  }
                  this.linkService.cachePageRef(pageNum, pdfPage.ref);
                  if (--getPagesLeft === 0) {
                    this._pagesCapability.resolve();
                  }
                }, reason => {
                  console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
                  if (--getPagesLeft === 0) {
                    this._pagesCapability.resolve();
                  }
                });
                if (pageNum % PagesCountLimit.PAUSE_EAGER_PAGE_INIT === 0) {
                  await promise;
                }
              }
            });
            this.eventBus.dispatch("pagesinit", {
              source: this
            });
            pdfDocument.getMetadata().then(({
              info
            }) => {
              if (pdfDocument !== this.pdfDocument) {
                return;
              }
              if (info.Language) {
                this.viewer.lang = info.Language;
              }
            });
            if (this.defaultRenderingQueue) {
              this.update();
            }
          }).catch(reason => {
            console.error("Unable to initialize viewer", reason);
            this._pagesCapability.reject(reason);
          });
        }
        setPageLabels(labels) {
          if (!this.pdfDocument) {
            return;
          }
          if (!labels) {
            this._pageLabels = null;
          } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null;
            console.error(`setPageLabels: Invalid page labels.`);
          } else {
            this._pageLabels = labels;
          }
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            this._pages[i].setPageLabel(this._pageLabels?.[i] ?? null);
          }
        }
        _resetView() {
          this._pages = [];
          this._currentPageNumber = 1;
          this._currentScale = _ui_utils.UNKNOWN_SCALE;
          this._currentScaleValue = null;
          this._pageLabels = null;
          _classPrivateFieldLooseBase(this, _buffer)[_buffer] = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
          this._location = null;
          this._pagesRotation = 0;
          this._optionalContentConfigPromise = null;
          this._firstPageCapability = new _pdfjsLib.PromiseCapability();
          this._onePageRenderedCapability = new _pdfjsLib.PromiseCapability();
          this._pagesCapability = new _pdfjsLib.PromiseCapability();
          this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
          this._previousScrollMode = _ui_utils.ScrollMode.UNKNOWN;
          this._spreadMode = _ui_utils.SpreadMode.NONE;
          _classPrivateFieldLooseBase(this, _scrollModePageState)[_scrollModePageState] = {
            previousPageNumber: 1,
            scrollDown: true,
            pages: []
          };
          if (this._onBeforeDraw) {
            this.eventBus._off("pagerender", this._onBeforeDraw);
            this._onBeforeDraw = null;
          }
          if (this._onAfterDraw) {
            this.eventBus._off("pagerendered", this._onAfterDraw);
            this._onAfterDraw = null;
          }
          if (_classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]) {
            document.removeEventListener("visibilitychange", _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]);
            _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange] = null;
          }
          this.viewer.textContent = "";
          this._updateScrollMode();
          this.viewer.removeAttribute("lang");
          if (_classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement]) {
            document.removeEventListener("copy", _classPrivateFieldLooseBase(this, _copyCallbackBound)[_copyCallbackBound]);
            _classPrivateFieldLooseBase(this, _copyCallbackBound)[_copyCallbackBound] = null;
            _classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement].remove();
            _classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement] = null;
          }
        }
        _scrollUpdate() {
          if (this.pagesCount === 0) {
            return;
          }
          this.update();
        }
        pageLabelToPageNumber(label) {
          if (!this._pageLabels) {
            return null;
          }
          const i = this._pageLabels.indexOf(label);
          if (i < 0) {
            return null;
          }
          return i + 1;
        }
        scrollPageIntoView({
          pageNumber,
          destArray = null,
          allowNegativeOffset = false,
          ignoreDestinationZoom = false
        }) {
          if (!this.pdfDocument) {
            return;
          }
          const pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];
          if (!pageView) {
            console.error(`scrollPageIntoView: "${pageNumber}" is not a valid pageNumber parameter.`);
            return;
          }
          if (this.isInPresentationMode || !destArray) {
            this._setCurrentPageNumber(pageNumber, true);
            return;
          }
          let x = 0,
            y = 0;
          let width = 0,
            height = 0,
            widthScale,
            heightScale;
          const changeOrientation = pageView.rotation % 180 !== 0;
          const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
          const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
          let scale = 0;
          switch (destArray[1].name) {
            case "XYZ":
              x = destArray[2];
              y = destArray[3];
              scale = destArray[4];
              x = x !== null ? x : 0;
              y = y !== null ? y : pageHeight;
              break;
            case "Fit":
            case "FitB":
              scale = "page-fit";
              break;
            case "FitH":
            case "FitBH":
              y = destArray[2];
              scale = "page-width";
              if (y === null && this._location) {
                x = this._location.left;
                y = this._location.top;
              } else if (typeof y !== "number" || y < 0) {
                y = pageHeight;
              }
              break;
            case "FitV":
            case "FitBV":
              x = destArray[2];
              width = pageWidth;
              height = pageHeight;
              scale = "page-height";
              break;
            case "FitR":
              x = destArray[2];
              y = destArray[3];
              width = destArray[4] - x;
              height = destArray[5] - y;
              let hPadding = _ui_utils.SCROLLBAR_PADDING,
                vPadding = _ui_utils.VERTICAL_PADDING;
              if (this.removePageBorders) {
                hPadding = vPadding = 0;
              }
              widthScale = (this.container.clientWidth - hPadding) / width / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
              heightScale = (this.container.clientHeight - vPadding) / height / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
              scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
              break;
            default:
              console.error(`scrollPageIntoView: "${destArray[1].name}" is not a valid destination type.`);
              return;
          }
          if (!ignoreDestinationZoom) {
            if (scale && scale !== this._currentScale) {
              this.currentScaleValue = scale;
            } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
              this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
            }
          }
          if (scale === "page-fit" && !destArray[4]) {
            _classPrivateFieldLooseBase(this, _scrollIntoView)[_scrollIntoView](pageView);
            return;
          }
          const boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
          let left = Math.min(boundingRect[0][0], boundingRect[1][0]);
          let top = Math.min(boundingRect[0][1], boundingRect[1][1]);
          if (!allowNegativeOffset) {
            left = Math.max(left, 0);
            top = Math.max(top, 0);
          }
          _classPrivateFieldLooseBase(this, _scrollIntoView)[_scrollIntoView](pageView, {
            left,
            top
          });
        }
        _updateLocation(firstPage) {
          const currentScale = this._currentScale;
          const currentScaleValue = this._currentScaleValue;
          const normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
          const pageNumber = firstPage.id;
          const currentPageView = this._pages[pageNumber - 1];
          const container = this.container;
          const topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
          const intLeft = Math.round(topLeft[0]);
          const intTop = Math.round(topLeft[1]);
          let pdfOpenParams = `#page=${pageNumber}`;
          if (!this.isInPresentationMode) {
            pdfOpenParams += `&zoom=${normalizedScaleValue},${intLeft},${intTop}`;
          }
          this._location = {
            pageNumber,
            scale: normalizedScaleValue,
            top: intTop,
            left: intLeft,
            rotation: this._pagesRotation,
            pdfOpenParams
          };
        }
        update() {
          const visible = this._getVisiblePages();
          const visiblePages = visible.views,
            numVisiblePages = visiblePages.length;
          if (numVisiblePages === 0) {
            return;
          }
          const newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);
          _classPrivateFieldLooseBase(this, _buffer)[_buffer].resize(newCacheSize, visible.ids);
          this.renderingQueue.renderHighestPriority(visible);
          const isSimpleLayout = this._spreadMode === _ui_utils.SpreadMode.NONE && (this._scrollMode === _ui_utils.ScrollMode.PAGE || this._scrollMode === _ui_utils.ScrollMode.VERTICAL);
          const currentId = this._currentPageNumber;
          let stillFullyVisible = false;
          for (const page of visiblePages) {
            if (page.percent < 100) {
              break;
            }
            if (page.id === currentId && isSimpleLayout) {
              stillFullyVisible = true;
              break;
            }
          }
          this._setCurrentPageNumber(stillFullyVisible ? currentId : visiblePages[0].id);
          this._updateLocation(visible.first);
          this.eventBus.dispatch("updateviewarea", {
            source: this,
            location: this._location
          });
        }
        containsElement(element) {
          return this.container.contains(element);
        }
        focus() {
          this.container.focus();
        }
        get _isContainerRtl() {
          return getComputedStyle(this.container).direction === "rtl";
        }
        get isInPresentationMode() {
          return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
        }
        get isChangingPresentationMode() {
          return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
        }
        get isHorizontalScrollbarEnabled() {
          return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
        }
        get isVerticalScrollbarEnabled() {
          return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
        }
        _getVisiblePages() {
          const views = this._scrollMode === _ui_utils.ScrollMode.PAGE ? _classPrivateFieldLooseBase(this, _scrollModePageState)[_scrollModePageState].pages : this._pages,
            horizontal = this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL,
            rtl = horizontal && this._isContainerRtl;
          return (0, _ui_utils.getVisibleElements)({
            scrollEl: this.container,
            views,
            sortByVisibility: true,
            horizontal,
            rtl
          });
        }
        isPageVisible(pageNumber) {
          if (!this.pdfDocument) {
            return false;
          }
          if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
            console.error(`isPageVisible: "${pageNumber}" is not a valid page.`);
            return false;
          }
          return this._getVisiblePages().ids.has(pageNumber);
        }
        isPageCached(pageNumber) {
          if (!this.pdfDocument) {
            return false;
          }
          if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
            console.error(`isPageCached: "${pageNumber}" is not a valid page.`);
            return false;
          }
          const pageView = this._pages[pageNumber - 1];
          return _classPrivateFieldLooseBase(this, _buffer)[_buffer].has(pageView);
        }
        cleanup() {
          for (const pageView of this._pages) {
            if (pageView.renderingState !== _ui_utils.RenderingStates.FINISHED) {
              pageView.reset();
            }
          }
        }
        _cancelRendering() {
          for (const pageView of this._pages) {
            pageView.cancelRendering();
          }
        }
        forceRendering(currentlyVisiblePages) {
          const visiblePages = currentlyVisiblePages || this._getVisiblePages();
          const scrollAhead = _classPrivateFieldLooseBase(this, _getScrollAhead)[_getScrollAhead](visiblePages);
          const preRenderExtra = this._spreadMode !== _ui_utils.SpreadMode.NONE && this._scrollMode !== _ui_utils.ScrollMode.HORIZONTAL;
          const pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead, preRenderExtra);
          if (pageView) {
            _classPrivateFieldLooseBase(this, _ensurePdfPageLoaded)[_ensurePdfPageLoaded](pageView).then(() => {
              this.renderingQueue.renderView(pageView);
            });
            return true;
          }
          return false;
        }
        get hasEqualPageSizes() {
          const firstPageView = this._pages[0];
          for (let i = 1, ii = this._pages.length; i < ii; ++i) {
            const pageView = this._pages[i];
            if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
              return false;
            }
          }
          return true;
        }
        getPagesOverview() {
          let initialOrientation;
          return this._pages.map(pageView => {
            const viewport = pageView.pdfPage.getViewport({
              scale: 1
            });
            const orientation = (0, _ui_utils.isPortraitOrientation)(viewport);
            if (initialOrientation === undefined) {
              initialOrientation = orientation;
            } else if (this.enablePrintAutoRotate && orientation !== initialOrientation) {
              return {
                width: viewport.height,
                height: viewport.width,
                rotation: (viewport.rotation - 90) % 360
              };
            }
            return {
              width: viewport.width,
              height: viewport.height,
              rotation: viewport.rotation
            };
          });
        }
        get optionalContentConfigPromise() {
          if (!this.pdfDocument) {
            return Promise.resolve(null);
          }
          if (!this._optionalContentConfigPromise) {
            console.error("optionalContentConfigPromise: Not initialized yet.");
            return this.pdfDocument.getOptionalContentConfig();
          }
          return this._optionalContentConfigPromise;
        }
        set optionalContentConfigPromise(promise) {
          if (!(promise instanceof Promise)) {
            throw new Error(`Invalid optionalContentConfigPromise: ${promise}`);
          }
          if (!this.pdfDocument) {
            return;
          }
          if (!this._optionalContentConfigPromise) {
            return;
          }
          this._optionalContentConfigPromise = promise;
          this.refresh(false, {
            optionalContentConfigPromise: promise
          });
          this.eventBus.dispatch("optionalcontentconfigchanged", {
            source: this,
            promise
          });
        }
        get scrollMode() {
          return this._scrollMode;
        }
        set scrollMode(mode) {
          if (this._scrollMode === mode) {
            return;
          }
          if (!(0, _ui_utils.isValidScrollMode)(mode)) {
            throw new Error(`Invalid scroll mode: ${mode}`);
          }
          if (this.pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
            return;
          }
          this._previousScrollMode = this._scrollMode;
          this._scrollMode = mode;
          this.eventBus.dispatch("scrollmodechanged", {
            source: this,
            mode
          });
          this._updateScrollMode(this._currentPageNumber);
        }
        _updateScrollMode(pageNumber = null) {
          const scrollMode = this._scrollMode,
            viewer = this.viewer;
          viewer.classList.toggle("scrollHorizontal", scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
          viewer.classList.toggle("scrollWrapped", scrollMode === _ui_utils.ScrollMode.WRAPPED);
          if (!this.pdfDocument || !pageNumber) {
            return;
          }
          if (scrollMode === _ui_utils.ScrollMode.PAGE) {
            _classPrivateFieldLooseBase(this, _ensurePageViewVisible)[_ensurePageViewVisible]();
          } else if (this._previousScrollMode === _ui_utils.ScrollMode.PAGE) {
            this._updateSpreadMode();
          }
          if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
            _classPrivateFieldLooseBase(this, _setScale)[_setScale](this._currentScaleValue, {
              noScroll: true
            });
          }
          this._setCurrentPageNumber(pageNumber, true);
          this.update();
        }
        get spreadMode() {
          return this._spreadMode;
        }
        set spreadMode(mode) {
          if (this._spreadMode === mode) {
            return;
          }
          if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
            throw new Error(`Invalid spread mode: ${mode}`);
          }
          this._spreadMode = mode;
          this.eventBus.dispatch("spreadmodechanged", {
            source: this,
            mode
          });
          this._updateSpreadMode(this._currentPageNumber);
        }
        _updateSpreadMode(pageNumber = null) {
          if (!this.pdfDocument) {
            return;
          }
          const viewer = this.viewer,
            pages = this._pages;
          if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
            _classPrivateFieldLooseBase(this, _ensurePageViewVisible)[_ensurePageViewVisible]();
          } else {
            viewer.textContent = "";
            if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
              for (const pageView of this._pages) {
                viewer.append(pageView.div);
              }
            } else {
              const parity = this._spreadMode - 1;
              let spread = null;
              for (let i = 0, ii = pages.length; i < ii; ++i) {
                if (spread === null) {
                  spread = document.createElement("div");
                  spread.className = "spread";
                  viewer.append(spread);
                } else if (i % 2 === parity) {
                  spread = spread.cloneNode(false);
                  viewer.append(spread);
                }
                spread.append(pages[i].div);
              }
            }
          }
          if (!pageNumber) {
            return;
          }
          if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
            _classPrivateFieldLooseBase(this, _setScale)[_setScale](this._currentScaleValue, {
              noScroll: true
            });
          }
          this._setCurrentPageNumber(pageNumber, true);
          this.update();
        }
        _getPageAdvance(currentPageNumber, previous = false) {
          switch (this._scrollMode) {
            case _ui_utils.ScrollMode.WRAPPED:
              {
                const {
                    views
                  } = this._getVisiblePages(),
                  pageLayout = new Map();
                for (const {
                  id,
                  y,
                  percent,
                  widthPercent
                } of views) {
                  if (percent === 0 || widthPercent < 100) {
                    continue;
                  }
                  let yArray = pageLayout.get(y);
                  if (!yArray) {
                    pageLayout.set(y, yArray ||= []);
                  }
                  yArray.push(id);
                }
                for (const yArray of pageLayout.values()) {
                  const currentIndex = yArray.indexOf(currentPageNumber);
                  if (currentIndex === -1) {
                    continue;
                  }
                  const numPages = yArray.length;
                  if (numPages === 1) {
                    break;
                  }
                  if (previous) {
                    for (let i = currentIndex - 1, ii = 0; i >= ii; i--) {
                      const currentId = yArray[i],
                        expectedId = yArray[i + 1] - 1;
                      if (currentId < expectedId) {
                        return currentPageNumber - expectedId;
                      }
                    }
                  } else {
                    for (let i = currentIndex + 1, ii = numPages; i < ii; i++) {
                      const currentId = yArray[i],
                        expectedId = yArray[i - 1] + 1;
                      if (currentId > expectedId) {
                        return expectedId - currentPageNumber;
                      }
                    }
                  }
                  if (previous) {
                    const firstId = yArray[0];
                    if (firstId < currentPageNumber) {
                      return currentPageNumber - firstId + 1;
                    }
                  } else {
                    const lastId = yArray[numPages - 1];
                    if (lastId > currentPageNumber) {
                      return lastId - currentPageNumber + 1;
                    }
                  }
                  break;
                }
                break;
              }
            case _ui_utils.ScrollMode.HORIZONTAL:
              {
                break;
              }
            case _ui_utils.ScrollMode.PAGE:
            case _ui_utils.ScrollMode.VERTICAL:
              {
                if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
                  break;
                }
                const parity = this._spreadMode - 1;
                if (previous && currentPageNumber % 2 !== parity) {
                  break;
                } else if (!previous && currentPageNumber % 2 === parity) {
                  break;
                }
                const {
                    views
                  } = this._getVisiblePages(),
                  expectedId = previous ? currentPageNumber - 1 : currentPageNumber + 1;
                for (const {
                  id,
                  percent,
                  widthPercent
                } of views) {
                  if (id !== expectedId) {
                    continue;
                  }
                  if (percent > 0 && widthPercent === 100) {
                    return 2;
                  }
                  break;
                }
                break;
              }
          }
          return 1;
        }
        nextPage() {
          const currentPageNumber = this._currentPageNumber,
            pagesCount = this.pagesCount;
          if (currentPageNumber >= pagesCount) {
            return false;
          }
          const advance = this._getPageAdvance(currentPageNumber, false) || 1;
          this.currentPageNumber = Math.min(currentPageNumber + advance, pagesCount);
          return true;
        }
        previousPage() {
          const currentPageNumber = this._currentPageNumber;
          if (currentPageNumber <= 1) {
            return false;
          }
          const advance = this._getPageAdvance(currentPageNumber, true) || 1;
          this.currentPageNumber = Math.max(currentPageNumber - advance, 1);
          return true;
        }
        increaseScale({
          drawingDelay,
          scaleFactor,
          steps
        } = {}) {
          if (!this.pdfDocument) {
            return;
          }
          let newScale = this._currentScale;
          if (scaleFactor > 1) {
            newScale = Math.round(newScale * scaleFactor * 100) / 100;
          } else {
            steps ??= 1;
            do {
              newScale = Math.ceil((newScale * _ui_utils.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
            } while (--steps > 0 && newScale < _ui_utils.MAX_SCALE);
          }
          _classPrivateFieldLooseBase(this, _setScale)[_setScale](Math.min(_ui_utils.MAX_SCALE, newScale), {
            noScroll: false,
            drawingDelay
          });
        }
        decreaseScale({
          drawingDelay,
          scaleFactor,
          steps
        } = {}) {
          if (!this.pdfDocument) {
            return;
          }
          let newScale = this._currentScale;
          if (scaleFactor > 0 && scaleFactor < 1) {
            newScale = Math.round(newScale * scaleFactor * 100) / 100;
          } else {
            steps ??= 1;
            do {
              newScale = Math.floor((newScale / _ui_utils.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
            } while (--steps > 0 && newScale > _ui_utils.MIN_SCALE);
          }
          _classPrivateFieldLooseBase(this, _setScale)[_setScale](Math.max(_ui_utils.MIN_SCALE, newScale), {
            noScroll: false,
            drawingDelay
          });
        }
        get containerTopLeft() {
          return _classPrivateFieldLooseBase(this, _containerTopLeft)[_containerTopLeft] ||= [this.container.offsetTop, this.container.offsetLeft];
        }
        get annotationEditorMode() {
          return _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager] ? _classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode] : _pdfjsLib.AnnotationEditorType.DISABLE;
        }
        set annotationEditorMode(mode) {
          if (!_classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager]) {
            throw new Error(`The AnnotationEditor is not enabled.`);
          }
          if (_classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode] === mode) {
            return;
          }
          if (!isValidAnnotationEditorMode(mode)) {
            throw new Error(`Invalid AnnotationEditor mode: ${mode}`);
          }
          if (!this.pdfDocument) {
            return;
          }
          _classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode] = mode;
          this.eventBus.dispatch("annotationeditormodechanged", {
            source: this,
            mode
          });
          _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager].updateMode(mode);
        }
        set annotationEditorParams({
          type,
          value
        }) {
          if (!_classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager]) {
            throw new Error(`The AnnotationEditor is not enabled.`);
          }
          _classPrivateFieldLooseBase(this, _annotationEditorUIManager)[_annotationEditorUIManager].updateParams(type, value);
        }
        refresh(noUpdate = false, updateArgs = Object.create(null)) {
          if (!this.pdfDocument) {
            return;
          }
          for (const pageView of this._pages) {
            pageView.update(updateArgs);
          }
          if (_classPrivateFieldLooseBase(this, _scaleTimeoutId)[_scaleTimeoutId] !== null) {
            clearTimeout(_classPrivateFieldLooseBase(this, _scaleTimeoutId)[_scaleTimeoutId]);
            _classPrivateFieldLooseBase(this, _scaleTimeoutId)[_scaleTimeoutId] = null;
          }
          if (!noUpdate) {
            this.update();
          }
        }
      }
      function _layerProperties3() {
        const self = this;
        return {
          get annotationEditorUIManager() {
            return _classPrivateFieldLooseBase(self, _annotationEditorUIManager)[_annotationEditorUIManager];
          },
          get annotationStorage() {
            return self.pdfDocument?.annotationStorage;
          },
          get downloadManager() {
            return self.downloadManager;
          },
          get enableScripting() {
            return !!self._scriptingManager;
          },
          get fieldObjectsPromise() {
            return self.pdfDocument?.getFieldObjects();
          },
          get findController() {
            return self.findController;
          },
          get hasJSActionsPromise() {
            return self.pdfDocument?.hasJSActions();
          },
          get linkService() {
            return self.linkService;
          }
        };
      }
      function _initializePermissions2(permissions) {
        const params = {
          annotationEditorMode: _classPrivateFieldLooseBase(this, _annotationEditorMode)[_annotationEditorMode],
          annotationMode: _classPrivateFieldLooseBase(this, _annotationMode2)[_annotationMode2],
          textLayerMode: _classPrivateFieldLooseBase(this, _textLayerMode2)[_textLayerMode2]
        };
        if (!permissions) {
          return params;
        }
        if (!permissions.includes(_pdfjsLib.PermissionFlag.COPY) && _classPrivateFieldLooseBase(this, _textLayerMode2)[_textLayerMode2] === _ui_utils.TextLayerMode.ENABLE) {
          params.textLayerMode = _ui_utils.TextLayerMode.ENABLE_PERMISSIONS;
        }
        if (!permissions.includes(_pdfjsLib.PermissionFlag.MODIFY_CONTENTS)) {
          params.annotationEditorMode = _pdfjsLib.AnnotationEditorType.DISABLE;
        }
        if (!permissions.includes(_pdfjsLib.PermissionFlag.MODIFY_ANNOTATIONS) && !permissions.includes(_pdfjsLib.PermissionFlag.FILL_INTERACTIVE_FORMS) && _classPrivateFieldLooseBase(this, _annotationMode2)[_annotationMode2] === _pdfjsLib.AnnotationMode.ENABLE_FORMS) {
          params.annotationMode = _pdfjsLib.AnnotationMode.ENABLE;
        }
        return params;
      }
      function _onePageRenderedOrForceFetch2() {
        if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0) {
          return Promise.resolve();
        }
        const visibilityChangePromise = new Promise(resolve => {
          _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange] = () => {
            if (document.visibilityState !== "hidden") {
              return;
            }
            resolve();
            document.removeEventListener("visibilitychange", _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]);
            _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange] = null;
          };
          document.addEventListener("visibilitychange", _classPrivateFieldLooseBase(this, _onVisibilityChange)[_onVisibilityChange]);
        });
        return Promise.race([this._onePageRenderedCapability.promise, visibilityChangePromise]);
      }
      function _copyCallback2(textLayerMode, event) {
        const selection = document.getSelection();
        const {
          focusNode,
          anchorNode
        } = selection;
        if (anchorNode && focusNode && selection.containsNode(_classPrivateFieldLooseBase(this, _hiddenCopyElement)[_hiddenCopyElement])) {
          if (_classPrivateFieldLooseBase(this, _getAllTextInProgress)[_getAllTextInProgress] || textLayerMode === _ui_utils.TextLayerMode.ENABLE_PERMISSIONS) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          _classPrivateFieldLooseBase(this, _getAllTextInProgress)[_getAllTextInProgress] = true;
          const savedCursor = this.container.style.cursor;
          this.container.style.cursor = "wait";
          const interruptCopy = ev => _classPrivateFieldLooseBase(this, _interruptCopyCondition)[_interruptCopyCondition] = ev.key === "Escape";
          window.addEventListener("keydown", interruptCopy);
          this.getAllText().then(async text => {
            if (text !== null) {
              await navigator.clipboard.writeText(text);
            }
          }).catch(reason => {
            console.warn(`Something goes wrong when extracting the text: ${reason.message}`);
          }).finally(() => {
            _classPrivateFieldLooseBase(this, _getAllTextInProgress)[_getAllTextInProgress] = false;
            _classPrivateFieldLooseBase(this, _interruptCopyCondition)[_interruptCopyCondition] = false;
            window.removeEventListener("keydown", interruptCopy);
            this.container.style.cursor = savedCursor;
          });
          event.preventDefault();
          event.stopPropagation();
        }
      }
      function _ensurePageViewVisible2() {
        if (this._scrollMode !== _ui_utils.ScrollMode.PAGE) {
          throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
        }
        const pageNumber = this._currentPageNumber,
          state = _classPrivateFieldLooseBase(this, _scrollModePageState)[_scrollModePageState],
          viewer = this.viewer;
        viewer.textContent = "";
        state.pages.length = 0;
        if (this._spreadMode === _ui_utils.SpreadMode.NONE && !this.isInPresentationMode) {
          const pageView = this._pages[pageNumber - 1];
          viewer.append(pageView.div);
          state.pages.push(pageView);
        } else {
          const pageIndexSet = new Set(),
            parity = this._spreadMode - 1;
          if (parity === -1) {
            pageIndexSet.add(pageNumber - 1);
          } else if (pageNumber % 2 !== parity) {
            pageIndexSet.add(pageNumber - 1);
            pageIndexSet.add(pageNumber);
          } else {
            pageIndexSet.add(pageNumber - 2);
            pageIndexSet.add(pageNumber - 1);
          }
          const spread = document.createElement("div");
          spread.className = "spread";
          if (this.isInPresentationMode) {
            const dummyPage = document.createElement("div");
            dummyPage.className = "dummyPage";
            spread.append(dummyPage);
          }
          for (const i of pageIndexSet) {
            const pageView = this._pages[i];
            if (!pageView) {
              continue;
            }
            spread.append(pageView.div);
            state.pages.push(pageView);
          }
          viewer.append(spread);
        }
        state.scrollDown = pageNumber >= state.previousPageNumber;
        state.previousPageNumber = pageNumber;
      }
      function _scrollIntoView2(pageView, pageSpot = null) {
        const {
          div,
          id
        } = pageView;
        if (this._currentPageNumber !== id) {
          this._setCurrentPageNumber(id);
        }
        if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
          _classPrivateFieldLooseBase(this, _ensurePageViewVisible)[_ensurePageViewVisible]();
          this.update();
        }
        if (!pageSpot && !this.isInPresentationMode) {
          const left = div.offsetLeft + div.clientLeft,
            right = left + div.clientWidth;
          const {
            scrollLeft,
            clientWidth
          } = this.container;
          if (this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL || left < scrollLeft || right > scrollLeft + clientWidth) {
            pageSpot = {
              left: 0,
              top: 0
            };
          }
        }
        (0, _ui_utils.scrollIntoView)(div, pageSpot);
        if (!this._currentScaleValue && this._location) {
          this._location = null;
        }
      }
      function _isSameScale2(newScale) {
        return newScale === this._currentScale || Math.abs(newScale - this._currentScale) < 1e-15;
      }
      function _setScaleUpdatePages2(newScale, newValue, {
        noScroll = false,
        preset = false,
        drawingDelay = -1
      }) {
        this._currentScaleValue = newValue.toString();
        if (_classPrivateFieldLooseBase(this, _isSameScale)[_isSameScale](newScale)) {
          if (preset) {
            this.eventBus.dispatch("scalechanging", {
              source: this,
              scale: newScale,
              presetValue: newValue
            });
          }
          return;
        }
        this.viewer.style.setProperty("--scale-factor", newScale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS);
        const postponeDrawing = drawingDelay >= 0 && drawingDelay < 1000;
        this.refresh(true, {
          scale: newScale,
          drawingDelay: postponeDrawing ? drawingDelay : -1
        });
        if (postponeDrawing) {
          _classPrivateFieldLooseBase(this, _scaleTimeoutId)[_scaleTimeoutId] = setTimeout(() => {
            _classPrivateFieldLooseBase(this, _scaleTimeoutId)[_scaleTimeoutId] = null;
            this.refresh();
          }, drawingDelay);
        }
        this._currentScale = newScale;
        if (!noScroll) {
          let page = this._currentPageNumber,
            dest;
          if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
            page = this._location.pageNumber;
            dest = [null, {
              name: "XYZ"
            }, this._location.left, this._location.top, null];
          }
          this.scrollPageIntoView({
            pageNumber: page,
            destArray: dest,
            allowNegativeOffset: true
          });
        }
        this.eventBus.dispatch("scalechanging", {
          source: this,
          scale: newScale,
          presetValue: preset ? newValue : undefined
        });
        if (this.defaultRenderingQueue) {
          this.update();
        }
      }
      function _get_pageWidthScaleFactor() {
        if (this._spreadMode !== _ui_utils.SpreadMode.NONE && this._scrollMode !== _ui_utils.ScrollMode.HORIZONTAL) {
          return 2;
        }
        return 1;
      }
      function _setScale2(value, options) {
        let scale = parseFloat(value);
        if (scale > 0) {
          options.preset = false;
          _classPrivateFieldLooseBase(this, _setScaleUpdatePages)[_setScaleUpdatePages](scale, value, options);
        } else {
          const currentPage = this._pages[this._currentPageNumber - 1];
          if (!currentPage) {
            return;
          }
          let hPadding = _ui_utils.SCROLLBAR_PADDING,
            vPadding = _ui_utils.VERTICAL_PADDING;
          if (this.isInPresentationMode) {
            hPadding = vPadding = 4;
            if (this._spreadMode !== _ui_utils.SpreadMode.NONE) {
              hPadding *= 2;
            }
          } else if (this.removePageBorders) {
            hPadding = vPadding = 0;
          } else if (this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL) {
            [hPadding, vPadding] = [vPadding, hPadding];
          }
          const pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale / _classPrivateFieldLooseBase(this, _pageWidthScaleFactor)[_pageWidthScaleFactor];
          const pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;
          switch (value) {
            case "page-actual":
              scale = 1;
              break;
            case "page-width":
              scale = pageWidthScale;
              break;
            case "page-height":
              scale = pageHeightScale;
              break;
            case "page-fit":
              scale = Math.min(pageWidthScale, pageHeightScale);
              break;
            case "auto":
              const horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
              scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
              break;
            default:
              console.error(`#setScale: "${value}" is an unknown zoom value.`);
              return;
          }
          options.preset = true;
          _classPrivateFieldLooseBase(this, _setScaleUpdatePages)[_setScaleUpdatePages](scale, value, options);
        }
      }
      function _resetCurrentPageView2() {
        const pageView = this._pages[this._currentPageNumber - 1];
        if (this.isInPresentationMode) {
          _classPrivateFieldLooseBase(this, _setScale)[_setScale](this._currentScaleValue, {
            noScroll: true
          });
        }
        _classPrivateFieldLooseBase(this, _scrollIntoView)[_scrollIntoView](pageView);
      }
      async function _ensurePdfPageLoaded2(pageView) {
        if (pageView.pdfPage) {
          return pageView.pdfPage;
        }
        try {
          const pdfPage = await this.pdfDocument.getPage(pageView.id);
          if (!pageView.pdfPage) {
            pageView.setPdfPage(pdfPage);
          }
          if (!this.linkService._cachedPageNumber?.(pdfPage.ref)) {
            this.linkService.cachePageRef(pageView.id, pdfPage.ref);
          }
          return pdfPage;
        } catch (reason) {
          console.error("Unable to get page for page view", reason);
          return null;
        }
      }
      function _getScrollAhead2(visible) {
        if (visible.first?.id === 1) {
          return true;
        } else if (visible.last?.id === this.pagesCount) {
          return false;
        }
        switch (this._scrollMode) {
          case _ui_utils.ScrollMode.PAGE:
            return _classPrivateFieldLooseBase(this, _scrollModePageState)[_scrollModePageState].scrollDown;
          case _ui_utils.ScrollMode.HORIZONTAL:
            return this.scroll.right;
        }
        return this.scroll.down;
      }
      function _updateContainerHeightCss2(height = this.container.clientHeight) {
        if (height !== _classPrivateFieldLooseBase(this, _previousContainerHeight)[_previousContainerHeight]) {
          _classPrivateFieldLooseBase(this, _previousContainerHeight)[_previousContainerHeight] = height;
          _ui_utils.docStyle.setProperty("--viewer-container-height", `${height}px`);
        }
      }
      function _resizeObserverCallback2(entries) {
        for (const entry of entries) {
          if (entry.target === this.container) {
            _classPrivateFieldLooseBase(this, _updateContainerHeightCss)[_updateContainerHeightCss](Math.floor(entry.borderBoxSize[0].blockSize));
            _classPrivateFieldLooseBase(this, _containerTopLeft)[_containerTopLeft] = null;
            break;
          }
        }
      }
      exports.PDFViewer = PDFViewer;

      /***/
    }), ( /* 25 */
    /***/(__unused_webpack_module, exports, __w_pdfjs_require__) => {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFRenderingQueue = void 0;
      var _pdfjsLib = __w_pdfjs_require__(4);
      var _ui_utils = __w_pdfjs_require__(2);
      const CLEANUP_TIMEOUT = 30000;
      class PDFRenderingQueue {
        constructor() {
          this.pdfViewer = null;
          this.pdfThumbnailViewer = null;
          this.onIdle = null;
          this.highestPriorityPage = null;
          this.idleTimeout = null;
          this.printing = false;
          this.isThumbnailViewEnabled = false;
        }
        setViewer(pdfViewer) {
          this.pdfViewer = pdfViewer;
        }
        setThumbnailViewer(pdfThumbnailViewer) {
          this.pdfThumbnailViewer = pdfThumbnailViewer;
        }
        isHighestPriority(view) {
          return this.highestPriorityPage === view.renderingId;
        }
        hasViewer() {
          return !!this.pdfViewer;
        }
        renderHighestPriority(currentlyVisiblePages) {
          if (this.idleTimeout) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
          }
          if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
            return;
          }
          if (this.isThumbnailViewEnabled && this.pdfThumbnailViewer?.forceRendering()) {
            return;
          }
          if (this.printing) {
            return;
          }
          if (this.onIdle) {
            this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
          }
        }
        getHighestPriority(visible, views, scrolledDown, preRenderExtra = false) {
          const visibleViews = visible.views,
            numVisible = visibleViews.length;
          if (numVisible === 0) {
            return null;
          }
          for (let i = 0; i < numVisible; i++) {
            const view = visibleViews[i].view;
            if (!this.isViewFinished(view)) {
              return view;
            }
          }
          const firstId = visible.first.id,
            lastId = visible.last.id;
          if (lastId - firstId + 1 > numVisible) {
            const visibleIds = visible.ids;
            for (let i = 1, ii = lastId - firstId; i < ii; i++) {
              const holeId = scrolledDown ? firstId + i : lastId - i;
              if (visibleIds.has(holeId)) {
                continue;
              }
              const holeView = views[holeId - 1];
              if (!this.isViewFinished(holeView)) {
                return holeView;
              }
            }
          }
          let preRenderIndex = scrolledDown ? lastId : firstId - 2;
          let preRenderView = views[preRenderIndex];
          if (preRenderView && !this.isViewFinished(preRenderView)) {
            return preRenderView;
          }
          if (preRenderExtra) {
            preRenderIndex += scrolledDown ? 1 : -1;
            preRenderView = views[preRenderIndex];
            if (preRenderView && !this.isViewFinished(preRenderView)) {
              return preRenderView;
            }
          }
          return null;
        }
        isViewFinished(view) {
          return view.renderingState === _ui_utils.RenderingStates.FINISHED;
        }
        renderView(view) {
          switch (view.renderingState) {
            case _ui_utils.RenderingStates.FINISHED:
              return false;
            case _ui_utils.RenderingStates.PAUSED:
              this.highestPriorityPage = view.renderingId;
              view.resume();
              break;
            case _ui_utils.RenderingStates.RUNNING:
              this.highestPriorityPage = view.renderingId;
              break;
            case _ui_utils.RenderingStates.INITIAL:
              this.highestPriorityPage = view.renderingId;
              view.draw().finally(() => {
                this.renderHighestPriority();
              }).catch(reason => {
                if (reason instanceof _pdfjsLib.RenderingCancelledException) {
                  return;
                }
                console.error(`renderView: "${reason}"`);
              });
              break;
          }
          return true;
        }
      }
      exports.PDFRenderingQueue = PDFRenderingQueue;

      /***/
    }
    /******/)];
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __w_pdfjs_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/var cachedModule = __webpack_module_cache__[moduleId];
      /******/
      if (cachedModule !== undefined) {
        /******/return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __w_pdfjs_require__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
      var exports = __nested_webpack_exports__;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "AnnotationLayerBuilder", {
        enumerable: true,
        get: function () {
          return _annotation_layer_builder.AnnotationLayerBuilder;
        }
      });
      exports.DefaultXfaLayerFactory = exports.DefaultTextLayerFactory = exports.DefaultStructTreeLayerFactory = exports.DefaultAnnotationLayerFactory = void 0;
      Object.defineProperty(exports, "DownloadManager", {
        enumerable: true,
        get: function () {
          return _download_manager.DownloadManager;
        }
      });
      Object.defineProperty(exports, "EventBus", {
        enumerable: true,
        get: function () {
          return _event_utils.EventBus;
        }
      });
      Object.defineProperty(exports, "GenericL10n", {
        enumerable: true,
        get: function () {
          return _genericl10n.GenericL10n;
        }
      });
      Object.defineProperty(exports, "LinkTarget", {
        enumerable: true,
        get: function () {
          return _pdf_link_service.LinkTarget;
        }
      });
      Object.defineProperty(exports, "NullL10n", {
        enumerable: true,
        get: function () {
          return _l10n_utils.NullL10n;
        }
      });
      Object.defineProperty(exports, "PDFFindController", {
        enumerable: true,
        get: function () {
          return _pdf_find_controller.PDFFindController;
        }
      });
      Object.defineProperty(exports, "PDFHistory", {
        enumerable: true,
        get: function () {
          return _pdf_history.PDFHistory;
        }
      });
      Object.defineProperty(exports, "PDFLinkService", {
        enumerable: true,
        get: function () {
          return _pdf_link_service.PDFLinkService;
        }
      });
      Object.defineProperty(exports, "PDFPageView", {
        enumerable: true,
        get: function () {
          return _pdf_page_view.PDFPageView;
        }
      });
      Object.defineProperty(exports, "PDFScriptingManager", {
        enumerable: true,
        get: function () {
          return _pdf_scripting_manager.PDFScriptingManager;
        }
      });
      Object.defineProperty(exports, "PDFSinglePageViewer", {
        enumerable: true,
        get: function () {
          return _pdf_single_page_viewer.PDFSinglePageViewer;
        }
      });
      Object.defineProperty(exports, "PDFViewer", {
        enumerable: true,
        get: function () {
          return _pdf_viewer.PDFViewer;
        }
      });
      Object.defineProperty(exports, "ProgressBar", {
        enumerable: true,
        get: function () {
          return _ui_utils.ProgressBar;
        }
      });
      Object.defineProperty(exports, "RenderingStates", {
        enumerable: true,
        get: function () {
          return _ui_utils.RenderingStates;
        }
      });
      Object.defineProperty(exports, "ScrollMode", {
        enumerable: true,
        get: function () {
          return _ui_utils.ScrollMode;
        }
      });
      Object.defineProperty(exports, "SimpleLinkService", {
        enumerable: true,
        get: function () {
          return _pdf_link_service.SimpleLinkService;
        }
      });
      Object.defineProperty(exports, "SpreadMode", {
        enumerable: true,
        get: function () {
          return _ui_utils.SpreadMode;
        }
      });
      Object.defineProperty(exports, "StructTreeLayerBuilder", {
        enumerable: true,
        get: function () {
          return _struct_tree_layer_builder.StructTreeLayerBuilder;
        }
      });
      Object.defineProperty(exports, "TextLayerBuilder", {
        enumerable: true,
        get: function () {
          return _text_layer_builder.TextLayerBuilder;
        }
      });
      Object.defineProperty(exports, "XfaLayerBuilder", {
        enumerable: true,
        get: function () {
          return _xfa_layer_builder.XfaLayerBuilder;
        }
      });
      Object.defineProperty(exports, "parseQueryString", {
        enumerable: true,
        get: function () {
          return _ui_utils.parseQueryString;
        }
      });
      var _pdf_link_service = __w_pdfjs_require__(1);
      var _ui_utils = __w_pdfjs_require__(2);
      var _annotation_layer_builder = __w_pdfjs_require__(3);
      var _download_manager = __w_pdfjs_require__(6);
      var _event_utils = __w_pdfjs_require__(7);
      var _genericl10n = __w_pdfjs_require__(8);
      var _l10n_utils = __w_pdfjs_require__(5);
      var _pdf_find_controller = __w_pdfjs_require__(10);
      var _pdf_history = __w_pdfjs_require__(12);
      var _pdf_page_view = __w_pdfjs_require__(13);
      var _pdf_scripting_manager = __w_pdfjs_require__(21);
      var _pdf_single_page_viewer = __w_pdfjs_require__(23);
      var _pdf_viewer = __w_pdfjs_require__(24);
      var _struct_tree_layer_builder = __w_pdfjs_require__(16);
      var _text_layer_builder = __w_pdfjs_require__(19);
      var _xfa_layer_builder = __w_pdfjs_require__(20);
      const pdfjsVersion = '3.6.172';
      const pdfjsBuild = '4d3dfe254';
      class DefaultAnnotationLayerFactory {
        constructor() {
          throw new Error("The `DefaultAnnotationLayerFactory` has been removed, " + "please use the `annotationMode` option when initializing " + "the `PDFPageView`-instance to control AnnotationLayer rendering.");
        }
      }
      exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;
      class DefaultStructTreeLayerFactory {
        constructor() {
          throw new Error("The `DefaultStructTreeLayerFactory` has been removed, " + "this functionality is automatically enabled when the TextLayer is used.");
        }
      }
      exports.DefaultStructTreeLayerFactory = DefaultStructTreeLayerFactory;
      class DefaultTextLayerFactory {
        constructor() {
          throw new Error("The `DefaultTextLayerFactory` has been removed, " + "please use the `textLayerMode` option when initializing " + "the `PDFPageView`-instance to control TextLayer rendering.");
        }
      }
      exports.DefaultTextLayerFactory = DefaultTextLayerFactory;
      class DefaultXfaLayerFactory {
        constructor() {
          throw new Error("The `DefaultXfaLayerFactory` has been removed, " + "please use the `enableXfa` option when calling " + "the `getDocument`-function to control XfaLayer rendering.");
        }
      }
      exports.DefaultXfaLayerFactory = DefaultXfaLayerFactory;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ 7640:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3237:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7492:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1815:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 6671:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 5168:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 3506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 7080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var has = (__webpack_require__(4402).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ 679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(1625);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 7811:
/***/ (function(module) {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ 7394:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__(6706);
var classof = __webpack_require__(4576);

var $TypeError = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ 3238:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var arrayBufferByteLength = __webpack_require__(7394);

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var uncurryThis = __webpack_require__(9504);
var uncurryThisAccessor = __webpack_require__(6706);
var toIndex = __webpack_require__(7696);
var isDetached = __webpack_require__(3238);
var arrayBufferByteLength = __webpack_require__(7394);
var detachTransferable = __webpack_require__(4483);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var ArrayBuffer = global.ArrayBuffer;
var DataView = global.DataView;
var TypeError = global.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ 4644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(7811);
var DESCRIPTORS = __webpack_require__(3724);
var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var hasOwn = __webpack_require__(9297);
var classof = __webpack_require__(6955);
var tryToString = __webpack_require__(6823);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineBuiltInAccessor = __webpack_require__(2106);
var isPrototypeOf = __webpack_require__(1625);
var getPrototypeOf = __webpack_require__(2787);
var setPrototypeOf = __webpack_require__(2967);
var wellKnownSymbol = __webpack_require__(8227);
var uid = __webpack_require__(3392);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ 5370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 7628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ 9928:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);
var toIntegerOrInfinity = __webpack_require__(1291);

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(4576);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 2106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var tryNodeRequire = __webpack_require__(9714);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var $ArrayBuffer = global.ArrayBuffer;
var $MessageChannel = global.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6837:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 5002:
/***/ (function(module) {

"use strict";

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 7290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 516:
/***/ (function(module) {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 9088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var classof = __webpack_require__(4576);

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var userAgent = __webpack_require__(9392);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8727:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6193:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 6249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 6080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(7476);
var aCallable = __webpack_require__(9306);
var NATIVE_BIND = __webpack_require__(616);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 7476:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 1767:
/***/ (function(module) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 851:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);
var getMethod = __webpack_require__(5966);
var isNullOrUndefined = __webpack_require__(4117);
var Iterators = __webpack_require__(6269);
var wellKnownSymbol = __webpack_require__(8227);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 81:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var getIteratorMethod = __webpack_require__(851);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 3789:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var call = __webpack_require__(9565);
var toIntegerOrInfinity = __webpack_require__(1291);
var getIteratorDirect = __webpack_require__(1767);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ 4475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(4576);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var setPrototypeOf = __webpack_require__(2967);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(8622);
var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4209:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 4376:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(4576);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 1108:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 3517:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var classof = __webpack_require__(6955);
var getBuiltIn = __webpack_require__(7751);
var inspectSource = __webpack_require__(3706);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3925:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 6395:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 507:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 2652:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(6080);
var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var isArrayIteratorMethod = __webpack_require__(4209);
var lengthOfArrayLike = __webpack_require__(6198);
var isPrototypeOf = __webpack_require__(1625);
var getIterator = __webpack_require__(81);
var getIteratorMethod = __webpack_require__(851);
var iteratorClose = __webpack_require__(9539);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var getMethod = __webpack_require__(5966);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 6269:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 2248:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 2603:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toString = __webpack_require__(655);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 2787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 7979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 1034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var hasOwn = __webpack_require__(9297);
var isPrototypeOf = __webpack_require__(1625);
var regExpFlags = __webpack_require__(7979);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 9286:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var SetHelpers = __webpack_require__(4402);
var iterate = __webpack_require__(8469);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 3440:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ 4402:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ 8750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),

/***/ 4449:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 3838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var size = __webpack_require__(5170);
var iterate = __webpack_require__(8469);
var getSetRecord = __webpack_require__(3789);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ 8527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 8469:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var iterateSimple = __webpack_require__(507);
var SetHelpers = __webpack_require__(4402);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ 4916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ 5170:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__(6706);
var SetHelpers = __webpack_require__(4402);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ 3650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ 4204:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(7080);
var add = (__webpack_require__(4402).add);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4475);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 1548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var fails = __webpack_require__(9039);
var V8 = __webpack_require__(7388);
var IS_BROWSER = __webpack_require__(7290);
var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

var structuredClone = global.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7388);
var fails = __webpack_require__(9039);
var global = __webpack_require__(4475);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ 7696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);
var toLength = __webpack_require__(8014);

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 9714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_NODE = __webpack_require__(9088);

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 6823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2812:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6573:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var defineBuiltInAccessor = __webpack_require__(2106);
var isDetached = __webpack_require__(3238);

var ArrayBufferPrototype = ArrayBuffer.prototype;

if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ 7936:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ 8100:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


/***/ }),

/***/ 4114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 7642:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var difference = __webpack_require__(3440);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


/***/ }),

/***/ 8004:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var fails = __webpack_require__(9039);
var intersection = __webpack_require__(8750);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ 3853:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var isDisjointFrom = __webpack_require__(4449);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ 5876:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var isSubsetOf = __webpack_require__(3838);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ 2475:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var isSupersetOf = __webpack_require__(8527);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ 5024:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var symmetricDifference = __webpack_require__(3650);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ 1698:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var union = __webpack_require__(4204);
var setMethodAcceptSetLike = __webpack_require__(4916);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),

/***/ 7467:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arrayToReversed = __webpack_require__(7628);
var ArrayBufferViewCore = __webpack_require__(4644);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ 4732:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(4644);
var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);
var arrayFromConstructorAndList = __webpack_require__(5370);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ 9577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arrayWith = __webpack_require__(9928);
var ArrayBufferViewCore = __webpack_require__(4644);
var isBigIntArray = __webpack_require__(1108);
var toIntegerOrInfinity = __webpack_require__(1291);
var toBigInt = __webpack_require__(5854);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


/***/ }),

/***/ 3375:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(7642);


/***/ }),

/***/ 9225:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(8004);


/***/ }),

/***/ 3972:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(3853);


/***/ }),

/***/ 9209:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(5876);


/***/ }),

/***/ 5714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(2475);


/***/ }),

/***/ 7561:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(5024);


/***/ }),

/***/ 6197:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(1698);


/***/ }),

/***/ 4979:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var global = __webpack_require__(4475);
var getBuiltIn = __webpack_require__(7751);
var createPropertyDescriptor = __webpack_require__(6980);
var defineProperty = (__webpack_require__(4913).f);
var hasOwn = __webpack_require__(9297);
var anInstance = __webpack_require__(679);
var inheritIfRequired = __webpack_require__(3167);
var normalizeStringArgument = __webpack_require__(2603);
var DOMExceptionConstants = __webpack_require__(5002);
var clearErrorStack = __webpack_require__(6193);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ 1678:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var $ = __webpack_require__(6518);
var global = __webpack_require__(4475);
var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var uid = __webpack_require__(3392);
var isCallable = __webpack_require__(4901);
var isConstructor = __webpack_require__(3517);
var isNullOrUndefined = __webpack_require__(4117);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var iterate = __webpack_require__(2652);
var anObject = __webpack_require__(8551);
var classof = __webpack_require__(6955);
var hasOwn = __webpack_require__(9297);
var createProperty = __webpack_require__(4659);
var createNonEnumerableProperty = __webpack_require__(6699);
var lengthOfArrayLike = __webpack_require__(6198);
var validateArgumentsLength = __webpack_require__(2812);
var getRegExpFlags = __webpack_require__(1034);
var MapHelpers = __webpack_require__(2248);
var SetHelpers = __webpack_require__(4402);
var setIterate = __webpack_require__(8469);
var detachTransferable = __webpack_require__(4483);
var ERROR_STACK_INSTALLABLE = __webpack_require__(6249);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var Object = global.Object;
var Array = global.Array;
var Date = global.Date;
var Error = global.Error;
var TypeError = global.TypeError;
var PerformanceMark = global.PerformanceMark;
var DOMException = getBuiltIn('DOMException');
var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set = SetHelpers.Set;
var setAdd = SetHelpers.add;
var setHas = SetHelpers.has;
var objectKeys = getBuiltIn('Object', 'keys');
var push = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1.0.valueOf);
var thisStringValue = uncurryThis(''.valueOf);
var thisTimeValue = uncurryThis(Date.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';

var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var set1 = new global.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object(7));
    return set2 === set1 || !set2.has(7) || !isObject(number) || +number !== 7;
  }) && structuredCloneImplementation;
};

var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
  return !fails(function () {
    var error = new $Error();
    var test = structuredCloneImplementation({ a: error, b: error });
    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
  });
};

// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var test = structuredCloneImplementation(new global.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
    return test.name !== 'AggregateError' || test.errors[0] !== 1 || test.message !== PERFORMANCE_MARK || test.cause !== 3;
  });
};

// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF<103 and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// FF103 can clone errors, but `.stack` of clone is an empty string
// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
// FF104+ fixed it on usual errors, but not on DOMExceptions
// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
// Chrome <102 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// NodeJS implementation can't clone DOMExceptions
// https://github.com/nodejs/node/issues/41038
// only FF103+ supports new (html/5749) error cloning semantic
var nativeStructuredClone = global.structuredClone;

var FORCED_REPLACEMENT = IS_PURE
  || !checkErrorsCloning(nativeStructuredClone, Error)
  || !checkErrorsCloning(nativeStructuredClone, DOMException)
  || !checkNewErrorsCloningSemantic(nativeStructuredClone);

// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of those implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
});

var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};

var throwUnpolyfillable = function (type, action) {
  throw new DOMException((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};

var tryNativeRestrictedStructuredClone = function (value, type) {
  if (!nativeRestrictedStructuredClone) throwUnpolyfillable(type);
  return nativeRestrictedStructuredClone(value);
};

var createDataTransfer = function () {
  var dataTransfer;
  try {
    dataTransfer = new global.DataTransfer();
  } catch (error) {
    try {
      dataTransfer = new global.ClipboardEvent('').clipboardData;
    } catch (error2) { /* empty */ }
  }
  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};

var cloneBuffer = function (value, map, $type) {
  if (mapHas(map, value)) return mapGet(map, value);

  var type = $type || classof(value);
  var clone, length, options, source, target, i;

  if (type === 'SharedArrayBuffer') {
    if (nativeRestrictedStructuredClone) clone = nativeRestrictedStructuredClone(value);
    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
    else clone = value;
  } else {
    var DataView = global.DataView;

    // `ArrayBuffer#slice` is not available in IE10
    // `ArrayBuffer#slice` and `DataView` are not available in old FF
    if (!DataView && !isCallable(value.slice)) throwUnpolyfillable('ArrayBuffer');
    // detached buffers throws in `DataView` and `.slice`
    try {
      if (isCallable(value.slice) && !value.resizable) {
        clone = value.slice(0);
      } else {
        length = value.byteLength;
        options = 'maxByteLength' in value ? { maxByteLength: value.maxByteLength } : undefined;
        // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
        clone = new ArrayBuffer(length, options);
        source = new DataView(value);
        target = new DataView(clone);
        for (i = 0; i < length; i++) {
          target.setUint8(i, source.getUint8(i));
        }
      }
    } catch (error) {
      throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
    }
  }

  mapSet(map, value, clone);

  return clone;
};

var cloneView = function (value, type, offset, length, map) {
  var C = global[type];
  // in some old engines like Safari 9, typeof C is 'object'
  // on Uint8ClampedArray or some other constructors
  if (!isObject(C)) throwUnpolyfillable(type);
  return new C(cloneBuffer(value.buffer, map), offset, length);
};

var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject(value)) return value;
  // effectively preserves circular references
  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map();

  var type = classof(value);
  var C, name, cloned, dataTransfer, i, length, keys, key;

  switch (type) {
    case 'Array':
      cloned = Array(lengthOfArrayLike(value));
      break;
    case 'Object':
      cloned = {};
      break;
    case 'Map':
      cloned = new Map();
      break;
    case 'Set':
      cloned = new Set();
      break;
    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case 'Error':
      name = value.name;
      switch (name) {
        case 'AggregateError':
          cloned = new (getBuiltIn(name))([]);
          break;
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SuppressedError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
          cloned = new (getBuiltIn(name))();
          break;
        case 'CompileError':
        case 'LinkError':
        case 'RuntimeError':
          cloned = new (getBuiltIn('WebAssembly', name))();
          break;
        default:
          cloned = new Error();
      }
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      break;
    case 'ArrayBuffer':
    case 'SharedArrayBuffer':
      cloned = cloneBuffer(value, map, type);
      break;
    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float16Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      length = type === 'DataView' ? value.byteLength : value.length;
      cloned = cloneView(value, type, value.byteOffset, length, map);
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(
          structuredCloneInternal(value.p1, map),
          structuredCloneInternal(value.p2, map),
          structuredCloneInternal(value.p3, map),
          structuredCloneInternal(value.p4, map)
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      }
      break;
    case 'File':
      if (nativeRestrictedStructuredClone) try {
        cloned = nativeRestrictedStructuredClone(value);
        // NodeJS 20.0.0 bug, https://github.com/nodejs/node/issues/47612
        if (classof(cloned) !== type) cloned = undefined;
      } catch (error) { /* empty */ }
      if (!cloned) try {
        cloned = new File([value], value.name, value);
      } catch (error) { /* empty */ }
      if (!cloned) throwUnpolyfillable(type);
      break;
    case 'FileList':
      dataTransfer = createDataTransfer();
      if (dataTransfer) {
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }
        cloned = dataTransfer.files;
      } else cloned = tryNativeRestrictedStructuredClone(value, type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(
          structuredCloneInternal(value.data, map),
          value.width,
          value.height,
          { colorSpace: value.colorSpace }
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      } break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else switch (type) {
        case 'BigInt':
          // can be a 3rd party polyfill
          cloned = Object(value.valueOf());
          break;
        case 'Boolean':
          cloned = Object(thisBooleanValue(value));
          break;
        case 'Number':
          cloned = Object(thisNumberValue(value));
          break;
        case 'String':
          cloned = Object(thisStringValue(value));
          break;
        case 'Date':
          cloned = new Date(thisTimeValue(value));
          break;
        case 'Blob':
          try {
            cloned = value.slice(0, value.size, value.type);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMPoint':
        case 'DOMPointReadOnly':
          C = global[type];
          try {
            cloned = C.fromPoint
              ? C.fromPoint(value)
              : new C(value.x, value.y, value.z, value.w);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMRect':
        case 'DOMRectReadOnly':
          C = global[type];
          try {
            cloned = C.fromRect
              ? C.fromRect(value)
              : new C(value.x, value.y, value.width, value.height);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMMatrix':
        case 'DOMMatrixReadOnly':
          C = global[type];
          try {
            cloned = C.fromMatrix
              ? C.fromMatrix(value)
              : new C(value);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable(value.clone)) throwUnpolyfillable(type);
          try {
            cloned = value.clone();
          } catch (error) {
            throwUncloneable(type);
          } break;
        case 'CropTarget':
        case 'CryptoKey':
        case 'FileSystemDirectoryHandle':
        case 'FileSystemFileHandle':
        case 'FileSystemHandle':
        case 'GPUCompilationInfo':
        case 'GPUCompilationMessage':
        case 'ImageBitmap':
        case 'RTCCertificate':
        case 'WebAssembly.Module':
          throwUnpolyfillable(type);
          // break omitted
        default:
          throwUncloneable(type);
      }
  }

  mapSet(map, value, cloned);

  switch (type) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        createProperty(cloned, key, structuredCloneInternal(value[key], map));
      } break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
      if (hasOwn(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }
      if (name === 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      } else if (name === 'SuppressedError') {
        cloned.error = structuredCloneInternal(value.error, map);
        cloned.suppressed = structuredCloneInternal(value.suppressed, map);
      } // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }
  }

  return cloned;
};

var tryToTransfer = function (rawTransfer, map) {
  if (!isObject(rawTransfer)) throw new TypeError('Transfer option cannot be converted to a sequence');

  var transfer = [];

  iterate(rawTransfer, function (value) {
    push(transfer, anObject(value));
  });

  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var buffers = new Set();
  var value, type, C, transferred, canvas, context;

  while (i < length) {
    value = transfer[i++];

    type = classof(value);

    if (type === 'ArrayBuffer' ? setHas(buffers, value) : mapHas(map, value)) {
      throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    }

    if (type === 'ArrayBuffer') {
      setAdd(buffers, value);
      continue;
    }

    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      transferred = nativeStructuredClone(value, { transfer: [value] });
    } else switch (type) {
      case 'ImageBitmap':
        C = global.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) { /* empty */ }
        break;
      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          transferred = value.clone();
          value.close();
        } catch (error) { /* empty */ }
        break;
      case 'MediaSourceHandle':
      case 'MessagePort':
      case 'OffscreenCanvas':
      case 'ReadableStream':
      case 'TransformStream':
      case 'WritableStream':
        throwUnpolyfillable(type, TRANSFERRING);
    }

    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);

    mapSet(map, value, transferred);
  }

  return buffers;
};

var detachBuffers = function (buffers) {
  setIterate(buffers, function (buffer) {
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      nativeRestrictedStructuredClone(buffer, { transfer: [buffer] });
    } else if (isCallable(buffer.transfer)) {
      buffer.transfer();
    } else if (detachTransferable) {
      detachTransferable(buffer);
    } else {
      throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
    }
  });
};

// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$({ global: true, enumerable: true, sham: !PROPER_STRUCTURED_CLONE_TRANSFER, forced: FORCED_REPLACEMENT }, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map, buffers;

    if (transfer !== undefined) {
      map = new Map();
      buffers = tryToTransfer(transfer, map);
    }

    var clone = structuredCloneInternal(value, map);

    // since of an issue with cloning views of transferred buffers, we a forced to detach them later
    // https://github.com/zloirock/core-js/issues/1265
    if (buffers) detachBuffers(buffers);

    return clone;
  }
});


/***/ }),

/***/ 4603:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(6840);
var uncurryThis = __webpack_require__(9504);
var toString = __webpack_require__(655);
var validateArgumentsLength = __webpack_require__(2812);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 7566:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(6840);
var uncurryThis = __webpack_require__(9504);
var toString = __webpack_require__(655);
var validateArgumentsLength = __webpack_require__(2812);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 8721:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var uncurryThis = __webpack_require__(9504);
var defineBuiltInAccessor = __webpack_require__(2106);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ 5504:
/***/ (function(module) {

function _classPrivateFieldBase(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
module.exports = _classPrivateFieldBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9654:
/***/ (function(module) {

var id = 0;
function _classPrivateFieldKey(e) {
  return "__private_" + id++ + "_" + e;
}
module.exports = _classPrivateFieldKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pdfComponent/index.vue?vue&type=template&id=2e941b15&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pdf_container"
  }, [_c('div', {
    ref: "containerRef",
    staticClass: "viewerContainer",
    attrs: {
      "id": "viewerContainer"
    }
  }, [_c('div', {
    staticClass: "pdfViewer",
    attrs: {
      "id": "innerContainer"
    }
  })])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(6573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(8100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(7936);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.js
var pdf = __webpack_require__(5279);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/web/pdf_viewer.js
var pdf_viewer = __webpack_require__(5694);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pdfComponent/index.vue?vue&type=script&lang=js






pdf.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.js";
// "/pdf.worker.js";
/* harmony default export */ var pdfComponentvue_type_script_lang_js = ({
  name: "pdfComponent",
  data() {
    return {
      pdfLoaded: false,
      state: {},
      newViewer: null,
      eventBus: null,
      linkService: null,
      oldPageNum: 1
    };
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    bufferData: {
      type: ArrayBuffer,
      default: () => {
        return new ArrayBuffer(0);
      }
    },
    scale: {
      type: [String, Number],
      default: "1"
    },
    textMode: {
      type: Number,
      default: 1
    },
    singlePage: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  mounted() {
    this.initPdf(this.url);
  },
  watch: {
    url(val) {
      this.initPdf(val);
    },
    bufferData(val) {
      this.initPdf('', val);
    }
  },
  methods: {
    /*加载PDF文件*/
    initPdf(url, data) {
      const that = this;
      that.state.numPages = 0;
      that.state.curPageNum = 0;
      const eventBus = new pdf_viewer.EventBus();
      const linkService = new pdf_viewer.PDFLinkService();
      that.eventBus = eventBus;
      that.linkService = linkService;
      const findController = new pdf_viewer.PDFFindController({
        linkService,
        eventBus,
        updateMatchesCountOnProgress: true
      });
      if (that.singlePage) {
        that.newViewer = new pdf_viewer.PDFSinglePageViewer({
          container: document.getElementById('viewerContainer'),
          // 显示PDF的容器dom
          linkService,
          useOnlyCssZoom: true,
          // 否可以通过css控制页面的缩放,默认 false
          textLayerMode: that.textMode,
          // 显示文字类型 渲染文字图层  0不渲染文本层
          findController,
          // 文字查找控制器
          eventBus,
          l10n: pdf_viewer.NullL10n
        });
      } else {
        that.newViewer = new pdf_viewer.PDFViewer({
          container: document.getElementById('viewerContainer'),
          // 显示PDF的容器dom
          linkService,
          useOnlyCssZoom: true,
          // 否可以通过css控制页面的缩放,默认 false
          textLayerMode: that.textMode,
          // 显示文字类型 渲染文字图层  0不渲染文本层
          findController,
          // 文字查找控制器
          eventBus,
          l10n: pdf_viewer.NullL10n
        });
      }
      linkService.setViewer(that.newViewer);
      eventBus.on("pagesinit", function () {
        // 缩放
        that.newViewer.currentScaleValue = that.scale;
      });

      // 监听 find 事件
      eventBus.on('find', function () {
        // 处理查找事件
        //console.log('find',e)
      });
      pdf.getDocument({
        url: url,
        data: data,
        cMapPacked: true,
        cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/cmaps/"
      }).promise.then(pdf => {
        //console.log("pdf", pdf);
        if (pdf) {
          that.pdfLoaded = true;
          // 总页数
          that.state.numPages = pdf.numPages;
          that.state.curPageNum = 1;
          //console.log(that.state);
          that.newViewer.setDocument(pdf);
          linkService.setDocument(pdf);
          this.loaded();

          //设置滚动监听页面
          document.getElementById("viewerContainer").addEventListener("scroll", function () {
            that.state.curPageNum = that.newViewer.currentPageNumber;
            if (that.oldPageNum !== that.state.curPageNum) {
              that.pageChange();
              that.oldPageNum = that.state.curPageNum;
            }
          });
          // 获取目录
          that.getOutLine(pdf);
        }
      }).catch(err => {
        console.log(err);
        that.state.numPages = 0;
        that.state.curPageNum = 0;
        that.pdfLoaded = false;
      });
    },
    loaded() {
      this.$emit("loaded", this.state, this.newViewer);
    },
    pageChange() {
      this.$emit("pageChange", this.state);
    },
    pageGo(pageNumber) {
      this.linkService.goToPage(pageNumber);
      this.state.curPageNum = this.newViewer.currentPageNumber;
      this.pageChange();
    },
    pdfFindAgain(keyWord) {
      this.eventBus.dispatch("find", {
        type: "again",
        query: keyWord,
        phraseSearch: true,
        caseSensitive: false,
        // 区分大小写
        entireWord: false // 整个单词
        // highlightAll: false, // 是否高亮
        // findPrevious: undefined, // 是否循环查找
      });
    },
    pdfFindAll(keyWord) {
      this.eventBus.dispatch("find", {
        type: "",
        query: keyWord,
        phraseSearch: true,
        //短语
        caseSensitive: false,
        // 区分大小写
        entireWord: false,
        // 整个单词
        highlightAll: true,
        // 是否高亮全部
        findPrevious: undefined // 查找上一个
      });
    },
    getOutLine(pdf) {
      //获取目录
      pdf.getOutline().then(res => {
        //将页码赋值到res中
        if (res === null) {
          this.$emit("getOutLine", res);
          return false;
        } else {
          console.log(res);
          res.map(async r => {
            return r.pageNumber = (await pdf.getPageIndex(r.dest[0])) + 1;
          });
          // console.log('outline', res)
          this.$emit("getOutLine", res);
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./packages/pdfComponent/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_pdfComponentvue_type_script_lang_js = (pdfComponentvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pdfComponent/index.vue?vue&type=style&index=0&id=2e941b15&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/pdfComponent/index.vue?vue&type=style&index=0&id=2e941b15&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/pdfComponent/index.vue



;


/* normalize component */

var component = normalizeComponent(
  packages_pdfComponentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2e941b15",
  null
  
)

/* harmony default export */ var pdfComponent = (component.exports);
;// CONCATENATED MODULE: ./packages/pdfComponent/index.js

// 为组件添加 install 方法，用于按需引入
pdfComponent.install = function (Vue) {
  Vue.component(pdfComponent.name, pdfComponent);
};
/* harmony default export */ var packages_pdfComponent = (pdfComponent);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_pdfComponent);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=pdf-masterv.common.js.map
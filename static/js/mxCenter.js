var textStyle1 = {fontSize: '13', color: '#Fff'};
var subtextStyle1 = {color: '#40424E', fontSize: '14'};
var colorList = ['red', 'green', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB', 'rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB', 'rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB'];
/*南丁格尔渐变色--排名*/
var leftTopFore = ['#773CF8', '#345FFE', '#FF4D29', '#1DEAC1', '#02D1FB', '#1FC5C1', '#CC51E7'];
var leftTopFore1 = ['#AE2FE3', '#4FA4FF', '#F9AD1B', '#1EB2C0', '#05A1FA', '#B1FF35', '#F33B4E'];
var labelColor = ['#7A4BF0', '#1D96FF', '#FD7622', '#25DFA6', '#02F0FD', '#B1FF35', '#EA20F7'];
/*处理流程完成颜色*/
var alread = ['#A701D6', '#CC51E7', '#1FECBD', '#FD6526', '#754BF0', '#1FECBD', '#AC00DD'];
var alread1 = ['#CD2CD3', '#F33B4E', '#20DDD6', '#FEA817', '#4954F2', '#20DDD6', '#CE2AD6'];
var webkitDep = {
    "type": "force",
    "categories": [
        {
            "name": "政策理论服务",
            "keyword": {},
            "base": "HTMLElement"
        },
        {
            "name": "教育关爱服务",
            "keyword": {},
            "base": "WebGLRenderingContext"
        },
        {
            "name": "平安法治服务",
            "keyword": {},
            "base": "SVGElement"
        },
        {
            "name": "文化体育教育",
            "keyword": {},
            "base": "CSSRule"
        },
        {
            "name": "科技科普服务",
            "keyword": {}
        }
    ],
    "nodes": [
        /*{
	            "name": "AnalyserNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "Uint8Array",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "Float32Array",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ArrayBuffer",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ArrayBufferView",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "Attr",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "Node",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "Element",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioBuffer",
	            "value": 1,
	            "category": 4
	        },*/
        /*{
	            "name": "AudioBufferCallback",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioBufferSourceNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioSourceNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioGain",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioParam",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioContext",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioDestinationNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "AudioListener",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "BiquadFilterNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ChannelMergerNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ChannelSplitterNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ConvolverNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "DelayNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "DynamicsCompressorNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "GainNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "MediaElementAudioSourceNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "MediaStreamAudioDestinationNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "MediaStreamAudioSourceNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "OscillatorNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "PannerNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ScriptProcessorNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "WaveShaperNode",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "WaveTable",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "CanvasRenderingContext",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "HTMLCanvasElement",
	            "value": 1,
	            "category": 0
	        },
	        {
	            "name": "CanvasRenderingContext2D",
	            "value": 1,
	            "category": 4
	        },
	        {
	            "name": "ImageData",
	            "value": 1,
	            "category": 4
	        },*/
        {
            "name": "CanvasGradient",
            "value": 1,
            "category": 4
        },
        {
            "name": "CanvasPattern",
            "value": 1,
            "category": 4
        },
        {
            "name": "HTMLImageElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLVideoElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "TextMetrics",
            "value": 1,
            "category": 4
        },
        {
            "name": "CDATASection",
            "value": 1,
            "category": 4
        },
        {
            "name": "Text",
            "value": 1,
            "category": 4
        },
        {
            "name": "CharacterData",
            "value": 1,
            "category": 4
        },
        {
            "name": "ClientRectList",
            "value": 1,
            "category": 4
        },
        {
            "name": "ClientRect",
            "value": 1,
            "category": 4
        },
        {
            "name": "Clipboard",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileList",
            "value": 1,
            "category": 4
        },
        {
            "name": "DataTransferItemList",
            "value": 1,
            "category": 4
        },
        {
            "name": "Comment",
            "value": 1,
            "category": 4
        },
        {
            "name": "Console",
            "value": 1,
            "category": 4
        },
        {
            "name": "MemoryInfo",
            "value": 1,
            "category": 4
        },
        {
            "name": "Crypto",
            "value": 1,
            "category": 4
        },
        {
            "name": "CSSCharsetRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSRule",
            "value": 3,
            "category": 3
        },
        {
            "name": "CSSFontFaceRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSStyleDeclaration",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSImportRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "MediaList",
            "value": 1,
            "category": 4
        },
        {
            "name": "CSSStyleSheet",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSMediaRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSRuleList",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSPageRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSPrimitiveValue",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSValue",
            "value": 1,
            "category": 3
        },
        {
            "name": "Counter",
            "value": 1,
            "category": 4
        },
        {
            "name": "RGBColor",
            "value": 1,
            "category": 4
        },
        {
            "name": "Rect",
            "value": 1,
            "category": 4
        },
        {
            "name": "CSSStyleRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "StyleSheet",
            "value": 1,
            "category": 4
        },
        {
            "name": "CSSUnknownRule",
            "value": 1,
            "category": 3
        },
        {
            "name": "CSSValueList",
            "value": 1,
            "category": 3
        },
        {
            "name": "Database",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLTransactionCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "DatabaseCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "DatabaseSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLTransactionSyncCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "DataTransferItem",
            "value": 1,
            "category": 4
        },
        {
            "name": "StringCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "Entry",
            "value": 1,
            "category": 4
        },
        {
            "name": "File",
            "value": 1,
            "category": 4
        },
        {
            "name": "DataView",
            "value": 1,
            "category": 4
        },
        {
            "name": "DedicatedWorkerContext",
            "value": 1,
            "category": 4
        },
        {
            "name": "WorkerContext",
            "value": 1,
            "category": 4
        },
        {
            "name": "DirectoryEntry",
            "value": 1,
            "category": 4
        },
        {
            "name": "DirectoryReader",
            "value": 1,
            "category": 4
        },
        {
            "name": "VoidCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "DirectoryEntrySync",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntrySync",
            "value": 1,
            "category": 4
        },
        {
            "name": "DirectoryReaderSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileEntrySync",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntriesCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntryArraySync",
            "value": 1,
            "category": 4
        },
        {
            "name": "DocumentFragment",
            "value": 1,
            "category": 4
        },
        {
            "name": "NodeList",
            "value": 1,
            "category": 4
        },
        {
            "name": "DocumentType",
            "value": 1,
            "category": 4
        },
        {
            "name": "NamedNodeMap",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMFileSystem",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMFileSystemSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMImplementation",
            "value": 1,
            "category": 4
        },
        {
            "name": "HTMLDocument",
            "value": 1,
            "category": 0
        },
        {
            "name": "DOMMimeType",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMPlugin",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMMimeTypeArray",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMPluginArray",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMSelection",
            "value": 1,
            "category": 4
        },
        {
            "name": "Range",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMSettableTokenList",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMTokenList",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMStringMap",
            "value": 1,
            "category": 4
        },
        {
            "name": "ShadowRoot",
            "value": 1,
            "category": 4
        },
        {
            "name": "Entity",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntityReference",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntryArray",
            "value": 1,
            "category": 4
        },
        {
            "name": "MetadataCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "EntryCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "Metadata",
            "value": 1,
            "category": 4
        },
        {
            "name": "ErrorCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileError",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileEntry",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileWriterCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileWriterSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileReader",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileReaderSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileSystemCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "FileWriter",
            "value": 1,
            "category": 4
        },
        {
            "name": "Float64Array",
            "value": 1,
            "category": 4
        },

        {
            "name": "HTMLEmbedElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "SVGDocument",
            "value": 1,
            "category": 2
        },
        {
            "name": "HTMLFieldSetElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLFontElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLFormControlsCollection",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLFrameElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLFrameSetElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLHeadElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLHeadingElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLHRElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLHtmlElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLIFrameElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLInputElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLKeygenElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLLabelElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLLegendElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLLIElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLLinkElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLMapElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLMarqueeElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "TimeRanges",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaController",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaError",
            "value": 1,
            "category": 4
        },
        {
            "name": "TextTrackList",
            "value": 1,
            "category": 4
        },
        {
            "name": "TextTrack",
            "value": 1,
            "category": 4
        },
        {
            "name": "HTMLMenuElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLMetaElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLMeterElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLModElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLObjectElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLOListElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLOptGroupElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLOptionElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLOptionsCollection",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLOutputElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLParagraphElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLParamElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLPreElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLProgressElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLQuoteElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLScriptElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLSelectElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLShadowElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLSourceElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLSpanElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLStyleElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableCaptionElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableCellElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableColElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableSectionElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTableRowElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTextAreaElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTitleElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLTrackElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLUListElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "HTMLUnknownElement",
            "value": 1,
            "category": 0
        },
        {
            "name": "IDBCursor",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBAny",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBKey",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBRequest",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBCursorWithValue",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBDatabase",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMStringList",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBObjectStore",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBTransaction",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBFactory",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBVersionChangeRequest",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBOpenDBRequest",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBIndex",
            "value": 1,
            "category": 4
        },
        {
            "name": "IDBKeyRange",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMError",
            "value": 1,
            "category": 4
        },
        {
            "name": "Int16Array",
            "value": 1,
            "category": 4
        },
        {
            "name": "Int32Array",
            "value": 1,
            "category": 4
        },
        {
            "name": "Int8Array",
            "value": 1,
            "category": 4
        },
        {
            "name": "JavaScriptCallFrame",
            "value": 1,
            "category": 4
        },
        {
            "name": "LocalMediaStream",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaStream",
            "value": 1,
            "category": 4
        },
        {
            "name": "Location",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaQueryList",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaQueryListListener",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaSource",
            "value": 1,
            "category": 4
        },
        {
            "name": "SourceBufferList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SourceBuffer",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaStreamTrackList",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaStreamList",
            "value": 1,
            "category": 4
        },
        {
            "name": "MediaStreamTrack",
            "value": 1,
            "category": 4
        },
        {
            "name": "MessageChannel",
            "value": 1,
            "category": 4
        },
        {
            "name": "MessagePort",
            "value": 1,
            "category": 4
        },
        {
            "name": "MutationObserver",
            "value": 1,
            "category": 4
        },
        {
            "name": "MutationRecord",
            "value": 1,
            "category": 4
        },
        {
            "name": "Navigator",
            "value": 1,
            "category": 4
        },
        {
            "name": "BatteryManager",
            "value": 1,
            "category": 4
        },
        {
            "name": "NavigatorUserMediaErrorCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "NavigatorUserMediaError",
            "value": 1,
            "category": 4
        },
        {
            "name": "NavigatorUserMediaSuccessCallback",
            "value": 1,
            "category": 4
        },

        {
            "name": "SharedWorkerContext",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechGrammarList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechGrammar",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechInputResultList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechInputResult",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechRecognition",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechRecognitionResult",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechRecognitionAlternative",
            "value": 1,
            "category": 4
        },
        {
            "name": "SpeechRecognitionResultList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLResultSet",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLResultSetRowList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLStatementCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLTransaction",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLStatementErrorCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLTransactionErrorCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLError",
            "value": 1,
            "category": 4
        },
        {
            "name": "SQLTransactionSync",
            "value": 1,
            "category": 4
        },
        {
            "name": "StorageInfo",
            "value": 1,
            "category": 4
        },
        {
            "name": "StorageInfoUsageCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "StorageInfoQuotaCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "StorageInfoErrorCallback",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMCoreException",
            "value": 1,
            "category": 4
        },
        {
            "name": "StyleSheetList",
            "value": 1,
            "category": 4
        },
        {
            "name": "SVGAElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTransformable",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedString",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAltGlyphDefElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGElement",
            "value": 3,
            "category": 2
        },
        {
            "name": "SVGAltGlyphElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGURIReference",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAltGlyphItemElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimateColorElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimationElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedAngle",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAngle",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedLength",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGLength",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedLengthList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGLengthList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedNumberList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGNumberList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedPreserveAspectRatio",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGPreserveAspectRatio",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedRect",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGRect",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedTransformList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTransformList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimateElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimateMotionElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimateTransformElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "ElementTimeControl",
            "value": 1,
            "category": 4
        },
        {
            "name": "SVGCircleElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGClipPathElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedEnumeration",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGColor",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGComponentTransferFunctionElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedNumber",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGCursorElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGExternalResourcesRequired",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGDefsElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGDescElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGStylable",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGSVGElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGElementInstance",
            "value": 1,
            "category": 2
        },
        {
            "name": "EventTarget",
            "value": 1,
            "category": 4
        },
        {
            "name": "SVGElementInstanceList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGUseElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGEllipseElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedBoolean",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEBlendElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFilterPrimitiveStandardAttributes",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEColorMatrixElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEComponentTransferElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFECompositeElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEConvolveMatrixElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGAnimatedInteger",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEDiffuseLightingElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEDisplacementMapElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEDistantLightElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEDropShadowElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEFloodElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEFuncAElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEFuncBElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEFuncGElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEFuncRElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEGaussianBlurElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEImageElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEMergeElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEMergeNodeElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEMorphologyElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEOffsetElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFEPointLightElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFESpecularLightingElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFESpotLightElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFETileElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFETurbulenceElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFilterElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFitToViewBox",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontFaceElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontFaceFormatElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontFaceNameElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontFaceSrcElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGFontFaceUriElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGForeignObjectElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGGElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGGlyphElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGGlyphRefElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGGradientElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGHKernElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGImageElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGLinearGradientElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGLineElement",
            "value": 1,
            "category": 2
        },


        {
            "name": "SVGPolygonElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGPolylineElement",
            "value": 1,
            "category": 2
        },

        {
            "name": "SVGLangSpace",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGZoomAndPan",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGViewSpec",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTransform",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGSwitchElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGSymbolElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTests",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGStringList",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTextContentElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTextElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTextPathElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTextPositioningElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTitleElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTRefElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGTSpanElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGViewElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "SVGVKernElement",
            "value": 1,
            "category": 2
        },
        {
            "name": "TextTrackCueList",
            "value": 1,
            "category": 4
        },
        {
            "name": "TextTrackCue",
            "value": 1,
            "category": 4
        },
        {
            "name": "Touch",
            "value": 1,
            "category": 4
        },
        {
            "name": "TouchList",
            "value": 1,
            "category": 4
        },
        {
            "name": "TreeWalker",
            "value": 1,
            "category": 4
        },
        {
            "name": "Uint16Array",
            "value": 1,
            "category": 4
        },
        {
            "name": "Uint32Array",
            "value": 1,
            "category": 4
        },
        {
            "name": "Uint8ClampedArray",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebGLRenderingContext",
            "value": 3,
            "category": 1
        },
        {
            "name": "WebGLProgram",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLBuffer",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLFramebuffer",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLRenderbuffer",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLTexture",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLShader",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLActiveInfo",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLContextAttributes",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLShaderPrecisionFormat",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebGLUniformLocation",
            "value": 1,
            "category": 1
        },
        {
            "name": "WebKitAnimationList",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitAnimation",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSFilterValue",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSKeyframeRule",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSKeyframesRule",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSMatrix",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSMixFunctionValue",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitCSSTransformValue",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebKitNamedFlow",
            "value": 1,
            "category": 4
        },
        {
            "name": "WebSocket",
            "value": 1,
            "category": 4
        },
        {
            "name": "Worker",
            "value": 1,
            "category": 4
        },
        {
            "name": "WorkerLocation",
            "value": 1,
            "category": 4
        },
        {
            "name": "WorkerNavigator",
            "value": 1,
            "category": 4
        },
        {
            "name": "XMLHttpRequest",
            "value": 1,
            "category": 4
        },
        {
            "name": "XMLHttpRequestUpload",
            "value": 1,
            "category": 4
        },
        {
            "name": "DOMFormData",
            "value": 1,
            "category": 4
        },
        {
            "name": "XPathEvaluator",
            "value": 1,
            "category": 4
        },
        {
            "name": "XPathExpression",
            "value": 1,
            "category": 4
        },
        {
            "name": "XPathNSResolver",
            "value": 1,
            "category": 4
        },
        {
            "name": "XPathResult",
            "value": 1,
            "category": 4
        },
        {
            "name": "XSLTProcessor",
            "value": 1,
            "category": 4
        }
    ],
    "links": [
        {
            "source": 0,
            "target": 1
        },
        {
            "source": 0,
            "target": 2
        },
        {
            "source": 0,
            "target": 3
        },
        {
            "source": 4,
            "target": 4
        },
        {
            "source": 5,
            "target": 4
        },
        {
            "source": 6,
            "target": 7
        },
        {
            "source": 6,
            "target": 8
        },
        {
            "source": 9,
            "target": 3
        },
        {
            "source": 10,
            "target": 9
        },
        {
            "source": 11,
            "target": 12
        },
        {
            "source": 11,
            "target": 9
        },
        {
            "source": 11,
            "target": 13
        },
        {
            "source": 11,
            "target": 14
        },
        {
            "source": 15,
            "target": 16
        },
        {
            "source": 15,
            "target": 17
        },
        {
            "source": 15,
            "target": 0
        },
        {
            "source": 15,
            "target": 18
        },
        {
            "source": 15,
            "target": 9
        },
        {
            "source": 15,
            "target": 11
        },
        {
            "source": 15,
            "target": 19
        },
        {
            "source": 15,
            "target": 20
        },
        {
            "source": 15,
            "target": 21
        },
        {
            "source": 15,
            "target": 22
        },
        {
            "source": 15,
            "target": 23
        },
        {
            "source": 15,
            "target": 24
        },
        {
            "source": 15,
            "target": 25
        },
        {
            "source": 15,
            "target": 26
        },
        {
            "source": 15,
            "target": 27
        },
        {
            "source": 15,
            "target": 28
        },
        {
            "source": 15,
            "target": 29
        },
        {
            "source": 15,
            "target": 30
        },
        {
            "source": 15,
            "target": 31
        },
        {
            "source": 15,
            "target": 32
        },
        {
            "source": 15,
            "target": 4
        },
        {
            "source": 16,
            "target": 1
        },
        {
            "source": 13,
            "target": 14
        },
        {
            "source": 1,
            "target": 15
        },
        {
            "source": 1,
            "target": 1
        },
        {
            "source": 1,
            "target": 14
        },
        {
            "source": 14,
            "target": 3
        },
        {
            "source": 12,
            "target": 1
        },
        {
            "source": 18,
            "target": 1
        },
        {
            "source": 18,
            "target": 14
        },
        {
            "source": 18,
            "target": 3
        },
        {
            "source": 33,
            "target": 34
        },
        {
            "source": 35,
            "target": 33
        },
        {
            "source": 35,
            "target": 36
        },
        {
            "source": 35,
            "target": 37
        },
        {
            "source": 35,
            "target": 38
        },
        {
            "source": 35,
            "target": 39
        },
        {
            "source": 35,
            "target": 34
        },
        {
            "source": 35,
            "target": 40
        },
        {
            "source": 35,
            "target": 41
        },
        {
            "source": 42,
            "target": 43
        },
        {
            "source": 19,
            "target": 1
        },
        {
            "source": 20,
            "target": 1
        },
        {
            "source": 44,
            "target": 7
        },
        {
            "source": 45,
            "target": 46
        },
        {
            "source": 47,
            "target": 48
        },
        {
            "source": 47,
            "target": 49
        },
        {
            "source": 47,
            "target": 39
        },
        {
            "source": 50,
            "target": 44
        },
        {
            "source": 51,
            "target": 52
        },
        {
            "source": 21,
            "target": 1
        },
        {
            "source": 21,
            "target": 9
        },
        {
            "source": 53,
            "target": 5
        },
        {
            "source": 54,
            "target": 55
        },
        {
            "source": 56,
            "target": 55
        },
        {
            "source": 56,
            "target": 57
        },
        {
            "source": 58,
            "target": 55
        },
        {
            "source": 58,
            "target": 59
        },
        {
            "source": 58,
            "target": 60
        },
        {
            "source": 61,
            "target": 55
        },
        {
            "source": 61,
            "target": 62
        },
        {
            "source": 61,
            "target": 59
        },
        {
            "source": 63,
            "target": 55
        },
        {
            "source": 63,
            "target": 57
        },
        {
            "source": 64,
            "target": 65
        },
        {
            "source": 64,
            "target": 66
        },
        {
            "source": 64,
            "target": 67
        },
        {
            "source": 64,
            "target": 68
        },
        {
            "source": 55,
            "target": 55
        },
        {
            "source": 55,
            "target": 60
        },
        {
            "source": 62,
            "target": 55
        },
        {
            "source": 57,
            "target": 55
        },
        {
            "source": 57,
            "target": 65
        },
        {
            "source": 69,
            "target": 55
        },
        {
            "source": 69,
            "target": 57
        },
        {
            "source": 60,
            "target": 70
        },
        {
            "source": 60,
            "target": 62
        },
        {
            "source": 60,
            "target": 55
        },
        {
            "source": 71,
            "target": 55
        },
        {
            "source": 72,
            "target": 65
        },
        {
            "source": 73,
            "target": 74
        },
        {
            "source": 75,
            "target": 73
        },
        {
            "source": 75,
            "target": 76
        },
        {
            "source": 76,
            "target": 77
        },
        {
            "source": 78,
            "target": 79
        },
        {
            "source": 78,
            "target": 80
        },
        {
            "source": 49,
            "target": 81
        },
        {
            "source": 49,
            "target": 78
        },
        {
            "source": 82,
            "target": 5
        },
        {
            "source": 83,
            "target": 84
        },
        {
            "source": 22,
            "target": 1
        },
        {
            "source": 22,
            "target": 14
        },
        {
            "source": 85,
            "target": 80
        },
        {
            "source": 85,
            "target": 86
        },
        {
            "source": 85,
            "target": 87
        },
        {
            "source": 88,
            "target": 89
        },
        {
            "source": 88,
            "target": 90
        },
        {
            "source": 88,
            "target": 88
        },
        {
            "source": 88,
            "target": 91
        },
        {
            "source": 86,
            "target": 92
        },
        {
            "source": 90,
            "target": 93
        },
        {
            "source": 94,
            "target": 7
        },
        {
            "source": 94,
            "target": 8
        },
        {
            "source": 94,
            "target": 95
        },
        {
            "source": 96,
            "target": 7
        },
        {
            "source": 96,
            "target": 97
        },
        {
            "source": 98,
            "target": 85
        },
        {
            "source": 99,
            "target": 88
        },
        {
            "source": 100,
            "target": 60
        },
        {
            "source": 100,
            "target": 96
        },
        {
            "source": 100,
            "target": 101
        },
        {
            "source": 102,
            "target": 103
        },
        {
            "source": 104,
            "target": 102
        },
        {
            "source": 103,
            "target": 102
        },
        {
            "source": 105,
            "target": 103
        },
        {
            "source": 106,
            "target": 7
        },
        {
            "source": 106,
            "target": 107
        },
        {
            "source": 108,
            "target": 109
        },
        {
            "source": 23,
            "target": 1
        },
        {
            "source": 23,
            "target": 14
        },
        {
            "source": 8,
            "target": 7
        },
        {
            "source": 8,
            "target": 109
        },
        {
            "source": 8,
            "target": 110
        },
        {
            "source": 8,
            "target": 8
        },
        {
            "source": 8,
            "target": 57
        },
        {
            "source": 8,
            "target": 6
        },
        {
            "source": 8,
            "target": 46
        },
        {
            "source": 8,
            "target": 45
        },
        {
            "source": 8,
            "target": 95
        },
        {
            "source": 8,
            "target": 111
        },
        {
            "source": 112,
            "target": 7
        },
        {
            "source": 113,
            "target": 7
        },
        {
            "source": 92,
            "target": 114
        },
        {
            "source": 80,
            "target": 98
        },
        {
            "source": 80,
            "target": 85
        },
        {
            "source": 80,
            "target": 115
        },
        {
            "source": 80,
            "target": 116
        },
        {
            "source": 80,
            "target": 87
        },
        {
            "source": 114,
            "target": 80
        },
        {
            "source": 93,
            "target": 89
        },
        {
            "source": 116,
            "target": 80
        },
        {
            "source": 89,
            "target": 99
        },
        {
            "source": 89,
            "target": 89
        },
        {
            "source": 89,
            "target": 117
        },
        {
            "source": 89,
            "target": 88
        },
        {
            "source": 118,
            "target": 119
        },
        {
            "source": 120,
            "target": 81
        },
        {
            "source": 121,
            "target": 80
        },
        {
            "source": 121,
            "target": 122
        },
        {
            "source": 121,
            "target": 120
        },
        {
            "source": 91,
            "target": 89
        },
        {
            "source": 91,
            "target": 123
        },
        {
            "source": 91,
            "target": 81
        },
        {
            "source": 48,
            "target": 81
        },
        {
            "source": 124,
            "target": 119
        },
        {
            "source": 125,
            "target": 4
        },
        {
            "source": 126,
            "target": 98
        },
        {
            "source": 127,
            "target": 119
        },
        {
            "source": 122,
            "target": 127
        },
        {
            "source": 3,
            "target": 5
        },
        {
            "source": 3,
            "target": 3
        },
        {
            "source": 128,
            "target": 5
        },
        {
            "source": 128,
            "target": 128
        },
        {
            "source": 24,
            "target": 1
        },
        {
            "source": 24,
            "target": 13
        },
        {
            "source": 129,
            "target": 130
        },
        {
            "source": 131,
            "target": 132
        },
        {
            "source": 133,
            "target": 134
        },
        {
            "source": 135,
            "target": 7
        },
        {
            "source": 135,
            "target": 95
        },
        {
            "source": 136,
            "target": 137
        },
        {
            "source": 138,
            "target": 137
        },
        {
            "source": 139,
            "target": 137
        },
        {
            "source": 140,
            "target": 141
        },
        {
            "source": 142,
            "target": 137
        },
        {
            "source": 143,
            "target": 137
        },
        {
            "source": 144,
            "target": 137
        },
        {
            "source": 145,
            "target": 137
        },
        {
            "source": 146,
            "target": 137
        },
        {
            "source": 146,
            "target": 147
        },
        {
            "source": 146,
            "target": 95
        },
        {
            "source": 146,
            "target": 148
        },
        {
            "source": 34,
            "target": 137
        },
        {
            "source": 149,
            "target": 7
        },
        {
            "source": 150,
            "target": 137
        },
        {
            "source": 150,
            "target": 95
        },
        {
            "source": 151,
            "target": 137
        },
        {
            "source": 151,
            "target": 149
        },
        {
            "source": 152,
            "target": 137
        },
        {
            "source": 153,
            "target": 137
        },
        {
            "source": 154,
            "target": 137
        },
        {
            "source": 155,
            "target": 137
        },
        {
            "source": 101,
            "target": 8
        },
        {
            "source": 101,
            "target": 135
        },
        {
            "source": 101,
            "target": 149
        },
        {
            "source": 137,
            "target": 8
        },
        {
            "source": 137,
            "target": 149
        },
        {
            "source": 156,
            "target": 137
        },
        {
            "source": 156,
            "target": 157
        },
        {
            "source": 158,
            "target": 137
        },
        {
            "source": 158,
            "target": 149
        },
        {
            "source": 158,
            "target": 147
        },
        {
            "source": 158,
            "target": 148
        },
        {
            "source": 159,
            "target": 137
        },
        {
            "source": 160,
            "target": 149
        },
        {
            "source": 160,
            "target": 7
        },
        {
            "source": 147,
            "target": 137
        },
        {
            "source": 147,
            "target": 149
        },
        {
            "source": 161,
            "target": 137
        },
        {
            "source": 161,
            "target": 157
        },
        {
            "source": 162,
            "target": 137
        },
        {
            "source": 163,
            "target": 137
        },
        {
            "source": 164,
            "target": 137
        },
        {
            "source": 165,
            "target": 137
        },
        {
            "source": 166,
            "target": 137
        },
        {
            "source": 167,
            "target": 137
        },
        {
            "source": 167,
            "target": 157
        },
        {
            "source": 39,
            "target": 137
        },
        {
            "source": 168,
            "target": 137
        },
        {
            "source": 168,
            "target": 48
        },
        {
            "source": 168,
            "target": 147
        },
        {
            "source": 168,
            "target": 95
        },
        {
            "source": 168,
            "target": 148
        },
        {
            "source": 168,
            "target": 114
        },
        {
            "source": 169,
            "target": 137
        },


        {
            "source": 141,
            "target": 176
        },
        {
            "source": 141,
            "target": 177
        },
        {
            "source": 141,
            "target": 178
        },
        {
            "source": 141,
            "target": 179
        },
        {
            "source": 141,
            "target": 180
        },
        {
            "source": 181,
            "target": 137
        },
        {
            "source": 182,
            "target": 137
        },
        {
            "source": 183,
            "target": 137
        },
        {
            "source": 183,
            "target": 95
        },
        {
            "source": 184,
            "target": 137
        },
        {
            "source": 185,
            "target": 137
        },
        {
            "source": 185,
            "target": 147
        },
        {
            "source": 185,
            "target": 148
        },
        {
            "source": 185,
            "target": 157
        },
        {
            "source": 186,
            "target": 137
        },
        {
            "source": 187,
            "target": 137
        },
        {
            "source": 188,
            "target": 137
        },
        {
            "source": 188,
            "target": 147
        },
        {
            "source": 189,
            "target": 149
        },
        {
            "source": 189,
            "target": 188
        },
        {
            "source": 189,
            "target": 7
        },
        {
            "source": 190,
            "target": 137
        },
        {
            "source": 190,
            "target": 147
        },
        {
            "source": 190,
            "target": 108
        },
        {
            "source": 190,
            "target": 95
        },
        {
            "source": 190,
            "target": 148
        },
        {
            "source": 191,
            "target": 137
        },
        {
            "source": 192,
            "target": 137
        },
        {
            "source": 193,
            "target": 137
        },
        {
            "source": 194,
            "target": 137
        },
        {
            "source": 194,
            "target": 95
        },
        {
            "source": 195,
            "target": 137
        },
        {
            "source": 196,
            "target": 137
        },
        {
            "source": 197,
            "target": 137
        },
        {
            "source": 197,
            "target": 147
        },
        {
            "source": 197,
            "target": 95
        },
        {
            "source": 197,
            "target": 189
        },
        {
            "source": 197,
            "target": 149
        },
        {
            "source": 197,
            "target": 148
        },
        {
            "source": 197,
            "target": 7
        },
        {
            "source": 198,
            "target": 137
        },
        {
            "source": 199,
            "target": 137
        },
        {
            "source": 200,
            "target": 137
        },
        {
            "source": 201,
            "target": 137
        },
        {
            "source": 201,
            "target": 70
        },
        {
            "source": 202,
            "target": 137
        },
        {
            "source": 203,
            "target": 137
        },
        {
            "source": 204,
            "target": 137
        },
        {
            "source": 205,
            "target": 137
        },
        {
            "source": 205,
            "target": 202
        },
        {
            "source": 205,
            "target": 149
        },
        {
            "source": 205,
            "target": 206
        },
        {
            "source": 207,
            "target": 137
        },
        {
            "source": 207,
            "target": 149
        },
        {
            "source": 206,
            "target": 137
        },
        {
            "source": 206,
            "target": 149
        },
        {
            "source": 208,
            "target": 137
        },
        {
            "source": 208,
            "target": 147
        },
        {
            "source": 208,
            "target": 95
        },
        {
            "source": 208,
            "target": 148
        },
        {
            "source": 209,
            "target": 137
        },
        {
            "source": 210,
            "target": 137
        },
        {
            "source": 210,
            "target": 180
        },
        {
            "source": 211,
            "target": 137
        },
        {
            "source": 212,
            "target": 137
        },
        {
            "source": 40,
            "target": 141
        },
        {
            "source": 213,
            "target": 214
        },
        {
            "source": 213,
            "target": 215
        },
        {
            "source": 213,
            "target": 216
        },
        {
            "source": 217,
            "target": 213
        },
        {
            "source": 218,
            "target": 219
        },
        {
            "source": 218,
            "target": 214
        },
        {
            "source": 218,
            "target": 220
        },
        {
            "source": 218,
            "target": 221
        },
        {
            "source": 222,
            "target": 215
        },
        {
            "source": 222,
            "target": 223
        },
        {
            "source": 222,
            "target": 224
        },
        {
            "source": 222,
            "target": 216
        },
        {
            "source": 225,
            "target": 214
        },
        {
            "source": 225,
            "target": 220
        },
        {
            "source": 225,
            "target": 216
        },
        {
            "source": 226,
            "target": 215
        },
        {
            "source": 226,
            "target": 226
        },
        {
            "source": 220,
            "target": 219
        },
        {
            "source": 220,
            "target": 214
        },
        {
            "source": 220,
            "target": 221
        },
        {
            "source": 220,
            "target": 216
        },
        {
            "source": 220,
            "target": 225
        },
        {
            "source": 224,
            "target": 216
        },
        {
            "source": 216,
            "target": 227
        },
        {
            "source": 216,
            "target": 214
        },
        {
            "source": 216,
            "target": 221
        },
        {
            "source": 221,
            "target": 218
        },
        {
            "source": 221,
            "target": 227
        },
        {
            "source": 221,
            "target": 220
        },
        {
            "source": 223,
            "target": 216
        },
        {
            "source": 228,
            "target": 5
        },
        {
            "source": 228,
            "target": 228
        },
        {
            "source": 229,
            "target": 5
        },
        {
            "source": 229,
            "target": 229
        },
        {
            "source": 230,
            "target": 5
        },
        {
            "source": 230,
            "target": 230
        },
        {
            "source": 231,
            "target": 231
        },
        {
            "source": 232,
            "target": 233
        },
        {
            "source": 234,
            "target": 219
        },
        {
            "source": 177,
            "target": 176
        },
        {
            "source": 25,
            "target": 12
        },
        {
            "source": 25,
            "target": 141
        },
        {
            "source": 235,
            "target": 236
        },
        {
            "source": 236,
            "target": 235
        },
        {
            "source": 237,
            "target": 238
        },
        {
            "source": 237,
            "target": 239
        },
        {
            "source": 233,
            "target": 240
        },
        {
            "source": 26,
            "target": 12
        },
        {
            "source": 26,
            "target": 233
        },
        {
            "source": 27,
            "target": 12
        },
        {
            "source": 27,
            "target": 233
        },
        {
            "source": 241,
            "target": 233
        },
        {
            "source": 240,
            "target": 242
        },
        {
            "source": 243,
            "target": 244
        },
        {
            "source": 115,
            "target": 117
        },
        {
            "source": 245,
            "target": 7
        },
        {
            "source": 246,
            "target": 95
        },
        {
            "source": 246,
            "target": 7
        },
        {
            "source": 97,
            "target": 7
        },
        {
            "source": 247,
            "target": 131
        },
        {
            "source": 247,
            "target": 104
        },
        {
            "source": 247,
            "target": 105
        },
        {
            "source": 247,
            "target": 248
        },
        {
            "source": 247,
            "target": 129
        },
        {
            "source": 249,
            "target": 250
        },
        {
            "source": 251,
            "target": 232
        },
        {
            "source": 7,
            "target": 97
        },
        {
            "source": 7,
            "target": 95
        },
        {
            "source": 7,
            "target": 7
        },
        {
            "source": 7,
            "target": 8
        },
        {
            "source": 252,
            "target": 7
        },
        {
            "source": 253,
            "target": 252
        },
        {
            "source": 253,
            "target": 7
        },
        {
            "source": 95,
            "target": 7
        },
        {
            "source": 254,
            "target": 7
        },
        {
            "source": 255,
            "target": 256
        },
        {
            "source": 257,
            "target": 255
        },
        {
            "source": 257,
            "target": 87
        },
        {
            "source": 258,
            "target": 259
        },
        {
            "source": 28,
            "target": 12
        },
        {
            "source": 28,
            "target": 14
        },
        {
            "source": 28,
            "target": 32
        },
        {
            "source": 29,
            "target": 1
        },
        {
            "source": 260,
            "target": 52
        },
        {
            "source": 260,
            "target": 261
        },
        {
            "source": 260,
            "target": 262
        },
        {
            "source": 132,
            "target": 133
        },
        {
            "source": 263,
            "target": 264
        },
        {
            "source": 265,
            "target": 7
        },
        {
            "source": 265,
            "target": 70
        },
        {
            "source": 266,
            "target": 95
        },
        {
            "source": 107,
            "target": 7
        },
        {
            "source": 107,
            "target": 94
        },
        {
            "source": 107,
            "target": 107
        },
        {
            "source": 107,
            "target": 46
        },
        {
            "source": 107,
            "target": 45
        },
        {
            "source": 68,
            "target": 64
        },
        {
            "source": 67,
            "target": 64
        },
        {
            "source": 267,
            "target": 4
        },
        {
            "source": 267,
            "target": 5
        },
        {
            "source": 268,
            "target": 269
        },
        {
            "source": 268,
            "target": 241
        },
        {
            "source": 268,
            "target": 270
        },
        {
            "source": 268,
            "target": 233
        },
        {
            "source": 268,
            "target": 271
        },
        {
            "source": 268,
            "target": 267
        },
        {
            "source": 268,
            "target": 272
        },
        {
            "source": 271,
            "target": 269
        },
        {
            "source": 272,
            "target": 273
        },
        {
            "source": 274,
            "target": 275
        },
        {
            "source": 30,
            "target": 1
        },
        {
            "source": 276,
            "target": 277
        },
        {
            "source": 111,
            "target": 94
        },
        {
            "source": 111,
            "target": 8
        },
        {
            "source": 111,
            "target": 7
        },
        {
            "source": 111,
            "target": 95
        },
        {
            "source": 111,
            "target": 106
        },
        {
            "source": 278,
            "target": 279
        },
        {
            "source": 278,
            "target": 244
        },
        {
            "source": 280,
            "target": 84
        },
        {
            "source": 239,
            "target": 176
        },
        {
            "source": 239,
            "target": 2
        },
        {
            "source": 238,
            "target": 239
        },
        {
            "source": 281,
            "target": 282
        },
        {
            "source": 283,
            "target": 284
        },
        {
            "source": 285,
            "target": 281
        },
        {
            "source": 286,
            "target": 287
        },
        {
            "source": 288,
            "target": 286
        },
        {
            "source": 289,
            "target": 290
        },
        {
            "source": 291,
            "target": 292
        },
        {
            "source": 293,
            "target": 292
        },
        {
            "source": 74,
            "target": 292
        },
        {
            "source": 294,
            "target": 295
        },
        {
            "source": 296,
            "target": 289
        },
        {
            "source": 77,
            "target": 296
        },
        {
            "source": 297,
            "target": 298
        },
        {
            "source": 297,
            "target": 299
        },
        {
            "source": 300,
            "target": 301
        },
        {
            "source": 70,
            "target": 59
        },
        {
            "source": 70,
            "target": 7
        },
        {
            "source": 70,
            "target": 70
        },
        {
            "source": 302,
            "target": 70
        },
        {
            "source": 303,
            "target": 304
        },
        {
            "source": 303,
            "target": 305
        },
        {
            "source": 306,
            "target": 307
        },
        {
            "source": 308,
            "target": 309
        },
        {
            "source": 310,
            "target": 307
        },
        {
            "source": 311,
            "target": 312
        },
        {
            "source": 313,
            "target": 314
        },
        {
            "source": 315,
            "target": 316
        },
        {
            "source": 317,
            "target": 318
        },
        {
            "source": 319,
            "target": 320
        },
        {
            "source": 321,
            "target": 322
        },
        {
            "source": 323,
            "target": 324
        },
        {
            "source": 325,
            "target": 326
        },
        {
            "source": 327,
            "target": 312
        },
        {
            "source": 328,
            "target": 312
        },
        {
            "source": 329,
            "target": 312
        },
        {
            "source": 312,
            "target": 330
        },
        {
            "source": 312,
            "target": 307
        },
        {
            "source": 331,
            "target": 304
        },
        {
            "source": 331,
            "target": 315
        },
        {
            "source": 332,
            "target": 304
        },
        {
            "source": 332,
            "target": 333
        },
        {
            "source": 334,
            "target": 65
        },
        {
            "source": 334,
            "target": 67
        },
        {
            "source": 335,
            "target": 307
        },
        {
            "source": 335,
            "target": 336
        },
        {
            "source": 335,
            "target": 319
        },
        {
            "source": 335,
            "target": 333
        },
        {
            "source": 337,
            "target": 338
        },
        {
            "source": 337,
            "target": 315
        },
        {
            "source": 339,
            "target": 304
        },
        {
            "source": 340,
            "target": 341
        },
        {
            "source": 157,
            "target": 342
        },
        {
            "source": 307,
            "target": 8
        },
        {
            "source": 307,
            "target": 342
        },
        {
            "source": 307,
            "target": 307
        },
        {
            "source": 343,
            "target": 344
        },
        {
            "source": 343,
            "target": 345
        },
        {
            "source": 343,
            "target": 307
        },
        {
            "source": 343,
            "target": 346
        },
        {
            "source": 343,
            "target": 343
        },
        {
            "source": 345,
            "target": 343
        },
        {
            "source": 347,
            "target": 304
        },
        {
            "source": 347,
            "target": 315
        },
        {
            "source": 338,
            "target": 348
        },
        {
            "source": 349,
            "target": 350
        },
        {
            "source": 349,
            "target": 305
        },
        {
            "source": 349,
            "target": 333
        },
        {
            "source": 351,
            "target": 350
        },
        {
            "source": 351,
            "target": 305
        },
        {
            "source": 351,
            "target": 333
        },
        {
            "source": 351,
            "target": 319
        },
        {
            "source": 352,
            "target": 350
        },
        {
            "source": 352,
            "target": 305
        },
        {
            "source": 353,
            "target": 350
        },
        {
            "source": 353,
            "target": 305
        },
        {
            "source": 353,
            "target": 336
        },
        {
            "source": 353,
            "target": 333
        },
        {
            "source": 354,
            "target": 350
        },
        {
            "source": 354,
            "target": 336
        },
        {
            "source": 354,
            "target": 333
        },
        {
            "source": 354,
            "target": 305
        },
        {
            "source": 354,
            "target": 319
        },
        {
            "source": 354,
            "target": 355
        },
        {
            "source": 354,
            "target": 348
        },
        {
            "source": 356,
            "target": 350
        },
        {
            "source": 356,
            "target": 336
        },
        {
            "source": 356,
            "target": 305
        },
        {
            "source": 357,
            "target": 350
        },
        {
            "source": 357,
            "target": 305
        },
        {
            "source": 357,
            "target": 336
        },
        {
            "source": 357,
            "target": 333
        },
        {
            "source": 358,
            "target": 307
        },
        {
            "source": 358,
            "target": 336
        },
        {
            "source": 359,
            "target": 350
        },
        {
            "source": 359,
            "target": 336
        },
        {
            "source": 359,
            "target": 305
        },
        {
            "source": 360,
            "target": 350
        },
        {
            "source": 361,
            "target": 335
        },
        {
            "source": 362,
            "target": 335
        },
        {
            "source": 363,
            "target": 335
        },
        {
            "source": 364,
            "target": 335
        },
        {
            "source": 365,
            "target": 350
        },
        {
            "source": 365,
            "target": 305
        },
        {
            "source": 365,
            "target": 336
        },
        {
            "source": 366,
            "target": 350
        },
        {
            "source": 366,
            "target": 321
        },
        {
            "source": 367,
            "target": 350
        },
        {
            "source": 368,
            "target": 307
        },
        {
            "source": 368,
            "target": 305
        },
        {
            "source": 369,
            "target": 350
        },
        {
            "source": 369,
            "target": 305
        },
        {
            "source": 369,
            "target": 333
        },
        {
            "source": 369,
            "target": 336
        },
        {
            "source": 370,
            "target": 350
        },
        {
            "source": 370,
            "target": 336
        },
        {
            "source": 370,
            "target": 305
        },
        {
            "source": 371,
            "target": 307
        },
        {
            "source": 371,
            "target": 336
        },
        {
            "source": 372,
            "target": 350
        },
        {
            "source": 372,
            "target": 305
        },
        {
            "source": 372,
            "target": 336
        },
        {
            "source": 373,
            "target": 307
        },
        {
            "source": 373,
            "target": 336
        },
        {
            "source": 374,
            "target": 350
        },
        {
            "source": 374,
            "target": 305
        },
        {
            "source": 375,
            "target": 350
        },
        {
            "source": 375,
            "target": 336
        },
        {
            "source": 375,
            "target": 355
        },
        {
            "source": 375,
            "target": 333
        },
        {
            "source": 376,
            "target": 341
        },
        {
            "source": 376,
            "target": 355
        },
        {
            "source": 376,
            "target": 333
        },
        {
            "source": 376,
            "target": 315
        },
        {
            "source": 350,
            "target": 341
        },
        {
            "source": 350,
            "target": 315
        },
        {
            "source": 350,
            "target": 305
        },
        {
            "source": 377,
            "target": 321
        },
        {
            "source": 377,
            "target": 323
        },
        {
            "source": 378,
            "target": 307
        },
        {
            "source": 379,
            "target": 307
        },
        {
            "source": 380,
            "target": 307
        },
        {
            "source": 381,
            "target": 307
        },
        {
            "source": 382,
            "target": 307
        },
        {
            "source": 383,
            "target": 307
        },
        {
            "source": 384,
            "target": 304
        },
        {
            "source": 384,
            "target": 315
        },
        {
            "source": 385,
            "target": 304
        },
        {
            "source": 386,
            "target": 307
        },
        {
            "source": 387,
            "target": 341
        },
        {
            "source": 388,
            "target": 341
        },
        {
            "source": 388,
            "target": 325
        },
        {
            "source": 388,
            "target": 333
        },
        {
            "source": 389,
            "target": 307
        },
        {
            "source": 390,
            "target": 304
        },
        {
            "source": 390,
            "target": 315
        },
        {
            "source": 390,
            "target": 321
        },
        {
            "source": 318,
            "target": 316
        },
        {
            "source": 391,
            "target": 388
        },
        {
            "source": 391,
            "target": 315
        },
        {
            "source": 392,
            "target": 304
        },
        {
            "source": 392,
            "target": 315
        },
        {
            "source": 393,
            "target": 307
        },
        {
            "source": 393,
            "target": 324
        },
        {
            "source": 393,
            "target": 394
        },
        {
            "source": 395,
            "target": 377
        },
        {
            "source": 395,
            "target": 315
        },
        {
            "source": 395,
            "target": 333
        },
        {
            "source": 395,
            "target": 313
        },
        {
            "source": 395,
            "target": 314
        },
        {
            "source": 396,
            "target": 341
        },
        {
            "source": 396,
            "target": 315
        },
        {
            "source": 396,
            "target": 333
        },
        {
            "source": 394,
            "target": 394
        },
        {
            "source": 397,
            "target": 307
        },
        {
            "source": 398,
            "target": 307
        },
        {
            "source": 399,
            "target": 338
        },
        {
            "source": 320,
            "target": 400
        },
        {
            "source": 401,
            "target": 334
        },
        {
            "source": 402,
            "target": 304
        },
        {
            "source": 402,
            "target": 403
        },
        {
            "source": 402,
            "target": 336
        },
        {
            "source": 402,
            "target": 404
        },
        {
            "source": 402,
            "target": 405
        },
        {
            "source": 402,
            "target": 406
        },
        {
            "source": 402,
            "target": 407
        },
        {
            "source": 402,
            "target": 408
        },
        {
            "source": 402,
            "target": 409
        },
        {
            "source": 402,
            "target": 410
        },
        {
            "source": 402,
            "target": 411
        },
        {
            "source": 402,
            "target": 412
        },
        {
            "source": 402,
            "target": 413
        },
        {
            "source": 402,
            "target": 414
        },
        {
            "source": 402,
            "target": 415
        },
        {
            "source": 402,
            "target": 416
        },
        {
            "source": 402,
            "target": 417
        },
        {
            "source": 402,
            "target": 418
        },
        {
            "source": 402,
            "target": 419
        },
        {
            "source": 402,
            "target": 420
        },
        {
            "source": 402,
            "target": 421
        },
        {
            "source": 402,
            "target": 422
        },
        {
            "source": 402,
            "target": 423
        },
        {
            "source": 404,
            "target": 424
        },
        {
            "source": 405,
            "target": 424
        },
        {
            "source": 406,
            "target": 424
        },
        {
            "source": 407,
            "target": 424
        },
        {
            "source": 408,
            "target": 424
        },
        {
            "source": 409,
            "target": 424
        },
        {
            "source": 410,
            "target": 424
        },
        {
            "source": 411,
            "target": 424
        },
        {
            "source": 412,
            "target": 424
        },
        {
            "source": 413,
            "target": 424
        },
        {
            "source": 414,
            "target": 424
        },
        {
            "source": 415,
            "target": 424
        },
        {
            "source": 416,
            "target": 424
        },
        {
            "source": 417,
            "target": 424
        },
        {
            "source": 418,
            "target": 424
        },
        {
            "source": 419,
            "target": 424
        },
        {
            "source": 420,
            "target": 424
        },
        {
            "source": 403,
            "target": 424
        },
        {
            "source": 421,
            "target": 424
        },
        {
            "source": 422,
            "target": 424
        },
        {
            "source": 425,
            "target": 377
        },
        {
            "source": 425,
            "target": 315
        },
        {
            "source": 425,
            "target": 333
        },
        {
            "source": 425,
            "target": 325
        },
        {
            "source": 423,
            "target": 423
        },
        {
            "source": 426,
            "target": 423
        },
        {
            "source": 427,
            "target": 304
        },
        {
            "source": 427,
            "target": 426
        },
        {
            "source": 428,
            "target": 304
        },
        {
            "source": 428,
            "target": 426
        },
        {
            "source": 429,
            "target": 388
        },
        {
            "source": 429,
            "target": 315
        },
        {
            "source": 430,
            "target": 304
        },
        {
            "source": 430,
            "target": 315
        },
        {
            "source": 431,
            "target": 338
        },
        {
            "source": 432,
            "target": 312
        },
        {
            "source": 433,
            "target": 341
        },
        {
            "source": 433,
            "target": 336
        },
        {
            "source": 341,
            "target": 305
        },
        {
            "source": 341,
            "target": 57
        },
        {
            "source": 341,
            "target": 65
        },
        {
            "source": 434,
            "target": 435
        },
        {
            "source": 342,
            "target": 436
        },
        {
            "source": 342,
            "target": 423
        },
        {
            "source": 342,
            "target": 437
        },
        {
            "source": 342,
            "target": 315
        },
        {
            "source": 342,
            "target": 324
        },
        {
            "source": 342,
            "target": 307
        },
        {
            "source": 342,
            "target": 314
        },
        {
            "source": 342,
            "target": 316
        },
        {
            "source": 342,
            "target": 394
        },
        {
            "source": 342,
            "target": 400
        },
        {
            "source": 342,
            "target": 438
        },
        {
            "source": 342,
            "target": 8
        },
        {
            "source": 342,
            "target": 95
        },
        {
            "source": 439,
            "target": 304
        },
        {
            "source": 440,
            "target": 377
        },
        {
            "source": 441,
            "target": 442
        },
        {
            "source": 443,
            "target": 341
        },
        {
            "source": 443,
            "target": 333
        },
        {
            "source": 443,
            "target": 315
        },
        {
            "source": 443,
            "target": 423
        },
        {
            "source": 443,
            "target": 324
        },
        {
            "source": 444,
            "target": 304
        },
        {
            "source": 445,
            "target": 309
        },
        {
            "source": 445,
            "target": 333
        },
        {
            "source": 445,
            "target": 315
        },
        {
            "source": 446,
            "target": 443
        },
        {
            "source": 446,
            "target": 317
        },
        {
            "source": 446,
            "target": 319
        },
        {
            "source": 447,
            "target": 341
        },
        {
            "source": 438,
            "target": 394
        },
        {
            "source": 304,
            "target": 393
        },
        {
            "source": 304,
            "target": 325
        },
        {
            "source": 326,
            "target": 438
        },
        {
            "source": 448,
            "target": 309
        },
        {
            "source": 449,
            "target": 446
        },
        {
            "source": 309,
            "target": 305
        },
        {
            "source": 346,
            "target": 304
        },
        {
            "source": 346,
            "target": 343
        },
        {
            "source": 346,
            "target": 315
        },
        {
            "source": 450,
            "target": 436
        },
        {
            "source": 450,
            "target": 442
        },
        {
            "source": 437,
            "target": 321
        },
        {
            "source": 437,
            "target": 326
        },
        {
            "source": 437,
            "target": 323
        },
        {
            "source": 437,
            "target": 307
        },
        {
            "source": 451,
            "target": 307
        },


    ]
};

function leftTop1() {
    var leftTop = echarts.init(document.getElementById('leftTop1'));

    function createRandomItemStyle() {
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };
    }

    var option = {
        title: {
            text: '智能搜索民需热点',
            left: '5%',
            top: '5%',
            textStyle: textStyle1
        },
        tooltip: {
            show: true,
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: "right",
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        series: [{
            name: '热点话题',
            type: 'wordCloud',  //类型为字符云
            shape: 'smooth',  //平滑
            gridSize: 1, //网格尺寸
            size: ['100%', '100%'],
            //sizeRange : [ 50, 100 ],
            rotationRange: [46, 80], //旋转范围
            textRotation: [110, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            textStyle: {
                normal: {
                    fontFamily: 'sans-serif',
                    color: function () {
                        return colorList[Math.round(Math.random() * 9)]
                    }
                },
                emphasis: {
                    shadowBlur: 5,  //阴影距离
                    shadowColor: '#333'  //阴影颜色
                }
            },
            data: [],
        }]
    };
    leftTop.showLoading();
    leftTop.setOption(option);

    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedHotSpotsForSearch",
        //data : {},
        dataType: "json",
        success: function (data) {
            console.log(data)
            leftTop.hideLoading();
            var dataNew = [];
            for (var i = 0; i < data.length; i++) {
                data[i].itemStyle = createRandomItemStyle();
                dataNew.push(data[i])
            }
            console.log(dataNew)
            leftTop.setOption({ //加载数据图表
                series: [{
                    data: dataNew
                }]
            });
        },
        error: function (errorMsg) {
            console.log("字符-数据请求失败!");
            leftTop.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        leftTop.resize();
    });

}

function tcr1() {
    var tcr1 = echarts.init(document.getElementById('tcr1'));
    var option = {
        title: {
            text: '新增',
            //subtext: 'New',
            textStyle: textStyle1,
            left: '10%'
        },
        color: ['#8249F1', '#1D96FF', '#FD7622', '#25DFA6', '#02F0FD', '#B1FF35', '#EA20F7'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        tooltip: {
            trigger: 'item',
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: function (position) {
                //获取容器的宽度
                var chartsWidth = $("#tcr1").width();
                //判断悬停点落在容器的哪测
                if (position[0] < (chartsWidth / 2)) {
                    position[0] = position[0];
                } else {
                    position[0] = position[0] - 130;
                }
                return [position[0], position[1]];
            },

            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        calculable: true,
        series: [

            {
                name: '新增',
                type: 'pie',
                radius: ["20%", "50%"],
                center: ['55%', "60%"],
                labelLine: {
                    normal: {
                        length: 2,
                        length2: 10
                    }
                },
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                width: '40%',       // for funnel
                max: 40,            // for funnel
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true//标注线
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                width: '40%',       // for funnel
                max: 40,            // for funnel
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true//标注线
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                data: [
                    {
                        value: 100, name: '理论直讲',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#773CF8'
                            }, {
                                offset: 1,
                                color: '#AE2FE3'
                            }])
                        },
                        label: {
                            color: "#7A4BF0",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#7A4BF0",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        }
                    },
                    {
                        value: 25, name: '法律法规',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#345FFE'
                            }, {
                                offset: 1,
                                color: '#4FA4FF'
                            }])
                        },
                        label: {
                            color: "#1D96FF",
                            fontSize: 12,
                            rich: {
                                a: {
                                    color: "#1D96FF",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        }
                    },
                    {
                        value: 95, name: '文化服务',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#FF4D29'
                            }, {
                                offset: 1,
                                color: '#F9AD1B'
                            }])
                        },
                        label: {
                            color: "#FD7622",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#FD7622",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        },
                    },
                    {
                        value: 45, name: '健身体育',
                        itemStyle: {//扇形渐变
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#1DEAC1'
                            }, {
                                offset: 1,
                                color: '#1EB2C0'
                            }])
                        },
                        label: {
                            color: "#25DFA6",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#25DFA6",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        },
                    },
                    {
                        value: 65, name: '惠民服务',
                        itemStyle: {//扇形渐变
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#02D1FB'
                            }, {
                                offset: 1,
                                color: '#02F1FA'
                            }])
                        },
                        label: {
                            color: "#02F0FD",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#02F0FD",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        },
                    },
                    {
                        value: 23, name: '科学普及',
                        itemStyle: {//扇形渐变
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#1FC5C1'
                            }, {
                                offset: 1,
                                color: '#B1FF35'
                            }])
                        },
                        label: {
                            color: "#B1FF35",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#7A4BF0",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        },
                    },
                    {
                        value: 80, name: '教育服务',
                        itemStyle: {//扇形渐变
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#CC51E7'
                            }, {
                                offset: 1,
                                color: '#F33B4E'
                            }])
                        },
                        label: {
                            color: "#EA20F7",
                            fontSize: 12,
                            //formatter: '完成梳理部门\n{a|34}个',
                            rich: {
                                a: {
                                    color: "#EA20F7",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        },
                    },
                ]
            },

        ]

    };
    tcr1.setOption(option);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedTreatmentSchemeAdd",
        //data : {},
        dataType: "json",
        success: function (data) {
            //console.log(data)
            var arrAdd = [];
            $.each(data.data2, function (index, item) {
                arrAdd.push({
                    name: (item.name).substr(0, 3) + "\n" + (item.name).substr(3),
                    value: item.value,
                    label: {
                        color: labelColor[index]
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: leftTopFore[index]
                                },
                                    {
                                        offset: 1,
                                        color: leftTopFore1[index]
                                    }
                                ]
                            ),

                        },
                    }
                })
            })
            tcr1.setOption({ //加载数据图表
                series: [{
                    data: arrAdd
                }]
            });
        },
        error: function (errorMsg) {
            console.log("新增-数据请求失败!");
            tcr1.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        tcr1.resize();
    });
}

function centerBottom() {
    var c2 = echarts.init(document.getElementById('c2'));
    var option = {
        title: {
            text: '民需处理情况',
            textStyle: textStyle1,
            x: 'center'
        },

        tooltip: {
            trigger: 'axis',
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: "right",
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        calculable: true,           //是否启用拖拽重计算特性，默认关闭(即值为false)
        grid: {                    //图形外边框
            borderWidth: 0,         //框宽
            top: '30%',
            left: '10%',
            right: '5%',
            bottom: '12%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                //data:['理论直讲','法律法规','文化服务','健身体育','惠民服务','科学普及','教育服务'],
                data: [],
                splitLine: {show: false},//去除网格线
                splitArea: {show: false},//保留网格区域
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#085AC1',//左边线的颜色
                        width: '1'//坐标线的宽度
                    }
                },
                axisLabel: {interval: 0},//     字体全部显示斜体
                axisLabel: {
                    textStyle: {
                        color: '#0BB6DC',//坐标值得具体的颜色

                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {show: false},//去除网格线
                splitArea: {show: false},//保留网格区域
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#085AC1',
                        width: '1'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#0BB6DC'
                    }
                }
            }
        ],
        series: [
            {
                name: '数量',
                type: 'line',
                smooth: true,
                //itemStyle: {normal: {areaStyle: {type: 'default'}}},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#0C85AB'
                        }
                    }
                },
                data: [],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#05C4E1'},
                                {offset: 0.7, color: 'rgba(15,136,172,.6)'},
                                {offset: 1, color: 'rgba(15,136,172,.3)'}
                            ]
                        )
                    }
                },


            },

        ]
    };
    c2.setOption(option);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedTreatmentInformation",
        //data : {},
        dataType: "json",
        success: function (data) {
            //console.log(data)
            var sj = [];
            var xz = [];
            $.each(data.data2, function (i, item) {
                sj.push(item.value);
                xz.push((item.name))
            });
            c2.setOption({
                xAxis: [{data: xz}],
                series: [
                    {
                        data: sj
                    }]
            })
        },
        error: function (errorMsg) {
            console.log("新增-数据请求失败!");
            c2.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        c2.resize();
    });
}

function tcr2() {
    var tcr2 = echarts.init(document.getElementById('tcr2'));
    var option = {
        title: {
            text: '处理中',
            textStyle: textStyle1,
            left: '10%'
        },
        radar: [],
        tooltip: {
            trigger: 'item',
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: "right",
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        series: [
            {
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                data: []
            },
        ]
    }
    tcr2.setOption(option);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedTreatmentSchemeProcessing",
        //data : {},
        dataType: "json",
        success: function (data) {
            //console.log(data)
            var value1 = [];
            var text = [];
            for (var i = 0; i < data.data2.length; i++) {
                value1.push(data.data2[i].value);
                text.push({text: (data.data2[i].name).substr(0, 2) + "\n" + (data.data2[i].name).substr(2)});
            }
            tcr2.setOption({ //加载数据图表
                radar: [
                    {
                        indicator: text,
                        center: ['50%', '60%'],
                        radius: "50%",
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'circle',
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#72ACD1'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(5,17,59, 0.2)',
                                    'rgba(5,17,59, 0.4)', 'rgba(5,17,59, 0.6)',
                                    'rgba(5,17,59, 0.8)', 'rgba(5,17,59, 1)'],
                                //shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#07479F'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#05B0CF'
                            }
                        }
                    },],
                series: [{
                    data: [
                        {
                            value: value1,
                            name: '处理中',
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 1, color: 'rgba(86,207,37, .8)'},
                                            {offset: 0, color: 'rgba(4,175,193, .8)'}
                                        ]
                                    ),
                                }
                            }
                        }
                    ]
                }]
            });
        },
        error: function (errorMsg) {
            console.log("新增-数据请求失败!");
            tcr1.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        tcr2.resize();
    });

}

function tcr3() {
    var tcr3 = echarts.init(document.getElementById('tcr3'));
    var option = {
        title: {
            text: '完成',
            textStyle: textStyle1,
            left: '5%'
        },
        /*color:{'#B611D7','#1CE6CE','#FC8B20''#6150EE','#1BDFDB','#FB921E','##5F4FEE'},*/
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,           //是否启用拖拽重计算特性，默认关闭(即值为false)
        grid: {                    //图形外边框
            borderWidth: 0,         //框宽
            y: 40,                   //上边距
            y2: 30,                //下边距
            x: 40,
            x2: 10
        },
        tooltip: {
            trigger: 'item',
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: "right",
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                splitLine: {show: false},//去除网格线
                splitArea: {show: false},//保留网格区域
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#06469B',//左边线的颜色
                        width: '1'//坐标线的宽度
                    }
                },
                axisLabel: {interval: 0},//     字体全部显示斜体
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#0BB6DC',//坐标值得具体的颜色
                    }
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {show: false},//去除网格线
                splitArea: {show: false},//保留网格区域
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#06469B',
                        width: '1'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#0BB6DC'
                    }
                }
            }
        ],
        series: [{
            name: '完成情况',
            type: 'bar',
            barWidth: 16,
            silent: true,
            itemStyle: {
                normal: {
                    color: 'transparent',//柱子背景
                    barBorderRadius: [0, 5, 5, 0],
                }
            },
            barGap: '-100%',
            barCategoryGap: '50%',
            data: [53, 85, 60, 45, 53, 66, 48],
        }, {
            name: ' ',
            type: 'bar',
            barWidth: 16,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}',
                    color: "#BE1CD4"
                }
            },
            data: [],
        }]
    };

    tcr3.setOption(option, true);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedTreatmentSchemeFinish",
        //data : {},
        dataType: "json",
        success: function (data) {
            //console.log(data)
            var value3 = [];
            var xZhou = [];
            for (var i = 0; i < data.data2.length; i++) {
                value3.push(data.data2[i].value);
                xZhou.push(data.data2[i].name);
            }
            ;
            var Data3 = [];
            for (var i = 0; i < value3.length; i++) {
                Data3.push({
                    value: value3[i],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: alread[i]
                            }, {
                                offset: 1,
                                color: alread1[i]
                            }])
                        }
                    }
                })
            }
            ;
            tcr3.setOption({ //加载数据图表
                xAxis: [{
                    data: xZhou,
                }],
                series: [{
                    name: '完成',
                    type: 'bar',
                    barWidth: 16,
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',//柱子背景
                            barBorderRadius: [0, 5, 5, 0],
                        }
                    },
                    barGap: '-100%',
                    barCategoryGap: '50%',
                    //data:  [53, 85, 60, 45, 53 ,66 ,48],
                }, {
                    name: '完成 ',
                    type: 'bar',
                    barWidth: 16,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}',
                            color: "#BE1CD4"
                        }
                    },
                    data: Data3
                }]
            });
        },
        error: function (errorMsg) {
            console.log("新增-数据请求失败!");
            tcr3.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        tcr3.resize();
    });
}

function centerTopf() {
    var centerTop = echarts.init(document.getElementById('c1'));
    centerTop.hideLoading();
    var option = {
        title: {
            text: '民需种类',
            textStyle: textStyle1,
            left: '5%',
            top: '5%'
        },
        color: ['#FD5127', '#8F48F3', '#1EF7B1', '#FF00FF', '#FE217A'],
        legend: {
            x: 'left',
            y: 'top',
            width: '100%',
            //height:10,
            top: '10%',
            icon: 'circle',
            //padding: 10,    // [5, 10, 15, 20]
            itemGap: 20,
            data: [
                {
                    name: '政策理论服务',
                    icon: 'circle',
                    textStyle: {
                        color: '#FD5127'          // 图例文字颜色
                    }
                },
                {
                    name: '教育关爱服务',
                    icon: 'circle',
                    textStyle: {
                        color: '#8F48F3'          // 图例文字颜色
                    }
                },
                {
                    name: '平安法治服务',
                    icon: 'circle',
                    textStyle: {
                        color: '#1EF7B1'          // 图例文字颜色
                    }
                },
                {
                    name: '文化体育教育',
                    icon: 'circle',
                    textStyle: {
                        color: '#FF00FF'          // 图例文字颜色
                    }
                },
                {
                    name: '科技科普服务',
                    icon: 'circle',
                    textStyle: {
                        color: '#FE217A'          // 图例文字颜色
                    }
                },
                /*{
					               name:'健康卫生服务',
					               icon : 'circle',
					               textStyle: {
					                    color: '#B1FF35'          // 图例文字颜色
					               }
					           },
								{
						               name:'文明风尚服务',
						               icon : 'circle',
						               textStyle: {
						                    color: '#EA20F7'          // 图例文字颜色
						               }
						           },*/
            ]
        },

        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                // repulsion: 20,
                edgeLength: 20,
                repulsion: 10,
                gravity: 0.2
            },
            edges: webkitDep.links
        }]
    };

    centerTop.setOption(option);
    window.addEventListener("resize", function () {
        centerTop.resize();
    });
}

//centerTop.setOption(option);
//myChart2.hideLoading();

/*右上角*/
function rightTop() {
    var righttop = echarts.init(document.getElementById('r1'));
    var option = {
        title: {
            text: '民需渠道',
            textStyle: textStyle1,
            left: '5%',
            top: '5%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            borderColor: "#00ABD7",
            borderWidth: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        color: ['#19D1CF', '#193BC6', '#E24826'],
        series: [
            {
                name: '来源',
                type: 'pie',
                radius: ['40%', '70%'],

                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: []
            }
        ]
    };
    var timeTicket;
    righttop.setOption(option, true);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedChannel",
        dataType: "json",
        success: function (data) {
            console.log(data)
            var arr = []
            $.each(data, function (index, item) {
                arr.push({
                    name: item.name + ":\n" + item.value,
                    value: item.value,
                    label: {
                        color: leftTopFore[index * 2],
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: leftTopFore[index]
                                },
                                    {
                                        offset: 1,
                                        color: leftTopFore1[index]
                                    }
                                ]
                            ),

                        },
                    }
                })
            })
            righttop.setOption({
                series: [{data: arr}]
            })
        },
        error: function (errorMsg) {
            console.log("渠道-数据请求失败!");
            righttop.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        righttop.resize();
    });
}

function rightBottom() {
    var rightbottom = echarts.init(document.getElementById('r2'));
    var option = {
        title: {
            text: '民需类型排名',
            //subtext: 'Small type ranking',
            textStyle: textStyle1,
            left: '2%',
            top: '2%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        tooltip: {
            trigger: 'item',
            borderColor: "#00ABD7",
            borderWidth: 1,
            position: "right",
            backgroundColor: 'rgba(0,0,0,0.8)',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        legend: {
            x: '10%',
            y: 'top',
            width: '80%',
            height: 10,
            top: '10%',
            icon: 'circle',
            padding: 10,    // [5, 10, 15, 20]
            itemGap: 20,
            data: []

        },
        calculable: true,
        series: [
            {
                name: '类型排名',
                type: 'pie',
                radius: ["20%", "55%"],
                center: ['50%', "60%"],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                width: '40%',       // for funnel
                max: 40,            // for funnel
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true//标注线
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true,
                            position: 'outer'
                        }
                    }
                },
                data: []
            },
        ]
    };

    rightbottom.setOption(option);
    $.ajax({
        type: "get",
        async: true,
        url: "/culture_practice_core/htmlInterface/V1/peopleNeedranking",
        //data : {},
        dataType: "json",
        success: function (data) {
            var arr = []
            var arr2 = [];
            $.each(data.data2, function (index, item) {
                arr.push({
                    name: item.name + ":\n" + item.value,
                    value: item.value,
                    label: {
                        color: labelColor[index]
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: leftTopFore[index]
                                },
                                    {
                                        offset: 1,
                                        color: leftTopFore1[index]
                                    }
                                ]
                            ),

                        },
                    }
                })
            })
            $.each(data.data1, function (index, item) {
                arr2.push({
                    name: item,
                    icon: 'circle',
                    textStyle: {
                        color: labelColor[index]        // 图例文字颜色
                    }
                })
            })
            rightbottom.setOption({
                legend: {
                    data: arr2
                },
                series: [
                    {data: arr}
                ]
            })
        },
        error: function (errorMsg) {
            console.log("排名-数据请求失败!");
            rightbottom.hideLoading();
        }
    })
    window.addEventListener("resize", function () {
        rightbottom.resize();
    });
}
		    
                    


const fetch = require("node-fetch");
const request = async (param) =>{

    const responsee = await fetch("https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol="+param, {
  "headers": {
    "Accept": "*/*",
    "Bnc-Uuid": "700379f5-70ba-4094-b4b2-c926b229c151",
    "Cache-Control": "no-cache",
    "Clienttype": "web",
    "Content-Type": "application/json",
    "Csrftoken": "d41d8cd98f00b204e9800998ecf8427e",
    "Device-Info": "eyJzY3JlZW5fcmVzb2x1dGlvbiI6Ijc2OCwxMzY2IiwiYXZhaWxhYmxlX3NjcmVlbl9yZXNvbHV0aW9uIjoiNzI4LDEzNjYiLCJzeXN0ZW1fdmVyc2lvbiI6IldpbmRvd3MgMTAiLCJicmFuZF9tb2RlbCI6InVua25vd24iLCJzeXN0ZW1fbGFuZyI6InRyLVRSIiwidGltZXpvbmUiOiJHTVQrMyIsInRpbWV6b25lT2Zmc2V0IjotMTgwLCJ1c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NDsgcnY6MTA3LjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTA3LjAiLCJsaXN0X3BsdWdpbiI6IlBERiBWaWV3ZXIsQ2hyb21lIFBERiBWaWV3ZXIsQ2hyb21pdW0gUERGIFZpZXdlcixNaWNyb3NvZnQgRWRnZSBQREYgVmlld2VyLFdlYktpdCBidWlsdC1pbiBQREYiLCJjYW52YXNfY29kZSI6ImQ0Y2ZjNTE5Iiwid2ViZ2xfdmVuZG9yIjoiR29vZ2xlIEluYy4gKFVua25vd24pIiwid2ViZ2xfcmVuZGVyZXIiOiJBTkdMRSAoVW5rbm93biwgTWljcm9zb2Z0IEJhc2ljIFJlbmRlciBEcml2ZXIgRGlyZWN0M0QxMSB2c181XzAgcHNfNV8wKSIsImF1ZGlvIjoiMzUuNzM4MzI5NTkzMDkyMiIsInBsYXRmb3JtIjoiV2luMzIiLCJ3ZWJfdGltZXpvbmUiOiJFdXJvcGUvSXN0YW5idWwiLCJkZXZpY2VfbmFtZSI6IkZpcmVmb3ggVjEwNy4wIChXaW5kb3dzKSIsImZpbmdlcnByaW50IjoiNzM2Y2Y1MjE1YjZkYjc1MDQ5ZWRjYzhjOGMzMDdjOWYiLCJkZXZpY2VfaWQiOiIiLCJyZWxhdGVkX2RldmljZV9pZHMiOiIifQ==",
    "Fvideo-Id": "339f5d0df61aaaae8ce9818f73f6fa96318b76c1",
    "Lang": "tr",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Te": "trailers",
    "X-Trace-Id": "9ff9faf0-e3e6-46dc-9561-85c317590bd6",
    "X-Ui-Request-Trace": "9ff9faf0-e3e6-46dc-9561-85c317590bd6"
  }
});

return responsee;
}
module.exports = request;
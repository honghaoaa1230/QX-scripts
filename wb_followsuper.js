const url = $request.url;
let body = $response.body;

if (url.indexOf("followsuper") != -1){
    let obj = JSON.parse(body);
    obj["cards"][0]["card_group"][1].title_sub = "金多娟";
    obj["cards"][0]["card_group"][1].pic = "https://wx4.sinaimg.cn/thumbnail/0088wtTqly8gvhtdlu2g2j60u00u0n0402.jpg";
    obj["cards"][0]["card_group"][2].title_sub = "江崎光";
    obj["cards"][0]["card_group"][2].pic = "https://wx4.sinaimg.cn/thumb180/005LFVYnly8gud16en9s5j60u00u0wiw02.jpg";
    body = JSON.stringify(obj);
    console.log('followsuper detected!');
    // $notify("followsuper!");
}
// console.log('followsuper detected outside!');
// $notify("followsuperout!");

$done({ body });
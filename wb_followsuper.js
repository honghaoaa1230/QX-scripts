const url = $request.url;
let body = $response.body;

if (url.indexOf("followsuper") != -1){
    let obj = JSON.parse(body);
    obj[cards][0][card_group][1].title_sub = '金多娟';
    body = JSON.stringify(obj);
    console.log('followsuper detected!');
    $notify("followsuper!");
}
console.log('followsuper detected outside!');
$notify("followsuperout!");

$done({ body });
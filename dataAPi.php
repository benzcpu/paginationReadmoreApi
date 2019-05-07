<?php
$data=array();
$data['max']=1000;
$data['item']=5;

//if(isset($_GET['showNextPageItem'])){
//    $data['item']=$_GET['showNextPageItem'];
//}

 $idx=$_GET['index'];
 $nextItem=$data['item']+$idx;
 $data['nextItem']=$nextItem;
 $j=0;
for ($i=$data['max'];$i>=1;$i--){
    if($idx<=$i && $i<$nextItem){
        $data['data'][$j]['id']=$i;
        $data['data'][$j]['name']=generateRandomString(5);
        $j++;
    }
}

echo json_encode($data);

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
?>

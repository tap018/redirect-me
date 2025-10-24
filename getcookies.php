<?php
$url = $_GET["c"];   //getting url from parameter c
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_COOKIEJAR, 'log.txt');
$output = curl_exec($ch);
curl_close($ch);
?>

<?php
header('Content-type: application/xml');
$handle = fopen($_REQUEST['url'], "r");
// $handle = fopen('https://rss.art19.com/not-another-d-and-d-podcast/?format=xml', "r")
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>
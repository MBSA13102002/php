<?php 
$out = shell_exec('netsh wlan show profile name="Coder"');

echo $out
?>

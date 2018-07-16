const fs = require('fs');

window.globalValue = 'global'; // 由于 env 设置了 node，没有设置 browser，所以全局变量 window 会提示未定义。

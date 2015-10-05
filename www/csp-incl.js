var cspMetaContent = 'default-src \'self\' data: gap: https://ssl.gstatic.com;' +
                     ' style-src \'self\' \'unsafe-inline\'';

cspMetaContent = '<meta http-equiv="Content-Security-Policy" content="' + cspMetaContent + '"/>';
document.write(cspMetaContent);

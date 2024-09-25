## Component

Root: is file main (index)
Other: is template component

## Design

config in core

## Input info

design: { addon: {} } // addon props for FormMulti

{
custom: { hue: '', className: 'border-base' },
design: { horizontal: false, rounded: true },
attrs: {
pic: pic(),
linkTitle: linkTitle(['xl', 'gbpColor', 'none', 'flipInTopLeft']),
description: description(['lg']),
btnStarted: btnStarted(['sm', 'none', 'blue']),
btnMore: btnMore(['sm', 'none', 'none']),
author: author(),
keyWords: keyWords(),
},
};

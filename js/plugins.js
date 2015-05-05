// Avoid `console` errors in browsers that lack a console.


// polyfill Array.map
[].map || (
  Array.prototype.map = function(a,t) {
    for(var c=this, b=c.length, d=[], e=0; e<b; )
      e in c && (d[e]=a.call(t, c[e], e++, c));
    d.length=b;
    return d;
  }
);

// polyfill Array.filter
[].filter || (
  Array.prototype.filter = function(a,b,c,d,e) {
    c=this;
    d=[];
    for(e in c)~~e+''==e&&e>=0&&a.call(b,c[e],+e,c)&&d.push(c[e]);
    return d;
  }
);

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

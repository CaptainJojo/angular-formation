console.log('yo');

function Scope() {
    this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn
    };

    this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
    var dirty;
    var ttl = 10;

    do {
        dirty = false;
        this.$$watchers.forEach(function (watcher) {
            var newValue = watcher.watchFn(this);

            if (watcher.last !== newValue) {
                dirty = true;
                watcher.listenerFn(newValue, watcher.last, this);
                watcher.last = newValue;
            }
        }.bind(this));

        if (dirty && !ttl--) {
            throw new Error("Loop problem infinity");
        }
    } while (dirty);
};

Scope.prototype.$apply = function (exprFn) {
    try {
        exprFn();
    } finally {
        this.$digest();
    }
};

var $$directives = {};

var directive = function (name, directiveFn) {
    $$directives[name] = directiveFn;

    return $$directives[name];
};

var $compile = function (element, scope) {
    Array.prototype.forEach.call(element.children, function (child) {
        $compile(child, scope);
    });

    Array.prototype.forEach.call(element.attributes, function (attr) {
        if ($$directives[attr.name]) {
            $$directives[attr.name](scope, element, element.attributes);
        }
    });
};

directive('ng-bind', function (scope, element, attributes) {
    scope.$watch(function (scope) {
        return eval('scope.' + attributes['ng-bind'].value);
    }, function (newValue, oldValue)
    {
        element.innerHTML = newValue;
    });
});

directive('ng-model', function (scope, element, attributes) {
    scope.$watch(function (scope) {
        return eval('scope.' + attributes['ng-model'].value);
    }, function (newValue, oldValue) {
        element.value = newValue;
    });

    element.addEventListener('keyup', function () {
        scope.$apply(function() {
            eval('scope.' + attributes['ng-model'].value + ' = \"' + element.value + '\"');
        });
    })
});

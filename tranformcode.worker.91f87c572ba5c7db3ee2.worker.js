!(function (e) {
    var t = {};
    function i(u) {
        if (t[u]) return t[u].exports;
        var s = (t[u] = { i: u, l: !1, exports: {} });
        return e[u].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = e),
        (i.c = t),
        (i.d = function (e, t, u) {
            i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: u });
        }),
        (i.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var u = Object.create(null);
            if (
                (i.r(u),
                Object.defineProperty(u, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var s in e)
                    i.d(
                        u,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return u;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p =
            "https://cdn.jsdelivr.net/gh/masx200/my-vue-router-project@2.2.12/"),
        i((i.s = 0));
})([
    function (e, t, i) {
        "use strict";
        i.r(t);
        var u,
            s,
            r,
            n,
            a,
            o,
            h = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ComprehensionBlock: "ComprehensionBlock",
                ComprehensionExpression: "ComprehensionExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DebuggerStatement: "DebuggerStatement",
                DirectiveStatement: "DirectiveStatement",
                DoWhileStatement: "DoWhileStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForInStatement: "ForInStatement",
                ForOfStatement: "ForOfStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                GeneratorExpression: "GeneratorExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                ModuleSpecifier: "ModuleSpecifier",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchStatement: "SwitchStatement",
                SwitchCase: "SwitchCase",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression",
            };
        function p(e) {
            return e <= 65535
                ? String.fromCharCode(e)
                : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) +
                      String.fromCharCode(((e - 65536) % 1024) + 56320);
        }
        for (
            s = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            },
                u = {
                    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
                },
                r = [
                    5760,
                    8192,
                    8193,
                    8194,
                    8195,
                    8196,
                    8197,
                    8198,
                    8199,
                    8200,
                    8201,
                    8202,
                    8239,
                    8287,
                    12288,
                    65279,
                ],
                n = new Array(128),
                o = 0;
            o < 128;
            ++o
        )
            n[o] =
                (o >= 97 && o <= 122) ||
                (o >= 65 && o <= 90) ||
                36 === o ||
                95 === o;
        for (a = new Array(128), o = 0; o < 128; ++o)
            a[o] =
                (o >= 97 && o <= 122) ||
                (o >= 65 && o <= 90) ||
                (o >= 48 && o <= 57) ||
                36 === o ||
                95 === o;
        var c,
            l,
            D,
            d,
            A,
            f,
            C,
            m,
            E,
            F,
            g,
            x,
            B,
            y,
            v,
            S,
            b,
            _,
            k,
            w,
            I = {
                isDecimalDigit: function (e) {
                    return 48 <= e && e <= 57;
                },
                isHexDigit: function (e) {
                    return (
                        (48 <= e && e <= 57) ||
                        (97 <= e && e <= 102) ||
                        (65 <= e && e <= 70)
                    );
                },
                isOctalDigit: function (e) {
                    return e >= 48 && e <= 55;
                },
                isWhiteSpace: function (e) {
                    return (
                        32 === e ||
                        9 === e ||
                        11 === e ||
                        12 === e ||
                        160 === e ||
                        (e >= 5760 && r.indexOf(e) >= 0)
                    );
                },
                isLineTerminator: function (e) {
                    return 10 === e || 13 === e || 8232 === e || 8233 === e;
                },
                isIdentifierStartES5: function (e) {
                    return e < 128
                        ? n[e]
                        : s.NonAsciiIdentifierStart.test(p(e));
                },
                isIdentifierPartES5: function (e) {
                    return e < 128 ? a[e] : s.NonAsciiIdentifierPart.test(p(e));
                },
                isIdentifierStartES6: function (e) {
                    return e < 128
                        ? n[e]
                        : u.NonAsciiIdentifierStart.test(p(e));
                },
                isIdentifierPartES6: function (e) {
                    return e < 128 ? a[e] : u.NonAsciiIdentifierPart.test(p(e));
                },
            },
            P = !1;
        function T(e) {
            return J.Statement.hasOwnProperty(e.type);
        }
        l = {
            "||": (c = {
                Sequence: 0,
                Yield: 1,
                Assignment: 1,
                Conditional: 2,
                ArrowFunction: 2,
                LogicalOR: 3,
                LogicalAND: 4,
                BitwiseOR: 5,
                BitwiseXOR: 6,
                BitwiseAND: 7,
                Equality: 8,
                Relational: 9,
                BitwiseSHIFT: 10,
                Additive: 11,
                Multiplicative: 12,
                Await: 13,
                Unary: 13,
                Postfix: 14,
                Call: 15,
                New: 16,
                TaggedTemplate: 17,
                Member: 18,
                Primary: 19,
            }).LogicalOR,
            "&&": c.LogicalAND,
            "|": c.BitwiseOR,
            "^": c.BitwiseXOR,
            "&": c.BitwiseAND,
            "==": c.Equality,
            "!=": c.Equality,
            "===": c.Equality,
            "!==": c.Equality,
            is: c.Equality,
            isnt: c.Equality,
            "<": c.Relational,
            ">": c.Relational,
            "<=": c.Relational,
            ">=": c.Relational,
            in: c.Relational,
            instanceof: c.Relational,
            "<<": c.BitwiseSHIFT,
            ">>": c.BitwiseSHIFT,
            ">>>": c.BitwiseSHIFT,
            "+": c.Additive,
            "-": c.Additive,
            "*": c.Multiplicative,
            "%": c.Multiplicative,
            "/": c.Multiplicative,
        };
        var L = 7,
            N = 1;
        function V(e, t) {
            var i = "";
            for (t |= 0; t > 0; t >>>= 1, e += e) 1 & t && (i += e);
            return i;
        }
        function R(e) {
            var t = e.length;
            return t && I.isLineTerminator(e.charCodeAt(t - 1));
        }
        function M(e, t) {
            var i;
            for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e;
        }
        function O(e, t) {
            var i, u;
            function s(e) {
                return (
                    "object" === typeof e &&
                    e instanceof Object &&
                    !(e instanceof RegExp)
                );
            }
            for (i in t)
                t.hasOwnProperty(i) &&
                    (s((u = t[i]))
                        ? s(e[i])
                            ? O(e[i], u)
                            : (e[i] = O({}, u))
                        : (e[i] = u));
            return e;
        }
        function q(e, t) {
            return 8232 === (-2 & e)
                ? (t ? "u" : "\\u") + (8232 === e ? "2028" : "2029")
                : 10 === e || 13 === e
                ? (t ? "" : "\\") + (10 === e ? "n" : "r")
                : String.fromCharCode(e);
        }
        function U(e, t) {
            var i;
            return 8 === e
                ? "\\b"
                : 12 === e
                ? "\\f"
                : 9 === e
                ? "\\t"
                : ((i = e.toString(16).toUpperCase()),
                  f || e > 255
                      ? "\\u" + "0000".slice(i.length) + i
                      : 0 !== e || I.isDecimalDigit(t)
                      ? 11 === e
                          ? "\\x0B"
                          : "\\x" + "00".slice(i.length) + i
                      : "\\0");
        }
        function W(e) {
            if (92 === e) return "\\\\";
            if (10 === e) return "\\n";
            if (13 === e) return "\\r";
            if (8232 === e) return "\\u2028";
            if (8233 === e) return "\\u2029";
            throw new Error("Incorrectly classified character");
        }
        function j(e, t) {
            if (!P)
                return Array.isArray(e)
                    ? (function e(t) {
                          var i,
                              u,
                              s,
                              r = "";
                          for (i = 0, u = t.length; i < u; ++i)
                              (s = t[i]), (r += Array.isArray(s) ? e(s) : s);
                          return r;
                      })(e)
                    : e;
            if (null == t) {
                if (e instanceof D) return e;
                t = {};
            }
            return null == t.loc
                ? new D(null, null, P, e, t.name || null)
                : new D(
                      t.loc.start.line,
                      t.loc.start.column,
                      !0 === P ? t.loc.source || null : P,
                      e,
                      t.name || null
                  );
        }
        function H() {
            return x || " ";
        }
        function G(e, t) {
            var i, u, s, r;
            return 0 === (i = j(e).toString()).length
                ? [t]
                : 0 === (u = j(t).toString()).length
                ? [e]
                : ((s = i.charCodeAt(i.length - 1)),
                  (r = u.charCodeAt(0)),
                  ((43 === s || 45 === s) && s === r) ||
                  (I.isIdentifierPartES5(s) && I.isIdentifierPartES5(r)) ||
                  (47 === s && 105 === r)
                      ? [e, H(), t]
                      : I.isWhiteSpace(s) ||
                        I.isLineTerminator(s) ||
                        I.isWhiteSpace(r) ||
                        I.isLineTerminator(r)
                      ? [e, t]
                      : [e, x, t]);
        }
        function K(e) {
            return [d, e];
        }
        function z(e) {
            var t;
            (t = d), e((d += A)), (d = t);
        }
        function Q(e, t) {
            if ("Line" === e.type) {
                if (R(e.value)) return "//" + e.value;
                var i = "//" + e.value;
                return w || (i += "\n"), i;
            }
            return b.format.indent.adjustMultilineComment &&
                /[\n\r]/.test(e.value)
                ? (function (e, t) {
                      var i, u, s, r, n, a, o, h;
                      for (
                          i = e.split(/\r\n|[\r\n]/),
                              a = Number.MAX_VALUE,
                              u = 1,
                              s = i.length;
                          u < s;
                          ++u
                      ) {
                          for (
                              r = i[u], n = 0;
                              n < r.length && I.isWhiteSpace(r.charCodeAt(n));

                          )
                              ++n;
                          a > n && (a = n);
                      }
                      for (
                          "undefined" !== typeof t
                              ? ((o = d),
                                "*" === i[1][a] && (t += " "),
                                (d = t))
                              : (1 & a && --a, (o = d)),
                              u = 1,
                              s = i.length;
                          u < s;
                          ++u
                      )
                          (h = j(K(i[u].slice(a)))),
                              (i[u] = P ? h.join("") : h);
                      return (d = o), i.join("\n");
                  })("/*" + e.value + "*/", t)
                : "/*" + e.value + "*/";
        }
        function X(e, t) {
            var i, u, s, r, n, a, o, p, c, l, D, f;
            if (e.leadingComments && e.leadingComments.length > 0) {
                if (((r = t), w)) {
                    for (
                        t = [],
                            p = (s = e.leadingComments[0]).extendedRange,
                            c = s.range,
                            (f = (
                                (D = k.substring(p[0], c[0])).match(/\n/g) || []
                            ).length) > 0
                                ? (t.push(V("\n", f)), t.push(K(Q(s))))
                                : (t.push(D), t.push(Q(s))),
                            l = c,
                            i = 1,
                            u = e.leadingComments.length;
                        i < u;
                        i++
                    )
                        (c = (s = e.leadingComments[i]).range),
                            (f = (k.substring(l[1], c[0]).match(/\n/g) || [])
                                .length),
                            t.push(V("\n", f)),
                            t.push(K(Q(s))),
                            (l = c);
                    (f = (k.substring(c[1], p[1]).match(/\n/g) || []).length),
                        t.push(V("\n", f));
                } else
                    for (
                        s = e.leadingComments[0],
                            t = [],
                            v &&
                                e.type === h.Program &&
                                0 === e.body.length &&
                                t.push("\n"),
                            t.push(Q(s)),
                            R(j(t).toString()) || t.push("\n"),
                            i = 1,
                            u = e.leadingComments.length;
                        i < u;
                        ++i
                    )
                        R(
                            j((o = [Q((s = e.leadingComments[i]))])).toString()
                        ) || o.push("\n"),
                            t.push(K(o));
                t.push(K(r));
            }
            if (e.trailingComments)
                if (w)
                    (p = (s = e.trailingComments[0]).extendedRange),
                        (c = s.range),
                        (f = ((D = k.substring(p[0], c[0])).match(/\n/g) || [])
                            .length) > 0
                            ? (t.push(V("\n", f)), t.push(K(Q(s))))
                            : (t.push(D), t.push(Q(s)));
                else
                    for (
                        n = !R(j(t).toString()),
                            a = V(
                                " ",
                                (function (e) {
                                    var t;
                                    for (
                                        t = e.length - 1;
                                        t >= 0 &&
                                        !I.isLineTerminator(e.charCodeAt(t));
                                        --t
                                    );
                                    return e.length - 1 - t;
                                })(j([d, t, A]).toString())
                            ),
                            i = 0,
                            u = e.trailingComments.length;
                        i < u;
                        ++i
                    )
                        (s = e.trailingComments[i]),
                            n
                                ? (t = 0 === i ? [t, A] : [t, a]).push(Q(s, a))
                                : (t = [t, K(Q(s))]),
                            i === u - 1 ||
                                R(j(t).toString()) ||
                                (t = [t, "\n"]);
            return t;
        }
        function Y(e, t, i) {
            var u,
                s = 0;
            for (u = e; u < t; u++) "\n" === k[u] && s++;
            for (u = 1; u < s; u++) i.push(g);
        }
        function Z(e, t, i) {
            return t < i ? ["(", e, ")"] : e;
        }
        function $(e) {
            var t, i, u;
            for (t = 1, i = (u = e.split(/\r\n|\n/)).length; t < i; t++)
                u[t] = g + d + u[t];
            return u;
        }
        function J() {}
        function ee(e) {
            return j(e.name, e);
        }
        function te(e, t) {
            return e.async ? "async" + (t ? H() : x) : "";
        }
        function ie(e) {
            return e.generator && !b.moz.starlessGenerator ? "*" + x : "";
        }
        function ue(e) {
            var t = e.value,
                i = "";
            return (
                t.async && (i += te(t, !e.computed)),
                t.generator && (i += ie(t) ? "*" : ""),
                i
            );
        }
        function se(e) {
            var t;
            if (((t = new J()), T(e))) return t.generateStatement(e, N);
            if (
                (function (e) {
                    return J.Expression.hasOwnProperty(e.type);
                })(e)
            )
                return t.generateExpression(e, c.Sequence, L);
            throw new Error("Unknown node type: " + e.type);
        }
        (J.prototype.maybeBlock = function (e, t) {
            var i,
                u,
                s = this;
            return (
                (u = !b.comment || !e.leadingComments),
                e.type === h.BlockStatement && u
                    ? [x, this.generateStatement(e, t)]
                    : e.type === h.EmptyStatement && u
                    ? ";"
                    : (z(function () {
                          i = [g, K(s.generateStatement(e, t))];
                      }),
                      i)
            );
        }),
            (J.prototype.maybeBlockSuffix = function (e, t) {
                var i = R(j(t).toString());
                return e.type !== h.BlockStatement ||
                    (b.comment && e.leadingComments) ||
                    i
                    ? i
                        ? [t, d]
                        : [t, g, d]
                    : [t, x];
            }),
            (J.prototype.generatePattern = function (e, t, i) {
                return e.type === h.Identifier
                    ? ee(e)
                    : this.generateExpression(e, t, i);
            }),
            (J.prototype.generateFunctionParams = function (e) {
                var t, i, u, s;
                if (
                    ((s = !1),
                    e.type !== h.ArrowFunctionExpression ||
                        e.rest ||
                        (e.defaults && 0 !== e.defaults.length) ||
                        1 !== e.params.length ||
                        e.params[0].type !== h.Identifier)
                ) {
                    for (
                        (u =
                            e.type === h.ArrowFunctionExpression
                                ? [te(e, !1)]
                                : []).push("("),
                            e.defaults && (s = !0),
                            t = 0,
                            i = e.params.length;
                        t < i;
                        ++t
                    )
                        s && e.defaults[t]
                            ? u.push(
                                  this.generateAssignment(
                                      e.params[t],
                                      e.defaults[t],
                                      "=",
                                      c.Assignment,
                                      L
                                  )
                              )
                            : u.push(
                                  this.generatePattern(
                                      e.params[t],
                                      c.Assignment,
                                      L
                                  )
                              ),
                            t + 1 < i && u.push("," + x);
                    e.rest &&
                        (e.params.length && u.push("," + x),
                        u.push("..."),
                        u.push(ee(e.rest))),
                        u.push(")");
                } else u = [te(e, !0), ee(e.params[0])];
                return u;
            }),
            (J.prototype.generateFunctionBody = function (e) {
                var t, i;
                return (
                    (t = this.generateFunctionParams(e)),
                    e.type === h.ArrowFunctionExpression &&
                        (t.push(x), t.push("=>")),
                    e.expression
                        ? (t.push(x),
                          "{" ===
                              (i = this.generateExpression(
                                  e.body,
                                  c.Assignment,
                                  L
                              ))
                                  .toString()
                                  .charAt(0) && (i = ["(", i, ")"]),
                          t.push(i))
                        : t.push(this.maybeBlock(e.body, 9)),
                    t
                );
            }),
            (J.prototype.generateIterationForStatement = function (e, t, i) {
                var u = ["for" + x + (t.await ? "await" + x : "") + "("],
                    s = this;
                return (
                    z(function () {
                        t.left.type === h.VariableDeclaration
                            ? z(function () {
                                  u.push(t.left.kind + H()),
                                      u.push(
                                          s.generateStatement(
                                              t.left.declarations[0],
                                              0
                                          )
                                      );
                              })
                            : u.push(s.generateExpression(t.left, c.Call, L)),
                            (u = G(u, e)),
                            (u = [
                                G(
                                    u,
                                    s.generateExpression(
                                        t.right,
                                        c.Assignment,
                                        L
                                    )
                                ),
                                ")",
                            ]);
                    }),
                    u.push(this.maybeBlock(t.body, i)),
                    u
                );
            }),
            (J.prototype.generatePropertyKey = function (e, t) {
                var i = [];
                return (
                    t && i.push("["),
                    i.push(this.generateExpression(e, c.Sequence, L)),
                    t && i.push("]"),
                    i
                );
            }),
            (J.prototype.generateAssignment = function (e, t, i, u, s) {
                return (
                    c.Assignment < u && (s |= 1),
                    Z(
                        [
                            this.generateExpression(e, c.Call, s),
                            x + i + x,
                            this.generateExpression(t, c.Assignment, s),
                        ],
                        c.Assignment,
                        u
                    )
                );
            }),
            (J.prototype.semicolon = function (e) {
                return !y && 32 & e ? "" : ";";
            }),
            (J.Statement = {
                BlockStatement: function (e, t) {
                    var i,
                        u,
                        s = ["{", g],
                        r = this;
                    return (
                        z(function () {
                            var n, a, o, h;
                            for (
                                0 === e.body.length &&
                                    w &&
                                    (i = e.range)[1] - i[0] > 2 &&
                                    ("\n" ===
                                        (u = k.substring(
                                            i[0] + 1,
                                            i[1] - 1
                                        ))[0] && (s = ["{"]),
                                    s.push(u)),
                                    h = N,
                                    8 & t && (h |= 16),
                                    n = 0,
                                    a = e.body.length;
                                n < a;
                                ++n
                            )
                                w &&
                                    (0 === n &&
                                        (e.body[0].leadingComments &&
                                            ((i =
                                                e.body[0].leadingComments[0]
                                                    .extendedRange),
                                            "\n" ===
                                                (u = k.substring(
                                                    i[0],
                                                    i[1]
                                                ))[0] && (s = ["{"])),
                                        e.body[0].leadingComments ||
                                            Y(
                                                e.range[0],
                                                e.body[0].range[0],
                                                s
                                            )),
                                    n > 0 &&
                                        (e.body[n - 1].trailingComments ||
                                            e.body[n].leadingComments ||
                                            Y(
                                                e.body[n - 1].range[1],
                                                e.body[n].range[0],
                                                s
                                            ))),
                                    n === a - 1 && (h |= 32),
                                    (o =
                                        e.body[n].leadingComments && w
                                            ? r.generateStatement(e.body[n], h)
                                            : K(
                                                  r.generateStatement(
                                                      e.body[n],
                                                      h
                                                  )
                                              )),
                                    s.push(o),
                                    R(j(o).toString()) ||
                                        (w &&
                                            n < a - 1 &&
                                            e.body[n + 1].leadingComments) ||
                                        s.push(g),
                                    w &&
                                        n === a - 1 &&
                                        (e.body[n].trailingComments ||
                                            Y(
                                                e.body[n].range[1],
                                                e.range[1],
                                                s
                                            ));
                        }),
                        s.push(K("}")),
                        s
                    );
                },
                BreakStatement: function (e, t) {
                    return e.label
                        ? "break " + e.label.name + this.semicolon(t)
                        : "break" + this.semicolon(t);
                },
                ContinueStatement: function (e, t) {
                    return e.label
                        ? "continue " + e.label.name + this.semicolon(t)
                        : "continue" + this.semicolon(t);
                },
                ClassBody: function (e) {
                    var t = ["{", g],
                        i = this;
                    return (
                        z(function (u) {
                            var s, r;
                            for (s = 0, r = e.body.length; s < r; ++s)
                                t.push(u),
                                    t.push(
                                        i.generateExpression(
                                            e.body[s],
                                            c.Sequence,
                                            L
                                        )
                                    ),
                                    s + 1 < r && t.push(g);
                        }),
                        R(j(t).toString()) || t.push(g),
                        t.push(d),
                        t.push("}"),
                        t
                    );
                },
                ClassDeclaration: function (e) {
                    var t, i;
                    return (
                        (t = ["class"]),
                        e.id &&
                            (t = G(
                                t,
                                this.generateExpression(e.id, c.Sequence, L)
                            )),
                        e.superClass &&
                            ((i = G(
                                "extends",
                                this.generateExpression(
                                    e.superClass,
                                    c.Assignment,
                                    L
                                )
                            )),
                            (t = G(t, i))),
                        t.push(x),
                        t.push(this.generateStatement(e.body, 33)),
                        t
                    );
                },
                DirectiveStatement: function (e, t) {
                    return b.raw && e.raw
                        ? e.raw + this.semicolon(t)
                        : (function (e) {
                              var t, i, u, s;
                              for (
                                  s = "double" === E ? '"' : "'",
                                      t = 0,
                                      i = e.length;
                                  t < i;
                                  ++t
                              ) {
                                  if (39 === (u = e.charCodeAt(t))) {
                                      s = '"';
                                      break;
                                  }
                                  if (34 === u) {
                                      s = "'";
                                      break;
                                  }
                                  92 === u && ++t;
                              }
                              return s + e + s;
                          })(e.directive) + this.semicolon(t);
                },
                DoWhileStatement: function (e, t) {
                    var i = G("do", this.maybeBlock(e.body, N));
                    return G((i = this.maybeBlockSuffix(e.body, i)), [
                        "while" + x + "(",
                        this.generateExpression(e.test, c.Sequence, L),
                        ")" + this.semicolon(t),
                    ]);
                },
                CatchClause: function (e) {
                    var t,
                        i = this;
                    return (
                        z(function () {
                            var u;
                            (t = [
                                "catch" + x + "(",
                                i.generateExpression(e.param, c.Sequence, L),
                                ")",
                            ]),
                                e.guard &&
                                    ((u = i.generateExpression(
                                        e.guard,
                                        c.Sequence,
                                        L
                                    )),
                                    t.splice(2, 0, " if ", u));
                        }),
                        t.push(this.maybeBlock(e.body, N)),
                        t
                    );
                },
                DebuggerStatement: function (e, t) {
                    return "debugger" + this.semicolon(t);
                },
                EmptyStatement: function () {
                    return ";";
                },
                ExportDefaultDeclaration: function (e, t) {
                    var i,
                        u = ["export"];
                    return (
                        (i = 32 & t ? 33 : N),
                        (u = G(u, "default")),
                        (u = T(e.declaration)
                            ? G(u, this.generateStatement(e.declaration, i))
                            : G(
                                  u,
                                  this.generateExpression(
                                      e.declaration,
                                      c.Assignment,
                                      L
                                  ) + this.semicolon(t)
                              ))
                    );
                },
                ExportNamedDeclaration: function (e, t) {
                    var i,
                        u = ["export"],
                        s = this;
                    return (
                        (i = 32 & t ? 33 : N),
                        e.declaration
                            ? G(u, this.generateStatement(e.declaration, i))
                            : (e.specifiers &&
                                  (0 === e.specifiers.length
                                      ? (u = G(u, "{" + x + "}"))
                                      : e.specifiers[0].type ===
                                        h.ExportBatchSpecifier
                                      ? (u = G(
                                            u,
                                            this.generateExpression(
                                                e.specifiers[0],
                                                c.Sequence,
                                                L
                                            )
                                        ))
                                      : ((u = G(u, "{")),
                                        z(function (t) {
                                            var i, r;
                                            for (
                                                u.push(g),
                                                    i = 0,
                                                    r = e.specifiers.length;
                                                i < r;
                                                ++i
                                            )
                                                u.push(t),
                                                    u.push(
                                                        s.generateExpression(
                                                            e.specifiers[i],
                                                            c.Sequence,
                                                            L
                                                        )
                                                    ),
                                                    i + 1 < r &&
                                                        u.push("," + g);
                                        }),
                                        R(j(u).toString()) || u.push(g),
                                        u.push(d + "}")),
                                  e.source
                                      ? (u = G(u, [
                                            "from" + x,
                                            this.generateExpression(
                                                e.source,
                                                c.Sequence,
                                                L
                                            ),
                                            this.semicolon(t),
                                        ]))
                                      : u.push(this.semicolon(t))),
                              u)
                    );
                },
                ExportAllDeclaration: function (e, t) {
                    return [
                        "export" + x,
                        "*" + x,
                        "from" + x,
                        this.generateExpression(e.source, c.Sequence, L),
                        this.semicolon(t),
                    ];
                },
                ExpressionStatement: function (e, t) {
                    var i, u;
                    return (
                        123 ===
                            (u = j(
                                (i = [
                                    this.generateExpression(
                                        e.expression,
                                        c.Sequence,
                                        L
                                    ),
                                ])
                            ).toString()).charCodeAt(0) ||
                        (function (e) {
                            var t;
                            return (
                                "class" === e.slice(0, 5) &&
                                (123 === (t = e.charCodeAt(5)) ||
                                    I.isWhiteSpace(t) ||
                                    I.isLineTerminator(t))
                            );
                        })(u) ||
                        (function (e) {
                            var t;
                            return (
                                "function" === e.slice(0, 8) &&
                                (40 === (t = e.charCodeAt(8)) ||
                                    I.isWhiteSpace(t) ||
                                    42 === t ||
                                    I.isLineTerminator(t))
                            );
                        })(u) ||
                        (function (e) {
                            var t, i, u;
                            if ("async" !== e.slice(0, 5)) return !1;
                            if (!I.isWhiteSpace(e.charCodeAt(5))) return !1;
                            for (
                                i = 6, u = e.length;
                                i < u && I.isWhiteSpace(e.charCodeAt(i));
                                ++i
                            );
                            return (
                                i !== u &&
                                "function" === e.slice(i, i + 8) &&
                                (40 === (t = e.charCodeAt(i + 8)) ||
                                    I.isWhiteSpace(t) ||
                                    42 === t ||
                                    I.isLineTerminator(t))
                            );
                        })(u) ||
                        (S &&
                            16 & t &&
                            e.expression.type === h.Literal &&
                            "string" === typeof e.expression.value)
                            ? (i = ["(", i, ")" + this.semicolon(t)])
                            : i.push(this.semicolon(t)),
                        i
                    );
                },
                ImportDeclaration: function (e, t) {
                    var i,
                        u,
                        s = this;
                    return 0 === e.specifiers.length
                        ? [
                              "import",
                              x,
                              this.generateExpression(e.source, c.Sequence, L),
                              this.semicolon(t),
                          ]
                        : ((i = ["import"]),
                          (u = 0),
                          e.specifiers[u].type === h.ImportDefaultSpecifier &&
                              ((i = G(i, [
                                  this.generateExpression(
                                      e.specifiers[u],
                                      c.Sequence,
                                      L
                                  ),
                              ])),
                              ++u),
                          e.specifiers[u] &&
                              (0 !== u && i.push(","),
                              e.specifiers[u].type ===
                              h.ImportNamespaceSpecifier
                                  ? (i = G(i, [
                                        x,
                                        this.generateExpression(
                                            e.specifiers[u],
                                            c.Sequence,
                                            L
                                        ),
                                    ]))
                                  : (i.push(x + "{"),
                                    e.specifiers.length - u === 1
                                        ? (i.push(x),
                                          i.push(
                                              this.generateExpression(
                                                  e.specifiers[u],
                                                  c.Sequence,
                                                  L
                                              )
                                          ),
                                          i.push(x + "}" + x))
                                        : (z(function (t) {
                                              var r, n;
                                              for (
                                                  i.push(g),
                                                      r = u,
                                                      n = e.specifiers.length;
                                                  r < n;
                                                  ++r
                                              )
                                                  i.push(t),
                                                      i.push(
                                                          s.generateExpression(
                                                              e.specifiers[r],
                                                              c.Sequence,
                                                              L
                                                          )
                                                      ),
                                                      r + 1 < n &&
                                                          i.push("," + g);
                                          }),
                                          R(j(i).toString()) || i.push(g),
                                          i.push(d + "}" + x)))),
                          (i = G(i, [
                              "from" + x,
                              this.generateExpression(e.source, c.Sequence, L),
                              this.semicolon(t),
                          ])));
                },
                VariableDeclarator: function (e, t) {
                    var i = 1 & t ? L : 6;
                    return e.init
                        ? [
                              this.generateExpression(e.id, c.Assignment, i),
                              x,
                              "=",
                              x,
                              this.generateExpression(e.init, c.Assignment, i),
                          ]
                        : this.generatePattern(e.id, c.Assignment, i);
                },
                VariableDeclaration: function (e, t) {
                    var i,
                        u,
                        s,
                        r,
                        n,
                        a = this;
                    function o() {
                        for (
                            r = e.declarations[0],
                                b.comment && r.leadingComments
                                    ? (i.push("\n"),
                                      i.push(K(a.generateStatement(r, n))))
                                    : (i.push(H()),
                                      i.push(a.generateStatement(r, n))),
                                u = 1,
                                s = e.declarations.length;
                            u < s;
                            ++u
                        )
                            (r = e.declarations[u]),
                                b.comment && r.leadingComments
                                    ? (i.push("," + g),
                                      i.push(K(a.generateStatement(r, n))))
                                    : (i.push("," + x),
                                      i.push(a.generateStatement(r, n)));
                    }
                    return (
                        (i = [e.kind]),
                        (n = 1 & t ? N : 0),
                        e.declarations.length > 1 ? z(o) : o(),
                        i.push(this.semicolon(t)),
                        i
                    );
                },
                ThrowStatement: function (e, t) {
                    return [
                        G(
                            "throw",
                            this.generateExpression(e.argument, c.Sequence, L)
                        ),
                        this.semicolon(t),
                    ];
                },
                TryStatement: function (e) {
                    var t, i, u, s;
                    if (
                        ((t = ["try", this.maybeBlock(e.block, N)]),
                        (t = this.maybeBlockSuffix(e.block, t)),
                        e.handlers)
                    )
                        for (i = 0, u = e.handlers.length; i < u; ++i)
                            (t = G(
                                t,
                                this.generateStatement(e.handlers[i], N)
                            )),
                                (e.finalizer || i + 1 !== u) &&
                                    (t = this.maybeBlockSuffix(
                                        e.handlers[i].body,
                                        t
                                    ));
                    else {
                        for (
                            i = 0, u = (s = e.guardedHandlers || []).length;
                            i < u;
                            ++i
                        )
                            (t = G(t, this.generateStatement(s[i], N))),
                                (e.finalizer || i + 1 !== u) &&
                                    (t = this.maybeBlockSuffix(s[i].body, t));
                        if (e.handler)
                            if (Array.isArray(e.handler))
                                for (i = 0, u = e.handler.length; i < u; ++i)
                                    (t = G(
                                        t,
                                        this.generateStatement(e.handler[i], N)
                                    )),
                                        (e.finalizer || i + 1 !== u) &&
                                            (t = this.maybeBlockSuffix(
                                                e.handler[i].body,
                                                t
                                            ));
                            else
                                (t = G(
                                    t,
                                    this.generateStatement(e.handler, N)
                                )),
                                    e.finalizer &&
                                        (t = this.maybeBlockSuffix(
                                            e.handler.body,
                                            t
                                        ));
                    }
                    return (
                        e.finalizer &&
                            (t = G(t, [
                                "finally",
                                this.maybeBlock(e.finalizer, N),
                            ])),
                        t
                    );
                },
                SwitchStatement: function (e) {
                    var t,
                        i,
                        u,
                        s,
                        r,
                        n = this;
                    if (
                        (z(function () {
                            t = [
                                "switch" + x + "(",
                                n.generateExpression(
                                    e.discriminant,
                                    c.Sequence,
                                    L
                                ),
                                ")" + x + "{" + g,
                            ];
                        }),
                        e.cases)
                    )
                        for (r = N, u = 0, s = e.cases.length; u < s; ++u)
                            u === s - 1 && (r |= 32),
                                (i = K(this.generateStatement(e.cases[u], r))),
                                t.push(i),
                                R(j(i).toString()) || t.push(g);
                    return t.push(K("}")), t;
                },
                SwitchCase: function (e, t) {
                    var i,
                        u,
                        s,
                        r,
                        n,
                        a = this;
                    return (
                        z(function () {
                            for (
                                i = e.test
                                    ? [
                                          G(
                                              "case",
                                              a.generateExpression(
                                                  e.test,
                                                  c.Sequence,
                                                  L
                                              )
                                          ),
                                          ":",
                                      ]
                                    : ["default:"],
                                    s = 0,
                                    (r = e.consequent.length) &&
                                        e.consequent[0].type ===
                                            h.BlockStatement &&
                                        ((u = a.maybeBlock(e.consequent[0], N)),
                                        i.push(u),
                                        (s = 1)),
                                    s === r || R(j(i).toString()) || i.push(g),
                                    n = N;
                                s < r;
                                ++s
                            )
                                s === r - 1 && 32 & t && (n |= 32),
                                    (u = K(
                                        a.generateStatement(e.consequent[s], n)
                                    )),
                                    i.push(u),
                                    s + 1 === r ||
                                        R(j(u).toString()) ||
                                        i.push(g);
                        }),
                        i
                    );
                },
                IfStatement: function (e, t) {
                    var i,
                        u,
                        s = this;
                    return (
                        z(function () {
                            i = [
                                "if" + x + "(",
                                s.generateExpression(e.test, c.Sequence, L),
                                ")",
                            ];
                        }),
                        (u = N),
                        32 & t && (u |= 32),
                        e.alternate
                            ? (i.push(this.maybeBlock(e.consequent, N)),
                              (i = this.maybeBlockSuffix(e.consequent, i)),
                              (i =
                                  e.alternate.type === h.IfStatement
                                      ? G(i, [
                                            "else ",
                                            this.generateStatement(
                                                e.alternate,
                                                u
                                            ),
                                        ])
                                      : G(
                                            i,
                                            G(
                                                "else",
                                                this.maybeBlock(e.alternate, u)
                                            )
                                        )))
                            : i.push(this.maybeBlock(e.consequent, u)),
                        i
                    );
                },
                ForStatement: function (e, t) {
                    var i,
                        u = this;
                    return (
                        z(function () {
                            (i = ["for" + x + "("]),
                                e.init
                                    ? e.init.type === h.VariableDeclaration
                                        ? i.push(u.generateStatement(e.init, 0))
                                        : (i.push(
                                              u.generateExpression(
                                                  e.init,
                                                  c.Sequence,
                                                  6
                                              )
                                          ),
                                          i.push(";"))
                                    : i.push(";"),
                                e.test
                                    ? (i.push(x),
                                      i.push(
                                          u.generateExpression(
                                              e.test,
                                              c.Sequence,
                                              L
                                          )
                                      ),
                                      i.push(";"))
                                    : i.push(";"),
                                e.update
                                    ? (i.push(x),
                                      i.push(
                                          u.generateExpression(
                                              e.update,
                                              c.Sequence,
                                              L
                                          )
                                      ),
                                      i.push(")"))
                                    : i.push(")");
                        }),
                        i.push(this.maybeBlock(e.body, 32 & t ? 33 : N)),
                        i
                    );
                },
                ForInStatement: function (e, t) {
                    return this.generateIterationForStatement(
                        "in",
                        e,
                        32 & t ? 33 : N
                    );
                },
                ForOfStatement: function (e, t) {
                    return this.generateIterationForStatement(
                        "of",
                        e,
                        32 & t ? 33 : N
                    );
                },
                LabeledStatement: function (e, t) {
                    return [
                        e.label.name + ":",
                        this.maybeBlock(e.body, 32 & t ? 33 : N),
                    ];
                },
                Program: function (e) {
                    var t, i, u, s, r;
                    for (
                        s = e.body.length,
                            t = [v && s > 0 ? "\n" : ""],
                            r = 17,
                            u = 0;
                        u < s;
                        ++u
                    )
                        v || u !== s - 1 || (r |= 32),
                            w &&
                                (0 === u &&
                                    (e.body[0].leadingComments ||
                                        Y(e.range[0], e.body[u].range[0], t)),
                                u > 0 &&
                                    (e.body[u - 1].trailingComments ||
                                        e.body[u].leadingComments ||
                                        Y(
                                            e.body[u - 1].range[1],
                                            e.body[u].range[0],
                                            t
                                        ))),
                            (i = K(this.generateStatement(e.body[u], r))),
                            t.push(i),
                            u + 1 < s &&
                                !R(j(i).toString()) &&
                                ((w && e.body[u + 1].leadingComments) ||
                                    t.push(g)),
                            w &&
                                u === s - 1 &&
                                (e.body[u].trailingComments ||
                                    Y(e.body[u].range[1], e.range[1], t));
                    return t;
                },
                FunctionDeclaration: function (e) {
                    return [
                        te(e, !0),
                        "function",
                        ie(e) || H(),
                        e.id ? ee(e.id) : "",
                        this.generateFunctionBody(e),
                    ];
                },
                ReturnStatement: function (e, t) {
                    return e.argument
                        ? [
                              G(
                                  "return",
                                  this.generateExpression(
                                      e.argument,
                                      c.Sequence,
                                      L
                                  )
                              ),
                              this.semicolon(t),
                          ]
                        : ["return" + this.semicolon(t)];
                },
                WhileStatement: function (e, t) {
                    var i,
                        u = this;
                    return (
                        z(function () {
                            i = [
                                "while" + x + "(",
                                u.generateExpression(e.test, c.Sequence, L),
                                ")",
                            ];
                        }),
                        i.push(this.maybeBlock(e.body, 32 & t ? 33 : N)),
                        i
                    );
                },
                WithStatement: function (e, t) {
                    var i,
                        u = this;
                    return (
                        z(function () {
                            i = [
                                "with" + x + "(",
                                u.generateExpression(e.object, c.Sequence, L),
                                ")",
                            ];
                        }),
                        i.push(this.maybeBlock(e.body, 32 & t ? 33 : N)),
                        i
                    );
                },
            }),
            M(J.prototype, J.Statement),
            (J.Expression = {
                SequenceExpression: function (e, t, i) {
                    var u, s, r;
                    for (
                        c.Sequence < t && (i |= 1),
                            u = [],
                            s = 0,
                            r = e.expressions.length;
                        s < r;
                        ++s
                    )
                        u.push(
                            this.generateExpression(
                                e.expressions[s],
                                c.Assignment,
                                i
                            )
                        ),
                            s + 1 < r && u.push("," + x);
                    return Z(u, c.Sequence, t);
                },
                AssignmentExpression: function (e, t, i) {
                    return this.generateAssignment(
                        e.left,
                        e.right,
                        e.operator,
                        t,
                        i
                    );
                },
                ArrowFunctionExpression: function (e, t) {
                    return Z(this.generateFunctionBody(e), c.ArrowFunction, t);
                },
                ConditionalExpression: function (e, t, i) {
                    return (
                        c.Conditional < t && (i |= 1),
                        Z(
                            [
                                this.generateExpression(e.test, c.LogicalOR, i),
                                x + "?" + x,
                                this.generateExpression(
                                    e.consequent,
                                    c.Assignment,
                                    i
                                ),
                                x + ":" + x,
                                this.generateExpression(
                                    e.alternate,
                                    c.Assignment,
                                    i
                                ),
                            ],
                            c.Conditional,
                            t
                        )
                    );
                },
                LogicalExpression: function (e, t, i) {
                    return this.BinaryExpression(e, t, i);
                },
                BinaryExpression: function (e, t, i) {
                    var u, s, r, n;
                    return (
                        (s = l[e.operator]) < t && (i |= 1),
                        (u =
                            47 ===
                                (n = (r = this.generateExpression(
                                    e.left,
                                    s,
                                    i
                                )).toString()).charCodeAt(n.length - 1) &&
                            I.isIdentifierPartES5(e.operator.charCodeAt(0))
                                ? [r, H(), e.operator]
                                : G(r, e.operator)),
                        (r = this.generateExpression(e.right, s + 1, i)),
                        ("/" === e.operator &&
                            "/" === r.toString().charAt(0)) ||
                        ("<" === e.operator.slice(-1) &&
                            "!--" === r.toString().slice(0, 3))
                            ? (u.push(H()), u.push(r))
                            : (u = G(u, r)),
                        "in" !== e.operator || 1 & i
                            ? Z(u, s, t)
                            : ["(", u, ")"]
                    );
                },
                CallExpression: function (e, t, i) {
                    var u, s, r;
                    for (
                        (u = [
                            this.generateExpression(e.callee, c.Call, 3),
                        ]).push("("),
                            s = 0,
                            r = e.arguments.length;
                        s < r;
                        ++s
                    )
                        u.push(
                            this.generateExpression(
                                e.arguments[s],
                                c.Assignment,
                                L
                            )
                        ),
                            s + 1 < r && u.push("," + x);
                    return u.push(")"), 2 & i ? Z(u, c.Call, t) : ["(", u, ")"];
                },
                NewExpression: function (e, t, i) {
                    var u, s, r, n, a;
                    if (
                        ((s = e.arguments.length),
                        (a = 4 & i && !B && 0 === s ? 5 : 1),
                        (u = G(
                            "new",
                            this.generateExpression(e.callee, c.New, a)
                        )),
                        !(4 & i) || B || s > 0)
                    ) {
                        for (u.push("("), r = 0, n = s; r < n; ++r)
                            u.push(
                                this.generateExpression(
                                    e.arguments[r],
                                    c.Assignment,
                                    L
                                )
                            ),
                                r + 1 < n && u.push("," + x);
                        u.push(")");
                    }
                    return Z(u, c.New, t);
                },
                MemberExpression: function (e, t, i) {
                    var u, s;
                    return (
                        (u = [
                            this.generateExpression(
                                e.object,
                                c.Call,
                                2 & i ? 3 : 1
                            ),
                        ]),
                        e.computed
                            ? (u.push("["),
                              u.push(
                                  this.generateExpression(
                                      e.property,
                                      c.Sequence,
                                      2 & i ? L : 5
                                  )
                              ),
                              u.push("]"))
                            : (e.object.type === h.Literal &&
                                  "number" === typeof e.object.value &&
                                  (s = j(u).toString()).indexOf(".") < 0 &&
                                  !/[eExX]/.test(s) &&
                                  I.isDecimalDigit(
                                      s.charCodeAt(s.length - 1)
                                  ) &&
                                  !(s.length >= 2 && 48 === s.charCodeAt(0)) &&
                                  u.push(" "),
                              u.push("."),
                              u.push(ee(e.property))),
                        Z(u, c.Member, t)
                    );
                },
                MetaProperty: function (e, t) {
                    var i;
                    return (
                        (i = []).push(
                            "string" === typeof e.meta ? e.meta : ee(e.meta)
                        ),
                        i.push("."),
                        i.push(
                            "string" === typeof e.property
                                ? e.property
                                : ee(e.property)
                        ),
                        Z(i, c.Member, t)
                    );
                },
                UnaryExpression: function (e, t) {
                    var i, u, s, r, n;
                    return (
                        (u = this.generateExpression(e.argument, c.Unary, L)),
                        "" === x
                            ? (i = G(e.operator, u))
                            : ((i = [e.operator]),
                              e.operator.length > 2
                                  ? (i = G(i, u))
                                  : ((n = (r = j(i).toString()).charCodeAt(
                                        r.length - 1
                                    )),
                                    (s = u.toString().charCodeAt(0)),
                                    ((43 === n || 45 === n) && n === s) ||
                                    (I.isIdentifierPartES5(n) &&
                                        I.isIdentifierPartES5(s))
                                        ? (i.push(H()), i.push(u))
                                        : i.push(u))),
                        Z(i, c.Unary, t)
                    );
                },
                YieldExpression: function (e, t) {
                    var i;
                    return (
                        (i = e.delegate ? "yield*" : "yield"),
                        e.argument &&
                            (i = G(
                                i,
                                this.generateExpression(e.argument, c.Yield, L)
                            )),
                        Z(i, c.Yield, t)
                    );
                },
                AwaitExpression: function (e, t) {
                    return Z(
                        G(
                            e.all ? "await*" : "await",
                            this.generateExpression(e.argument, c.Await, L)
                        ),
                        c.Await,
                        t
                    );
                },
                UpdateExpression: function (e, t) {
                    return e.prefix
                        ? Z(
                              [
                                  e.operator,
                                  this.generateExpression(
                                      e.argument,
                                      c.Unary,
                                      L
                                  ),
                              ],
                              c.Unary,
                              t
                          )
                        : Z(
                              [
                                  this.generateExpression(
                                      e.argument,
                                      c.Postfix,
                                      L
                                  ),
                                  e.operator,
                              ],
                              c.Postfix,
                              t
                          );
                },
                FunctionExpression: function (e) {
                    var t = [te(e, !0), "function"];
                    return (
                        e.id
                            ? (t.push(ie(e) || H()), t.push(ee(e.id)))
                            : t.push(ie(e) || x),
                        t.push(this.generateFunctionBody(e)),
                        t
                    );
                },
                ArrayPattern: function (e, t, i) {
                    return this.ArrayExpression(e, t, i, !0);
                },
                ArrayExpression: function (e, t, i, u) {
                    var s,
                        r,
                        n = this;
                    return e.elements.length
                        ? ((r = !u && e.elements.length > 1),
                          (s = ["[", r ? g : ""]),
                          z(function (t) {
                              var i, u;
                              for (i = 0, u = e.elements.length; i < u; ++i)
                                  e.elements[i]
                                      ? (s.push(r ? t : ""),
                                        s.push(
                                            n.generateExpression(
                                                e.elements[i],
                                                c.Assignment,
                                                L
                                            )
                                        ))
                                      : (r && s.push(t),
                                        i + 1 === u && s.push(",")),
                                      i + 1 < u && s.push("," + (r ? g : x));
                          }),
                          r && !R(j(s).toString()) && s.push(g),
                          s.push(r ? d : ""),
                          s.push("]"),
                          s)
                        : "[]";
                },
                RestElement: function (e) {
                    return "..." + this.generatePattern(e.argument);
                },
                ClassExpression: function (e) {
                    var t, i;
                    return (
                        (t = ["class"]),
                        e.id &&
                            (t = G(
                                t,
                                this.generateExpression(e.id, c.Sequence, L)
                            )),
                        e.superClass &&
                            ((i = G(
                                "extends",
                                this.generateExpression(
                                    e.superClass,
                                    c.Assignment,
                                    L
                                )
                            )),
                            (t = G(t, i))),
                        t.push(x),
                        t.push(this.generateStatement(e.body, 33)),
                        t
                    );
                },
                MethodDefinition: function (e) {
                    var t, i;
                    return (
                        (t = e.static ? ["static" + x] : []),
                        (i =
                            "get" === e.kind || "set" === e.kind
                                ? [
                                      G(
                                          e.kind,
                                          this.generatePropertyKey(
                                              e.key,
                                              e.computed
                                          )
                                      ),
                                      this.generateFunctionBody(e.value),
                                  ]
                                : [
                                      ue(e),
                                      this.generatePropertyKey(
                                          e.key,
                                          e.computed
                                      ),
                                      this.generateFunctionBody(e.value),
                                  ]),
                        G(t, i)
                    );
                },
                Property: function (e) {
                    return "get" === e.kind || "set" === e.kind
                        ? [
                              e.kind,
                              H(),
                              this.generatePropertyKey(e.key, e.computed),
                              this.generateFunctionBody(e.value),
                          ]
                        : e.shorthand
                        ? "AssignmentPattern" === e.value.type
                            ? this.AssignmentPattern(e.value, c.Sequence, L)
                            : this.generatePropertyKey(e.key, e.computed)
                        : e.method
                        ? [
                              ue(e),
                              this.generatePropertyKey(e.key, e.computed),
                              this.generateFunctionBody(e.value),
                          ]
                        : [
                              this.generatePropertyKey(e.key, e.computed),
                              ":" + x,
                              this.generateExpression(e.value, c.Assignment, L),
                          ];
                },
                ObjectExpression: function (e) {
                    var t,
                        i,
                        u,
                        s,
                        r = this;
                    return e.properties.length
                        ? ((t = e.properties.length > 1),
                          z(function () {
                              u = r.generateExpression(
                                  e.properties[0],
                                  c.Sequence,
                                  L
                              );
                          }),
                          t || ((s = j(u).toString()), /[\r\n]/g.test(s))
                              ? (z(function (s) {
                                    var n, a;
                                    if (((i = ["{", g, s, u]), t))
                                        for (
                                            i.push("," + g),
                                                n = 1,
                                                a = e.properties.length;
                                            n < a;
                                            ++n
                                        )
                                            i.push(s),
                                                i.push(
                                                    r.generateExpression(
                                                        e.properties[n],
                                                        c.Sequence,
                                                        L
                                                    )
                                                ),
                                                n + 1 < a && i.push("," + g);
                                }),
                                R(j(i).toString()) || i.push(g),
                                i.push(d),
                                i.push("}"),
                                i)
                              : ["{", x, u, x, "}"])
                        : "{}";
                },
                AssignmentPattern: function (e, t, i) {
                    return this.generateAssignment(e.left, e.right, "=", t, i);
                },
                ObjectPattern: function (e) {
                    var t,
                        i,
                        u,
                        s,
                        r = this;
                    if (!e.properties.length) return "{}";
                    if (((s = !1), 1 === e.properties.length))
                        e.properties[0].value.type !== h.Identifier && (s = !0);
                    else
                        for (i = 0, u = e.properties.length; i < u; ++i)
                            if (!e.properties[i].shorthand) {
                                s = !0;
                                break;
                            }
                    return (
                        (t = ["{", s ? g : ""]),
                        z(function (i) {
                            var u, n;
                            for (u = 0, n = e.properties.length; u < n; ++u)
                                t.push(s ? i : ""),
                                    t.push(
                                        r.generateExpression(
                                            e.properties[u],
                                            c.Sequence,
                                            L
                                        )
                                    ),
                                    u + 1 < n && t.push("," + (s ? g : x));
                        }),
                        s && !R(j(t).toString()) && t.push(g),
                        t.push(s ? d : ""),
                        t.push("}"),
                        t
                    );
                },
                ThisExpression: function () {
                    return "this";
                },
                Super: function () {
                    return "super";
                },
                Identifier: function (e) {
                    return ee(e);
                },
                ImportDefaultSpecifier: function (e) {
                    return ee(e.id || e.local);
                },
                ImportNamespaceSpecifier: function (e) {
                    var t = ["*"],
                        i = e.id || e.local;
                    return i && t.push(x + "as" + H() + ee(i)), t;
                },
                ImportSpecifier: function (e) {
                    var t = e.imported,
                        i = [t.name],
                        u = e.local;
                    return (
                        u &&
                            u.name !== t.name &&
                            i.push(H() + "as" + H() + ee(u)),
                        i
                    );
                },
                ExportSpecifier: function (e) {
                    var t = e.local,
                        i = [t.name],
                        u = e.exported;
                    return (
                        u &&
                            u.name !== t.name &&
                            i.push(H() + "as" + H() + ee(u)),
                        i
                    );
                },
                Literal: function (e) {
                    var t;
                    if (e.hasOwnProperty("raw") && _ && b.raw)
                        try {
                            if (
                                (t = _(e.raw).body[0].expression).type ===
                                    h.Literal &&
                                t.value === e.value
                            )
                                return e.raw;
                        } catch (i) {}
                    return null === e.value
                        ? "null"
                        : "string" === typeof e.value
                        ? (function (e) {
                              var t,
                                  i,
                                  u,
                                  s,
                                  r,
                                  n = "",
                                  a = 0,
                                  o = 0;
                              for (t = 0, i = e.length; t < i; ++t) {
                                  if (39 === (u = e.charCodeAt(t))) ++a;
                                  else if (34 === u) ++o;
                                  else if (47 === u && f) n += "\\";
                                  else {
                                      if (I.isLineTerminator(u) || 92 === u) {
                                          n += W(u);
                                          continue;
                                      }
                                      if (
                                          !I.isIdentifierPartES5(u) &&
                                          ((f && u < 32) ||
                                              (!f && !F && (u < 32 || u > 126)))
                                      ) {
                                          n += U(u, e.charCodeAt(t + 1));
                                          continue;
                                      }
                                  }
                                  n += String.fromCharCode(u);
                              }
                              if (
                                  ((r = (s = !(
                                      "double" === E ||
                                      ("auto" === E && o < a)
                                  ))
                                      ? "'"
                                      : '"'),
                                  !(s ? a : o))
                              )
                                  return r + n + r;
                              for (
                                  e = n, n = r, t = 0, i = e.length;
                                  t < i;
                                  ++t
                              )
                                  ((39 === (u = e.charCodeAt(t)) && s) ||
                                      (34 === u && !s)) &&
                                      (n += "\\"),
                                      (n += String.fromCharCode(u));
                              return n + r;
                          })(e.value)
                        : "number" === typeof e.value
                        ? (function (e) {
                              var t, i, u, s, r;
                              if (e !== e)
                                  throw new Error(
                                      "Numeric literal whose value is NaN"
                                  );
                              if (e < 0 || (0 === e && 1 / e < 0))
                                  throw new Error(
                                      "Numeric literal whose value is negative"
                                  );
                              if (e === 1 / 0)
                                  return f ? "null" : C ? "1e400" : "1e+400";
                              if (((t = "" + e), !C || t.length < 3)) return t;
                              for (
                                  i = t.indexOf("."),
                                      f ||
                                          48 !== t.charCodeAt(0) ||
                                          1 !== i ||
                                          ((i = 0), (t = t.slice(1))),
                                      u = t,
                                      t = t.replace("e+", "e"),
                                      s = 0,
                                      (r = u.indexOf("e")) > 0 &&
                                          ((s = +u.slice(r + 1)),
                                          (u = u.slice(0, r))),
                                      i >= 0 &&
                                          ((s -= u.length - i - 1),
                                          (u =
                                              +(
                                                  u.slice(0, i) + u.slice(i + 1)
                                              ) + "")),
                                      r = 0;
                                  48 === u.charCodeAt(u.length + r - 1);

                              )
                                  --r;
                              return (
                                  0 !== r && ((s -= r), (u = u.slice(0, r))),
                                  0 !== s && (u += "e" + s),
                                  (u.length < t.length ||
                                      (m &&
                                          e > 1e12 &&
                                          Math.floor(e) === e &&
                                          (u = "0x" + e.toString(16)).length <
                                              t.length)) &&
                                      +u === e &&
                                      (t = u),
                                  t
                              );
                          })(e.value)
                        : "boolean" === typeof e.value
                        ? e.value
                            ? "true"
                            : "false"
                        : e.regex
                        ? "/" + e.regex.pattern + "/" + e.regex.flags
                        : (function (e) {
                              var t, i, u, s, r, n, a, o;
                              if (((i = e.toString()), e.source)) {
                                  if (!(t = i.match(/\/([^/]*)$/))) return i;
                                  for (
                                      u = t[1],
                                          i = "",
                                          a = !1,
                                          o = !1,
                                          s = 0,
                                          r = e.source.length;
                                      s < r;
                                      ++s
                                  )
                                      (n = e.source.charCodeAt(s)),
                                          o
                                              ? ((i += q(n, o)), (o = !1))
                                              : (a
                                                    ? 93 === n && (a = !1)
                                                    : 47 === n
                                                    ? (i += "\\")
                                                    : 91 === n && (a = !0),
                                                (i += q(n, o)),
                                                (o = 92 === n));
                                  return "/" + i + "/" + u;
                              }
                              return i;
                          })(e.value);
                },
                GeneratorExpression: function (e, t, i) {
                    return this.ComprehensionExpression(e, t, i);
                },
                ComprehensionExpression: function (e) {
                    var t,
                        i,
                        u,
                        s,
                        r = this;
                    return (
                        (t = e.type === h.GeneratorExpression ? ["("] : ["["]),
                        b.moz.comprehensionExpressionStartsWithAssignment &&
                            ((s = this.generateExpression(
                                e.body,
                                c.Assignment,
                                L
                            )),
                            t.push(s)),
                        e.blocks &&
                            z(function () {
                                for (i = 0, u = e.blocks.length; i < u; ++i)
                                    (s = r.generateExpression(
                                        e.blocks[i],
                                        c.Sequence,
                                        L
                                    )),
                                        i > 0 ||
                                        b.moz
                                            .comprehensionExpressionStartsWithAssignment
                                            ? (t = G(t, s))
                                            : t.push(s);
                            }),
                        e.filter &&
                            ((t = G(t, "if" + x)),
                            (s = this.generateExpression(
                                e.filter,
                                c.Sequence,
                                L
                            )),
                            (t = G(t, ["(", s, ")"]))),
                        b.moz.comprehensionExpressionStartsWithAssignment ||
                            ((s = this.generateExpression(
                                e.body,
                                c.Assignment,
                                L
                            )),
                            (t = G(t, s))),
                        t.push(e.type === h.GeneratorExpression ? ")" : "]"),
                        t
                    );
                },
                ComprehensionBlock: function (e) {
                    var t;
                    return (
                        (t = G(
                            (t =
                                e.left.type === h.VariableDeclaration
                                    ? [
                                          e.left.kind,
                                          H(),
                                          this.generateStatement(
                                              e.left.declarations[0],
                                              0
                                          ),
                                      ]
                                    : this.generateExpression(
                                          e.left,
                                          c.Call,
                                          L
                                      )),
                            e.of ? "of" : "in"
                        )),
                        (t = G(
                            t,
                            this.generateExpression(e.right, c.Sequence, L)
                        )),
                        ["for" + x + "(", t, ")"]
                    );
                },
                SpreadElement: function (e) {
                    return [
                        "...",
                        this.generateExpression(e.argument, c.Assignment, L),
                    ];
                },
                TaggedTemplateExpression: function (e, t, i) {
                    var u = 3;
                    return (
                        2 & i || (u = 1),
                        Z(
                            [
                                this.generateExpression(e.tag, c.Call, u),
                                this.generateExpression(e.quasi, c.Primary, 4),
                            ],
                            c.TaggedTemplate,
                            t
                        )
                    );
                },
                TemplateElement: function (e) {
                    return e.value.raw;
                },
                TemplateLiteral: function (e) {
                    var t, i, u;
                    for (t = ["`"], i = 0, u = e.quasis.length; i < u; ++i)
                        t.push(
                            this.generateExpression(e.quasis[i], c.Primary, L)
                        ),
                            i + 1 < u &&
                                (t.push("${" + x),
                                t.push(
                                    this.generateExpression(
                                        e.expressions[i],
                                        c.Sequence,
                                        L
                                    )
                                ),
                                t.push(x + "}"));
                    return t.push("`"), t;
                },
                ModuleSpecifier: function (e, t, i) {
                    return this.Literal(e, t, i);
                },
            }),
            M(J.prototype, J.Expression),
            (J.prototype.generateExpression = function (e, t, i) {
                var u, s;
                return (
                    (s = e.type || h.Property),
                    b.verbatim && e.hasOwnProperty(b.verbatim)
                        ? (function (e, t) {
                              var i;
                              return j(
                                  "string" === typeof (i = e[b.verbatim])
                                      ? Z($(i), c.Sequence, t)
                                      : Z(
                                            $(i.content),
                                            null != i.precedence
                                                ? i.precedence
                                                : c.Sequence,
                                            t
                                        ),
                                  e
                              );
                          })(e, t)
                        : ((u = this[s](e, t, i)),
                          b.comment && (u = X(e, u)),
                          j(u, e))
                );
            }),
            (J.prototype.generateStatement = function (e, t) {
                var i, u;
                return (
                    (i = this[e.type](e, t)),
                    b.comment && (i = X(e, i)),
                    (u = j(i).toString()),
                    e.type !== h.Program ||
                        v ||
                        "" !== g ||
                        "\n" !== u.charAt(u.length - 1) ||
                        (i = P
                            ? j(i).replaceRight(/\s+$/, "")
                            : u.replace(/\s+$/, "")),
                    j(i, e)
                );
            });
        var re = function (e, t) {
                var i,
                    u,
                    s = {
                        indent: null,
                        base: null,
                        parse: null,
                        comment: !1,
                        format: {
                            indent: {
                                style: "    ",
                                base: 0,
                                adjustMultilineComment: !1,
                            },
                            newline: "\n",
                            space: " ",
                            json: !1,
                            renumber: !1,
                            hexadecimal: !1,
                            quotes: "single",
                            escapeless: !1,
                            compact: !1,
                            parentheses: !0,
                            semicolons: !0,
                            safeConcatenation: !1,
                            preserveBlankLines: !1,
                        },
                        moz: {
                            comprehensionExpressionStartsWithAssignment: !1,
                            starlessGenerator: !1,
                        },
                        sourceMap: null,
                        sourceMapRoot: null,
                        sourceMapWithCode: !1,
                        directive: !1,
                        raw: !0,
                        verbatim: null,
                        sourceCode: null,
                    };
                return (
                    null != t
                        ? ("string" === typeof t.indent &&
                              (s.format.indent.style = t.indent),
                          "number" === typeof t.base &&
                              (s.format.indent.base = t.base),
                          (t = O(s, t)),
                          (A = t.format.indent.style),
                          (d =
                              "string" === typeof t.base
                                  ? t.base
                                  : V(A, t.format.indent.base)))
                        : ((A = (t = s).format.indent.style),
                          (d = V(A, t.format.indent.base))),
                    (f = t.format.json),
                    (C = t.format.renumber),
                    (m = !f && t.format.hexadecimal),
                    (E = f ? "double" : t.format.quotes),
                    (F = t.format.escapeless),
                    (g = t.format.newline),
                    (x = t.format.space),
                    t.format.compact && (g = x = A = d = ""),
                    (B = t.format.parentheses),
                    (y = t.format.semicolons),
                    (v = t.format.safeConcatenation),
                    (S = t.directive),
                    (_ = f ? null : t.parse),
                    (P = t.sourceMap),
                    (k = t.sourceCode),
                    (w = t.format.preserveBlankLines && null !== k),
                    (b = t),
                    P && (D = function () {}),
                    (i = se(e)),
                    P
                        ? ((u = i.toStringWithSourceMap({
                              file: t.file,
                              sourceRoot: t.sourceMapRoot,
                          })),
                          t.sourceContent &&
                              u.map.setSourceContent(
                                  t.sourceMap,
                                  t.sourceContent
                              ),
                          t.sourceMapWithCode ? u : u.map.toString())
                        : ((u = { code: i.toString(), map: null }),
                          t.sourceMapWithCode ? u : u.code)
                );
            },
            ne =
                (O({}, c),
                {
                    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                    5: "class enum extends super const export import",
                    6: "enum",
                    strict:
                        "implements interface let package private protected public static yield",
                    strictBind: "eval arguments",
                }),
            ae =
                "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            oe = {
                5: ae,
                "5module": ae + " export import",
                6: ae + " const class extends export import super",
            },
            he = /^in(stanceof)?$/,
            pe =
                "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
            ce =
                "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",
            le = new RegExp("[" + pe + "]"),
            De = new RegExp("[" + pe + ce + "]");
        pe = ce = null;
        var de = [
                0,
                11,
                2,
                25,
                2,
                18,
                2,
                1,
                2,
                14,
                3,
                13,
                35,
                122,
                70,
                52,
                268,
                28,
                4,
                48,
                48,
                31,
                14,
                29,
                6,
                37,
                11,
                29,
                3,
                35,
                5,
                7,
                2,
                4,
                43,
                157,
                19,
                35,
                5,
                35,
                5,
                39,
                9,
                51,
                157,
                310,
                10,
                21,
                11,
                7,
                153,
                5,
                3,
                0,
                2,
                43,
                2,
                1,
                4,
                0,
                3,
                22,
                11,
                22,
                10,
                30,
                66,
                18,
                2,
                1,
                11,
                21,
                11,
                25,
                71,
                55,
                7,
                1,
                65,
                0,
                16,
                3,
                2,
                2,
                2,
                28,
                43,
                28,
                4,
                28,
                36,
                7,
                2,
                27,
                28,
                53,
                11,
                21,
                11,
                18,
                14,
                17,
                111,
                72,
                56,
                50,
                14,
                50,
                14,
                35,
                477,
                28,
                11,
                0,
                9,
                21,
                155,
                22,
                13,
                52,
                76,
                44,
                33,
                24,
                27,
                35,
                30,
                0,
                12,
                34,
                4,
                0,
                13,
                47,
                15,
                3,
                22,
                0,
                2,
                0,
                36,
                17,
                2,
                24,
                85,
                6,
                2,
                0,
                2,
                3,
                2,
                14,
                2,
                9,
                8,
                46,
                39,
                7,
                3,
                1,
                3,
                21,
                2,
                6,
                2,
                1,
                2,
                4,
                4,
                0,
                19,
                0,
                13,
                4,
                159,
                52,
                19,
                3,
                21,
                0,
                33,
                47,
                21,
                1,
                2,
                0,
                185,
                46,
                42,
                3,
                37,
                47,
                21,
                0,
                60,
                42,
                14,
                0,
                72,
                26,
                230,
                43,
                117,
                63,
                32,
                0,
                161,
                7,
                3,
                38,
                17,
                0,
                2,
                0,
                29,
                0,
                11,
                39,
                8,
                0,
                22,
                0,
                12,
                45,
                20,
                0,
                35,
                56,
                264,
                8,
                2,
                36,
                18,
                0,
                50,
                29,
                113,
                6,
                2,
                1,
                2,
                37,
                22,
                0,
                26,
                5,
                2,
                1,
                2,
                31,
                15,
                0,
                328,
                18,
                270,
                921,
                103,
                110,
                18,
                195,
                2749,
                1070,
                4050,
                582,
                8634,
                568,
                8,
                30,
                114,
                29,
                19,
                47,
                17,
                3,
                32,
                20,
                6,
                18,
                689,
                63,
                129,
                74,
                6,
                0,
                67,
                12,
                65,
                1,
                2,
                0,
                29,
                6135,
                9,
                754,
                9486,
                286,
                50,
                2,
                18,
                3,
                9,
                395,
                2309,
                106,
                6,
                12,
                4,
                8,
                8,
                9,
                5991,
                84,
                2,
                70,
                2,
                1,
                3,
                0,
                3,
                1,
                3,
                3,
                2,
                11,
                2,
                0,
                2,
                6,
                2,
                64,
                2,
                3,
                3,
                7,
                2,
                6,
                2,
                27,
                2,
                3,
                2,
                4,
                2,
                0,
                4,
                6,
                2,
                339,
                3,
                24,
                2,
                24,
                2,
                30,
                2,
                24,
                2,
                30,
                2,
                24,
                2,
                30,
                2,
                24,
                2,
                30,
                2,
                24,
                2,
                7,
                2357,
                44,
                11,
                6,
                17,
                0,
                370,
                43,
                1301,
                196,
                60,
                67,
                8,
                0,
                1205,
                3,
                2,
                26,
                2,
                1,
                2,
                0,
                3,
                0,
                2,
                9,
                2,
                3,
                2,
                0,
                2,
                0,
                7,
                0,
                5,
                0,
                2,
                0,
                2,
                0,
                2,
                2,
                2,
                1,
                2,
                0,
                3,
                0,
                2,
                0,
                2,
                0,
                2,
                0,
                2,
                0,
                2,
                1,
                2,
                0,
                3,
                3,
                2,
                6,
                2,
                3,
                2,
                3,
                2,
                0,
                2,
                9,
                2,
                16,
                6,
                2,
                2,
                4,
                2,
                16,
                4421,
                42710,
                42,
                4148,
                12,
                221,
                3,
                5761,
                15,
                7472,
                3104,
                541,
            ],
            Ae = [
                509,
                0,
                227,
                0,
                150,
                4,
                294,
                9,
                1368,
                2,
                2,
                1,
                6,
                3,
                41,
                2,
                5,
                0,
                166,
                1,
                574,
                3,
                9,
                9,
                525,
                10,
                176,
                2,
                54,
                14,
                32,
                9,
                16,
                3,
                46,
                10,
                54,
                9,
                7,
                2,
                37,
                13,
                2,
                9,
                6,
                1,
                45,
                0,
                13,
                2,
                49,
                13,
                9,
                3,
                4,
                9,
                83,
                11,
                7,
                0,
                161,
                11,
                6,
                9,
                7,
                3,
                56,
                1,
                2,
                6,
                3,
                1,
                3,
                2,
                10,
                0,
                11,
                1,
                3,
                6,
                4,
                4,
                193,
                17,
                10,
                9,
                5,
                0,
                82,
                19,
                13,
                9,
                214,
                6,
                3,
                8,
                28,
                1,
                83,
                16,
                16,
                9,
                82,
                12,
                9,
                9,
                84,
                14,
                5,
                9,
                243,
                14,
                166,
                9,
                232,
                6,
                3,
                6,
                4,
                0,
                29,
                9,
                41,
                6,
                2,
                3,
                9,
                0,
                10,
                10,
                47,
                15,
                406,
                7,
                2,
                7,
                17,
                9,
                57,
                21,
                2,
                13,
                123,
                5,
                4,
                0,
                2,
                1,
                2,
                6,
                2,
                0,
                9,
                9,
                49,
                4,
                2,
                1,
                2,
                4,
                9,
                9,
                330,
                3,
                19306,
                9,
                135,
                4,
                60,
                6,
                26,
                9,
                1014,
                0,
                2,
                54,
                8,
                3,
                19723,
                1,
                5319,
                4,
                4,
                5,
                9,
                7,
                3,
                6,
                31,
                3,
                149,
                2,
                1418,
                49,
                513,
                54,
                5,
                49,
                9,
                0,
                15,
                0,
                23,
                4,
                2,
                14,
                1361,
                6,
                2,
                16,
                3,
                6,
                2,
                1,
                2,
                4,
                262,
                6,
                10,
                9,
                419,
                13,
                1495,
                6,
                110,
                6,
                6,
                9,
                792487,
                239,
            ];
        function fe(e, t) {
            for (var i = 65536, u = 0; u < t.length; u += 2) {
                if ((i += t[u]) > e) return !1;
                if ((i += t[u + 1]) >= e) return !0;
            }
        }
        function Ce(e, t) {
            return e < 65
                ? 36 === e
                : e < 91 ||
                      (e < 97
                          ? 95 === e
                          : e < 123 ||
                            (e <= 65535
                                ? e >= 170 && le.test(String.fromCharCode(e))
                                : !1 !== t && fe(e, de)));
        }
        function me(e, t) {
            return e < 48
                ? 36 === e
                : e < 58 ||
                      (!(e < 65) &&
                          (e < 91 ||
                              (e < 97
                                  ? 95 === e
                                  : e < 123 ||
                                    (e <= 65535
                                        ? e >= 170 &&
                                          De.test(String.fromCharCode(e))
                                        : !1 !== t &&
                                          (fe(e, de) || fe(e, Ae))))));
        }
        var Ee = function (e, t) {
            void 0 === t && (t = {}),
                (this.label = e),
                (this.keyword = t.keyword),
                (this.beforeExpr = !!t.beforeExpr),
                (this.startsExpr = !!t.startsExpr),
                (this.isLoop = !!t.isLoop),
                (this.isAssign = !!t.isAssign),
                (this.prefix = !!t.prefix),
                (this.postfix = !!t.postfix),
                (this.binop = t.binop || null),
                (this.updateContext = null);
        };
        function Fe(e, t) {
            return new Ee(e, { beforeExpr: !0, binop: t });
        }
        var ge = { beforeExpr: !0 },
            xe = { startsExpr: !0 },
            Be = {};
        function ye(e, t) {
            return (
                void 0 === t && (t = {}),
                (t.keyword = e),
                (Be[e] = new Ee(e, t))
            );
        }
        var ve = {
                num: new Ee("num", xe),
                regexp: new Ee("regexp", xe),
                string: new Ee("string", xe),
                name: new Ee("name", xe),
                eof: new Ee("eof"),
                bracketL: new Ee("[", { beforeExpr: !0, startsExpr: !0 }),
                bracketR: new Ee("]"),
                braceL: new Ee("{", { beforeExpr: !0, startsExpr: !0 }),
                braceR: new Ee("}"),
                parenL: new Ee("(", { beforeExpr: !0, startsExpr: !0 }),
                parenR: new Ee(")"),
                comma: new Ee(",", ge),
                semi: new Ee(";", ge),
                colon: new Ee(":", ge),
                dot: new Ee("."),
                question: new Ee("?", ge),
                arrow: new Ee("=>", ge),
                template: new Ee("template"),
                invalidTemplate: new Ee("invalidTemplate"),
                ellipsis: new Ee("...", ge),
                backQuote: new Ee("`", xe),
                dollarBraceL: new Ee("${", { beforeExpr: !0, startsExpr: !0 }),
                eq: new Ee("=", { beforeExpr: !0, isAssign: !0 }),
                assign: new Ee("_=", { beforeExpr: !0, isAssign: !0 }),
                incDec: new Ee("++/--", {
                    prefix: !0,
                    postfix: !0,
                    startsExpr: !0,
                }),
                prefix: new Ee("!/~", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                }),
                logicalOR: Fe("||", 1),
                logicalAND: Fe("&&", 2),
                bitwiseOR: Fe("|", 3),
                bitwiseXOR: Fe("^", 4),
                bitwiseAND: Fe("&", 5),
                equality: Fe("==/!=/===/!==", 6),
                relational: Fe("</>/<=/>=", 7),
                bitShift: Fe("<</>>/>>>", 8),
                plusMin: new Ee("+/-", {
                    beforeExpr: !0,
                    binop: 9,
                    prefix: !0,
                    startsExpr: !0,
                }),
                modulo: Fe("%", 10),
                star: Fe("*", 10),
                slash: Fe("/", 10),
                starstar: new Ee("**", { beforeExpr: !0 }),
                _break: ye("break"),
                _case: ye("case", ge),
                _catch: ye("catch"),
                _continue: ye("continue"),
                _debugger: ye("debugger"),
                _default: ye("default", ge),
                _do: ye("do", { isLoop: !0, beforeExpr: !0 }),
                _else: ye("else", ge),
                _finally: ye("finally"),
                _for: ye("for", { isLoop: !0 }),
                _function: ye("function", xe),
                _if: ye("if"),
                _return: ye("return", ge),
                _switch: ye("switch"),
                _throw: ye("throw", ge),
                _try: ye("try"),
                _var: ye("var"),
                _const: ye("const"),
                _while: ye("while", { isLoop: !0 }),
                _with: ye("with"),
                _new: ye("new", { beforeExpr: !0, startsExpr: !0 }),
                _this: ye("this", xe),
                _super: ye("super", xe),
                _class: ye("class", xe),
                _extends: ye("extends", ge),
                _export: ye("export"),
                _import: ye("import", xe),
                _null: ye("null", xe),
                _true: ye("true", xe),
                _false: ye("false", xe),
                _in: ye("in", { beforeExpr: !0, binop: 7 }),
                _instanceof: ye("instanceof", { beforeExpr: !0, binop: 7 }),
                _typeof: ye("typeof", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                }),
                _void: ye("void", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                }),
                _delete: ye("delete", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                }),
            },
            Se = /\r\n?|\n|\u2028|\u2029/,
            be = new RegExp(Se.source, "g");
        function _e(e, t) {
            return 10 === e || 13 === e || (!t && (8232 === e || 8233 === e));
        }
        var ke = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            we = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            Ie = Object.prototype,
            Pe = Ie.hasOwnProperty,
            Te = Ie.toString;
        function Le(e, t) {
            return Pe.call(e, t);
        }
        var Ne =
            Array.isArray ||
            function (e) {
                return "[object Array]" === Te.call(e);
            };
        function Ve(e) {
            return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
        }
        var Re = function (e, t) {
            (this.line = e), (this.column = t);
        };
        Re.prototype.offset = function (e) {
            return new Re(this.line, this.column + e);
        };
        var Me = function (e, t, i) {
            (this.start = t),
                (this.end = i),
                null !== e.sourceFile && (this.source = e.sourceFile);
        };
        var Oe = {
            ecmaVersion: 10,
            sourceType: "script",
            onInsertedSemicolon: null,
            onTrailingComma: null,
            allowReserved: null,
            allowReturnOutsideFunction: !1,
            allowImportExportEverywhere: !1,
            allowAwaitOutsideFunction: !1,
            allowHashBang: !1,
            locations: !1,
            onToken: null,
            onComment: null,
            ranges: !1,
            program: null,
            sourceFile: null,
            directSourceFile: null,
            preserveParens: !1,
        };
        function qe(e) {
            var t = {};
            for (var i in Oe) t[i] = e && Le(e, i) ? e[i] : Oe[i];
            if (
                (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
                null == t.allowReserved &&
                    (t.allowReserved = t.ecmaVersion < 5),
                Ne(t.onToken))
            ) {
                var u = t.onToken;
                t.onToken = function (e) {
                    return u.push(e);
                };
            }
            return (
                Ne(t.onComment) &&
                    (t.onComment = (function (e, t) {
                        return function (i, u, s, r, n, a) {
                            var o = {
                                type: i ? "Block" : "Line",
                                value: u,
                                start: s,
                                end: r,
                            };
                            e.locations && (o.loc = new Me(this, n, a)),
                                e.ranges && (o.range = [s, r]),
                                t.push(o);
                        };
                    })(t, t.onComment)),
                t
            );
        }
        var Ue = 2,
            We = 1 | Ue,
            je = 4,
            He = 8;
        function Ge(e, t) {
            return Ue | (e ? je : 0) | (t ? He : 0);
        }
        var Ke = function (e, t, i) {
                (this.options = e = qe(e)),
                    (this.sourceFile = e.sourceFile),
                    (this.keywords = Ve(
                        oe[
                            e.ecmaVersion >= 6
                                ? 6
                                : "module" === e.sourceType
                                ? "5module"
                                : 5
                        ]
                    ));
                var u = "";
                if (!0 !== e.allowReserved) {
                    for (var s = e.ecmaVersion; !(u = ne[s]); s--);
                    "module" === e.sourceType && (u += " await");
                }
                this.reservedWords = Ve(u);
                var r = (u ? u + " " : "") + ne.strict;
                (this.reservedWordsStrict = Ve(r)),
                    (this.reservedWordsStrictBind = Ve(
                        r + " " + ne.strictBind
                    )),
                    (this.input = String(t)),
                    (this.containsEsc = !1),
                    i
                        ? ((this.pos = i),
                          (this.lineStart =
                              this.input.lastIndexOf("\n", i - 1) + 1),
                          (this.curLine = this.input
                              .slice(0, this.lineStart)
                              .split(Se).length))
                        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                    (this.type = ve.eof),
                    (this.value = null),
                    (this.start = this.end = this.pos),
                    (this.startLoc = this.endLoc = this.curPosition()),
                    (this.lastTokEndLoc = this.lastTokStartLoc = null),
                    (this.lastTokStart = this.lastTokEnd = this.pos),
                    (this.context = this.initialContext()),
                    (this.exprAllowed = !0),
                    (this.inModule = "module" === e.sourceType),
                    (this.strict =
                        this.inModule || this.strictDirective(this.pos)),
                    (this.potentialArrowAt = -1),
                    (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                    (this.labels = []),
                    (this.undefinedExports = {}),
                    0 === this.pos &&
                        e.allowHashBang &&
                        "#!" === this.input.slice(0, 2) &&
                        this.skipLineComment(2),
                    (this.scopeStack = []),
                    this.enterScope(1),
                    (this.regexpState = null);
            },
            ze = {
                inFunction: { configurable: !0 },
                inGenerator: { configurable: !0 },
                inAsync: { configurable: !0 },
                allowSuper: { configurable: !0 },
                allowDirectSuper: { configurable: !0 },
                treatFunctionsAsVar: { configurable: !0 },
            };
        (Ke.prototype.parse = function () {
            var e = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(e);
        }),
            (ze.inFunction.get = function () {
                return (this.currentVarScope().flags & Ue) > 0;
            }),
            (ze.inGenerator.get = function () {
                return (this.currentVarScope().flags & He) > 0;
            }),
            (ze.inAsync.get = function () {
                return (this.currentVarScope().flags & je) > 0;
            }),
            (ze.allowSuper.get = function () {
                return (64 & this.currentThisScope().flags) > 0;
            }),
            (ze.allowDirectSuper.get = function () {
                return (128 & this.currentThisScope().flags) > 0;
            }),
            (ze.treatFunctionsAsVar.get = function () {
                return this.treatFunctionsAsVarInScope(this.currentScope());
            }),
            (Ke.prototype.inNonArrowFunction = function () {
                return (this.currentThisScope().flags & Ue) > 0;
            }),
            (Ke.extend = function () {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                for (var i = this, u = 0; u < e.length; u++) i = e[u](i);
                return i;
            }),
            (Ke.parse = function (e, t) {
                return new this(t, e).parse();
            }),
            (Ke.parseExpressionAt = function (e, t, i) {
                var u = new this(i, e, t);
                return u.nextToken(), u.parseExpression();
            }),
            (Ke.tokenizer = function (e, t) {
                return new this(t, e);
            }),
            Object.defineProperties(Ke.prototype, ze);
        var Qe = Ke.prototype,
            Xe = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
        function Ye() {
            this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
        }
        (Qe.strictDirective = function (e) {
            for (;;) {
                (we.lastIndex = e), (e += we.exec(this.input)[0].length);
                var t = Xe.exec(this.input.slice(e));
                if (!t) return !1;
                if ("use strict" === (t[1] || t[2])) return !0;
                (e += t[0].length),
                    (we.lastIndex = e),
                    (e += we.exec(this.input)[0].length),
                    ";" === this.input[e] && e++;
            }
        }),
            (Qe.eat = function (e) {
                return this.type === e && (this.next(), !0);
            }),
            (Qe.isContextual = function (e) {
                return (
                    this.type === ve.name &&
                    this.value === e &&
                    !this.containsEsc
                );
            }),
            (Qe.eatContextual = function (e) {
                return !!this.isContextual(e) && (this.next(), !0);
            }),
            (Qe.expectContextual = function (e) {
                this.eatContextual(e) || this.unexpected();
            }),
            (Qe.canInsertSemicolon = function () {
                return (
                    this.type === ve.eof ||
                    this.type === ve.braceR ||
                    Se.test(this.input.slice(this.lastTokEnd, this.start))
                );
            }),
            (Qe.insertSemicolon = function () {
                if (this.canInsertSemicolon())
                    return (
                        this.options.onInsertedSemicolon &&
                            this.options.onInsertedSemicolon(
                                this.lastTokEnd,
                                this.lastTokEndLoc
                            ),
                        !0
                    );
            }),
            (Qe.semicolon = function () {
                this.eat(ve.semi) ||
                    this.insertSemicolon() ||
                    this.unexpected();
            }),
            (Qe.afterTrailingComma = function (e, t) {
                if (this.type === e)
                    return (
                        this.options.onTrailingComma &&
                            this.options.onTrailingComma(
                                this.lastTokStart,
                                this.lastTokStartLoc
                            ),
                        t || this.next(),
                        !0
                    );
            }),
            (Qe.expect = function (e) {
                this.eat(e) || this.unexpected();
            }),
            (Qe.unexpected = function (e) {
                this.raise(null != e ? e : this.start, "Unexpected token");
            }),
            (Qe.checkPatternErrors = function (e, t) {
                if (e) {
                    e.trailingComma > -1 &&
                        this.raiseRecoverable(
                            e.trailingComma,
                            "Comma is not permitted after the rest element"
                        );
                    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
                    i > -1 && this.raiseRecoverable(i, "Parenthesized pattern");
                }
            }),
            (Qe.checkExpressionErrors = function (e, t) {
                if (!e) return !1;
                var i = e.shorthandAssign,
                    u = e.doubleProto;
                if (!t) return i >= 0 || u >= 0;
                i >= 0 &&
                    this.raise(
                        i,
                        "Shorthand property assignments are valid only in destructuring patterns"
                    ),
                    u >= 0 &&
                        this.raiseRecoverable(
                            u,
                            "Redefinition of __proto__ property"
                        );
            }),
            (Qe.checkYieldAwaitInDefaultParams = function () {
                this.yieldPos &&
                    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                    this.raise(
                        this.yieldPos,
                        "Yield expression cannot be a default value"
                    ),
                    this.awaitPos &&
                        this.raise(
                            this.awaitPos,
                            "Await expression cannot be a default value"
                        );
            }),
            (Qe.isSimpleAssignTarget = function (e) {
                return "ParenthesizedExpression" === e.type
                    ? this.isSimpleAssignTarget(e.expression)
                    : "Identifier" === e.type || "MemberExpression" === e.type;
            });
        var Ze = Ke.prototype;
        Ze.parseTopLevel = function (e) {
            var t = {};
            for (e.body || (e.body = []); this.type !== ve.eof; ) {
                var i = this.parseStatement(null, !0, t);
                e.body.push(i);
            }
            if (this.inModule)
                for (
                    var u = 0, s = Object.keys(this.undefinedExports);
                    u < s.length;
                    u += 1
                ) {
                    var r = s[u];
                    this.raiseRecoverable(
                        this.undefinedExports[r].start,
                        "Export '" + r + "' is not defined"
                    );
                }
            return (
                this.adaptDirectivePrologue(e.body),
                this.next(),
                (e.sourceType = this.options.sourceType),
                this.finishNode(e, "Program")
            );
        };
        var $e = { kind: "loop" },
            Je = { kind: "switch" };
        (Ze.isLet = function (e) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
                return !1;
            we.lastIndex = this.pos;
            var t = we.exec(this.input),
                i = this.pos + t[0].length,
                u = this.input.charCodeAt(i);
            if (91 === u) return !0;
            if (e) return !1;
            if (123 === u) return !0;
            if (Ce(u, !0)) {
                for (var s = i + 1; me(this.input.charCodeAt(s), !0); ) ++s;
                var r = this.input.slice(i, s);
                if (!he.test(r)) return !0;
            }
            return !1;
        }),
            (Ze.isAsyncFunction = function () {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
                    return !1;
                we.lastIndex = this.pos;
                var e = we.exec(this.input),
                    t = this.pos + e[0].length;
                return (
                    !Se.test(this.input.slice(this.pos, t)) &&
                    "function" === this.input.slice(t, t + 8) &&
                    (t + 8 === this.input.length ||
                        !me(this.input.charAt(t + 8)))
                );
            }),
            (Ze.parseStatement = function (e, t, i) {
                var u,
                    s = this.type,
                    r = this.startNode();
                switch ((this.isLet(e) && ((s = ve._var), (u = "let")), s)) {
                    case ve._break:
                    case ve._continue:
                        return this.parseBreakContinueStatement(r, s.keyword);
                    case ve._debugger:
                        return this.parseDebuggerStatement(r);
                    case ve._do:
                        return this.parseDoStatement(r);
                    case ve._for:
                        return this.parseForStatement(r);
                    case ve._function:
                        return (
                            e &&
                                (this.strict ||
                                    ("if" !== e && "label" !== e)) &&
                                this.options.ecmaVersion >= 6 &&
                                this.unexpected(),
                            this.parseFunctionStatement(r, !1, !e)
                        );
                    case ve._class:
                        return e && this.unexpected(), this.parseClass(r, !0);
                    case ve._if:
                        return this.parseIfStatement(r);
                    case ve._return:
                        return this.parseReturnStatement(r);
                    case ve._switch:
                        return this.parseSwitchStatement(r);
                    case ve._throw:
                        return this.parseThrowStatement(r);
                    case ve._try:
                        return this.parseTryStatement(r);
                    case ve._const:
                    case ve._var:
                        return (
                            (u = u || this.value),
                            e && "var" !== u && this.unexpected(),
                            this.parseVarStatement(r, u)
                        );
                    case ve._while:
                        return this.parseWhileStatement(r);
                    case ve._with:
                        return this.parseWithStatement(r);
                    case ve.braceL:
                        return this.parseBlock(!0, r);
                    case ve.semi:
                        return this.parseEmptyStatement(r);
                    case ve._export:
                    case ve._import:
                        if (this.options.ecmaVersion > 10 && s === ve._import) {
                            we.lastIndex = this.pos;
                            var n = we.exec(this.input),
                                a = this.pos + n[0].length;
                            if (40 === this.input.charCodeAt(a))
                                return this.parseExpressionStatement(
                                    r,
                                    this.parseExpression()
                                );
                        }
                        return (
                            this.options.allowImportExportEverywhere ||
                                (t ||
                                    this.raise(
                                        this.start,
                                        "'import' and 'export' may only appear at the top level"
                                    ),
                                this.inModule ||
                                    this.raise(
                                        this.start,
                                        "'import' and 'export' may appear only with 'sourceType: module'"
                                    )),
                            s === ve._import
                                ? this.parseImport(r)
                                : this.parseExport(r, i)
                        );
                    default:
                        if (this.isAsyncFunction())
                            return (
                                e && this.unexpected(),
                                this.next(),
                                this.parseFunctionStatement(r, !0, !e)
                            );
                        var o = this.value,
                            h = this.parseExpression();
                        return s === ve.name &&
                            "Identifier" === h.type &&
                            this.eat(ve.colon)
                            ? this.parseLabeledStatement(r, o, h, e)
                            : this.parseExpressionStatement(r, h);
                }
            }),
            (Ze.parseBreakContinueStatement = function (e, t) {
                var i = "break" === t;
                this.next(),
                    this.eat(ve.semi) || this.insertSemicolon()
                        ? (e.label = null)
                        : this.type !== ve.name
                        ? this.unexpected()
                        : ((e.label = this.parseIdent()), this.semicolon());
                for (var u = 0; u < this.labels.length; ++u) {
                    var s = this.labels[u];
                    if (null == e.label || s.name === e.label.name) {
                        if (null != s.kind && (i || "loop" === s.kind)) break;
                        if (e.label && i) break;
                    }
                }
                return (
                    u === this.labels.length &&
                        this.raise(e.start, "Unsyntactic " + t),
                    this.finishNode(
                        e,
                        i ? "BreakStatement" : "ContinueStatement"
                    )
                );
            }),
            (Ze.parseDebuggerStatement = function (e) {
                return (
                    this.next(),
                    this.semicolon(),
                    this.finishNode(e, "DebuggerStatement")
                );
            }),
            (Ze.parseDoStatement = function (e) {
                return (
                    this.next(),
                    this.labels.push($e),
                    (e.body = this.parseStatement("do")),
                    this.labels.pop(),
                    this.expect(ve._while),
                    (e.test = this.parseParenExpression()),
                    this.options.ecmaVersion >= 6
                        ? this.eat(ve.semi)
                        : this.semicolon(),
                    this.finishNode(e, "DoWhileStatement")
                );
            }),
            (Ze.parseForStatement = function (e) {
                this.next();
                var t =
                    this.options.ecmaVersion >= 9 &&
                    (this.inAsync ||
                        (!this.inFunction &&
                            this.options.allowAwaitOutsideFunction)) &&
                    this.eatContextual("await")
                        ? this.lastTokStart
                        : -1;
                if (
                    (this.labels.push($e),
                    this.enterScope(0),
                    this.expect(ve.parenL),
                    this.type === ve.semi)
                )
                    return t > -1 && this.unexpected(t), this.parseFor(e, null);
                var i = this.isLet();
                if (this.type === ve._var || this.type === ve._const || i) {
                    var u = this.startNode(),
                        s = i ? "let" : this.value;
                    return (
                        this.next(),
                        this.parseVar(u, !0, s),
                        this.finishNode(u, "VariableDeclaration"),
                        (this.type === ve._in ||
                            (this.options.ecmaVersion >= 6 &&
                                this.isContextual("of"))) &&
                        1 === u.declarations.length
                            ? (this.options.ecmaVersion >= 9 &&
                                  (this.type === ve._in
                                      ? t > -1 && this.unexpected(t)
                                      : (e.await = t > -1)),
                              this.parseForIn(e, u))
                            : (t > -1 && this.unexpected(t),
                              this.parseFor(e, u))
                    );
                }
                var r = new Ye(),
                    n = this.parseExpression(!0, r);
                return this.type === ve._in ||
                    (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                    ? (this.options.ecmaVersion >= 9 &&
                          (this.type === ve._in
                              ? t > -1 && this.unexpected(t)
                              : (e.await = t > -1)),
                      this.toAssignable(n, !1, r),
                      this.checkLVal(n),
                      this.parseForIn(e, n))
                    : (this.checkExpressionErrors(r, !0),
                      t > -1 && this.unexpected(t),
                      this.parseFor(e, n));
            }),
            (Ze.parseFunctionStatement = function (e, t, i) {
                return (
                    this.next(), this.parseFunction(e, tt | (i ? 0 : it), !1, t)
                );
            }),
            (Ze.parseIfStatement = function (e) {
                return (
                    this.next(),
                    (e.test = this.parseParenExpression()),
                    (e.consequent = this.parseStatement("if")),
                    (e.alternate = this.eat(ve._else)
                        ? this.parseStatement("if")
                        : null),
                    this.finishNode(e, "IfStatement")
                );
            }),
            (Ze.parseReturnStatement = function (e) {
                return (
                    this.inFunction ||
                        this.options.allowReturnOutsideFunction ||
                        this.raise(this.start, "'return' outside of function"),
                    this.next(),
                    this.eat(ve.semi) || this.insertSemicolon()
                        ? (e.argument = null)
                        : ((e.argument = this.parseExpression()),
                          this.semicolon()),
                    this.finishNode(e, "ReturnStatement")
                );
            }),
            (Ze.parseSwitchStatement = function (e) {
                var t;
                this.next(),
                    (e.discriminant = this.parseParenExpression()),
                    (e.cases = []),
                    this.expect(ve.braceL),
                    this.labels.push(Je),
                    this.enterScope(0);
                for (var i = !1; this.type !== ve.braceR; )
                    if (this.type === ve._case || this.type === ve._default) {
                        var u = this.type === ve._case;
                        t && this.finishNode(t, "SwitchCase"),
                            e.cases.push((t = this.startNode())),
                            (t.consequent = []),
                            this.next(),
                            u
                                ? (t.test = this.parseExpression())
                                : (i &&
                                      this.raiseRecoverable(
                                          this.lastTokStart,
                                          "Multiple default clauses"
                                      ),
                                  (i = !0),
                                  (t.test = null)),
                            this.expect(ve.colon);
                    } else
                        t || this.unexpected(),
                            t.consequent.push(this.parseStatement(null));
                return (
                    this.exitScope(),
                    t && this.finishNode(t, "SwitchCase"),
                    this.next(),
                    this.labels.pop(),
                    this.finishNode(e, "SwitchStatement")
                );
            }),
            (Ze.parseThrowStatement = function (e) {
                return (
                    this.next(),
                    Se.test(this.input.slice(this.lastTokEnd, this.start)) &&
                        this.raise(
                            this.lastTokEnd,
                            "Illegal newline after throw"
                        ),
                    (e.argument = this.parseExpression()),
                    this.semicolon(),
                    this.finishNode(e, "ThrowStatement")
                );
            });
        var et = [];
        (Ze.parseTryStatement = function (e) {
            if (
                (this.next(),
                (e.block = this.parseBlock()),
                (e.handler = null),
                this.type === ve._catch)
            ) {
                var t = this.startNode();
                if ((this.next(), this.eat(ve.parenL))) {
                    t.param = this.parseBindingAtom();
                    var i = "Identifier" === t.param.type;
                    this.enterScope(i ? 32 : 0),
                        this.checkLVal(t.param, i ? 4 : 2),
                        this.expect(ve.parenR);
                } else
                    this.options.ecmaVersion < 10 && this.unexpected(),
                        (t.param = null),
                        this.enterScope(0);
                (t.body = this.parseBlock(!1)),
                    this.exitScope(),
                    (e.handler = this.finishNode(t, "CatchClause"));
            }
            return (
                (e.finalizer = this.eat(ve._finally)
                    ? this.parseBlock()
                    : null),
                e.handler ||
                    e.finalizer ||
                    this.raise(e.start, "Missing catch or finally clause"),
                this.finishNode(e, "TryStatement")
            );
        }),
            (Ze.parseVarStatement = function (e, t) {
                return (
                    this.next(),
                    this.parseVar(e, !1, t),
                    this.semicolon(),
                    this.finishNode(e, "VariableDeclaration")
                );
            }),
            (Ze.parseWhileStatement = function (e) {
                return (
                    this.next(),
                    (e.test = this.parseParenExpression()),
                    this.labels.push($e),
                    (e.body = this.parseStatement("while")),
                    this.labels.pop(),
                    this.finishNode(e, "WhileStatement")
                );
            }),
            (Ze.parseWithStatement = function (e) {
                return (
                    this.strict &&
                        this.raise(this.start, "'with' in strict mode"),
                    this.next(),
                    (e.object = this.parseParenExpression()),
                    (e.body = this.parseStatement("with")),
                    this.finishNode(e, "WithStatement")
                );
            }),
            (Ze.parseEmptyStatement = function (e) {
                return this.next(), this.finishNode(e, "EmptyStatement");
            }),
            (Ze.parseLabeledStatement = function (e, t, i, u) {
                for (var s = 0, r = this.labels; s < r.length; s += 1) {
                    r[s].name === t &&
                        this.raise(
                            i.start,
                            "Label '" + t + "' is already declared"
                        );
                }
                for (
                    var n = this.type.isLoop
                            ? "loop"
                            : this.type === ve._switch
                            ? "switch"
                            : null,
                        a = this.labels.length - 1;
                    a >= 0;
                    a--
                ) {
                    var o = this.labels[a];
                    if (o.statementStart !== e.start) break;
                    (o.statementStart = this.start), (o.kind = n);
                }
                return (
                    this.labels.push({
                        name: t,
                        kind: n,
                        statementStart: this.start,
                    }),
                    (e.body = this.parseStatement(
                        u
                            ? -1 === u.indexOf("label")
                                ? u + "label"
                                : u
                            : "label"
                    )),
                    this.labels.pop(),
                    (e.label = i),
                    this.finishNode(e, "LabeledStatement")
                );
            }),
            (Ze.parseExpressionStatement = function (e, t) {
                return (
                    (e.expression = t),
                    this.semicolon(),
                    this.finishNode(e, "ExpressionStatement")
                );
            }),
            (Ze.parseBlock = function (e, t) {
                for (
                    void 0 === e && (e = !0),
                        void 0 === t && (t = this.startNode()),
                        t.body = [],
                        this.expect(ve.braceL),
                        e && this.enterScope(0);
                    !this.eat(ve.braceR);

                ) {
                    var i = this.parseStatement(null);
                    t.body.push(i);
                }
                return (
                    e && this.exitScope(), this.finishNode(t, "BlockStatement")
                );
            }),
            (Ze.parseFor = function (e, t) {
                return (
                    (e.init = t),
                    this.expect(ve.semi),
                    (e.test =
                        this.type === ve.semi ? null : this.parseExpression()),
                    this.expect(ve.semi),
                    (e.update =
                        this.type === ve.parenR
                            ? null
                            : this.parseExpression()),
                    this.expect(ve.parenR),
                    (e.body = this.parseStatement("for")),
                    this.exitScope(),
                    this.labels.pop(),
                    this.finishNode(e, "ForStatement")
                );
            }),
            (Ze.parseForIn = function (e, t) {
                var i = this.type === ve._in;
                return (
                    this.next(),
                    "VariableDeclaration" === t.type &&
                    null != t.declarations[0].init &&
                    (!i ||
                        this.options.ecmaVersion < 8 ||
                        this.strict ||
                        "var" !== t.kind ||
                        "Identifier" !== t.declarations[0].id.type)
                        ? this.raise(
                              t.start,
                              (i ? "for-in" : "for-of") +
                                  " loop variable declaration may not have an initializer"
                          )
                        : "AssignmentPattern" === t.type &&
                          this.raise(
                              t.start,
                              "Invalid left-hand side in for-loop"
                          ),
                    (e.left = t),
                    (e.right = i
                        ? this.parseExpression()
                        : this.parseMaybeAssign()),
                    this.expect(ve.parenR),
                    (e.body = this.parseStatement("for")),
                    this.exitScope(),
                    this.labels.pop(),
                    this.finishNode(e, i ? "ForInStatement" : "ForOfStatement")
                );
            }),
            (Ze.parseVar = function (e, t, i) {
                for (e.declarations = [], e.kind = i; ; ) {
                    var u = this.startNode();
                    if (
                        (this.parseVarId(u, i),
                        this.eat(ve.eq)
                            ? (u.init = this.parseMaybeAssign(t))
                            : "const" !== i ||
                              this.type === ve._in ||
                              (this.options.ecmaVersion >= 6 &&
                                  this.isContextual("of"))
                            ? "Identifier" === u.id.type ||
                              (t &&
                                  (this.type === ve._in ||
                                      this.isContextual("of")))
                                ? (u.init = null)
                                : this.raise(
                                      this.lastTokEnd,
                                      "Complex binding patterns require an initialization value"
                                  )
                            : this.unexpected(),
                        e.declarations.push(
                            this.finishNode(u, "VariableDeclarator")
                        ),
                        !this.eat(ve.comma))
                    )
                        break;
                }
                return e;
            }),
            (Ze.parseVarId = function (e, t) {
                (e.id = this.parseBindingAtom()),
                    this.checkLVal(e.id, "var" === t ? 1 : 2, !1);
            });
        var tt = 1,
            it = 2;
        (Ze.parseFunction = function (e, t, i, u) {
            this.initFunction(e),
                (this.options.ecmaVersion >= 9 ||
                    (this.options.ecmaVersion >= 6 && !u)) &&
                    (this.type === ve.star && t & it && this.unexpected(),
                    (e.generator = this.eat(ve.star))),
                this.options.ecmaVersion >= 8 && (e.async = !!u),
                t & tt &&
                    ((e.id =
                        4 & t && this.type !== ve.name
                            ? null
                            : this.parseIdent()),
                    !e.id ||
                        t & it ||
                        this.checkLVal(
                            e.id,
                            this.strict || e.generator || e.async
                                ? this.treatFunctionsAsVar
                                    ? 1
                                    : 2
                                : 3
                        ));
            var s = this.yieldPos,
                r = this.awaitPos,
                n = this.awaitIdentPos;
            return (
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                this.enterScope(Ge(e.async, e.generator)),
                t & tt ||
                    (e.id = this.type === ve.name ? this.parseIdent() : null),
                this.parseFunctionParams(e),
                this.parseFunctionBody(e, i, !1),
                (this.yieldPos = s),
                (this.awaitPos = r),
                (this.awaitIdentPos = n),
                this.finishNode(
                    e,
                    t & tt ? "FunctionDeclaration" : "FunctionExpression"
                )
            );
        }),
            (Ze.parseFunctionParams = function (e) {
                this.expect(ve.parenL),
                    (e.params = this.parseBindingList(
                        ve.parenR,
                        !1,
                        this.options.ecmaVersion >= 8
                    )),
                    this.checkYieldAwaitInDefaultParams();
            }),
            (Ze.parseClass = function (e, t) {
                this.next();
                var i = this.strict;
                (this.strict = !0),
                    this.parseClassId(e, t),
                    this.parseClassSuper(e);
                var u = this.startNode(),
                    s = !1;
                for (
                    u.body = [], this.expect(ve.braceL);
                    !this.eat(ve.braceR);

                ) {
                    var r = this.parseClassElement(null !== e.superClass);
                    r &&
                        (u.body.push(r),
                        "MethodDefinition" === r.type &&
                            "constructor" === r.kind &&
                            (s &&
                                this.raise(
                                    r.start,
                                    "Duplicate constructor in the same class"
                                ),
                            (s = !0)));
                }
                return (
                    (e.body = this.finishNode(u, "ClassBody")),
                    (this.strict = i),
                    this.finishNode(
                        e,
                        t ? "ClassDeclaration" : "ClassExpression"
                    )
                );
            }),
            (Ze.parseClassElement = function (e) {
                var t = this;
                if (this.eat(ve.semi)) return null;
                var i = this.startNode(),
                    u = function (e, u) {
                        void 0 === u && (u = !1);
                        var s = t.start,
                            r = t.startLoc;
                        return (
                            !!t.eatContextual(e) &&
                            (!(
                                t.type === ve.parenL ||
                                (u && t.canInsertSemicolon())
                            ) ||
                                (i.key && t.unexpected(),
                                (i.computed = !1),
                                (i.key = t.startNodeAt(s, r)),
                                (i.key.name = e),
                                t.finishNode(i.key, "Identifier"),
                                !1))
                        );
                    };
                (i.kind = "method"), (i.static = u("static"));
                var s = this.eat(ve.star),
                    r = !1;
                s ||
                    (this.options.ecmaVersion >= 8 && u("async", !0)
                        ? ((r = !0),
                          (s =
                              this.options.ecmaVersion >= 9 &&
                              this.eat(ve.star)))
                        : u("get")
                        ? (i.kind = "get")
                        : u("set") && (i.kind = "set")),
                    i.key || this.parsePropertyName(i);
                var n = i.key,
                    a = !1;
                return (
                    i.computed ||
                    i.static ||
                    !(
                        ("Identifier" === n.type && "constructor" === n.name) ||
                        ("Literal" === n.type && "constructor" === n.value)
                    )
                        ? i.static &&
                          "Identifier" === n.type &&
                          "prototype" === n.name &&
                          this.raise(
                              n.start,
                              "Classes may not have a static property named prototype"
                          )
                        : ("method" !== i.kind &&
                              this.raise(
                                  n.start,
                                  "Constructor can't have get/set modifier"
                              ),
                          s &&
                              this.raise(
                                  n.start,
                                  "Constructor can't be a generator"
                              ),
                          r &&
                              this.raise(
                                  n.start,
                                  "Constructor can't be an async method"
                              ),
                          (i.kind = "constructor"),
                          (a = e)),
                    this.parseClassMethod(i, s, r, a),
                    "get" === i.kind &&
                        0 !== i.value.params.length &&
                        this.raiseRecoverable(
                            i.value.start,
                            "getter should have no params"
                        ),
                    "set" === i.kind &&
                        1 !== i.value.params.length &&
                        this.raiseRecoverable(
                            i.value.start,
                            "setter should have exactly one param"
                        ),
                    "set" === i.kind &&
                        "RestElement" === i.value.params[0].type &&
                        this.raiseRecoverable(
                            i.value.params[0].start,
                            "Setter cannot use rest params"
                        ),
                    i
                );
            }),
            (Ze.parseClassMethod = function (e, t, i, u) {
                return (
                    (e.value = this.parseMethod(t, i, u)),
                    this.finishNode(e, "MethodDefinition")
                );
            }),
            (Ze.parseClassId = function (e, t) {
                this.type === ve.name
                    ? ((e.id = this.parseIdent()),
                      t && this.checkLVal(e.id, 2, !1))
                    : (!0 === t && this.unexpected(), (e.id = null));
            }),
            (Ze.parseClassSuper = function (e) {
                e.superClass = this.eat(ve._extends)
                    ? this.parseExprSubscripts()
                    : null;
            }),
            (Ze.parseExport = function (e, t) {
                if ((this.next(), this.eat(ve.star)))
                    return (
                        this.expectContextual("from"),
                        this.type !== ve.string && this.unexpected(),
                        (e.source = this.parseExprAtom()),
                        this.semicolon(),
                        this.finishNode(e, "ExportAllDeclaration")
                    );
                if (this.eat(ve._default)) {
                    var i;
                    if (
                        (this.checkExport(t, "default", this.lastTokStart),
                        this.type === ve._function ||
                            (i = this.isAsyncFunction()))
                    ) {
                        var u = this.startNode();
                        this.next(),
                            i && this.next(),
                            (e.declaration = this.parseFunction(
                                u,
                                4 | tt,
                                !1,
                                i
                            ));
                    } else if (this.type === ve._class) {
                        var s = this.startNode();
                        e.declaration = this.parseClass(s, "nullableID");
                    } else
                        (e.declaration = this.parseMaybeAssign()),
                            this.semicolon();
                    return this.finishNode(e, "ExportDefaultDeclaration");
                }
                if (this.shouldParseExportStatement())
                    (e.declaration = this.parseStatement(null)),
                        "VariableDeclaration" === e.declaration.type
                            ? this.checkVariableExport(
                                  t,
                                  e.declaration.declarations
                              )
                            : this.checkExport(
                                  t,
                                  e.declaration.id.name,
                                  e.declaration.id.start
                              ),
                        (e.specifiers = []),
                        (e.source = null);
                else {
                    if (
                        ((e.declaration = null),
                        (e.specifiers = this.parseExportSpecifiers(t)),
                        this.eatContextual("from"))
                    )
                        this.type !== ve.string && this.unexpected(),
                            (e.source = this.parseExprAtom());
                    else {
                        for (
                            var r = 0, n = e.specifiers;
                            r < n.length;
                            r += 1
                        ) {
                            var a = n[r];
                            this.checkUnreserved(a.local),
                                this.checkLocalExport(a.local);
                        }
                        e.source = null;
                    }
                    this.semicolon();
                }
                return this.finishNode(e, "ExportNamedDeclaration");
            }),
            (Ze.checkExport = function (e, t, i) {
                e &&
                    (Le(e, t) &&
                        this.raiseRecoverable(
                            i,
                            "Duplicate export '" + t + "'"
                        ),
                    (e[t] = !0));
            }),
            (Ze.checkPatternExport = function (e, t) {
                var i = t.type;
                if ("Identifier" === i) this.checkExport(e, t.name, t.start);
                else if ("ObjectPattern" === i)
                    for (var u = 0, s = t.properties; u < s.length; u += 1) {
                        var r = s[u];
                        this.checkPatternExport(e, r);
                    }
                else if ("ArrayPattern" === i)
                    for (var n = 0, a = t.elements; n < a.length; n += 1) {
                        var o = a[n];
                        o && this.checkPatternExport(e, o);
                    }
                else
                    "Property" === i
                        ? this.checkPatternExport(e, t.value)
                        : "AssignmentPattern" === i
                        ? this.checkPatternExport(e, t.left)
                        : "RestElement" === i
                        ? this.checkPatternExport(e, t.argument)
                        : "ParenthesizedExpression" === i &&
                          this.checkPatternExport(e, t.expression);
            }),
            (Ze.checkVariableExport = function (e, t) {
                if (e)
                    for (var i = 0, u = t; i < u.length; i += 1) {
                        var s = u[i];
                        this.checkPatternExport(e, s.id);
                    }
            }),
            (Ze.shouldParseExportStatement = function () {
                return (
                    "var" === this.type.keyword ||
                    "const" === this.type.keyword ||
                    "class" === this.type.keyword ||
                    "function" === this.type.keyword ||
                    this.isLet() ||
                    this.isAsyncFunction()
                );
            }),
            (Ze.parseExportSpecifiers = function (e) {
                var t = [],
                    i = !0;
                for (this.expect(ve.braceL); !this.eat(ve.braceR); ) {
                    if (i) i = !1;
                    else if (
                        (this.expect(ve.comma),
                        this.afterTrailingComma(ve.braceR))
                    )
                        break;
                    var u = this.startNode();
                    (u.local = this.parseIdent(!0)),
                        (u.exported = this.eatContextual("as")
                            ? this.parseIdent(!0)
                            : u.local),
                        this.checkExport(e, u.exported.name, u.exported.start),
                        t.push(this.finishNode(u, "ExportSpecifier"));
                }
                return t;
            }),
            (Ze.parseImport = function (e) {
                return (
                    this.next(),
                    this.type === ve.string
                        ? ((e.specifiers = et),
                          (e.source = this.parseExprAtom()))
                        : ((e.specifiers = this.parseImportSpecifiers()),
                          this.expectContextual("from"),
                          (e.source =
                              this.type === ve.string
                                  ? this.parseExprAtom()
                                  : this.unexpected())),
                    this.semicolon(),
                    this.finishNode(e, "ImportDeclaration")
                );
            }),
            (Ze.parseImportSpecifiers = function () {
                var e = [],
                    t = !0;
                if (this.type === ve.name) {
                    var i = this.startNode();
                    if (
                        ((i.local = this.parseIdent()),
                        this.checkLVal(i.local, 2),
                        e.push(this.finishNode(i, "ImportDefaultSpecifier")),
                        !this.eat(ve.comma))
                    )
                        return e;
                }
                if (this.type === ve.star) {
                    var u = this.startNode();
                    return (
                        this.next(),
                        this.expectContextual("as"),
                        (u.local = this.parseIdent()),
                        this.checkLVal(u.local, 2),
                        e.push(this.finishNode(u, "ImportNamespaceSpecifier")),
                        e
                    );
                }
                for (this.expect(ve.braceL); !this.eat(ve.braceR); ) {
                    if (t) t = !1;
                    else if (
                        (this.expect(ve.comma),
                        this.afterTrailingComma(ve.braceR))
                    )
                        break;
                    var s = this.startNode();
                    (s.imported = this.parseIdent(!0)),
                        this.eatContextual("as")
                            ? (s.local = this.parseIdent())
                            : (this.checkUnreserved(s.imported),
                              (s.local = s.imported)),
                        this.checkLVal(s.local, 2),
                        e.push(this.finishNode(s, "ImportSpecifier"));
                }
                return e;
            }),
            (Ze.adaptDirectivePrologue = function (e) {
                for (
                    var t = 0;
                    t < e.length && this.isDirectiveCandidate(e[t]);
                    ++t
                )
                    e[t].directive = e[t].expression.raw.slice(1, -1);
            }),
            (Ze.isDirectiveCandidate = function (e) {
                return (
                    "ExpressionStatement" === e.type &&
                    "Literal" === e.expression.type &&
                    "string" === typeof e.expression.value &&
                    ('"' === this.input[e.start] || "'" === this.input[e.start])
                );
            });
        var ut = Ke.prototype;
        (ut.toAssignable = function (e, t, i) {
            if (this.options.ecmaVersion >= 6 && e)
                switch (e.type) {
                    case "Identifier":
                        this.inAsync &&
                            "await" === e.name &&
                            this.raise(
                                e.start,
                                "Cannot use 'await' as identifier inside an async function"
                            );
                        break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "RestElement":
                        break;
                    case "ObjectExpression":
                        (e.type = "ObjectPattern"),
                            i && this.checkPatternErrors(i, !0);
                        for (
                            var u = 0, s = e.properties;
                            u < s.length;
                            u += 1
                        ) {
                            var r = s[u];
                            this.toAssignable(r, t),
                                "RestElement" !== r.type ||
                                    ("ArrayPattern" !== r.argument.type &&
                                        "ObjectPattern" !== r.argument.type) ||
                                    this.raise(
                                        r.argument.start,
                                        "Unexpected token"
                                    );
                        }
                        break;
                    case "Property":
                        "init" !== e.kind &&
                            this.raise(
                                e.key.start,
                                "Object pattern can't contain getter or setter"
                            ),
                            this.toAssignable(e.value, t);
                        break;
                    case "ArrayExpression":
                        (e.type = "ArrayPattern"),
                            i && this.checkPatternErrors(i, !0),
                            this.toAssignableList(e.elements, t);
                        break;
                    case "SpreadElement":
                        (e.type = "RestElement"),
                            this.toAssignable(e.argument, t),
                            "AssignmentPattern" === e.argument.type &&
                                this.raise(
                                    e.argument.start,
                                    "Rest elements cannot have a default value"
                                );
                        break;
                    case "AssignmentExpression":
                        "=" !== e.operator &&
                            this.raise(
                                e.left.end,
                                "Only '=' operator can be used for specifying default value."
                            ),
                            (e.type = "AssignmentPattern"),
                            delete e.operator,
                            this.toAssignable(e.left, t);
                    case "AssignmentPattern":
                        break;
                    case "ParenthesizedExpression":
                        this.toAssignable(e.expression, t, i);
                        break;
                    case "MemberExpression":
                        if (!t) break;
                    default:
                        this.raise(e.start, "Assigning to rvalue");
                }
            else i && this.checkPatternErrors(i, !0);
            return e;
        }),
            (ut.toAssignableList = function (e, t) {
                for (var i = e.length, u = 0; u < i; u++) {
                    var s = e[u];
                    s && this.toAssignable(s, t);
                }
                if (i) {
                    var r = e[i - 1];
                    6 === this.options.ecmaVersion &&
                        t &&
                        r &&
                        "RestElement" === r.type &&
                        "Identifier" !== r.argument.type &&
                        this.unexpected(r.argument.start);
                }
                return e;
            }),
            (ut.parseSpread = function (e) {
                var t = this.startNode();
                return (
                    this.next(),
                    (t.argument = this.parseMaybeAssign(!1, e)),
                    this.finishNode(t, "SpreadElement")
                );
            }),
            (ut.parseRestBinding = function () {
                var e = this.startNode();
                return (
                    this.next(),
                    6 === this.options.ecmaVersion &&
                        this.type !== ve.name &&
                        this.unexpected(),
                    (e.argument = this.parseBindingAtom()),
                    this.finishNode(e, "RestElement")
                );
            }),
            (ut.parseBindingAtom = function () {
                if (this.options.ecmaVersion >= 6)
                    switch (this.type) {
                        case ve.bracketL:
                            var e = this.startNode();
                            return (
                                this.next(),
                                (e.elements = this.parseBindingList(
                                    ve.bracketR,
                                    !0,
                                    !0
                                )),
                                this.finishNode(e, "ArrayPattern")
                            );
                        case ve.braceL:
                            return this.parseObj(!0);
                    }
                return this.parseIdent();
            }),
            (ut.parseBindingList = function (e, t, i) {
                for (var u = [], s = !0; !this.eat(e); )
                    if (
                        (s ? (s = !1) : this.expect(ve.comma),
                        t && this.type === ve.comma)
                    )
                        u.push(null);
                    else {
                        if (i && this.afterTrailingComma(e)) break;
                        if (this.type === ve.ellipsis) {
                            var r = this.parseRestBinding();
                            this.parseBindingListItem(r),
                                u.push(r),
                                this.type === ve.comma &&
                                    this.raise(
                                        this.start,
                                        "Comma is not permitted after the rest element"
                                    ),
                                this.expect(e);
                            break;
                        }
                        var n = this.parseMaybeDefault(
                            this.start,
                            this.startLoc
                        );
                        this.parseBindingListItem(n), u.push(n);
                    }
                return u;
            }),
            (ut.parseBindingListItem = function (e) {
                return e;
            }),
            (ut.parseMaybeDefault = function (e, t, i) {
                if (
                    ((i = i || this.parseBindingAtom()),
                    this.options.ecmaVersion < 6 || !this.eat(ve.eq))
                )
                    return i;
                var u = this.startNodeAt(e, t);
                return (
                    (u.left = i),
                    (u.right = this.parseMaybeAssign()),
                    this.finishNode(u, "AssignmentPattern")
                );
            }),
            (ut.checkLVal = function (e, t, i) {
                switch ((void 0 === t && (t = 0), e.type)) {
                    case "Identifier":
                        2 === t &&
                            "let" === e.name &&
                            this.raiseRecoverable(
                                e.start,
                                "let is disallowed as a lexically bound name"
                            ),
                            this.strict &&
                                this.reservedWordsStrictBind.test(e.name) &&
                                this.raiseRecoverable(
                                    e.start,
                                    (t ? "Binding " : "Assigning to ") +
                                        e.name +
                                        " in strict mode"
                                ),
                            i &&
                                (Le(i, e.name) &&
                                    this.raiseRecoverable(
                                        e.start,
                                        "Argument name clash"
                                    ),
                                (i[e.name] = !0)),
                            0 !== t &&
                                5 !== t &&
                                this.declareName(e.name, t, e.start);
                        break;
                    case "MemberExpression":
                        t &&
                            this.raiseRecoverable(
                                e.start,
                                "Binding member expression"
                            );
                        break;
                    case "ObjectPattern":
                        for (
                            var u = 0, s = e.properties;
                            u < s.length;
                            u += 1
                        ) {
                            var r = s[u];
                            this.checkLVal(r, t, i);
                        }
                        break;
                    case "Property":
                        this.checkLVal(e.value, t, i);
                        break;
                    case "ArrayPattern":
                        for (var n = 0, a = e.elements; n < a.length; n += 1) {
                            var o = a[n];
                            o && this.checkLVal(o, t, i);
                        }
                        break;
                    case "AssignmentPattern":
                        this.checkLVal(e.left, t, i);
                        break;
                    case "RestElement":
                        this.checkLVal(e.argument, t, i);
                        break;
                    case "ParenthesizedExpression":
                        this.checkLVal(e.expression, t, i);
                        break;
                    default:
                        this.raise(
                            e.start,
                            (t ? "Binding" : "Assigning to") + " rvalue"
                        );
                }
            });
        var st = Ke.prototype;
        (st.checkPropClash = function (e, t, i) {
            if (
                !(
                    this.options.ecmaVersion >= 9 && "SpreadElement" === e.type
                ) &&
                !(
                    this.options.ecmaVersion >= 6 &&
                    (e.computed || e.method || e.shorthand)
                )
            ) {
                var u,
                    s = e.key;
                switch (s.type) {
                    case "Identifier":
                        u = s.name;
                        break;
                    case "Literal":
                        u = String(s.value);
                        break;
                    default:
                        return;
                }
                var r = e.kind;
                if (this.options.ecmaVersion >= 6)
                    "__proto__" === u &&
                        "init" === r &&
                        (t.proto &&
                            (i && i.doubleProto < 0
                                ? (i.doubleProto = s.start)
                                : this.raiseRecoverable(
                                      s.start,
                                      "Redefinition of __proto__ property"
                                  )),
                        (t.proto = !0));
                else {
                    var n = t[(u = "$" + u)];
                    if (n)
                        ("init" === r
                            ? (this.strict && n.init) || n.get || n.set
                            : n.init || n[r]) &&
                            this.raiseRecoverable(
                                s.start,
                                "Redefinition of property"
                            );
                    else n = t[u] = { init: !1, get: !1, set: !1 };
                    n[r] = !0;
                }
            }
        }),
            (st.parseExpression = function (e, t) {
                var i = this.start,
                    u = this.startLoc,
                    s = this.parseMaybeAssign(e, t);
                if (this.type === ve.comma) {
                    var r = this.startNodeAt(i, u);
                    for (r.expressions = [s]; this.eat(ve.comma); )
                        r.expressions.push(this.parseMaybeAssign(e, t));
                    return this.finishNode(r, "SequenceExpression");
                }
                return s;
            }),
            (st.parseMaybeAssign = function (e, t, i) {
                if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(e);
                    this.exprAllowed = !1;
                }
                var u = !1,
                    s = -1,
                    r = -1,
                    n = -1;
                t
                    ? ((s = t.parenthesizedAssign),
                      (r = t.trailingComma),
                      (n = t.shorthandAssign),
                      (t.parenthesizedAssign = t.trailingComma = t.shorthandAssign = -1))
                    : ((t = new Ye()), (u = !0));
                var a = this.start,
                    o = this.startLoc;
                (this.type !== ve.parenL && this.type !== ve.name) ||
                    (this.potentialArrowAt = this.start);
                var h = this.parseMaybeConditional(e, t);
                if ((i && (h = i.call(this, h, a, o)), this.type.isAssign)) {
                    var p = this.startNodeAt(a, o);
                    return (
                        (p.operator = this.value),
                        (p.left =
                            this.type === ve.eq
                                ? this.toAssignable(h, !1, t)
                                : h),
                        u || Ye.call(t),
                        (t.shorthandAssign = -1),
                        this.checkLVal(h),
                        this.next(),
                        (p.right = this.parseMaybeAssign(e)),
                        this.finishNode(p, "AssignmentExpression")
                    );
                }
                return (
                    u && this.checkExpressionErrors(t, !0),
                    s > -1 && (t.parenthesizedAssign = s),
                    r > -1 && (t.trailingComma = r),
                    n > -1 && (t.shorthandAssign = n),
                    h
                );
            }),
            (st.parseMaybeConditional = function (e, t) {
                var i = this.start,
                    u = this.startLoc,
                    s = this.parseExprOps(e, t);
                if (this.checkExpressionErrors(t)) return s;
                if (this.eat(ve.question)) {
                    var r = this.startNodeAt(i, u);
                    return (
                        (r.test = s),
                        (r.consequent = this.parseMaybeAssign()),
                        this.expect(ve.colon),
                        (r.alternate = this.parseMaybeAssign(e)),
                        this.finishNode(r, "ConditionalExpression")
                    );
                }
                return s;
            }),
            (st.parseExprOps = function (e, t) {
                var i = this.start,
                    u = this.startLoc,
                    s = this.parseMaybeUnary(t, !1);
                return this.checkExpressionErrors(t)
                    ? s
                    : s.start === i && "ArrowFunctionExpression" === s.type
                    ? s
                    : this.parseExprOp(s, i, u, -1, e);
            }),
            (st.parseExprOp = function (e, t, i, u, s) {
                var r = this.type.binop;
                if (null != r && (!s || this.type !== ve._in) && r > u) {
                    var n =
                            this.type === ve.logicalOR ||
                            this.type === ve.logicalAND,
                        a = this.value;
                    this.next();
                    var o = this.start,
                        h = this.startLoc,
                        p = this.parseExprOp(
                            this.parseMaybeUnary(null, !1),
                            o,
                            h,
                            r,
                            s
                        ),
                        c = this.buildBinary(t, i, e, p, a, n);
                    return this.parseExprOp(c, t, i, u, s);
                }
                return e;
            }),
            (st.buildBinary = function (e, t, i, u, s, r) {
                var n = this.startNodeAt(e, t);
                return (
                    (n.left = i),
                    (n.operator = s),
                    (n.right = u),
                    this.finishNode(
                        n,
                        r ? "LogicalExpression" : "BinaryExpression"
                    )
                );
            }),
            (st.parseMaybeUnary = function (e, t) {
                var i,
                    u = this.start,
                    s = this.startLoc;
                if (
                    this.isContextual("await") &&
                    (this.inAsync ||
                        (!this.inFunction &&
                            this.options.allowAwaitOutsideFunction))
                )
                    (i = this.parseAwait()), (t = !0);
                else if (this.type.prefix) {
                    var r = this.startNode(),
                        n = this.type === ve.incDec;
                    (r.operator = this.value),
                        (r.prefix = !0),
                        this.next(),
                        (r.argument = this.parseMaybeUnary(null, !0)),
                        this.checkExpressionErrors(e, !0),
                        n
                            ? this.checkLVal(r.argument)
                            : this.strict &&
                              "delete" === r.operator &&
                              "Identifier" === r.argument.type
                            ? this.raiseRecoverable(
                                  r.start,
                                  "Deleting local variable in strict mode"
                              )
                            : (t = !0),
                        (i = this.finishNode(
                            r,
                            n ? "UpdateExpression" : "UnaryExpression"
                        ));
                } else {
                    if (
                        ((i = this.parseExprSubscripts(e)),
                        this.checkExpressionErrors(e))
                    )
                        return i;
                    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                        var a = this.startNodeAt(u, s);
                        (a.operator = this.value),
                            (a.prefix = !1),
                            (a.argument = i),
                            this.checkLVal(i),
                            this.next(),
                            (i = this.finishNode(a, "UpdateExpression"));
                    }
                }
                return !t && this.eat(ve.starstar)
                    ? this.buildBinary(
                          u,
                          s,
                          i,
                          this.parseMaybeUnary(null, !1),
                          "**",
                          !1
                      )
                    : i;
            }),
            (st.parseExprSubscripts = function (e) {
                var t = this.start,
                    i = this.startLoc,
                    u = this.parseExprAtom(e),
                    s =
                        "ArrowFunctionExpression" === u.type &&
                        ")" !==
                            this.input.slice(
                                this.lastTokStart,
                                this.lastTokEnd
                            );
                if (this.checkExpressionErrors(e) || s) return u;
                var r = this.parseSubscripts(u, t, i);
                return (
                    e &&
                        "MemberExpression" === r.type &&
                        (e.parenthesizedAssign >= r.start &&
                            (e.parenthesizedAssign = -1),
                        e.parenthesizedBind >= r.start &&
                            (e.parenthesizedBind = -1)),
                    r
                );
            }),
            (st.parseSubscripts = function (e, t, i, u) {
                for (
                    var s =
                        this.options.ecmaVersion >= 8 &&
                        "Identifier" === e.type &&
                        "async" === e.name &&
                        this.lastTokEnd === e.end &&
                        !this.canInsertSemicolon() &&
                        "async" === this.input.slice(e.start, e.end);
                    ;

                ) {
                    var r = this.parseSubscript(e, t, i, u, s);
                    if (r === e || "ArrowFunctionExpression" === r.type)
                        return r;
                    e = r;
                }
            }),
            (st.parseSubscript = function (e, t, i, u, s) {
                var r = this.eat(ve.bracketL);
                if (r || this.eat(ve.dot)) {
                    var n = this.startNodeAt(t, i);
                    (n.object = e),
                        (n.property = r
                            ? this.parseExpression()
                            : this.parseIdent(
                                  "never" !== this.options.allowReserved
                              )),
                        (n.computed = !!r),
                        r && this.expect(ve.bracketR),
                        (e = this.finishNode(n, "MemberExpression"));
                } else if (!u && this.eat(ve.parenL)) {
                    var a = new Ye(),
                        o = this.yieldPos,
                        h = this.awaitPos,
                        p = this.awaitIdentPos;
                    (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0);
                    var c = this.parseExprList(
                        ve.parenR,
                        this.options.ecmaVersion >= 8,
                        !1,
                        a
                    );
                    if (s && !this.canInsertSemicolon() && this.eat(ve.arrow))
                        return (
                            this.checkPatternErrors(a, !1),
                            this.checkYieldAwaitInDefaultParams(),
                            this.awaitIdentPos > 0 &&
                                this.raise(
                                    this.awaitIdentPos,
                                    "Cannot use 'await' as identifier inside an async function"
                                ),
                            (this.yieldPos = o),
                            (this.awaitPos = h),
                            (this.awaitIdentPos = p),
                            this.parseArrowExpression(
                                this.startNodeAt(t, i),
                                c,
                                !0
                            )
                        );
                    this.checkExpressionErrors(a, !0),
                        (this.yieldPos = o || this.yieldPos),
                        (this.awaitPos = h || this.awaitPos),
                        (this.awaitIdentPos = p || this.awaitIdentPos);
                    var l = this.startNodeAt(t, i);
                    (l.callee = e),
                        (l.arguments = c),
                        (e = this.finishNode(l, "CallExpression"));
                } else if (this.type === ve.backQuote) {
                    var D = this.startNodeAt(t, i);
                    (D.tag = e),
                        (D.quasi = this.parseTemplate({ isTagged: !0 })),
                        (e = this.finishNode(D, "TaggedTemplateExpression"));
                }
                return e;
            }),
            (st.parseExprAtom = function (e) {
                this.type === ve.slash && this.readRegexp();
                var t,
                    i = this.potentialArrowAt === this.start;
                switch (this.type) {
                    case ve._super:
                        return (
                            this.allowSuper ||
                                this.raise(
                                    this.start,
                                    "'super' keyword outside a method"
                                ),
                            (t = this.startNode()),
                            this.next(),
                            this.type !== ve.parenL ||
                                this.allowDirectSuper ||
                                this.raise(
                                    t.start,
                                    "super() call outside constructor of a subclass"
                                ),
                            this.type !== ve.dot &&
                                this.type !== ve.bracketL &&
                                this.type !== ve.parenL &&
                                this.unexpected(),
                            this.finishNode(t, "Super")
                        );
                    case ve._this:
                        return (
                            (t = this.startNode()),
                            this.next(),
                            this.finishNode(t, "ThisExpression")
                        );
                    case ve.name:
                        var u = this.start,
                            s = this.startLoc,
                            r = this.containsEsc,
                            n = this.parseIdent(!1);
                        if (
                            this.options.ecmaVersion >= 8 &&
                            !r &&
                            "async" === n.name &&
                            !this.canInsertSemicolon() &&
                            this.eat(ve._function)
                        )
                            return this.parseFunction(
                                this.startNodeAt(u, s),
                                0,
                                !1,
                                !0
                            );
                        if (i && !this.canInsertSemicolon()) {
                            if (this.eat(ve.arrow))
                                return this.parseArrowExpression(
                                    this.startNodeAt(u, s),
                                    [n],
                                    !1
                                );
                            if (
                                this.options.ecmaVersion >= 8 &&
                                "async" === n.name &&
                                this.type === ve.name &&
                                !r
                            )
                                return (
                                    (n = this.parseIdent(!1)),
                                    (!this.canInsertSemicolon() &&
                                        this.eat(ve.arrow)) ||
                                        this.unexpected(),
                                    this.parseArrowExpression(
                                        this.startNodeAt(u, s),
                                        [n],
                                        !0
                                    )
                                );
                        }
                        return n;
                    case ve.regexp:
                        var a = this.value;
                        return (
                            ((t = this.parseLiteral(a.value)).regex = {
                                pattern: a.pattern,
                                flags: a.flags,
                            }),
                            t
                        );
                    case ve.num:
                    case ve.string:
                        return this.parseLiteral(this.value);
                    case ve._null:
                    case ve._true:
                    case ve._false:
                        return (
                            ((t = this.startNode()).value =
                                this.type === ve._null
                                    ? null
                                    : this.type === ve._true),
                            (t.raw = this.type.keyword),
                            this.next(),
                            this.finishNode(t, "Literal")
                        );
                    case ve.parenL:
                        var o = this.start,
                            h = this.parseParenAndDistinguishExpression(i);
                        return (
                            e &&
                                (e.parenthesizedAssign < 0 &&
                                    !this.isSimpleAssignTarget(h) &&
                                    (e.parenthesizedAssign = o),
                                e.parenthesizedBind < 0 &&
                                    (e.parenthesizedBind = o)),
                            h
                        );
                    case ve.bracketL:
                        return (
                            (t = this.startNode()),
                            this.next(),
                            (t.elements = this.parseExprList(
                                ve.bracketR,
                                !0,
                                !0,
                                e
                            )),
                            this.finishNode(t, "ArrayExpression")
                        );
                    case ve.braceL:
                        return this.parseObj(!1, e);
                    case ve._function:
                        return (
                            (t = this.startNode()),
                            this.next(),
                            this.parseFunction(t, 0)
                        );
                    case ve._class:
                        return this.parseClass(this.startNode(), !1);
                    case ve._new:
                        return this.parseNew();
                    case ve.backQuote:
                        return this.parseTemplate();
                    case ve._import:
                        return this.options.ecmaVersion >= 11
                            ? this.parseExprImport()
                            : this.unexpected();
                    default:
                        this.unexpected();
                }
            }),
            (st.parseExprImport = function () {
                var e = this.startNode();
                switch ((this.next(), this.type)) {
                    case ve.parenL:
                        return this.parseDynamicImport(e);
                    default:
                        this.unexpected();
                }
            }),
            (st.parseDynamicImport = function (e) {
                if (
                    (this.next(),
                    (e.source = this.parseMaybeAssign()),
                    !this.eat(ve.parenR))
                ) {
                    var t = this.start;
                    this.eat(ve.comma) && this.eat(ve.parenR)
                        ? this.raiseRecoverable(
                              t,
                              "Trailing comma is not allowed in import()"
                          )
                        : this.unexpected(t);
                }
                return this.finishNode(e, "ImportExpression");
            }),
            (st.parseLiteral = function (e) {
                var t = this.startNode();
                return (
                    (t.value = e),
                    (t.raw = this.input.slice(this.start, this.end)),
                    110 === t.raw.charCodeAt(t.raw.length - 1) &&
                        (t.bigint = t.raw.slice(0, -1)),
                    this.next(),
                    this.finishNode(t, "Literal")
                );
            }),
            (st.parseParenExpression = function () {
                this.expect(ve.parenL);
                var e = this.parseExpression();
                return this.expect(ve.parenR), e;
            }),
            (st.parseParenAndDistinguishExpression = function (e) {
                var t,
                    i = this.start,
                    u = this.startLoc,
                    s = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var r,
                        n = this.start,
                        a = this.startLoc,
                        o = [],
                        h = !0,
                        p = !1,
                        c = new Ye(),
                        l = this.yieldPos,
                        D = this.awaitPos;
                    for (
                        this.yieldPos = 0, this.awaitPos = 0;
                        this.type !== ve.parenR;

                    ) {
                        if (
                            (h ? (h = !1) : this.expect(ve.comma),
                            s && this.afterTrailingComma(ve.parenR, !0))
                        ) {
                            p = !0;
                            break;
                        }
                        if (this.type === ve.ellipsis) {
                            (r = this.start),
                                o.push(
                                    this.parseParenItem(this.parseRestBinding())
                                ),
                                this.type === ve.comma &&
                                    this.raise(
                                        this.start,
                                        "Comma is not permitted after the rest element"
                                    );
                            break;
                        }
                        o.push(
                            this.parseMaybeAssign(!1, c, this.parseParenItem)
                        );
                    }
                    var d = this.start,
                        A = this.startLoc;
                    if (
                        (this.expect(ve.parenR),
                        e && !this.canInsertSemicolon() && this.eat(ve.arrow))
                    )
                        return (
                            this.checkPatternErrors(c, !1),
                            this.checkYieldAwaitInDefaultParams(),
                            (this.yieldPos = l),
                            (this.awaitPos = D),
                            this.parseParenArrowList(i, u, o)
                        );
                    (o.length && !p) || this.unexpected(this.lastTokStart),
                        r && this.unexpected(r),
                        this.checkExpressionErrors(c, !0),
                        (this.yieldPos = l || this.yieldPos),
                        (this.awaitPos = D || this.awaitPos),
                        o.length > 1
                            ? (((t = this.startNodeAt(n, a)).expressions = o),
                              this.finishNodeAt(t, "SequenceExpression", d, A))
                            : (t = o[0]);
                } else t = this.parseParenExpression();
                if (this.options.preserveParens) {
                    var f = this.startNodeAt(i, u);
                    return (
                        (f.expression = t),
                        this.finishNode(f, "ParenthesizedExpression")
                    );
                }
                return t;
            }),
            (st.parseParenItem = function (e) {
                return e;
            }),
            (st.parseParenArrowList = function (e, t, i) {
                return this.parseArrowExpression(this.startNodeAt(e, t), i);
            });
        var rt = [];
        (st.parseNew = function () {
            var e = this.startNode(),
                t = this.parseIdent(!0);
            if (this.options.ecmaVersion >= 6 && this.eat(ve.dot)) {
                e.meta = t;
                var i = this.containsEsc;
                return (
                    (e.property = this.parseIdent(!0)),
                    ("target" !== e.property.name || i) &&
                        this.raiseRecoverable(
                            e.property.start,
                            "The only valid meta property for new is new.target"
                        ),
                    this.inNonArrowFunction() ||
                        this.raiseRecoverable(
                            e.start,
                            "new.target can only be used in functions"
                        ),
                    this.finishNode(e, "MetaProperty")
                );
            }
            var u = this.start,
                s = this.startLoc,
                r = this.type === ve._import;
            return (
                (e.callee = this.parseSubscripts(
                    this.parseExprAtom(),
                    u,
                    s,
                    !0
                )),
                r &&
                    "ImportExpression" === e.callee.type &&
                    this.raise(u, "Cannot use new with import()"),
                this.eat(ve.parenL)
                    ? (e.arguments = this.parseExprList(
                          ve.parenR,
                          this.options.ecmaVersion >= 8,
                          !1
                      ))
                    : (e.arguments = rt),
                this.finishNode(e, "NewExpression")
            );
        }),
            (st.parseTemplateElement = function (e) {
                var t = e.isTagged,
                    i = this.startNode();
                return (
                    this.type === ve.invalidTemplate
                        ? (t ||
                              this.raiseRecoverable(
                                  this.start,
                                  "Bad escape sequence in untagged template literal"
                              ),
                          (i.value = { raw: this.value, cooked: null }))
                        : (i.value = {
                              raw: this.input
                                  .slice(this.start, this.end)
                                  .replace(/\r\n?/g, "\n"),
                              cooked: this.value,
                          }),
                    this.next(),
                    (i.tail = this.type === ve.backQuote),
                    this.finishNode(i, "TemplateElement")
                );
            }),
            (st.parseTemplate = function (e) {
                void 0 === e && (e = {});
                var t = e.isTagged;
                void 0 === t && (t = !1);
                var i = this.startNode();
                this.next(), (i.expressions = []);
                var u = this.parseTemplateElement({ isTagged: t });
                for (i.quasis = [u]; !u.tail; )
                    this.type === ve.eof &&
                        this.raise(this.pos, "Unterminated template literal"),
                        this.expect(ve.dollarBraceL),
                        i.expressions.push(this.parseExpression()),
                        this.expect(ve.braceR),
                        i.quasis.push(
                            (u = this.parseTemplateElement({ isTagged: t }))
                        );
                return this.next(), this.finishNode(i, "TemplateLiteral");
            }),
            (st.isAsyncProp = function (e) {
                return (
                    !e.computed &&
                    "Identifier" === e.key.type &&
                    "async" === e.key.name &&
                    (this.type === ve.name ||
                        this.type === ve.num ||
                        this.type === ve.string ||
                        this.type === ve.bracketL ||
                        this.type.keyword ||
                        (this.options.ecmaVersion >= 9 &&
                            this.type === ve.star)) &&
                    !Se.test(this.input.slice(this.lastTokEnd, this.start))
                );
            }),
            (st.parseObj = function (e, t) {
                var i = this.startNode(),
                    u = !0,
                    s = {};
                for (i.properties = [], this.next(); !this.eat(ve.braceR); ) {
                    if (u) u = !1;
                    else if (
                        (this.expect(ve.comma),
                        this.afterTrailingComma(ve.braceR))
                    )
                        break;
                    var r = this.parseProperty(e, t);
                    e || this.checkPropClash(r, s, t), i.properties.push(r);
                }
                return this.finishNode(
                    i,
                    e ? "ObjectPattern" : "ObjectExpression"
                );
            }),
            (st.parseProperty = function (e, t) {
                var i,
                    u,
                    s,
                    r,
                    n = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(ve.ellipsis))
                    return e
                        ? ((n.argument = this.parseIdent(!1)),
                          this.type === ve.comma &&
                              this.raise(
                                  this.start,
                                  "Comma is not permitted after the rest element"
                              ),
                          this.finishNode(n, "RestElement"))
                        : (this.type === ve.parenL &&
                              t &&
                              (t.parenthesizedAssign < 0 &&
                                  (t.parenthesizedAssign = this.start),
                              t.parenthesizedBind < 0 &&
                                  (t.parenthesizedBind = this.start)),
                          (n.argument = this.parseMaybeAssign(!1, t)),
                          this.type === ve.comma &&
                              t &&
                              t.trailingComma < 0 &&
                              (t.trailingComma = this.start),
                          this.finishNode(n, "SpreadElement"));
                this.options.ecmaVersion >= 6 &&
                    ((n.method = !1),
                    (n.shorthand = !1),
                    (e || t) && ((s = this.start), (r = this.startLoc)),
                    e || (i = this.eat(ve.star)));
                var a = this.containsEsc;
                return (
                    this.parsePropertyName(n),
                    !e &&
                    !a &&
                    this.options.ecmaVersion >= 8 &&
                    !i &&
                    this.isAsyncProp(n)
                        ? ((u = !0),
                          (i =
                              this.options.ecmaVersion >= 9 &&
                              this.eat(ve.star)),
                          this.parsePropertyName(n, t))
                        : (u = !1),
                    this.parsePropertyValue(n, e, i, u, s, r, t, a),
                    this.finishNode(n, "Property")
                );
            }),
            (st.parsePropertyValue = function (e, t, i, u, s, r, n, a) {
                if (
                    ((i || u) && this.type === ve.colon && this.unexpected(),
                    this.eat(ve.colon))
                )
                    (e.value = t
                        ? this.parseMaybeDefault(this.start, this.startLoc)
                        : this.parseMaybeAssign(!1, n)),
                        (e.kind = "init");
                else if (
                    this.options.ecmaVersion >= 6 &&
                    this.type === ve.parenL
                )
                    t && this.unexpected(),
                        (e.kind = "init"),
                        (e.method = !0),
                        (e.value = this.parseMethod(i, u));
                else if (
                    t ||
                    a ||
                    !(this.options.ecmaVersion >= 5) ||
                    e.computed ||
                    "Identifier" !== e.key.type ||
                    ("get" !== e.key.name && "set" !== e.key.name) ||
                    this.type === ve.comma ||
                    this.type === ve.braceR
                )
                    this.options.ecmaVersion >= 6 &&
                    !e.computed &&
                    "Identifier" === e.key.type
                        ? ((i || u) && this.unexpected(),
                          this.checkUnreserved(e.key),
                          "await" !== e.key.name ||
                              this.awaitIdentPos ||
                              (this.awaitIdentPos = s),
                          (e.kind = "init"),
                          t
                              ? (e.value = this.parseMaybeDefault(s, r, e.key))
                              : this.type === ve.eq && n
                              ? (n.shorthandAssign < 0 &&
                                    (n.shorthandAssign = this.start),
                                (e.value = this.parseMaybeDefault(s, r, e.key)))
                              : (e.value = e.key),
                          (e.shorthand = !0))
                        : this.unexpected();
                else {
                    (i || u) && this.unexpected(),
                        (e.kind = e.key.name),
                        this.parsePropertyName(e),
                        (e.value = this.parseMethod(!1));
                    var o = "get" === e.kind ? 0 : 1;
                    if (e.value.params.length !== o) {
                        var h = e.value.start;
                        "get" === e.kind
                            ? this.raiseRecoverable(
                                  h,
                                  "getter should have no params"
                              )
                            : this.raiseRecoverable(
                                  h,
                                  "setter should have exactly one param"
                              );
                    } else
                        "set" === e.kind &&
                            "RestElement" === e.value.params[0].type &&
                            this.raiseRecoverable(
                                e.value.params[0].start,
                                "Setter cannot use rest params"
                            );
                }
            }),
            (st.parsePropertyName = function (e) {
                if (this.options.ecmaVersion >= 6) {
                    if (this.eat(ve.bracketL))
                        return (
                            (e.computed = !0),
                            (e.key = this.parseMaybeAssign()),
                            this.expect(ve.bracketR),
                            e.key
                        );
                    e.computed = !1;
                }
                return (e.key =
                    this.type === ve.num || this.type === ve.string
                        ? this.parseExprAtom()
                        : this.parseIdent(
                              "never" !== this.options.allowReserved
                          ));
            }),
            (st.initFunction = function (e) {
                (e.id = null),
                    this.options.ecmaVersion >= 6 &&
                        (e.generator = e.expression = !1),
                    this.options.ecmaVersion >= 8 && (e.async = !1);
            }),
            (st.parseMethod = function (e, t, i) {
                var u = this.startNode(),
                    s = this.yieldPos,
                    r = this.awaitPos,
                    n = this.awaitIdentPos;
                return (
                    this.initFunction(u),
                    this.options.ecmaVersion >= 6 && (u.generator = e),
                    this.options.ecmaVersion >= 8 && (u.async = !!t),
                    (this.yieldPos = 0),
                    (this.awaitPos = 0),
                    (this.awaitIdentPos = 0),
                    this.enterScope(64 | Ge(t, u.generator) | (i ? 128 : 0)),
                    this.expect(ve.parenL),
                    (u.params = this.parseBindingList(
                        ve.parenR,
                        !1,
                        this.options.ecmaVersion >= 8
                    )),
                    this.checkYieldAwaitInDefaultParams(),
                    this.parseFunctionBody(u, !1, !0),
                    (this.yieldPos = s),
                    (this.awaitPos = r),
                    (this.awaitIdentPos = n),
                    this.finishNode(u, "FunctionExpression")
                );
            }),
            (st.parseArrowExpression = function (e, t, i) {
                var u = this.yieldPos,
                    s = this.awaitPos,
                    r = this.awaitIdentPos;
                return (
                    this.enterScope(16 | Ge(i, !1)),
                    this.initFunction(e),
                    this.options.ecmaVersion >= 8 && (e.async = !!i),
                    (this.yieldPos = 0),
                    (this.awaitPos = 0),
                    (this.awaitIdentPos = 0),
                    (e.params = this.toAssignableList(t, !0)),
                    this.parseFunctionBody(e, !0, !1),
                    (this.yieldPos = u),
                    (this.awaitPos = s),
                    (this.awaitIdentPos = r),
                    this.finishNode(e, "ArrowFunctionExpression")
                );
            }),
            (st.parseFunctionBody = function (e, t, i) {
                var u = t && this.type !== ve.braceL,
                    s = this.strict,
                    r = !1;
                if (u)
                    (e.body = this.parseMaybeAssign()),
                        (e.expression = !0),
                        this.checkParams(e, !1);
                else {
                    var n =
                        this.options.ecmaVersion >= 7 &&
                        !this.isSimpleParamList(e.params);
                    (s && !n) ||
                        ((r = this.strictDirective(this.end)) &&
                            n &&
                            this.raiseRecoverable(
                                e.start,
                                "Illegal 'use strict' directive in function with non-simple parameter list"
                            ));
                    var a = this.labels;
                    (this.labels = []),
                        r && (this.strict = !0),
                        this.checkParams(
                            e,
                            !s &&
                                !r &&
                                !t &&
                                !i &&
                                this.isSimpleParamList(e.params)
                        ),
                        (e.body = this.parseBlock(!1)),
                        (e.expression = !1),
                        this.adaptDirectivePrologue(e.body.body),
                        (this.labels = a);
                }
                this.exitScope(),
                    this.strict && e.id && this.checkLVal(e.id, 5),
                    (this.strict = s);
            }),
            (st.isSimpleParamList = function (e) {
                for (var t = 0, i = e; t < i.length; t += 1) {
                    if ("Identifier" !== i[t].type) return !1;
                }
                return !0;
            }),
            (st.checkParams = function (e, t) {
                for (var i = {}, u = 0, s = e.params; u < s.length; u += 1) {
                    var r = s[u];
                    this.checkLVal(r, 1, t ? null : i);
                }
            }),
            (st.parseExprList = function (e, t, i, u) {
                for (var s = [], r = !0; !this.eat(e); ) {
                    if (r) r = !1;
                    else if (
                        (this.expect(ve.comma), t && this.afterTrailingComma(e))
                    )
                        break;
                    var n = void 0;
                    i && this.type === ve.comma
                        ? (n = null)
                        : this.type === ve.ellipsis
                        ? ((n = this.parseSpread(u)),
                          u &&
                              this.type === ve.comma &&
                              u.trailingComma < 0 &&
                              (u.trailingComma = this.start))
                        : (n = this.parseMaybeAssign(!1, u)),
                        s.push(n);
                }
                return s;
            }),
            (st.checkUnreserved = function (e) {
                var t = e.start,
                    i = e.end,
                    u = e.name;
                (this.inGenerator &&
                    "yield" === u &&
                    this.raiseRecoverable(
                        t,
                        "Cannot use 'yield' as identifier inside a generator"
                    ),
                this.inAsync &&
                    "await" === u &&
                    this.raiseRecoverable(
                        t,
                        "Cannot use 'await' as identifier inside an async function"
                    ),
                this.keywords.test(u) &&
                    this.raise(t, "Unexpected keyword '" + u + "'"),
                this.options.ecmaVersion < 6 &&
                    -1 !== this.input.slice(t, i).indexOf("\\")) ||
                    ((this.strict
                        ? this.reservedWordsStrict
                        : this.reservedWords
                    ).test(u) &&
                        (this.inAsync ||
                            "await" !== u ||
                            this.raiseRecoverable(
                                t,
                                "Cannot use keyword 'await' outside an async function"
                            ),
                        this.raiseRecoverable(
                            t,
                            "The keyword '" + u + "' is reserved"
                        )));
            }),
            (st.parseIdent = function (e, t) {
                var i = this.startNode();
                return (
                    this.type === ve.name
                        ? (i.name = this.value)
                        : this.type.keyword
                        ? ((i.name = this.type.keyword),
                          ("class" !== i.name && "function" !== i.name) ||
                              (this.lastTokEnd === this.lastTokStart + 1 &&
                                  46 ===
                                      this.input.charCodeAt(
                                          this.lastTokStart
                                      )) ||
                              this.context.pop())
                        : this.unexpected(),
                    this.next(),
                    this.finishNode(i, "Identifier"),
                    e ||
                        (this.checkUnreserved(i),
                        "await" !== i.name ||
                            this.awaitIdentPos ||
                            (this.awaitIdentPos = i.start)),
                    i
                );
            }),
            (st.parseYield = function (e) {
                this.yieldPos || (this.yieldPos = this.start);
                var t = this.startNode();
                return (
                    this.next(),
                    this.type === ve.semi ||
                    this.canInsertSemicolon() ||
                    (this.type !== ve.star && !this.type.startsExpr)
                        ? ((t.delegate = !1), (t.argument = null))
                        : ((t.delegate = this.eat(ve.star)),
                          (t.argument = this.parseMaybeAssign(e))),
                    this.finishNode(t, "YieldExpression")
                );
            }),
            (st.parseAwait = function () {
                this.awaitPos || (this.awaitPos = this.start);
                var e = this.startNode();
                return (
                    this.next(),
                    (e.argument = this.parseMaybeUnary(null, !0)),
                    this.finishNode(e, "AwaitExpression")
                );
            });
        var nt = Ke.prototype;
        (nt.raise = function (e, t) {
            var i = (function (e, t) {
                for (var i = 1, u = 0; ; ) {
                    be.lastIndex = u;
                    var s = be.exec(e);
                    if (!(s && s.index < t)) return new Re(i, t - u);
                    ++i, (u = s.index + s[0].length);
                }
            })(this.input, e);
            t += " (" + i.line + ":" + i.column + ")";
            var u = new SyntaxError(t);
            throw ((u.pos = e), (u.loc = i), (u.raisedAt = this.pos), u);
        }),
            (nt.raiseRecoverable = nt.raise),
            (nt.curPosition = function () {
                if (this.options.locations)
                    return new Re(this.curLine, this.pos - this.lineStart);
            });
        var at = Ke.prototype,
            ot = function (e) {
                (this.flags = e),
                    (this.var = []),
                    (this.lexical = []),
                    (this.functions = []);
            };
        (at.enterScope = function (e) {
            this.scopeStack.push(new ot(e));
        }),
            (at.exitScope = function () {
                this.scopeStack.pop();
            }),
            (at.treatFunctionsAsVarInScope = function (e) {
                return e.flags & Ue || (!this.inModule && 1 & e.flags);
            }),
            (at.declareName = function (e, t, i) {
                var u = !1;
                if (2 === t) {
                    var s = this.currentScope();
                    (u =
                        s.lexical.indexOf(e) > -1 ||
                        s.functions.indexOf(e) > -1 ||
                        s.var.indexOf(e) > -1),
                        s.lexical.push(e),
                        this.inModule &&
                            1 & s.flags &&
                            delete this.undefinedExports[e];
                } else if (4 === t) {
                    this.currentScope().lexical.push(e);
                } else if (3 === t) {
                    var r = this.currentScope();
                    (u = this.treatFunctionsAsVar
                        ? r.lexical.indexOf(e) > -1
                        : r.lexical.indexOf(e) > -1 || r.var.indexOf(e) > -1),
                        r.functions.push(e);
                } else
                    for (var n = this.scopeStack.length - 1; n >= 0; --n) {
                        var a = this.scopeStack[n];
                        if (
                            (a.lexical.indexOf(e) > -1 &&
                                !(32 & a.flags && a.lexical[0] === e)) ||
                            (!this.treatFunctionsAsVarInScope(a) &&
                                a.functions.indexOf(e) > -1)
                        ) {
                            u = !0;
                            break;
                        }
                        if (
                            (a.var.push(e),
                            this.inModule &&
                                1 & a.flags &&
                                delete this.undefinedExports[e],
                            a.flags & We)
                        )
                            break;
                    }
                u &&
                    this.raiseRecoverable(
                        i,
                        "Identifier '" + e + "' has already been declared"
                    );
            }),
            (at.checkLocalExport = function (e) {
                -1 === this.scopeStack[0].lexical.indexOf(e.name) &&
                    -1 === this.scopeStack[0].var.indexOf(e.name) &&
                    (this.undefinedExports[e.name] = e);
            }),
            (at.currentScope = function () {
                return this.scopeStack[this.scopeStack.length - 1];
            }),
            (at.currentVarScope = function () {
                for (var e = this.scopeStack.length - 1; ; e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & We) return t;
                }
            }),
            (at.currentThisScope = function () {
                for (var e = this.scopeStack.length - 1; ; e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & We && !(16 & t.flags)) return t;
                }
            });
        var ht = function (e, t, i) {
                (this.type = ""),
                    (this.start = t),
                    (this.end = 0),
                    e.options.locations && (this.loc = new Me(e, i)),
                    e.options.directSourceFile &&
                        (this.sourceFile = e.options.directSourceFile),
                    e.options.ranges && (this.range = [t, 0]);
            },
            pt = Ke.prototype;
        function ct(e, t, i, u) {
            return (
                (e.type = t),
                (e.end = i),
                this.options.locations && (e.loc.end = u),
                this.options.ranges && (e.range[1] = i),
                e
            );
        }
        (pt.startNode = function () {
            return new ht(this, this.start, this.startLoc);
        }),
            (pt.startNodeAt = function (e, t) {
                return new ht(this, e, t);
            }),
            (pt.finishNode = function (e, t) {
                return ct.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
            }),
            (pt.finishNodeAt = function (e, t, i, u) {
                return ct.call(this, e, t, i, u);
            });
        var lt = function (e, t, i, u, s) {
                (this.token = e),
                    (this.isExpr = !!t),
                    (this.preserveSpace = !!i),
                    (this.override = u),
                    (this.generator = !!s);
            },
            Dt = {
                b_stat: new lt("{", !1),
                b_expr: new lt("{", !0),
                b_tmpl: new lt("${", !1),
                p_stat: new lt("(", !1),
                p_expr: new lt("(", !0),
                q_tmpl: new lt("`", !0, !0, function (e) {
                    return e.tryReadTemplateToken();
                }),
                f_stat: new lt("function", !1),
                f_expr: new lt("function", !0),
                f_expr_gen: new lt("function", !0, !1, null, !0),
                f_gen: new lt("function", !1, !1, null, !0),
            },
            dt = Ke.prototype;
        (dt.initialContext = function () {
            return [Dt.b_stat];
        }),
            (dt.braceIsBlock = function (e) {
                var t = this.curContext();
                return (
                    t === Dt.f_expr ||
                    t === Dt.f_stat ||
                    (e !== ve.colon || (t !== Dt.b_stat && t !== Dt.b_expr)
                        ? e === ve._return ||
                          (e === ve.name && this.exprAllowed)
                            ? Se.test(
                                  this.input.slice(this.lastTokEnd, this.start)
                              )
                            : e === ve._else ||
                              e === ve.semi ||
                              e === ve.eof ||
                              e === ve.parenR ||
                              e === ve.arrow ||
                              (e === ve.braceL
                                  ? t === Dt.b_stat
                                  : e !== ve._var &&
                                    e !== ve._const &&
                                    e !== ve.name &&
                                    !this.exprAllowed)
                        : !t.isExpr)
                );
            }),
            (dt.inGeneratorContext = function () {
                for (var e = this.context.length - 1; e >= 1; e--) {
                    var t = this.context[e];
                    if ("function" === t.token) return t.generator;
                }
                return !1;
            }),
            (dt.updateContext = function (e) {
                var t,
                    i = this.type;
                i.keyword && e === ve.dot
                    ? (this.exprAllowed = !1)
                    : (t = i.updateContext)
                    ? t.call(this, e)
                    : (this.exprAllowed = i.beforeExpr);
            }),
            (ve.parenR.updateContext = ve.braceR.updateContext = function () {
                if (1 !== this.context.length) {
                    var e = this.context.pop();
                    e === Dt.b_stat &&
                        "function" === this.curContext().token &&
                        (e = this.context.pop()),
                        (this.exprAllowed = !e.isExpr);
                } else this.exprAllowed = !0;
            }),
            (ve.braceL.updateContext = function (e) {
                this.context.push(this.braceIsBlock(e) ? Dt.b_stat : Dt.b_expr),
                    (this.exprAllowed = !0);
            }),
            (ve.dollarBraceL.updateContext = function () {
                this.context.push(Dt.b_tmpl), (this.exprAllowed = !0);
            }),
            (ve.parenL.updateContext = function (e) {
                var t =
                    e === ve._if ||
                    e === ve._for ||
                    e === ve._with ||
                    e === ve._while;
                this.context.push(t ? Dt.p_stat : Dt.p_expr),
                    (this.exprAllowed = !0);
            }),
            (ve.incDec.updateContext = function () {}),
            (ve._function.updateContext = ve._class.updateContext = function (
                e
            ) {
                !e.beforeExpr ||
                e === ve.semi ||
                e === ve._else ||
                (e === ve._return &&
                    Se.test(this.input.slice(this.lastTokEnd, this.start))) ||
                ((e === ve.colon || e === ve.braceL) &&
                    this.curContext() === Dt.b_stat)
                    ? this.context.push(Dt.f_stat)
                    : this.context.push(Dt.f_expr),
                    (this.exprAllowed = !1);
            }),
            (ve.backQuote.updateContext = function () {
                this.curContext() === Dt.q_tmpl
                    ? this.context.pop()
                    : this.context.push(Dt.q_tmpl),
                    (this.exprAllowed = !1);
            }),
            (ve.star.updateContext = function (e) {
                if (e === ve._function) {
                    var t = this.context.length - 1;
                    this.context[t] === Dt.f_expr
                        ? (this.context[t] = Dt.f_expr_gen)
                        : (this.context[t] = Dt.f_gen);
                }
                this.exprAllowed = !0;
            }),
            (ve.name.updateContext = function (e) {
                var t = !1;
                this.options.ecmaVersion >= 6 &&
                    e !== ve.dot &&
                    (("of" === this.value && !this.exprAllowed) ||
                        ("yield" === this.value &&
                            this.inGeneratorContext())) &&
                    (t = !0),
                    (this.exprAllowed = t);
            });
        var At =
                "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
            ft = At + " Extended_Pictographic",
            Ct = {
                9: At,
                10: ft,
                11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",
            },
            mt =
                "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
            Et =
                "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
            Ft =
                Et +
                " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
            gt = {
                9: Et,
                10: Ft,
                11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
            },
            xt = {};
        function Bt(e) {
            var t = (xt[e] = {
                binary: Ve(Ct[e] + " " + mt),
                nonBinary: { General_Category: Ve(mt), Script: Ve(gt[e]) },
            });
            (t.nonBinary.Script_Extensions = t.nonBinary.Script),
                (t.nonBinary.gc = t.nonBinary.General_Category),
                (t.nonBinary.sc = t.nonBinary.Script),
                (t.nonBinary.scx = t.nonBinary.Script_Extensions);
        }
        Bt(9), Bt(10), Bt(11);
        var yt = Ke.prototype,
            vt = function (e) {
                (this.parser = e),
                    (this.validFlags =
                        "gim" +
                        (e.options.ecmaVersion >= 6 ? "uy" : "") +
                        (e.options.ecmaVersion >= 9 ? "s" : "")),
                    (this.unicodeProperties =
                        xt[
                            e.options.ecmaVersion >= 11
                                ? 11
                                : e.options.ecmaVersion
                        ]),
                    (this.source = ""),
                    (this.flags = ""),
                    (this.start = 0),
                    (this.switchU = !1),
                    (this.switchN = !1),
                    (this.pos = 0),
                    (this.lastIntValue = 0),
                    (this.lastStringValue = ""),
                    (this.lastAssertionIsQuantifiable = !1),
                    (this.numCapturingParens = 0),
                    (this.maxBackReference = 0),
                    (this.groupNames = []),
                    (this.backReferenceNames = []);
            };
        function St(e) {
            return e <= 65535
                ? String.fromCharCode(e)
                : ((e -= 65536),
                  String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
        }
        function bt(e) {
            return (
                36 === e ||
                (e >= 40 && e <= 43) ||
                46 === e ||
                63 === e ||
                (e >= 91 && e <= 94) ||
                (e >= 123 && e <= 125)
            );
        }
        function _t(e) {
            return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
        }
        function kt(e) {
            return _t(e) || 95 === e;
        }
        function wt(e) {
            return kt(e) || It(e);
        }
        function It(e) {
            return e >= 48 && e <= 57;
        }
        function Pt(e) {
            return (
                (e >= 48 && e <= 57) ||
                (e >= 65 && e <= 70) ||
                (e >= 97 && e <= 102)
            );
        }
        function Tt(e) {
            return e >= 65 && e <= 70
                ? e - 65 + 10
                : e >= 97 && e <= 102
                ? e - 97 + 10
                : e - 48;
        }
        function Lt(e) {
            return e >= 48 && e <= 55;
        }
        (vt.prototype.reset = function (e, t, i) {
            var u = -1 !== i.indexOf("u");
            (this.start = 0 | e),
                (this.source = t + ""),
                (this.flags = i),
                (this.switchU = u && this.parser.options.ecmaVersion >= 6),
                (this.switchN = u && this.parser.options.ecmaVersion >= 9);
        }),
            (vt.prototype.raise = function (e) {
                this.parser.raiseRecoverable(
                    this.start,
                    "Invalid regular expression: /" + this.source + "/: " + e
                );
            }),
            (vt.prototype.at = function (e) {
                var t = this.source,
                    i = t.length;
                if (e >= i) return -1;
                var u = t.charCodeAt(e);
                return !this.switchU || u <= 55295 || u >= 57344 || e + 1 >= i
                    ? u
                    : (u << 10) + t.charCodeAt(e + 1) - 56613888;
            }),
            (vt.prototype.nextIndex = function (e) {
                var t = this.source,
                    i = t.length;
                if (e >= i) return i;
                var u = t.charCodeAt(e);
                return !this.switchU || u <= 55295 || u >= 57344 || e + 1 >= i
                    ? e + 1
                    : e + 2;
            }),
            (vt.prototype.current = function () {
                return this.at(this.pos);
            }),
            (vt.prototype.lookahead = function () {
                return this.at(this.nextIndex(this.pos));
            }),
            (vt.prototype.advance = function () {
                this.pos = this.nextIndex(this.pos);
            }),
            (vt.prototype.eat = function (e) {
                return this.current() === e && (this.advance(), !0);
            }),
            (yt.validateRegExpFlags = function (e) {
                for (
                    var t = e.validFlags, i = e.flags, u = 0;
                    u < i.length;
                    u++
                ) {
                    var s = i.charAt(u);
                    -1 === t.indexOf(s) &&
                        this.raise(e.start, "Invalid regular expression flag"),
                        i.indexOf(s, u + 1) > -1 &&
                            this.raise(
                                e.start,
                                "Duplicate regular expression flag"
                            );
                }
            }),
            (yt.validateRegExpPattern = function (e) {
                this.regexp_pattern(e),
                    !e.switchN &&
                        this.options.ecmaVersion >= 9 &&
                        e.groupNames.length > 0 &&
                        ((e.switchN = !0), this.regexp_pattern(e));
            }),
            (yt.regexp_pattern = function (e) {
                (e.pos = 0),
                    (e.lastIntValue = 0),
                    (e.lastStringValue = ""),
                    (e.lastAssertionIsQuantifiable = !1),
                    (e.numCapturingParens = 0),
                    (e.maxBackReference = 0),
                    (e.groupNames.length = 0),
                    (e.backReferenceNames.length = 0),
                    this.regexp_disjunction(e),
                    e.pos !== e.source.length &&
                        (e.eat(41) && e.raise("Unmatched ')'"),
                        (e.eat(93) || e.eat(125)) &&
                            e.raise("Lone quantifier brackets")),
                    e.maxBackReference > e.numCapturingParens &&
                        e.raise("Invalid escape");
                for (
                    var t = 0, i = e.backReferenceNames;
                    t < i.length;
                    t += 1
                ) {
                    var u = i[t];
                    -1 === e.groupNames.indexOf(u) &&
                        e.raise("Invalid named capture referenced");
                }
            }),
            (yt.regexp_disjunction = function (e) {
                for (this.regexp_alternative(e); e.eat(124); )
                    this.regexp_alternative(e);
                this.regexp_eatQuantifier(e, !0) &&
                    e.raise("Nothing to repeat"),
                    e.eat(123) && e.raise("Lone quantifier brackets");
            }),
            (yt.regexp_alternative = function (e) {
                for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
            }),
            (yt.regexp_eatTerm = function (e) {
                return this.regexp_eatAssertion(e)
                    ? (e.lastAssertionIsQuantifiable &&
                          this.regexp_eatQuantifier(e) &&
                          e.switchU &&
                          e.raise("Invalid quantifier"),
                      !0)
                    : !(e.switchU
                          ? !this.regexp_eatAtom(e)
                          : !this.regexp_eatExtendedAtom(e)) &&
                          (this.regexp_eatQuantifier(e), !0);
            }),
            (yt.regexp_eatAssertion = function (e) {
                var t = e.pos;
                if (
                    ((e.lastAssertionIsQuantifiable = !1),
                    e.eat(94) || e.eat(36))
                )
                    return !0;
                if (e.eat(92)) {
                    if (e.eat(66) || e.eat(98)) return !0;
                    e.pos = t;
                }
                if (e.eat(40) && e.eat(63)) {
                    var i = !1;
                    if (
                        (this.options.ecmaVersion >= 9 && (i = e.eat(60)),
                        e.eat(61) || e.eat(33))
                    )
                        return (
                            this.regexp_disjunction(e),
                            e.eat(41) || e.raise("Unterminated group"),
                            (e.lastAssertionIsQuantifiable = !i),
                            !0
                        );
                }
                return (e.pos = t), !1;
            }),
            (yt.regexp_eatQuantifier = function (e, t) {
                return (
                    void 0 === t && (t = !1),
                    !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
                );
            }),
            (yt.regexp_eatQuantifierPrefix = function (e, t) {
                return (
                    e.eat(42) ||
                    e.eat(43) ||
                    e.eat(63) ||
                    this.regexp_eatBracedQuantifier(e, t)
                );
            }),
            (yt.regexp_eatBracedQuantifier = function (e, t) {
                var i = e.pos;
                if (e.eat(123)) {
                    var u = 0,
                        s = -1;
                    if (
                        this.regexp_eatDecimalDigits(e) &&
                        ((u = e.lastIntValue),
                        e.eat(44) &&
                            this.regexp_eatDecimalDigits(e) &&
                            (s = e.lastIntValue),
                        e.eat(125))
                    )
                        return (
                            -1 !== s &&
                                s < u &&
                                !t &&
                                e.raise(
                                    "numbers out of order in {} quantifier"
                                ),
                            !0
                        );
                    e.switchU && !t && e.raise("Incomplete quantifier"),
                        (e.pos = i);
                }
                return !1;
            }),
            (yt.regexp_eatAtom = function (e) {
                return (
                    this.regexp_eatPatternCharacters(e) ||
                    e.eat(46) ||
                    this.regexp_eatReverseSolidusAtomEscape(e) ||
                    this.regexp_eatCharacterClass(e) ||
                    this.regexp_eatUncapturingGroup(e) ||
                    this.regexp_eatCapturingGroup(e)
                );
            }),
            (yt.regexp_eatReverseSolidusAtomEscape = function (e) {
                var t = e.pos;
                if (e.eat(92)) {
                    if (this.regexp_eatAtomEscape(e)) return !0;
                    e.pos = t;
                }
                return !1;
            }),
            (yt.regexp_eatUncapturingGroup = function (e) {
                var t = e.pos;
                if (e.eat(40)) {
                    if (e.eat(63) && e.eat(58)) {
                        if ((this.regexp_disjunction(e), e.eat(41))) return !0;
                        e.raise("Unterminated group");
                    }
                    e.pos = t;
                }
                return !1;
            }),
            (yt.regexp_eatCapturingGroup = function (e) {
                if (e.eat(40)) {
                    if (
                        (this.options.ecmaVersion >= 9
                            ? this.regexp_groupSpecifier(e)
                            : 63 === e.current() && e.raise("Invalid group"),
                        this.regexp_disjunction(e),
                        e.eat(41))
                    )
                        return (e.numCapturingParens += 1), !0;
                    e.raise("Unterminated group");
                }
                return !1;
            }),
            (yt.regexp_eatExtendedAtom = function (e) {
                return (
                    e.eat(46) ||
                    this.regexp_eatReverseSolidusAtomEscape(e) ||
                    this.regexp_eatCharacterClass(e) ||
                    this.regexp_eatUncapturingGroup(e) ||
                    this.regexp_eatCapturingGroup(e) ||
                    this.regexp_eatInvalidBracedQuantifier(e) ||
                    this.regexp_eatExtendedPatternCharacter(e)
                );
            }),
            (yt.regexp_eatInvalidBracedQuantifier = function (e) {
                return (
                    this.regexp_eatBracedQuantifier(e, !0) &&
                        e.raise("Nothing to repeat"),
                    !1
                );
            }),
            (yt.regexp_eatSyntaxCharacter = function (e) {
                var t = e.current();
                return !!bt(t) && ((e.lastIntValue = t), e.advance(), !0);
            }),
            (yt.regexp_eatPatternCharacters = function (e) {
                for (var t = e.pos, i = 0; -1 !== (i = e.current()) && !bt(i); )
                    e.advance();
                return e.pos !== t;
            }),
            (yt.regexp_eatExtendedPatternCharacter = function (e) {
                var t = e.current();
                return (
                    !(
                        -1 === t ||
                        36 === t ||
                        (t >= 40 && t <= 43) ||
                        46 === t ||
                        63 === t ||
                        91 === t ||
                        94 === t ||
                        124 === t
                    ) && (e.advance(), !0)
                );
            }),
            (yt.regexp_groupSpecifier = function (e) {
                if (e.eat(63)) {
                    if (this.regexp_eatGroupName(e))
                        return (
                            -1 !== e.groupNames.indexOf(e.lastStringValue) &&
                                e.raise("Duplicate capture group name"),
                            void e.groupNames.push(e.lastStringValue)
                        );
                    e.raise("Invalid group");
                }
            }),
            (yt.regexp_eatGroupName = function (e) {
                if (((e.lastStringValue = ""), e.eat(60))) {
                    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
                        return !0;
                    e.raise("Invalid capture group name");
                }
                return !1;
            }),
            (yt.regexp_eatRegExpIdentifierName = function (e) {
                if (
                    ((e.lastStringValue = ""),
                    this.regexp_eatRegExpIdentifierStart(e))
                ) {
                    for (
                        e.lastStringValue += St(e.lastIntValue);
                        this.regexp_eatRegExpIdentifierPart(e);

                    )
                        e.lastStringValue += St(e.lastIntValue);
                    return !0;
                }
                return !1;
            }),
            (yt.regexp_eatRegExpIdentifierStart = function (e) {
                var t = e.pos,
                    i = e.current();
                return (
                    e.advance(),
                    92 === i &&
                        this.regexp_eatRegExpUnicodeEscapeSequence(e) &&
                        (i = e.lastIntValue),
                    (function (e) {
                        return Ce(e, !0) || 36 === e || 95 === e;
                    })(i)
                        ? ((e.lastIntValue = i), !0)
                        : ((e.pos = t), !1)
                );
            }),
            (yt.regexp_eatRegExpIdentifierPart = function (e) {
                var t = e.pos,
                    i = e.current();
                return (
                    e.advance(),
                    92 === i &&
                        this.regexp_eatRegExpUnicodeEscapeSequence(e) &&
                        (i = e.lastIntValue),
                    (function (e) {
                        return (
                            me(e, !0) ||
                            36 === e ||
                            95 === e ||
                            8204 === e ||
                            8205 === e
                        );
                    })(i)
                        ? ((e.lastIntValue = i), !0)
                        : ((e.pos = t), !1)
                );
            }),
            (yt.regexp_eatAtomEscape = function (e) {
                return (
                    !!(
                        this.regexp_eatBackReference(e) ||
                        this.regexp_eatCharacterClassEscape(e) ||
                        this.regexp_eatCharacterEscape(e) ||
                        (e.switchN && this.regexp_eatKGroupName(e))
                    ) ||
                    (e.switchU &&
                        (99 === e.current() &&
                            e.raise("Invalid unicode escape"),
                        e.raise("Invalid escape")),
                    !1)
                );
            }),
            (yt.regexp_eatBackReference = function (e) {
                var t = e.pos;
                if (this.regexp_eatDecimalEscape(e)) {
                    var i = e.lastIntValue;
                    if (e.switchU)
                        return (
                            i > e.maxBackReference && (e.maxBackReference = i),
                            !0
                        );
                    if (i <= e.numCapturingParens) return !0;
                    e.pos = t;
                }
                return !1;
            }),
            (yt.regexp_eatKGroupName = function (e) {
                if (e.eat(107)) {
                    if (this.regexp_eatGroupName(e))
                        return e.backReferenceNames.push(e.lastStringValue), !0;
                    e.raise("Invalid named reference");
                }
                return !1;
            }),
            (yt.regexp_eatCharacterEscape = function (e) {
                return (
                    this.regexp_eatControlEscape(e) ||
                    this.regexp_eatCControlLetter(e) ||
                    this.regexp_eatZero(e) ||
                    this.regexp_eatHexEscapeSequence(e) ||
                    this.regexp_eatRegExpUnicodeEscapeSequence(e) ||
                    (!e.switchU &&
                        this.regexp_eatLegacyOctalEscapeSequence(e)) ||
                    this.regexp_eatIdentityEscape(e)
                );
            }),
            (yt.regexp_eatCControlLetter = function (e) {
                var t = e.pos;
                if (e.eat(99)) {
                    if (this.regexp_eatControlLetter(e)) return !0;
                    e.pos = t;
                }
                return !1;
            }),
            (yt.regexp_eatZero = function (e) {
                return (
                    48 === e.current() &&
                    !It(e.lookahead()) &&
                    ((e.lastIntValue = 0), e.advance(), !0)
                );
            }),
            (yt.regexp_eatControlEscape = function (e) {
                var t = e.current();
                return 116 === t
                    ? ((e.lastIntValue = 9), e.advance(), !0)
                    : 110 === t
                    ? ((e.lastIntValue = 10), e.advance(), !0)
                    : 118 === t
                    ? ((e.lastIntValue = 11), e.advance(), !0)
                    : 102 === t
                    ? ((e.lastIntValue = 12), e.advance(), !0)
                    : 114 === t && ((e.lastIntValue = 13), e.advance(), !0);
            }),
            (yt.regexp_eatControlLetter = function (e) {
                var t = e.current();
                return !!_t(t) && ((e.lastIntValue = t % 32), e.advance(), !0);
            }),
            (yt.regexp_eatRegExpUnicodeEscapeSequence = function (e) {
                var t = e.pos;
                if (e.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(e, 4)) {
                        var i = e.lastIntValue;
                        if (e.switchU && i >= 55296 && i <= 56319) {
                            var u = e.pos;
                            if (
                                e.eat(92) &&
                                e.eat(117) &&
                                this.regexp_eatFixedHexDigits(e, 4)
                            ) {
                                var s = e.lastIntValue;
                                if (s >= 56320 && s <= 57343)
                                    return (
                                        (e.lastIntValue =
                                            1024 * (i - 55296) +
                                            (s - 56320) +
                                            65536),
                                        !0
                                    );
                            }
                            (e.pos = u), (e.lastIntValue = i);
                        }
                        return !0;
                    }
                    if (
                        e.switchU &&
                        e.eat(123) &&
                        this.regexp_eatHexDigits(e) &&
                        e.eat(125) &&
                        (function (e) {
                            return e >= 0 && e <= 1114111;
                        })(e.lastIntValue)
                    )
                        return !0;
                    e.switchU && e.raise("Invalid unicode escape"), (e.pos = t);
                }
                return !1;
            }),
            (yt.regexp_eatIdentityEscape = function (e) {
                if (e.switchU)
                    return (
                        !!this.regexp_eatSyntaxCharacter(e) ||
                        (!!e.eat(47) && ((e.lastIntValue = 47), !0))
                    );
                var t = e.current();
                return (
                    !(99 === t || (e.switchN && 107 === t)) &&
                    ((e.lastIntValue = t), e.advance(), !0)
                );
            }),
            (yt.regexp_eatDecimalEscape = function (e) {
                e.lastIntValue = 0;
                var t = e.current();
                if (t >= 49 && t <= 57) {
                    do {
                        (e.lastIntValue = 10 * e.lastIntValue + (t - 48)),
                            e.advance();
                    } while ((t = e.current()) >= 48 && t <= 57);
                    return !0;
                }
                return !1;
            }),
            (yt.regexp_eatCharacterClassEscape = function (e) {
                var t = e.current();
                if (
                    (function (e) {
                        return (
                            100 === e ||
                            68 === e ||
                            115 === e ||
                            83 === e ||
                            119 === e ||
                            87 === e
                        );
                    })(t)
                )
                    return (e.lastIntValue = -1), e.advance(), !0;
                if (
                    e.switchU &&
                    this.options.ecmaVersion >= 9 &&
                    (80 === t || 112 === t)
                ) {
                    if (
                        ((e.lastIntValue = -1),
                        e.advance(),
                        e.eat(123) &&
                            this.regexp_eatUnicodePropertyValueExpression(e) &&
                            e.eat(125))
                    )
                        return !0;
                    e.raise("Invalid property name");
                }
                return !1;
            }),
            (yt.regexp_eatUnicodePropertyValueExpression = function (e) {
                var t = e.pos;
                if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                    var i = e.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(e)) {
                        var u = e.lastStringValue;
                        return (
                            this.regexp_validateUnicodePropertyNameAndValue(
                                e,
                                i,
                                u
                            ),
                            !0
                        );
                    }
                }
                if (
                    ((e.pos = t),
                    this.regexp_eatLoneUnicodePropertyNameOrValue(e))
                ) {
                    var s = e.lastStringValue;
                    return (
                        this.regexp_validateUnicodePropertyNameOrValue(e, s), !0
                    );
                }
                return !1;
            }),
            (yt.regexp_validateUnicodePropertyNameAndValue = function (
                e,
                t,
                i
            ) {
                Le(e.unicodeProperties.nonBinary, t) ||
                    e.raise("Invalid property name"),
                    e.unicodeProperties.nonBinary[t].test(i) ||
                        e.raise("Invalid property value");
            }),
            (yt.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
                e.unicodeProperties.binary.test(t) ||
                    e.raise("Invalid property name");
            }),
            (yt.regexp_eatUnicodePropertyName = function (e) {
                var t = 0;
                for (e.lastStringValue = ""; kt((t = e.current())); )
                    (e.lastStringValue += St(t)), e.advance();
                return "" !== e.lastStringValue;
            }),
            (yt.regexp_eatUnicodePropertyValue = function (e) {
                var t = 0;
                for (e.lastStringValue = ""; wt((t = e.current())); )
                    (e.lastStringValue += St(t)), e.advance();
                return "" !== e.lastStringValue;
            }),
            (yt.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
                return this.regexp_eatUnicodePropertyValue(e);
            }),
            (yt.regexp_eatCharacterClass = function (e) {
                if (e.eat(91)) {
                    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93)))
                        return !0;
                    e.raise("Unterminated character class");
                }
                return !1;
            }),
            (yt.regexp_classRanges = function (e) {
                for (; this.regexp_eatClassAtom(e); ) {
                    var t = e.lastIntValue;
                    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                        var i = e.lastIntValue;
                        !e.switchU ||
                            (-1 !== t && -1 !== i) ||
                            e.raise("Invalid character class"),
                            -1 !== t &&
                                -1 !== i &&
                                t > i &&
                                e.raise(
                                    "Range out of order in character class"
                                );
                    }
                }
            }),
            (yt.regexp_eatClassAtom = function (e) {
                var t = e.pos;
                if (e.eat(92)) {
                    if (this.regexp_eatClassEscape(e)) return !0;
                    if (e.switchU) {
                        var i = e.current();
                        (99 === i || Lt(i)) && e.raise("Invalid class escape"),
                            e.raise("Invalid escape");
                    }
                    e.pos = t;
                }
                var u = e.current();
                return 93 !== u && ((e.lastIntValue = u), e.advance(), !0);
            }),
            (yt.regexp_eatClassEscape = function (e) {
                var t = e.pos;
                if (e.eat(98)) return (e.lastIntValue = 8), !0;
                if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
                if (!e.switchU && e.eat(99)) {
                    if (this.regexp_eatClassControlLetter(e)) return !0;
                    e.pos = t;
                }
                return (
                    this.regexp_eatCharacterClassEscape(e) ||
                    this.regexp_eatCharacterEscape(e)
                );
            }),
            (yt.regexp_eatClassControlLetter = function (e) {
                var t = e.current();
                return (
                    !(!It(t) && 95 !== t) &&
                    ((e.lastIntValue = t % 32), e.advance(), !0)
                );
            }),
            (yt.regexp_eatHexEscapeSequence = function (e) {
                var t = e.pos;
                if (e.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                    e.switchU && e.raise("Invalid escape"), (e.pos = t);
                }
                return !1;
            }),
            (yt.regexp_eatDecimalDigits = function (e) {
                var t = e.pos,
                    i = 0;
                for (e.lastIntValue = 0; It((i = e.current())); )
                    (e.lastIntValue = 10 * e.lastIntValue + (i - 48)),
                        e.advance();
                return e.pos !== t;
            }),
            (yt.regexp_eatHexDigits = function (e) {
                var t = e.pos,
                    i = 0;
                for (e.lastIntValue = 0; Pt((i = e.current())); )
                    (e.lastIntValue = 16 * e.lastIntValue + Tt(i)), e.advance();
                return e.pos !== t;
            }),
            (yt.regexp_eatLegacyOctalEscapeSequence = function (e) {
                if (this.regexp_eatOctalDigit(e)) {
                    var t = e.lastIntValue;
                    if (this.regexp_eatOctalDigit(e)) {
                        var i = e.lastIntValue;
                        t <= 3 && this.regexp_eatOctalDigit(e)
                            ? (e.lastIntValue = 64 * t + 8 * i + e.lastIntValue)
                            : (e.lastIntValue = 8 * t + i);
                    } else e.lastIntValue = t;
                    return !0;
                }
                return !1;
            }),
            (yt.regexp_eatOctalDigit = function (e) {
                var t = e.current();
                return Lt(t)
                    ? ((e.lastIntValue = t - 48), e.advance(), !0)
                    : ((e.lastIntValue = 0), !1);
            }),
            (yt.regexp_eatFixedHexDigits = function (e, t) {
                var i = e.pos;
                e.lastIntValue = 0;
                for (var u = 0; u < t; ++u) {
                    var s = e.current();
                    if (!Pt(s)) return (e.pos = i), !1;
                    (e.lastIntValue = 16 * e.lastIntValue + Tt(s)), e.advance();
                }
                return !0;
            });
        var Nt = function (e) {
                (this.type = e.type),
                    (this.value = e.value),
                    (this.start = e.start),
                    (this.end = e.end),
                    e.options.locations &&
                        (this.loc = new Me(e, e.startLoc, e.endLoc)),
                    e.options.ranges && (this.range = [e.start, e.end]);
            },
            Vt = Ke.prototype;
        function Rt(e) {
            return e <= 65535
                ? String.fromCharCode(e)
                : ((e -= 65536),
                  String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
        }
        (Vt.next = function () {
            this.options.onToken && this.options.onToken(new Nt(this)),
                (this.lastTokEnd = this.end),
                (this.lastTokStart = this.start),
                (this.lastTokEndLoc = this.endLoc),
                (this.lastTokStartLoc = this.startLoc),
                this.nextToken();
        }),
            (Vt.getToken = function () {
                return this.next(), new Nt(this);
            }),
            "undefined" !== typeof Symbol &&
                (Vt[Symbol.iterator] = function () {
                    var e = this;
                    return {
                        next: function () {
                            var t = e.getToken();
                            return { done: t.type === ve.eof, value: t };
                        },
                    };
                }),
            (Vt.curContext = function () {
                return this.context[this.context.length - 1];
            }),
            (Vt.nextToken = function () {
                var e = this.curContext();
                return (
                    (e && e.preserveSpace) || this.skipSpace(),
                    (this.start = this.pos),
                    this.options.locations &&
                        (this.startLoc = this.curPosition()),
                    this.pos >= this.input.length
                        ? this.finishToken(ve.eof)
                        : e.override
                        ? e.override(this)
                        : void this.readToken(this.fullCharCodeAtPos())
                );
            }),
            (Vt.readToken = function (e) {
                return Ce(e, this.options.ecmaVersion >= 6) || 92 === e
                    ? this.readWord()
                    : this.getTokenFromCode(e);
            }),
            (Vt.fullCharCodeAtPos = function () {
                var e = this.input.charCodeAt(this.pos);
                return e <= 55295 || e >= 57344
                    ? e
                    : (e << 10) +
                          this.input.charCodeAt(this.pos + 1) -
                          56613888;
            }),
            (Vt.skipBlockComment = function () {
                var e,
                    t = this.options.onComment && this.curPosition(),
                    i = this.pos,
                    u = this.input.indexOf("*/", (this.pos += 2));
                if (
                    (-1 === u &&
                        this.raise(this.pos - 2, "Unterminated comment"),
                    (this.pos = u + 2),
                    this.options.locations)
                )
                    for (
                        be.lastIndex = i;
                        (e = be.exec(this.input)) && e.index < this.pos;

                    )
                        ++this.curLine,
                            (this.lineStart = e.index + e[0].length);
                this.options.onComment &&
                    this.options.onComment(
                        !0,
                        this.input.slice(i + 2, u),
                        i,
                        this.pos,
                        t,
                        this.curPosition()
                    );
            }),
            (Vt.skipLineComment = function (e) {
                for (
                    var t = this.pos,
                        i = this.options.onComment && this.curPosition(),
                        u = this.input.charCodeAt((this.pos += e));
                    this.pos < this.input.length && !_e(u);

                )
                    u = this.input.charCodeAt(++this.pos);
                this.options.onComment &&
                    this.options.onComment(
                        !1,
                        this.input.slice(t + e, this.pos),
                        t,
                        this.pos,
                        i,
                        this.curPosition()
                    );
            }),
            (Vt.skipSpace = function () {
                e: for (; this.pos < this.input.length; ) {
                    var e = this.input.charCodeAt(this.pos);
                    switch (e) {
                        case 32:
                        case 160:
                            ++this.pos;
                            break;
                        case 13:
                            10 === this.input.charCodeAt(this.pos + 1) &&
                                ++this.pos;
                        case 10:
                        case 8232:
                        case 8233:
                            ++this.pos,
                                this.options.locations &&
                                    (++this.curLine,
                                    (this.lineStart = this.pos));
                            break;
                        case 47:
                            switch (this.input.charCodeAt(this.pos + 1)) {
                                case 42:
                                    this.skipBlockComment();
                                    break;
                                case 47:
                                    this.skipLineComment(2);
                                    break;
                                default:
                                    break e;
                            }
                            break;
                        default:
                            if (
                                !(
                                    (e > 8 && e < 14) ||
                                    (e >= 5760 &&
                                        ke.test(String.fromCharCode(e)))
                                )
                            )
                                break e;
                            ++this.pos;
                    }
                }
            }),
            (Vt.finishToken = function (e, t) {
                (this.end = this.pos),
                    this.options.locations &&
                        (this.endLoc = this.curPosition());
                var i = this.type;
                (this.type = e), (this.value = t), this.updateContext(i);
            }),
            (Vt.readToken_dot = function () {
                var e = this.input.charCodeAt(this.pos + 1);
                if (e >= 48 && e <= 57) return this.readNumber(!0);
                var t = this.input.charCodeAt(this.pos + 2);
                return this.options.ecmaVersion >= 6 && 46 === e && 46 === t
                    ? ((this.pos += 3), this.finishToken(ve.ellipsis))
                    : (++this.pos, this.finishToken(ve.dot));
            }),
            (Vt.readToken_slash = function () {
                var e = this.input.charCodeAt(this.pos + 1);
                return this.exprAllowed
                    ? (++this.pos, this.readRegexp())
                    : 61 === e
                    ? this.finishOp(ve.assign, 2)
                    : this.finishOp(ve.slash, 1);
            }),
            (Vt.readToken_mult_modulo_exp = function (e) {
                var t = this.input.charCodeAt(this.pos + 1),
                    i = 1,
                    u = 42 === e ? ve.star : ve.modulo;
                return (
                    this.options.ecmaVersion >= 7 &&
                        42 === e &&
                        42 === t &&
                        (++i,
                        (u = ve.starstar),
                        (t = this.input.charCodeAt(this.pos + 2))),
                    61 === t
                        ? this.finishOp(ve.assign, i + 1)
                        : this.finishOp(u, i)
                );
            }),
            (Vt.readToken_pipe_amp = function (e) {
                var t = this.input.charCodeAt(this.pos + 1);
                return t === e
                    ? this.finishOp(124 === e ? ve.logicalOR : ve.logicalAND, 2)
                    : 61 === t
                    ? this.finishOp(ve.assign, 2)
                    : this.finishOp(
                          124 === e ? ve.bitwiseOR : ve.bitwiseAND,
                          1
                      );
            }),
            (Vt.readToken_caret = function () {
                return 61 === this.input.charCodeAt(this.pos + 1)
                    ? this.finishOp(ve.assign, 2)
                    : this.finishOp(ve.bitwiseXOR, 1);
            }),
            (Vt.readToken_plus_min = function (e) {
                var t = this.input.charCodeAt(this.pos + 1);
                return t === e
                    ? 45 !== t ||
                      this.inModule ||
                      62 !== this.input.charCodeAt(this.pos + 2) ||
                      (0 !== this.lastTokEnd &&
                          !Se.test(this.input.slice(this.lastTokEnd, this.pos)))
                        ? this.finishOp(ve.incDec, 2)
                        : (this.skipLineComment(3),
                          this.skipSpace(),
                          this.nextToken())
                    : 61 === t
                    ? this.finishOp(ve.assign, 2)
                    : this.finishOp(ve.plusMin, 1);
            }),
            (Vt.readToken_lt_gt = function (e) {
                var t = this.input.charCodeAt(this.pos + 1),
                    i = 1;
                return t === e
                    ? ((i =
                          62 === e && 62 === this.input.charCodeAt(this.pos + 2)
                              ? 3
                              : 2),
                      61 === this.input.charCodeAt(this.pos + i)
                          ? this.finishOp(ve.assign, i + 1)
                          : this.finishOp(ve.bitShift, i))
                    : 33 !== t ||
                      60 !== e ||
                      this.inModule ||
                      45 !== this.input.charCodeAt(this.pos + 2) ||
                      45 !== this.input.charCodeAt(this.pos + 3)
                    ? (61 === t && (i = 2), this.finishOp(ve.relational, i))
                    : (this.skipLineComment(4),
                      this.skipSpace(),
                      this.nextToken());
            }),
            (Vt.readToken_eq_excl = function (e) {
                var t = this.input.charCodeAt(this.pos + 1);
                return 61 === t
                    ? this.finishOp(
                          ve.equality,
                          61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
                      )
                    : 61 === e && 62 === t && this.options.ecmaVersion >= 6
                    ? ((this.pos += 2), this.finishToken(ve.arrow))
                    : this.finishOp(61 === e ? ve.eq : ve.prefix, 1);
            }),
            (Vt.getTokenFromCode = function (e) {
                switch (e) {
                    case 46:
                        return this.readToken_dot();
                    case 40:
                        return ++this.pos, this.finishToken(ve.parenL);
                    case 41:
                        return ++this.pos, this.finishToken(ve.parenR);
                    case 59:
                        return ++this.pos, this.finishToken(ve.semi);
                    case 44:
                        return ++this.pos, this.finishToken(ve.comma);
                    case 91:
                        return ++this.pos, this.finishToken(ve.bracketL);
                    case 93:
                        return ++this.pos, this.finishToken(ve.bracketR);
                    case 123:
                        return ++this.pos, this.finishToken(ve.braceL);
                    case 125:
                        return ++this.pos, this.finishToken(ve.braceR);
                    case 58:
                        return ++this.pos, this.finishToken(ve.colon);
                    case 63:
                        return ++this.pos, this.finishToken(ve.question);
                    case 96:
                        if (this.options.ecmaVersion < 6) break;
                        return ++this.pos, this.finishToken(ve.backQuote);
                    case 48:
                        var t = this.input.charCodeAt(this.pos + 1);
                        if (120 === t || 88 === t)
                            return this.readRadixNumber(16);
                        if (this.options.ecmaVersion >= 6) {
                            if (111 === t || 79 === t)
                                return this.readRadixNumber(8);
                            if (98 === t || 66 === t)
                                return this.readRadixNumber(2);
                        }
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return this.readNumber(!1);
                    case 34:
                    case 39:
                        return this.readString(e);
                    case 47:
                        return this.readToken_slash();
                    case 37:
                    case 42:
                        return this.readToken_mult_modulo_exp(e);
                    case 124:
                    case 38:
                        return this.readToken_pipe_amp(e);
                    case 94:
                        return this.readToken_caret();
                    case 43:
                    case 45:
                        return this.readToken_plus_min(e);
                    case 60:
                    case 62:
                        return this.readToken_lt_gt(e);
                    case 61:
                    case 33:
                        return this.readToken_eq_excl(e);
                    case 126:
                        return this.finishOp(ve.prefix, 1);
                }
                this.raise(this.pos, "Unexpected character '" + Rt(e) + "'");
            }),
            (Vt.finishOp = function (e, t) {
                var i = this.input.slice(this.pos, this.pos + t);
                return (this.pos += t), this.finishToken(e, i);
            }),
            (Vt.readRegexp = function () {
                for (var e, t, i = this.pos; ; ) {
                    this.pos >= this.input.length &&
                        this.raise(i, "Unterminated regular expression");
                    var u = this.input.charAt(this.pos);
                    if (
                        (Se.test(u) &&
                            this.raise(i, "Unterminated regular expression"),
                        e)
                    )
                        e = !1;
                    else {
                        if ("[" === u) t = !0;
                        else if ("]" === u && t) t = !1;
                        else if ("/" === u && !t) break;
                        e = "\\" === u;
                    }
                    ++this.pos;
                }
                var s = this.input.slice(i, this.pos);
                ++this.pos;
                var r = this.pos,
                    n = this.readWord1();
                this.containsEsc && this.unexpected(r);
                var a = this.regexpState || (this.regexpState = new vt(this));
                a.reset(i, s, n),
                    this.validateRegExpFlags(a),
                    this.validateRegExpPattern(a);
                var o = null;
                try {
                    o = new RegExp(s, n);
                } catch (h) {}
                return this.finishToken(ve.regexp, {
                    pattern: s,
                    flags: n,
                    value: o,
                });
            }),
            (Vt.readInt = function (e, t) {
                for (
                    var i = this.pos, u = 0, s = 0, r = null == t ? 1 / 0 : t;
                    s < r;
                    ++s
                ) {
                    var n = this.input.charCodeAt(this.pos),
                        a = void 0;
                    if (
                        (a =
                            n >= 97
                                ? n - 97 + 10
                                : n >= 65
                                ? n - 65 + 10
                                : n >= 48 && n <= 57
                                ? n - 48
                                : 1 / 0) >= e
                    )
                        break;
                    ++this.pos, (u = u * e + a);
                }
                return this.pos === i || (null != t && this.pos - i !== t)
                    ? null
                    : u;
            }),
            (Vt.readRadixNumber = function (e) {
                var t = this.pos;
                this.pos += 2;
                var i = this.readInt(e);
                return (
                    null == i &&
                        this.raise(
                            this.start + 2,
                            "Expected number in radix " + e
                        ),
                    this.options.ecmaVersion >= 11 &&
                    110 === this.input.charCodeAt(this.pos)
                        ? ((i =
                              "undefined" !== typeof BigInt
                                  ? BigInt(this.input.slice(t, this.pos))
                                  : null),
                          ++this.pos)
                        : Ce(this.fullCharCodeAtPos()) &&
                          this.raise(
                              this.pos,
                              "Identifier directly after number"
                          ),
                    this.finishToken(ve.num, i)
                );
            }),
            (Vt.readNumber = function (e) {
                var t = this.pos;
                e ||
                    null !== this.readInt(10) ||
                    this.raise(t, "Invalid number");
                var i = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                i && this.strict && this.raise(t, "Invalid number"),
                    i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1);
                var u = this.input.charCodeAt(this.pos);
                if (!i && !e && this.options.ecmaVersion >= 11 && 110 === u) {
                    var s = this.input.slice(t, this.pos),
                        r = "undefined" !== typeof BigInt ? BigInt(s) : null;
                    return (
                        ++this.pos,
                        Ce(this.fullCharCodeAtPos()) &&
                            this.raise(
                                this.pos,
                                "Identifier directly after number"
                            ),
                        this.finishToken(ve.num, r)
                    );
                }
                46 !== u ||
                    i ||
                    (++this.pos,
                    this.readInt(10),
                    (u = this.input.charCodeAt(this.pos))),
                    (69 !== u && 101 !== u) ||
                        i ||
                        ((43 !== (u = this.input.charCodeAt(++this.pos)) &&
                            45 !== u) ||
                            ++this.pos,
                        null === this.readInt(10) &&
                            this.raise(t, "Invalid number")),
                    Ce(this.fullCharCodeAtPos()) &&
                        this.raise(
                            this.pos,
                            "Identifier directly after number"
                        );
                var n = this.input.slice(t, this.pos),
                    a = i ? parseInt(n, 8) : parseFloat(n);
                return this.finishToken(ve.num, a);
            }),
            (Vt.readCodePoint = function () {
                var e;
                if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var t = ++this.pos;
                    (e = this.readHexChar(
                        this.input.indexOf("}", this.pos) - this.pos
                    )),
                        ++this.pos,
                        e > 1114111 &&
                            this.invalidStringToken(
                                t,
                                "Code point out of bounds"
                            );
                } else e = this.readHexChar(4);
                return e;
            }),
            (Vt.readString = function (e) {
                for (var t = "", i = ++this.pos; ; ) {
                    this.pos >= this.input.length &&
                        this.raise(this.start, "Unterminated string constant");
                    var u = this.input.charCodeAt(this.pos);
                    if (u === e) break;
                    92 === u
                        ? ((t += this.input.slice(i, this.pos)),
                          (t += this.readEscapedChar(!1)),
                          (i = this.pos))
                        : (_e(u, this.options.ecmaVersion >= 10) &&
                              this.raise(
                                  this.start,
                                  "Unterminated string constant"
                              ),
                          ++this.pos);
                }
                return (
                    (t += this.input.slice(i, this.pos++)),
                    this.finishToken(ve.string, t)
                );
            });
        var Mt = {};
        (Vt.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
                this.readTmplToken();
            } catch (e) {
                if (e !== Mt) throw e;
                this.readInvalidTemplateToken();
            }
            this.inTemplateElement = !1;
        }),
            (Vt.invalidStringToken = function (e, t) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                    throw Mt;
                this.raise(e, t);
            }),
            (Vt.readTmplToken = function () {
                for (var e = "", t = this.pos; ; ) {
                    this.pos >= this.input.length &&
                        this.raise(this.start, "Unterminated template");
                    var i = this.input.charCodeAt(this.pos);
                    if (
                        96 === i ||
                        (36 === i &&
                            123 === this.input.charCodeAt(this.pos + 1))
                    )
                        return this.pos !== this.start ||
                            (this.type !== ve.template &&
                                this.type !== ve.invalidTemplate)
                            ? ((e += this.input.slice(t, this.pos)),
                              this.finishToken(ve.template, e))
                            : 36 === i
                            ? ((this.pos += 2),
                              this.finishToken(ve.dollarBraceL))
                            : (++this.pos, this.finishToken(ve.backQuote));
                    if (92 === i)
                        (e += this.input.slice(t, this.pos)),
                            (e += this.readEscapedChar(!0)),
                            (t = this.pos);
                    else if (_e(i)) {
                        switch (
                            ((e += this.input.slice(t, this.pos)),
                            ++this.pos,
                            i)
                        ) {
                            case 13:
                                10 === this.input.charCodeAt(this.pos) &&
                                    ++this.pos;
                            case 10:
                                e += "\n";
                                break;
                            default:
                                e += String.fromCharCode(i);
                        }
                        this.options.locations &&
                            (++this.curLine, (this.lineStart = this.pos)),
                            (t = this.pos);
                    } else ++this.pos;
                }
            }),
            (Vt.readInvalidTemplateToken = function () {
                for (; this.pos < this.input.length; this.pos++)
                    switch (this.input[this.pos]) {
                        case "\\":
                            ++this.pos;
                            break;
                        case "$":
                            if ("{" !== this.input[this.pos + 1]) break;
                        case "`":
                            return this.finishToken(
                                ve.invalidTemplate,
                                this.input.slice(this.start, this.pos)
                            );
                    }
                this.raise(this.start, "Unterminated template");
            }),
            (Vt.readEscapedChar = function (e) {
                var t = this.input.charCodeAt(++this.pos);
                switch ((++this.pos, t)) {
                    case 110:
                        return "\n";
                    case 114:
                        return "\r";
                    case 120:
                        return String.fromCharCode(this.readHexChar(2));
                    case 117:
                        return Rt(this.readCodePoint());
                    case 116:
                        return "\t";
                    case 98:
                        return "\b";
                    case 118:
                        return "\v";
                    case 102:
                        return "\f";
                    case 13:
                        10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                        return (
                            this.options.locations &&
                                ((this.lineStart = this.pos), ++this.curLine),
                            ""
                        );
                    default:
                        if (t >= 48 && t <= 55) {
                            var i = this.input
                                    .substr(this.pos - 1, 3)
                                    .match(/^[0-7]+/)[0],
                                u = parseInt(i, 8);
                            return (
                                u > 255 &&
                                    ((i = i.slice(0, -1)),
                                    (u = parseInt(i, 8))),
                                (this.pos += i.length - 1),
                                (t = this.input.charCodeAt(this.pos)),
                                ("0" === i && 56 !== t && 57 !== t) ||
                                    (!this.strict && !e) ||
                                    this.invalidStringToken(
                                        this.pos - 1 - i.length,
                                        e
                                            ? "Octal literal in template string"
                                            : "Octal literal in strict mode"
                                    ),
                                String.fromCharCode(u)
                            );
                        }
                        return _e(t) ? "" : String.fromCharCode(t);
                }
            }),
            (Vt.readHexChar = function (e) {
                var t = this.pos,
                    i = this.readInt(16, e);
                return (
                    null === i &&
                        this.invalidStringToken(
                            t,
                            "Bad character escape sequence"
                        ),
                    i
                );
            }),
            (Vt.readWord1 = function () {
                this.containsEsc = !1;
                for (
                    var e = "",
                        t = !0,
                        i = this.pos,
                        u = this.options.ecmaVersion >= 6;
                    this.pos < this.input.length;

                ) {
                    var s = this.fullCharCodeAtPos();
                    if (me(s, u)) this.pos += s <= 65535 ? 1 : 2;
                    else {
                        if (92 !== s) break;
                        (this.containsEsc = !0),
                            (e += this.input.slice(i, this.pos));
                        var r = this.pos;
                        117 !== this.input.charCodeAt(++this.pos) &&
                            this.invalidStringToken(
                                this.pos,
                                "Expecting Unicode escape sequence \\uXXXX"
                            ),
                            ++this.pos;
                        var n = this.readCodePoint();
                        (t ? Ce : me)(n, u) ||
                            this.invalidStringToken(
                                r,
                                "Invalid Unicode escape"
                            ),
                            (e += Rt(n)),
                            (i = this.pos);
                    }
                    t = !1;
                }
                return e + this.input.slice(i, this.pos);
            }),
            (Vt.readWord = function () {
                var e = this.readWord1(),
                    t = ve.name;
                return (
                    this.keywords.test(e) &&
                        (this.containsEsc &&
                            this.raiseRecoverable(
                                this.start,
                                "Escape sequence in keyword " + e
                            ),
                        (t = Be[e])),
                    this.finishToken(t, e)
                );
            }),
            (self.onmessage = function (e) {
                var t = (function (e) {
                    var t =
                        ((i = e),
                        (u = { sourceType: "module" }),
                        Ke.parse(i, u));
                    var i, u;
                    return re(t, { comment: !1 });
                })(e.data);
                self.postMessage(t);
            });
    },
]);

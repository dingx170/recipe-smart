"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempPageRoute = void 0;
class TempPageRoute {
    static registerRoutes(pageRoute) {
        pageRoute.get('/index', (req, res) => res.render('index'));
    }
}
exports.TempPageRoute = TempPageRoute;

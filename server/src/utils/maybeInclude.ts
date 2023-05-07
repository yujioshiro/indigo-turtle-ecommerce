import { NextFunction } from 'express';

export function onlyInclude(middleware: Function, includeRoutes: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalUrl = (req as any).originalUrl;

    for (let i = 0; i < includeRoutes.length; i++) {
      if (originalUrl === includeRoutes[i]) return middleware(req, res, next);
    }

    return next();
  };
}

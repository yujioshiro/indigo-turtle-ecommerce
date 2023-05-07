import { NextFunction } from 'express';

export function maybeExclude(middleware: Function, excludeRoutes: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalUrl = (req as any).originalUrl;

    for (let i = 0; i < excludeRoutes.length; i++) {
      if (originalUrl === excludeRoutes[i]) return next();
    }

    middleware(req, res, next);
    return;
  };
}

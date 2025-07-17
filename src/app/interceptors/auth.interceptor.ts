import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
let token=localStorage.getItem("applicationtoken")

if (token!=null) {

  let clonedToken= req.clone({
    headers:req.headers.set("token",token)
  })
  return next(clonedToken)
}
  return next(req);
};

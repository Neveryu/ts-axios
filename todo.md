


# 跨域 withCredentials

# XSRF 防御
  XSRF 又名 CSRF，跨站请求伪造，它是前端常见的一种攻击方式。

  用户登陆了网站A，在浏览器上留有网站A的cookie，用户浏览网站B时，网站B向网站A发起了一个请求，并withCredentials:true，带上了网站A的cookie，网站A以为这是一个正常的用户请求。网站B就达到跨站请求攻击的目的了。

  CSRF的防御手段有很多，比如验证请求的 referer，但是 referer也是可以伪造的。所以杜绝此类攻击的一种方式是服务器端要求每次请求都包含一个token，这个token不在前端生成，而是在我们每次访问站点的时候生成，并通过 set-cookie 的方式种到客户端。然后客户端发送请求的时候，从cookie中对应的字段读出token，然后添加到请求 headers 中。这样服务端就可以从请求 headers 中读取这个token并验证。由于这个token是很难伪造的。所以就能区分这个请求是否是用户正常发起的。


对于我们的 ts-axios 库，我们要自动把这几件事做了，每次发送请求的时候，从cookie中读取对应的token值，然后添加到请求headers中。我们允许用户配置xsrfCookieName 和 xsrfHeaderName，其中xsrfCookieName表示存储token的cookie名称，xsrfHeaderName表示请求headers中token对应的header名称。


//构建中去除
fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'fis-conf.js',
  'package.json',
  'pkg/**'
]);
//开发环境  加md5，压缩
fis
.match('*.{js,css,png}', {
  useHash: true
})
.match('/dataJson/**', {
  release: '$0',
  useHash: false
})
.match('/dataJson/server.conf', {
  release: '/config/server.conf'
})
.match('*.js',{
	optimizer: null
})
.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})
.match('*.css',{
	optimizer: null,
  useSprite: true
})
.match('::package', {
  spriter: fis.plugin('csssprites')
})
.match('*.png', {
  optimizer: null
});


//生产环境
fis.media('prod')
.match('*.js',{
  optimizer: fis.plugin('uglify-js')
})
.match('*.less', {
  optimizer: fis.plugin('clean-css'),
  useSprite: true
})
.match('*.css',{
  optimizer: fis.plugin('clean-css')
})
.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
})
.match('*.png', {
  optimizer: fis.plugin('png-compressor')
})
.match('*.{less,css}', {
  packTo: '/static/aio.css'
})
.match('*.js', {
  packTo: '/static/aio.js'
});
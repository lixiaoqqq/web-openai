const isDev = process.env.NODE_ENV === 'development'

const config = {
  'development': {
    'host': 'https://mainssl.geekpark.net/api/',
    'account': 'https://account.geekpark.net/',
    'redis' : {
      'host': '127.0.0.1',
      'port': '6379'
    }
  },
  'production': {
    'host': 'https://mainssl.geekpark.net/api/',
    'account': 'https://account.geekpark.net/',
    'redis' : {
      'host': '192.168.124.238',
      'port': '6379'
    }
  }
}

module.exports = isDev ? config['development'] : config['production']

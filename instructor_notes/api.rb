require 'HTTParty'
require 'pp'

response = HTTParty.get('http://www.catfact.info/api/v1/facts.json')

pp response.code, response.message, response.headers.inspect

response.each_with_index do |res, index|
  pp res
end

require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'slim'


get '/' do
    slim :home
end

not_found do
    slim :not_found
end

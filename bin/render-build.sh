#!/usr/bin/env bash
# exit on error
set -o errexit

chmod +x bin/rails

bundle config set force_ruby_platform true
bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails


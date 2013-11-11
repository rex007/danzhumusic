set :application, 'danzhumusic'
set :repo_url, 'git@github.com:rex007/#{application}.git'
set :branch, "master"

# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/home/#{user}/www/#{application}'
set :scm, :git

# set :format, :pretty
# set :log_level, :debug
# set :pty, true

# set :linked_files, %w{config/database.yml}
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# set :default_env, { path: "/opt/ruby/bin:$PATH" }
# set :keep_releases, 5

# namespace :deploy do

#   %w[start stop restart].each do |command|
#     desc "#{command} unicorn server"
#     task command, roles: :app, except: {no_release: true} do
#       run "/etc/init.d/unicorn_#{application} #{command}"
#     end
#   end

#   task :setup_config, roles: :app do
#     sudo "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/site-enabled"
#     sudo "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_"
#     run "mkdir -p #{shared_path}/config"
#     put File.read("config/database.yml"), "#{shared_path}/config/database.yml"
#     puts 'Now edit the config files in #{shared_path}'
#   end
#   after "deploy:setup", "deploy:setup_config"

#   task :symlink_config, roles: :app do
#     run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
#   end
#   after "deploy:finalize_update", "deploy:symlink_config"

#   desc "Make sure local git is in sync with remote"
#   task :ckeck_revision, roles: :web do
#     unless `git rev-parse HEAD` == `git rev-parse origin/master`
#       puts "WARNING: HEAD is not the same as origin/master"
#       puts "Run `git push` to sync changes"
#       exit
#     end
#   end
#   before "deploy", "deploy:check_revision"
# end


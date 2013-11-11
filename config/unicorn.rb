root = "/home/d3javu/www/danzhumusic/current"
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"

listen "/tmp/unicorn.danzhumusic.sock"
worker_processes 20
timeout 30
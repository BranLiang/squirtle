require "google/cloud/tasks"

ENV["TASKS_CREDENTIALS"] = Base64.decode64(Rails.application.credentials.gcp[:app_client_credentials])

Cloudtasker.configure do |config|
  config.gcp_location_id = 'us-west1'
  config.gcp_project_id = 'bao-ke-meng'
  config.gcp_queue_prefix = 'squirtle'
  config.processor_host = Rails.env.production? ? 'https://squirtle.corran.cn' : 'http://localhost:3000'
end
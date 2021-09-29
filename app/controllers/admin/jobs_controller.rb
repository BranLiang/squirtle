class Admin::JobsController < AdminController
  skip_before_action :authenticate_user!

  def create
    SearchFreeTennisSpotsJob.perform_later
  end
end
class Admin::JobsController < AdminController
  skip_before_action :authenticate_user!

  def create
    DummyJob.perform_later
  end
end
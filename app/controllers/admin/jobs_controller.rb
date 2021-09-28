class Admin::JobsController < AdminController
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def create
    DummyJob.perform_later
  end
end
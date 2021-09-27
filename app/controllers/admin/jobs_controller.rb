class Admin::JobsController < AdminController
  def create
    DummyJob.perform_later
  end
end
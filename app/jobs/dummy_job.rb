class DummyJob < ApplicationJob
  queue_as :default

  def perform
    sleep 10
    logger.info("This is working!")
  end
end
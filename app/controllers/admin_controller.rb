class AdminController < ApplicationController
  layout "dashboard"
  before_action :authenticate_user!
end

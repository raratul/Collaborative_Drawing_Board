require "test_helper"

class DrawingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get drawings_create_url
    assert_response :success
  end
end

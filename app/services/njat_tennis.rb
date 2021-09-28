class NjatTennis
  include HTTParty
  base_uri 'https://at.njatsport.cn'

  def self.details(date = nil)
    response = get('/wxapp/product/details', query: {
      id: 78,
      time: date && date.to_time.to_i
    })
    JSON.parse(response)['data']
  end

  def self.free_spots(date = nil)
    details(date)["table_data"].flatten.select do |item|
      item["used"] == 0 && item["price"] == 0
    end
  end
end
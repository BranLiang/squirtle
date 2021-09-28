class NjatTennis
  include HTTParty
  base_uri 'https://at.njatsport.cn'

  def self.details
    response = get('/wxapp/product/details', query: {
      id: 78
    })
    JSON.parse(response)['data']
  end
end
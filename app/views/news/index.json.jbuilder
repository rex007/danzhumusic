json.array!(@news) do |news|
  json.extract! news, :title, :content, :image_url
  json.url news_url(news, format: :json)
end

json.array!(@news) do |news|
  json.extract! news, :content
  json.url news_url(news, format: :json)
end

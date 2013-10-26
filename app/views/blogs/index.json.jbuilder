json.array!(@blogs) do |blog|
  json.extract! blog, :title, :description, :image_url
  json.url blog_url(blog, format: :json)
end

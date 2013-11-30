json.array!(@blogs) do |blog|
  json.extract! blog, :title, :description, :image
  json.url blog_url(blog, format: :json)
end

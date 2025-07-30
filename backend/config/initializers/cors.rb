Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # use 'http://localhost:3000' in production/dev
    resource '*',
      headers: :any,
      methods: [:get, :post, :patch, :put, :delete]
  end
end

# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:8000',
            '127.0.0.1:8000',
            'http://host.docker.internal:8000',
            'http://host.docker.internal:4000',
            'localhost:4000',
            'http://localhost:8000/api/auth',
            'http://localhost:4000/api/auth/signin/github'

    resource "*",
      headers: :any,
      expose: %w[access-token uid client],
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
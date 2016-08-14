class User < ActiveRecord::Base

  has_secure_password
  # has_many :brews
  has_many :names
  has_many :websites

end

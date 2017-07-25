class Trip < ApplicationRecord
  validates :user_id, :dates, :status, :host_id, :message, presence: true
  validates :user_id, uniqueness: { scope: :host_id }

  belongs_to :host,
             class_name: "User",
             foreign_key: :host_id,
             primary_key: :id

  belongs_to :traveler,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id
end
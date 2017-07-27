class Reference < ApplicationRecord
  validates :comment, :user_id, :host_id, null: false
  validates_uniqueness_of :user_id, scope: :host_id

  belongs_to :host,
             class_name: "User",
             foreign_key: :host_id,
             primary_key: :id

  belongs_to :traveler,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id

end

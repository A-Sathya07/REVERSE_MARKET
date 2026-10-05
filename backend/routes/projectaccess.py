from flask import Blueprint, request, jsonify, session
from config import supabase

projectaccess_bp = Blueprint("projectaccess", __name__)


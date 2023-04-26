import csv
import json

from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Transpiles Django models into a Typescript type definition file'

    def add_arguments(self, parser):
        parser.add_argument('csv_filename', type=str)

    def handle(self, *args, csv_filename, **options):
        sections = []
        current_section = None

        with open(csv_filename, 'r') as fh:
            reader = csv.reader(fh)
            for i, row in enumerate(reader):
                if i < 3:
                    continue

                if row[1]:
                    current_section = {
                        "title": row[1],
                        "entries": [],
                    }
                    sections.append(current_section)
                elif row[5]:
                    current_section["entries"].append({
                        "English": row[2],
                        "Jaobon": row[5],
                    })

        print(json.dumps(sections, sort_keys=False, indent=2))
